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
import { map } from 'rxjs/operators';
import { BaseRecordContainerStore } from '../../../../store/record-container/base-record-container.store';
import { AppStateStore } from '../../../../store/app-state/app-state.store';
import { MetadataStore } from '../../../../store/metadata/metadata.store.service';
import { MessageService } from '../../../../services/message/message.service';
import { FieldManager } from '../../../../services/record/field/field.manager';
import { LanguageStore } from '../../../../store/language/language.store';
import { RecordStoreFactory } from '../../../../store/record/record.store.factory';
import * as i0 from "@angular/core";
import * as i1 from "../../../../store/app-state/app-state.store";
import * as i2 from "../../../../store/metadata/metadata.store.service";
import * as i3 from "../../../../services/message/message.service";
import * as i4 from "../../../../services/record/field/field.manager";
import * as i5 from "../../../../store/language/language.store";
import * as i6 from "../../../../store/record/record.store.factory";
class RecordPanelStore extends BaseRecordContainerStore {
    constructor(appStateStore, meta, message, fieldManager, language, storeFactory) {
        super(appStateStore, meta, message, fieldManager, language, storeFactory);
        this.appStateStore = appStateStore;
        this.meta = meta;
        this.message = message;
        this.fieldManager = fieldManager;
        this.language = language;
        this.storeFactory = storeFactory;
    }
    /**
     * Get view fields observable
     *
     * @returns {object} Observable<ViewFieldDefinition[]>
     */
    getViewFields$() {
        return this.meta$.pipe(map((meta) => {
            return meta.fields;
        }));
    }
    /**
     * Get view fields keys observable
     *
     * @returns {object} Observable<string[]>
     */
    getViewFieldsKeys$() {
        return this.meta$.pipe(map((meta) => {
            if (!meta.fields || !meta.fields.length) {
                return [];
            }
            const keys = [];
            meta.fields.forEach(field => {
                keys.push(field.name);
            });
            return keys;
        }));
    }
    /**
     * Init record
     *
     * @param {object} record to use
     * @param {string} mode to use
     * @param {boolean} loadMetadata to use
     * @returns {object} Observable<any>
     */
    initRecord(record, mode = 'detail', loadMetadata = true) {
        super.initRecord(record, mode, loadMetadata);
        this.setRecord(record);
    }
    static { this.ɵfac = function RecordPanelStore_Factory(t) { return new (t || RecordPanelStore)(i0.ɵɵinject(i1.AppStateStore), i0.ɵɵinject(i2.MetadataStore), i0.ɵɵinject(i3.MessageService), i0.ɵɵinject(i4.FieldManager), i0.ɵɵinject(i5.LanguageStore), i0.ɵɵinject(i6.RecordStoreFactory)); }; }
    static { this.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: RecordPanelStore, factory: RecordPanelStore.ɵfac }); }
}
export { RecordPanelStore };
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(RecordPanelStore, [{
        type: Injectable
    }], function () { return [{ type: i1.AppStateStore }, { type: i2.MetadataStore }, { type: i3.MessageService }, { type: i4.FieldManager }, { type: i5.LanguageStore }, { type: i6.RecordStoreFactory }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVjb3JkLXBhbmVsLnN0b3JlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vY29yZS9hcHAvY29yZS9zcmMvbGliL2NvbnRhaW5lcnMvcmVjb3JkLXBhbmVsL3N0b3JlL3JlY29yZC1wYW5lbC9yZWNvcmQtcGFuZWwuc3RvcmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQXdCRztBQUNILE9BQU8sRUFBQyxVQUFVLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFHekMsT0FBTyxFQUFDLEdBQUcsRUFBQyxNQUFNLGdCQUFnQixDQUFDO0FBQ25DLE9BQU8sRUFBQyx3QkFBd0IsRUFBQyxNQUFNLGdFQUFnRSxDQUFDO0FBRXhHLE9BQU8sRUFBQyxhQUFhLEVBQUMsTUFBTSw2Q0FBNkMsQ0FBQztBQUMxRSxPQUFPLEVBQUMsYUFBYSxFQUFDLE1BQU0sbURBQW1ELENBQUM7QUFDaEYsT0FBTyxFQUFDLGNBQWMsRUFBQyxNQUFNLDhDQUE4QyxDQUFDO0FBQzVFLE9BQU8sRUFBQyxZQUFZLEVBQUMsTUFBTSxpREFBaUQsQ0FBQztBQUM3RSxPQUFPLEVBQUMsYUFBYSxFQUFDLE1BQU0sMkNBQTJDLENBQUM7QUFDeEUsT0FBTyxFQUFDLGtCQUFrQixFQUFDLE1BQU0sK0NBQStDLENBQUM7Ozs7Ozs7O0FBRWpGLE1BQ2EsZ0JBQWlCLFNBQVEsd0JBQTZDO0lBRS9FLFlBQ2MsYUFBNEIsRUFDNUIsSUFBbUIsRUFDbkIsT0FBdUIsRUFDdkIsWUFBMEIsRUFDMUIsUUFBdUIsRUFDdkIsWUFBZ0M7UUFHMUMsS0FBSyxDQUNELGFBQWEsRUFDYixJQUFJLEVBQ0osT0FBTyxFQUNQLFlBQVksRUFDWixRQUFRLEVBQ1IsWUFBWSxDQUNmLENBQUM7UUFmUSxrQkFBYSxHQUFiLGFBQWEsQ0FBZTtRQUM1QixTQUFJLEdBQUosSUFBSSxDQUFlO1FBQ25CLFlBQU8sR0FBUCxPQUFPLENBQWdCO1FBQ3ZCLGlCQUFZLEdBQVosWUFBWSxDQUFjO1FBQzFCLGFBQVEsR0FBUixRQUFRLENBQWU7UUFDdkIsaUJBQVksR0FBWixZQUFZLENBQW9CO0lBVzlDLENBQUM7SUFFRDs7OztPQUlHO0lBQ0ksY0FBYztRQUNqQixPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQXlCLEVBQUUsRUFBRTtZQUNyRCxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUM7UUFDdkIsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNSLENBQUM7SUFFRDs7OztPQUlHO0lBQ0ksa0JBQWtCO1FBQ3JCLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBeUIsRUFBRSxFQUFFO1lBQ3JELElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEVBQUU7Z0JBQ3JDLE9BQU8sRUFBRSxDQUFDO2FBQ2I7WUFFRCxNQUFNLElBQUksR0FBRyxFQUFFLENBQUM7WUFFaEIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLEVBQUU7Z0JBQ3hCLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQzFCLENBQUMsQ0FBQyxDQUFDO1lBRUgsT0FBTyxJQUFJLENBQUM7UUFDaEIsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNSLENBQUM7SUFFRDs7Ozs7OztPQU9HO0lBQ0ksVUFBVSxDQUFDLE1BQWMsRUFBRSxPQUFpQixRQUFvQixFQUFFLFlBQVksR0FBRyxJQUFJO1FBRXhGLEtBQUssQ0FBQyxVQUFVLENBQUMsTUFBTSxFQUFFLElBQUksRUFBRSxZQUFZLENBQUMsQ0FBQztRQUM3QyxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQzNCLENBQUM7aUZBakVRLGdCQUFnQjt1RUFBaEIsZ0JBQWdCLFdBQWhCLGdCQUFnQjs7U0FBaEIsZ0JBQWdCO3VGQUFoQixnQkFBZ0I7Y0FENUIsVUFBVSIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogU3VpdGVDUk0gaXMgYSBjdXN0b21lciByZWxhdGlvbnNoaXAgbWFuYWdlbWVudCBwcm9ncmFtIGRldmVsb3BlZCBieSBTYWxlc0FnaWxpdHkgTHRkLlxuICogQ29weXJpZ2h0IChDKSAyMDIxIFNhbGVzQWdpbGl0eSBMdGQuXG4gKlxuICogVGhpcyBwcm9ncmFtIGlzIGZyZWUgc29mdHdhcmU7IHlvdSBjYW4gcmVkaXN0cmlidXRlIGl0IGFuZC9vciBtb2RpZnkgaXQgdW5kZXJcbiAqIHRoZSB0ZXJtcyBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIHZlcnNpb24gMyBhcyBwdWJsaXNoZWQgYnkgdGhlXG4gKiBGcmVlIFNvZnR3YXJlIEZvdW5kYXRpb24gd2l0aCB0aGUgYWRkaXRpb24gb2YgdGhlIGZvbGxvd2luZyBwZXJtaXNzaW9uIGFkZGVkXG4gKiB0byBTZWN0aW9uIDE1IGFzIHBlcm1pdHRlZCBpbiBTZWN0aW9uIDcoYSk6IEZPUiBBTlkgUEFSVCBPRiBUSEUgQ09WRVJFRCBXT1JLXG4gKiBJTiBXSElDSCBUSEUgQ09QWVJJR0hUIElTIE9XTkVEIEJZIFNBTEVTQUdJTElUWSwgU0FMRVNBR0lMSVRZIERJU0NMQUlNUyBUSEVcbiAqIFdBUlJBTlRZIE9GIE5PTiBJTkZSSU5HRU1FTlQgT0YgVEhJUkQgUEFSVFkgUklHSFRTLlxuICpcbiAqIFRoaXMgcHJvZ3JhbSBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLCBidXQgV0lUSE9VVFxuICogQU5ZIFdBUlJBTlRZOyB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2YgTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1NcbiAqIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS4gU2VlIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgZm9yIG1vcmVcbiAqIGRldGFpbHMuXG4gKlxuICogWW91IHNob3VsZCBoYXZlIHJlY2VpdmVkIGEgY29weSBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4gKiBhbG9uZyB3aXRoIHRoaXMgcHJvZ3JhbS4gIElmIG5vdCwgc2VlIDxodHRwOi8vd3d3LmdudS5vcmcvbGljZW5zZXMvPi5cbiAqXG4gKiBJbiBhY2NvcmRhbmNlIHdpdGggU2VjdGlvbiA3KGIpIG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiAqIHZlcnNpb24gMywgdGhlc2UgQXBwcm9wcmlhdGUgTGVnYWwgTm90aWNlcyBtdXN0IHJldGFpbiB0aGUgZGlzcGxheSBvZiB0aGVcbiAqIFwiU3VwZXJjaGFyZ2VkIGJ5IFN1aXRlQ1JNXCIgbG9nby4gSWYgdGhlIGRpc3BsYXkgb2YgdGhlIGxvZ29zIGlzIG5vdCByZWFzb25hYmx5XG4gKiBmZWFzaWJsZSBmb3IgdGVjaG5pY2FsIHJlYXNvbnMsIHRoZSBBcHByb3ByaWF0ZSBMZWdhbCBOb3RpY2VzIG11c3QgZGlzcGxheVxuICogdGhlIHdvcmRzIFwiU3VwZXJjaGFyZ2VkIGJ5IFN1aXRlQ1JNXCIuXG4gKi9cbmltcG9ydCB7SW5qZWN0YWJsZX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge09ic2VydmFibGV9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHtSZWNvcmQsIFZpZXdGaWVsZERlZmluaXRpb24sIFZpZXdNb2RlfSBmcm9tICdjb21tb24nO1xuaW1wb3J0IHttYXB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7QmFzZVJlY29yZENvbnRhaW5lclN0b3JlfSBmcm9tICcuLi8uLi8uLi8uLi9zdG9yZS9yZWNvcmQtY29udGFpbmVyL2Jhc2UtcmVjb3JkLWNvbnRhaW5lci5zdG9yZSc7XG5pbXBvcnQge1JlY29yZFBhbmVsTWV0YWRhdGF9IGZyb20gJy4vcmVjb3JkLXBhbmVsLnN0b3JlLm1vZGVsJztcbmltcG9ydCB7QXBwU3RhdGVTdG9yZX0gZnJvbSAnLi4vLi4vLi4vLi4vc3RvcmUvYXBwLXN0YXRlL2FwcC1zdGF0ZS5zdG9yZSc7XG5pbXBvcnQge01ldGFkYXRhU3RvcmV9IGZyb20gJy4uLy4uLy4uLy4uL3N0b3JlL21ldGFkYXRhL21ldGFkYXRhLnN0b3JlLnNlcnZpY2UnO1xuaW1wb3J0IHtNZXNzYWdlU2VydmljZX0gZnJvbSAnLi4vLi4vLi4vLi4vc2VydmljZXMvbWVzc2FnZS9tZXNzYWdlLnNlcnZpY2UnO1xuaW1wb3J0IHtGaWVsZE1hbmFnZXJ9IGZyb20gJy4uLy4uLy4uLy4uL3NlcnZpY2VzL3JlY29yZC9maWVsZC9maWVsZC5tYW5hZ2VyJztcbmltcG9ydCB7TGFuZ3VhZ2VTdG9yZX0gZnJvbSAnLi4vLi4vLi4vLi4vc3RvcmUvbGFuZ3VhZ2UvbGFuZ3VhZ2Uuc3RvcmUnO1xuaW1wb3J0IHtSZWNvcmRTdG9yZUZhY3Rvcnl9IGZyb20gJy4uLy4uLy4uLy4uL3N0b3JlL3JlY29yZC9yZWNvcmQuc3RvcmUuZmFjdG9yeSc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBSZWNvcmRQYW5lbFN0b3JlIGV4dGVuZHMgQmFzZVJlY29yZENvbnRhaW5lclN0b3JlPFJlY29yZFBhbmVsTWV0YWRhdGE+IHtcblxuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBwcm90ZWN0ZWQgYXBwU3RhdGVTdG9yZTogQXBwU3RhdGVTdG9yZSxcbiAgICAgICAgcHJvdGVjdGVkIG1ldGE6IE1ldGFkYXRhU3RvcmUsXG4gICAgICAgIHByb3RlY3RlZCBtZXNzYWdlOiBNZXNzYWdlU2VydmljZSxcbiAgICAgICAgcHJvdGVjdGVkIGZpZWxkTWFuYWdlcjogRmllbGRNYW5hZ2VyLFxuICAgICAgICBwcm90ZWN0ZWQgbGFuZ3VhZ2U6IExhbmd1YWdlU3RvcmUsXG4gICAgICAgIHByb3RlY3RlZCBzdG9yZUZhY3Rvcnk6IFJlY29yZFN0b3JlRmFjdG9yeVxuICAgICkge1xuXG4gICAgICAgIHN1cGVyKFxuICAgICAgICAgICAgYXBwU3RhdGVTdG9yZSxcbiAgICAgICAgICAgIG1ldGEsXG4gICAgICAgICAgICBtZXNzYWdlLFxuICAgICAgICAgICAgZmllbGRNYW5hZ2VyLFxuICAgICAgICAgICAgbGFuZ3VhZ2UsXG4gICAgICAgICAgICBzdG9yZUZhY3RvcnlcbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBHZXQgdmlldyBmaWVsZHMgb2JzZXJ2YWJsZVxuICAgICAqXG4gICAgICogQHJldHVybnMge29iamVjdH0gT2JzZXJ2YWJsZTxWaWV3RmllbGREZWZpbml0aW9uW10+XG4gICAgICovXG4gICAgcHVibGljIGdldFZpZXdGaWVsZHMkKCk6IE9ic2VydmFibGU8Vmlld0ZpZWxkRGVmaW5pdGlvbltdPiB7XG4gICAgICAgIHJldHVybiB0aGlzLm1ldGEkLnBpcGUobWFwKChtZXRhOiBSZWNvcmRQYW5lbE1ldGFkYXRhKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gbWV0YS5maWVsZHM7XG4gICAgICAgIH0pKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBHZXQgdmlldyBmaWVsZHMga2V5cyBvYnNlcnZhYmxlXG4gICAgICpcbiAgICAgKiBAcmV0dXJucyB7b2JqZWN0fSBPYnNlcnZhYmxlPHN0cmluZ1tdPlxuICAgICAqL1xuICAgIHB1YmxpYyBnZXRWaWV3RmllbGRzS2V5cyQoKTogT2JzZXJ2YWJsZTxzdHJpbmdbXT4ge1xuICAgICAgICByZXR1cm4gdGhpcy5tZXRhJC5waXBlKG1hcCgobWV0YTogUmVjb3JkUGFuZWxNZXRhZGF0YSkgPT4ge1xuICAgICAgICAgICAgaWYgKCFtZXRhLmZpZWxkcyB8fCAhbWV0YS5maWVsZHMubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIFtdO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBjb25zdCBrZXlzID0gW107XG5cbiAgICAgICAgICAgIG1ldGEuZmllbGRzLmZvckVhY2goZmllbGQgPT4ge1xuICAgICAgICAgICAgICAgIGtleXMucHVzaChmaWVsZC5uYW1lKTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICByZXR1cm4ga2V5cztcbiAgICAgICAgfSkpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEluaXQgcmVjb3JkXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge29iamVjdH0gcmVjb3JkIHRvIHVzZVxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBtb2RlIHRvIHVzZVxuICAgICAqIEBwYXJhbSB7Ym9vbGVhbn0gbG9hZE1ldGFkYXRhIHRvIHVzZVxuICAgICAqIEByZXR1cm5zIHtvYmplY3R9IE9ic2VydmFibGU8YW55PlxuICAgICAqL1xuICAgIHB1YmxpYyBpbml0UmVjb3JkKHJlY29yZDogUmVjb3JkLCBtb2RlOiBWaWV3TW9kZSA9ICdkZXRhaWwnIGFzIFZpZXdNb2RlLCBsb2FkTWV0YWRhdGEgPSB0cnVlKTogdm9pZCB7XG5cbiAgICAgICAgc3VwZXIuaW5pdFJlY29yZChyZWNvcmQsIG1vZGUsIGxvYWRNZXRhZGF0YSk7XG4gICAgICAgIHRoaXMuc2V0UmVjb3JkKHJlY29yZCk7XG4gICAgfVxuXG59XG4iXX0=