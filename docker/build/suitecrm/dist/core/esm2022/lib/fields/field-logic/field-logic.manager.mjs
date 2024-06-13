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
import { BaseActionManager } from '../../services/actions/base-action-manager.service';
import { FieldLogicDisplayTypeAction } from './display-type/field-logic-display-type.action';
import { EmailPrimarySelectAction } from './email-primary-select/email-primary-select.action';
import { RequiredAction } from './required/required.action';
import { UpdateBaseCurrencyAction } from './currency-conversion/update-base-currency.action';
import { UpdateCurrencyAction } from './currency-conversion/update-currency.action';
import { UpdateFlexRelateModuleAction } from './update-flex-relate-module/update-flex-relate-module.action';
import { UpdateValueAction } from './update-value/update-value.action';
import { UpdateValueBackendAction } from './update-value-backend/update-value-backend.action';
import { DisplayTypeBackendAction } from './display-type-backend/display-type-backend.action';
import * as i0 from "@angular/core";
import * as i1 from "./display-type/field-logic-display-type.action";
import * as i2 from "./email-primary-select/email-primary-select.action";
import * as i3 from "./required/required.action";
import * as i4 from "./currency-conversion/update-base-currency.action";
import * as i5 from "./currency-conversion/update-currency.action";
import * as i6 from "./update-value/update-value.action";
import * as i7 from "./update-flex-relate-module/update-flex-relate-module.action";
import * as i8 from "./update-value-backend/update-value-backend.action";
import * as i9 from "./display-type-backend/display-type-backend.action";
class FieldLogicManager extends BaseActionManager {
    constructor(displayType, emailPrimarySelectAction, required, updateBaseCurrency, updateCurrency, updateValue, updateFlexRelateModule, updateValueBackend, dislayTypeBackend) {
        super();
        this.actions = {
            edit: {},
            create: {},
            list: {},
            detail: {},
            massupdate: {},
            filter: {}
        };
        displayType.modes.forEach(mode => this.actions[mode][displayType.key] = displayType);
        emailPrimarySelectAction.modes.forEach(mode => this.actions[mode][emailPrimarySelectAction.key] = emailPrimarySelectAction);
        required.modes.forEach(mode => this.actions[mode][required.key] = required);
        updateBaseCurrency.modes.forEach(mode => this.actions[mode][updateBaseCurrency.key] = updateBaseCurrency);
        updateCurrency.modes.forEach(mode => this.actions[mode][updateCurrency.key] = updateCurrency);
        updateFlexRelateModule.modes.forEach(mode => this.actions[mode][updateFlexRelateModule.key] = updateFlexRelateModule);
        updateValue.modes.forEach(mode => this.actions[mode][updateValue.key] = updateValue);
        updateValueBackend.modes.forEach(mode => this.actions[mode][updateValueBackend.key] = updateValueBackend);
        dislayTypeBackend.modes.forEach(mode => this.actions[mode][dislayTypeBackend.key] = dislayTypeBackend);
    }
    /**
     * Run logic for the given field
     * @param {object} field
     * @param {object} mode
     * @param {object} record
     * @param triggeringStatus
     */
    runLogic(field, mode, record, triggeringStatus = '') {
        if (!field.logic) {
            return;
        }
        const actions = Object.keys(field.logic).map(key => field.logic[key]);
        const modeActions = this.parseModeActions(actions, mode, triggeringStatus);
        const context = {
            record,
            field,
            module: record.module
        };
        modeActions.forEach(action => {
            this.runAction(action, mode, context);
        });
    }
    /**
     * Run the action using given context
     * @param action
     * @param mode
     * @param context
     */
    runAction(action, mode, context = null) {
        this.runFrontEndAction(action, mode, context);
    }
    /**
     * Run front end action
     * @param {object} action
     * @param {object} mode
     * @param {object} context
     */
    runFrontEndAction(action, mode, context = null) {
        const data = this.buildActionData(action, context);
        this.run(action, mode, data);
    }
    /**
     * Get module name
     * @param {object} context
     */
    getModuleName(context) {
        return context.module;
    }
    buildActionData(action, context) {
        return {
            field: context.field,
            record: (context && context.record) || null,
        };
    }
    /**
     * Parse mode actions
     * @param declaredActions
     * @param mode
     * @param triggeringStatus
     */
    parseModeActions(declaredActions, mode, triggeringStatus) {
        if (!declaredActions) {
            return [];
        }
        const availableActions = {
            list: [],
            detail: [],
            edit: [],
            create: [],
            massupdate: [],
            filter: [],
        };
        if (declaredActions && declaredActions.length) {
            declaredActions.forEach(action => {
                if (!action.modes || !action.modes.length) {
                    return;
                }
                action.modes.forEach(actionMode => {
                    if (!availableActions[actionMode] && !action.asyncProcess) {
                        return;
                    }
                    availableActions[actionMode].push(action);
                });
            });
        }
        const actions = [];
        const defaultTriggeringStatus = ['onValueChange'];
        availableActions[mode].forEach(action => {
            const frontendActionTriggeringStatus = this?.actions[mode][action.key]?.getTriggeringStatus() ?? null;
            const actionTriggeringStatus = action?.triggeringStatus ?? frontendActionTriggeringStatus ?? defaultTriggeringStatus;
            if (triggeringStatus && !actionTriggeringStatus.includes(triggeringStatus)) {
                return;
            }
            actions.push(action);
        });
        return actions;
    }
    static { this.ɵfac = function FieldLogicManager_Factory(t) { return new (t || FieldLogicManager)(i0.ɵɵinject(i1.FieldLogicDisplayTypeAction), i0.ɵɵinject(i2.EmailPrimarySelectAction), i0.ɵɵinject(i3.RequiredAction), i0.ɵɵinject(i4.UpdateBaseCurrencyAction), i0.ɵɵinject(i5.UpdateCurrencyAction), i0.ɵɵinject(i6.UpdateValueAction), i0.ɵɵinject(i7.UpdateFlexRelateModuleAction), i0.ɵɵinject(i8.UpdateValueBackendAction), i0.ɵɵinject(i9.DisplayTypeBackendAction)); }; }
    static { this.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: FieldLogicManager, factory: FieldLogicManager.ɵfac, providedIn: 'root' }); }
}
export { FieldLogicManager };
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(FieldLogicManager, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: i1.FieldLogicDisplayTypeAction }, { type: i2.EmailPrimarySelectAction }, { type: i3.RequiredAction }, { type: i4.UpdateBaseCurrencyAction }, { type: i5.UpdateCurrencyAction }, { type: i6.UpdateValueAction }, { type: i7.UpdateFlexRelateModuleAction }, { type: i8.UpdateValueBackendAction }, { type: i9.DisplayTypeBackendAction }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmllbGQtbG9naWMubWFuYWdlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL2NvcmUvYXBwL2NvcmUvc3JjL2xpYi9maWVsZHMvZmllbGQtbG9naWMvZmllbGQtbG9naWMubWFuYWdlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBd0JHO0FBRUgsT0FBTyxFQUFDLFVBQVUsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUMsaUJBQWlCLEVBQUMsTUFBTSxvREFBb0QsQ0FBQztBQUdyRixPQUFPLEVBQUMsMkJBQTJCLEVBQUMsTUFBTSxnREFBZ0QsQ0FBQztBQUMzRixPQUFPLEVBQUMsd0JBQXdCLEVBQUMsTUFBTSxvREFBb0QsQ0FBQztBQUM1RixPQUFPLEVBQUMsY0FBYyxFQUFDLE1BQU0sNEJBQTRCLENBQUM7QUFDMUQsT0FBTyxFQUFDLHdCQUF3QixFQUFDLE1BQU0sbURBQW1ELENBQUM7QUFDM0YsT0FBTyxFQUFDLG9CQUFvQixFQUFDLE1BQU0sOENBQThDLENBQUM7QUFDbEYsT0FBTyxFQUFDLDRCQUE0QixFQUFDLE1BQU0sOERBQThELENBQUM7QUFDMUcsT0FBTyxFQUFDLGlCQUFpQixFQUFDLE1BQU0sb0NBQW9DLENBQUM7QUFDckUsT0FBTyxFQUFDLHdCQUF3QixFQUFDLE1BQU0sb0RBQW9ELENBQUM7QUFDNUYsT0FBTyxFQUFDLHdCQUF3QixFQUFDLE1BQU0sb0RBQW9ELENBQUM7Ozs7Ozs7Ozs7O0FBRTVGLE1BR2EsaUJBQWtCLFNBQVEsaUJBQXVDO0lBVzFFLFlBQ0ksV0FBd0MsRUFDeEMsd0JBQWtELEVBQ2xELFFBQXdCLEVBQ3hCLGtCQUE0QyxFQUM1QyxjQUFvQyxFQUNwQyxXQUE4QixFQUM5QixzQkFBb0QsRUFDcEQsa0JBQTRDLEVBQzVDLGlCQUEyQztRQUUzQyxLQUFLLEVBQUUsQ0FBQztRQXBCWixZQUFPLEdBQWtEO1lB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LENBQUMsQ0FBQztRQUVILE9BQU8sT0FBTyxDQUFDO0lBQ25CLENBQUM7a0ZBcEpRLGlCQUFpQjt1RUFBakIsaUJBQWlCLFdBQWpCLGlCQUFpQixtQkFGZCxNQUFNOztTQUVULGlCQUFpQjt1RkFBakIsaUJBQWlCO2NBSDdCLFVBQVU7ZUFBQztnQkFDUixVQUFVLEVBQUUsTUFBTTthQUNyQiIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogU3VpdGVDUk0gaXMgYSBjdXN0b21lciByZWxhdGlvbnNoaXAgbWFuYWdlbWVudCBwcm9ncmFtIGRldmVsb3BlZCBieSBTYWxlc0FnaWxpdHkgTHRkLlxuICogQ29weXJpZ2h0IChDKSAyMDIxIFNhbGVzQWdpbGl0eSBMdGQuXG4gKlxuICogVGhpcyBwcm9ncmFtIGlzIGZyZWUgc29mdHdhcmU7IHlvdSBjYW4gcmVkaXN0cmlidXRlIGl0IGFuZC9vciBtb2RpZnkgaXQgdW5kZXJcbiAqIHRoZSB0ZXJtcyBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIHZlcnNpb24gMyBhcyBwdWJsaXNoZWQgYnkgdGhlXG4gKiBGcmVlIFNvZnR3YXJlIEZvdW5kYXRpb24gd2l0aCB0aGUgYWRkaXRpb24gb2YgdGhlIGZvbGxvd2luZyBwZXJtaXNzaW9uIGFkZGVkXG4gKiB0byBTZWN0aW9uIDE1IGFzIHBlcm1pdHRlZCBpbiBTZWN0aW9uIDcoYSk6IEZPUiBBTlkgUEFSVCBPRiBUSEUgQ09WRVJFRCBXT1JLXG4gKiBJTiBXSElDSCBUSEUgQ09QWVJJR0hUIElTIE9XTkVEIEJZIFNBTEVTQUdJTElUWSwgU0FMRVNBR0lMSVRZIERJU0NMQUlNUyBUSEVcbiAqIFdBUlJBTlRZIE9GIE5PTiBJTkZSSU5HRU1FTlQgT0YgVEhJUkQgUEFSVFkgUklHSFRTLlxuICpcbiAqIFRoaXMgcHJvZ3JhbSBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLCBidXQgV0lUSE9VVFxuICogQU5ZIFdBUlJBTlRZOyB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2YgTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1NcbiAqIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS4gU2VlIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgZm9yIG1vcmVcbiAqIGRldGFpbHMuXG4gKlxuICogWW91IHNob3VsZCBoYXZlIHJlY2VpdmVkIGEgY29weSBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4gKiBhbG9uZyB3aXRoIHRoaXMgcHJvZ3JhbS4gIElmIG5vdCwgc2VlIDxodHRwOi8vd3d3LmdudS5vcmcvbGljZW5zZXMvPi5cbiAqXG4gKiBJbiBhY2NvcmRhbmNlIHdpdGggU2VjdGlvbiA3KGIpIG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiAqIHZlcnNpb24gMywgdGhlc2UgQXBwcm9wcmlhdGUgTGVnYWwgTm90aWNlcyBtdXN0IHJldGFpbiB0aGUgZGlzcGxheSBvZiB0aGVcbiAqIFwiU3VwZXJjaGFyZ2VkIGJ5IFN1aXRlQ1JNXCIgbG9nby4gSWYgdGhlIGRpc3BsYXkgb2YgdGhlIGxvZ29zIGlzIG5vdCByZWFzb25hYmx5XG4gKiBmZWFzaWJsZSBmb3IgdGVjaG5pY2FsIHJlYXNvbnMsIHRoZSBBcHByb3ByaWF0ZSBMZWdhbCBOb3RpY2VzIG11c3QgZGlzcGxheVxuICogdGhlIHdvcmRzIFwiU3VwZXJjaGFyZ2VkIGJ5IFN1aXRlQ1JNXCIuXG4gKi9cblxuaW1wb3J0IHtJbmplY3RhYmxlfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7QmFzZUFjdGlvbk1hbmFnZXJ9IGZyb20gJy4uLy4uL3NlcnZpY2VzL2FjdGlvbnMvYmFzZS1hY3Rpb24tbWFuYWdlci5zZXJ2aWNlJztcbmltcG9ydCB7RmllbGRMb2dpY0FjdGlvbkRhdGEsIEZpZWxkTG9naWNBY3Rpb25IYW5kbGVyTWFwfSBmcm9tICcuL2ZpZWxkLWxvZ2ljLmFjdGlvbic7XG5pbXBvcnQge0FjdGlvbiwgQWN0aW9uQ29udGV4dCwgRmllbGQsIE1vZGVBY3Rpb25zLCBSZWNvcmQsIFZpZXdNb2RlfSBmcm9tICdjb21tb24nO1xuaW1wb3J0IHtGaWVsZExvZ2ljRGlzcGxheVR5cGVBY3Rpb259IGZyb20gJy4vZGlzcGxheS10eXBlL2ZpZWxkLWxvZ2ljLWRpc3BsYXktdHlwZS5hY3Rpb24nO1xuaW1wb3J0IHtFbWFpbFByaW1hcnlTZWxlY3RBY3Rpb259IGZyb20gJy4vZW1haWwtcHJpbWFyeS1zZWxlY3QvZW1haWwtcHJpbWFyeS1zZWxlY3QuYWN0aW9uJztcbmltcG9ydCB7UmVxdWlyZWRBY3Rpb259IGZyb20gJy4vcmVxdWlyZWQvcmVxdWlyZWQuYWN0aW9uJztcbmltcG9ydCB7VXBkYXRlQmFzZUN1cnJlbmN5QWN0aW9ufSBmcm9tICcuL2N1cnJlbmN5LWNvbnZlcnNpb24vdXBkYXRlLWJhc2UtY3VycmVuY3kuYWN0aW9uJztcbmltcG9ydCB7VXBkYXRlQ3VycmVuY3lBY3Rpb259IGZyb20gJy4vY3VycmVuY3ktY29udmVyc2lvbi91cGRhdGUtY3VycmVuY3kuYWN0aW9uJztcbmltcG9ydCB7VXBkYXRlRmxleFJlbGF0ZU1vZHVsZUFjdGlvbn0gZnJvbSAnLi91cGRhdGUtZmxleC1yZWxhdGUtbW9kdWxlL3VwZGF0ZS1mbGV4LXJlbGF0ZS1tb2R1bGUuYWN0aW9uJztcbmltcG9ydCB7VXBkYXRlVmFsdWVBY3Rpb259IGZyb20gJy4vdXBkYXRlLXZhbHVlL3VwZGF0ZS12YWx1ZS5hY3Rpb24nO1xuaW1wb3J0IHtVcGRhdGVWYWx1ZUJhY2tlbmRBY3Rpb259IGZyb20gJy4vdXBkYXRlLXZhbHVlLWJhY2tlbmQvdXBkYXRlLXZhbHVlLWJhY2tlbmQuYWN0aW9uJztcbmltcG9ydCB7RGlzcGxheVR5cGVCYWNrZW5kQWN0aW9ufSBmcm9tICcuL2Rpc3BsYXktdHlwZS1iYWNrZW5kL2Rpc3BsYXktdHlwZS1iYWNrZW5kLmFjdGlvbic7XG5cbkBJbmplY3RhYmxlKHtcbiAgICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgRmllbGRMb2dpY01hbmFnZXIgZXh0ZW5kcyBCYXNlQWN0aW9uTWFuYWdlcjxGaWVsZExvZ2ljQWN0aW9uRGF0YT4ge1xuXG4gICAgYWN0aW9uczogeyBba2V5OiBzdHJpbmddOiBGaWVsZExvZ2ljQWN0aW9uSGFuZGxlck1hcCB9ID0ge1xuICAgICAgICBlZGl0OiB7fSBhcyBGaWVsZExvZ2ljQWN0aW9uSGFuZGxlck1hcCxcbiAgICAgICAgY3JlYXRlOiB7fSBhcyBGaWVsZExvZ2ljQWN0aW9uSGFuZGxlck1hcCxcbiAgICAgICAgbGlzdDoge30gYXMgRmllbGRMb2dpY0FjdGlvbkhhbmRsZXJNYXAsXG4gICAgICAgIGRldGFpbDoge30gYXMgRmllbGRMb2dpY0FjdGlvbkhhbmRsZXJNYXAsXG4gICAgICAgIG1hc3N1cGRhdGU6IHt9IGFzIEZpZWxkTG9naWNBY3Rpb25IYW5kbGVyTWFwLFxuICAgICAgICBmaWx0ZXI6IHt9IGFzIEZpZWxkTG9naWNBY3Rpb25IYW5kbGVyTWFwXG4gICAgfTtcblxuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBkaXNwbGF5VHlwZTogRmllbGRMb2dpY0Rpc3BsYXlUeXBlQWN0aW9uLFxuICAgICAgICBlbWFpbFByaW1hcnlTZWxlY3RBY3Rpb246IEVtYWlsUHJpbWFyeVNlbGVjdEFjdGlvbixcbiAgICAgICAgcmVxdWlyZWQ6IFJlcXVpcmVkQWN0aW9uLFxuICAgICAgICB1cGRhdGVCYXNlQ3VycmVuY3k6IFVwZGF0ZUJhc2VDdXJyZW5jeUFjdGlvbixcbiAgICAgICAgdXBkYXRlQ3VycmVuY3k6IFVwZGF0ZUN1cnJlbmN5QWN0aW9uLFxuICAgICAgICB1cGRhdGVWYWx1ZTogVXBkYXRlVmFsdWVBY3Rpb24sXG4gICAgICAgIHVwZGF0ZUZsZXhSZWxhdGVNb2R1bGU6IFVwZGF0ZUZsZXhSZWxhdGVNb2R1bGVBY3Rpb24sXG4gICAgICAgIHVwZGF0ZVZhbHVlQmFja2VuZDogVXBkYXRlVmFsdWVCYWNrZW5kQWN0aW9uLFxuICAgICAgICBkaXNsYXlUeXBlQmFja2VuZDogRGlzcGxheVR5cGVCYWNrZW5kQWN0aW9uXG4gICAgKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIGRpc3BsYXlUeXBlLm1vZGVzLmZvckVhY2gobW9kZSA9PiB0aGlzLmFjdGlvbnNbbW9kZV1bZGlzcGxheVR5cGUua2V5XSA9IGRpc3BsYXlUeXBlKTtcbiAgICAgICAgZW1haWxQcmltYXJ5U2VsZWN0QWN0aW9uLm1vZGVzLmZvckVhY2gobW9kZSA9PiB0aGlzLmFjdGlvbnNbbW9kZV1bZW1haWxQcmltYXJ5U2VsZWN0QWN0aW9uLmtleV0gPSBlbWFpbFByaW1hcnlTZWxlY3RBY3Rpb24pO1xuICAgICAgICByZXF1aXJlZC5tb2Rlcy5mb3JFYWNoKG1vZGUgPT4gdGhpcy5hY3Rpb25zW21vZGVdW3JlcXVpcmVkLmtleV0gPSByZXF1aXJlZCk7XG4gICAgICAgIHVwZGF0ZUJhc2VDdXJyZW5jeS5tb2Rlcy5mb3JFYWNoKG1vZGUgPT4gdGhpcy5hY3Rpb25zW21vZGVdW3VwZGF0ZUJhc2VDdXJyZW5jeS5rZXldID0gdXBkYXRlQmFzZUN1cnJlbmN5KTtcbiAgICAgICAgdXBkYXRlQ3VycmVuY3kubW9kZXMuZm9yRWFjaChtb2RlID0+IHRoaXMuYWN0aW9uc1ttb2RlXVt1cGRhdGVDdXJyZW5jeS5rZXldID0gdXBkYXRlQ3VycmVuY3kpO1xuICAgICAgICB1cGRhdGVGbGV4UmVsYXRlTW9kdWxlLm1vZGVzLmZvckVhY2gobW9kZSA9PiB0aGlzLmFjdGlvbnNbbW9kZV1bdXBkYXRlRmxleFJlbGF0ZU1vZHVsZS5rZXldID0gdXBkYXRlRmxleFJlbGF0ZU1vZHVsZSk7XG4gICAgICAgIHVwZGF0ZVZhbHVlLm1vZGVzLmZvckVhY2gobW9kZSA9PiB0aGlzLmFjdGlvbnNbbW9kZV1bdXBkYXRlVmFsdWUua2V5XSA9IHVwZGF0ZVZhbHVlKTtcbiAgICAgICAgdXBkYXRlVmFsdWVCYWNrZW5kLm1vZGVzLmZvckVhY2gobW9kZSA9PiB0aGlzLmFjdGlvbnNbbW9kZV1bdXBkYXRlVmFsdWVCYWNrZW5kLmtleV0gPSB1cGRhdGVWYWx1ZUJhY2tlbmQpO1xuICAgICAgICBkaXNsYXlUeXBlQmFja2VuZC5tb2Rlcy5mb3JFYWNoKG1vZGUgPT4gdGhpcy5hY3Rpb25zW21vZGVdW2Rpc2xheVR5cGVCYWNrZW5kLmtleV0gPSBkaXNsYXlUeXBlQmFja2VuZCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUnVuIGxvZ2ljIGZvciB0aGUgZ2l2ZW4gZmllbGRcbiAgICAgKiBAcGFyYW0ge29iamVjdH0gZmllbGRcbiAgICAgKiBAcGFyYW0ge29iamVjdH0gbW9kZVxuICAgICAqIEBwYXJhbSB7b2JqZWN0fSByZWNvcmRcbiAgICAgKiBAcGFyYW0gdHJpZ2dlcmluZ1N0YXR1c1xuICAgICAqL1xuICAgIHJ1bkxvZ2ljKGZpZWxkOiBGaWVsZCwgbW9kZTogVmlld01vZGUsIHJlY29yZDogUmVjb3JkLCB0cmlnZ2VyaW5nU3RhdHVzOiBzdHJpbmcgPSAnJyk6IHZvaWQge1xuICAgICAgICBpZiAoIWZpZWxkLmxvZ2ljKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBhY3Rpb25zID0gT2JqZWN0LmtleXMoZmllbGQubG9naWMpLm1hcChrZXkgPT4gZmllbGQubG9naWNba2V5XSk7XG5cbiAgICAgICAgY29uc3QgbW9kZUFjdGlvbnMgPSB0aGlzLnBhcnNlTW9kZUFjdGlvbnMoYWN0aW9ucywgbW9kZSwgdHJpZ2dlcmluZ1N0YXR1cyk7XG4gICAgICAgIGNvbnN0IGNvbnRleHQgPSB7XG4gICAgICAgICAgICByZWNvcmQsXG4gICAgICAgICAgICBmaWVsZCxcbiAgICAgICAgICAgIG1vZHVsZTogcmVjb3JkLm1vZHVsZVxuICAgICAgICB9IGFzIEFjdGlvbkNvbnRleHQ7XG5cbiAgICAgICAgbW9kZUFjdGlvbnMuZm9yRWFjaChhY3Rpb24gPT4ge1xuICAgICAgICAgICAgdGhpcy5ydW5BY3Rpb24oYWN0aW9uLCBtb2RlLCBjb250ZXh0KTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUnVuIHRoZSBhY3Rpb24gdXNpbmcgZ2l2ZW4gY29udGV4dFxuICAgICAqIEBwYXJhbSBhY3Rpb25cbiAgICAgKiBAcGFyYW0gbW9kZVxuICAgICAqIEBwYXJhbSBjb250ZXh0XG4gICAgICovXG4gICAgcnVuQWN0aW9uKGFjdGlvbjogQWN0aW9uLCBtb2RlOiBWaWV3TW9kZSwgY29udGV4dDogQWN0aW9uQ29udGV4dCA9IG51bGwpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5ydW5Gcm9udEVuZEFjdGlvbihhY3Rpb24sIG1vZGUsIGNvbnRleHQpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJ1biBmcm9udCBlbmQgYWN0aW9uXG4gICAgICogQHBhcmFtIHtvYmplY3R9IGFjdGlvblxuICAgICAqIEBwYXJhbSB7b2JqZWN0fSBtb2RlXG4gICAgICogQHBhcmFtIHtvYmplY3R9IGNvbnRleHRcbiAgICAgKi9cbiAgICBwcm90ZWN0ZWQgcnVuRnJvbnRFbmRBY3Rpb24oYWN0aW9uOiBBY3Rpb24sIG1vZGU6IFZpZXdNb2RlLCBjb250ZXh0OiBBY3Rpb25Db250ZXh0ID0gbnVsbCk6IHZvaWQge1xuICAgICAgICBjb25zdCBkYXRhOiBGaWVsZExvZ2ljQWN0aW9uRGF0YSA9IHRoaXMuYnVpbGRBY3Rpb25EYXRhKGFjdGlvbiwgY29udGV4dCk7XG5cbiAgICAgICAgdGhpcy5ydW4oYWN0aW9uLCBtb2RlLCBkYXRhKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBHZXQgbW9kdWxlIG5hbWVcbiAgICAgKiBAcGFyYW0ge29iamVjdH0gY29udGV4dFxuICAgICAqL1xuICAgIHByb3RlY3RlZCBnZXRNb2R1bGVOYW1lKGNvbnRleHQ/OiBBY3Rpb25Db250ZXh0KTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIGNvbnRleHQubW9kdWxlO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBidWlsZEFjdGlvbkRhdGEoYWN0aW9uOiBBY3Rpb24sIGNvbnRleHQ/OiBBY3Rpb25Db250ZXh0KTogRmllbGRMb2dpY0FjdGlvbkRhdGEge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgZmllbGQ6IGNvbnRleHQuZmllbGQsXG4gICAgICAgICAgICByZWNvcmQ6IChjb250ZXh0ICYmIGNvbnRleHQucmVjb3JkKSB8fCBudWxsLFxuICAgICAgICB9IGFzIEZpZWxkTG9naWNBY3Rpb25EYXRhO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFBhcnNlIG1vZGUgYWN0aW9uc1xuICAgICAqIEBwYXJhbSBkZWNsYXJlZEFjdGlvbnNcbiAgICAgKiBAcGFyYW0gbW9kZVxuICAgICAqIEBwYXJhbSB0cmlnZ2VyaW5nU3RhdHVzXG4gICAgICovXG4gICAgcHJvdGVjdGVkIHBhcnNlTW9kZUFjdGlvbnMoZGVjbGFyZWRBY3Rpb25zOiBBY3Rpb25bXSwgbW9kZTogVmlld01vZGUsIHRyaWdnZXJpbmdTdGF0dXM6IHN0cmluZykge1xuICAgICAgICBpZiAoIWRlY2xhcmVkQWN0aW9ucykge1xuICAgICAgICAgICAgcmV0dXJuIFtdO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgYXZhaWxhYmxlQWN0aW9ucyA9IHtcbiAgICAgICAgICAgIGxpc3Q6IFtdLFxuICAgICAgICAgICAgZGV0YWlsOiBbXSxcbiAgICAgICAgICAgIGVkaXQ6IFtdLFxuICAgICAgICAgICAgY3JlYXRlOiBbXSxcbiAgICAgICAgICAgIG1hc3N1cGRhdGU6IFtdLFxuICAgICAgICAgICAgZmlsdGVyOiBbXSxcbiAgICAgICAgfSBhcyBNb2RlQWN0aW9ucztcblxuICAgICAgICBpZiAoZGVjbGFyZWRBY3Rpb25zICYmIGRlY2xhcmVkQWN0aW9ucy5sZW5ndGgpIHtcbiAgICAgICAgICAgIGRlY2xhcmVkQWN0aW9ucy5mb3JFYWNoKGFjdGlvbiA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKCFhY3Rpb24ubW9kZXMgfHwgIWFjdGlvbi5tb2Rlcy5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGFjdGlvbi5tb2Rlcy5mb3JFYWNoKGFjdGlvbk1vZGUgPT4ge1xuICAgICAgICAgICAgICAgICAgICBpZiAoIWF2YWlsYWJsZUFjdGlvbnNbYWN0aW9uTW9kZV0gJiYgIWFjdGlvbi5hc3luY1Byb2Nlc3MpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBhdmFpbGFibGVBY3Rpb25zW2FjdGlvbk1vZGVdLnB1c2goYWN0aW9uKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgYWN0aW9ucyA9IFtdO1xuICAgICAgICBjb25zdCBkZWZhdWx0VHJpZ2dlcmluZ1N0YXR1cyA9IFsnb25WYWx1ZUNoYW5nZSddO1xuXG4gICAgICAgIGF2YWlsYWJsZUFjdGlvbnNbbW9kZV0uZm9yRWFjaChhY3Rpb24gPT4ge1xuXG4gICAgICAgICAgICBjb25zdCBmcm9udGVuZEFjdGlvblRyaWdnZXJpbmdTdGF0dXMgPSB0aGlzPy5hY3Rpb25zW21vZGVdW2FjdGlvbi5rZXldPy5nZXRUcmlnZ2VyaW5nU3RhdHVzKCkgPz8gbnVsbDtcbiAgICAgICAgICAgIGNvbnN0IGFjdGlvblRyaWdnZXJpbmdTdGF0dXMgPSBhY3Rpb24/LnRyaWdnZXJpbmdTdGF0dXMgPz8gZnJvbnRlbmRBY3Rpb25UcmlnZ2VyaW5nU3RhdHVzID8/IGRlZmF1bHRUcmlnZ2VyaW5nU3RhdHVzO1xuXG4gICAgICAgICAgICBpZih0cmlnZ2VyaW5nU3RhdHVzICYmICFhY3Rpb25UcmlnZ2VyaW5nU3RhdHVzLmluY2x1ZGVzKHRyaWdnZXJpbmdTdGF0dXMpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBhY3Rpb25zLnB1c2goYWN0aW9uKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIGFjdGlvbnM7XG4gICAgfVxuXG59XG4iXX0=