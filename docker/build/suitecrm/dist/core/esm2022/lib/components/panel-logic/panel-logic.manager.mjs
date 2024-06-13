/**
 * SuiteCRM is a customer relationship management program developed by SalesAgility Ltd.
 * Copyright (C) 2023 SalesAgility Ltd.
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
import { BaseActionManager } from '../../services/actions/base-action-manager.service';
import { PanelLogicDisplayTypeAction } from './display-type/panel-logic-display-type-action.service';
import * as i0 from "@angular/core";
import * as i1 from "./display-type/panel-logic-display-type-action.service";
class PanelLogicManager extends BaseActionManager {
    constructor(displayType) {
        super();
        displayType.modes.forEach(mode => this.actions[mode][displayType.key] = displayType);
    }
    /**
     * Run logic for the given field
     * @param {string} logicType
     * @param {object} field
     * @param {object} panel
     * @param {object} record
     * @param {object} mode
     */
    runLogic(logicType, field, panel, record, mode) {
        let toDisplay = true;
        const validModeLogic = Object.values(panel.meta.displayLogic).filter(logic => {
            const allowedModes = logic['modes'] ?? [];
            return !!(allowedModes.length && allowedModes.includes(mode));
        });
        if (!validModeLogic || !validModeLogic.length) {
            return toDisplay;
        }
        let defaultDisplay = panel.meta.display ?? 'show';
        let targetDisplay = 'hide';
        if (defaultDisplay === 'hide') {
            targetDisplay = 'show';
        }
        const context = {
            panel,
            record,
            field,
            module: record.module
        };
        const isActive = validModeLogic.some(logic => {
            const data = this.buildActionData(logic, context);
            return this.actions[mode][logic.key].run(data, logic);
        });
        if (isActive) {
            defaultDisplay = targetDisplay;
        }
        toDisplay = (defaultDisplay === 'show');
        panel.displayState.next(toDisplay);
    }
    buildActionData(action, context) {
        return {
            field: context.field,
            record: (context && context.record) || null,
            panel: context.panel || null,
        };
    }
    static { this.ɵfac = function PanelLogicManager_Factory(t) { return new (t || PanelLogicManager)(i0.ɵɵinject(i1.PanelLogicDisplayTypeAction)); }; }
    static { this.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: PanelLogicManager, factory: PanelLogicManager.ɵfac, providedIn: 'root' }); }
}
export { PanelLogicManager };
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PanelLogicManager, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: i1.PanelLogicDisplayTypeAction }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFuZWwtbG9naWMubWFuYWdlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL2NvcmUvYXBwL2NvcmUvc3JjL2xpYi9jb21wb25lbnRzL3BhbmVsLWxvZ2ljL3BhbmVsLWxvZ2ljLm1hbmFnZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQXdCRztBQUVILE9BQU8sRUFBQyxVQUFVLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFDLGlCQUFpQixFQUFDLE1BQU0sb0RBQW9ELENBQUM7QUFHckYsT0FBTyxFQUFDLDJCQUEyQixFQUFDLE1BQU0sd0RBQXdELENBQUM7OztBQUVuRyxNQUdhLGlCQUFrQixTQUFRLGlCQUF1QztJQUUxRSxZQUNJLFdBQXdDO1FBRXhDLEtBQUssRUFBRSxDQUFDO1FBQ1IsV0FBVyxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDLFdBQVcsQ0FBQyxHQUFHLENBQUMsR0FBRyxXQUFXLENBQUMsQ0FBQztJQUN6RixDQUFDO0lBRUQ7Ozs7Ozs7T0FPRztJQUNILFFBQVEsQ0FBQyxTQUFpQixFQUFFLEtBQVksRUFBRSxLQUFZLEVBQUUsTUFBYyxFQUFFLElBQWM7UUFDbEYsSUFBSSxTQUFTLEdBQUcsSUFBSSxDQUFDO1FBRXJCLE1BQU0sY0FBYyxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLEVBQUU7WUFDekUsTUFBTSxZQUFZLEdBQUcsS0FBSyxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsQ0FBQztZQUMxQyxPQUFPLENBQUMsQ0FBQyxDQUFDLFlBQVksQ0FBQyxNQUFNLElBQUksWUFBWSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO1FBQ2xFLENBQUMsQ0FBQyxDQUFDO1FBRUgsSUFBSSxDQUFDLGNBQWMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxNQUFNLEVBQUU7WUFDM0MsT0FBTyxTQUFTLENBQUM7U0FDcEI7UUFFRCxJQUFJLGNBQWMsR0FBRyxLQUFLLENBQUMsSUFBSSxDQUFDLE9BQU8sSUFBSSxNQUFNLENBQUM7UUFDbEQsSUFBSSxhQUFhLEdBQUcsTUFBTSxDQUFDO1FBQzNCLElBQUksY0FBYyxLQUFLLE1BQU0sRUFBRTtZQUMzQixhQUFhLEdBQUcsTUFBTSxDQUFDO1NBQzFCO1FBRUQsTUFBTSxPQUFPLEdBQUc7WUFDWixLQUFLO1lBQ0wsTUFBTTtZQUNOLEtBQUs7WUFDTCxNQUFNLEVBQUUsTUFBTSxDQUFDLE1BQU07U0FDUCxDQUFDO1FBRW5CLE1BQU0sUUFBUSxHQUFHLGNBQWMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEVBQUU7WUFDekMsTUFBTSxJQUFJLEdBQXlCLElBQUksQ0FBQyxlQUFlLENBQUMsS0FBSyxFQUFFLE9BQU8sQ0FBQyxDQUFDO1lBQ3hFLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLElBQUksRUFBRSxLQUFLLENBQUMsQ0FBQztRQUMxRCxDQUFDLENBQUMsQ0FBQztRQUVILElBQUksUUFBUSxFQUFFO1lBQ1YsY0FBYyxHQUFJLGFBQWEsQ0FBQztTQUNuQztRQUVELFNBQVMsR0FBRyxDQUFDLGNBQWMsS0FBSyxNQUFNLENBQUMsQ0FBQztRQUV4QyxLQUFLLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUN2QyxDQUFDO0lBRVMsZUFBZSxDQUFDLE1BQWMsRUFBRSxPQUF1QjtRQUM3RCxPQUFPO1lBQ0gsS0FBSyxFQUFFLE9BQU8sQ0FBQyxLQUFLO1lBQ3BCLE1BQU0sRUFBRSxDQUFDLE9BQU8sSUFBSSxPQUFPLENBQUMsTUFBTSxDQUFDLElBQUksSUFBSTtZQUMzQyxLQUFLLEVBQUUsT0FBTyxDQUFDLEtBQUssSUFBSSxJQUFJO1NBQ1AsQ0FBQztJQUM5QixDQUFDO2tGQTlEUSxpQkFBaUI7dUVBQWpCLGlCQUFpQixXQUFqQixpQkFBaUIsbUJBRmQsTUFBTTs7U0FFVCxpQkFBaUI7dUZBQWpCLGlCQUFpQjtjQUg3QixVQUFVO2VBQUM7Z0JBQ1IsVUFBVSxFQUFFLE1BQU07YUFDckIiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIFN1aXRlQ1JNIGlzIGEgY3VzdG9tZXIgcmVsYXRpb25zaGlwIG1hbmFnZW1lbnQgcHJvZ3JhbSBkZXZlbG9wZWQgYnkgU2FsZXNBZ2lsaXR5IEx0ZC5cbiAqIENvcHlyaWdodCAoQykgMjAyMyBTYWxlc0FnaWxpdHkgTHRkLlxuICpcbiAqIFRoaXMgcHJvZ3JhbSBpcyBmcmVlIHNvZnR3YXJlOyB5b3UgY2FuIHJlZGlzdHJpYnV0ZSBpdCBhbmQvb3IgbW9kaWZ5IGl0IHVuZGVyXG4gKiB0aGUgdGVybXMgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZSB2ZXJzaW9uIDMgYXMgcHVibGlzaGVkIGJ5IHRoZVxuICogRnJlZSBTb2Z0d2FyZSBGb3VuZGF0aW9uIHdpdGggdGhlIGFkZGl0aW9uIG9mIHRoZSBmb2xsb3dpbmcgcGVybWlzc2lvbiBhZGRlZFxuICogdG8gU2VjdGlvbiAxNSBhcyBwZXJtaXR0ZWQgaW4gU2VjdGlvbiA3KGEpOiBGT1IgQU5ZIFBBUlQgT0YgVEhFIENPVkVSRUQgV09SS1xuICogSU4gV0hJQ0ggVEhFIENPUFlSSUdIVCBJUyBPV05FRCBCWSBTQUxFU0FHSUxJVFksIFNBTEVTQUdJTElUWSBESVNDTEFJTVMgVEhFXG4gKiBXQVJSQU5UWSBPRiBOT04gSU5GUklOR0VNRU5UIE9GIFRISVJEIFBBUlRZIFJJR0hUUy5cbiAqXG4gKiBUaGlzIHByb2dyYW0gaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCwgYnV0IFdJVEhPVVRcbiAqIEFOWSBXQVJSQU5UWTsgd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTXG4gKiBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuIFNlZSB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGZvciBtb3JlXG4gKiBkZXRhaWxzLlxuICpcbiAqIFlvdSBzaG91bGQgaGF2ZSByZWNlaXZlZCBhIGNvcHkgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuICogYWxvbmcgd2l0aCB0aGlzIHByb2dyYW0uICBJZiBub3QsIHNlZSA8aHR0cDovL3d3dy5nbnUub3JnL2xpY2Vuc2VzLz4uXG4gKlxuICogSW4gYWNjb3JkYW5jZSB3aXRoIFNlY3Rpb24gNyhiKSBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4gKiB2ZXJzaW9uIDMsIHRoZXNlIEFwcHJvcHJpYXRlIExlZ2FsIE5vdGljZXMgbXVzdCByZXRhaW4gdGhlIGRpc3BsYXkgb2YgdGhlXG4gKiBcIlN1cGVyY2hhcmdlZCBieSBTdWl0ZUNSTVwiIGxvZ28uIElmIHRoZSBkaXNwbGF5IG9mIHRoZSBsb2dvcyBpcyBub3QgcmVhc29uYWJseVxuICogZmVhc2libGUgZm9yIHRlY2huaWNhbCByZWFzb25zLCB0aGUgQXBwcm9wcmlhdGUgTGVnYWwgTm90aWNlcyBtdXN0IGRpc3BsYXlcbiAqIHRoZSB3b3JkcyBcIlN1cGVyY2hhcmdlZCBieSBTdWl0ZUNSTVwiLlxuICovXG5cbmltcG9ydCB7SW5qZWN0YWJsZX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0Jhc2VBY3Rpb25NYW5hZ2VyfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9hY3Rpb25zL2Jhc2UtYWN0aW9uLW1hbmFnZXIuc2VydmljZSc7XG5pbXBvcnQge1BhbmVsTG9naWNBY3Rpb25EYXRhfSBmcm9tICcuL3BhbmVsLWxvZ2ljLmFjdGlvbic7XG5pbXBvcnQge0FjdGlvbiwgQWN0aW9uQ29udGV4dCwgRmllbGQsIFJlY29yZCwgVmlld01vZGUsIFBhbmVsfSBmcm9tICdjb21tb24nO1xuaW1wb3J0IHtQYW5lbExvZ2ljRGlzcGxheVR5cGVBY3Rpb259IGZyb20gJy4vZGlzcGxheS10eXBlL3BhbmVsLWxvZ2ljLWRpc3BsYXktdHlwZS1hY3Rpb24uc2VydmljZSc7XG5cbkBJbmplY3RhYmxlKHtcbiAgICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgUGFuZWxMb2dpY01hbmFnZXIgZXh0ZW5kcyBCYXNlQWN0aW9uTWFuYWdlcjxQYW5lbExvZ2ljQWN0aW9uRGF0YT4ge1xuXG4gICAgY29uc3RydWN0b3IoXG4gICAgICAgIGRpc3BsYXlUeXBlOiBQYW5lbExvZ2ljRGlzcGxheVR5cGVBY3Rpb24sXG4gICAgKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIGRpc3BsYXlUeXBlLm1vZGVzLmZvckVhY2gobW9kZSA9PiB0aGlzLmFjdGlvbnNbbW9kZV1bZGlzcGxheVR5cGUua2V5XSA9IGRpc3BsYXlUeXBlKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSdW4gbG9naWMgZm9yIHRoZSBnaXZlbiBmaWVsZFxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBsb2dpY1R5cGVcbiAgICAgKiBAcGFyYW0ge29iamVjdH0gZmllbGRcbiAgICAgKiBAcGFyYW0ge29iamVjdH0gcGFuZWxcbiAgICAgKiBAcGFyYW0ge29iamVjdH0gcmVjb3JkXG4gICAgICogQHBhcmFtIHtvYmplY3R9IG1vZGVcbiAgICAgKi9cbiAgICBydW5Mb2dpYyhsb2dpY1R5cGU6IHN0cmluZywgZmllbGQ6IEZpZWxkLCBwYW5lbDogUGFuZWwsIHJlY29yZDogUmVjb3JkLCBtb2RlOiBWaWV3TW9kZSkge1xuICAgICAgICBsZXQgdG9EaXNwbGF5ID0gdHJ1ZTtcblxuICAgICAgICBjb25zdCB2YWxpZE1vZGVMb2dpYyA9IE9iamVjdC52YWx1ZXMocGFuZWwubWV0YS5kaXNwbGF5TG9naWMpLmZpbHRlcihsb2dpYyA9PiB7XG4gICAgICAgICAgICBjb25zdCBhbGxvd2VkTW9kZXMgPSBsb2dpY1snbW9kZXMnXSA/PyBbXTtcbiAgICAgICAgICAgIHJldHVybiAhIShhbGxvd2VkTW9kZXMubGVuZ3RoICYmIGFsbG93ZWRNb2Rlcy5pbmNsdWRlcyhtb2RlKSk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGlmICghdmFsaWRNb2RlTG9naWMgfHwgIXZhbGlkTW9kZUxvZ2ljLmxlbmd0aCkge1xuICAgICAgICAgICAgcmV0dXJuIHRvRGlzcGxheTtcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCBkZWZhdWx0RGlzcGxheSA9IHBhbmVsLm1ldGEuZGlzcGxheSA/PyAnc2hvdyc7XG4gICAgICAgIGxldCB0YXJnZXREaXNwbGF5ID0gJ2hpZGUnO1xuICAgICAgICBpZiAoZGVmYXVsdERpc3BsYXkgPT09ICdoaWRlJykge1xuICAgICAgICAgICAgdGFyZ2V0RGlzcGxheSA9ICdzaG93JztcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGNvbnRleHQgPSB7XG4gICAgICAgICAgICBwYW5lbCxcbiAgICAgICAgICAgIHJlY29yZCxcbiAgICAgICAgICAgIGZpZWxkLFxuICAgICAgICAgICAgbW9kdWxlOiByZWNvcmQubW9kdWxlXG4gICAgICAgIH0gYXMgQWN0aW9uQ29udGV4dDtcblxuICAgICAgICBjb25zdCBpc0FjdGl2ZSA9IHZhbGlkTW9kZUxvZ2ljLnNvbWUobG9naWMgPT4ge1xuICAgICAgICAgICAgY29uc3QgZGF0YTogUGFuZWxMb2dpY0FjdGlvbkRhdGEgPSB0aGlzLmJ1aWxkQWN0aW9uRGF0YShsb2dpYywgY29udGV4dCk7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5hY3Rpb25zW21vZGVdW2xvZ2ljLmtleV0ucnVuKGRhdGEsIGxvZ2ljKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgaWYgKGlzQWN0aXZlKSB7XG4gICAgICAgICAgICBkZWZhdWx0RGlzcGxheSAgPSB0YXJnZXREaXNwbGF5O1xuICAgICAgICB9XG5cbiAgICAgICAgdG9EaXNwbGF5ID0gKGRlZmF1bHREaXNwbGF5ID09PSAnc2hvdycpO1xuXG4gICAgICAgIHBhbmVsLmRpc3BsYXlTdGF0ZS5uZXh0KHRvRGlzcGxheSk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIGJ1aWxkQWN0aW9uRGF0YShhY3Rpb246IEFjdGlvbiwgY29udGV4dD86IEFjdGlvbkNvbnRleHQpOiBQYW5lbExvZ2ljQWN0aW9uRGF0YSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBmaWVsZDogY29udGV4dC5maWVsZCxcbiAgICAgICAgICAgIHJlY29yZDogKGNvbnRleHQgJiYgY29udGV4dC5yZWNvcmQpIHx8IG51bGwsXG4gICAgICAgICAgICBwYW5lbDogY29udGV4dC5wYW5lbCB8fCBudWxsLFxuICAgICAgICB9IGFzIFBhbmVsTG9naWNBY3Rpb25EYXRhO1xuICAgIH1cblxufVxuIl19