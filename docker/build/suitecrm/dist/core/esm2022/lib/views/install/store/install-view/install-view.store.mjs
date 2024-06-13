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
import { Injectable } from '@angular/core';
import { BehaviorSubject, combineLatestWith, of } from 'rxjs';
import { deepClone, isVoid } from 'common';
import { distinctUntilChanged, map, shareReplay } from 'rxjs/operators';
import { RecordSaveGQL } from '../../../../store/record/graphql/api.record.save';
import { MessageService } from '../../../../services/message/message.service';
import { RecordManager } from '../../../../services/record/record.manager';
import { RecordFetchGQL } from '../../../../store/record/graphql/api.record.get';
import { RecordStoreFactory } from '../../../../store/record/record.store.factory';
import { LanguageStore } from '../../../../store/language/language.store';
import { trimEnd } from 'lodash-es';
import * as i0 from "@angular/core";
import * as i1 from "../../../../store/record/graphql/api.record.get";
import * as i2 from "../../../../store/record/graphql/api.record.save";
import * as i3 from "../../../../services/message/message.service";
import * as i4 from "../../../../services/record/record.manager";
import * as i5 from "../../../../store/record/record.store.factory";
import * as i6 from "../../../../store/language/language.store";
const initialState = {
    loading: false,
    mode: 'detail',
    params: {
        returnModule: '',
        returnId: '',
        returnAction: ''
    }
};
class InstallViewStore {
    constructor(recordFetchGQL, recordSaveGQL, message, recordManager, recordStoreFactory, language) {
        this.recordFetchGQL = recordFetchGQL;
        this.recordSaveGQL = recordSaveGQL;
        this.message = message;
        this.recordManager = recordManager;
        this.recordStoreFactory = recordStoreFactory;
        this.language = language;
        /** Internal Properties */
        this.cache$ = null;
        this.internalState = deepClone(initialState);
        this.store = new BehaviorSubject(this.internalState);
        this.state$ = this.store.asObservable();
        this.subs = [];
        this.recordStore = recordStoreFactory.create(this.getViewFieldsObservable());
        this.record$ = this.recordStore.state$.pipe(distinctUntilChanged());
        this.stagingRecord$ = this.recordStore.staging$.pipe(distinctUntilChanged());
        this.loading$ = this.state$.pipe(map(state => state.loading));
        this.mode$ = this.state$.pipe(map(state => state.mode));
        this.vm$ = this.record$.pipe(combineLatestWith(this.loading$), map(([record, loading]) => {
            this.vm = { record, loading };
            return this.vm;
        }));
        this.viewContext$ = this.record$.pipe(map(() => {
            return this.getViewContext();
        }));
    }
    get params() {
        return this.internalState.params || {};
    }
    set params(params) {
        this.updateState({
            ...this.internalState,
            params
        });
    }
    getViewContext() {
        return {
            record: this.getBaseRecord()
        };
    }
    getActions() {
        return of([]);
    }
    /**
     * Initial install view
     *
     * @param {string} mode to use
     * @param {object} params to set
     */
    init(mode = 'edit', params = {}) {
        this.setMode(mode);
        this.recordStore.init({
            id: '',
            module: 'install',
            attributes: {}
        });
    }
    /**
     * Clear observable cache
     */
    clear() {
        this.cache$ = null;
        this.updateState(deepClone(initialState));
    }
    /**
     * Clear
     */
    clearAuthBased() {
        this.clear();
    }
    /**
     * Get staging record
     *
     * @returns {string} ViewMode
     */
    getBaseRecord() {
        if (!this.internalState) {
            return null;
        }
        return this.recordStore.getBaseRecord();
    }
    /**
     * Get current view mode
     *
     * @returns {string} ViewMode
     */
    getMode() {
        if (!this.internalState) {
            return null;
        }
        return this.internalState.mode;
    }
    /**
     * Set new mode
     *
     * @param {string} mode ViewMode
     */
    setMode(mode) {
        this.updateState({ ...this.internalState, mode });
    }
    getLicenseText() {
        return this.language.getFieldLabel('SUITE8_LICENSE_CONTENT');
    }
    getMetadata() {
        this.url = window.location.origin + window.location.pathname;
        this.url = trimEnd(this.url, '/');
        return {
            actions: [],
            templateMeta: {
                maxColumns: 2,
                useTabs: true,
                tabDefs: {
                    LBL_CONFIG: {
                        newTab: true,
                        panelDefault: 'expanded'
                    }
                }
            },
            panels: [
                {
                    key: 'LBL_CONFIG',
                    display$: of(true).pipe(shareReplay(1)),
                    rows: [
                        {
                            cols: [
                                {
                                    name: 'site_host',
                                    label: 'LBL_SITECFG_URL',
                                    type: 'varchar',
                                    fieldDefinition: {
                                        "name": "site_host",
                                        "vname": "LBL_SITECFG_URL",
                                        "type": "varchar",
                                        "required": true,
                                        "default": this.url?.toString(),
                                        "defaultValueModes": ["create", "edit"]
                                    },
                                },
                                {
                                    name: 'demoData',
                                    label: 'LBL_DBCONF_DEMO_DATA',
                                    type: 'enum',
                                    fieldDefinition: {
                                        name: "demoData",
                                        vname: "LBL_DBCONF_DEMO_DATA",
                                        type: "enum",
                                        options: "__no_options__",
                                        required: true,
                                        "default": 'no',
                                        "defaultValueModes": ["create", "edit"],
                                        metadata: {
                                            extraOptions: [
                                                {
                                                    value: "yes",
                                                    labelKey: "LBL_YES",
                                                },
                                                {
                                                    value: "no",
                                                    labelKey: "LBL_NO",
                                                },
                                            ]
                                        }
                                    },
                                },
                            ]
                        },
                        {
                            cols: [
                                {
                                    name: 'db_config',
                                    label: 'LBL_DBCONF_TITLE',
                                    type: 'grouped-field',
                                    fieldDefinition: {
                                        name: "db_config",
                                        vname: "LBL_DBCONF_TITLE",
                                        type: "grouped-field",
                                        layout: [
                                            "db_username",
                                            "db_password",
                                            "db_host",
                                            "db_name",
                                            "db_port"
                                        ],
                                        display: "vertical",
                                        groupFields: {
                                            "db_username": {
                                                "name": "db_username",
                                                "type": "varchar",
                                                "vname": "LBL_DBCONF_SUITE_DB_USER",
                                                "labelKey": "LBL_DBCONF_SUITE_DB_USER",
                                                "label": "LBL_DBCONF_SUITE_DB_USER",
                                                "showLabel": ["*"],
                                                "required": true,
                                            },
                                            "db_password": {
                                                "name": "db_password",
                                                "type": "password",
                                                "vname": "LBL_DBCONF_DB_PASSWORD",
                                                "labelKey": "LBL_DBCONF_DB_PASSWORD",
                                                "showLabel": ["*"],
                                                "required": true,
                                            },
                                            "db_host": {
                                                "name": "db_host",
                                                "type": "varchar",
                                                "vname": "LBL_DBCONF_HOST_NAME",
                                                "labelKey": "LBL_DBCONF_HOST_NAME",
                                                "showLabel": ["*"],
                                                "required": true,
                                            },
                                            "db_name": {
                                                "name": "db_name",
                                                "type": "varchar",
                                                "vname": "LBL_DBCONF_DB_NAME",
                                                "labelKey": "LBL_DBCONF_DB_NAME",
                                                "showLabel": ["*"],
                                                "required": true,
                                            },
                                            "db_port": {
                                                "name": "db_port",
                                                "type": "varchar",
                                                "vname": "LBL_DBCONF_DB_PORT",
                                                "labelKey": "LBL_DBCONF_DB_PORT",
                                                "showLabel": ["*"],
                                                "required": false,
                                                "default": '3306',
                                                "defaultValueModes": ["create", "edit"]
                                            }
                                        },
                                        showLabel: {
                                            edit: ['*']
                                        }
                                    },
                                },
                                {
                                    name: 'admin_config',
                                    label: 'LBL_SITECFG_TITLE',
                                    type: 'grouped-field',
                                    fieldDefinition: {
                                        name: "admin_config",
                                        vname: "LBL_SITECFG_TITLE",
                                        type: "grouped-field",
                                        layout: [
                                            "site_username",
                                            "site_password",
                                        ],
                                        display: "vertical",
                                        groupFields: {
                                            "site_username": {
                                                "name": "site_username",
                                                "type": "varchar",
                                                "vname": "LBL_SITECFG_ADMIN_Name",
                                                "labelKey": "LBL_SITECFG_ADMIN_Name",
                                                "showLabel": ["edit"],
                                                "required": true,
                                                "default": "admin",
                                                "defaultValueModes": ["create", "edit"]
                                            },
                                            "site_password": {
                                                "name": "site_password",
                                                "type": "password",
                                                "vname": "LBL_SITECFG_ADMIN_PASS",
                                                "labelKey": "LBL_SITECFG_ADMIN_PASS",
                                                "showLabel": ["edit"],
                                                "required": true,
                                            },
                                        },
                                        showLabel: {
                                            edit: ['*']
                                        }
                                    },
                                }
                            ]
                        }
                    ]
                }
            ],
        };
    }
    getMetadata$() {
        return of(this.getMetadata());
    }
    getModuleName() {
        return 'install';
    }
    /**
     * Parse query params
     *
     * @param {object} params to set
     */
    parseParams(params = {}) {
        if (!params) {
            return;
        }
        const currentParams = { ...this.internalState.params };
        Object.keys(params).forEach(paramKey => {
            if (!isVoid(currentParams[paramKey])) {
                currentParams[paramKey] = params[paramKey];
                return;
            }
        });
        this.params = params;
    }
    /**
     * Update the state
     *
     * @param {object} state to set
     */
    updateState(state) {
        this.store.next(this.internalState = state);
    }
    getIgnoreSystemChecksField() {
        return this.recordStore.getStaging().fields['sys_check_option'];
    }
    /**
     * Get view fields observable
     *
     * @returns {object} Observable<ViewFieldDefinition[]>
     */
    getViewFieldsObservable() {
        return this.getMetadata$().pipe(map((meta) => {
            const fields = [];
            meta.panels.forEach(panel => {
                panel.rows.forEach(row => {
                    row.cols.forEach(col => {
                        fields.push(col);
                    });
                });
            });
            fields.push({
                "name": "sys_check_option",
                "type": "boolean",
                fieldDefinition: {
                    "name": "sys_check_option",
                    "type": "boolean",
                    "vname": "LBL_SYS_CHECK_WARNING",
                    "labelKey": "LBL_SYS_CHECK_WARNING",
                    "showLabel": ["edit"],
                    "required": false,
                    "value": 'false',
                    "default": 'false',
                    "defaultValueModes": ["create", "edit"]
                }
            });
            return fields;
        }));
    }
    static { this.ɵfac = function InstallViewStore_Factory(t) { return new (t || InstallViewStore)(i0.ɵɵinject(i1.RecordFetchGQL), i0.ɵɵinject(i2.RecordSaveGQL), i0.ɵɵinject(i3.MessageService), i0.ɵɵinject(i4.RecordManager), i0.ɵɵinject(i5.RecordStoreFactory), i0.ɵɵinject(i6.LanguageStore)); }; }
    static { this.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: InstallViewStore, factory: InstallViewStore.ɵfac }); }
}
export { InstallViewStore };
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(InstallViewStore, [{
        type: Injectable
    }], function () { return [{ type: i1.RecordFetchGQL }, { type: i2.RecordSaveGQL }, { type: i3.MessageService }, { type: i4.RecordManager }, { type: i5.RecordStoreFactory }, { type: i6.LanguageStore }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5zdGFsbC12aWV3LnN0b3JlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vY29yZS9hcHAvY29yZS9zcmMvbGliL3ZpZXdzL2luc3RhbGwvc3RvcmUvaW5zdGFsbC12aWV3L2luc3RhbGwtdmlldy5zdG9yZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBd0JHO0FBRUgsT0FBTyxFQUFDLFVBQVUsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUMsZUFBZSxFQUFpQixpQkFBaUIsRUFBYyxFQUFFLEVBQWUsTUFBTSxNQUFNLENBQUM7QUFDckcsT0FBTyxFQUVILFNBQVMsRUFJVCxNQUFNLEVBV1QsTUFBTSxRQUFRLENBQUM7QUFDaEIsT0FBTyxFQUFDLG9CQUFvQixFQUFFLEdBQUcsRUFBRSxXQUFXLEVBQUMsTUFBTSxnQkFBZ0IsQ0FBQztBQUd0RSxPQUFPLEVBQUMsYUFBYSxFQUFDLE1BQU0sa0RBQWtELENBQUM7QUFFL0UsT0FBTyxFQUFDLGNBQWMsRUFBQyxNQUFNLDhDQUE4QyxDQUFDO0FBQzVFLE9BQU8sRUFBQyxhQUFhLEVBQUMsTUFBTSw0Q0FBNEMsQ0FBQztBQUV6RSxPQUFPLEVBQUMsY0FBYyxFQUFDLE1BQU0saURBQWlELENBQUM7QUFFL0UsT0FBTyxFQUFDLGtCQUFrQixFQUFDLE1BQU0sK0NBQStDLENBQUM7QUFDakYsT0FBTyxFQUFDLGFBQWEsRUFBQyxNQUFNLDJDQUEyQyxDQUFDO0FBQ3hFLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxXQUFXLENBQUM7Ozs7Ozs7O0FBRXBDLE1BQU0sWUFBWSxHQUFxQjtJQUNuQyxPQUFPLEVBQUUsS0FBSztJQUNkLElBQUksRUFBRSxRQUFRO0lBQ2QsTUFBTSxFQUFFO1FBQ0osWUFBWSxFQUFFLEVBQUU7UUFDaEIsUUFBUSxFQUFFLEVBQUU7UUFDWixZQUFZLEVBQUUsRUFBRTtL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RSxDQUFDLE1BQU0sQ0FBQztvQkFDckIsVUFBVSxFQUFFLEtBQUs7b0JBQ2pCLE9BQU8sRUFBRSxPQUFPO29CQUNoQixTQUFTLEVBQUUsT0FBTztvQkFDbEIsbUJBQW1CLEVBQUUsQ0FBQyxRQUFRLEVBQUUsTUFBTSxDQUFDO2lCQUMxQzthQUNtQixDQUMzQixDQUFDO1lBRUYsT0FBTyxNQUFNLENBQUM7UUFDbEIsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNSLENBQUM7aUZBN1lRLGdCQUFnQjt1RUFBaEIsZ0JBQWdCLFdBQWhCLGdCQUFnQjs7U0FBaEIsZ0JBQWdCO3VGQUFoQixnQkFBZ0I7Y0FENUIsVUFBVSIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogU3VpdGVDUk0gaXMgYSBjdXN0b21lciByZWxhdGlvbnNoaXAgbWFuYWdlbWVudCBwcm9ncmFtIGRldmVsb3BlZCBieSBTYWxlc0FnaWxpdHkgTHRkLlxuICogQ29weXJpZ2h0IChDKSAyMDIxIFNhbGVzQWdpbGl0eSBMdGQuXG4gKlxuICogVGhpcyBwcm9ncmFtIGlzIGZyZWUgc29mdHdhcmU7IHlvdSBjYW4gcmVkaXN0cmlidXRlIGl0IGFuZC9vciBtb2RpZnkgaXQgdW5kZXJcbiAqIHRoZSB0ZXJtcyBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIHZlcnNpb24gMyBhcyBwdWJsaXNoZWQgYnkgdGhlXG4gKiBGcmVlIFNvZnR3YXJlIEZvdW5kYXRpb24gd2l0aCB0aGUgYWRkaXRpb24gb2YgdGhlIGZvbGxvd2luZyBwZXJtaXNzaW9uIGFkZGVkXG4gKiB0byBTZWN0aW9uIDE1IGFzIHBlcm1pdHRlZCBpbiBTZWN0aW9uIDcoYSk6IEZPUiBBTlkgUEFSVCBPRiBUSEUgQ09WRVJFRCBXT1JLXG4gKiBJTiBXSElDSCBUSEUgQ09QWVJJR0hUIElTIE9XTkVEIEJZIFNBTEVTQUdJTElUWSwgU0FMRVNBR0lMSVRZIERJU0NMQUlNUyBUSEVcbiAqIFdBUlJBTlRZIE9GIE5PTiBJTkZSSU5HRU1FTlQgT0YgVEhJUkQgUEFSVFkgUklHSFRTLlxuICpcbiAqIFRoaXMgcHJvZ3JhbSBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLCBidXQgV0lUSE9VVFxuICogQU5ZIFdBUlJBTlRZOyB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2YgTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1NcbiAqIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS4gU2VlIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgZm9yIG1vcmVcbiAqIGRldGFpbHMuXG4gKlxuICogWW91IHNob3VsZCBoYXZlIHJlY2VpdmVkIGEgY29weSBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4gKiBhbG9uZyB3aXRoIHRoaXMgcHJvZ3JhbS4gIElmIG5vdCwgc2VlIDxodHRwOi8vd3d3LmdudS5vcmcvbGljZW5zZXMvPi5cbiAqXG4gKiBJbiBhY2NvcmRhbmNlIHdpdGggU2VjdGlvbiA3KGIpIG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiAqIHZlcnNpb24gMywgdGhlc2UgQXBwcm9wcmlhdGUgTGVnYWwgTm90aWNlcyBtdXN0IHJldGFpbiB0aGUgZGlzcGxheSBvZiB0aGVcbiAqIFwiU3VwZXJjaGFyZ2VkIGJ5IFN1aXRlQ1JNXCIgbG9nby4gSWYgdGhlIGRpc3BsYXkgb2YgdGhlIGxvZ29zIGlzIG5vdCByZWFzb25hYmx5XG4gKiBmZWFzaWJsZSBmb3IgdGVjaG5pY2FsIHJlYXNvbnMsIHRoZSBBcHByb3ByaWF0ZSBMZWdhbCBOb3RpY2VzIG11c3QgZGlzcGxheVxuICogdGhlIHdvcmRzIFwiU3VwZXJjaGFyZ2VkIGJ5IFN1aXRlQ1JNXCIuXG4gKi9cblxuaW1wb3J0IHtJbmplY3RhYmxlfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7QmVoYXZpb3JTdWJqZWN0LCBjb21iaW5lTGF0ZXN0LCBjb21iaW5lTGF0ZXN0V2l0aCwgT2JzZXJ2YWJsZSwgb2YsIFN1YnNjcmlwdGlvbn0gZnJvbSAncnhqcyc7XG5pbXBvcnQge1xuICAgIEFjdGlvbixcbiAgICBkZWVwQ2xvbmUsXG4gICAgRmllbGQsXG4gICAgRmllbGREZWZpbml0aW9uLFxuICAgIEZpZWxkTWV0YWRhdGEsXG4gICAgaXNWb2lkLFxuICAgIE9wdGlvbixcbiAgICBQYW5lbCxcbiAgICBQYW5lbENlbGwsXG4gICAgUGFuZWxSb3csXG4gICAgUmVjb3JkLFxuICAgIFZpZXdDb250ZXh0LFxuICAgIFZpZXdGaWVsZERlZmluaXRpb24sXG4gICAgVmlld01vZGUsXG4gICAgVGFiRGVmaW5pdGlvbixcbiAgICBUYWJEZWZpbml0aW9uc1xufSBmcm9tICdjb21tb24nO1xuaW1wb3J0IHtkaXN0aW5jdFVudGlsQ2hhbmdlZCwgbWFwLCBzaGFyZVJlcGxheX0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHtJbnN0YWxsVmlld01ldGFkYXRhLCBJbnN0YWxsVmlld01vZGVsLCBJbnN0YWxsVmlld1N0YXRlfSBmcm9tICcuL2luc3RhbGwtdmlldy5zdG9yZS5tb2RlbCc7XG5pbXBvcnQge1N0YXRlU3RvcmV9IGZyb20gJy4uLy4uLy4uLy4uL3N0b3JlL3N0YXRlJztcbmltcG9ydCB7UmVjb3JkU2F2ZUdRTH0gZnJvbSAnLi4vLi4vLi4vLi4vc3RvcmUvcmVjb3JkL2dyYXBocWwvYXBpLnJlY29yZC5zYXZlJztcbmltcG9ydCB7UmVjb3JkVGVtcGxhdGVNZXRhZGF0YX0gZnJvbSAnLi4vLi4vLi4vLi4vc3RvcmUvbWV0YWRhdGEvbWV0YWRhdGEuc3RvcmUuc2VydmljZSc7XG5pbXBvcnQge01lc3NhZ2VTZXJ2aWNlfSBmcm9tICcuLi8uLi8uLi8uLi9zZXJ2aWNlcy9tZXNzYWdlL21lc3NhZ2Uuc2VydmljZSc7XG5pbXBvcnQge1JlY29yZE1hbmFnZXJ9IGZyb20gJy4uLy4uLy4uLy4uL3NlcnZpY2VzL3JlY29yZC9yZWNvcmQubWFuYWdlcic7XG5pbXBvcnQge1JlY29yZFN0b3JlfSBmcm9tICcuLi8uLi8uLi8uLi9zdG9yZS9yZWNvcmQvcmVjb3JkLnN0b3JlJztcbmltcG9ydCB7UmVjb3JkRmV0Y2hHUUx9IGZyb20gJy4uLy4uLy4uLy4uL3N0b3JlL3JlY29yZC9ncmFwaHFsL2FwaS5yZWNvcmQuZ2V0JztcbmltcG9ydCB7UGFyYW1zfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHtSZWNvcmRTdG9yZUZhY3Rvcnl9IGZyb20gJy4uLy4uLy4uLy4uL3N0b3JlL3JlY29yZC9yZWNvcmQuc3RvcmUuZmFjdG9yeSc7XG5pbXBvcnQge0xhbmd1YWdlU3RvcmV9IGZyb20gJy4uLy4uLy4uLy4uL3N0b3JlL2xhbmd1YWdlL2xhbmd1YWdlLnN0b3JlJztcbmltcG9ydCB7IHRyaW1FbmQgfSBmcm9tICdsb2Rhc2gtZXMnO1xuXG5jb25zdCBpbml0aWFsU3RhdGU6IEluc3RhbGxWaWV3U3RhdGUgPSB7XG4gICAgbG9hZGluZzogZmFsc2UsXG4gICAgbW9kZTogJ2RldGFpbCcsXG4gICAgcGFyYW1zOiB7XG4gICAgICAgIHJldHVybk1vZHVsZTogJycsXG4gICAgICAgIHJldHVybklkOiAnJyxcbiAgICAgICAgcmV0dXJuQWN0aW9uOiAnJ1xuICAgIH1cbn07XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBJbnN0YWxsVmlld1N0b3JlIGltcGxlbWVudHMgU3RhdGVTdG9yZSB7XG5cbiAgICAvKipcbiAgICAgKiBQdWJsaWMgbG9uZy1saXZlZCBvYnNlcnZhYmxlIHN0cmVhbXNcbiAgICAgKi9cbiAgICByZWNvcmQkOiBPYnNlcnZhYmxlPFJlY29yZD47XG4gICAgc3RhZ2luZ1JlY29yZCQ6IE9ic2VydmFibGU8UmVjb3JkPjtcbiAgICBsb2FkaW5nJDogT2JzZXJ2YWJsZTxib29sZWFuPjtcbiAgICBtb2RlJDogT2JzZXJ2YWJsZTxWaWV3TW9kZT47XG4gICAgdmlld0NvbnRleHQkOiBPYnNlcnZhYmxlPFZpZXdDb250ZXh0PjtcblxuICAgIC8qKlxuICAgICAqIFZpZXctbW9kZWwgdGhhdCByZXNvbHZlcyBvbmNlIGFsbCB0aGUgZGF0YSBpcyByZWFkeSAob3IgdXBkYXRlZCkuXG4gICAgICovXG4gICAgdm0kOiBPYnNlcnZhYmxlPEluc3RhbGxWaWV3TW9kZWw+O1xuICAgIHZtOiBJbnN0YWxsVmlld01vZGVsO1xuICAgIHJlY29yZFN0b3JlOiBSZWNvcmRTdG9yZTtcbiAgICB1cmw6IHN0cmluZztcblxuICAgIC8qKiBJbnRlcm5hbCBQcm9wZXJ0aWVzICovXG4gICAgcHJvdGVjdGVkIGNhY2hlJDogT2JzZXJ2YWJsZTxhbnk+ID0gbnVsbDtcbiAgICBwcm90ZWN0ZWQgaW50ZXJuYWxTdGF0ZTogSW5zdGFsbFZpZXdTdGF0ZSA9IGRlZXBDbG9uZShpbml0aWFsU3RhdGUpO1xuICAgIHByb3RlY3RlZCBzdG9yZSA9IG5ldyBCZWhhdmlvclN1YmplY3Q8SW5zdGFsbFZpZXdTdGF0ZT4odGhpcy5pbnRlcm5hbFN0YXRlKTtcbiAgICBwcm90ZWN0ZWQgc3RhdGUkID0gdGhpcy5zdG9yZS5hc09ic2VydmFibGUoKTtcbiAgICBwcm90ZWN0ZWQgc3ViczogU3Vic2NyaXB0aW9uW10gPSBbXTtcblxuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBwcm90ZWN0ZWQgcmVjb3JkRmV0Y2hHUUw6IFJlY29yZEZldGNoR1FMLFxuICAgICAgICBwcm90ZWN0ZWQgcmVjb3JkU2F2ZUdRTDogUmVjb3JkU2F2ZUdRTCxcbiAgICAgICAgcHJvdGVjdGVkIG1lc3NhZ2U6IE1lc3NhZ2VTZXJ2aWNlLFxuICAgICAgICBwcm90ZWN0ZWQgcmVjb3JkTWFuYWdlcjogUmVjb3JkTWFuYWdlcixcbiAgICAgICAgcHJvdGVjdGVkIHJlY29yZFN0b3JlRmFjdG9yeTogUmVjb3JkU3RvcmVGYWN0b3J5LFxuICAgICAgICBwcm90ZWN0ZWQgbGFuZ3VhZ2U6IExhbmd1YWdlU3RvcmVcbiAgICApIHtcblxuICAgICAgICB0aGlzLnJlY29yZFN0b3JlID0gcmVjb3JkU3RvcmVGYWN0b3J5LmNyZWF0ZSh0aGlzLmdldFZpZXdGaWVsZHNPYnNlcnZhYmxlKCkpO1xuXG4gICAgICAgIHRoaXMucmVjb3JkJCA9IHRoaXMucmVjb3JkU3RvcmUuc3RhdGUkLnBpcGUoZGlzdGluY3RVbnRpbENoYW5nZWQoKSk7XG4gICAgICAgIHRoaXMuc3RhZ2luZ1JlY29yZCQgPSB0aGlzLnJlY29yZFN0b3JlLnN0YWdpbmckLnBpcGUoZGlzdGluY3RVbnRpbENoYW5nZWQoKSk7XG4gICAgICAgIHRoaXMubG9hZGluZyQgPSB0aGlzLnN0YXRlJC5waXBlKG1hcChzdGF0ZSA9PiBzdGF0ZS5sb2FkaW5nKSk7XG4gICAgICAgIHRoaXMubW9kZSQgPSB0aGlzLnN0YXRlJC5waXBlKG1hcChzdGF0ZSA9PiBzdGF0ZS5tb2RlKSk7XG5cbiAgICAgICAgdGhpcy52bSQgPSB0aGlzLnJlY29yZCQucGlwZShcbiAgICAgICAgICAgIGNvbWJpbmVMYXRlc3RXaXRoKHRoaXMubG9hZGluZyQpLFxuICAgICAgICAgICAgbWFwKChbcmVjb3JkLCBsb2FkaW5nXTogW1JlY29yZCwgYm9vbGVhbl0pID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLnZtID0ge3JlY29yZCwgbG9hZGluZ30gYXMgSW5zdGFsbFZpZXdNb2RlbDtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy52bTtcbiAgICAgICAgICAgIH0pKTtcblxuICAgICAgICB0aGlzLnZpZXdDb250ZXh0JCA9IHRoaXMucmVjb3JkJC5waXBlKG1hcCgoKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5nZXRWaWV3Q29udGV4dCgpO1xuICAgICAgICB9KSk7XG4gICAgfVxuXG4gICAgZ2V0IHBhcmFtcygpOiB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB9IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaW50ZXJuYWxTdGF0ZS5wYXJhbXMgfHwge307XG4gICAgfVxuXG4gICAgc2V0IHBhcmFtcyhwYXJhbXM6IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH0pIHtcbiAgICAgICAgdGhpcy51cGRhdGVTdGF0ZSh7XG4gICAgICAgICAgICAuLi50aGlzLmludGVybmFsU3RhdGUsXG4gICAgICAgICAgICBwYXJhbXNcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgZ2V0Vmlld0NvbnRleHQoKTogVmlld0NvbnRleHQge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgcmVjb3JkOiB0aGlzLmdldEJhc2VSZWNvcmQoKVxuICAgICAgICB9O1xuICAgIH1cblxuICAgIGdldEFjdGlvbnMoKTogT2JzZXJ2YWJsZTxBY3Rpb25bXT4ge1xuICAgICAgICByZXR1cm4gb2YoW10pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEluaXRpYWwgaW5zdGFsbCB2aWV3XG4gICAgICpcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gbW9kZSB0byB1c2VcbiAgICAgKiBAcGFyYW0ge29iamVjdH0gcGFyYW1zIHRvIHNldFxuICAgICAqL1xuICAgIHB1YmxpYyBpbml0KG1vZGUgPSAnZWRpdCcgYXMgVmlld01vZGUsIHBhcmFtczogUGFyYW1zID0ge30pOiB2b2lkIHtcbiAgICAgICAgdGhpcy5zZXRNb2RlKG1vZGUpO1xuICAgICAgICB0aGlzLnJlY29yZFN0b3JlLmluaXQoe1xuICAgICAgICAgICAgaWQ6ICcnLFxuICAgICAgICAgICAgbW9kdWxlOiAnaW5zdGFsbCcsXG4gICAgICAgICAgICBhdHRyaWJ1dGVzOiB7fVxuICAgICAgICB9IGFzIFJlY29yZCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ2xlYXIgb2JzZXJ2YWJsZSBjYWNoZVxuICAgICAqL1xuICAgIHB1YmxpYyBjbGVhcigpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5jYWNoZSQgPSBudWxsO1xuICAgICAgICB0aGlzLnVwZGF0ZVN0YXRlKGRlZXBDbG9uZShpbml0aWFsU3RhdGUpKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDbGVhclxuICAgICAqL1xuICAgIGNsZWFyQXV0aEJhc2VkKCk6IHZvaWQge1xuICAgICAgICB0aGlzLmNsZWFyKCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogR2V0IHN0YWdpbmcgcmVjb3JkXG4gICAgICpcbiAgICAgKiBAcmV0dXJucyB7c3RyaW5nfSBWaWV3TW9kZVxuICAgICAqL1xuICAgIGdldEJhc2VSZWNvcmQoKTogUmVjb3JkIHtcbiAgICAgICAgaWYgKCF0aGlzLmludGVybmFsU3RhdGUpIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLnJlY29yZFN0b3JlLmdldEJhc2VSZWNvcmQoKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBHZXQgY3VycmVudCB2aWV3IG1vZGVcbiAgICAgKlxuICAgICAqIEByZXR1cm5zIHtzdHJpbmd9IFZpZXdNb2RlXG4gICAgICovXG4gICAgZ2V0TW9kZSgpOiBWaWV3TW9kZSB7XG4gICAgICAgIGlmICghdGhpcy5pbnRlcm5hbFN0YXRlKSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5pbnRlcm5hbFN0YXRlLm1vZGU7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU2V0IG5ldyBtb2RlXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gbW9kZSBWaWV3TW9kZVxuICAgICAqL1xuICAgIHNldE1vZGUobW9kZTogVmlld01vZGUpOiB2b2lkIHtcbiAgICAgICAgdGhpcy51cGRhdGVTdGF0ZSh7Li4udGhpcy5pbnRlcm5hbFN0YXRlLCBtb2RlfSk7XG4gICAgfVxuXG4gICAgZ2V0TGljZW5zZVRleHQoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIHRoaXMubGFuZ3VhZ2UuZ2V0RmllbGRMYWJlbCgnU1VJVEU4X0xJQ0VOU0VfQ09OVEVOVCcpO1xuICAgIH1cblxuICAgIGdldE1ldGFkYXRhKCk6IEluc3RhbGxWaWV3TWV0YWRhdGEge1xuICAgICAgICB0aGlzLnVybCA9IHdpbmRvdy5sb2NhdGlvbi5vcmlnaW4gKyB3aW5kb3cubG9jYXRpb24ucGF0aG5hbWU7XG4gICAgICAgIHRoaXMudXJsID0gdHJpbUVuZCh0aGlzLnVybCwgJy8nKTtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGFjdGlvbnM6IFtdLFxuICAgICAgICAgICAgdGVtcGxhdGVNZXRhOiB7XG4gICAgICAgICAgICAgICAgbWF4Q29sdW1uczogMixcbiAgICAgICAgICAgICAgICB1c2VUYWJzOiB0cnVlLFxuICAgICAgICAgICAgICAgIHRhYkRlZnM6IHtcbiAgICAgICAgICAgICAgICAgICAgTEJMX0NPTkZJRzoge1xuICAgICAgICAgICAgICAgICAgICAgICAgbmV3VGFiOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgcGFuZWxEZWZhdWx0OiAnZXhwYW5kZWQnXG4gICAgICAgICAgICAgICAgICAgIH0gYXMgVGFiRGVmaW5pdGlvblxuICAgICAgICAgICAgICAgIH0gYXMgVGFiRGVmaW5pdGlvbnNcbiAgICAgICAgICAgIH0gYXMgUmVjb3JkVGVtcGxhdGVNZXRhZGF0YSxcbiAgICAgICAgICAgIHBhbmVsczogW1xuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAga2V5OiAnTEJMX0NPTkZJRycsXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXkkOiBvZih0cnVlKS5waXBlKHNoYXJlUmVwbGF5KDEpKSxcbiAgICAgICAgICAgICAgICAgICAgcm93czogW1xuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbHM6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogJ3NpdGVfaG9zdCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbDogJ0xCTF9TSVRFQ0ZHX1VSTCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiAndmFyY2hhcicsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWVsZERlZmluaXRpb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJzaXRlX2hvc3RcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInZuYW1lXCI6IFwiTEJMX1NJVEVDRkdfVVJMXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwidmFyY2hhclwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwicmVxdWlyZWRcIjogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImRlZmF1bHRcIjogdGhpcy51cmw/LnRvU3RyaW5nKCksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJkZWZhdWx0VmFsdWVNb2Rlc1wiOiBbXCJjcmVhdGVcIiwgXCJlZGl0XCJdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGFzIEZpZWxkRGVmaW5pdGlvbixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBhcyBQYW5lbENlbGwsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6ICdkZW1vRGF0YScsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbDogJ0xCTF9EQkNPTkZfREVNT19EQVRBJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6ICdlbnVtJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpZWxkRGVmaW5pdGlvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwiZGVtb0RhdGFcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2bmFtZTogXCJMQkxfREJDT05GX0RFTU9fREFUQVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IFwiZW51bVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wdGlvbnM6IFwiX19ub19vcHRpb25zX19cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXF1aXJlZDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImRlZmF1bHRcIjogJ25vJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImRlZmF1bHRWYWx1ZU1vZGVzXCI6IFtcImNyZWF0ZVwiLCBcImVkaXRcIl0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWV0YWRhdGE6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXh0cmFPcHRpb25zOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IFwieWVzXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWxLZXk6IFwiTEJMX1lFU1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBhcyBPcHRpb24sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IFwibm9cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbEtleTogXCJMQkxfTk9cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gYXMgT3B0aW9uLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdIGFzIE9wdGlvbltdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBhcyBGaWVsZE1ldGFkYXRhXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGFzIEZpZWxkRGVmaW5pdGlvbixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBhcyBQYW5lbENlbGwsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xzOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6ICdkYl9jb25maWcnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw6ICdMQkxfREJDT05GX1RJVExFJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6ICdncm91cGVkLWZpZWxkJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpZWxkRGVmaW5pdGlvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwiZGJfY29uZmlnXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdm5hbWU6IFwiTEJMX0RCQ09ORl9USVRMRVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IFwiZ3JvdXBlZC1maWVsZFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxheW91dDogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImRiX3VzZXJuYW1lXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZGJfcGFzc3dvcmRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJkYl9ob3N0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZGJfbmFtZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImRiX3BvcnRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogXCJ2ZXJ0aWNhbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdyb3VwRmllbGRzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZGJfdXNlcm5hbWVcIjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiZGJfdXNlcm5hbWVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcInZhcmNoYXJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidm5hbWVcIjogXCJMQkxfREJDT05GX1NVSVRFX0RCX1VTRVJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwibGFiZWxLZXlcIjogXCJMQkxfREJDT05GX1NVSVRFX0RCX1VTRVJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwibGFiZWxcIjogXCJMQkxfREJDT05GX1NVSVRFX0RCX1VTRVJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwic2hvd0xhYmVsXCI6IFtcIipcIl0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInJlcXVpcmVkXCI6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZGJfcGFzc3dvcmRcIjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiZGJfcGFzc3dvcmRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcInBhc3N3b3JkXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInZuYW1lXCI6IFwiTEJMX0RCQ09ORl9EQl9QQVNTV09SRFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJsYWJlbEtleVwiOiBcIkxCTF9EQkNPTkZfREJfUEFTU1dPUkRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwic2hvd0xhYmVsXCI6IFtcIipcIl0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInJlcXVpcmVkXCI6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZGJfaG9zdFwiOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJkYl9ob3N0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJ2YXJjaGFyXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInZuYW1lXCI6IFwiTEJMX0RCQ09ORl9IT1NUX05BTUVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwibGFiZWxLZXlcIjogXCJMQkxfREJDT05GX0hPU1RfTkFNRVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJzaG93TGFiZWxcIjogW1wiKlwiXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwicmVxdWlyZWRcIjogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJkYl9uYW1lXCI6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcImRiX25hbWVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcInZhcmNoYXJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidm5hbWVcIjogXCJMQkxfREJDT05GX0RCX05BTUVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwibGFiZWxLZXlcIjogXCJMQkxfREJDT05GX0RCX05BTUVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwic2hvd0xhYmVsXCI6IFtcIipcIl0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInJlcXVpcmVkXCI6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZGJfcG9ydFwiOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJkYl9wb3J0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJ2YXJjaGFyXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInZuYW1lXCI6IFwiTEJMX0RCQ09ORl9EQl9QT1JUXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImxhYmVsS2V5XCI6IFwiTEJMX0RCQ09ORl9EQl9QT1JUXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInNob3dMYWJlbFwiOiBbXCIqXCJdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJyZXF1aXJlZFwiOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZGVmYXVsdFwiOiczMzA2JyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZGVmYXVsdFZhbHVlTW9kZXNcIjogW1wiY3JlYXRlXCIsIFwiZWRpdFwiXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaG93TGFiZWw6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZWRpdDogWycqJ11cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGFzIEZpZWxkRGVmaW5pdGlvbixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBhcyBQYW5lbENlbGwsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6ICdhZG1pbl9jb25maWcnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw6ICdMQkxfU0lURUNGR19USVRMRScsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiAnZ3JvdXBlZC1maWVsZCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWVsZERlZmluaXRpb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcImFkbWluX2NvbmZpZ1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZuYW1lOiBcIkxCTF9TSVRFQ0ZHX1RJVExFXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJncm91cGVkLWZpZWxkXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGF5b3V0OiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwic2l0ZV91c2VybmFtZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInNpdGVfcGFzc3dvcmRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IFwidmVydGljYWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBncm91cEZpZWxkczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInNpdGVfdXNlcm5hbWVcIjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwic2l0ZV91c2VybmFtZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwidmFyY2hhclwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ2bmFtZVwiOiBcIkxCTF9TSVRFQ0ZHX0FETUlOX05hbWVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwibGFiZWxLZXlcIjogXCJMQkxfU0lURUNGR19BRE1JTl9OYW1lXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInNob3dMYWJlbFwiOiBbXCJlZGl0XCJdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJyZXF1aXJlZFwiOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJkZWZhdWx0XCI6IFwiYWRtaW5cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZGVmYXVsdFZhbHVlTW9kZXNcIjogW1wiY3JlYXRlXCIsIFwiZWRpdFwiXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInNpdGVfcGFzc3dvcmRcIjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwic2l0ZV9wYXNzd29yZFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwicGFzc3dvcmRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidm5hbWVcIjogXCJMQkxfU0lURUNGR19BRE1JTl9QQVNTXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImxhYmVsS2V5XCI6IFwiTEJMX1NJVEVDRkdfQURNSU5fUEFTU1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJzaG93TGFiZWxcIjogW1wiZWRpdFwiXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwicmVxdWlyZWRcIjogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNob3dMYWJlbDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlZGl0OiBbJyonXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gYXMgRmllbGREZWZpbml0aW9uLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGFzIFBhbmVsQ2VsbFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0gYXMgUGFuZWxDZWxsW11cbiAgICAgICAgICAgICAgICAgICAgICAgIH0gYXMgUGFuZWxSb3dcbiAgICAgICAgICAgICAgICAgICAgXSBhcyBQYW5lbFJvd1tdXG4gICAgICAgICAgICAgICAgfSBhcyBQYW5lbFxuICAgICAgICAgICAgXSBhcyBQYW5lbFtdLFxuICAgICAgICB9IGFzIEluc3RhbGxWaWV3TWV0YWRhdGE7XG4gICAgfVxuXG4gICAgZ2V0TWV0YWRhdGEkKCk6IE9ic2VydmFibGU8SW5zdGFsbFZpZXdNZXRhZGF0YT4ge1xuICAgICAgICByZXR1cm4gb2YodGhpcy5nZXRNZXRhZGF0YSgpKTtcbiAgICB9XG5cbiAgICBnZXRNb2R1bGVOYW1lKCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiAnaW5zdGFsbCc7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUGFyc2UgcXVlcnkgcGFyYW1zXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge29iamVjdH0gcGFyYW1zIHRvIHNldFxuICAgICAqL1xuICAgIHByb3RlY3RlZCBwYXJzZVBhcmFtcyhwYXJhbXM6IFBhcmFtcyA9IHt9KTogdm9pZCB7XG4gICAgICAgIGlmICghcGFyYW1zKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBjdXJyZW50UGFyYW1zID0gey4uLnRoaXMuaW50ZXJuYWxTdGF0ZS5wYXJhbXN9O1xuICAgICAgICBPYmplY3Qua2V5cyhwYXJhbXMpLmZvckVhY2gocGFyYW1LZXkgPT4ge1xuICAgICAgICAgICAgaWYgKCFpc1ZvaWQoY3VycmVudFBhcmFtc1twYXJhbUtleV0pKSB7XG4gICAgICAgICAgICAgICAgY3VycmVudFBhcmFtc1twYXJhbUtleV0gPSBwYXJhbXNbcGFyYW1LZXldO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy5wYXJhbXMgPSBwYXJhbXM7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVXBkYXRlIHRoZSBzdGF0ZVxuICAgICAqXG4gICAgICogQHBhcmFtIHtvYmplY3R9IHN0YXRlIHRvIHNldFxuICAgICAqL1xuICAgIHByb3RlY3RlZCB1cGRhdGVTdGF0ZShzdGF0ZTogSW5zdGFsbFZpZXdTdGF0ZSk6IHZvaWQge1xuICAgICAgICB0aGlzLnN0b3JlLm5leHQodGhpcy5pbnRlcm5hbFN0YXRlID0gc3RhdGUpO1xuICAgIH1cblxuICAgIGdldElnbm9yZVN5c3RlbUNoZWNrc0ZpZWxkKCk6IEZpZWxkIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucmVjb3JkU3RvcmUuZ2V0U3RhZ2luZygpLmZpZWxkc1snc3lzX2NoZWNrX29wdGlvbiddO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEdldCB2aWV3IGZpZWxkcyBvYnNlcnZhYmxlXG4gICAgICpcbiAgICAgKiBAcmV0dXJucyB7b2JqZWN0fSBPYnNlcnZhYmxlPFZpZXdGaWVsZERlZmluaXRpb25bXT5cbiAgICAgKi9cbiAgICBwcm90ZWN0ZWQgZ2V0Vmlld0ZpZWxkc09ic2VydmFibGUoKTogT2JzZXJ2YWJsZTxWaWV3RmllbGREZWZpbml0aW9uW10+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0TWV0YWRhdGEkKCkucGlwZShtYXAoKG1ldGE6IEluc3RhbGxWaWV3TWV0YWRhdGEpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGZpZWxkczogVmlld0ZpZWxkRGVmaW5pdGlvbltdID0gW107XG4gICAgICAgICAgICBtZXRhLnBhbmVscy5mb3JFYWNoKHBhbmVsID0+IHtcbiAgICAgICAgICAgICAgICBwYW5lbC5yb3dzLmZvckVhY2gocm93ID0+IHtcbiAgICAgICAgICAgICAgICAgICAgcm93LmNvbHMuZm9yRWFjaChjb2wgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgZmllbGRzLnB1c2goY29sKTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgZmllbGRzLnB1c2goXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJzeXNfY2hlY2tfb3B0aW9uXCIsXG4gICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcImJvb2xlYW5cIixcbiAgICAgICAgICAgICAgICAgICAgZmllbGREZWZpbml0aW9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJzeXNfY2hlY2tfb3B0aW9uXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJib29sZWFuXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBcInZuYW1lXCI6IFwiTEJMX1NZU19DSEVDS19XQVJOSU5HXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBcImxhYmVsS2V5XCI6IFwiTEJMX1NZU19DSEVDS19XQVJOSU5HXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBcInNob3dMYWJlbFwiOiBbXCJlZGl0XCJdLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJyZXF1aXJlZFwiOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwidmFsdWVcIjogJ2ZhbHNlJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiZGVmYXVsdFwiOiAnZmFsc2UnLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJkZWZhdWx0VmFsdWVNb2Rlc1wiOiBbXCJjcmVhdGVcIiwgXCJlZGl0XCJdXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9IGFzIFZpZXdGaWVsZERlZmluaXRpb25cbiAgICAgICAgICAgICk7XG5cbiAgICAgICAgICAgIHJldHVybiBmaWVsZHM7XG4gICAgICAgIH0pKTtcbiAgICB9XG59XG4iXX0=