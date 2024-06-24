<?php
/**
 * SuiteCRM is a customer relationship management program developed by SalesAgility Ltd.
 * Copyright (C) 2021 SalesAgility Ltd.
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

namespace App\Routes\LegacyHandler;

use App\Engine\LegacyHandler\LegacyHandler;
use ClassicViewRoutingExclusionsManager;

class ClassicViewRoutingExclusionsHandler extends LegacyHandler
{
    public const HANDLER_KEY = 'classic-view-routing-exclusions';

    /**
     * Lazy initialized manager
     * @var ClassicViewRoutingExclusionsManager
     */
    protected $manager;

    /**
     * @inheritDoc
     */
    public function getHandlerKey(): string
    {
        return self::HANDLER_KEY;
    }

    /**
     * Get configured exclusions
     * @return array
     */
    public function get(): array
    {
        $this->init();

        $manager = $this->getManager();

        $result = $manager->getExclusions();

        $this->close();

        return $result;
    }

    /**
     * Get manager. Initialize it if needed
     * @return ClassicViewRoutingExclusionsManager
     */
    protected function getManager(): ClassicViewRoutingExclusionsManager
    {
        if ($this->manager !== null) {
            return $this->manager;
        }

        /* @noinspection PhpIncludeInspection */
        require_once 'include/portability/ClassicViewRoutingExclusionsManager.php';

        $this->manager = new ClassicViewRoutingExclusionsManager();

        return $this->manager;
    }
}
