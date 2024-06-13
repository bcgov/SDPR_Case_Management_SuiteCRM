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
import { BehaviorSubject, combineLatestWith, forkJoin, of } from 'rxjs';
import { deepClone } from 'common';
import { catchError, distinctUntilChanged, filter, finalize, map, startWith, take, tap } from 'rxjs/operators';
import { MetadataStore } from '../../../../store/metadata/metadata.store.service';
import { MessageService } from '../../../../services/message/message.service';
import { AppStateStore } from '../../../../store/app-state/app-state.store';
import { FieldManager } from '../../../../services/record/field/field.manager';
import { LanguageStore } from '../../../../store/language/language.store';
import { SavedFilterRecordStoreFactory } from './saved-filter-record.store.factory';
import * as i0 from "@angular/core";
import * as i1 from "../../../../store/app-state/app-state.store";
import * as i2 from "../../../../store/metadata/metadata.store.service";
import * as i3 from "../../../../services/message/message.service";
import * as i4 from "../../../../services/record/field/field.manager";
import * as i5 from "../../../../store/language/language.store";
import * as i6 from "./saved-filter-record.store.factory";
const initialState = {
    module: '',
    searchModule: '',
    recordID: '',
    loading: false,
    mode: 'detail',
};
class SavedFilterStore {
    constructor(appStateStore, meta, message, fieldManager, language, savedFilterStoreFactory) {
        this.appStateStore = appStateStore;
        this.meta = meta;
        this.message = message;
        this.fieldManager = fieldManager;
        this.language = language;
        this.savedFilterStoreFactory = savedFilterStoreFactory;
        /** Internal Properties */
        this.cache$ = null;
        this.internalState = deepClone(initialState);
        this.store = new BehaviorSubject(this.internalState);
        this.state$ = this.store.asObservable();
        this.subs = [];
        this.metadataLoadingState = new BehaviorSubject(false);
        this.metadataLoading$ = this.metadataLoadingState.asObservable();
        this.meta$ = this.meta.getMetadata('saved-search', ['recordView']).pipe(tap(() => this.metadataLoadingState.next(false)), map(definitions => {
            const recordViewMeta = { ...definitions.recordView };
            recordViewMeta.actions = (recordViewMeta?.actions ?? []).filter(value => {
                return value.key !== 'cancel';
            });
            return recordViewMeta;
        }));
        this.recordStore = savedFilterStoreFactory.create(this.getViewFields$());
        this.record$ = this.recordStore.state$.pipe(distinctUntilChanged(), map(record => record));
        this.stagingRecord$ = this.recordStore.staging$.pipe(distinctUntilChanged(), map(record => record));
        this.loading$ = this.state$.pipe(map(state => state.loading));
        this.mode$ = this.state$.pipe(map(state => state.mode));
        this.vm$ = this.stagingRecord$.pipe(combineLatestWith(this.mode$), map(([record, mode]) => {
            this.vm = { record, mode };
            return this.vm;
        }));
    }
    getModuleName() {
        return this.internalState.module;
    }
    getRecordId() {
        return this.internalState.recordID;
    }
    getViewContext() {
        return {
            module: this.getModuleName(),
            id: this.getRecordId(),
        };
    }
    /**
     * Clean destroy
     */
    destroy() {
        this.clear();
    }
    /**
     * Initial record load if not cached and update state.
     * Returns observable to be used in resolver if needed
     *
     * @param {string} recordID to use
     * @param {string} mode to use
     * @returns {object} Observable<any>
     */
    init(recordID, mode = 'detail') {
        this.internalState.module = 'saved-search';
        this.internalState.recordID = recordID;
        this.setMode(mode);
        this.metadataLoadingState.next(true);
        const $data = forkJoin([this.meta$, this.load()]);
        return $data.pipe(map(([meta, record]) => record));
    }
    /**
     * Init record
     *
     * @param {string} searchModule name
     * @param {object} filter to use
     * @param {object} searchFields to use
     * @param {object} listColumns ColumnDefinition[]
     * @param {string} mode to use
     * @returns {object} Observable<any>
     */
    initRecord(searchModule, filter, searchFields, listColumns, mode = 'detail') {
        this.updateState({
            ...this.internalState,
            recordID: filter.id,
            module: 'saved-search',
            searchModule,
            mode
        });
        this.metadataLoadingState.next(true);
        this.meta$.pipe(take(1), tap(() => {
            this.metadataLoadingState.next(false);
            this.initStaging(searchModule, filter, searchFields, listColumns);
        })).subscribe();
    }
    initValidators(record) {
        if (!record || !record?.fields || !Object.keys(record?.fields).length) {
            return;
        }
        Object.keys(record.fields).forEach(fieldName => {
            const field = record.fields[fieldName];
            const formControl = field?.formControl ?? null;
            if (!formControl) {
                return;
            }
            this.resetValidators(field);
            const validators = field?.validators ?? [];
            const asyncValidators = field?.asyncValidators ?? [];
            if (validators.length) {
                field?.formControl?.setValidators(validators);
            }
            if (asyncValidators.length) {
                field?.formControl?.setAsyncValidators(asyncValidators);
            }
        });
    }
    resetValidators(field) {
        field?.formControl?.clearValidators();
        field?.formControl?.clearAsyncValidators();
    }
    initStaging(searchModule, filter, searchFields, listColumns) {
        const filterRecord = deepClone(this.recordStore.extractBaseRecord(filter));
        filterRecord.searchModule = searchModule;
        this.recordStore.setSearchFields(searchFields);
        this.recordStore.setListColumns(listColumns);
        this.recordStore.setStaging(filterRecord);
        this.initValidators(this.recordStore.getStaging());
    }
    /**
     * Clear observable cache
     */
    clear() {
        this.cache$ = null;
        this.updateState(deepClone(initialState));
        this.metadataLoadingState.unsubscribe();
        this.metadataLoadingState = null;
        this.recordStore.destroy();
        this.recordStore = null;
    }
    /**
     * Clear observable cache
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
    /**
     * Save record
     */
    save() {
        this.appStateStore.updateLoading(`${this.internalState.module}-record-save`, true);
        return this.recordStore.save().pipe(catchError(() => {
            this.message.addDangerMessageByKey('LBL_ERROR_SAVING');
            return of({});
        }), finalize(() => {
            this.appStateStore.updateLoading(`${this.internalState.module}-record-save`, false);
        }));
    }
    /**
     * Validate search filter fields
     *
     * @returns {object} Observable<boolean>
     */
    validate() {
        return forkJoin([
            this.recordStore.validate(),
            this.validateCriteria()
        ]).pipe(map(([fields, criteria]) => fields && criteria));
    }
    /**
     * Validate search current input
     *
     * @returns {object} Observable<boolean>
     */
    validateCriteria() {
        const currentFilter = this.recordStore.getStaging();
        const formGroup = currentFilter.criteriaFormGroup;
        formGroup.markAllAsTouched();
        return formGroup.statusChanges.pipe(startWith(formGroup.status), filter(status => status !== 'PENDING'), take(1), map(status => status === 'VALID'));
    }
    /**
     * Load / reload record using current pagination and criteria
     *
     * @param {boolean} useCache if to use cache
     * @returns {object} Observable<RecordViewState>
     */
    load(useCache = true) {
        this.appStateStore.updateLoading(`${this.internalState.module}-record-fetch`, true);
        return this.recordStore.retrieveRecord(this.internalState.module, this.internalState.recordID, useCache).pipe(tap((data) => {
            this.appStateStore.updateLoading(`${this.internalState.module}-record-fetch`, false);
            this.updateState({
                ...this.internalState,
                recordID: data.id,
                module: data.module,
            });
        }));
    }
    /**
     * Get view fields observable
     *
     * @returns {object} Observable<string[]>
     */
    getViewFieldsKeys$() {
        return this.meta$.pipe(map((recordMetadata) => {
            const fields = [];
            recordMetadata.panels.forEach(panel => {
                panel.rows.forEach(row => {
                    row.cols.forEach(col => {
                        fields.push(col.name);
                    });
                });
            });
            return fields;
        }));
    }
    /**
     * Get view fields observable
     *
     * @returns {object} Observable<ViewFieldDefinition[]>
     */
    getViewFields$() {
        return this.meta$.pipe(map((recordMetadata) => {
            const fields = [];
            recordMetadata.panels.forEach(panel => {
                panel.rows.forEach(row => {
                    row.cols.forEach(col => {
                        fields.push(col);
                    });
                });
            });
            return fields;
        }));
    }
    /**
     * Update the state
     *
     * @param {object} state to set
     */
    updateState(state) {
        this.store.next(this.internalState = state);
    }
    /**
     * Get record view metadata
     *
     * @returns {object} metadata RecordViewMetadata
     */
    getMetadata() {
        const meta = this.meta.get() || {};
        return meta.recordView || {};
    }
    static { this.ɵfac = function SavedFilterStore_Factory(t) { return new (t || SavedFilterStore)(i0.ɵɵinject(i1.AppStateStore), i0.ɵɵinject(i2.MetadataStore), i0.ɵɵinject(i3.MessageService), i0.ɵɵinject(i4.FieldManager), i0.ɵɵinject(i5.LanguageStore), i0.ɵɵinject(i6.SavedFilterRecordStoreFactory)); }; }
    static { this.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: SavedFilterStore, factory: SavedFilterStore.ɵfac }); }
}
export { SavedFilterStore };
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(SavedFilterStore, [{
        type: Injectable
    }], function () { return [{ type: i1.AppStateStore }, { type: i2.MetadataStore }, { type: i3.MessageService }, { type: i4.FieldManager }, { type: i5.LanguageStore }, { type: i6.SavedFilterRecordStoreFactory }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2F2ZWQtZmlsdGVyLnN0b3JlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vY29yZS9hcHAvY29yZS9zcmMvbGliL2NvbnRhaW5lcnMvbGlzdC1maWx0ZXIvc3RvcmUvc2F2ZWQtZmlsdGVyL3NhdmVkLWZpbHRlci5zdG9yZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBd0JHO0FBRUgsT0FBTyxFQUFDLFVBQVUsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUMsZUFBZSxFQUFFLGlCQUFpQixFQUFFLFFBQVEsRUFBYyxFQUFFLEVBQWUsTUFBTSxNQUFNLENBQUM7QUFDaEcsT0FBTyxFQUVILFNBQVMsRUFPWixNQUFNLFFBQVEsQ0FBQztBQUNoQixPQUFPLEVBQUMsVUFBVSxFQUFFLG9CQUFvQixFQUFFLE1BQU0sRUFBRSxRQUFRLEVBQUUsR0FBRyxFQUFFLFNBQVMsRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFDLE1BQU0sZ0JBQWdCLENBQUM7QUFFN0csT0FBTyxFQUFDLGFBQWEsRUFBcUIsTUFBTSxtREFBbUQsQ0FBQztBQUNwRyxPQUFPLEVBQUMsY0FBYyxFQUFDLE1BQU0sOENBQThDLENBQUM7QUFDNUUsT0FBTyxFQUFDLGFBQWEsRUFBQyxNQUFNLDZDQUE2QyxDQUFDO0FBRzFFLE9BQU8sRUFBQyxZQUFZLEVBQUMsTUFBTSxpREFBaUQsQ0FBQztBQUM3RSxPQUFPLEVBQUMsYUFBYSxFQUFDLE1BQU0sMkNBQTJDLENBQUM7QUFFeEUsT0FBTyxFQUFDLDZCQUE2QixFQUFDLE1BQU0scUNBQXFDLENBQUM7Ozs7Ozs7O0FBRWxGLE1BQU0sWUFBWSxHQUF5QjtJQUN2QyxNQUFNLEVBQUUsRUFBRTtJQUNWLFlBQVksRUFBRSxFQUFFO0lBQ2hCLFFBQVEsRUFBRSxFQUFFO0lBQ1osT0FBTyxFQUFFLEtBQUs7SUFDZCxJQUFJLEVBQUUsUUFBUTtDQUNqQixDQUFDO0FBRUYsTUFDYSxnQkFBZ0I7SUE4QnpCLFlBQ2MsYUFBNEIsRUFDNUIsSUFBbUIsRUFDbkIsT0FBdUIsRUFDdkIsWUFBMEIsRUFDMUIsUUFBdUIsRUFDdkIsdUJBQXNEO1FBTHRELGtCQUFhLEdBQWIsYUFBYSxDQUFlO1FBQzVCLFNBQUksR0FBSixJQUFJLENBQWU7UUFDbkIsWUFBTyxHQUFQLE9BQU8sQ0FBZ0I7UUFDdkIsaUJBQVksR0FBWixZQUFZLENBQWM7UUFDMUIsYUFBUSxHQUFSLFFBQVEsQ0FBZTtRQUN2Qiw0QkFBdUIsR0FBdkIsdUJBQXVCLENBQStCO1FBZHBFLDBCQUEwQjtRQUNoQixXQUFNLEdBQW9CLElBQUksQ0FBQztRQUMvQixrQkFBYSxHQUF5QixTQUFTLENBQUMsWUFBWSxDQUFDLENBQUM7UUFDOUQsVUFBSyxHQUFHLElBQUksZUFBZSxDQUF1QixJQUFJLENBQUMsYUFBYSxDQUFDLENBQUM7UUFDdEUsV0FBTSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsWUFBWSxFQUFFLENBQUM7UUFDbkMsU0FBSSxHQUFtQixFQUFFLENBQUM7UUFXaEMsSUFBSSxDQUFDLG9CQUFvQixHQUFHLElBQUksZUFBZSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3ZELElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxJQUFJLENBQUMsb0JBQW9CLENBQUMsWUFBWSxFQUFFLENBQUM7UUFFakUsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxjQUFjLEVBQUUsQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FDbkUsR0FBRyxDQUFDLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsRUFDaEQsR0FBRyxDQUFDLFdBQVcsQ0FBQyxFQUFFO1lBQ2QsTUFBTSxjQUFjLEdBQUcsRUFBQyxHQUFHLFdBQVcsQ0FBQyxVQUFVLEVBQUMsQ0FBQztZQUNuRCxjQUFjLENBQUMsT0FBTyxHQUFHLENBQUMsY0FBYyxFQUFFLE9BQU8sSUFBSSxFQUFFLENBQUMsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLEVBQUU7Z0JBQ3BFLE9BQU8sS0FBSyxDQUFDLEdBQUcsS0FBSyxRQUFRLENBQUE7WUFDakMsQ0FBQyxDQUFDLENBQUM7WUFDSCxPQUFPLGNBQWMsQ0FBQztRQUMxQixDQUFDLENBQUMsQ0FDTCxDQUFDO1FBRUYsSUFBSSxDQUFDLFdBQVcsR0FBRyx1QkFBdUIsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDLENBQUM7UUFFekUsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsb0JBQW9CLEVBQUUsRUFBRSxHQUFHLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxNQUFxQixDQUFDLENBQUMsQ0FBQztRQUMxRyxJQUFJLENBQUMsY0FBYyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxvQkFBb0IsRUFBRSxFQUFFLEdBQUcsQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLE1BQXFCLENBQUMsQ0FBQyxDQUFDO1FBQ25ILElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7UUFDOUQsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztRQUV4RCxJQUFJLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUMvQixpQkFBaUIsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEVBQzdCLEdBQUcsQ0FBQyxDQUFDLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBcUIsRUFBRSxFQUFFO1lBQ3ZDLElBQUksQ0FBQyxFQUFFLEdBQUcsRUFBQyxNQUFNLEVBQUUsSUFBSSxFQUF3QixDQUFDO1lBQ2hELE9BQU8sSUFBSSxDQUFDLEVBQUUsQ0FBQztRQUNuQixDQUFDLENBQUMsQ0FDTCxDQUFDO0lBQ04sQ0FBQztJQUVELGFBQWE7UUFDVCxPQUFPLElBQUksQ0FBQyxhQUFhLENBQUMsTUFBTSxDQUFDO0lBQ3JDLENBQUM7SUFFRCxXQUFXO1FBQ1AsT0FBTyxJQUFJLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQztJQUN2QyxDQUFDO0lBRUQsY0FBYztRQUNWLE9BQU87WUFDSCxNQUFNLEVBQUUsSUFBSSxDQUFDLGFBQWEsRUFBRTtZQUM1QixFQUFFLEVBQUUsSUFBSSxDQUFDLFdBQVcsRUFBRTtTQUN6QixDQUFDO0lBQ04sQ0FBQztJQUVEOztPQUVHO0lBQ0ksT0FBTztRQUNWLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQztJQUNqQixDQUFDO0lBR0Q7Ozs7Ozs7T0FPRztJQUNJLElBQUksQ0FBQyxRQUFnQixFQUFFLE9BQU8sUUFBb0I7UUFDckQsSUFBSSxDQUFDLGFBQWEsQ0FBQyxNQUFNLEdBQUcsY0FBYyxDQUFDO1FBQzNDLElBQUksQ0FBQyxhQUFhLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQztRQUN2QyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBRW5CLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFFckMsTUFBTSxLQUFLLEdBQUcsUUFBUSxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBRWxELE9BQU8sS0FBSyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLElBQUksRUFBRSxNQUFNLENBQUMsRUFBRSxFQUFFLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztJQUN2RCxDQUFDO0lBRUQ7Ozs7Ozs7OztPQVNHO0lBQ0ksVUFBVSxDQUNiLFlBQW9CLEVBQ3BCLE1BQW1CLEVBQ25CLFlBQWdDLEVBQ2hDLFdBQStCLEVBQy9CLE9BQU8sUUFBb0I7UUFFM0IsSUFBSSxDQUFDLFdBQVcsQ0FBQztZQUNiLEdBQUcsSUFBSSxDQUFDLGFBQWE7WUFDckIsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLE1BQU0sRUFBRSxjQUFjO1lBQ3RCLFlBQVk7WUFDWixJQUFJO1NBQ1AsQ0FBQyxDQUFDO1FBRUgsSUFBSSxDQUFDLG9CQUFvQixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUVyQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FDWCxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQ1AsR0FBRyxDQUFDLEdBQUcsRUFBRTtZQUNMLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDdEMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxZQUFZLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRSxXQUFXLENBQUMsQ0FBQztRQUN0RSxDQUFDLENBQUMsQ0FDTCxDQUFDLFNBQVMsRUFBRSxDQUFDO0lBQ2xCLENBQUM7SUFFRCxjQUFjLENBQUMsTUFBYztRQUN6QixJQUFHLENBQUMsTUFBTSxJQUFJLENBQUMsTUFBTSxFQUFFLE1BQU0sSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLE1BQU0sQ0FBQyxDQUFDLE1BQU0sRUFBRTtZQUNsRSxPQUFPO1NBQ1Y7UUFFRCxNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLEVBQUU7WUFDM0MsTUFBTSxLQUFLLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsQ0FBQztZQUN2QyxNQUFNLFdBQVcsR0FBRyxLQUFLLEVBQUUsV0FBVyxJQUFJLElBQUksQ0FBQztZQUMvQyxJQUFJLENBQUMsV0FBVyxFQUFFO2dCQUNkLE9BQU87YUFDVjtZQUVELElBQUksQ0FBQyxlQUFlLENBQUMsS0FBSyxDQUFDLENBQUM7WUFFNUIsTUFBTSxVQUFVLEdBQUcsS0FBSyxFQUFFLFVBQVUsSUFBSSxFQUFFLENBQUM7WUFDM0MsTUFBTSxlQUFlLEdBQUcsS0FBSyxFQUFFLGVBQWUsSUFBSSxFQUFFLENBQUM7WUFFckQsSUFBSSxVQUFVLENBQUMsTUFBTSxFQUFFO2dCQUNuQixLQUFLLEVBQUUsV0FBVyxFQUFFLGFBQWEsQ0FBQyxVQUFVLENBQUMsQ0FBQzthQUNqRDtZQUNELElBQUksZUFBZSxDQUFDLE1BQU0sRUFBRTtnQkFDeEIsS0FBSyxFQUFFLFdBQVcsRUFBRSxrQkFBa0IsQ0FBQyxlQUFlLENBQUMsQ0FBQzthQUMzRDtRQUNMLENBQUMsQ0FBQyxDQUFDO0lBRVAsQ0FBQztJQUVELGVBQWUsQ0FBQyxLQUFLO1FBQ2pCLEtBQUssRUFBRSxXQUFXLEVBQUUsZUFBZSxFQUFFLENBQUM7UUFDdEMsS0FBSyxFQUFFLFdBQVcsRUFBRSxvQkFBb0IsRUFBRSxDQUFDO0lBQy9DLENBQUM7SUFFTSxXQUFXLENBQ2QsWUFBb0IsRUFDcEIsTUFBbUIsRUFDbkIsWUFBZ0MsRUFDaEMsV0FBK0I7UUFHL0IsTUFBTSxZQUFZLEdBQWdCLFNBQVMsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLGlCQUFpQixDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7UUFFeEYsWUFBWSxDQUFDLFlBQVksR0FBRyxZQUFZLENBQUM7UUFDekMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxlQUFlLENBQUMsWUFBWSxDQUFDLENBQUM7UUFDL0MsSUFBSSxDQUFDLFdBQVcsQ0FBQyxjQUFjLENBQUMsV0FBVyxDQUFDLENBQUM7UUFFN0MsSUFBSSxDQUFDLFdBQVcsQ0FBQyxVQUFVLENBQUMsWUFBWSxDQUFDLENBQUM7UUFDMUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLFVBQVUsRUFBRSxDQUFDLENBQUM7SUFDdkQsQ0FBQztJQUVEOztPQUVHO0lBQ0ksS0FBSztRQUNSLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO1FBQ25CLElBQUksQ0FBQyxXQUFXLENBQUMsU0FBUyxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUM7UUFDMUMsSUFBSSxDQUFDLG9CQUFvQixDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQ3hDLElBQUksQ0FBQyxvQkFBb0IsR0FBRyxJQUFJLENBQUM7UUFDakMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxPQUFPLEVBQUUsQ0FBQztRQUMzQixJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQztJQUM1QixDQUFDO0lBRUQ7O09BRUc7SUFDSSxjQUFjO1FBQ2pCLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQztJQUNqQixDQUFDO0lBRUQ7Ozs7T0FJRztJQUNJLGFBQWE7UUFDaEIsT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFDLGFBQWEsRUFBRSxDQUFDO0lBQzVDLENBQUM7SUFHRDs7OztPQUlHO0lBQ0ksT0FBTztRQUNWLElBQUksQ0FBQyxJQUFJLENBQUMsYUFBYSxFQUFFO1lBQ3JCLE9BQU8sSUFBSSxDQUFDO1NBQ2Y7UUFDRCxPQUFPLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDO0lBQ25DLENBQUM7SUFFRDs7OztPQUlHO0lBQ0ksT0FBTyxDQUFDLElBQWM7UUFDekIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxFQUFDLEdBQUcsSUFBSSxDQUFDLGFBQWEsRUFBRSxJQUFJLEVBQUMsQ0FBQyxDQUFDO0lBQ3BELENBQUM7SUFFRDs7T0FFRztJQUNJLElBQUk7UUFDUCxJQUFJLENBQUMsYUFBYSxDQUFDLGFBQWEsQ0FBQyxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsTUFBTSxjQUFjLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFFbkYsT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksRUFBRSxDQUFDLElBQUksQ0FDL0IsVUFBVSxDQUFDLEdBQUcsRUFBRTtZQUNaLElBQUksQ0FBQyxPQUFPLENBQUMscUJBQXFCLENBQUMsa0JBQWtCLENBQUMsQ0FBQztZQUN2RCxPQUFPLEVBQUUsQ0FBQyxFQUFZLENBQUMsQ0FBQztRQUM1QixDQUFDLENBQUMsRUFDRixRQUFRLENBQUMsR0FBRyxFQUFFO1lBQ1YsSUFBSSxDQUFDLGFBQWEsQ0FBQyxhQUFhLENBQUMsR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLE1BQU0sY0FBYyxFQUFFLEtBQUssQ0FBQyxDQUFDO1FBQ3hGLENBQUMsQ0FBQyxDQUNMLENBQUM7SUFDTixDQUFDO0lBRUQ7Ozs7T0FJRztJQUNJLFFBQVE7UUFFWCxPQUFPLFFBQVEsQ0FBQztZQUNaLElBQUksQ0FBQyxXQUFXLENBQUMsUUFBUSxFQUFFO1lBQzNCLElBQUksQ0FBQyxnQkFBZ0IsRUFBRTtTQUMxQixDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsTUFBTSxFQUFFLFFBQVEsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxNQUFNLElBQUksUUFBUSxDQUFDLENBQUMsQ0FBQztJQUM3RCxDQUFDO0lBRUQ7Ozs7T0FJRztJQUNJLGdCQUFnQjtRQUVuQixNQUFNLGFBQWEsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLFVBQVUsRUFBaUIsQ0FBQztRQUNuRSxNQUFNLFNBQVMsR0FBRyxhQUFhLENBQUMsaUJBQWlCLENBQUM7UUFDbEQsU0FBUyxDQUFDLGdCQUFnQixFQUFFLENBQUM7UUFDN0IsT0FBTyxTQUFTLENBQUMsYUFBYSxDQUFDLElBQUksQ0FDL0IsU0FBUyxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsRUFDM0IsTUFBTSxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsTUFBTSxLQUFLLFNBQVMsQ0FBQyxFQUN0QyxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQ1AsR0FBRyxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsTUFBTSxLQUFLLE9BQU8sQ0FBQyxDQUNwQyxDQUFDO0lBQ04sQ0FBQztJQUVEOzs7OztPQUtHO0lBQ0ksSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJO1FBQ3ZCLElBQUksQ0FBQyxhQUFhLENBQUMsYUFBYSxDQUFDLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxNQUFNLGVBQWUsRUFBRSxJQUFJLENBQUMsQ0FBQztRQUVwRixPQUFPLElBQUksQ0FBQyxXQUFXLENBQUMsY0FBYyxDQUNsQyxJQUFJLENBQUMsYUFBYSxDQUFDLE1BQU0sRUFDekIsSUFBSSxDQUFDLGFBQWEsQ0FBQyxRQUFRLEVBQzNCLFFBQVEsQ0FDWCxDQUFDLElBQUksQ0FDRixHQUFHLENBQUMsQ0FBQyxJQUFZLEVBQUUsRUFBRTtZQUNqQixJQUFJLENBQUMsYUFBYSxDQUFDLGFBQWEsQ0FBQyxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsTUFBTSxlQUFlLEVBQUUsS0FBSyxDQUFDLENBQUM7WUFFckYsSUFBSSxDQUFDLFdBQVcsQ0FBQztnQkFDYixHQUFHLElBQUksQ0FBQyxhQUFhO2dCQUNyQixRQUFRLEVBQUUsSUFBSSxDQUFDLEVBQUU7Z0JBQ2pCLE1BQU0sRUFBRSxJQUFJLENBQUMsTUFBTTthQUN0QixDQUFDLENBQUM7UUFDUCxDQUFDLENBQUMsQ0FDTCxDQUFDO0lBQ04sQ0FBQztJQUVEOzs7O09BSUc7SUFDSSxrQkFBa0I7UUFDckIsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxjQUFrQyxFQUFFLEVBQUU7WUFDOUQsTUFBTSxNQUFNLEdBQWEsRUFBRSxDQUFDO1lBQzVCLGNBQWMsQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxFQUFFO2dCQUNsQyxLQUFLLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsRUFBRTtvQkFDckIsR0FBRyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLEVBQUU7d0JBQ25CLE1BQU0sQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDO29CQUMxQixDQUFDLENBQUMsQ0FBQztnQkFDUCxDQUFDLENBQUMsQ0FBQztZQUNQLENBQUMsQ0FBQyxDQUFDO1lBRUgsT0FBTyxNQUFNLENBQUM7UUFDbEIsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNSLENBQUM7SUFFRDs7OztPQUlHO0lBQ0ksY0FBYztRQUNqQixPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLGNBQWtDLEVBQUUsRUFBRTtZQUM5RCxNQUFNLE1BQU0sR0FBMEIsRUFBRSxDQUFDO1lBQ3pDLGNBQWMsQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxFQUFFO2dCQUNsQyxLQUFLLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsRUFBRTtvQkFDckIsR0FBRyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLEVBQUU7d0JBQ25CLE1BQU0sQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7b0JBQ3JCLENBQUMsQ0FBQyxDQUFDO2dCQUNQLENBQUMsQ0FBQyxDQUFDO1lBQ1AsQ0FBQyxDQUFDLENBQUM7WUFFSCxPQUFPLE1BQU0sQ0FBQztRQUNsQixDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ1IsQ0FBQztJQUdEOzs7O09BSUc7SUFDTyxXQUFXLENBQUMsS0FBMkI7UUFDN0MsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLGFBQWEsR0FBRyxLQUFLLENBQUMsQ0FBQztJQUNoRCxDQUFDO0lBRUQ7Ozs7T0FJRztJQUNPLFdBQVc7UUFDakIsTUFBTSxJQUFJLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsSUFBSSxFQUFFLENBQUM7UUFDbkMsT0FBTyxJQUFJLENBQUMsVUFBVSxJQUFJLEVBQXdCLENBQUM7SUFDdkQsQ0FBQztpRkExWFEsZ0JBQWdCO3VFQUFoQixnQkFBZ0IsV0FBaEIsZ0JBQWdCOztTQUFoQixnQkFBZ0I7dUZBQWhCLGdCQUFnQjtjQUQ1QixVQUFVIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBTdWl0ZUNSTSBpcyBhIGN1c3RvbWVyIHJlbGF0aW9uc2hpcCBtYW5hZ2VtZW50IHByb2dyYW0gZGV2ZWxvcGVkIGJ5IFNhbGVzQWdpbGl0eSBMdGQuXG4gKiBDb3B5cmlnaHQgKEMpIDIwMjEgU2FsZXNBZ2lsaXR5IEx0ZC5cbiAqXG4gKiBUaGlzIHByb2dyYW0gaXMgZnJlZSBzb2Z0d2FyZTsgeW91IGNhbiByZWRpc3RyaWJ1dGUgaXQgYW5kL29yIG1vZGlmeSBpdCB1bmRlclxuICogdGhlIHRlcm1zIG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgdmVyc2lvbiAzIGFzIHB1Ymxpc2hlZCBieSB0aGVcbiAqIEZyZWUgU29mdHdhcmUgRm91bmRhdGlvbiB3aXRoIHRoZSBhZGRpdGlvbiBvZiB0aGUgZm9sbG93aW5nIHBlcm1pc3Npb24gYWRkZWRcbiAqIHRvIFNlY3Rpb24gMTUgYXMgcGVybWl0dGVkIGluIFNlY3Rpb24gNyhhKTogRk9SIEFOWSBQQVJUIE9GIFRIRSBDT1ZFUkVEIFdPUktcbiAqIElOIFdISUNIIFRIRSBDT1BZUklHSFQgSVMgT1dORUQgQlkgU0FMRVNBR0lMSVRZLCBTQUxFU0FHSUxJVFkgRElTQ0xBSU1TIFRIRVxuICogV0FSUkFOVFkgT0YgTk9OIElORlJJTkdFTUVOVCBPRiBUSElSRCBQQVJUWSBSSUdIVFMuXG4gKlxuICogVGhpcyBwcm9ncmFtIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsIGJ1dCBXSVRIT1VUXG4gKiBBTlkgV0FSUkFOVFk7IHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZiBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTU1xuICogRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLiBTZWUgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBmb3IgbW9yZVxuICogZGV0YWlscy5cbiAqXG4gKiBZb3Ugc2hvdWxkIGhhdmUgcmVjZWl2ZWQgYSBjb3B5IG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiAqIGFsb25nIHdpdGggdGhpcyBwcm9ncmFtLiAgSWYgbm90LCBzZWUgPGh0dHA6Ly93d3cuZ251Lm9yZy9saWNlbnNlcy8+LlxuICpcbiAqIEluIGFjY29yZGFuY2Ugd2l0aCBTZWN0aW9uIDcoYikgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuICogdmVyc2lvbiAzLCB0aGVzZSBBcHByb3ByaWF0ZSBMZWdhbCBOb3RpY2VzIG11c3QgcmV0YWluIHRoZSBkaXNwbGF5IG9mIHRoZVxuICogXCJTdXBlcmNoYXJnZWQgYnkgU3VpdGVDUk1cIiBsb2dvLiBJZiB0aGUgZGlzcGxheSBvZiB0aGUgbG9nb3MgaXMgbm90IHJlYXNvbmFibHlcbiAqIGZlYXNpYmxlIGZvciB0ZWNobmljYWwgcmVhc29ucywgdGhlIEFwcHJvcHJpYXRlIExlZ2FsIE5vdGljZXMgbXVzdCBkaXNwbGF5XG4gKiB0aGUgd29yZHMgXCJTdXBlcmNoYXJnZWQgYnkgU3VpdGVDUk1cIi5cbiAqL1xuXG5pbXBvcnQge0luamVjdGFibGV9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtCZWhhdmlvclN1YmplY3QsIGNvbWJpbmVMYXRlc3RXaXRoLCBmb3JrSm9pbiwgT2JzZXJ2YWJsZSwgb2YsIFN1YnNjcmlwdGlvbn0gZnJvbSAncnhqcyc7XG5pbXBvcnQge1xuICAgIENvbHVtbkRlZmluaXRpb24sXG4gICAgZGVlcENsb25lLFxuICAgIFJlY29yZCxcbiAgICBTZWFyY2hDcml0ZXJpYSxcbiAgICBTZWFyY2hNZXRhRmllbGRNYXAsXG4gICAgVmlld0NvbnRleHQsXG4gICAgVmlld0ZpZWxkRGVmaW5pdGlvbixcbiAgICBWaWV3TW9kZVxufSBmcm9tICdjb21tb24nO1xuaW1wb3J0IHtjYXRjaEVycm9yLCBkaXN0aW5jdFVudGlsQ2hhbmdlZCwgZmlsdGVyLCBmaW5hbGl6ZSwgbWFwLCBzdGFydFdpdGgsIHRha2UsIHRhcH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHtTdGF0ZVN0b3JlfSBmcm9tICcuLi8uLi8uLi8uLi9zdG9yZS9zdGF0ZSc7XG5pbXBvcnQge01ldGFkYXRhU3RvcmUsIFJlY29yZFZpZXdNZXRhZGF0YX0gZnJvbSAnLi4vLi4vLi4vLi4vc3RvcmUvbWV0YWRhdGEvbWV0YWRhdGEuc3RvcmUuc2VydmljZSc7XG5pbXBvcnQge01lc3NhZ2VTZXJ2aWNlfSBmcm9tICcuLi8uLi8uLi8uLi9zZXJ2aWNlcy9tZXNzYWdlL21lc3NhZ2Uuc2VydmljZSc7XG5pbXBvcnQge0FwcFN0YXRlU3RvcmV9IGZyb20gJy4uLy4uLy4uLy4uL3N0b3JlL2FwcC1zdGF0ZS9hcHAtc3RhdGUuc3RvcmUnO1xuaW1wb3J0IHtGaWx0ZXJDb250YWluZXJEYXRhLCBGaWx0ZXJDb250YWluZXJTdGF0ZX0gZnJvbSAnLi9zYXZlZC1maWx0ZXIuc3RvcmUubW9kZWwnO1xuaW1wb3J0IHtTYXZlZEZpbHRlcn0gZnJvbSAnLi4vLi4vLi4vLi4vc3RvcmUvc2F2ZWQtZmlsdGVycy9zYXZlZC1maWx0ZXIubW9kZWwnO1xuaW1wb3J0IHtGaWVsZE1hbmFnZXJ9IGZyb20gJy4uLy4uLy4uLy4uL3NlcnZpY2VzL3JlY29yZC9maWVsZC9maWVsZC5tYW5hZ2VyJztcbmltcG9ydCB7TGFuZ3VhZ2VTdG9yZX0gZnJvbSAnLi4vLi4vLi4vLi4vc3RvcmUvbGFuZ3VhZ2UvbGFuZ3VhZ2Uuc3RvcmUnO1xuaW1wb3J0IHtTYXZlZEZpbHRlclJlY29yZFN0b3JlfSBmcm9tICcuL3NhdmVkLWZpbHRlci1yZWNvcmQuc3RvcmUnO1xuaW1wb3J0IHtTYXZlZEZpbHRlclJlY29yZFN0b3JlRmFjdG9yeX0gZnJvbSAnLi9zYXZlZC1maWx0ZXItcmVjb3JkLnN0b3JlLmZhY3RvcnknO1xuXG5jb25zdCBpbml0aWFsU3RhdGU6IEZpbHRlckNvbnRhaW5lclN0YXRlID0ge1xuICAgIG1vZHVsZTogJycsXG4gICAgc2VhcmNoTW9kdWxlOiAnJyxcbiAgICByZWNvcmRJRDogJycsXG4gICAgbG9hZGluZzogZmFsc2UsXG4gICAgbW9kZTogJ2RldGFpbCcsXG59O1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgU2F2ZWRGaWx0ZXJTdG9yZSBpbXBsZW1lbnRzIFN0YXRlU3RvcmUge1xuXG4gICAgLyoqXG4gICAgICogUHVibGljIGxvbmctbGl2ZWQgb2JzZXJ2YWJsZSBzdHJlYW1zXG4gICAgICovXG4gICAgcmVjb3JkJDogT2JzZXJ2YWJsZTxTYXZlZEZpbHRlcj47XG4gICAgc3RhZ2luZ1JlY29yZCQ6IE9ic2VydmFibGU8U2F2ZWRGaWx0ZXI+O1xuICAgIGxvYWRpbmckOiBPYnNlcnZhYmxlPGJvb2xlYW4+O1xuICAgIG1vZGUkOiBPYnNlcnZhYmxlPFZpZXdNb2RlPjtcbiAgICBtZXRhJDogT2JzZXJ2YWJsZTxSZWNvcmRWaWV3TWV0YWRhdGE+O1xuICAgIG1ldGFkYXRhTG9hZGluZyQ6IE9ic2VydmFibGU8Ym9vbGVhbj47XG5cbiAgICAvKipcbiAgICAgKiBWaWV3LW1vZGVsIHRoYXQgcmVzb2x2ZXMgb25jZSBhbGwgdGhlIGRhdGEgaXMgcmVhZHkgKG9yIHVwZGF0ZWQpLlxuICAgICAqL1xuICAgIHZtJDogT2JzZXJ2YWJsZTxGaWx0ZXJDb250YWluZXJEYXRhPjtcbiAgICB2bTogRmlsdGVyQ29udGFpbmVyRGF0YTtcbiAgICByZWNvcmRTdG9yZTogU2F2ZWRGaWx0ZXJSZWNvcmRTdG9yZTtcblxuICAgIHNlYXJjaENyaXRlcmlhOiBTZWFyY2hDcml0ZXJpYTtcbiAgICBmaWx0ZXI6IFNhdmVkRmlsdGVyO1xuXG4gICAgLyoqIEludGVybmFsIFByb3BlcnRpZXMgKi9cbiAgICBwcm90ZWN0ZWQgY2FjaGUkOiBPYnNlcnZhYmxlPGFueT4gPSBudWxsO1xuICAgIHByb3RlY3RlZCBpbnRlcm5hbFN0YXRlOiBGaWx0ZXJDb250YWluZXJTdGF0ZSA9IGRlZXBDbG9uZShpbml0aWFsU3RhdGUpO1xuICAgIHByb3RlY3RlZCBzdG9yZSA9IG5ldyBCZWhhdmlvclN1YmplY3Q8RmlsdGVyQ29udGFpbmVyU3RhdGU+KHRoaXMuaW50ZXJuYWxTdGF0ZSk7XG4gICAgcHJvdGVjdGVkIHN0YXRlJCA9IHRoaXMuc3RvcmUuYXNPYnNlcnZhYmxlKCk7XG4gICAgcHJvdGVjdGVkIHN1YnM6IFN1YnNjcmlwdGlvbltdID0gW107XG4gICAgcHJvdGVjdGVkIG1ldGFkYXRhTG9hZGluZ1N0YXRlOiBCZWhhdmlvclN1YmplY3Q8Ym9vbGVhbj47XG5cbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgcHJvdGVjdGVkIGFwcFN0YXRlU3RvcmU6IEFwcFN0YXRlU3RvcmUsXG4gICAgICAgIHByb3RlY3RlZCBtZXRhOiBNZXRhZGF0YVN0b3JlLFxuICAgICAgICBwcm90ZWN0ZWQgbWVzc2FnZTogTWVzc2FnZVNlcnZpY2UsXG4gICAgICAgIHByb3RlY3RlZCBmaWVsZE1hbmFnZXI6IEZpZWxkTWFuYWdlcixcbiAgICAgICAgcHJvdGVjdGVkIGxhbmd1YWdlOiBMYW5ndWFnZVN0b3JlLFxuICAgICAgICBwcm90ZWN0ZWQgc2F2ZWRGaWx0ZXJTdG9yZUZhY3Rvcnk6IFNhdmVkRmlsdGVyUmVjb3JkU3RvcmVGYWN0b3J5XG4gICAgKSB7XG4gICAgICAgIHRoaXMubWV0YWRhdGFMb2FkaW5nU3RhdGUgPSBuZXcgQmVoYXZpb3JTdWJqZWN0KGZhbHNlKTtcbiAgICAgICAgdGhpcy5tZXRhZGF0YUxvYWRpbmckID0gdGhpcy5tZXRhZGF0YUxvYWRpbmdTdGF0ZS5hc09ic2VydmFibGUoKTtcblxuICAgICAgICB0aGlzLm1ldGEkID0gdGhpcy5tZXRhLmdldE1ldGFkYXRhKCdzYXZlZC1zZWFyY2gnLCBbJ3JlY29yZFZpZXcnXSkucGlwZShcbiAgICAgICAgICAgIHRhcCgoKSA9PiB0aGlzLm1ldGFkYXRhTG9hZGluZ1N0YXRlLm5leHQoZmFsc2UpKSxcbiAgICAgICAgICAgIG1hcChkZWZpbml0aW9ucyA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgcmVjb3JkVmlld01ldGEgPSB7Li4uZGVmaW5pdGlvbnMucmVjb3JkVmlld307XG4gICAgICAgICAgICAgICAgcmVjb3JkVmlld01ldGEuYWN0aW9ucyA9IChyZWNvcmRWaWV3TWV0YT8uYWN0aW9ucyA/PyBbXSkuZmlsdGVyKHZhbHVlID0+IHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHZhbHVlLmtleSAhPT0gJ2NhbmNlbCdcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVjb3JkVmlld01ldGE7XG4gICAgICAgICAgICB9KVxuICAgICAgICApO1xuXG4gICAgICAgIHRoaXMucmVjb3JkU3RvcmUgPSBzYXZlZEZpbHRlclN0b3JlRmFjdG9yeS5jcmVhdGUodGhpcy5nZXRWaWV3RmllbGRzJCgpKTtcblxuICAgICAgICB0aGlzLnJlY29yZCQgPSB0aGlzLnJlY29yZFN0b3JlLnN0YXRlJC5waXBlKGRpc3RpbmN0VW50aWxDaGFuZ2VkKCksIG1hcChyZWNvcmQgPT4gcmVjb3JkIGFzIFNhdmVkRmlsdGVyKSk7XG4gICAgICAgIHRoaXMuc3RhZ2luZ1JlY29yZCQgPSB0aGlzLnJlY29yZFN0b3JlLnN0YWdpbmckLnBpcGUoZGlzdGluY3RVbnRpbENoYW5nZWQoKSwgbWFwKHJlY29yZCA9PiByZWNvcmQgYXMgU2F2ZWRGaWx0ZXIpKTtcbiAgICAgICAgdGhpcy5sb2FkaW5nJCA9IHRoaXMuc3RhdGUkLnBpcGUobWFwKHN0YXRlID0+IHN0YXRlLmxvYWRpbmcpKTtcbiAgICAgICAgdGhpcy5tb2RlJCA9IHRoaXMuc3RhdGUkLnBpcGUobWFwKHN0YXRlID0+IHN0YXRlLm1vZGUpKTtcblxuICAgICAgICB0aGlzLnZtJCA9IHRoaXMuc3RhZ2luZ1JlY29yZCQucGlwZShcbiAgICAgICAgICAgIGNvbWJpbmVMYXRlc3RXaXRoKHRoaXMubW9kZSQpLFxuICAgICAgICAgICAgbWFwKChbcmVjb3JkLCBtb2RlXTogW1JlY29yZCwgVmlld01vZGVdKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy52bSA9IHtyZWNvcmQsIG1vZGV9IGFzIEZpbHRlckNvbnRhaW5lckRhdGE7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMudm07XG4gICAgICAgICAgICB9KVxuICAgICAgICApO1xuICAgIH1cblxuICAgIGdldE1vZHVsZU5hbWUoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaW50ZXJuYWxTdGF0ZS5tb2R1bGU7XG4gICAgfVxuXG4gICAgZ2V0UmVjb3JkSWQoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaW50ZXJuYWxTdGF0ZS5yZWNvcmRJRDtcbiAgICB9XG5cbiAgICBnZXRWaWV3Q29udGV4dCgpOiBWaWV3Q29udGV4dCB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBtb2R1bGU6IHRoaXMuZ2V0TW9kdWxlTmFtZSgpLFxuICAgICAgICAgICAgaWQ6IHRoaXMuZ2V0UmVjb3JkSWQoKSxcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDbGVhbiBkZXN0cm95XG4gICAgICovXG4gICAgcHVibGljIGRlc3Ryb3koKTogdm9pZCB7XG4gICAgICAgIHRoaXMuY2xlYXIoKTtcbiAgICB9XG5cblxuICAgIC8qKlxuICAgICAqIEluaXRpYWwgcmVjb3JkIGxvYWQgaWYgbm90IGNhY2hlZCBhbmQgdXBkYXRlIHN0YXRlLlxuICAgICAqIFJldHVybnMgb2JzZXJ2YWJsZSB0byBiZSB1c2VkIGluIHJlc29sdmVyIGlmIG5lZWRlZFxuICAgICAqXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHJlY29yZElEIHRvIHVzZVxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBtb2RlIHRvIHVzZVxuICAgICAqIEByZXR1cm5zIHtvYmplY3R9IE9ic2VydmFibGU8YW55PlxuICAgICAqL1xuICAgIHB1YmxpYyBpbml0KHJlY29yZElEOiBzdHJpbmcsIG1vZGUgPSAnZGV0YWlsJyBhcyBWaWV3TW9kZSk6IE9ic2VydmFibGU8UmVjb3JkPiB7XG4gICAgICAgIHRoaXMuaW50ZXJuYWxTdGF0ZS5tb2R1bGUgPSAnc2F2ZWQtc2VhcmNoJztcbiAgICAgICAgdGhpcy5pbnRlcm5hbFN0YXRlLnJlY29yZElEID0gcmVjb3JkSUQ7XG4gICAgICAgIHRoaXMuc2V0TW9kZShtb2RlKTtcblxuICAgICAgICB0aGlzLm1ldGFkYXRhTG9hZGluZ1N0YXRlLm5leHQodHJ1ZSk7XG5cbiAgICAgICAgY29uc3QgJGRhdGEgPSBmb3JrSm9pbihbdGhpcy5tZXRhJCwgdGhpcy5sb2FkKCldKTtcblxuICAgICAgICByZXR1cm4gJGRhdGEucGlwZShtYXAoKFttZXRhLCByZWNvcmRdKSA9PiByZWNvcmQpKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBJbml0IHJlY29yZFxuICAgICAqXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHNlYXJjaE1vZHVsZSBuYW1lXG4gICAgICogQHBhcmFtIHtvYmplY3R9IGZpbHRlciB0byB1c2VcbiAgICAgKiBAcGFyYW0ge29iamVjdH0gc2VhcmNoRmllbGRzIHRvIHVzZVxuICAgICAqIEBwYXJhbSB7b2JqZWN0fSBsaXN0Q29sdW1ucyBDb2x1bW5EZWZpbml0aW9uW11cbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gbW9kZSB0byB1c2VcbiAgICAgKiBAcmV0dXJucyB7b2JqZWN0fSBPYnNlcnZhYmxlPGFueT5cbiAgICAgKi9cbiAgICBwdWJsaWMgaW5pdFJlY29yZChcbiAgICAgICAgc2VhcmNoTW9kdWxlOiBzdHJpbmcsXG4gICAgICAgIGZpbHRlcjogU2F2ZWRGaWx0ZXIsXG4gICAgICAgIHNlYXJjaEZpZWxkczogU2VhcmNoTWV0YUZpZWxkTWFwLFxuICAgICAgICBsaXN0Q29sdW1uczogQ29sdW1uRGVmaW5pdGlvbltdLFxuICAgICAgICBtb2RlID0gJ2RldGFpbCcgYXMgVmlld01vZGUpOiB2b2lkIHtcblxuICAgICAgICB0aGlzLnVwZGF0ZVN0YXRlKHtcbiAgICAgICAgICAgIC4uLnRoaXMuaW50ZXJuYWxTdGF0ZSxcbiAgICAgICAgICAgIHJlY29yZElEOiBmaWx0ZXIuaWQsXG4gICAgICAgICAgICBtb2R1bGU6ICdzYXZlZC1zZWFyY2gnLFxuICAgICAgICAgICAgc2VhcmNoTW9kdWxlLFxuICAgICAgICAgICAgbW9kZVxuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLm1ldGFkYXRhTG9hZGluZ1N0YXRlLm5leHQodHJ1ZSk7XG5cbiAgICAgICAgdGhpcy5tZXRhJC5waXBlKFxuICAgICAgICAgICAgdGFrZSgxKSxcbiAgICAgICAgICAgIHRhcCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5tZXRhZGF0YUxvYWRpbmdTdGF0ZS5uZXh0KGZhbHNlKTtcbiAgICAgICAgICAgICAgICB0aGlzLmluaXRTdGFnaW5nKHNlYXJjaE1vZHVsZSwgZmlsdGVyLCBzZWFyY2hGaWVsZHMsIGxpc3RDb2x1bW5zKTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICkuc3Vic2NyaWJlKCk7XG4gICAgfVxuXG4gICAgaW5pdFZhbGlkYXRvcnMocmVjb3JkOiBSZWNvcmQpOiB2b2lkIHtcbiAgICAgICAgaWYoIXJlY29yZCB8fCAhcmVjb3JkPy5maWVsZHMgfHwgIU9iamVjdC5rZXlzKHJlY29yZD8uZmllbGRzKS5sZW5ndGgpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIE9iamVjdC5rZXlzKHJlY29yZC5maWVsZHMpLmZvckVhY2goZmllbGROYW1lID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGZpZWxkID0gcmVjb3JkLmZpZWxkc1tmaWVsZE5hbWVdO1xuICAgICAgICAgICAgY29uc3QgZm9ybUNvbnRyb2wgPSBmaWVsZD8uZm9ybUNvbnRyb2wgPz8gbnVsbDtcbiAgICAgICAgICAgIGlmICghZm9ybUNvbnRyb2wpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHRoaXMucmVzZXRWYWxpZGF0b3JzKGZpZWxkKTtcblxuICAgICAgICAgICAgY29uc3QgdmFsaWRhdG9ycyA9IGZpZWxkPy52YWxpZGF0b3JzID8/IFtdO1xuICAgICAgICAgICAgY29uc3QgYXN5bmNWYWxpZGF0b3JzID0gZmllbGQ/LmFzeW5jVmFsaWRhdG9ycyA/PyBbXTtcblxuICAgICAgICAgICAgaWYgKHZhbGlkYXRvcnMubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgZmllbGQ/LmZvcm1Db250cm9sPy5zZXRWYWxpZGF0b3JzKHZhbGlkYXRvcnMpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGFzeW5jVmFsaWRhdG9ycy5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICBmaWVsZD8uZm9ybUNvbnRyb2w/LnNldEFzeW5jVmFsaWRhdG9ycyhhc3luY1ZhbGlkYXRvcnMpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgIH1cblxuICAgIHJlc2V0VmFsaWRhdG9ycyhmaWVsZCkge1xuICAgICAgICBmaWVsZD8uZm9ybUNvbnRyb2w/LmNsZWFyVmFsaWRhdG9ycygpO1xuICAgICAgICBmaWVsZD8uZm9ybUNvbnRyb2w/LmNsZWFyQXN5bmNWYWxpZGF0b3JzKCk7XG4gICAgfVxuXG4gICAgcHVibGljIGluaXRTdGFnaW5nKFxuICAgICAgICBzZWFyY2hNb2R1bGU6IHN0cmluZyxcbiAgICAgICAgZmlsdGVyOiBTYXZlZEZpbHRlcixcbiAgICAgICAgc2VhcmNoRmllbGRzOiBTZWFyY2hNZXRhRmllbGRNYXAsXG4gICAgICAgIGxpc3RDb2x1bW5zOiBDb2x1bW5EZWZpbml0aW9uW10sXG4gICAgKSB7XG5cbiAgICAgICAgY29uc3QgZmlsdGVyUmVjb3JkOiBTYXZlZEZpbHRlciA9IGRlZXBDbG9uZSh0aGlzLnJlY29yZFN0b3JlLmV4dHJhY3RCYXNlUmVjb3JkKGZpbHRlcikpO1xuXG4gICAgICAgIGZpbHRlclJlY29yZC5zZWFyY2hNb2R1bGUgPSBzZWFyY2hNb2R1bGU7XG4gICAgICAgIHRoaXMucmVjb3JkU3RvcmUuc2V0U2VhcmNoRmllbGRzKHNlYXJjaEZpZWxkcyk7XG4gICAgICAgIHRoaXMucmVjb3JkU3RvcmUuc2V0TGlzdENvbHVtbnMobGlzdENvbHVtbnMpO1xuXG4gICAgICAgIHRoaXMucmVjb3JkU3RvcmUuc2V0U3RhZ2luZyhmaWx0ZXJSZWNvcmQpO1xuICAgICAgICB0aGlzLmluaXRWYWxpZGF0b3JzKHRoaXMucmVjb3JkU3RvcmUuZ2V0U3RhZ2luZygpKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDbGVhciBvYnNlcnZhYmxlIGNhY2hlXG4gICAgICovXG4gICAgcHVibGljIGNsZWFyKCk6IHZvaWQge1xuICAgICAgICB0aGlzLmNhY2hlJCA9IG51bGw7XG4gICAgICAgIHRoaXMudXBkYXRlU3RhdGUoZGVlcENsb25lKGluaXRpYWxTdGF0ZSkpO1xuICAgICAgICB0aGlzLm1ldGFkYXRhTG9hZGluZ1N0YXRlLnVuc3Vic2NyaWJlKCk7XG4gICAgICAgIHRoaXMubWV0YWRhdGFMb2FkaW5nU3RhdGUgPSBudWxsO1xuICAgICAgICB0aGlzLnJlY29yZFN0b3JlLmRlc3Ryb3koKTtcbiAgICAgICAgdGhpcy5yZWNvcmRTdG9yZSA9IG51bGw7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ2xlYXIgb2JzZXJ2YWJsZSBjYWNoZVxuICAgICAqL1xuICAgIHB1YmxpYyBjbGVhckF1dGhCYXNlZCgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5jbGVhcigpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEdldCBzdGFnaW5nIHJlY29yZFxuICAgICAqXG4gICAgICogQHJldHVybnMge3N0cmluZ30gVmlld01vZGVcbiAgICAgKi9cbiAgICBwdWJsaWMgZ2V0QmFzZVJlY29yZCgpOiBTYXZlZEZpbHRlciB7XG4gICAgICAgIHJldHVybiB0aGlzLnJlY29yZFN0b3JlLmdldEJhc2VSZWNvcmQoKTtcbiAgICB9XG5cblxuICAgIC8qKlxuICAgICAqIEdldCBjdXJyZW50IHZpZXcgbW9kZVxuICAgICAqXG4gICAgICogQHJldHVybnMge3N0cmluZ30gVmlld01vZGVcbiAgICAgKi9cbiAgICBwdWJsaWMgZ2V0TW9kZSgpOiBWaWV3TW9kZSB7XG4gICAgICAgIGlmICghdGhpcy5pbnRlcm5hbFN0YXRlKSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5pbnRlcm5hbFN0YXRlLm1vZGU7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU2V0IG5ldyBtb2RlXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gbW9kZSBWaWV3TW9kZVxuICAgICAqL1xuICAgIHB1YmxpYyBzZXRNb2RlKG1vZGU6IFZpZXdNb2RlKTogdm9pZCB7XG4gICAgICAgIHRoaXMudXBkYXRlU3RhdGUoey4uLnRoaXMuaW50ZXJuYWxTdGF0ZSwgbW9kZX0pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFNhdmUgcmVjb3JkXG4gICAgICovXG4gICAgcHVibGljIHNhdmUoKTogT2JzZXJ2YWJsZTxSZWNvcmQ+IHtcbiAgICAgICAgdGhpcy5hcHBTdGF0ZVN0b3JlLnVwZGF0ZUxvYWRpbmcoYCR7dGhpcy5pbnRlcm5hbFN0YXRlLm1vZHVsZX0tcmVjb3JkLXNhdmVgLCB0cnVlKTtcblxuICAgICAgICByZXR1cm4gdGhpcy5yZWNvcmRTdG9yZS5zYXZlKCkucGlwZShcbiAgICAgICAgICAgIGNhdGNoRXJyb3IoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMubWVzc2FnZS5hZGREYW5nZXJNZXNzYWdlQnlLZXkoJ0xCTF9FUlJPUl9TQVZJTkcnKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gb2Yoe30gYXMgUmVjb3JkKTtcbiAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgZmluYWxpemUoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuYXBwU3RhdGVTdG9yZS51cGRhdGVMb2FkaW5nKGAke3RoaXMuaW50ZXJuYWxTdGF0ZS5tb2R1bGV9LXJlY29yZC1zYXZlYCwgZmFsc2UpO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBWYWxpZGF0ZSBzZWFyY2ggZmlsdGVyIGZpZWxkc1xuICAgICAqXG4gICAgICogQHJldHVybnMge29iamVjdH0gT2JzZXJ2YWJsZTxib29sZWFuPlxuICAgICAqL1xuICAgIHB1YmxpYyB2YWxpZGF0ZSgpOiBPYnNlcnZhYmxlPGJvb2xlYW4+IHtcblxuICAgICAgICByZXR1cm4gZm9ya0pvaW4oW1xuICAgICAgICAgICAgdGhpcy5yZWNvcmRTdG9yZS52YWxpZGF0ZSgpLFxuICAgICAgICAgICAgdGhpcy52YWxpZGF0ZUNyaXRlcmlhKClcbiAgICAgICAgXSkucGlwZShtYXAoKFtmaWVsZHMsIGNyaXRlcmlhXSkgPT4gZmllbGRzICYmIGNyaXRlcmlhKSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVmFsaWRhdGUgc2VhcmNoIGN1cnJlbnQgaW5wdXRcbiAgICAgKlxuICAgICAqIEByZXR1cm5zIHtvYmplY3R9IE9ic2VydmFibGU8Ym9vbGVhbj5cbiAgICAgKi9cbiAgICBwdWJsaWMgdmFsaWRhdGVDcml0ZXJpYSgpOiBPYnNlcnZhYmxlPGJvb2xlYW4+IHtcblxuICAgICAgICBjb25zdCBjdXJyZW50RmlsdGVyID0gdGhpcy5yZWNvcmRTdG9yZS5nZXRTdGFnaW5nKCkgYXMgU2F2ZWRGaWx0ZXI7XG4gICAgICAgIGNvbnN0IGZvcm1Hcm91cCA9IGN1cnJlbnRGaWx0ZXIuY3JpdGVyaWFGb3JtR3JvdXA7XG4gICAgICAgIGZvcm1Hcm91cC5tYXJrQWxsQXNUb3VjaGVkKCk7XG4gICAgICAgIHJldHVybiBmb3JtR3JvdXAuc3RhdHVzQ2hhbmdlcy5waXBlKFxuICAgICAgICAgICAgc3RhcnRXaXRoKGZvcm1Hcm91cC5zdGF0dXMpLFxuICAgICAgICAgICAgZmlsdGVyKHN0YXR1cyA9PiBzdGF0dXMgIT09ICdQRU5ESU5HJyksXG4gICAgICAgICAgICB0YWtlKDEpLFxuICAgICAgICAgICAgbWFwKHN0YXR1cyA9PiBzdGF0dXMgPT09ICdWQUxJRCcpXG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogTG9hZCAvIHJlbG9hZCByZWNvcmQgdXNpbmcgY3VycmVudCBwYWdpbmF0aW9uIGFuZCBjcml0ZXJpYVxuICAgICAqXG4gICAgICogQHBhcmFtIHtib29sZWFufSB1c2VDYWNoZSBpZiB0byB1c2UgY2FjaGVcbiAgICAgKiBAcmV0dXJucyB7b2JqZWN0fSBPYnNlcnZhYmxlPFJlY29yZFZpZXdTdGF0ZT5cbiAgICAgKi9cbiAgICBwdWJsaWMgbG9hZCh1c2VDYWNoZSA9IHRydWUpOiBPYnNlcnZhYmxlPFJlY29yZD4ge1xuICAgICAgICB0aGlzLmFwcFN0YXRlU3RvcmUudXBkYXRlTG9hZGluZyhgJHt0aGlzLmludGVybmFsU3RhdGUubW9kdWxlfS1yZWNvcmQtZmV0Y2hgLCB0cnVlKTtcblxuICAgICAgICByZXR1cm4gdGhpcy5yZWNvcmRTdG9yZS5yZXRyaWV2ZVJlY29yZChcbiAgICAgICAgICAgIHRoaXMuaW50ZXJuYWxTdGF0ZS5tb2R1bGUsXG4gICAgICAgICAgICB0aGlzLmludGVybmFsU3RhdGUucmVjb3JkSUQsXG4gICAgICAgICAgICB1c2VDYWNoZVxuICAgICAgICApLnBpcGUoXG4gICAgICAgICAgICB0YXAoKGRhdGE6IFJlY29yZCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuYXBwU3RhdGVTdG9yZS51cGRhdGVMb2FkaW5nKGAke3RoaXMuaW50ZXJuYWxTdGF0ZS5tb2R1bGV9LXJlY29yZC1mZXRjaGAsIGZhbHNlKTtcblxuICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlU3RhdGUoe1xuICAgICAgICAgICAgICAgICAgICAuLi50aGlzLmludGVybmFsU3RhdGUsXG4gICAgICAgICAgICAgICAgICAgIHJlY29yZElEOiBkYXRhLmlkLFxuICAgICAgICAgICAgICAgICAgICBtb2R1bGU6IGRhdGEubW9kdWxlLFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBHZXQgdmlldyBmaWVsZHMgb2JzZXJ2YWJsZVxuICAgICAqXG4gICAgICogQHJldHVybnMge29iamVjdH0gT2JzZXJ2YWJsZTxzdHJpbmdbXT5cbiAgICAgKi9cbiAgICBwdWJsaWMgZ2V0Vmlld0ZpZWxkc0tleXMkKCk6IE9ic2VydmFibGU8c3RyaW5nW10+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMubWV0YSQucGlwZShtYXAoKHJlY29yZE1ldGFkYXRhOiBSZWNvcmRWaWV3TWV0YWRhdGEpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGZpZWxkczogc3RyaW5nW10gPSBbXTtcbiAgICAgICAgICAgIHJlY29yZE1ldGFkYXRhLnBhbmVscy5mb3JFYWNoKHBhbmVsID0+IHtcbiAgICAgICAgICAgICAgICBwYW5lbC5yb3dzLmZvckVhY2gocm93ID0+IHtcbiAgICAgICAgICAgICAgICAgICAgcm93LmNvbHMuZm9yRWFjaChjb2wgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgZmllbGRzLnB1c2goY29sLm5hbWUpO1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICByZXR1cm4gZmllbGRzO1xuICAgICAgICB9KSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogR2V0IHZpZXcgZmllbGRzIG9ic2VydmFibGVcbiAgICAgKlxuICAgICAqIEByZXR1cm5zIHtvYmplY3R9IE9ic2VydmFibGU8Vmlld0ZpZWxkRGVmaW5pdGlvbltdPlxuICAgICAqL1xuICAgIHB1YmxpYyBnZXRWaWV3RmllbGRzJCgpOiBPYnNlcnZhYmxlPFZpZXdGaWVsZERlZmluaXRpb25bXT4ge1xuICAgICAgICByZXR1cm4gdGhpcy5tZXRhJC5waXBlKG1hcCgocmVjb3JkTWV0YWRhdGE6IFJlY29yZFZpZXdNZXRhZGF0YSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgZmllbGRzOiBWaWV3RmllbGREZWZpbml0aW9uW10gPSBbXTtcbiAgICAgICAgICAgIHJlY29yZE1ldGFkYXRhLnBhbmVscy5mb3JFYWNoKHBhbmVsID0+IHtcbiAgICAgICAgICAgICAgICBwYW5lbC5yb3dzLmZvckVhY2gocm93ID0+IHtcbiAgICAgICAgICAgICAgICAgICAgcm93LmNvbHMuZm9yRWFjaChjb2wgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgZmllbGRzLnB1c2goY29sKTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgcmV0dXJuIGZpZWxkcztcbiAgICAgICAgfSkpO1xuICAgIH1cblxuXG4gICAgLyoqXG4gICAgICogVXBkYXRlIHRoZSBzdGF0ZVxuICAgICAqXG4gICAgICogQHBhcmFtIHtvYmplY3R9IHN0YXRlIHRvIHNldFxuICAgICAqL1xuICAgIHByb3RlY3RlZCB1cGRhdGVTdGF0ZShzdGF0ZTogRmlsdGVyQ29udGFpbmVyU3RhdGUpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5zdG9yZS5uZXh0KHRoaXMuaW50ZXJuYWxTdGF0ZSA9IHN0YXRlKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBHZXQgcmVjb3JkIHZpZXcgbWV0YWRhdGFcbiAgICAgKlxuICAgICAqIEByZXR1cm5zIHtvYmplY3R9IG1ldGFkYXRhIFJlY29yZFZpZXdNZXRhZGF0YVxuICAgICAqL1xuICAgIHByb3RlY3RlZCBnZXRNZXRhZGF0YSgpOiBSZWNvcmRWaWV3TWV0YWRhdGEge1xuICAgICAgICBjb25zdCBtZXRhID0gdGhpcy5tZXRhLmdldCgpIHx8IHt9O1xuICAgICAgICByZXR1cm4gbWV0YS5yZWNvcmRWaWV3IHx8IHt9IGFzIFJlY29yZFZpZXdNZXRhZGF0YTtcbiAgICB9XG59XG4iXX0=