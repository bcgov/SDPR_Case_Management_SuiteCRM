<?php
/**
 * SuiteCRM is a customer relationship management program developed by SalesAgility Ltd.
 * Copyright (C) 2023 SalesAgility Ltd.
 *
 * This program is free software; you can redistribute it and/or modify it under
 * the terms of the GNU Affero General Public License version 3 as published by the
 * Free Software Foundation with the addition of the following permission added
 * to Section 15 as permitted in Section 7(a): FOR ANY PART OF THE COVERED WORK
 * IN WHICH THE COPYRIGHT IS OWNED BY SALESAGILITY, SALESAGILITY DISCLAIMS THE
 * WARRANTY OF NON INFRINGEMENT OF THIRD PARTY RIGHTS.
 *
 * This program is distributed in the hope that it will be useful, but WITHOUT
 * ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS
 * FOR A PARTICULAR PURPOSE. See the GNU Affero General Public License for more
 * details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 *
 * In accordance with Section 7(b) of the GNU Affero General Public License
 * version 3, these Appropriate Legal Notices must retain the display of the
 * "Supercharged by SuiteCRM" logo. If the display of the logos is not reasonably
 * feasible for technical reasons, the Appropriate Legal Notices must display
 * the words "Supercharged by SuiteCRM".
 */

namespace App\Engine\LegacyHandler;

use App\Engine\Service\CacheManagerInterface;
use Psr\Cache\CacheItemPoolInterface;
use Symfony\Component\HttpFoundation\Session\SessionInterface;
use Symfony\Contracts\Cache\CacheInterface;

class CacheManagerHandler extends LegacyHandler implements CacheManagerInterface
{
    public const HANDLER_KEY = 'cache-manager';

    /**
     * @var CacheInterface
     */

    protected $cache;

    /**
     * @var CacheItemPoolInterface
     */
    protected $cachePool;

    /**
     * @param string $projectDir
     * @param string $legacyDir
     * @param string $legacySessionName
     * @param string $defaultSessionName
     * @param LegacyScopeState $legacyScopeState
     * @param SessionInterface $session
     */
    public function __construct(
        string                 $projectDir,
        string                 $legacyDir,
        string                 $legacySessionName,
        string                 $defaultSessionName,
        LegacyScopeState       $legacyScopeState,
        SessionInterface       $session,
        CacheInterface         $cache,
        CacheItemPoolInterface $cachePool
    )
    {
        parent::__construct(
            $projectDir,
            $legacyDir,
            $legacySessionName,
            $defaultSessionName,
            $legacyScopeState,
            $session);
        $this->cache = $cache;
        $this->cachePool = $cachePool;
    }

    public function getHandlerKey(): string
    {
        return self::HANDLER_KEY;
    }

    public function markAsNeedsUpdate($key): void
    {
        $this->init();

        require_once "include/portability/Services/Cache/CacheManager.php";
        $cacheManager = new \CacheManager();
        $cacheManager->markAsNeedsUpdate($key);

        $this->close();
    }

    public function checkForCacheUpdate($keys): void
    {
        $this->init();

        global $db, $current_user;

        $query = "SELECT * FROM cache_rebuild WHERE cache_key='rebuild_all'";
        $result = $db->fetchOne($query);
        if (!empty($result)) {
            $this->cachePool->clear();
            $query = "DELETE FROM cache_rebuild ";
            $db->query($query);
            return;
        }

        $query = "SELECT * FROM cache_rebuild WHERE cache_key IN ('" . implode("', '", $keys) . "')";
        $result = $db->query($query);

        if (empty($result)) {
            return;
        }
        while ($row = $db->fetchByAssoc($result)) {
            foreach ($keys as $key) {
                if ($row['cache_key'] == $key && $row['rebuild'] == 1) {
                    $this->cache->delete($key);
                    $_SESSION[$current_user->user_name.'_PREFERENCES'] = [];
                    $query = "DELETE FROM cache_rebuild ";
                    $query .= "WHERE cache_key='$key'";
                    $db->query($query);
                }
            }
        }

        $this->close();
    }
}
