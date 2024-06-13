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
import { ElementRef, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { AppStateStore } from '../../store/app-state/app-state.store';
import * as i0 from "@angular/core";
export declare class ButtonLoadingDirective implements OnInit, OnDestroy, OnChanges {
    private el;
    private appStateStore;
    state: boolean;
    private subscription;
    private appLoading;
    constructor(el: ElementRef, appStateStore: AppStateStore);
    ngOnInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
    ngOnDestroy(): void;
    clickEvent(): void;
    /**
     * Calculate loading state and update loading
     */
    private updateComponent;
    /**
     * Calculate if is loading
     *
     * @returns {boolean} isLoading
     */
    private isLoading;
    /**
     * Disable or enable button
     *
     * @param {boolean} state to set
     */
    private setDisabledState;
    static ɵfac: i0.ɵɵFactoryDeclaration<ButtonLoadingDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<ButtonLoadingDirective, "[scrm-button-loading]", never, { "state": { "alias": "scrm-button-loading"; "required": false; }; }, {}, never, never, false, never>;
}
