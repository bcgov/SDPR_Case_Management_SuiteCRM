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
import { Router } from '@angular/router';
import { ModuleNameMapper, } from '../../../../services/navigation/module-name-mapper/module-name-mapper.service';
import { isVoid } from 'common';
import get from 'lodash-es/get';
import { SubpanelActionHandler } from '../subpanel.action';
import * as i0 from "@angular/core";
import * as i1 from "../../../../services/navigation/module-name-mapper/module-name-mapper.service";
import * as i2 from "@angular/router";
class SubpanelCreateAction extends SubpanelActionHandler {
    constructor(moduleNameMapper, router) {
        super();
        this.moduleNameMapper = moduleNameMapper;
        this.router = router;
        this.key = 'create';
        this.modes = ['list'];
    }
    run(data) {
        const moduleName = data.module;
        const moduleAction = data?.action?.moduleAction ?? 'edit';
        const parentId = data?.parentId ?? '';
        const parentModule = data.parentModule ?? '';
        const route = `/${moduleName}/${moduleAction}`;
        const queryParams = {
            // eslint-disable-next-line camelcase,@typescript-eslint/camelcase
            return_module: this.moduleNameMapper.toLegacy(parentModule),
            // eslint-disable-next-line camelcase,@typescript-eslint/camelcase
            return_action: 'DetailView',
            // eslint-disable-next-line camelcase,@typescript-eslint/camelcase
            return_id: parentId,
            relate_to: parentModule,
            relate_id: parentId,
        };
        this.addAdditionalFields(data, queryParams);
        this.addParams(data, queryParams);
        this.router.navigate([route], {
            queryParams
        }).then();
    }
    shouldDisplay() {
        return true;
    }
    /**
     * Add additional record fields
     *
     * @param {object} data SubpanelActionData
     * @param {object} queryParams Params map
     */
    addAdditionalFields(data, queryParams) {
        const parentAttributes = (data.store.parentRecord && data.store.parentRecord.attributes) || {};
        if (!parentAttributes && !Object.keys(parentAttributes).length) {
            return;
        }
        const additionalFields = data.action.additionalFields ?? {};
        const additionalFieldKeys = Object.keys(additionalFields) || [];
        additionalFieldKeys.forEach(additionalFieldKey => {
            if (!additionalFieldKey || !additionalFields[additionalFieldKey]) {
                return;
            }
            const parentAttribute = additionalFields[additionalFieldKey];
            const attribute = get(parentAttributes, parentAttribute, null);
            if (isVoid(attribute)) {
                return;
            }
            queryParams[additionalFieldKey] = attribute;
        });
    }
    /**
     * Add configuration defined params
     *
     * @param {object} data SubpanelActionData
     * @param {object} queryParams Params map
     */
    addParams(data, queryParams) {
        const params = data.action.extraParams ?? {};
        const paramKeys = Object.keys(params) || [];
        paramKeys.forEach(paramKey => {
            if (!paramKey || !params[paramKey]) {
                return;
            }
            queryParams[paramKey] = params[paramKey];
        });
    }
    static { this.ɵfac = function SubpanelCreateAction_Factory(t) { return new (t || SubpanelCreateAction)(i0.ɵɵinject(i1.ModuleNameMapper), i0.ɵɵinject(i2.Router)); }; }
    static { this.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: SubpanelCreateAction, factory: SubpanelCreateAction.ɵfac, providedIn: 'root' }); }
}
export { SubpanelCreateAction };
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(SubpanelCreateAction, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: i1.ModuleNameMapper }, { type: i2.Router }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3JlYXRlLmFjdGlvbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL2NvcmUvYXBwL2NvcmUvc3JjL2xpYi9jb250YWluZXJzL3N1YnBhbmVsL2FjdGlvbnMvY3JlYXRlL2NyZWF0ZS5hY3Rpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQXdCRztBQUVILE9BQU8sRUFBQyxVQUFVLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFTLE1BQU0sRUFBQyxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBQyxnQkFBZ0IsR0FBRSxNQUFNLCtFQUErRSxDQUFDO0FBQ2hILE9BQU8sRUFBZSxNQUFNLEVBQVcsTUFBTSxRQUFRLENBQUM7QUFDdEQsT0FBTyxHQUFHLE1BQU0sZUFBZSxDQUFDO0FBQ2hDLE9BQU8sRUFBcUIscUJBQXFCLEVBQUMsTUFBTSxvQkFBb0IsQ0FBQzs7OztBQUc3RSxNQUdhLG9CQUFxQixTQUFRLHFCQUFxQjtJQUkzRCxZQUNjLGdCQUFrQyxFQUNsQyxNQUFjO1FBRXhCLEtBQUssRUFBRSxDQUFDO1FBSEUscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFrQjtRQUNsQyxXQUFNLEdBQU4sTUFBTSxDQUFRO1FBTDVCLFFBQUcsR0FBRyxRQUFRLENBQUM7UUFDZixVQUFLLEdBQUcsQ0FBQyxNQUFrQixDQUFDLENBQUM7SUFPN0IsQ0FBQztJQUVELEdBQUcsQ0FBQyxJQUF3QjtRQUV4QixNQUFNLFVBQVUsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDO1FBQy9CLE1BQU0sWUFBWSxHQUFHLElBQUksRUFBRSxNQUFNLEVBQUUsWUFBWSxJQUFJLE1BQU0sQ0FBQztRQUUxRCxNQUFNLFFBQVEsR0FBRyxJQUFJLEVBQUUsUUFBUSxJQUFJLEVBQUUsQ0FBQztRQUN0QyxNQUFNLFlBQVksR0FBRyxJQUFJLENBQUMsWUFBWSxJQUFJLEVB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KipcbiAqIFN1aXRlQ1JNIGlzIGEgY3VzdG9tZXIgcmVsYXRpb25zaGlwIG1hbmFnZW1lbnQgcHJvZ3JhbSBkZXZlbG9wZWQgYnkgU2FsZXNBZ2lsaXR5IEx0ZC5cbiAqIENvcHlyaWdodCAoQykgMjAyMSBTYWxlc0FnaWxpdHkgTHRkLlxuICpcbiAqIFRoaXMgcHJvZ3JhbSBpcyBmcmVlIHNvZnR3YXJlOyB5b3UgY2FuIHJlZGlzdHJpYnV0ZSBpdCBhbmQvb3IgbW9kaWZ5IGl0IHVuZGVyXG4gKiB0aGUgdGVybXMgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZSB2ZXJzaW9uIDMgYXMgcHVibGlzaGVkIGJ5IHRoZVxuICogRnJlZSBTb2Z0d2FyZSBGb3VuZGF0aW9uIHdpdGggdGhlIGFkZGl0aW9uIG9mIHRoZSBmb2xsb3dpbmcgcGVybWlzc2lvbiBhZGRlZFxuICogdG8gU2VjdGlvbiAxNSBhcyBwZXJtaXR0ZWQgaW4gU2VjdGlvbiA3KGEpOiBGT1IgQU5ZIFBBUlQgT0YgVEhFIENPVkVSRUQgV09SS1xuICogSU4gV0hJQ0ggVEhFIENPUFlSSUdIVCBJUyBPV05FRCBCWSBTQUxFU0FHSUxJVFksIFNBTEVTQUdJTElUWSBESVNDTEFJTVMgVEhFXG4gKiBXQVJSQU5UWSBPRiBOT04gSU5GUklOR0VNRU5UIE9GIFRISVJEIFBBUlRZIFJJR0hUUy5cbiAqXG4gKiBUaGlzIHByb2dyYW0gaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCwgYnV0IFdJVEhPVVRcbiAqIEFOWSBXQVJSQU5UWTsgd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTXG4gKiBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuIFNlZSB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGZvciBtb3JlXG4gKiBkZXRhaWxzLlxuICpcbiAqIFlvdSBzaG91bGQgaGF2ZSByZWNlaXZlZCBhIGNvcHkgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuICogYWxvbmcgd2l0aCB0aGlzIHByb2dyYW0uICBJZiBub3QsIHNlZSA8aHR0cDovL3d3dy5nbnUub3JnL2xpY2Vuc2VzLz4uXG4gKlxuICogSW4gYWNjb3JkYW5jZSB3aXRoIFNlY3Rpb24gNyhiKSBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4gKiB2ZXJzaW9uIDMsIHRoZXNlIEFwcHJvcHJpYXRlIExlZ2FsIE5vdGljZXMgbXVzdCByZXRhaW4gdGhlIGRpc3BsYXkgb2YgdGhlXG4gKiBcIlN1cGVyY2hhcmdlZCBieSBTdWl0ZUNSTVwiIGxvZ28uIElmIHRoZSBkaXNwbGF5IG9mIHRoZSBsb2dvcyBpcyBub3QgcmVhc29uYWJseVxuICogZmVhc2libGUgZm9yIHRlY2huaWNhbCByZWFzb25zLCB0aGUgQXBwcm9wcmlhdGUgTGVnYWwgTm90aWNlcyBtdXN0IGRpc3BsYXlcbiAqIHRoZSB3b3JkcyBcIlN1cGVyY2hhcmdlZCBieSBTdWl0ZUNSTVwiLlxuICovXG5cbmltcG9ydCB7SW5qZWN0YWJsZX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1BhcmFtcywgUm91dGVyfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHtNb2R1bGVOYW1lTWFwcGVyLH0gZnJvbSAnLi4vLi4vLi4vLi4vc2VydmljZXMvbmF2aWdhdGlvbi9tb2R1bGUtbmFtZS1tYXBwZXIvbW9kdWxlLW5hbWUtbWFwcGVyLnNlcnZpY2UnO1xuaW1wb3J0IHtBdHRyaWJ1dGVNYXAsIGlzVm9pZCwgVmlld01vZGV9IGZyb20gJ2NvbW1vbic7XG5pbXBvcnQgZ2V0IGZyb20gJ2xvZGFzaC1lcy9nZXQnO1xuaW1wb3J0IHtTdWJwYW5lbEFjdGlvbkRhdGEsIFN1YnBhbmVsQWN0aW9uSGFuZGxlcn0gZnJvbSAnLi4vc3VicGFuZWwuYWN0aW9uJztcblxuXG5ASW5qZWN0YWJsZSh7XG4gICAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIFN1YnBhbmVsQ3JlYXRlQWN0aW9uIGV4dGVuZHMgU3VicGFuZWxBY3Rpb25IYW5kbGVyIHtcbiAgICBrZXkgPSAnY3JlYXRlJztcbiAgICBtb2RlcyA9IFsnbGlzdCcgYXMgVmlld01vZGVdO1xuXG4gICAgY29uc3RydWN0b3IoXG4gICAgICAgIHByb3RlY3RlZCBtb2R1bGVOYW1lTWFwcGVyOiBNb2R1bGVOYW1lTWFwcGVyLFxuICAgICAgICBwcm90ZWN0ZWQgcm91dGVyOiBSb3V0ZXJcbiAgICApIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICB9XG5cbiAgICBydW4oZGF0YTogU3VicGFuZWxBY3Rpb25EYXRhKTogdm9pZCB7XG5cbiAgICAgICAgY29uc3QgbW9kdWxlTmFtZSA9IGRhdGEubW9kdWxlO1xuICAgICAgICBjb25zdCBtb2R1bGVBY3Rpb24gPSBkYXRhPy5hY3Rpb24/Lm1vZHVsZUFjdGlvbiA/PyAnZWRpdCc7XG5cbiAgICAgICAgY29uc3QgcGFyZW50SWQgPSBkYXRhPy5wYXJlbnRJZCA/PyAnJztcbiAgICAgICAgY29uc3QgcGFyZW50TW9kdWxlID0gZGF0YS5wYXJlbnRNb2R1bGUgPz8gJyc7XG5cbiAgICAgICAgY29uc3Qgcm91dGUgPSBgLyR7bW9kdWxlTmFtZX0vJHttb2R1bGVBY3Rpb259YDtcblxuICAgICAgICBjb25zdCBxdWVyeVBhcmFtcyA9IHtcbiAgICAgICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBjYW1lbGNhc2UsQHR5cGVzY3JpcHQtZXNsaW50L2NhbWVsY2FzZVxuICAgICAgICAgICAgcmV0dXJuX21vZHVsZTogdGhpcy5tb2R1bGVOYW1lTWFwcGVyLnRvTGVnYWN5KHBhcmVudE1vZHVsZSksXG4gICAgICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgY2FtZWxjYXNlLEB0eXBlc2NyaXB0LWVzbGludC9jYW1lbGNhc2VcbiAgICAgICAgICAgIHJldHVybl9hY3Rpb246ICdEZXRhaWxWaWV3JyxcbiAgICAgICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBjYW1lbGNhc2UsQHR5cGVzY3JpcHQtZXNsaW50L2NhbWVsY2FzZVxuICAgICAgICAgICAgcmV0dXJuX2lkOiBwYXJlbnRJZCxcbiAgICAgICAgICAgIHJlbGF0ZV90bzogcGFyZW50TW9kdWxlLFxuICAgICAgICAgICAgcmVsYXRlX2lkOiBwYXJlbnRJZCxcbiAgICAgICAgfSBhcyBQYXJhbXM7XG4gICAgICAgIHRoaXMuYWRkQWRkaXRpb25hbEZpZWxkcyhkYXRhLCBxdWVyeVBhcmFtcyk7XG4gICAgICAgIHRoaXMuYWRkUGFyYW1zKGRhdGEsIHF1ZXJ5UGFyYW1zKTtcblxuICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbcm91dGVdLCB7XG4gICAgICAgICAgICBxdWVyeVBhcmFtc1xuICAgICAgICB9KS50aGVuKCk7XG4gICAgfVxuXG4gICAgc2hvdWxkRGlzcGxheSgpOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQWRkIGFkZGl0aW9uYWwgcmVjb3JkIGZpZWxkc1xuICAgICAqXG4gICAgICogQHBhcmFtIHtvYmplY3R9IGRhdGEgU3VicGFuZWxBY3Rpb25EYXRhXG4gICAgICogQHBhcmFtIHtvYmplY3R9IHF1ZXJ5UGFyYW1zIFBhcmFtcyBtYXBcbiAgICAgKi9cbiAgICBwcm90ZWN0ZWQgYWRkQWRkaXRpb25hbEZpZWxkcyhkYXRhOiBTdWJwYW5lbEFjdGlvbkRhdGEsIHF1ZXJ5UGFyYW1zOiBQYXJhbXMpOiB2b2lkIHtcbiAgICAgICAgY29uc3QgcGFyZW50QXR0cmlidXRlcyA9IChkYXRhLnN0b3JlLnBhcmVudFJlY29yZCAmJiBkYXRhLnN0b3JlLnBhcmVudFJlY29yZC5hdHRyaWJ1dGVzKSB8fCB7fSBhcyBBdHRyaWJ1dGVNYXA7XG5cbiAgICAgICAgaWYgKCFwYXJlbnRBdHRyaWJ1dGVzICYmICFPYmplY3Qua2V5cyhwYXJlbnRBdHRyaWJ1dGVzKS5sZW5ndGgpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGFkZGl0aW9uYWxGaWVsZHMgPSBkYXRhLmFjdGlvbi5hZGRpdGlvbmFsRmllbGRzID8/IHt9IGFzIHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH07XG4gICAgICAgIGNvbnN0IGFkZGl0aW9uYWxGaWVsZEtleXMgPSBPYmplY3Qua2V5cyhhZGRpdGlvbmFsRmllbGRzKSB8fCBbXTtcblxuICAgICAgICBhZGRpdGlvbmFsRmllbGRLZXlzLmZvckVhY2goYWRkaXRpb25hbEZpZWxkS2V5ID0+IHtcbiAgICAgICAgICAgIGlmICghYWRkaXRpb25hbEZpZWxkS2V5IHx8ICFhZGRpdGlvbmFsRmllbGRzW2FkZGl0aW9uYWxGaWVsZEtleV0pIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGNvbnN0IHBhcmVudEF0dHJpYnV0ZSA9IGFkZGl0aW9uYWxGaWVsZHNbYWRkaXRpb25hbEZpZWxkS2V5XTtcbiAgICAgICAgICAgIGNvbnN0IGF0dHJpYnV0ZSA9IGdldChwYXJlbnRBdHRyaWJ1dGVzLCBwYXJlbnRBdHRyaWJ1dGUsIG51bGwpO1xuXG4gICAgICAgICAgICBpZiAoaXNWb2lkKGF0dHJpYnV0ZSkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHF1ZXJ5UGFyYW1zW2FkZGl0aW9uYWxGaWVsZEtleV0gPSBhdHRyaWJ1dGU7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEFkZCBjb25maWd1cmF0aW9uIGRlZmluZWQgcGFyYW1zXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge29iamVjdH0gZGF0YSBTdWJwYW5lbEFjdGlvbkRhdGFcbiAgICAgKiBAcGFyYW0ge29iamVjdH0gcXVlcnlQYXJhbXMgUGFyYW1zIG1hcFxuICAgICAqL1xuICAgIHByb3RlY3RlZCBhZGRQYXJhbXMoZGF0YTogU3VicGFuZWxBY3Rpb25EYXRhLCBxdWVyeVBhcmFtczogUGFyYW1zKTogdm9pZCB7XG5cbiAgICAgICAgY29uc3QgcGFyYW1zID0gZGF0YS5hY3Rpb24uZXh0cmFQYXJhbXMgPz8ge30gYXMgeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfTtcbiAgICAgICAgY29uc3QgcGFyYW1LZXlzID0gT2JqZWN0LmtleXMocGFyYW1zKSB8fCBbXTtcblxuICAgICAgICBwYXJhbUtleXMuZm9yRWFjaChwYXJhbUtleSA9PiB7XG4gICAgICAgICAgICBpZiAoIXBhcmFtS2V5IHx8ICFwYXJhbXNbcGFyYW1LZXldKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBxdWVyeVBhcmFtc1twYXJhbUtleV0gPSBwYXJhbXNbcGFyYW1LZXldO1xuICAgICAgICB9KTtcbiAgICB9XG59XG4iXX0=