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
import { RecordListModalComponent } from '../../containers/record-list-modal/components/record-list-modal/record-list-modal.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { LanguageStore } from '../../store/language/language.store';
import { MessageService } from '../message/message.service';
import * as i0 from "@angular/core";
import * as i1 from "../../store/language/language.store";
import * as i2 from "../message/message.service";
import * as i3 from "@ng-bootstrap/ng-bootstrap";
class SelectModalService {
    constructor(languageStore, message, modalService) {
        this.languageStore = languageStore;
        this.message = message;
        this.modalService = modalService;
    }
    /**
     * Get Selected Record
     *
     * @param {string} selectModule: The Modal module
     * @param onSelectCallback
     * @returns {void}
     */
    showSelectModal(selectModule, onSelectCallback = null) {
        const modal = this.modalService.open(RecordListModalComponent, { size: 'xl', scrollable: true });
        modal.componentInstance.module = selectModule;
        modal.result.then((result) => {
            if (!result || !result.selection || !result.selection.selected) {
                return;
            }
            const record = this.getSelectedRecord(result);
            if (!record.id) {
                let message = this.languageStore.getFieldLabel('ERROR_NO_RECORD');
                this.message.addDangerMessage(message);
                return;
            }
            if (onSelectCallback !== null) {
                onSelectCallback(record);
            }
        });
    }
    /**
     * Get Selected Record
     *
     * @param {object} data RecordListModalResult
     * @returns {object} Record
     */
    getSelectedRecord(data) {
        let id = '';
        Object.keys(data.selection.selected).some(selected => {
            id = selected;
            return true;
        });
        let record = null;
        data.records.some(rec => {
            if (rec && rec.id === id) {
                record = rec;
                return true;
            }
        });
        return record;
    }
    static { this.ɵfac = function SelectModalService_Factory(t) { return new (t || SelectModalService)(i0.ɵɵinject(i1.LanguageStore), i0.ɵɵinject(i2.MessageService), i0.ɵɵinject(i3.NgbModal)); }; }
    static { this.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: SelectModalService, factory: SelectModalService.ɵfac, providedIn: 'root' }); }
}
export { SelectModalService };
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(SelectModalService, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: i1.LanguageStore }, { type: i2.MessageService }, { type: i3.NgbModal }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VsZWN0LW1vZGFsLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9jb3JlL2FwcC9jb3JlL3NyYy9saWIvc2VydmljZXMvbW9kYWxzL3NlbGVjdC1tb2RhbC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0F3Qkc7QUFFSCxPQUFPLEVBQUMsVUFBVSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBRXpDLE9BQU8sRUFBQyx3QkFBd0IsRUFBQyxNQUFNLDZGQUE2RixDQUFDO0FBRXJJLE9BQU8sRUFBQyxRQUFRLEVBQUMsTUFBTSw0QkFBNEIsQ0FBQztBQUNwRCxPQUFPLEVBQUMsYUFBYSxFQUFDLE1BQU0scUNBQXFDLENBQUM7QUFDbEUsT0FBTyxFQUFDLGNBQWMsRUFBQyxNQUFNLDRCQUE0QixDQUFDOzs7OztBQUcxRCxNQUdhLGtCQUFrQjtJQUUzQixZQUNjLGFBQTRCLEVBQzVCLE9BQXVCLEVBQ3ZCLFlBQXNCO1FBRnRCLGtCQUFhLEdBQWIsYUFBYSxDQUFlO1FBQzVCLFlBQU8sR0FBUCxPQUFPLENBQWdCO1FBQ3ZCLGlCQUFZLEdBQVosWUFBWSxDQUFVO0lBRXBDLENBQUM7SUFHRDs7Ozs7O09BTUc7SUFDSCxlQUFlLENBQUMsWUFBb0IsRUFBRSxtQkFBNkIsSUFBSTtRQUVuRSxNQUFNLEtBQUssR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyx3QkFBd0IsRUFBRSxFQUFDLElBQUksRUFBRSxJQUFJLEVBQUUsVUFBVSxFQUFFLElBQUksRUFBQyxDQUFDLENBQUM7UUFDL0YsS0FBSyxDQUFDLGlCQUFpQixDQUFDLE1BQU0sR0FBRyxZQUFZLENBQUM7UUFDOUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxNQUE2QixFQUFFLEVBQUU7WUFFaEQsSUFBSSxDQUFDLE1BQU0sSUFBSSxDQUFDLE1BQU0sQ0FBQyxTQUFTLElBQUksQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLFFBQVEsRUFBRTtnQkFDNUQsT0FBTzthQUNWO1lBRUQsTUFBTSxNQUFNLEdBQVcsSUFBSSxDQUFDLGlCQUFpQixDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQ3RELElBQUksQ0FBQyxNQUFNLENBQUMsRUFBRSxFQUFFO2dCQUNaLElBQUksT0FBTyxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsYUFBYSxDQUFDLGlCQUFpQixDQUFDLENBQUM7Z0JBQ2xFLElBQUksQ0FBQyxPQUFPLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxDQUFDLENBQUM7Z0JBQ3ZDLE9BQU87YUFDVjtZQUVELElBQUksZ0JBQWdCLEtBQUssSUFBSSxFQUFFO2dCQUMzQixnQkFBZ0IsQ0FBQyxNQUFNLENBQUMsQ0FBQzthQUM1QjtRQUNMLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUVEOzs7OztPQUtHO0lBQ08saUJBQWlCLENBQUMsSUFBMkI7UUFFbkQsSUFBSSxFQUFFLEdBQUcsRUFBRSxDQUFDO1FBQ1osTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsRUFBRTtZQUNqRCxFQUFFLEdBQUcsUUFBUSxDQUFDO1lBQ2QsT0FBTyxJQUFJLENBQUM7UUFDaEIsQ0FBQyxDQUFDLENBQUM7UUFFSCxJQUFJLE1BQU0sR0FBVyxJQUFJLENBQUM7UUFFMUIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUU7WUFDcEIsSUFBSSxHQUFHLElBQUksR0FBRyxDQUFDLEVBQUUsS0FBSyxFQUFFLEVBQUU7Z0JBQ3RCLE1BQU0sR0FBRyxHQUFHLENBQUM7Z0JBQ2IsT0FBTyxJQUFJLENBQUM7YUFDZjtRQUNMLENBQUMsQ0FBQyxDQUFDO1FBRUgsT0FBTyxNQUFNLENBQUM7SUFDbEIsQ0FBQzttRkFoRVEsa0JBQWtCO3VFQUFsQixrQkFBa0IsV0FBbEIsa0JBQWtCLG1CQUZmLE1BQU07O1NBRVQsa0JBQWtCO3VGQUFsQixrQkFBa0I7Y0FIOUIsVUFBVTtlQUFDO2dCQUNSLFVBQVUsRUFBRSxNQUFNO2FBQ3JCIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBTdWl0ZUNSTSBpcyBhIGN1c3RvbWVyIHJlbGF0aW9uc2hpcCBtYW5hZ2VtZW50IHByb2dyYW0gZGV2ZWxvcGVkIGJ5IFNhbGVzQWdpbGl0eSBMdGQuXG4gKiBDb3B5cmlnaHQgKEMpIDIwMjEgU2FsZXNBZ2lsaXR5IEx0ZC5cbiAqXG4gKiBUaGlzIHByb2dyYW0gaXMgZnJlZSBzb2Z0d2FyZTsgeW91IGNhbiByZWRpc3RyaWJ1dGUgaXQgYW5kL29yIG1vZGlmeSBpdCB1bmRlclxuICogdGhlIHRlcm1zIG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgdmVyc2lvbiAzIGFzIHB1Ymxpc2hlZCBieSB0aGVcbiAqIEZyZWUgU29mdHdhcmUgRm91bmRhdGlvbiB3aXRoIHRoZSBhZGRpdGlvbiBvZiB0aGUgZm9sbG93aW5nIHBlcm1pc3Npb24gYWRkZWRcbiAqIHRvIFNlY3Rpb24gMTUgYXMgcGVybWl0dGVkIGluIFNlY3Rpb24gNyhhKTogRk9SIEFOWSBQQVJUIE9GIFRIRSBDT1ZFUkVEIFdPUktcbiAqIElOIFdISUNIIFRIRSBDT1BZUklHSFQgSVMgT1dORUQgQlkgU0FMRVNBR0lMSVRZLCBTQUxFU0FHSUxJVFkgRElTQ0xBSU1TIFRIRVxuICogV0FSUkFOVFkgT0YgTk9OIElORlJJTkdFTUVOVCBPRiBUSElSRCBQQVJUWSBSSUdIVFMuXG4gKlxuICogVGhpcyBwcm9ncmFtIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsIGJ1dCBXSVRIT1VUXG4gKiBBTlkgV0FSUkFOVFk7IHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZiBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTU1xuICogRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLiBTZWUgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBmb3IgbW9yZVxuICogZGV0YWlscy5cbiAqXG4gKiBZb3Ugc2hvdWxkIGhhdmUgcmVjZWl2ZWQgYSBjb3B5IG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiAqIGFsb25nIHdpdGggdGhpcyBwcm9ncmFtLiAgSWYgbm90LCBzZWUgPGh0dHA6Ly93d3cuZ251Lm9yZy9saWNlbnNlcy8+LlxuICpcbiAqIEluIGFjY29yZGFuY2Ugd2l0aCBTZWN0aW9uIDcoYikgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuICogdmVyc2lvbiAzLCB0aGVzZSBBcHByb3ByaWF0ZSBMZWdhbCBOb3RpY2VzIG11c3QgcmV0YWluIHRoZSBkaXNwbGF5IG9mIHRoZVxuICogXCJTdXBlcmNoYXJnZWQgYnkgU3VpdGVDUk1cIiBsb2dvLiBJZiB0aGUgZGlzcGxheSBvZiB0aGUgbG9nb3MgaXMgbm90IHJlYXNvbmFibHlcbiAqIGZlYXNpYmxlIGZvciB0ZWNobmljYWwgcmVhc29ucywgdGhlIEFwcHJvcHJpYXRlIExlZ2FsIE5vdGljZXMgbXVzdCBkaXNwbGF5XG4gKiB0aGUgd29yZHMgXCJTdXBlcmNoYXJnZWQgYnkgU3VpdGVDUk1cIi5cbiAqL1xuXG5pbXBvcnQge0luamVjdGFibGV9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtSZWNvcmR9IGZyb20gJ2NvbW1vbic7XG5pbXBvcnQge1JlY29yZExpc3RNb2RhbENvbXBvbmVudH0gZnJvbSAnLi4vLi4vY29udGFpbmVycy9yZWNvcmQtbGlzdC1tb2RhbC9jb21wb25lbnRzL3JlY29yZC1saXN0LW1vZGFsL3JlY29yZC1saXN0LW1vZGFsLmNvbXBvbmVudCc7XG5pbXBvcnQge1JlY29yZExpc3RNb2RhbFJlc3VsdH0gZnJvbSAnLi4vLi4vY29udGFpbmVycy9yZWNvcmQtbGlzdC1tb2RhbC9jb21wb25lbnRzL3JlY29yZC1saXN0LW1vZGFsL3JlY29yZC1saXN0LW1vZGFsLm1vZGVsJztcbmltcG9ydCB7TmdiTW9kYWx9IGZyb20gJ0BuZy1ib290c3RyYXAvbmctYm9vdHN0cmFwJztcbmltcG9ydCB7TGFuZ3VhZ2VTdG9yZX0gZnJvbSAnLi4vLi4vc3RvcmUvbGFuZ3VhZ2UvbGFuZ3VhZ2Uuc3RvcmUnO1xuaW1wb3J0IHtNZXNzYWdlU2VydmljZX0gZnJvbSAnLi4vbWVzc2FnZS9tZXNzYWdlLnNlcnZpY2UnO1xuXG5cbkBJbmplY3RhYmxlKHtcbiAgICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgU2VsZWN0TW9kYWxTZXJ2aWNlIHtcblxuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBwcm90ZWN0ZWQgbGFuZ3VhZ2VTdG9yZTogTGFuZ3VhZ2VTdG9yZSxcbiAgICAgICAgcHJvdGVjdGVkIG1lc3NhZ2U6IE1lc3NhZ2VTZXJ2aWNlLFxuICAgICAgICBwcm90ZWN0ZWQgbW9kYWxTZXJ2aWNlOiBOZ2JNb2RhbFxuICAgICkge1xuICAgIH1cblxuXG4gICAgLyoqXG4gICAgICogR2V0IFNlbGVjdGVkIFJlY29yZFxuICAgICAqXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHNlbGVjdE1vZHVsZTogVGhlIE1vZGFsIG1vZHVsZVxuICAgICAqIEBwYXJhbSBvblNlbGVjdENhbGxiYWNrXG4gICAgICogQHJldHVybnMge3ZvaWR9XG4gICAgICovXG4gICAgc2hvd1NlbGVjdE1vZGFsKHNlbGVjdE1vZHVsZTogc3RyaW5nLCBvblNlbGVjdENhbGxiYWNrOiBGdW5jdGlvbiA9IG51bGwpOiB2b2lkIHtcblxuICAgICAgICBjb25zdCBtb2RhbCA9IHRoaXMubW9kYWxTZXJ2aWNlLm9wZW4oUmVjb3JkTGlzdE1vZGFsQ29tcG9uZW50LCB7c2l6ZTogJ3hsJywgc2Nyb2xsYWJsZTogdHJ1ZX0pO1xuICAgICAgICBtb2RhbC5jb21wb25lbnRJbnN0YW5jZS5tb2R1bGUgPSBzZWxlY3RNb2R1bGU7XG4gICAgICAgIG1vZGFsLnJlc3VsdC50aGVuKChyZXN1bHQ6IFJlY29yZExpc3RNb2RhbFJlc3VsdCkgPT4ge1xuXG4gICAgICAgICAgICBpZiAoIXJlc3VsdCB8fCAhcmVzdWx0LnNlbGVjdGlvbiB8fCAhcmVzdWx0LnNlbGVjdGlvbi5zZWxlY3RlZCkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgY29uc3QgcmVjb3JkOiBSZWNvcmQgPSB0aGlzLmdldFNlbGVjdGVkUmVjb3JkKHJlc3VsdCk7XG4gICAgICAgICAgICBpZiAoIXJlY29yZC5pZCkge1xuICAgICAgICAgICAgICAgIGxldCBtZXNzYWdlID0gdGhpcy5sYW5ndWFnZVN0b3JlLmdldEZpZWxkTGFiZWwoJ0VSUk9SX05PX1JFQ09SRCcpO1xuICAgICAgICAgICAgICAgIHRoaXMubWVzc2FnZS5hZGREYW5nZXJNZXNzYWdlKG1lc3NhZ2UpO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKG9uU2VsZWN0Q2FsbGJhY2sgIT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICBvblNlbGVjdENhbGxiYWNrKHJlY29yZCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEdldCBTZWxlY3RlZCBSZWNvcmRcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7b2JqZWN0fSBkYXRhIFJlY29yZExpc3RNb2RhbFJlc3VsdFxuICAgICAqIEByZXR1cm5zIHtvYmplY3R9IFJlY29yZFxuICAgICAqL1xuICAgIHByb3RlY3RlZCBnZXRTZWxlY3RlZFJlY29yZChkYXRhOiBSZWNvcmRMaXN0TW9kYWxSZXN1bHQpOiBSZWNvcmQge1xuXG4gICAgICAgIGxldCBpZCA9ICcnO1xuICAgICAgICBPYmplY3Qua2V5cyhkYXRhLnNlbGVjdGlvbi5zZWxlY3RlZCkuc29tZShzZWxlY3RlZCA9PiB7XG4gICAgICAgICAgICBpZCA9IHNlbGVjdGVkO1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGxldCByZWNvcmQ6IFJlY29yZCA9IG51bGw7XG5cbiAgICAgICAgZGF0YS5yZWNvcmRzLnNvbWUocmVjID0+IHtcbiAgICAgICAgICAgIGlmIChyZWMgJiYgcmVjLmlkID09PSBpZCkge1xuICAgICAgICAgICAgICAgIHJlY29yZCA9IHJlYztcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIHJlY29yZDtcbiAgICB9XG5cbn1cbiJdfQ==