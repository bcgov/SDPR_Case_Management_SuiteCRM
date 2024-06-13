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
import { OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { Favorite } from 'common';
import { ModuleNavigation } from '../../../services/navigation/module-navigation/module-navigation.service';
import { ModuleNameMapper } from '../../../services/navigation/module-name-mapper/module-name-mapper.service';
import { SystemConfigStore } from '../../../store/system-config/system-config.store';
import { MetadataStore } from '../../../store/metadata/metadata.store.service';
import { Subscription } from 'rxjs';
import * as i0 from "@angular/core";
export declare class BaseFavoritesComponent implements OnInit, OnDestroy, OnChanges {
    protected navigation: ModuleNavigation;
    protected nameMapper: ModuleNameMapper;
    protected configs: SystemConfigStore;
    protected metadata: MetadataStore;
    module: string;
    maxDisplayed: number;
    records: Favorite[];
    protected subs: Subscription[];
    constructor(navigation: ModuleNavigation, nameMapper: ModuleNameMapper, configs: SystemConfigStore, metadata: MetadataStore);
    ngOnInit(): void;
    ngOnDestroy(): void;
    ngOnChanges(changes: SimpleChanges): void;
    /**
     * Build route from recently viewed item
     * @param item
     */
    buildRoute(item: Favorite): string;
    /**
     * Init metadata subscription
     * @protected
     */
    protected initMetadata$(): void;
    /**
     * Clear subscription and data
     * @protected
     */
    protected clear(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<BaseFavoritesComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<BaseFavoritesComponent, "ng-component", never, { "module": { "alias": "module"; "required": false; }; }, {}, never, never, false, never>;
}
