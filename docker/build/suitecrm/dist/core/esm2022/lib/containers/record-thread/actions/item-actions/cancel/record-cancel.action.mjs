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
import { MessageModalComponent } from '../../../../../components/modal/components/message-modal/message-modal.component';
import { ModuleNavigation } from '../../../../../services/navigation/module-navigation/module-navigation.service';
import { RecordThreadItemActionHandler } from '../record-thread-item.action';
import * as i0 from "@angular/core";
import * as i1 from "@ng-bootstrap/ng-bootstrap";
import * as i2 from "../../../../../services/navigation/module-navigation/module-navigation.service";
class RecordThreadItemCancelAction extends RecordThreadItemActionHandler {
    constructor(modalService, navigation) {
        super();
        this.modalService = modalService;
        this.navigation = navigation;
        this.key = 'cancel';
        this.modes = ['edit', 'detail'];
    }
    run(data) {
        if (data.itemStore.recordStore.isDirty()) {
            this.showConfirmationModal(data);
            return;
        }
        this.cancel(data);
    }
    shouldDisplay() {
        return true;
    }
    cancel(data) {
        data.itemStore.recordStore.resetStaging();
        data.itemStore.setMode('detail');
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
    static { this.ɵfac = function RecordThreadItemCancelAction_Factory(t) { return new (t || RecordThreadItemCancelAction)(i0.ɵɵinject(i1.NgbModal), i0.ɵɵinject(i2.ModuleNavigation)); }; }
    static { this.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: RecordThreadItemCancelAction, factory: RecordThreadItemCancelAction.ɵfac, providedIn: 'root' }); }
}
export { RecordThreadItemCancelAction };
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(RecordThreadItemCancelAction, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: i1.NgbModal }, { type: i2.ModuleNavigation }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVjb3JkLWNhbmNlbC5hY3Rpb24uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9jb3JlL2FwcC9jb3JlL3NyYy9saWIvY29udGFpbmVycy9yZWNvcmQtdGhyZWFkL2FjdGlvbnMvaXRlbS1hY3Rpb25zL2NhbmNlbC9yZWNvcmQtY2FuY2VsLmFjdGlvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBd0JHO0FBRUgsT0FBTyxFQUFDLFVBQVUsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUV6QyxPQUFPLEVBQUMsUUFBUSxFQUFDLE1BQU0sNEJBQTRCLENBQUM7QUFDcEQsT0FBTyxFQUFDLHFCQUFxQixFQUFDLE1BQU0sa0ZBQWtGLENBQUM7QUFDdkgsT0FBTyxFQUFDLGdCQUFnQixFQUFDLE1BQU0sZ0ZBQWdGLENBQUM7QUFDaEgsT0FBTyxFQUE2Qiw2QkFBNkIsRUFBQyxNQUFNLDhCQUE4QixDQUFDOzs7O0FBRXZHLE1BR2EsNEJBQTZCLFNBQVEsNkJBQTZCO0lBSzNFLFlBQW9CLFlBQXNCLEVBQVksVUFBNEI7UUFDOUUsS0FBSyxFQUFFLENBQUM7UUFEUSxpQkFBWSxHQUFaLFlBQVksQ0FBVTtRQUFZLGVBQVUsR0FBVixVQUFVLENBQWtCO1FBSGxGLFFBQUcsR0FBRyxRQUFRLENBQUM7UUFDZixVQUFLLEdBQUcsQ0FBQyxNQUFrQixFQUFFLFFBQW9CLENBQUMsQ0FBQztJQUluRCxDQUFDO0lBRUQsR0FBRyxDQUFDLElBQWdDO1FBRWhDLElBQUksSUFBSSxDQUFDLFNBQVMsQ0FBQyxXQUFXLENBQUMsT0FBTyxFQUFFLEVBQUU7WUFDdEMsSUFBSSxDQUFDLHFCQUFxQixDQUFDLElBQUksQ0FBQyxDQUFDO1lBQ2pDLE9BQU87U0FDVjtRQUVELElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDdEIsQ0FBQztJQUVELGFBQWE7UUFDVCxPQUFPLElBQUksQ0FBQztJQUNoQixDQUFDO0lBRVMsTUFBTSxDQUFDLElBQWdDO1FBRTdDLElBQUksQ0FBQyxTQUFTLENBQUMsV0FBVyxDQUFDLFlBQVksRUFBRSxDQUFDO1FBQzFDLElBQUksQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLFFBQW9CLENBQUMsQ0FBQztJQUNqRCxDQUFDO0lBRVMscUJBQXFCLENBQUMsSUFBZ0M7UUFDNUQsTUFBTSxLQUFLLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMscUJBQXFCLENBQUMsQ0FBQztRQUU1RCxLQUFLLENBQUMsaUJBQWlCLENBQUMsT0FBTyxHQUFHLHNCQUFzQixDQUFDO1FBQ3pELEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxPQUFPLEdBQUc7WUFDOUI7Z0JBQ0ksUUFBUSxFQUFFLFlBQVk7Z0JBQ3RCLEtBQUssRUFBRSxDQUFDLGVBQWUsQ0FBQztnQkFDeEIsT0FBTyxFQUFFLFdBQVcsQ0FBQyxFQUFFLENBQUMsV0FBVyxDQUFDLE9BQU8sRUFBRTthQUN4QjtZQUN6QjtnQkFDSSxRQUFRLEVBQUUsYUFBYTtnQkFDdkIsS0FBSyxFQUFFLENBQUMsVUFBVSxDQUFDO2dCQUNuQixPQUFPLEVBQUUsV0FBVyxDQUFDLEVBQUU7b0JBQ25CLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUM7b0JBQ2xCLFdBQVcsQ0FBQyxLQUFLLEVBQUUsQ0FBQztnQkFDeEIsQ0FBQzthQUNvQjtTQUM1QixDQUFDO0lBQ04sQ0FBQzs2RkFoRFEsNEJBQTRCO3VFQUE1Qiw0QkFBNEIsV0FBNUIsNEJBQTRCLG1CQUZ6QixNQUFNOztTQUVULDRCQUE0Qjt1RkFBNUIsNEJBQTRCO2NBSHhDLFVBQVU7ZUFBQztnQkFDUixVQUFVLEVBQUUsTUFBTTthQUNyQiIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogU3VpdGVDUk0gaXMgYSBjdXN0b21lciByZWxhdGlvbnNoaXAgbWFuYWdlbWVudCBwcm9ncmFtIGRldmVsb3BlZCBieSBTYWxlc0FnaWxpdHkgTHRkLlxuICogQ29weXJpZ2h0IChDKSAyMDIxIFNhbGVzQWdpbGl0eSBMdGQuXG4gKlxuICogVGhpcyBwcm9ncmFtIGlzIGZyZWUgc29mdHdhcmU7IHlvdSBjYW4gcmVkaXN0cmlidXRlIGl0IGFuZC9vciBtb2RpZnkgaXQgdW5kZXJcbiAqIHRoZSB0ZXJtcyBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIHZlcnNpb24gMyBhcyBwdWJsaXNoZWQgYnkgdGhlXG4gKiBGcmVlIFNvZnR3YXJlIEZvdW5kYXRpb24gd2l0aCB0aGUgYWRkaXRpb24gb2YgdGhlIGZvbGxvd2luZyBwZXJtaXNzaW9uIGFkZGVkXG4gKiB0byBTZWN0aW9uIDE1IGFzIHBlcm1pdHRlZCBpbiBTZWN0aW9uIDcoYSk6IEZPUiBBTlkgUEFSVCBPRiBUSEUgQ09WRVJFRCBXT1JLXG4gKiBJTiBXSElDSCBUSEUgQ09QWVJJR0hUIElTIE9XTkVEIEJZIFNBTEVTQUdJTElUWSwgU0FMRVNBR0lMSVRZIERJU0NMQUlNUyBUSEVcbiAqIFdBUlJBTlRZIE9GIE5PTiBJTkZSSU5HRU1FTlQgT0YgVEhJUkQgUEFSVFkgUklHSFRTLlxuICpcbiAqIFRoaXMgcHJvZ3JhbSBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLCBidXQgV0lUSE9VVFxuICogQU5ZIFdBUlJBTlRZOyB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2YgTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1NcbiAqIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS4gU2VlIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgZm9yIG1vcmVcbiAqIGRldGFpbHMuXG4gKlxuICogWW91IHNob3VsZCBoYXZlIHJlY2VpdmVkIGEgY29weSBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4gKiBhbG9uZyB3aXRoIHRoaXMgcHJvZ3JhbS4gIElmIG5vdCwgc2VlIDxodHRwOi8vd3d3LmdudS5vcmcvbGljZW5zZXMvPi5cbiAqXG4gKiBJbiBhY2NvcmRhbmNlIHdpdGggU2VjdGlvbiA3KGIpIG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiAqIHZlcnNpb24gMywgdGhlc2UgQXBwcm9wcmlhdGUgTGVnYWwgTm90aWNlcyBtdXN0IHJldGFpbiB0aGUgZGlzcGxheSBvZiB0aGVcbiAqIFwiU3VwZXJjaGFyZ2VkIGJ5IFN1aXRlQ1JNXCIgbG9nby4gSWYgdGhlIGRpc3BsYXkgb2YgdGhlIGxvZ29zIGlzIG5vdCByZWFzb25hYmx5XG4gKiBmZWFzaWJsZSBmb3IgdGVjaG5pY2FsIHJlYXNvbnMsIHRoZSBBcHByb3ByaWF0ZSBMZWdhbCBOb3RpY2VzIG11c3QgZGlzcGxheVxuICogdGhlIHdvcmRzIFwiU3VwZXJjaGFyZ2VkIGJ5IFN1aXRlQ1JNXCIuXG4gKi9cblxuaW1wb3J0IHtJbmplY3RhYmxlfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7TW9kYWxCdXR0b25JbnRlcmZhY2UsIFZpZXdNb2RlfSBmcm9tICdjb21tb24nO1xuaW1wb3J0IHtOZ2JNb2RhbH0gZnJvbSAnQG5nLWJvb3RzdHJhcC9uZy1ib290c3RyYXAnO1xuaW1wb3J0IHtNZXNzYWdlTW9kYWxDb21wb25lbnR9IGZyb20gJy4uLy4uLy4uLy4uLy4uL2NvbXBvbmVudHMvbW9kYWwvY29tcG9uZW50cy9tZXNzYWdlLW1vZGFsL21lc3NhZ2UtbW9kYWwuY29tcG9uZW50JztcbmltcG9ydCB7TW9kdWxlTmF2aWdhdGlvbn0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vc2VydmljZXMvbmF2aWdhdGlvbi9tb2R1bGUtbmF2aWdhdGlvbi9tb2R1bGUtbmF2aWdhdGlvbi5zZXJ2aWNlJztcbmltcG9ydCB7UmVjb3JkVGhyZWFkSXRlbUFjdGlvbkRhdGEsIFJlY29yZFRocmVhZEl0ZW1BY3Rpb25IYW5kbGVyfSBmcm9tICcuLi9yZWNvcmQtdGhyZWFkLWl0ZW0uYWN0aW9uJztcblxuQEluamVjdGFibGUoe1xuICAgIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBSZWNvcmRUaHJlYWRJdGVtQ2FuY2VsQWN0aW9uIGV4dGVuZHMgUmVjb3JkVGhyZWFkSXRlbUFjdGlvbkhhbmRsZXIge1xuXG4gICAga2V5ID0gJ2NhbmNlbCc7XG4gICAgbW9kZXMgPSBbJ2VkaXQnIGFzIFZpZXdNb2RlLCAnZGV0YWlsJyBhcyBWaWV3TW9kZV07XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIG1vZGFsU2VydmljZTogTmdiTW9kYWwsIHByb3RlY3RlZCBuYXZpZ2F0aW9uOiBNb2R1bGVOYXZpZ2F0aW9uKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgfVxuXG4gICAgcnVuKGRhdGE6IFJlY29yZFRocmVhZEl0ZW1BY3Rpb25EYXRhKTogdm9pZCB7XG5cbiAgICAgICAgaWYgKGRhdGEuaXRlbVN0b3JlLnJlY29yZFN0b3JlLmlzRGlydHkoKSkge1xuICAgICAgICAgICAgdGhpcy5zaG93Q29uZmlybWF0aW9uTW9kYWwoZGF0YSk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmNhbmNlbChkYXRhKTtcbiAgICB9XG5cbiAgICBzaG91bGREaXNwbGF5KCk6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgY2FuY2VsKGRhdGE6IFJlY29yZFRocmVhZEl0ZW1BY3Rpb25EYXRhKTogdm9pZCB7XG5cbiAgICAgICAgZGF0YS5pdGVtU3RvcmUucmVjb3JkU3RvcmUucmVzZXRTdGFnaW5nKCk7XG4gICAgICAgIGRhdGEuaXRlbVN0b3JlLnNldE1vZGUoJ2RldGFpbCcgYXMgVmlld01vZGUpO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBzaG93Q29uZmlybWF0aW9uTW9kYWwoZGF0YTogUmVjb3JkVGhyZWFkSXRlbUFjdGlvbkRhdGEpOiB2b2lkIHtcbiAgICAgICAgY29uc3QgbW9kYWwgPSB0aGlzLm1vZGFsU2VydmljZS5vcGVuKE1lc3NhZ2VNb2RhbENvbXBvbmVudCk7XG5cbiAgICAgICAgbW9kYWwuY29tcG9uZW50SW5zdGFuY2UudGV4dEtleSA9ICdXQVJOX1VOU0FWRURfQ0hBTkdFUyc7XG4gICAgICAgIG1vZGFsLmNvbXBvbmVudEluc3RhbmNlLmJ1dHRvbnMgPSBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgbGFiZWxLZXk6ICdMQkxfQ0FOQ0VMJyxcbiAgICAgICAgICAgICAgICBrbGFzczogWydidG4tc2Vjb25kYXJ5J10sXG4gICAgICAgICAgICAgICAgb25DbGljazogYWN0aXZlTW9kYWwgPT4gYWN0aXZlTW9kYWwuZGlzbWlzcygpXG4gICAgICAgICAgICB9IGFzIE1vZGFsQnV0dG9uSW50ZXJmYWNlLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGxhYmVsS2V5OiAnTEJMX1BST0NFRUQnLFxuICAgICAgICAgICAgICAgIGtsYXNzOiBbJ2J0bi1tYWluJ10sXG4gICAgICAgICAgICAgICAgb25DbGljazogYWN0aXZlTW9kYWwgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmNhbmNlbChkYXRhKTtcbiAgICAgICAgICAgICAgICAgICAgYWN0aXZlTW9kYWwuY2xvc2UoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGFzIE1vZGFsQnV0dG9uSW50ZXJmYWNlLFxuICAgICAgICBdO1xuICAgIH1cbn1cbiJdfQ==