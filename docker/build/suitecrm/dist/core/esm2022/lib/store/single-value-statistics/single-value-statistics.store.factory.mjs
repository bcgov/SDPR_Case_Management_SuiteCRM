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
import { StatisticsFetchGQL } from '../statistics/graphql/api.statistics.get';
import { SingleValueStatisticsStore } from './single-value-statistics.store';
import { FieldManager } from '../../services/record/field/field.manager';
import * as i0 from "@angular/core";
import * as i1 from "../statistics/graphql/api.statistics.get";
import * as i2 from "../../services/record/field/field.manager";
class SingleValueStatisticsStoreFactory {
    constructor(fetchGQL, fieldManager) {
        this.fetchGQL = fetchGQL;
        this.fieldManager = fieldManager;
    }
    create() {
        return new SingleValueStatisticsStore(this.fetchGQL, this.fieldManager);
    }
    static { this.ɵfac = function SingleValueStatisticsStoreFactory_Factory(t) { return new (t || SingleValueStatisticsStoreFactory)(i0.ɵɵinject(i1.StatisticsFetchGQL), i0.ɵɵinject(i2.FieldManager)); }; }
    static { this.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: SingleValueStatisticsStoreFactory, factory: SingleValueStatisticsStoreFactory.ɵfac, providedIn: 'root' }); }
}
export { SingleValueStatisticsStoreFactory };
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(SingleValueStatisticsStoreFactory, [{
        type: Injectable,
        args: [{
                providedIn: 'root',
            }]
    }], function () { return [{ type: i1.StatisticsFetchGQL }, { type: i2.FieldManager }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2luZ2xlLXZhbHVlLXN0YXRpc3RpY3Muc3RvcmUuZmFjdG9yeS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL2NvcmUvYXBwL2NvcmUvc3JjL2xpYi9zdG9yZS9zaW5nbGUtdmFsdWUtc3RhdGlzdGljcy9zaW5nbGUtdmFsdWUtc3RhdGlzdGljcy5zdG9yZS5mYWN0b3J5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0F3Qkc7QUFFSCxPQUFPLEVBQUMsVUFBVSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBQyxrQkFBa0IsRUFBQyxNQUFNLDBDQUEwQyxDQUFDO0FBQzVFLE9BQU8sRUFBQywwQkFBMEIsRUFBQyxNQUFNLGlDQUFpQyxDQUFDO0FBQzNFLE9BQU8sRUFBQyxZQUFZLEVBQUMsTUFBTSwyQ0FBMkMsQ0FBQzs7OztBQUV2RSxNQUdhLGlDQUFpQztJQUUxQyxZQUFzQixRQUE0QixFQUFZLFlBQTBCO1FBQWxFLGFBQVEsR0FBUixRQUFRLENBQW9CO1FBQVksaUJBQVksR0FBWixZQUFZLENBQWM7SUFDeEYsQ0FBQztJQUVELE1BQU07UUFDRixPQUFPLElBQUksMEJBQTBCLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7SUFDNUUsQ0FBQztrR0FQUSxpQ0FBaUM7dUVBQWpDLGlDQUFpQyxXQUFqQyxpQ0FBaUMsbUJBRjlCLE1BQU07O1NBRVQsaUNBQWlDO3VGQUFqQyxpQ0FBaUM7Y0FIN0MsVUFBVTtlQUFDO2dCQUNSLFVBQVUsRUFBRSxNQUFNO2FBQ3JCIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBTdWl0ZUNSTSBpcyBhIGN1c3RvbWVyIHJlbGF0aW9uc2hpcCBtYW5hZ2VtZW50IHByb2dyYW0gZGV2ZWxvcGVkIGJ5IFNhbGVzQWdpbGl0eSBMdGQuXG4gKiBDb3B5cmlnaHQgKEMpIDIwMjEgU2FsZXNBZ2lsaXR5IEx0ZC5cbiAqXG4gKiBUaGlzIHByb2dyYW0gaXMgZnJlZSBzb2Z0d2FyZTsgeW91IGNhbiByZWRpc3RyaWJ1dGUgaXQgYW5kL29yIG1vZGlmeSBpdCB1bmRlclxuICogdGhlIHRlcm1zIG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgdmVyc2lvbiAzIGFzIHB1Ymxpc2hlZCBieSB0aGVcbiAqIEZyZWUgU29mdHdhcmUgRm91bmRhdGlvbiB3aXRoIHRoZSBhZGRpdGlvbiBvZiB0aGUgZm9sbG93aW5nIHBlcm1pc3Npb24gYWRkZWRcbiAqIHRvIFNlY3Rpb24gMTUgYXMgcGVybWl0dGVkIGluIFNlY3Rpb24gNyhhKTogRk9SIEFOWSBQQVJUIE9GIFRIRSBDT1ZFUkVEIFdPUktcbiAqIElOIFdISUNIIFRIRSBDT1BZUklHSFQgSVMgT1dORUQgQlkgU0FMRVNBR0lMSVRZLCBTQUxFU0FHSUxJVFkgRElTQ0xBSU1TIFRIRVxuICogV0FSUkFOVFkgT0YgTk9OIElORlJJTkdFTUVOVCBPRiBUSElSRCBQQVJUWSBSSUdIVFMuXG4gKlxuICogVGhpcyBwcm9ncmFtIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsIGJ1dCBXSVRIT1VUXG4gKiBBTlkgV0FSUkFOVFk7IHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZiBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTU1xuICogRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLiBTZWUgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBmb3IgbW9yZVxuICogZGV0YWlscy5cbiAqXG4gKiBZb3Ugc2hvdWxkIGhhdmUgcmVjZWl2ZWQgYSBjb3B5IG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiAqIGFsb25nIHdpdGggdGhpcyBwcm9ncmFtLiAgSWYgbm90LCBzZWUgPGh0dHA6Ly93d3cuZ251Lm9yZy9saWNlbnNlcy8+LlxuICpcbiAqIEluIGFjY29yZGFuY2Ugd2l0aCBTZWN0aW9uIDcoYikgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuICogdmVyc2lvbiAzLCB0aGVzZSBBcHByb3ByaWF0ZSBMZWdhbCBOb3RpY2VzIG11c3QgcmV0YWluIHRoZSBkaXNwbGF5IG9mIHRoZVxuICogXCJTdXBlcmNoYXJnZWQgYnkgU3VpdGVDUk1cIiBsb2dvLiBJZiB0aGUgZGlzcGxheSBvZiB0aGUgbG9nb3MgaXMgbm90IHJlYXNvbmFibHlcbiAqIGZlYXNpYmxlIGZvciB0ZWNobmljYWwgcmVhc29ucywgdGhlIEFwcHJvcHJpYXRlIExlZ2FsIE5vdGljZXMgbXVzdCBkaXNwbGF5XG4gKiB0aGUgd29yZHMgXCJTdXBlcmNoYXJnZWQgYnkgU3VpdGVDUk1cIi5cbiAqL1xuXG5pbXBvcnQge0luamVjdGFibGV9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtTdGF0aXN0aWNzRmV0Y2hHUUx9IGZyb20gJy4uL3N0YXRpc3RpY3MvZ3JhcGhxbC9hcGkuc3RhdGlzdGljcy5nZXQnO1xuaW1wb3J0IHtTaW5nbGVWYWx1ZVN0YXRpc3RpY3NTdG9yZX0gZnJvbSAnLi9zaW5nbGUtdmFsdWUtc3RhdGlzdGljcy5zdG9yZSc7XG5pbXBvcnQge0ZpZWxkTWFuYWdlcn0gZnJvbSAnLi4vLi4vc2VydmljZXMvcmVjb3JkL2ZpZWxkL2ZpZWxkLm1hbmFnZXInO1xuXG5ASW5qZWN0YWJsZSh7XG4gICAgcHJvdmlkZWRJbjogJ3Jvb3QnLFxufSlcbmV4cG9ydCBjbGFzcyBTaW5nbGVWYWx1ZVN0YXRpc3RpY3NTdG9yZUZhY3Rvcnkge1xuXG4gICAgY29uc3RydWN0b3IocHJvdGVjdGVkIGZldGNoR1FMOiBTdGF0aXN0aWNzRmV0Y2hHUUwsIHByb3RlY3RlZCBmaWVsZE1hbmFnZXI6IEZpZWxkTWFuYWdlcikge1xuICAgIH1cblxuICAgIGNyZWF0ZSgpOiBTaW5nbGVWYWx1ZVN0YXRpc3RpY3NTdG9yZSB7XG4gICAgICAgIHJldHVybiBuZXcgU2luZ2xlVmFsdWVTdGF0aXN0aWNzU3RvcmUodGhpcy5mZXRjaEdRTCwgdGhpcy5maWVsZE1hbmFnZXIpO1xuICAgIH1cbn1cbiJdfQ==