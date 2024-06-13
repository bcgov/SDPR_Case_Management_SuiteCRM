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
import { DisplayTypeAction } from './display-type/display-type.action';
import * as i0 from "@angular/core";
import * as i1 from "./display-type/display-type.action";
class FieldLogicDisplayManager extends BaseActionManager {
    constructor(displayType) {
        super();
        displayType.modes.forEach(mode => this.actions[mode][displayType.key] = displayType);
    }
    runAll(field, record, mode) {
        let toDisplay = 'show';
        if (!field.displayLogic) {
            return;
        }
        const validModeLogic = Object.values(field.displayLogic).filter(logic => {
            const allowedModes = logic['modes'] ?? [];
            return !!(allowedModes.length && allowedModes.includes(mode));
        });
        if (!validModeLogic || !validModeLogic.length) {
            return;
        }
        let defaultDisplay = field.defaultDisplay ?? 'show';
        let targetDisplay = 'none';
        if (defaultDisplay === 'none') {
            targetDisplay = 'show';
        }
        const context = {
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
        toDisplay = defaultDisplay;
        if (defaultDisplay === 'show') {
            toDisplay = 'show';
        }
        field.display = toDisplay;
    }
    buildActionData(action, context) {
        return {
            field: context.field,
            record: (context && context.record) || null,
        };
    }
    static { this.ɵfac = function FieldLogicDisplayManager_Factory(t) { return new (t || FieldLogicDisplayManager)(i0.ɵɵinject(i1.DisplayTypeAction)); }; }
    static { this.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: FieldLogicDisplayManager, factory: FieldLogicDisplayManager.ɵfac, providedIn: 'root' }); }
}
export { FieldLogicDisplayManager };
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(FieldLogicDisplayManager, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: i1.DisplayTypeAction }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmllbGQtbG9naWMtZGlzcGxheS5tYW5hZ2VyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vY29yZS9hcHAvY29yZS9zcmMvbGliL2ZpZWxkcy9maWVsZC1sb2dpYy1kaXNwbGF5L2ZpZWxkLWxvZ2ljLWRpc3BsYXkubWFuYWdlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBd0JHO0FBRUgsT0FBTyxFQUFDLFVBQVUsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUMsaUJBQWlCLEVBQUMsTUFBTSxvREFBb0QsQ0FBQztBQUdyRixPQUFPLEVBQUMsaUJBQWlCLEVBQUMsTUFBTSxvQ0FBb0MsQ0FBQzs7O0FBRXJFLE1BR2Esd0JBQXlCLFNBQVEsaUJBQThDO0lBRXhGLFlBQ0ksV0FBOEI7UUFFOUIsS0FBSyxFQUFFLENBQUM7UUFDUixXQUFXLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUMsV0FBVyxDQUFDLEdBQUcsQ0FBQyxHQUFHLFdBQVcsQ0FBQyxDQUFDO0lBQ3pGLENBQUM7SUFFRCxNQUFNLENBQUMsS0FBWSxFQUFFLE1BQWMsRUFBRSxJQUFjO1FBQy9DLElBQUksU0FBUyxHQUFnQixNQUFNLENBQUM7UUFFcEMsSUFBRyxDQUFDLEtBQUssQ0FBQyxZQUFZLEVBQUU7WUFDcEIsT0FBTztTQUNWO1FBRUQsTUFBTSxjQUFjLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsWUFBWSxDQUFDLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxFQUFFO1lBQ3BFLE1BQU0sWUFBWSxHQUFHLEtBQUssQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFLENBQUM7WUFDMUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxZQUFZLENBQUMsTUFBTSxJQUFJLFlBQVksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztRQUNsRSxDQUFDLENBQUMsQ0FBQztRQUVILElBQUksQ0FBQyxjQUFjLElBQUksQ0FBQyxjQUFjLENBQUMsTUFBTSxFQUFFO1lBQzNDLE9BQU87U0FDVjtRQUVELElBQUksY0FBYyxHQUFHLEtBQUssQ0FBQyxjQUFjLElBQUksTUFBTSxDQUFDO1FBRXBELElBQUksYUFBYSxHQUFnQixNQUFNLENBQUM7UUFFeEMsSUFBSSxjQUFjLEtBQUssTUFBTSxFQUFFO1lBQzNCLGFBQWEsR0FBRyxNQUFNLENBQUM7U0FDMUI7UUFFRCxNQUFNLE9BQU8sR0FBRztZQUNaLE1BQU07WUFDTixLQUFLO1lBQ0wsTUFBTSxFQUFFLE1BQU0sQ0FBQyxNQUFNO1NBQ1AsQ0FBQztRQUduQixNQUFNLFFBQVEsR0FBRyxjQUFjLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxFQUFFO1lBQ3pDLE1BQU0sSUFBSSxHQUFnQyxJQUFJLENBQUMsZUFBZSxDQUFDLEtBQUssRUFBRSxPQUFPLENBQUMsQ0FBQztZQUMvRSxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxJQUFJLEVBQUUsS0FBSyxDQUFDLENBQUM7UUFDMUQsQ0FBQyxDQUFDLENBQUM7UUFFSCxJQUFJLFFBQVEsRUFBRTtZQUNWLGNBQWMsR0FBRyxhQUFhLENBQUM7U0FFbEM7UUFFRCxTQUFTLEdBQUcsY0FBNkIsQ0FBQztRQUUxQyxJQUFJLGNBQWMsS0FBSyxNQUFNLEVBQUU7WUFDM0IsU0FBUyxHQUFHLE1BQU0sQ0FBQztTQUN0QjtRQUVELEtBQUssQ0FBQyxPQUFPLEdBQUcsU0FBUyxDQUFDO0lBRTlCLENBQUM7SUFFUyxlQUFlLENBQUMsTUFBYyxFQUFFLE9BQXVCO1FBQzdELE9BQU87WUFDSCxLQUFLLEVBQUUsT0FBTyxDQUFDLEtBQUs7WUFDcEIsTUFBTSxFQUFFLENBQUMsT0FBTyxJQUFJLE9BQU8sQ0FBQyxNQUFNLENBQUMsSUFBSSxJQUFJO1NBQ2YsQ0FBQztJQUNyQyxDQUFDO3lGQWpFUSx3QkFBd0I7dUVBQXhCLHdCQUF3QixXQUF4Qix3QkFBd0IsbUJBRnJCLE1BQU07O1NBRVQsd0JBQXdCO3VGQUF4Qix3QkFBd0I7Y0FIcEMsVUFBVTtlQUFDO2dCQUNSLFVBQVUsRUFBRSxNQUFNO2FBQ3JCIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBTdWl0ZUNSTSBpcyBhIGN1c3RvbWVyIHJlbGF0aW9uc2hpcCBtYW5hZ2VtZW50IHByb2dyYW0gZGV2ZWxvcGVkIGJ5IFNhbGVzQWdpbGl0eSBMdGQuXG4gKiBDb3B5cmlnaHQgKEMpIDIwMjMgU2FsZXNBZ2lsaXR5IEx0ZC5cbiAqXG4gKiBUaGlzIHByb2dyYW0gaXMgZnJlZSBzb2Z0d2FyZTsgeW91IGNhbiByZWRpc3RyaWJ1dGUgaXQgYW5kL29yIG1vZGlmeSBpdCB1bmRlclxuICogdGhlIHRlcm1zIG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgdmVyc2lvbiAzIGFzIHB1Ymxpc2hlZCBieSB0aGVcbiAqIEZyZWUgU29mdHdhcmUgRm91bmRhdGlvbiB3aXRoIHRoZSBhZGRpdGlvbiBvZiB0aGUgZm9sbG93aW5nIHBlcm1pc3Npb24gYWRkZWRcbiAqIHRvIFNlY3Rpb24gMTUgYXMgcGVybWl0dGVkIGluIFNlY3Rpb24gNyhhKTogRk9SIEFOWSBQQVJUIE9GIFRIRSBDT1ZFUkVEIFdPUktcbiAqIElOIFdISUNIIFRIRSBDT1BZUklHSFQgSVMgT1dORUQgQlkgU0FMRVNBR0lMSVRZLCBTQUxFU0FHSUxJVFkgRElTQ0xBSU1TIFRIRVxuICogV0FSUkFOVFkgT0YgTk9OIElORlJJTkdFTUVOVCBPRiBUSElSRCBQQVJUWSBSSUdIVFMuXG4gKlxuICogVGhpcyBwcm9ncmFtIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsIGJ1dCBXSVRIT1VUXG4gKiBBTlkgV0FSUkFOVFk7IHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZiBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTU1xuICogRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLiBTZWUgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBmb3IgbW9yZVxuICogZGV0YWlscy5cbiAqXG4gKiBZb3Ugc2hvdWxkIGhhdmUgcmVjZWl2ZWQgYSBjb3B5IG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiAqIGFsb25nIHdpdGggdGhpcyBwcm9ncmFtLiAgSWYgbm90LCBzZWUgPGh0dHA6Ly93d3cuZ251Lm9yZy9saWNlbnNlcy8+LlxuICpcbiAqIEluIGFjY29yZGFuY2Ugd2l0aCBTZWN0aW9uIDcoYikgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuICogdmVyc2lvbiAzLCB0aGVzZSBBcHByb3ByaWF0ZSBMZWdhbCBOb3RpY2VzIG11c3QgcmV0YWluIHRoZSBkaXNwbGF5IG9mIHRoZVxuICogXCJTdXBlcmNoYXJnZWQgYnkgU3VpdGVDUk1cIiBsb2dvLiBJZiB0aGUgZGlzcGxheSBvZiB0aGUgbG9nb3MgaXMgbm90IHJlYXNvbmFibHlcbiAqIGZlYXNpYmxlIGZvciB0ZWNobmljYWwgcmVhc29ucywgdGhlIEFwcHJvcHJpYXRlIExlZ2FsIE5vdGljZXMgbXVzdCBkaXNwbGF5XG4gKiB0aGUgd29yZHMgXCJTdXBlcmNoYXJnZWQgYnkgU3VpdGVDUk1cIi5cbiAqL1xuXG5pbXBvcnQge0luamVjdGFibGV9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtCYXNlQWN0aW9uTWFuYWdlcn0gZnJvbSAnLi4vLi4vc2VydmljZXMvYWN0aW9ucy9iYXNlLWFjdGlvbi1tYW5hZ2VyLnNlcnZpY2UnO1xuaW1wb3J0IHtGaWVsZExvZ2ljRGlzcGxheUFjdGlvbkRhdGF9IGZyb20gJy4vZmllbGQtbG9naWMtZGlzcGxheS5hY3Rpb24nO1xuaW1wb3J0IHtBY3Rpb24sIEFjdGlvbkNvbnRleHQsIEZpZWxkLCBSZWNvcmQsIFZpZXdNb2RlLCBEaXNwbGF5VHlwZX0gZnJvbSAnY29tbW9uJztcbmltcG9ydCB7RGlzcGxheVR5cGVBY3Rpb259IGZyb20gJy4vZGlzcGxheS10eXBlL2Rpc3BsYXktdHlwZS5hY3Rpb24nO1xuXG5ASW5qZWN0YWJsZSh7XG4gICAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIEZpZWxkTG9naWNEaXNwbGF5TWFuYWdlciBleHRlbmRzIEJhc2VBY3Rpb25NYW5hZ2VyPEZpZWxkTG9naWNEaXNwbGF5QWN0aW9uRGF0YT4ge1xuXG4gICAgY29uc3RydWN0b3IoXG4gICAgICAgIGRpc3BsYXlUeXBlOiBEaXNwbGF5VHlwZUFjdGlvbixcbiAgICApIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgZGlzcGxheVR5cGUubW9kZXMuZm9yRWFjaChtb2RlID0+IHRoaXMuYWN0aW9uc1ttb2RlXVtkaXNwbGF5VHlwZS5rZXldID0gZGlzcGxheVR5cGUpO1xuICAgIH1cblxuICAgIHJ1bkFsbChmaWVsZDogRmllbGQsIHJlY29yZDogUmVjb3JkLCBtb2RlOiBWaWV3TW9kZSk6IHZvaWQge1xuICAgICAgICBsZXQgdG9EaXNwbGF5OiBEaXNwbGF5VHlwZSA9ICdzaG93JztcblxuICAgICAgICBpZighZmllbGQuZGlzcGxheUxvZ2ljKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCB2YWxpZE1vZGVMb2dpYyA9IE9iamVjdC52YWx1ZXMoZmllbGQuZGlzcGxheUxvZ2ljKS5maWx0ZXIobG9naWMgPT4ge1xuICAgICAgICAgICAgY29uc3QgYWxsb3dlZE1vZGVzID0gbG9naWNbJ21vZGVzJ10gPz8gW107XG4gICAgICAgICAgICByZXR1cm4gISEoYWxsb3dlZE1vZGVzLmxlbmd0aCAmJiBhbGxvd2VkTW9kZXMuaW5jbHVkZXMobW9kZSkpO1xuICAgICAgICB9KTtcblxuICAgICAgICBpZiAoIXZhbGlkTW9kZUxvZ2ljIHx8ICF2YWxpZE1vZGVMb2dpYy5sZW5ndGgpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCBkZWZhdWx0RGlzcGxheSA9IGZpZWxkLmRlZmF1bHREaXNwbGF5ID8/ICdzaG93JztcblxuICAgICAgICBsZXQgdGFyZ2V0RGlzcGxheTogRGlzcGxheVR5cGUgPSAnbm9uZSc7XG5cbiAgICAgICAgaWYgKGRlZmF1bHREaXNwbGF5ID09PSAnbm9uZScpIHtcbiAgICAgICAgICAgIHRhcmdldERpc3BsYXkgPSAnc2hvdyc7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBjb250ZXh0ID0ge1xuICAgICAgICAgICAgcmVjb3JkLFxuICAgICAgICAgICAgZmllbGQsXG4gICAgICAgICAgICBtb2R1bGU6IHJlY29yZC5tb2R1bGVcbiAgICAgICAgfSBhcyBBY3Rpb25Db250ZXh0O1xuXG5cbiAgICAgICAgY29uc3QgaXNBY3RpdmUgPSB2YWxpZE1vZGVMb2dpYy5zb21lKGxvZ2ljID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGRhdGE6IEZpZWxkTG9naWNEaXNwbGF5QWN0aW9uRGF0YSA9IHRoaXMuYnVpbGRBY3Rpb25EYXRhKGxvZ2ljLCBjb250ZXh0KTtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmFjdGlvbnNbbW9kZV1bbG9naWMua2V5XS5ydW4oZGF0YSwgbG9naWMpO1xuICAgICAgICB9KTtcblxuICAgICAgICBpZiAoaXNBY3RpdmUpIHtcbiAgICAgICAgICAgIGRlZmF1bHREaXNwbGF5ID0gdGFyZ2V0RGlzcGxheTtcblxuICAgICAgICB9XG5cbiAgICAgICAgdG9EaXNwbGF5ID0gZGVmYXVsdERpc3BsYXkgYXMgRGlzcGxheVR5cGU7XG5cbiAgICAgICAgaWYgKGRlZmF1bHREaXNwbGF5ID09PSAnc2hvdycpIHtcbiAgICAgICAgICAgIHRvRGlzcGxheSA9ICdzaG93JztcbiAgICAgICAgfVxuXG4gICAgICAgIGZpZWxkLmRpc3BsYXkgPSB0b0Rpc3BsYXk7XG5cbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgYnVpbGRBY3Rpb25EYXRhKGFjdGlvbjogQWN0aW9uLCBjb250ZXh0PzogQWN0aW9uQ29udGV4dCk6IEZpZWxkTG9naWNEaXNwbGF5QWN0aW9uRGF0YSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBmaWVsZDogY29udGV4dC5maWVsZCxcbiAgICAgICAgICAgIHJlY29yZDogKGNvbnRleHQgJiYgY29udGV4dC5yZWNvcmQpIHx8IG51bGwsXG4gICAgICAgIH0gYXMgRmllbGRMb2dpY0Rpc3BsYXlBY3Rpb25EYXRhO1xuICAgIH1cblxufVxuIl19