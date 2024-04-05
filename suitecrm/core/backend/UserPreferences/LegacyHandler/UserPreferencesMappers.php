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

namespace App\UserPreferences\LegacyHandler;

use ApiPlatform\Core\Exception\ItemNotFoundException;

class UserPreferencesMappers
{
    protected const MSG_HANDLER_NOT_FOUND = 'UserPreference mapper is not defined';

    /**
     * @var UserPreferencesMapperInterface[]
     */
    protected $registry = [];

    /**
     * UserPreferencesMappers constructor.
     * @param iterable $handlers
     */
    public function __construct(iterable $handlers)
    {
        /**
         * @var UserPreferencesMapperInterface[]
         */
        $handlers = iterator_to_array($handlers);

        foreach ($handlers as $handler) {
            $type = $handler->getKey();
            $this->registry[$type] = $handler;
        }

    }

    /**
     * Get the mapper for the given key
     * @param string $userPreferenceKey
     * @return UserPreferencesMapperInterface
     */
    public function get(string $userPreferenceKey): UserPreferencesMapperInterface
    {

        if (empty($this->registry[$userPreferenceKey])) {
            throw new ItemNotFoundException(self::MSG_HANDLER_NOT_FOUND);
        }

        return $this->registry[$userPreferenceKey];
    }

    /**
     * Has mapper for the given key
     * @param string $userPreferenceKey
     * @return bool
     */
    public function hasMapper(string $userPreferenceKey): bool
    {
        if (empty($this->registry[$userPreferenceKey])) {
            return false;
        }

        return true;
    }
}
