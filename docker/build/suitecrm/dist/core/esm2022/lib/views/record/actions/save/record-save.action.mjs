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
import { take } from 'rxjs/operators';
import { RecordActionHandler } from '../record.action';
import { MessageService } from '../../../../services/message/message.service';
import { ModuleNavigation } from '../../../../services/navigation/module-navigation/module-navigation.service';
import { NotificationStore } from '../../../../store/notification/notification.store';
import { RecentlyViewedService } from "../../../../services/navigation/recently-viewed/recently-viewed.service";
import * as i0 from "@angular/core";
import * as i1 from "../../../../services/message/message.service";
import * as i2 from "../../../../services/navigation/module-navigation/module-navigation.service";
import * as i3 from "../../../../store/notification/notification.store";
import * as i4 from "../../../../services/navigation/recently-viewed/recently-viewed.service";
class RecordSaveAction extends RecordActionHandler {
    constructor(message, navigation, notificationStore, recentlyViewedService) {
        super();
        this.message = message;
        this.navigation = navigation;
        this.notificationStore = notificationStore;
        this.recentlyViewedService = recentlyViewedService;
        this.key = 'save';
        this.modes = ['edit'];
    }
    run(data) {
        const isFieldLoading = Object.keys(data.store.recordStore.getStaging().fields).some(fieldKey => {
            const field = data.store.recordStore.getStaging().fields[fieldKey];
            return field.loading ?? false;
        });
        if (isFieldLoading) {
            this.message.addWarningMessageByKey('LBL_LOADING_IN_PROGRESS');
            return;
        }
        data.store.recordStore.validate().pipe(take(1)).subscribe(valid => {
            if (valid) {
                data.store.save().pipe(take(1)).subscribe(record => {
                    const params = data.store.params;
                    const moduleName = data.store.getModuleName();
                    const id = record.id;
                    this.notificationStore.conditionalNotificationRefresh('edit');
                    const recentlyViewed = this.recentlyViewedService.buildRecentlyViewed(moduleName, id);
                    this.recentlyViewedService.addRecentlyViewed(moduleName, recentlyViewed);
                    this.navigateBack(this.navigation, params, id, moduleName, record);
                });
                return;
            }
            this.message.addWarningMessageByKey('LBL_VALIDATION_ERRORS');
        });
    }
    shouldDisplay(data) {
        return true;
    }
    static { this.ɵfac = function RecordSaveAction_Factory(t) { return new (t || RecordSaveAction)(i0.ɵɵinject(i1.MessageService), i0.ɵɵinject(i2.ModuleNavigation), i0.ɵɵinject(i3.NotificationStore), i0.ɵɵinject(i4.RecentlyViewedService)); }; }
    static { this.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: RecordSaveAction, factory: RecordSaveAction.ɵfac, providedIn: 'root' }); }
}
export { RecordSaveAction };
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(RecordSaveAction, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: i1.MessageService }, { type: i2.ModuleNavigation }, { type: i3.NotificationStore }, { type: i4.RecentlyViewedService }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVjb3JkLXNhdmUuYWN0aW9uLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vY29yZS9hcHAvY29yZS9zcmMvbGliL3ZpZXdzL3JlY29yZC9hY3Rpb25zL3NhdmUvcmVjb3JkLXNhdmUuYWN0aW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0F3Qkc7QUFFSCxPQUFPLEVBQUMsVUFBVSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBRXpDLE9BQU8sRUFBQyxJQUFJLEVBQUMsTUFBTSxnQkFBZ0IsQ0FBQztBQUNwQyxPQUFPLEVBQW1CLG1CQUFtQixFQUFDLE1BQU0sa0JBQWtCLENBQUM7QUFDdkUsT0FBTyxFQUFDLGNBQWMsRUFBQyxNQUFNLDhDQUE4QyxDQUFDO0FBQzVFLE9BQU8sRUFBQyxnQkFBZ0IsRUFBQyxNQUFNLDZFQUE2RSxDQUFDO0FBQzdHLE9BQU8sRUFBQyxpQkFBaUIsRUFBQyxNQUFNLG1EQUFtRCxDQUFDO0FBQ3BGLE9BQU8sRUFBQyxxQkFBcUIsRUFBQyxNQUFNLHlFQUF5RSxDQUFDOzs7Ozs7QUFFOUcsTUFHYSxnQkFBaUIsU0FBUSxtQkFBbUI7SUFLckQsWUFDYyxPQUF1QixFQUN2QixVQUE0QixFQUM1QixpQkFBb0MsRUFDcEMscUJBQTRDO1FBRXRELEtBQUssRUFBRSxDQUFDO1FBTEUsWUFBTyxHQUFQLE9BQU8sQ0FBZ0I7UUFDdkIsZUFBVSxHQUFWLFVBQVUsQ0FBa0I7UUFDNUIsc0JBQWlCLEdBQWpCLGlCQUFpQixDQUFtQjtRQUNwQywwQkFBcUIsR0FBckIscUJBQXFCLENBQXVCO1FBUDFELFFBQUcsR0FBRyxNQUFNLENBQUM7UUFDYixVQUFLLEdBQUcsQ0FBQyxNQUFrQixDQUFDLENBQUM7SUFTN0IsQ0FBQztJQUVELEdBQUcsQ0FBQyxJQUFzQjtRQUN0QixNQUFNLGNBQWMsR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsV0FBVyxDQUFDLFVBQVUsRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsRUFBRTtZQUMzRixNQUFNLEtBQUssR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLFdBQVcsQ0FBQyxVQUFVLEVBQUUsQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUM7WUFDbkUsT0FBTyxLQUFLLENBQUMsT0FBTyxJQUFJLEtBQUssQ0FBQztRQUNsQyxDQUFDLENBQUMsQ0FBQztRQUVILElBQUcsY0FBYyxFQUFFO1lBQ2YsSUFBSSxDQUFDLE9BQU8sQ0FBQyxzQkFBc0IsQ0FBQyx5QkFBeUIsQ0FBQyxDQUFDO1lBQy9ELE9BQVE7U0FDWDtRQUVELElBQUksQ0FBQyxLQUFLLENBQUMsV0FBVyxDQUFDLFFBQVEsRUFBRSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLEVBQUU7WUFDOUQsSUFBSSxLQUFLLEVBQUU7Z0JBQ1AsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQUUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxFQUFFO29CQUMvQyxNQUFNLE1BQU0sR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQztvQkFDakMsTUFBTSxVQUFVLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxhQUFhLEVBQUUsQ0FBQztvQkFDOUMsTUFBTSxFQUFFLEdBQUcsTUFBTSxDQUFDLEVBQUUsQ0FBQztvQkFDckIsSUFBSSxDQUFDLGlCQUFpQixDQUFDLDhCQUE4QixDQUFDLE1BQU0sQ0FBQyxDQUFDO29CQUM5RCxNQUFNLGNBQWMsR0FBRyxJQUFJLENBQUMscUJBQXFCLENBQUMsbUJBQW1CLENBQUMsVUFBVSxFQUFFLEVBQUUsQ0FBQyxDQUFDO29CQUN0RixJQUFJLENBQUMscUJBQXFCLENBQUMsaUJBQWlCLENBQUMsVUFBVSxFQUFFLGNBQWMsQ0FBQyxDQUFDO29CQUN6RSxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxVQUFVLEVBQUUsTUFBTSxFQUFFLEVBQUUsRUFBRSxVQUFVLEVBQUUsTUFBTSxDQUFDLENBQUM7Z0JBQ3ZFLENBQUMsQ0FBQyxDQUFDO2dCQUNILE9BQU87YUFDVjtZQUVELElBQUksQ0FBQyxPQUFPLENBQUMsc0JBQXNCLENBQUMsdUJBQXVCLENBQUMsQ0FBQztRQUNqRSxDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFFRCxhQUFhLENBQUMsSUFBc0I7UUFDaEMsT0FBTyxJQUFJLENBQUM7SUFDaEIsQ0FBQztpRkE3Q1EsZ0JBQWdCO3VFQUFoQixnQkFBZ0IsV0FBaEIsZ0JBQWdCLG1CQUZiLE1BQU07O1NBRVQsZ0JBQWdCO3VGQUFoQixnQkFBZ0I7Y0FINUIsVUFBVTtlQUFDO2dCQUNSLFVBQVUsRUFBRSxNQUFNO2FBQ3JCIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBTdWl0ZUNSTSBpcyBhIGN1c3RvbWVyIHJlbGF0aW9uc2hpcCBtYW5hZ2VtZW50IHByb2dyYW0gZGV2ZWxvcGVkIGJ5IFNhbGVzQWdpbGl0eSBMdGQuXG4gKiBDb3B5cmlnaHQgKEMpIDIwMjEgU2FsZXNBZ2lsaXR5IEx0ZC5cbiAqXG4gKiBUaGlzIHByb2dyYW0gaXMgZnJlZSBzb2Z0d2FyZTsgeW91IGNhbiByZWRpc3RyaWJ1dGUgaXQgYW5kL29yIG1vZGlmeSBpdCB1bmRlclxuICogdGhlIHRlcm1zIG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgdmVyc2lvbiAzIGFzIHB1Ymxpc2hlZCBieSB0aGVcbiAqIEZyZWUgU29mdHdhcmUgRm91bmRhdGlvbiB3aXRoIHRoZSBhZGRpdGlvbiBvZiB0aGUgZm9sbG93aW5nIHBlcm1pc3Npb24gYWRkZWRcbiAqIHRvIFNlY3Rpb24gMTUgYXMgcGVybWl0dGVkIGluIFNlY3Rpb24gNyhhKTogRk9SIEFOWSBQQVJUIE9GIFRIRSBDT1ZFUkVEIFdPUktcbiAqIElOIFdISUNIIFRIRSBDT1BZUklHSFQgSVMgT1dORUQgQlkgU0FMRVNBR0lMSVRZLCBTQUxFU0FHSUxJVFkgRElTQ0xBSU1TIFRIRVxuICogV0FSUkFOVFkgT0YgTk9OIElORlJJTkdFTUVOVCBPRiBUSElSRCBQQVJUWSBSSUdIVFMuXG4gKlxuICogVGhpcyBwcm9ncmFtIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsIGJ1dCBXSVRIT1VUXG4gKiBBTlkgV0FSUkFOVFk7IHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZiBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTU1xuICogRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLiBTZWUgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBmb3IgbW9yZVxuICogZGV0YWlscy5cbiAqXG4gKiBZb3Ugc2hvdWxkIGhhdmUgcmVjZWl2ZWQgYSBjb3B5IG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiAqIGFsb25nIHdpdGggdGhpcyBwcm9ncmFtLiAgSWYgbm90LCBzZWUgPGh0dHA6Ly93d3cuZ251Lm9yZy9saWNlbnNlcy8+LlxuICpcbiAqIEluIGFjY29yZGFuY2Ugd2l0aCBTZWN0aW9uIDcoYikgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuICogdmVyc2lvbiAzLCB0aGVzZSBBcHByb3ByaWF0ZSBMZWdhbCBOb3RpY2VzIG11c3QgcmV0YWluIHRoZSBkaXNwbGF5IG9mIHRoZVxuICogXCJTdXBlcmNoYXJnZWQgYnkgU3VpdGVDUk1cIiBsb2dvLiBJZiB0aGUgZGlzcGxheSBvZiB0aGUgbG9nb3MgaXMgbm90IHJlYXNvbmFibHlcbiAqIGZlYXNpYmxlIGZvciB0ZWNobmljYWwgcmVhc29ucywgdGhlIEFwcHJvcHJpYXRlIExlZ2FsIE5vdGljZXMgbXVzdCBkaXNwbGF5XG4gKiB0aGUgd29yZHMgXCJTdXBlcmNoYXJnZWQgYnkgU3VpdGVDUk1cIi5cbiAqL1xuXG5pbXBvcnQge0luamVjdGFibGV9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtWaWV3TW9kZX0gZnJvbSAnY29tbW9uJztcbmltcG9ydCB7dGFrZX0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHtSZWNvcmRBY3Rpb25EYXRhLCBSZWNvcmRBY3Rpb25IYW5kbGVyfSBmcm9tICcuLi9yZWNvcmQuYWN0aW9uJztcbmltcG9ydCB7TWVzc2FnZVNlcnZpY2V9IGZyb20gJy4uLy4uLy4uLy4uL3NlcnZpY2VzL21lc3NhZ2UvbWVzc2FnZS5zZXJ2aWNlJztcbmltcG9ydCB7TW9kdWxlTmF2aWdhdGlvbn0gZnJvbSAnLi4vLi4vLi4vLi4vc2VydmljZXMvbmF2aWdhdGlvbi9tb2R1bGUtbmF2aWdhdGlvbi9tb2R1bGUtbmF2aWdhdGlvbi5zZXJ2aWNlJztcbmltcG9ydCB7Tm90aWZpY2F0aW9uU3RvcmV9IGZyb20gJy4uLy4uLy4uLy4uL3N0b3JlL25vdGlmaWNhdGlvbi9ub3RpZmljYXRpb24uc3RvcmUnO1xuaW1wb3J0IHtSZWNlbnRseVZpZXdlZFNlcnZpY2V9IGZyb20gXCIuLi8uLi8uLi8uLi9zZXJ2aWNlcy9uYXZpZ2F0aW9uL3JlY2VudGx5LXZpZXdlZC9yZWNlbnRseS12aWV3ZWQuc2VydmljZVwiO1xuXG5ASW5qZWN0YWJsZSh7XG4gICAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIFJlY29yZFNhdmVBY3Rpb24gZXh0ZW5kcyBSZWNvcmRBY3Rpb25IYW5kbGVyIHtcblxuICAgIGtleSA9ICdzYXZlJztcbiAgICBtb2RlcyA9IFsnZWRpdCcgYXMgVmlld01vZGVdO1xuXG4gICAgY29uc3RydWN0b3IoXG4gICAgICAgIHByb3RlY3RlZCBtZXNzYWdlOiBNZXNzYWdlU2VydmljZSxcbiAgICAgICAgcHJvdGVjdGVkIG5hdmlnYXRpb246IE1vZHVsZU5hdmlnYXRpb24sXG4gICAgICAgIHByb3RlY3RlZCBub3RpZmljYXRpb25TdG9yZTogTm90aWZpY2F0aW9uU3RvcmUsXG4gICAgICAgIHByb3RlY3RlZCByZWNlbnRseVZpZXdlZFNlcnZpY2U6IFJlY2VudGx5Vmlld2VkU2VydmljZVxuICAgICkge1xuICAgICAgICBzdXBlcigpO1xuICAgIH1cblxuICAgIHJ1bihkYXRhOiBSZWNvcmRBY3Rpb25EYXRhKTogdm9pZCB7XG4gICAgICAgIGNvbnN0IGlzRmllbGRMb2FkaW5nID0gT2JqZWN0LmtleXMoZGF0YS5zdG9yZS5yZWNvcmRTdG9yZS5nZXRTdGFnaW5nKCkuZmllbGRzKS5zb21lKGZpZWxkS2V5ID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGZpZWxkID0gZGF0YS5zdG9yZS5yZWNvcmRTdG9yZS5nZXRTdGFnaW5nKCkuZmllbGRzW2ZpZWxkS2V5XTtcbiAgICAgICAgICAgIHJldHVybiBmaWVsZC5sb2FkaW5nID8/IGZhbHNlO1xuICAgICAgICB9KTtcblxuICAgICAgICBpZihpc0ZpZWxkTG9hZGluZykge1xuICAgICAgICAgICAgdGhpcy5tZXNzYWdlLmFkZFdhcm5pbmdNZXNzYWdlQnlLZXkoJ0xCTF9MT0FESU5HX0lOX1BST0dSRVNTJyk7XG4gICAgICAgICAgICByZXR1cm4gO1xuICAgICAgICB9XG5cbiAgICAgICAgZGF0YS5zdG9yZS5yZWNvcmRTdG9yZS52YWxpZGF0ZSgpLnBpcGUodGFrZSgxKSkuc3Vic2NyaWJlKHZhbGlkID0+IHtcbiAgICAgICAgICAgIGlmICh2YWxpZCkge1xuICAgICAgICAgICAgICAgIGRhdGEuc3RvcmUuc2F2ZSgpLnBpcGUodGFrZSgxKSkuc3Vic2NyaWJlKHJlY29yZCA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHBhcmFtcyA9IGRhdGEuc3RvcmUucGFyYW1zO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBtb2R1bGVOYW1lID0gZGF0YS5zdG9yZS5nZXRNb2R1bGVOYW1lKCk7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGlkID0gcmVjb3JkLmlkO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLm5vdGlmaWNhdGlvblN0b3JlLmNvbmRpdGlvbmFsTm90aWZpY2F0aW9uUmVmcmVzaCgnZWRpdCcpO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCByZWNlbnRseVZpZXdlZCA9IHRoaXMucmVjZW50bHlWaWV3ZWRTZXJ2aWNlLmJ1aWxkUmVjZW50bHlWaWV3ZWQobW9kdWxlTmFtZSwgaWQpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnJlY2VudGx5Vmlld2VkU2VydmljZS5hZGRSZWNlbnRseVZpZXdlZChtb2R1bGVOYW1lLCByZWNlbnRseVZpZXdlZCk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubmF2aWdhdGVCYWNrKHRoaXMubmF2aWdhdGlvbiwgcGFyYW1zLCBpZCwgbW9kdWxlTmFtZSwgcmVjb3JkKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHRoaXMubWVzc2FnZS5hZGRXYXJuaW5nTWVzc2FnZUJ5S2V5KCdMQkxfVkFMSURBVElPTl9FUlJPUlMnKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgc2hvdWxkRGlzcGxheShkYXRhOiBSZWNvcmRBY3Rpb25EYXRhKTogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbn1cbiJdfQ==