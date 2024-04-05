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

import {Component, Input, OnInit} from '@angular/core';
import {MenuItem} from 'common';

@Component({
    selector: 'scrm-base-mobile-menu',
    templateUrl: './base-mobile-menu.component.html',
    styleUrls: []
})
export class BaseMobileMenuComponent implements OnInit {
    @Input() current: MenuItem;
    @Input() items: MenuItem[];
    @Input() all: MenuItem[];
    @Input() onClose: Function;
    @Input() navigationType: string = '';

    mainItems: MenuItem[];
    submenu: MenuItem[] = [];
    subNavItem: MenuItem;

    subNavigationType = 'mm';
    backLink = false;
    mobileSubNav = false;
    mainNavLink = true;
    isAdminNavbar: boolean = false;
    isAdminNavbarClicked: boolean = false;

    constructor() {
    }

    ngOnInit(): void {
        this.mainItems = this.items;

        if (this.navigationType !== 'gm' && this.current) {
            this.isAdminNavbar = this.current.isGroupedMenu;
            if(!this.current.isGroupedMenu) {
                this.mainItems = [this.current, ...this.items];
            }
        }
    }

    /**
     * Change subnavigation
     *
     * @param {object} event triggered
     * @param {object} items
     * @param navigationType
     * @param item
     */
    public changeSubNav(event: Event, items: MenuItem[], navigationType: string, item: MenuItem): void {
        this.mobileSubNav = !this.mobileSubNav;
        this.backLink = !this.backLink;
        this.mainNavLink = !this.mainNavLink;
        this.subNavItem = item;
        this.submenu = items;
        this.subNavigationType = navigationType;

        if(item.isGroupedMenu) {
            this.isAdminNavbarClicked = true;
            this.mainItems = this.items;
        } else {
            this.isAdminNavbarClicked = false;
            this.isAdminNavbar = false;
        }
    }

    /**
     * Set link flags
     */
    public navBackLink(): void {
        this.mobileSubNav = !this.mobileSubNav;
        this.backLink = !this.backLink;
        this.mainNavLink = !this.mainNavLink;
    }


    getItems() {

    }
}
