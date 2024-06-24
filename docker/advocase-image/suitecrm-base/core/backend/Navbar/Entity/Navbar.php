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


namespace App\Navbar\Entity;

use ApiPlatform\Core\Annotation\ApiProperty;
use ApiPlatform\Core\Annotation\ApiResource;

/**
 * @ApiResource(
 *     attributes={"security"="is_granted('ROLE_USER')"},
 *     itemOperations={
 *          "get"
 *     },
 *     collectionOperations={
 *     },
 *     graphql={
 *         "item_query"
 *     }
 * )
 */
final class Navbar
{
    /**
     * @ApiProperty(identifier=true)
     */
    public $userID;

    /**
     * @var array
     * @ApiProperty
     */
    public $tabs;

    /**
     * @var array
     * @ApiProperty
     */
    public $groupedTabs;

    /**
     * @var array
     * @ApiProperty
     */
    public $userActionMenu;

    /**
     * @var array
     * @ApiProperty
     */
    public $modules;

    /**
     * @var int
     * @ApiProperty
     */
    public $maxTabs;

    /**
     * @var string
     * @ApiProperty
     */
    public $type;

    /**
     * @return array
     */
    public function toArray(): array
    {
        return [
            'id' => $this->userID,
            '_id' => $this->userID,
            'userID' => $this->userID,
            'tabs' => $this->tabs,
            'groupedTabs' => $this->groupedTabs,
            'userActionMenu' => $this->userActionMenu,
            'modules' => $this->modules,
            'maxTabs' => $this->maxTabs,
            'type' => $this->type,
            'quickActions' => $this->quickActions,
        ];
    }

    /**
     * @var array
     * @ApiProperty
     */
    public $quickActions;
}
