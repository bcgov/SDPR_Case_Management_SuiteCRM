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
import { map } from 'rxjs/operators';
import { EntityMutationGQL } from '../api/graphql-api/api.record.create';
import * as i0 from "@angular/core";
import * as i1 from "../api/graphql-api/api.record.create";
const blankProcess = {
    id: null,
    _id: null,
    status: null,
    async: null,
    type: null,
    options: null,
    messages: []
};
class ProcessService {
    constructor(recordMutationGQL) {
        this.recordMutationGQL = recordMutationGQL;
        this.graphqlName = 'process';
        this.coreName = 'Process';
        this.createFieldsMetadata = {
            fields: [
                '_id',
                'status',
                'async',
                'type',
                'messages',
                'data'
            ]
        };
    }
    /**
     * Public Api
     */
    /**
     * Submit and action/process request
     * Returns observable
     *
     * @param {string} type to create
     * @param {object} options to send
     * @returns {object} Observable<any>
     */
    submit(type, options) {
        return this.create(type, options);
    }
    /**
     * Internal API
     */
    /**
     * Create a process on the backend
     *
     * @param {string} type to create
     * @param {object} options to send
     * @returns {object} Observable<any>
     */
    create(type, options) {
        const input = {
            type,
            options
        };
        return this.recordMutationGQL.create(this.graphqlName, this.coreName, input, this.createFieldsMetadata)
            .pipe(map(({ data }) => {
            const process = { ...blankProcess };
            if (data.createProcess && data.createProcess.process) {
                return data.createProcess.process;
            }
            return process;
        }));
    }
    static { this.ɵfac = function ProcessService_Factory(t) { return new (t || ProcessService)(i0.ɵɵinject(i1.EntityMutationGQL)); }; }
    static { this.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: ProcessService, factory: ProcessService.ɵfac, providedIn: 'root' }); }
}
export { ProcessService };
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ProcessService, [{
        type: Injectable,
        args: [{
                providedIn: 'root',
            }]
    }], function () { return [{ type: i1.EntityMutationGQL }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvY2Vzcy5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vY29yZS9hcHAvY29yZS9zcmMvbGliL3NlcnZpY2VzL3Byb2Nlc3MvcHJvY2Vzcy5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0F3Qkc7QUFFSCxPQUFPLEVBQUMsVUFBVSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBRXpDLE9BQU8sRUFBQyxHQUFHLEVBQUMsTUFBTSxnQkFBZ0IsQ0FBQztBQUNuQyxPQUFPLEVBQUMsaUJBQWlCLEVBQUMsTUFBTSxzQ0FBc0MsQ0FBQzs7O0FBaUJ2RSxNQUFNLFlBQVksR0FBWTtJQUMxQixFQUFFLEVBQUUsSUFBSTtJQUNSLEdBQUcsRUFBRSxJQUFJO0lBQ1QsTUFBTSxFQUFFLElBQUk7SUFDWixLQUFLLEVBQUUsSUFBSTtJQUNYLElBQUksRUFBRSxJQUFJO0lBQ1YsT0FBTyxFQUFFLElBQUk7SUFDYixRQUFRLEVBQUUsRUFBRTtDQUNmLENBQUM7QUFHRixNQUdhLGNBQWM7SUFnQnZCLFlBQW9CLGlCQUFvQztRQUFwQyxzQkFBaUIsR0FBakIsaUJBQWlCLENBQW1CO1FBZDlDLGdCQUFXLEdBQUcsU0FBUyxDQUFDO1FBQ3hCLGFBQVEsR0FBRyxTQUFTLENBQUM7UUFFckIseUJBQW9CLEdBQUc7WUFDN0IsTUFBTSxFQUFFO2dCQUNKLEtBQUs7Z0JBQ0wsUUFBUTtnQkFDUixPQUFPO2dCQUNQLE1BQU07Z0JBQ04sVUFBVTtnQkFDVixNQUFNO2FBQ1Q7U0FDSixDQUFDO0lBR0YsQ0FBQztJQUVEOztPQUVHO0lBRUg7Ozs7Ozs7T0FPRztJQUNJLE1BQU0sQ0FBQyxJQUFZLEVBQUUsT0FBdUI7UUFDL0MsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxPQUFPLENBQUMsQ0FBQztJQUN0QyxDQUFDO0lBRUQ7O09BRUc7SUFHSDs7Ozs7O09BTUc7SUFDTyxNQUFNLENBQUMsSUFBWSxFQUFFLE9BQXVCO1FBRWxELE1BQU0sS0FBSyxHQUFHO1lBQ1YsSUFBSTtZQUNKLE9BQU87U0FDVixDQUFDO1FBRUYsT0FBTyxJQUFJLENBQUMsaUJBQWlCLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUUsSUFBSSxDQUFDLFFBQVEsRUFBRSxLQUFLLEVBQUUsSUFBSSxDQUFDLG9CQUFvQixDQUFDO2FBQ2xHLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFDLElBQUksRUFBQyxFQUFFLEVBQUU7WUFDakIsTUFBTSxPQUFPLEdBQVksRUFBQyxHQUFHLFlBQVksRUFBQyxDQUFDO1lBRTNDLElBQUksSUFBSSxDQUFDLGFBQWEsSUFBSSxJQUFJLENBQUMsYUFBYSxDQUFDLE9BQU8sRUFBRTtnQkFDbEQsT0FBTyxJQUFJLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQzthQUNyQztZQUVELE9BQU8sT0FBTyxDQUFDO1FBQ25CLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDWixDQUFDOytFQWhFUSxjQUFjO3VFQUFkLGNBQWMsV0FBZCxjQUFjLG1CQUZYLE1BQU07O1NBRVQsY0FBYzt1RkFBZCxjQUFjO2NBSDFCLFVBQVU7ZUFBQztnQkFDUixVQUFVLEVBQUUsTUFBTTthQUNyQiIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogU3VpdGVDUk0gaXMgYSBjdXN0b21lciByZWxhdGlvbnNoaXAgbWFuYWdlbWVudCBwcm9ncmFtIGRldmVsb3BlZCBieSBTYWxlc0FnaWxpdHkgTHRkLlxuICogQ29weXJpZ2h0IChDKSAyMDIxIFNhbGVzQWdpbGl0eSBMdGQuXG4gKlxuICogVGhpcyBwcm9ncmFtIGlzIGZyZWUgc29mdHdhcmU7IHlvdSBjYW4gcmVkaXN0cmlidXRlIGl0IGFuZC9vciBtb2RpZnkgaXQgdW5kZXJcbiAqIHRoZSB0ZXJtcyBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIHZlcnNpb24gMyBhcyBwdWJsaXNoZWQgYnkgdGhlXG4gKiBGcmVlIFNvZnR3YXJlIEZvdW5kYXRpb24gd2l0aCB0aGUgYWRkaXRpb24gb2YgdGhlIGZvbGxvd2luZyBwZXJtaXNzaW9uIGFkZGVkXG4gKiB0byBTZWN0aW9uIDE1IGFzIHBlcm1pdHRlZCBpbiBTZWN0aW9uIDcoYSk6IEZPUiBBTlkgUEFSVCBPRiBUSEUgQ09WRVJFRCBXT1JLXG4gKiBJTiBXSElDSCBUSEUgQ09QWVJJR0hUIElTIE9XTkVEIEJZIFNBTEVTQUdJTElUWSwgU0FMRVNBR0lMSVRZIERJU0NMQUlNUyBUSEVcbiAqIFdBUlJBTlRZIE9GIE5PTiBJTkZSSU5HRU1FTlQgT0YgVEhJUkQgUEFSVFkgUklHSFRTLlxuICpcbiAqIFRoaXMgcHJvZ3JhbSBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLCBidXQgV0lUSE9VVFxuICogQU5ZIFdBUlJBTlRZOyB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2YgTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1NcbiAqIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS4gU2VlIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgZm9yIG1vcmVcbiAqIGRldGFpbHMuXG4gKlxuICogWW91IHNob3VsZCBoYXZlIHJlY2VpdmVkIGEgY29weSBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4gKiBhbG9uZyB3aXRoIHRoaXMgcHJvZ3JhbS4gIElmIG5vdCwgc2VlIDxodHRwOi8vd3d3LmdudS5vcmcvbGljZW5zZXMvPi5cbiAqXG4gKiBJbiBhY2NvcmRhbmNlIHdpdGggU2VjdGlvbiA3KGIpIG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiAqIHZlcnNpb24gMywgdGhlc2UgQXBwcm9wcmlhdGUgTGVnYWwgTm90aWNlcyBtdXN0IHJldGFpbiB0aGUgZGlzcGxheSBvZiB0aGVcbiAqIFwiU3VwZXJjaGFyZ2VkIGJ5IFN1aXRlQ1JNXCIgbG9nby4gSWYgdGhlIGRpc3BsYXkgb2YgdGhlIGxvZ29zIGlzIG5vdCByZWFzb25hYmx5XG4gKiBmZWFzaWJsZSBmb3IgdGVjaG5pY2FsIHJlYXNvbnMsIHRoZSBBcHByb3ByaWF0ZSBMZWdhbCBOb3RpY2VzIG11c3QgZGlzcGxheVxuICogdGhlIHdvcmRzIFwiU3VwZXJjaGFyZ2VkIGJ5IFN1aXRlQ1JNXCIuXG4gKi9cblxuaW1wb3J0IHtJbmplY3RhYmxlfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7T2JzZXJ2YWJsZX0gZnJvbSAncnhqcyc7XG5pbXBvcnQge21hcH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHtFbnRpdHlNdXRhdGlvbkdRTH0gZnJvbSAnLi4vYXBpL2dyYXBocWwtYXBpL2FwaS5yZWNvcmQuY3JlYXRlJztcblxuZXhwb3J0IGludGVyZmFjZSBQcm9jZXNzT3B0aW9ucyB7XG4gICAgW2tleTogc3RyaW5nXTogYW55O1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFByb2Nlc3Mge1xuICAgIGlkOiBzdHJpbmc7XG4gICAgX2lkOiBzdHJpbmc7XG4gICAgc3RhdHVzOiBzdHJpbmc7XG4gICAgYXN5bmM6IGJvb2xlYW47XG4gICAgdHlwZTogc3RyaW5nO1xuICAgIG9wdGlvbnM6IFByb2Nlc3NPcHRpb25zO1xuICAgIGRhdGE/OiBQcm9jZXNzT3B0aW9ucztcbiAgICBtZXNzYWdlczogc3RyaW5nW107XG59XG5cbmNvbnN0IGJsYW5rUHJvY2VzczogUHJvY2VzcyA9IHtcbiAgICBpZDogbnVsbCxcbiAgICBfaWQ6IG51bGwsXG4gICAgc3RhdHVzOiBudWxsLFxuICAgIGFzeW5jOiBudWxsLFxuICAgIHR5cGU6IG51bGwsXG4gICAgb3B0aW9uczogbnVsbCxcbiAgICBtZXNzYWdlczogW11cbn07XG5cblxuQEluamVjdGFibGUoe1xuICAgIHByb3ZpZGVkSW46ICdyb290Jyxcbn0pXG5leHBvcnQgY2xhc3MgUHJvY2Vzc1NlcnZpY2Uge1xuXG4gICAgcHJvdGVjdGVkIGdyYXBocWxOYW1lID0gJ3Byb2Nlc3MnO1xuICAgIHByb3RlY3RlZCBjb3JlTmFtZSA9ICdQcm9jZXNzJztcblxuICAgIHByb3RlY3RlZCBjcmVhdGVGaWVsZHNNZXRhZGF0YSA9IHtcbiAgICAgICAgZmllbGRzOiBbXG4gICAgICAgICAgICAnX2lkJyxcbiAgICAgICAgICAgICdzdGF0dXMnLFxuICAgICAgICAgICAgJ2FzeW5jJyxcbiAgICAgICAgICAgICd0eXBlJyxcbiAgICAgICAgICAgICdtZXNzYWdlcycsXG4gICAgICAgICAgICAnZGF0YSdcbiAgICAgICAgXVxuICAgIH07XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJlY29yZE11dGF0aW9uR1FMOiBFbnRpdHlNdXRhdGlvbkdRTCkge1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFB1YmxpYyBBcGlcbiAgICAgKi9cblxuICAgIC8qKlxuICAgICAqIFN1Ym1pdCBhbmQgYWN0aW9uL3Byb2Nlc3MgcmVxdWVzdFxuICAgICAqIFJldHVybnMgb2JzZXJ2YWJsZVxuICAgICAqXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHR5cGUgdG8gY3JlYXRlXG4gICAgICogQHBhcmFtIHtvYmplY3R9IG9wdGlvbnMgdG8gc2VuZFxuICAgICAqIEByZXR1cm5zIHtvYmplY3R9IE9ic2VydmFibGU8YW55PlxuICAgICAqL1xuICAgIHB1YmxpYyBzdWJtaXQodHlwZTogc3RyaW5nLCBvcHRpb25zOiBQcm9jZXNzT3B0aW9ucyk6IE9ic2VydmFibGU8UHJvY2Vzcz4ge1xuICAgICAgICByZXR1cm4gdGhpcy5jcmVhdGUodHlwZSwgb3B0aW9ucyk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogSW50ZXJuYWwgQVBJXG4gICAgICovXG5cblxuICAgIC8qKlxuICAgICAqIENyZWF0ZSBhIHByb2Nlc3Mgb24gdGhlIGJhY2tlbmRcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSB0eXBlIHRvIGNyZWF0ZVxuICAgICAqIEBwYXJhbSB7b2JqZWN0fSBvcHRpb25zIHRvIHNlbmRcbiAgICAgKiBAcmV0dXJucyB7b2JqZWN0fSBPYnNlcnZhYmxlPGFueT5cbiAgICAgKi9cbiAgICBwcm90ZWN0ZWQgY3JlYXRlKHR5cGU6IHN0cmluZywgb3B0aW9uczogUHJvY2Vzc09wdGlvbnMpOiBPYnNlcnZhYmxlPFByb2Nlc3M+IHtcblxuICAgICAgICBjb25zdCBpbnB1dCA9IHtcbiAgICAgICAgICAgIHR5cGUsXG4gICAgICAgICAgICBvcHRpb25zXG4gICAgICAgIH07XG5cbiAgICAgICAgcmV0dXJuIHRoaXMucmVjb3JkTXV0YXRpb25HUUwuY3JlYXRlKHRoaXMuZ3JhcGhxbE5hbWUsIHRoaXMuY29yZU5hbWUsIGlucHV0LCB0aGlzLmNyZWF0ZUZpZWxkc01ldGFkYXRhKVxuICAgICAgICAgICAgLnBpcGUobWFwKCh7ZGF0YX0pID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBwcm9jZXNzOiBQcm9jZXNzID0gey4uLmJsYW5rUHJvY2Vzc307XG5cbiAgICAgICAgICAgICAgICBpZiAoZGF0YS5jcmVhdGVQcm9jZXNzICYmIGRhdGEuY3JlYXRlUHJvY2Vzcy5wcm9jZXNzKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBkYXRhLmNyZWF0ZVByb2Nlc3MucHJvY2VzcztcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICByZXR1cm4gcHJvY2VzcztcbiAgICAgICAgICAgIH0pKTtcbiAgICB9XG59XG4iXX0=