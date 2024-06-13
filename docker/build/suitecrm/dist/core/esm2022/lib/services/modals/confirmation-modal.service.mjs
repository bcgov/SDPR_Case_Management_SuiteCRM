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
import { MessageModalComponent } from '../../components/modal/components/message-modal/message-modal.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import * as i0 from "@angular/core";
import * as i1 from "@ng-bootstrap/ng-bootstrap";
class ConfirmationModalService {
    constructor(modalService) {
        this.modalService = modalService;
    }
    showModal(messageLabel, onProceed) {
        const modal = this.modalService.open(MessageModalComponent);
        modal.componentInstance.textKey = messageLabel ?? 'LBL_GENERIC_CONFIRMATION';
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
                    onProceed();
                    activeModal.close();
                }
            },
        ];
    }
    static { this.ɵfac = function ConfirmationModalService_Factory(t) { return new (t || ConfirmationModalService)(i0.ɵɵinject(i1.NgbModal)); }; }
    static { this.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: ConfirmationModalService, factory: ConfirmationModalService.ɵfac, providedIn: 'root' }); }
}
export { ConfirmationModalService };
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ConfirmationModalService, [{
        type: Injectable,
        args: [{
                providedIn: 'root',
            }]
    }], function () { return [{ type: i1.NgbModal }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlybWF0aW9uLW1vZGFsLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9jb3JlL2FwcC9jb3JlL3NyYy9saWIvc2VydmljZXMvbW9kYWxzL2NvbmZpcm1hdGlvbi1tb2RhbC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0F3Qkc7QUFFSCxPQUFPLEVBQUMsVUFBVSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBQyxxQkFBcUIsRUFBQyxNQUFNLHlFQUF5RSxDQUFDO0FBRTlHLE9BQU8sRUFBQyxRQUFRLEVBQUMsTUFBTSw0QkFBNEIsQ0FBQzs7O0FBRXBELE1BR2Esd0JBQXdCO0lBRWpDLFlBQ1ksWUFBc0I7UUFBdEIsaUJBQVksR0FBWixZQUFZLENBQVU7SUFFbEMsQ0FBQztJQUVNLFNBQVMsQ0FBQyxZQUFvQixFQUFFLFNBQW1CO1FBQ3RELE1BQU0sS0FBSyxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLHFCQUFxQixDQUFDLENBQUM7UUFFNUQsS0FBSyxDQUFDLGlCQUFpQixDQUFDLE9BQU8sR0FBRyxZQUFZLElBQUksMEJBQTBCLENBQUM7UUFDN0UsS0FBSyxDQUFDLGlCQUFpQixDQUFDLE9BQU8sR0FBRztZQUM5QjtnQkFDSSxRQUFRLEVBQUUsWUFBWTtnQkFDdEIsS0FBSyxFQUFFLENBQUMsZUFBZSxDQUFDO2dCQUN4QixPQUFPLEVBQUUsV0FBVyxDQUFDLEVBQUUsQ0FBQyxXQUFXLENBQUMsT0FBTyxFQUFFO2FBQ3hCO1lBQ3pCO2dCQUNJLFFBQVEsRUFBRSxhQUFhO2dCQUN2QixLQUFLLEVBQUUsQ0FBQyxVQUFVLENBQUM7Z0JBQ25CLE9BQU8sRUFBRSxXQUFXLENBQUMsRUFBRTtvQkFDbkIsU0FBUyxFQUFFLENBQUM7b0JBQ1osV0FBVyxDQUFDLEtBQUssRUFBRSxDQUFDO2dCQUN4QixDQUFDO2FBQ29CO1NBQzVCLENBQUM7SUFDTixDQUFDO3lGQTFCUSx3QkFBd0I7dUVBQXhCLHdCQUF3QixXQUF4Qix3QkFBd0IsbUJBRnJCLE1BQU07O1NBRVQsd0JBQXdCO3VGQUF4Qix3QkFBd0I7Y0FIcEMsVUFBVTtlQUFDO2dCQUNSLFVBQVUsRUFBRSxNQUFNO2FBQ3JCIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBTdWl0ZUNSTSBpcyBhIGN1c3RvbWVyIHJlbGF0aW9uc2hpcCBtYW5hZ2VtZW50IHByb2dyYW0gZGV2ZWxvcGVkIGJ5IFNhbGVzQWdpbGl0eSBMdGQuXG4gKiBDb3B5cmlnaHQgKEMpIDIwMjEgU2FsZXNBZ2lsaXR5IEx0ZC5cbiAqXG4gKiBUaGlzIHByb2dyYW0gaXMgZnJlZSBzb2Z0d2FyZTsgeW91IGNhbiByZWRpc3RyaWJ1dGUgaXQgYW5kL29yIG1vZGlmeSBpdCB1bmRlclxuICogdGhlIHRlcm1zIG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgdmVyc2lvbiAzIGFzIHB1Ymxpc2hlZCBieSB0aGVcbiAqIEZyZWUgU29mdHdhcmUgRm91bmRhdGlvbiB3aXRoIHRoZSBhZGRpdGlvbiBvZiB0aGUgZm9sbG93aW5nIHBlcm1pc3Npb24gYWRkZWRcbiAqIHRvIFNlY3Rpb24gMTUgYXMgcGVybWl0dGVkIGluIFNlY3Rpb24gNyhhKTogRk9SIEFOWSBQQVJUIE9GIFRIRSBDT1ZFUkVEIFdPUktcbiAqIElOIFdISUNIIFRIRSBDT1BZUklHSFQgSVMgT1dORUQgQlkgU0FMRVNBR0lMSVRZLCBTQUxFU0FHSUxJVFkgRElTQ0xBSU1TIFRIRVxuICogV0FSUkFOVFkgT0YgTk9OIElORlJJTkdFTUVOVCBPRiBUSElSRCBQQVJUWSBSSUdIVFMuXG4gKlxuICogVGhpcyBwcm9ncmFtIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsIGJ1dCBXSVRIT1VUXG4gKiBBTlkgV0FSUkFOVFk7IHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZiBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTU1xuICogRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLiBTZWUgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBmb3IgbW9yZVxuICogZGV0YWlscy5cbiAqXG4gKiBZb3Ugc2hvdWxkIGhhdmUgcmVjZWl2ZWQgYSBjb3B5IG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiAqIGFsb25nIHdpdGggdGhpcyBwcm9ncmFtLiAgSWYgbm90LCBzZWUgPGh0dHA6Ly93d3cuZ251Lm9yZy9saWNlbnNlcy8+LlxuICpcbiAqIEluIGFjY29yZGFuY2Ugd2l0aCBTZWN0aW9uIDcoYikgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuICogdmVyc2lvbiAzLCB0aGVzZSBBcHByb3ByaWF0ZSBMZWdhbCBOb3RpY2VzIG11c3QgcmV0YWluIHRoZSBkaXNwbGF5IG9mIHRoZVxuICogXCJTdXBlcmNoYXJnZWQgYnkgU3VpdGVDUk1cIiBsb2dvLiBJZiB0aGUgZGlzcGxheSBvZiB0aGUgbG9nb3MgaXMgbm90IHJlYXNvbmFibHlcbiAqIGZlYXNpYmxlIGZvciB0ZWNobmljYWwgcmVhc29ucywgdGhlIEFwcHJvcHJpYXRlIExlZ2FsIE5vdGljZXMgbXVzdCBkaXNwbGF5XG4gKiB0aGUgd29yZHMgXCJTdXBlcmNoYXJnZWQgYnkgU3VpdGVDUk1cIi5cbiAqL1xuXG5pbXBvcnQge0luamVjdGFibGV9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtNZXNzYWdlTW9kYWxDb21wb25lbnR9IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvbW9kYWwvY29tcG9uZW50cy9tZXNzYWdlLW1vZGFsL21lc3NhZ2UtbW9kYWwuY29tcG9uZW50JztcbmltcG9ydCB7TW9kYWxCdXR0b25JbnRlcmZhY2V9IGZyb20gJ2NvbW1vbic7XG5pbXBvcnQge05nYk1vZGFsfSBmcm9tICdAbmctYm9vdHN0cmFwL25nLWJvb3RzdHJhcCc7XG5cbkBJbmplY3RhYmxlKHtcbiAgICBwcm92aWRlZEluOiAncm9vdCcsXG59KVxuZXhwb3J0IGNsYXNzIENvbmZpcm1hdGlvbk1vZGFsU2VydmljZSB7XG5cbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgcHJpdmF0ZSBtb2RhbFNlcnZpY2U6IE5nYk1vZGFsXG4gICAgKSB7XG4gICAgfVxuXG4gICAgcHVibGljIHNob3dNb2RhbChtZXNzYWdlTGFiZWw6IHN0cmluZywgb25Qcm9jZWVkOiBGdW5jdGlvbik6IHZvaWQge1xuICAgICAgICBjb25zdCBtb2RhbCA9IHRoaXMubW9kYWxTZXJ2aWNlLm9wZW4oTWVzc2FnZU1vZGFsQ29tcG9uZW50KTtcblxuICAgICAgICBtb2RhbC5jb21wb25lbnRJbnN0YW5jZS50ZXh0S2V5ID0gbWVzc2FnZUxhYmVsID8/ICdMQkxfR0VORVJJQ19DT05GSVJNQVRJT04nO1xuICAgICAgICBtb2RhbC5jb21wb25lbnRJbnN0YW5jZS5idXR0b25zID0gW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGxhYmVsS2V5OiAnTEJMX0NBTkNFTCcsXG4gICAgICAgICAgICAgICAga2xhc3M6IFsnYnRuLXNlY29uZGFyeSddLFxuICAgICAgICAgICAgICAgIG9uQ2xpY2s6IGFjdGl2ZU1vZGFsID0+IGFjdGl2ZU1vZGFsLmRpc21pc3MoKVxuICAgICAgICAgICAgfSBhcyBNb2RhbEJ1dHRvbkludGVyZmFjZSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBsYWJlbEtleTogJ0xCTF9QUk9DRUVEJyxcbiAgICAgICAgICAgICAgICBrbGFzczogWydidG4tbWFpbiddLFxuICAgICAgICAgICAgICAgIG9uQ2xpY2s6IGFjdGl2ZU1vZGFsID0+IHtcbiAgICAgICAgICAgICAgICAgICAgb25Qcm9jZWVkKCk7XG4gICAgICAgICAgICAgICAgICAgIGFjdGl2ZU1vZGFsLmNsb3NlKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBhcyBNb2RhbEJ1dHRvbkludGVyZmFjZSxcbiAgICAgICAgXTtcbiAgICB9XG59XG4iXX0=