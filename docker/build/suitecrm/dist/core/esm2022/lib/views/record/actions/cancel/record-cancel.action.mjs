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
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { RecordActionHandler } from '../record.action';
import { MessageModalComponent } from '../../../../components/modal/components/message-modal/message-modal.component';
import { ModuleNavigation } from '../../../../services/navigation/module-navigation/module-navigation.service';
import * as i0 from "@angular/core";
import * as i1 from "@ng-bootstrap/ng-bootstrap";
import * as i2 from "../../../../services/navigation/module-navigation/module-navigation.service";
class RecordCancelAction extends RecordActionHandler {
    constructor(modalService, navigation) {
        super();
        this.modalService = modalService;
        this.navigation = navigation;
        this.key = 'cancel';
        this.modes = ['edit', 'detail'];
    }
    run(data) {
        if (data.store.recordStore.isDirty()) {
            this.showConfirmationModal(data);
            return;
        }
        this.cancel(data);
    }
    shouldDisplay() {
        return true;
    }
    cancel(data) {
        const params = data.store.params;
        const moduleName = data.store.getModuleName();
        const id = data.store.getRecordId();
        const record = data.store.getBaseRecord();
        this.navigateBack(this.navigation, params, id, moduleName, record);
        data.store.recordStore.resetStaging();
        data.store.setMode('detail');
    }
    showConfirmationModal(data) {
        const modal = this.modalService.open(MessageModalComponent);
        modal.componentInstance.textKey = 'WARN_UNSAVED_CHANGES';
        modal.componentInstance.buttons = [
            {
                labelKey: 'LBL_CANCEL',
                klass: ['btn-secondary'],
                onClick: activeModal => activeModal.dismiss()
            },
            {
                labelKey: 'LBL_PROCEED',
                klass: ['btn-main'],
                onClick: activeModal => {
                    this.cancel(data);
                    activeModal.close();
                }
            },
        ];
    }
    static { this.ɵfac = function RecordCancelAction_Factory(t) { return new (t || RecordCancelAction)(i0.ɵɵinject(i1.NgbModal), i0.ɵɵinject(i2.ModuleNavigation)); }; }
    static { this.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: RecordCancelAction, factory: RecordCancelAction.ɵfac, providedIn: 'root' }); }
}
export { RecordCancelAction };
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(RecordCancelAction, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: i1.NgbModal }, { type: i2.ModuleNavigation }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVjb3JkLWNhbmNlbC5hY3Rpb24uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9jb3JlL2FwcC9jb3JlL3NyYy9saWIvdmlld3MvcmVjb3JkL2FjdGlvbnMvY2FuY2VsL3JlY29yZC1jYW5jZWwuYWN0aW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0F3Qkc7QUFFSCxPQUFPLEVBQUMsVUFBVSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBRXpDLE9BQU8sRUFBQyxRQUFRLEVBQUMsTUFBTSw0QkFBNEIsQ0FBQztBQUNwRCxPQUFPLEVBQW1CLG1CQUFtQixFQUFDLE1BQU0sa0JBQWtCLENBQUM7QUFDdkUsT0FBTyxFQUFDLHFCQUFxQixFQUFDLE1BQU0sK0VBQStFLENBQUM7QUFDcEgsT0FBTyxFQUFDLGdCQUFnQixFQUFDLE1BQU0sNkVBQTZFLENBQUM7Ozs7QUFFN0csTUFHYSxrQkFBbUIsU0FBUSxtQkFBbUI7SUFLdkQsWUFBb0IsWUFBc0IsRUFBWSxVQUE0QjtRQUM5RSxLQUFLLEVBQUUsQ0FBQztRQURRLGlCQUFZLEdBQVosWUFBWSxDQUFVO1FBQVksZUFBVSxHQUFWLFVBQVUsQ0FBa0I7UUFIbEYsUUFBRyxHQUFHLFFBQVEsQ0FBQztRQUNmLFVBQUssR0FBRyxDQUFDLE1BQWtCLEVBQUUsUUFBb0IsQ0FBQyxDQUFDO0lBSW5ELENBQUM7SUFFRCxHQUFHLENBQUMsSUFBc0I7UUFFdEIsSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLFdBQVcsQ0FBQyxPQUFPLEVBQUUsRUFBRTtZQUNsQyxJQUFJLENBQUMscUJBQXFCLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDakMsT0FBTztTQUNWO1FBRUQsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUN0QixDQUFDO0lBRUQsYUFBYTtRQUNULE9BQU8sSUFBSSxDQUFDO0lBQ2hCLENBQUM7SUFFUyxNQUFNLENBQUMsSUFBc0I7UUFFbkMsTUFBTSxNQUFNLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUM7UUFDakMsTUFBTSxVQUFVLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxhQUFhLEVBQUUsQ0FBQztRQUM5QyxNQUFNLEVBQUUsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQ3BDLE1BQU0sTUFBTSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsYUFBYSxFQUFFLENBQUM7UUFFMUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsVUFBVSxFQUFFLE1BQU0sRUFBRSxFQUFFLEVBQUUsVUFBVSxFQUFFLE1BQU0sQ0FBQyxDQUFDO1FBRW5FLElBQUksQ0FBQyxLQUFLLENBQUMsV0FBVyxDQUFDLFlBQVksRUFBRSxDQUFDO1FBQ3RDLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLFFBQW9CLENBQUMsQ0FBQztJQUM3QyxDQUFDO0lBRVMscUJBQXFCLENBQUMsSUFBc0I7UUFDbEQsTUFBTSxLQUFLLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMscUJBQXFCLENBQUMsQ0FBQztRQUU1RCxLQUFLLENBQUMsaUJBQWlCLENBQUMsT0FBTyxHQUFHLHNCQUFzQixDQUFDO1FBQ3pELEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxPQUFPLEdBQUc7WUFDOUI7Z0JBQ0ksUUFBUSxFQUFFLFlBQVk7Z0JBQ3RCLEtBQUssRUFBRSxDQUFDLGVBQWUsQ0FBQztnQkFDeEIsT0FBTyxFQUFFLFdBQVcsQ0FBQyxFQUFFLENBQUMsV0FBVyxDQUFDLE9BQU8sRUFBRTthQUN4QjtZQUN6QjtnQkFDSSxRQUFRLEVBQUUsYUFBYTtnQkFDdkIsS0FBSyxFQUFFLENBQUMsVUFBVSxDQUFDO2dCQUNuQixPQUFPLEVBQUUsV0FBVyxDQUFDLEVBQUU7b0JBQ25CLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUM7b0JBQ2xCLFdBQVcsQ0FBQyxLQUFLLEVBQUUsQ0FBQztnQkFDeEIsQ0FBQzthQUNvQjtTQUM1QixDQUFDO0lBQ04sQ0FBQzttRkF2RFEsa0JBQWtCO3VFQUFsQixrQkFBa0IsV0FBbEIsa0JBQWtCLG1CQUZmLE1BQU07O1NBRVQsa0JBQWtCO3VGQUFsQixrQkFBa0I7Y0FIOUIsVUFBVTtlQUFDO2dCQUNSLFVBQVUsRUFBRSxNQUFNO2FBQ3JCIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBTdWl0ZUNSTSBpcyBhIGN1c3RvbWVyIHJlbGF0aW9uc2hpcCBtYW5hZ2VtZW50IHByb2dyYW0gZGV2ZWxvcGVkIGJ5IFNhbGVzQWdpbGl0eSBMdGQuXG4gKiBDb3B5cmlnaHQgKEMpIDIwMjEgU2FsZXNBZ2lsaXR5IEx0ZC5cbiAqXG4gKiBUaGlzIHByb2dyYW0gaXMgZnJlZSBzb2Z0d2FyZTsgeW91IGNhbiByZWRpc3RyaWJ1dGUgaXQgYW5kL29yIG1vZGlmeSBpdCB1bmRlclxuICogdGhlIHRlcm1zIG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgdmVyc2lvbiAzIGFzIHB1Ymxpc2hlZCBieSB0aGVcbiAqIEZyZWUgU29mdHdhcmUgRm91bmRhdGlvbiB3aXRoIHRoZSBhZGRpdGlvbiBvZiB0aGUgZm9sbG93aW5nIHBlcm1pc3Npb24gYWRkZWRcbiAqIHRvIFNlY3Rpb24gMTUgYXMgcGVybWl0dGVkIGluIFNlY3Rpb24gNyhhKTogRk9SIEFOWSBQQVJUIE9GIFRIRSBDT1ZFUkVEIFdPUktcbiAqIElOIFdISUNIIFRIRSBDT1BZUklHSFQgSVMgT1dORUQgQlkgU0FMRVNBR0lMSVRZLCBTQUxFU0FHSUxJVFkgRElTQ0xBSU1TIFRIRVxuICogV0FSUkFOVFkgT0YgTk9OIElORlJJTkdFTUVOVCBPRiBUSElSRCBQQVJUWSBSSUdIVFMuXG4gKlxuICogVGhpcyBwcm9ncmFtIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsIGJ1dCBXSVRIT1VUXG4gKiBBTlkgV0FSUkFOVFk7IHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZiBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTU1xuICogRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLiBTZWUgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBmb3IgbW9yZVxuICogZGV0YWlscy5cbiAqXG4gKiBZb3Ugc2hvdWxkIGhhdmUgcmVjZWl2ZWQgYSBjb3B5IG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiAqIGFsb25nIHdpdGggdGhpcyBwcm9ncmFtLiAgSWYgbm90LCBzZWUgPGh0dHA6Ly93d3cuZ251Lm9yZy9saWNlbnNlcy8+LlxuICpcbiAqIEluIGFjY29yZGFuY2Ugd2l0aCBTZWN0aW9uIDcoYikgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuICogdmVyc2lvbiAzLCB0aGVzZSBBcHByb3ByaWF0ZSBMZWdhbCBOb3RpY2VzIG11c3QgcmV0YWluIHRoZSBkaXNwbGF5IG9mIHRoZVxuICogXCJTdXBlcmNoYXJnZWQgYnkgU3VpdGVDUk1cIiBsb2dvLiBJZiB0aGUgZGlzcGxheSBvZiB0aGUgbG9nb3MgaXMgbm90IHJlYXNvbmFibHlcbiAqIGZlYXNpYmxlIGZvciB0ZWNobmljYWwgcmVhc29ucywgdGhlIEFwcHJvcHJpYXRlIExlZ2FsIE5vdGljZXMgbXVzdCBkaXNwbGF5XG4gKiB0aGUgd29yZHMgXCJTdXBlcmNoYXJnZWQgYnkgU3VpdGVDUk1cIi5cbiAqL1xuXG5pbXBvcnQge0luamVjdGFibGV9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtNb2RhbEJ1dHRvbkludGVyZmFjZSwgVmlld01vZGV9IGZyb20gJ2NvbW1vbic7XG5pbXBvcnQge05nYk1vZGFsfSBmcm9tICdAbmctYm9vdHN0cmFwL25nLWJvb3RzdHJhcCc7XG5pbXBvcnQge1JlY29yZEFjdGlvbkRhdGEsIFJlY29yZEFjdGlvbkhhbmRsZXJ9IGZyb20gJy4uL3JlY29yZC5hY3Rpb24nO1xuaW1wb3J0IHtNZXNzYWdlTW9kYWxDb21wb25lbnR9IGZyb20gJy4uLy4uLy4uLy4uL2NvbXBvbmVudHMvbW9kYWwvY29tcG9uZW50cy9tZXNzYWdlLW1vZGFsL21lc3NhZ2UtbW9kYWwuY29tcG9uZW50JztcbmltcG9ydCB7TW9kdWxlTmF2aWdhdGlvbn0gZnJvbSAnLi4vLi4vLi4vLi4vc2VydmljZXMvbmF2aWdhdGlvbi9tb2R1bGUtbmF2aWdhdGlvbi9tb2R1bGUtbmF2aWdhdGlvbi5zZXJ2aWNlJztcblxuQEluamVjdGFibGUoe1xuICAgIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBSZWNvcmRDYW5jZWxBY3Rpb24gZXh0ZW5kcyBSZWNvcmRBY3Rpb25IYW5kbGVyIHtcblxuICAgIGtleSA9ICdjYW5jZWwnO1xuICAgIG1vZGVzID0gWydlZGl0JyBhcyBWaWV3TW9kZSwgJ2RldGFpbCcgYXMgVmlld01vZGVdO1xuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBtb2RhbFNlcnZpY2U6IE5nYk1vZGFsLCBwcm90ZWN0ZWQgbmF2aWdhdGlvbjogTW9kdWxlTmF2aWdhdGlvbikge1xuICAgICAgICBzdXBlcigpO1xuICAgIH1cblxuICAgIHJ1bihkYXRhOiBSZWNvcmRBY3Rpb25EYXRhKTogdm9pZCB7XG5cbiAgICAgICAgaWYgKGRhdGEuc3RvcmUucmVjb3JkU3RvcmUuaXNEaXJ0eSgpKSB7XG4gICAgICAgICAgICB0aGlzLnNob3dDb25maXJtYXRpb25Nb2RhbChkYXRhKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuY2FuY2VsKGRhdGEpO1xuICAgIH1cblxuICAgIHNob3VsZERpc3BsYXkoKTogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBjYW5jZWwoZGF0YTogUmVjb3JkQWN0aW9uRGF0YSk6IHZvaWQge1xuXG4gICAgICAgIGNvbnN0IHBhcmFtcyA9IGRhdGEuc3RvcmUucGFyYW1zO1xuICAgICAgICBjb25zdCBtb2R1bGVOYW1lID0gZGF0YS5zdG9yZS5nZXRNb2R1bGVOYW1lKCk7XG4gICAgICAgIGNvbnN0IGlkID0gZGF0YS5zdG9yZS5nZXRSZWNvcmRJZCgpO1xuICAgICAgICBjb25zdCByZWNvcmQgPSBkYXRhLnN0b3JlLmdldEJhc2VSZWNvcmQoKTtcblxuICAgICAgICB0aGlzLm5hdmlnYXRlQmFjayh0aGlzLm5hdmlnYXRpb24sIHBhcmFtcywgaWQsIG1vZHVsZU5hbWUsIHJlY29yZCk7XG5cbiAgICAgICAgZGF0YS5zdG9yZS5yZWNvcmRTdG9yZS5yZXNldFN0YWdpbmcoKTtcbiAgICAgICAgZGF0YS5zdG9yZS5zZXRNb2RlKCdkZXRhaWwnIGFzIFZpZXdNb2RlKTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgc2hvd0NvbmZpcm1hdGlvbk1vZGFsKGRhdGE6IFJlY29yZEFjdGlvbkRhdGEpOiB2b2lkIHtcbiAgICAgICAgY29uc3QgbW9kYWwgPSB0aGlzLm1vZGFsU2VydmljZS5vcGVuKE1lc3NhZ2VNb2RhbENvbXBvbmVudCk7XG5cbiAgICAgICAgbW9kYWwuY29tcG9uZW50SW5zdGFuY2UudGV4dEtleSA9ICdXQVJOX1VOU0FWRURfQ0hBTkdFUyc7XG4gICAgICAgIG1vZGFsLmNvbXBvbmVudEluc3RhbmNlLmJ1dHRvbnMgPSBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgbGFiZWxLZXk6ICdMQkxfQ0FOQ0VMJyxcbiAgICAgICAgICAgICAgICBrbGFzczogWydidG4tc2Vjb25kYXJ5J10sXG4gICAgICAgICAgICAgICAgb25DbGljazogYWN0aXZlTW9kYWwgPT4gYWN0aXZlTW9kYWwuZGlzbWlzcygpXG4gICAgICAgICAgICB9IGFzIE1vZGFsQnV0dG9uSW50ZXJmYWNlLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGxhYmVsS2V5OiAnTEJMX1BST0NFRUQnLFxuICAgICAgICAgICAgICAgIGtsYXNzOiBbJ2J0bi1tYWluJ10sXG4gICAgICAgICAgICAgICAgb25DbGljazogYWN0aXZlTW9kYWwgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmNhbmNlbChkYXRhKTtcbiAgICAgICAgICAgICAgICAgICAgYWN0aXZlTW9kYWwuY2xvc2UoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGFzIE1vZGFsQnV0dG9uSW50ZXJmYWNlLFxuICAgICAgICBdO1xuICAgIH1cbn1cbiJdfQ==