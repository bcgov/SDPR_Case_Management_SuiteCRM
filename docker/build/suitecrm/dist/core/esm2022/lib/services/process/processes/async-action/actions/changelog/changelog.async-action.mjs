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
import { AsyncActionHandler } from '../../async-action.model';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { MessageService } from '../../../../../message/message.service';
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { ClassicModalComponent } from "../../../../../../components/modal/components/classic-modal/classic-modal.component";
import * as i0 from "@angular/core";
import * as i1 from "@angular/router";
import * as i2 from "@ng-bootstrap/ng-bootstrap";
import * as i3 from "../../../../../message/message.service";
class ChangelogAsyncAction extends AsyncActionHandler {
    constructor(router, modalService, message) {
        super();
        this.router = router;
        this.modalService = modalService;
        this.message = message;
        this.key = 'audit';
    }
    run(data) {
        if (!data || !data.url) {
            this.message.addDangerMessageByKey('LBL_MISSING_HANDLER_DATA_ROUTE');
            return;
        }
        this.showClassicViewModal(data.url);
    }
    /**
     * Remove title text from iframe source document
     */
    changeLogLegacyContentFormatter(iframeElement) {
        if (!iframeElement) {
            return;
        }
        const node = iframeElement.contentDocument.getElementsByClassName('moduleTitle')[0];
        if (!node) {
            return;
        }
        node.innerText = '';
    }
    /**
     * Show record selection modal
     */
    showClassicViewModal(url) {
        const modal = this.modalService.open(ClassicModalComponent, {
            size: 'xl',
            centered: true,
            scrollable: true
        });
        modal.componentInstance.titleKey = 'LBL_CHANGE_LOG';
        modal.componentInstance.url = url;
        modal.componentInstance.asyncActionCallback = this.changeLogLegacyContentFormatter.bind(this);
    }
    static { this.ɵfac = function ChangelogAsyncAction_Factory(t) { return new (t || ChangelogAsyncAction)(i0.ɵɵinject(i1.Router), i0.ɵɵinject(i2.NgbModal), i0.ɵɵinject(i3.MessageService)); }; }
    static { this.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: ChangelogAsyncAction, factory: ChangelogAsyncAction.ɵfac, providedIn: 'root' }); }
}
export { ChangelogAsyncAction };
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ChangelogAsyncAction, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: i1.Router }, { type: i2.NgbModal }, { type: i3.MessageService }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hhbmdlbG9nLmFzeW5jLWFjdGlvbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL2NvcmUvYXBwL2NvcmUvc3JjL2xpYi9zZXJ2aWNlcy9wcm9jZXNzL3Byb2Nlc3Nlcy9hc3luYy1hY3Rpb24vYWN0aW9ucy9jaGFuZ2Vsb2cvY2hhbmdlbG9nLmFzeW5jLWFjdGlvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBd0JHO0FBRUgsT0FBTyxFQUFrQixrQkFBa0IsRUFBQyxNQUFNLDBCQUEwQixDQUFDO0FBQzdFLE9BQU8sRUFBQyxVQUFVLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFDLE1BQU0sRUFBQyxNQUFNLGlCQUFpQixDQUFDO0FBQ3ZDLE9BQU8sRUFBQyxjQUFjLEVBQUMsTUFBTSx3Q0FBd0MsQ0FBQztBQUN0RSxPQUFPLEVBQUMsUUFBUSxFQUFDLE1BQU0sNEJBQTRCLENBQUM7QUFDcEQsT0FBTyxFQUFDLHFCQUFxQixFQUFDLE1BQU0scUZBQXFGLENBQUM7Ozs7O0FBRTFILE1BR2Esb0JBQXFCLFNBQVEsa0JBQWtCO0lBR3hELFlBQ2MsTUFBYyxFQUNkLFlBQXNCLEVBQ3RCLE9BQXVCO1FBRWpDLEtBQUssRUFBRSxDQUFDO1FBSkUsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUNkLGlCQUFZLEdBQVosWUFBWSxDQUFVO1FBQ3RCLFlBQU8sR0FBUCxPQUFPLENBQWdCO1FBTHJDLFFBQUcsR0FBRyxPQUFPLENBQUM7SUFRZCxDQUFDO0lBRUQsR0FBRyxDQUFDLElBQXFCO1FBRXJCLElBQUksQ0FBQyxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFO1lBQ3BCLElBQUksQ0FBQyxPQUFPLENBQUMscUJBQXFCLENBQUMsZ0NBQWdDLENBQUMsQ0FBQztZQUNyRSxPQUFPO1NBQ1Y7UUFFRCxJQUFJLENBQUMsb0JBQW9CLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQ3hDLENBQUM7SUFFRDs7T0FFRztJQUNILCtCQUErQixDQUFDLGFBQWdDO1FBQzVELElBQUksQ0FBQyxhQUFhLEVBQUU7WUFDaEIsT0FBTztTQUNWO1FBQ0QsTUFBTSxJQUFJLEdBQUcsYUFBYSxDQUFDLGVBQWUsQ0FBQyxzQkFBc0IsQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLENBQWdCLENBQUM7UUFDbkcsSUFBSSxDQUFDLElBQUksRUFBRTtZQUNQLE9BQU87U0FDVjtRQUNELElBQUksQ0FBQyxTQUFTLEdBQUcsRUFBRSxDQUFDO0lBQ3hCLENBQUM7SUFFRDs7T0FFRztJQUNPLG9CQUFvQixDQUFDLEdBQVc7UUFDdEMsTUFBTSxLQUFLLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMscUJBQXFCLEVBQ3REO1lBQ0ksSUFBSSxFQUFFLElBQUk7WUFDVixRQUFRLEVBQUUsSUFBSTtZQUNkLFVBQVUsRUFBRSxJQUFJO1NBQ25CLENBQUMsQ0FBQztRQUNQLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxRQUFRLEdBQUcsZ0JBQWdCLENBQUM7UUFDcEQsS0FBSyxDQUFDLGlCQUFpQixDQUFDLEdBQUcsR0FBRyxHQUFHLENBQUM7UUFDbEMsS0FBSyxDQUFDLGlCQUFpQixDQUFDLG1CQUFtQixHQUFHLElBQUksQ0FBQywrQkFBK0IsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDbEcsQ0FBQztxRkFoRFEsb0JBQW9CO3VFQUFwQixvQkFBb0IsV0FBcEIsb0JBQW9CLG1CQUZqQixNQUFNOztTQUVULG9CQUFvQjt1RkFBcEIsb0JBQW9CO2NBSGhDLFVBQVU7ZUFBQztnQkFDUixVQUFVLEVBQUUsTUFBTTthQUNyQiIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogU3VpdGVDUk0gaXMgYSBjdXN0b21lciByZWxhdGlvbnNoaXAgbWFuYWdlbWVudCBwcm9ncmFtIGRldmVsb3BlZCBieSBTYWxlc0FnaWxpdHkgTHRkLlxuICogQ29weXJpZ2h0IChDKSAyMDIxIFNhbGVzQWdpbGl0eSBMdGQuXG4gKlxuICogVGhpcyBwcm9ncmFtIGlzIGZyZWUgc29mdHdhcmU7IHlvdSBjYW4gcmVkaXN0cmlidXRlIGl0IGFuZC9vciBtb2RpZnkgaXQgdW5kZXJcbiAqIHRoZSB0ZXJtcyBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIHZlcnNpb24gMyBhcyBwdWJsaXNoZWQgYnkgdGhlXG4gKiBGcmVlIFNvZnR3YXJlIEZvdW5kYXRpb24gd2l0aCB0aGUgYWRkaXRpb24gb2YgdGhlIGZvbGxvd2luZyBwZXJtaXNzaW9uIGFkZGVkXG4gKiB0byBTZWN0aW9uIDE1IGFzIHBlcm1pdHRlZCBpbiBTZWN0aW9uIDcoYSk6IEZPUiBBTlkgUEFSVCBPRiBUSEUgQ09WRVJFRCBXT1JLXG4gKiBJTiBXSElDSCBUSEUgQ09QWVJJR0hUIElTIE9XTkVEIEJZIFNBTEVTQUdJTElUWSwgU0FMRVNBR0lMSVRZIERJU0NMQUlNUyBUSEVcbiAqIFdBUlJBTlRZIE9GIE5PTiBJTkZSSU5HRU1FTlQgT0YgVEhJUkQgUEFSVFkgUklHSFRTLlxuICpcbiAqIFRoaXMgcHJvZ3JhbSBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLCBidXQgV0lUSE9VVFxuICogQU5ZIFdBUlJBTlRZOyB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2YgTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1NcbiAqIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS4gU2VlIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgZm9yIG1vcmVcbiAqIGRldGFpbHMuXG4gKlxuICogWW91IHNob3VsZCBoYXZlIHJlY2VpdmVkIGEgY29weSBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4gKiBhbG9uZyB3aXRoIHRoaXMgcHJvZ3JhbS4gIElmIG5vdCwgc2VlIDxodHRwOi8vd3d3LmdudS5vcmcvbGljZW5zZXMvPi5cbiAqXG4gKiBJbiBhY2NvcmRhbmNlIHdpdGggU2VjdGlvbiA3KGIpIG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiAqIHZlcnNpb24gMywgdGhlc2UgQXBwcm9wcmlhdGUgTGVnYWwgTm90aWNlcyBtdXN0IHJldGFpbiB0aGUgZGlzcGxheSBvZiB0aGVcbiAqIFwiU3VwZXJjaGFyZ2VkIGJ5IFN1aXRlQ1JNXCIgbG9nby4gSWYgdGhlIGRpc3BsYXkgb2YgdGhlIGxvZ29zIGlzIG5vdCByZWFzb25hYmx5XG4gKiBmZWFzaWJsZSBmb3IgdGVjaG5pY2FsIHJlYXNvbnMsIHRoZSBBcHByb3ByaWF0ZSBMZWdhbCBOb3RpY2VzIG11c3QgZGlzcGxheVxuICogdGhlIHdvcmRzIFwiU3VwZXJjaGFyZ2VkIGJ5IFN1aXRlQ1JNXCIuXG4gKi9cblxuaW1wb3J0IHtBc3luY0FjdGlvbkRhdGEsIEFzeW5jQWN0aW9uSGFuZGxlcn0gZnJvbSAnLi4vLi4vYXN5bmMtYWN0aW9uLm1vZGVsJztcbmltcG9ydCB7SW5qZWN0YWJsZX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1JvdXRlcn0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7TWVzc2FnZVNlcnZpY2V9IGZyb20gJy4uLy4uLy4uLy4uLy4uL21lc3NhZ2UvbWVzc2FnZS5zZXJ2aWNlJztcbmltcG9ydCB7TmdiTW9kYWx9IGZyb20gXCJAbmctYm9vdHN0cmFwL25nLWJvb3RzdHJhcFwiO1xuaW1wb3J0IHtDbGFzc2ljTW9kYWxDb21wb25lbnR9IGZyb20gXCIuLi8uLi8uLi8uLi8uLi8uLi9jb21wb25lbnRzL21vZGFsL2NvbXBvbmVudHMvY2xhc3NpYy1tb2RhbC9jbGFzc2ljLW1vZGFsLmNvbXBvbmVudFwiO1xuXG5ASW5qZWN0YWJsZSh7XG4gICAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIENoYW5nZWxvZ0FzeW5jQWN0aW9uIGV4dGVuZHMgQXN5bmNBY3Rpb25IYW5kbGVyIHtcbiAgICBrZXkgPSAnYXVkaXQnO1xuXG4gICAgY29uc3RydWN0b3IoXG4gICAgICAgIHByb3RlY3RlZCByb3V0ZXI6IFJvdXRlcixcbiAgICAgICAgcHJvdGVjdGVkIG1vZGFsU2VydmljZTogTmdiTW9kYWwsXG4gICAgICAgIHByb3RlY3RlZCBtZXNzYWdlOiBNZXNzYWdlU2VydmljZSxcbiAgICApIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICB9XG5cbiAgICBydW4oZGF0YTogQXN5bmNBY3Rpb25EYXRhKTogdm9pZCB7XG5cbiAgICAgICAgaWYgKCFkYXRhIHx8ICFkYXRhLnVybCkge1xuICAgICAgICAgICAgdGhpcy5tZXNzYWdlLmFkZERhbmdlck1lc3NhZ2VCeUtleSgnTEJMX01JU1NJTkdfSEFORExFUl9EQVRBX1JPVVRFJyk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnNob3dDbGFzc2ljVmlld01vZGFsKGRhdGEudXJsKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZW1vdmUgdGl0bGUgdGV4dCBmcm9tIGlmcmFtZSBzb3VyY2UgZG9jdW1lbnRcbiAgICAgKi9cbiAgICBjaGFuZ2VMb2dMZWdhY3lDb250ZW50Rm9ybWF0dGVyKGlmcmFtZUVsZW1lbnQ6IEhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICAgIGlmICghaWZyYW1lRWxlbWVudCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IG5vZGUgPSBpZnJhbWVFbGVtZW50LmNvbnRlbnREb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdtb2R1bGVUaXRsZScpWzBdIGFzIEhUTUxFbGVtZW50O1xuICAgICAgICBpZiAoIW5vZGUpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBub2RlLmlubmVyVGV4dCA9ICcnO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFNob3cgcmVjb3JkIHNlbGVjdGlvbiBtb2RhbFxuICAgICAqL1xuICAgIHByb3RlY3RlZCBzaG93Q2xhc3NpY1ZpZXdNb2RhbCh1cmw6IHN0cmluZyk6IHZvaWQge1xuICAgICAgICBjb25zdCBtb2RhbCA9IHRoaXMubW9kYWxTZXJ2aWNlLm9wZW4oQ2xhc3NpY01vZGFsQ29tcG9uZW50LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHNpemU6ICd4bCcsXG4gICAgICAgICAgICAgICAgY2VudGVyZWQ6IHRydWUsXG4gICAgICAgICAgICAgICAgc2Nyb2xsYWJsZTogdHJ1ZVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIG1vZGFsLmNvbXBvbmVudEluc3RhbmNlLnRpdGxlS2V5ID0gJ0xCTF9DSEFOR0VfTE9HJztcbiAgICAgICAgbW9kYWwuY29tcG9uZW50SW5zdGFuY2UudXJsID0gdXJsO1xuICAgICAgICBtb2RhbC5jb21wb25lbnRJbnN0YW5jZS5hc3luY0FjdGlvbkNhbGxiYWNrID0gdGhpcy5jaGFuZ2VMb2dMZWdhY3lDb250ZW50Rm9ybWF0dGVyLmJpbmQodGhpcyk7XG4gICAgfVxuXG59XG4iXX0=