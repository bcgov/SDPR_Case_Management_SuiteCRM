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
import { Apollo, gql } from 'apollo-angular';
import * as i0 from "@angular/core";
import * as i1 from "apollo-angular";
class EntityMutationGQL {
    constructor(apollo) {
        this.apollo = apollo;
    }
    /**
     * Create record on the backend
     *
     * @param {string} graphqlEntityName to use
     * @param {string} entityName to use
     * @param {object} input values
     * @param {object} metadata with the fields to ask for
     *
     * @returns {object} Observable<any>
     */
    create(graphqlEntityName, entityName, input, metadata) {
        const fields = metadata.fields;
        const mutationOptions = {
            mutation: gql `
                mutation create${entityName}($input: create${entityName}Input!) {
                  create${entityName}(input: $input) {
                    ${graphqlEntityName} {
                      ${fields.join('\n')}
                    }
                    clientMutationId
                  }
                }
            `,
            variables: {
                input
            },
        };
        return this.apollo.mutate(mutationOptions);
    }
    static { this.ɵfac = function EntityMutationGQL_Factory(t) { return new (t || EntityMutationGQL)(i0.ɵɵinject(i1.Apollo)); }; }
    static { this.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: EntityMutationGQL, factory: EntityMutationGQL.ɵfac, providedIn: 'root' }); }
}
export { EntityMutationGQL };
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(EntityMutationGQL, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: i1.Apollo }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBpLnJlY29yZC5jcmVhdGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9jb3JlL2FwcC9jb3JlL3NyYy9saWIvc2VydmljZXMvYXBpL2dyYXBocWwtYXBpL2FwaS5yZWNvcmQuY3JlYXRlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0F3Qkc7QUFFSCxPQUFPLEVBQUMsVUFBVSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBQyxNQUFNLEVBQUUsR0FBRyxFQUFDLE1BQU0sZ0JBQWdCLENBQUM7OztBQUkzQyxNQUdhLGlCQUFpQjtJQUUxQixZQUFvQixNQUFjO1FBQWQsV0FBTSxHQUFOLE1BQU0sQ0FBUTtJQUNsQyxDQUFDO0lBRUQ7Ozs7Ozs7OztPQVNHO0lBQ0ksTUFBTSxDQUFDLGlCQUF5QixFQUN6QixVQUFrQixFQUNsQixLQUE2QixFQUM3QixRQUE4QjtRQUV4QyxNQUFNLE1BQU0sR0FBRyxRQUFRLENBQUMsTUFBTSxDQUFDO1FBQy9CLE1BQU0sZUFBZSxHQUFHO1lBQ3BCLFFBQVEsRUFBRSxHQUFHLENBQUE7aUNBQ1EsVUFBVSxrQkFBa0IsVUFBVTswQkFDN0MsVUFBVTtzQkFDZCxpQkFBaUI7d0JBQ2YsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUM7Ozs7O2FBSzVCO1lBQ0QsU0FBUyxFQUFFO2dCQUNQLEtBQUs7YUFDUjtTQUNKLENBQUM7UUFFRixPQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLGVBQWUsQ0FBQyxDQUFDO0lBQy9DLENBQUM7a0ZBdENRLGlCQUFpQjt1RUFBakIsaUJBQWlCLFdBQWpCLGlCQUFpQixtQkFGZCxNQUFNOztTQUVULGlCQUFpQjt1RkFBakIsaUJBQWlCO2NBSDdCLFVBQVU7ZUFBQztnQkFDUixVQUFVLEVBQUUsTUFBTTthQUNyQiIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogU3VpdGVDUk0gaXMgYSBjdXN0b21lciByZWxhdGlvbnNoaXAgbWFuYWdlbWVudCBwcm9ncmFtIGRldmVsb3BlZCBieSBTYWxlc0FnaWxpdHkgTHRkLlxuICogQ29weXJpZ2h0IChDKSAyMDIxIFNhbGVzQWdpbGl0eSBMdGQuXG4gKlxuICogVGhpcyBwcm9ncmFtIGlzIGZyZWUgc29mdHdhcmU7IHlvdSBjYW4gcmVkaXN0cmlidXRlIGl0IGFuZC9vciBtb2RpZnkgaXQgdW5kZXJcbiAqIHRoZSB0ZXJtcyBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIHZlcnNpb24gMyBhcyBwdWJsaXNoZWQgYnkgdGhlXG4gKiBGcmVlIFNvZnR3YXJlIEZvdW5kYXRpb24gd2l0aCB0aGUgYWRkaXRpb24gb2YgdGhlIGZvbGxvd2luZyBwZXJtaXNzaW9uIGFkZGVkXG4gKiB0byBTZWN0aW9uIDE1IGFzIHBlcm1pdHRlZCBpbiBTZWN0aW9uIDcoYSk6IEZPUiBBTlkgUEFSVCBPRiBUSEUgQ09WRVJFRCBXT1JLXG4gKiBJTiBXSElDSCBUSEUgQ09QWVJJR0hUIElTIE9XTkVEIEJZIFNBTEVTQUdJTElUWSwgU0FMRVNBR0lMSVRZIERJU0NMQUlNUyBUSEVcbiAqIFdBUlJBTlRZIE9GIE5PTiBJTkZSSU5HRU1FTlQgT0YgVEhJUkQgUEFSVFkgUklHSFRTLlxuICpcbiAqIFRoaXMgcHJvZ3JhbSBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLCBidXQgV0lUSE9VVFxuICogQU5ZIFdBUlJBTlRZOyB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2YgTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1NcbiAqIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS4gU2VlIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgZm9yIG1vcmVcbiAqIGRldGFpbHMuXG4gKlxuICogWW91IHNob3VsZCBoYXZlIHJlY2VpdmVkIGEgY29weSBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4gKiBhbG9uZyB3aXRoIHRoaXMgcHJvZ3JhbS4gIElmIG5vdCwgc2VlIDxodHRwOi8vd3d3LmdudS5vcmcvbGljZW5zZXMvPi5cbiAqXG4gKiBJbiBhY2NvcmRhbmNlIHdpdGggU2VjdGlvbiA3KGIpIG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiAqIHZlcnNpb24gMywgdGhlc2UgQXBwcm9wcmlhdGUgTGVnYWwgTm90aWNlcyBtdXN0IHJldGFpbiB0aGUgZGlzcGxheSBvZiB0aGVcbiAqIFwiU3VwZXJjaGFyZ2VkIGJ5IFN1aXRlQ1JNXCIgbG9nby4gSWYgdGhlIGRpc3BsYXkgb2YgdGhlIGxvZ29zIGlzIG5vdCByZWFzb25hYmx5XG4gKiBmZWFzaWJsZSBmb3IgdGVjaG5pY2FsIHJlYXNvbnMsIHRoZSBBcHByb3ByaWF0ZSBMZWdhbCBOb3RpY2VzIG11c3QgZGlzcGxheVxuICogdGhlIHdvcmRzIFwiU3VwZXJjaGFyZ2VkIGJ5IFN1aXRlQ1JNXCIuXG4gKi9cblxuaW1wb3J0IHtJbmplY3RhYmxlfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7QXBvbGxvLCBncWx9IGZyb20gJ2Fwb2xsby1hbmd1bGFyJztcbmltcG9ydCB7T2JzZXJ2YWJsZX0gZnJvbSAncnhqcyc7XG5pbXBvcnQge0ZldGNoUmVzdWx0fSBmcm9tICdAYXBvbGxvL2NsaWVudC9jb3JlJztcblxuQEluamVjdGFibGUoe1xuICAgIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBFbnRpdHlNdXRhdGlvbkdRTCB7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGFwb2xsbzogQXBvbGxvKSB7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ3JlYXRlIHJlY29yZCBvbiB0aGUgYmFja2VuZFxuICAgICAqXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IGdyYXBocWxFbnRpdHlOYW1lIHRvIHVzZVxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBlbnRpdHlOYW1lIHRvIHVzZVxuICAgICAqIEBwYXJhbSB7b2JqZWN0fSBpbnB1dCB2YWx1ZXNcbiAgICAgKiBAcGFyYW0ge29iamVjdH0gbWV0YWRhdGEgd2l0aCB0aGUgZmllbGRzIHRvIGFzayBmb3JcbiAgICAgKlxuICAgICAqIEByZXR1cm5zIHtvYmplY3R9IE9ic2VydmFibGU8YW55PlxuICAgICAqL1xuICAgIHB1YmxpYyBjcmVhdGUoZ3JhcGhxbEVudGl0eU5hbWU6IHN0cmluZyxcbiAgICAgICAgICAgICAgICAgIGVudGl0eU5hbWU6IHN0cmluZyxcbiAgICAgICAgICAgICAgICAgIGlucHV0OiB7IFtrZXk6IHN0cmluZ106IGFueSB9LFxuICAgICAgICAgICAgICAgICAgbWV0YWRhdGE6IHsgZmllbGRzOiBzdHJpbmdbXSB9KTogT2JzZXJ2YWJsZTxGZXRjaFJlc3VsdDxhbnk+PiB7XG5cbiAgICAgICAgY29uc3QgZmllbGRzID0gbWV0YWRhdGEuZmllbGRzO1xuICAgICAgICBjb25zdCBtdXRhdGlvbk9wdGlvbnMgPSB7XG4gICAgICAgICAgICBtdXRhdGlvbjogZ3FsYFxuICAgICAgICAgICAgICAgIG11dGF0aW9uIGNyZWF0ZSR7ZW50aXR5TmFtZX0oJGlucHV0OiBjcmVhdGUke2VudGl0eU5hbWV9SW5wdXQhKSB7XG4gICAgICAgICAgICAgICAgICBjcmVhdGUke2VudGl0eU5hbWV9KGlucHV0OiAkaW5wdXQpIHtcbiAgICAgICAgICAgICAgICAgICAgJHtncmFwaHFsRW50aXR5TmFtZX0ge1xuICAgICAgICAgICAgICAgICAgICAgICR7ZmllbGRzLmpvaW4oJ1xcbicpfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGNsaWVudE11dGF0aW9uSWRcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBgLFxuICAgICAgICAgICAgdmFyaWFibGVzOiB7XG4gICAgICAgICAgICAgICAgaW5wdXRcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH07XG5cbiAgICAgICAgcmV0dXJuIHRoaXMuYXBvbGxvLm11dGF0ZShtdXRhdGlvbk9wdGlvbnMpO1xuICAgIH1cbn1cbiJdfQ==