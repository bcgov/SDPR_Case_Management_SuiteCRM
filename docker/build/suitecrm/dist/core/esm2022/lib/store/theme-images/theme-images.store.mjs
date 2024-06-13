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
import { BehaviorSubject, of } from 'rxjs';
import { distinctUntilChanged, map, shareReplay, tap } from 'rxjs/operators';
import { EntityGQL } from '../../services/api/graphql-api/api.entity.get';
import { AppStateStore } from '../app-state/app-state.store';
import { deepClone, emptyObject } from 'common';
import { SvgIconRegistryService } from 'angular-svg-icon';
import * as i0 from "@angular/core";
import * as i1 from "../../services/api/graphql-api/api.entity.get";
import * as i2 from "../app-state/app-state.store";
import * as i3 from "angular-svg-icon";
const initialState = {
    theme: null,
    images: {}
};
let internalState = deepClone(initialState);
let cachedTheme = null;
let cache$ = null;
class ThemeImagesStore {
    constructor(recordGQL, appStateStore, iconRegistry) {
        this.recordGQL = recordGQL;
        this.appStateStore = appStateStore;
        this.iconRegistry = iconRegistry;
        this.store = new BehaviorSubject(internalState);
        this.state$ = this.store.asObservable();
        this.resourceName = 'themeImages';
        this.frontendName = 'theme-images';
        this.fieldsMetadata = {
            fields: [
                'id',
                '_id',
                'items'
            ]
        };
        this.images$ = this.state$.pipe(map(state => state.images), distinctUntilChanged());
    }
    /**
     * Public Api
     */
    /**
     * Clear state
     */
    clear() {
        cachedTheme = null;
        cache$ = null;
        this.updateState(deepClone(initialState));
    }
    clearAuthBased() {
    }
    /**
     * Change the current theme
     *
     * @param {string} theme to set
     */
    changeTheme(theme) {
        this.appStateStore.updateLoading('change-theme', true);
        this.load(theme).pipe(tap(() => this.appStateStore.updateLoading('change-theme', false))).subscribe();
    }
    /**
     * Returns the currently active image theme
     *
     * @returns {string} the theme
     */
    getTheme() {
        return internalState.theme;
    }
    /**
     * Initial ThemeImages load if not cached and update state.
     * Returns observable to be used in resolver if needed
     *
     * @param {string} theme to load
     * @returns {object} Observable<any>
     */
    load(theme) {
        return this.getThemeImages(theme).pipe(tap(images => {
            this.updateState({ ...internalState, images, theme });
        }));
    }
    /**
     * Check if loaded
     */
    isCached() {
        return cache$ !== null;
    }
    /**
     * Set pre-loaded theme images and cache
     */
    set(theme, images) {
        cachedTheme = theme;
        this.registerSvgs(images);
        cache$ = of(images).pipe(shareReplay(1));
        this.updateState({ ...internalState, images });
    }
    /**
     * Internal API
     */
    /**
     * Update the state
     *
     * @param {object} state to set
     */
    updateState(state) {
        this.store.next(internalState = state);
    }
    /**
     * Get theme images cached Observable or call the backend
     *
     * @param {string} theme to retrieve
     * @returns {object} Observable<any>
     */
    getThemeImages(theme) {
        if (cachedTheme !== theme || cache$ === null) {
            cachedTheme = theme;
            cache$ = this.fetch(theme).pipe(shareReplay(1));
        }
        return cache$;
    }
    registerSvgs(images) {
        Object.keys(images).forEach(key => {
            const image = images[key];
            const content = image['content'] ?? '';
            const name = image['name'] ?? '';
            if (content === '' || name === '') {
                return;
            }
            this.iconRegistry.addSvg(name, content);
        });
    }
    /**
     * Fetch the theme images from the backend
     *
     * @param {string} theme to load
     * @returns {object} Observable<any>
     */
    fetch(theme) {
        return this.recordGQL
            .fetch(this.resourceName, `/api/${this.frontendName}/${theme}`, this.fieldsMetadata)
            .pipe(map(({ data }) => {
            let images = {};
            if (data && data.themeImages) {
                images = data.themeImages.items;
            }
            if (!emptyObject(images)) {
                const parsedImages = {};
                this.registerSvgs(images);
                Object.keys(images).forEach(key => {
                    const { content, ...image } = images[key] ?? {};
                    parsedImages[key] = image;
                });
                return parsedImages;
            }
            return images;
        }));
    }
    static { this.ɵfac = function ThemeImagesStore_Factory(t) { return new (t || ThemeImagesStore)(i0.ɵɵinject(i1.EntityGQL), i0.ɵɵinject(i2.AppStateStore), i0.ɵɵinject(i3.SvgIconRegistryService)); }; }
    static { this.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: ThemeImagesStore, factory: ThemeImagesStore.ɵfac, providedIn: 'root' }); }
}
export { ThemeImagesStore };
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ThemeImagesStore, [{
        type: Injectable,
        args: [{
                providedIn: 'root',
            }]
    }], function () { return [{ type: i1.EntityGQL }, { type: i2.AppStateStore }, { type: i3.SvgIconRegistryService }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGhlbWUtaW1hZ2VzLnN0b3JlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vY29yZS9hcHAvY29yZS9zcmMvbGliL3N0b3JlL3RoZW1lLWltYWdlcy90aGVtZS1pbWFnZXMuc3RvcmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQXdCRztBQUVILE9BQU8sRUFBQyxVQUFVLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFDLGVBQWUsRUFBYyxFQUFFLEVBQUMsTUFBTSxNQUFNLENBQUM7QUFDckQsT0FBTyxFQUFDLG9CQUFvQixFQUFFLEdBQUcsRUFBRSxXQUFXLEVBQUUsR0FBRyxFQUFDLE1BQU0sZ0JBQWdCLENBQUM7QUFFM0UsT0FBTyxFQUFDLFNBQVMsRUFBQyxNQUFNLCtDQUErQyxDQUFDO0FBQ3hFLE9BQU8sRUFBQyxhQUFhLEVBQUMsTUFBTSw4QkFBOEIsQ0FBQztBQUUzRCxPQUFPLEVBQUMsU0FBUyxFQUFFLFdBQVcsRUFBQyxNQUFNLFFBQVEsQ0FBQztBQUM5QyxPQUFPLEVBQUMsc0JBQXNCLEVBQUMsTUFBTSxrQkFBa0IsQ0FBQzs7Ozs7QUFrQnhELE1BQU0sWUFBWSxHQUFnQjtJQUM5QixLQUFLLEVBQUUsSUFBSTtJQUNYLE1BQU0sRUFBRSxFQUFFO0NBQ2IsQ0FBQztBQUVGLElBQUksYUFBYSxHQUFnQixTQUFTLENBQUMsWUFBWSxDQUFDLENBQUM7QUFFekQsSUFBSSxXQUFXLEdBQUcsSUFBSSxDQUFDO0FBQ3ZCLElBQUksTUFBTSxHQUFvQixJQUFJLENBQUM7QUFFbkMsTUFHYSxnQkFBZ0I7SUFtQnpCLFlBQ2MsU0FBb0IsRUFDcEIsYUFBNEIsRUFDNUIsWUFBb0M7UUFGcEMsY0FBUyxHQUFULFNBQVMsQ0FBVztRQUNwQixrQkFBYSxHQUFiLGFBQWEsQ0FBZTtRQUM1QixpQkFBWSxHQUFaLFlBQVksQ0FBd0I7UUFmeEMsVUFBSyxH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QixNQUFNLEVBQUMsT0FBTyxFQUFFLEdBQUcsS0FBSyxFQUFDLEdBQUcsTUFBTSxDQUFDLEdBQUcsQ0FBQyxJQUFJLEVBQUUsQ0FBQztvQkFDOUMsWUFBWSxDQUFDLEdBQUcsQ0FBQyxHQUFHLEtBQUssQ0FBQztnQkFDOUIsQ0FBQyxDQUFDLENBQUM7Z0JBRUgsT0FBTyxZQUFZLENBQUM7YUFDdkI7WUFFRCxPQUFPLE1BQU0sQ0FBQztRQUNsQixDQUFDLENBQUMsQ0FDTCxDQUFDO0lBQ1YsQ0FBQztpRkF0TFEsZ0JBQWdCO3VFQUFoQixnQkFBZ0IsV0FBaEIsZ0JBQWdCLG1CQUZiLE1BQU07O1NBRVQsZ0JBQWdCO3VGQUFoQixnQkFBZ0I7Y0FINUIsVUFBVTtlQUFDO2dCQUNSLFVBQVUsRUFBRSxNQUFNO2FBQ3JCIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBTdWl0ZUNSTSBpcyBhIGN1c3RvbWVyIHJlbGF0aW9uc2hpcCBtYW5hZ2VtZW50IHByb2dyYW0gZGV2ZWxvcGVkIGJ5IFNhbGVzQWdpbGl0eSBMdGQuXG4gKiBDb3B5cmlnaHQgKEMpIDIwMjEgU2FsZXNBZ2lsaXR5IEx0ZC5cbiAqXG4gKiBUaGlzIHByb2dyYW0gaXMgZnJlZSBzb2Z0d2FyZTsgeW91IGNhbiByZWRpc3RyaWJ1dGUgaXQgYW5kL29yIG1vZGlmeSBpdCB1bmRlclxuICogdGhlIHRlcm1zIG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgdmVyc2lvbiAzIGFzIHB1Ymxpc2hlZCBieSB0aGVcbiAqIEZyZWUgU29mdHdhcmUgRm91bmRhdGlvbiB3aXRoIHRoZSBhZGRpdGlvbiBvZiB0aGUgZm9sbG93aW5nIHBlcm1pc3Npb24gYWRkZWRcbiAqIHRvIFNlY3Rpb24gMTUgYXMgcGVybWl0dGVkIGluIFNlY3Rpb24gNyhhKTogRk9SIEFOWSBQQVJUIE9GIFRIRSBDT1ZFUkVEIFdPUktcbiAqIElOIFdISUNIIFRIRSBDT1BZUklHSFQgSVMgT1dORUQgQlkgU0FMRVNBR0lMSVRZLCBTQUxFU0FHSUxJVFkgRElTQ0xBSU1TIFRIRVxuICogV0FSUkFOVFkgT0YgTk9OIElORlJJTkdFTUVOVCBPRiBUSElSRCBQQVJUWSBSSUdIVFMuXG4gKlxuICogVGhpcyBwcm9ncmFtIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsIGJ1dCBXSVRIT1VUXG4gKiBBTlkgV0FSUkFOVFk7IHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZiBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTU1xuICogRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLiBTZWUgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBmb3IgbW9yZVxuICogZGV0YWlscy5cbiAqXG4gKiBZb3Ugc2hvdWxkIGhhdmUgcmVjZWl2ZWQgYSBjb3B5IG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiAqIGFsb25nIHdpdGggdGhpcyBwcm9ncmFtLiAgSWYgbm90LCBzZWUgPGh0dHA6Ly93d3cuZ251Lm9yZy9saWNlbnNlcy8+LlxuICpcbiAqIEluIGFjY29yZGFuY2Ugd2l0aCBTZWN0aW9uIDcoYikgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuICogdmVyc2lvbiAzLCB0aGVzZSBBcHByb3ByaWF0ZSBMZWdhbCBOb3RpY2VzIG11c3QgcmV0YWluIHRoZSBkaXNwbGF5IG9mIHRoZVxuICogXCJTdXBlcmNoYXJnZWQgYnkgU3VpdGVDUk1cIiBsb2dvLiBJZiB0aGUgZGlzcGxheSBvZiB0aGUgbG9nb3MgaXMgbm90IHJlYXNvbmFibHlcbiAqIGZlYXNpYmxlIGZvciB0ZWNobmljYWwgcmVhc29ucywgdGhlIEFwcHJvcHJpYXRlIExlZ2FsIE5vdGljZXMgbXVzdCBkaXNwbGF5XG4gKiB0aGUgd29yZHMgXCJTdXBlcmNoYXJnZWQgYnkgU3VpdGVDUk1cIi5cbiAqL1xuXG5pbXBvcnQge0luamVjdGFibGV9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtCZWhhdmlvclN1YmplY3QsIE9ic2VydmFibGUsIG9mfSBmcm9tICdyeGpzJztcbmltcG9ydCB7ZGlzdGluY3RVbnRpbENoYW5nZWQsIG1hcCwgc2hhcmVSZXBsYXksIHRhcH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5pbXBvcnQge0VudGl0eUdRTH0gZnJvbSAnLi4vLi4vc2VydmljZXMvYXBpL2dyYXBocWwtYXBpL2FwaS5lbnRpdHkuZ2V0JztcbmltcG9ydCB7QXBwU3RhdGVTdG9yZX0gZnJvbSAnLi4vYXBwLXN0YXRlL2FwcC1zdGF0ZS5zdG9yZSc7XG5pbXBvcnQge1N0YXRlU3RvcmV9IGZyb20gJy4uL3N0YXRlJztcbmltcG9ydCB7ZGVlcENsb25lLCBlbXB0eU9iamVjdH0gZnJvbSAnY29tbW9uJztcbmltcG9ydCB7U3ZnSWNvblJlZ2lzdHJ5U2VydmljZX0gZnJvbSAnYW5ndWxhci1zdmctaWNvbic7XG5cbmV4cG9ydCBpbnRlcmZhY2UgVGhlbWVJbWFnZSB7XG4gICAgcGF0aDogc3RyaW5nO1xuICAgIG5hbWU6IHN0cmluZztcbiAgICB0eXBlOiBzdHJpbmc7XG4gICAgY29udGVudD86IHN0cmluZztcbn1cblxuZXhwb3J0IGludGVyZmFjZSBUaGVtZUltYWdlcyB7XG4gICAgdGhlbWU6IHN0cmluZztcbiAgICBpbWFnZXM6IFRoZW1lSW1hZ2VNYXA7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgVGhlbWVJbWFnZU1hcCB7XG4gICAgW2tleTogc3RyaW5nXTogVGhlbWVJbWFnZTtcbn1cblxuY29uc3QgaW5pdGlhbFN0YXRlOiBUaGVtZUltYWdlcyA9IHtcbiAgICB0aGVtZTogbnVsbCxcbiAgICBpbWFnZXM6IHt9XG59O1xuXG5sZXQgaW50ZXJuYWxTdGF0ZTogVGhlbWVJbWFnZXMgPSBkZWVwQ2xvbmUoaW5pdGlhbFN0YXRlKTtcblxubGV0IGNhY2hlZFRoZW1lID0gbnVsbDtcbmxldCBjYWNoZSQ6IE9ic2VydmFibGU8YW55PiA9IG51bGw7XG5cbkBJbmplY3RhYmxlKHtcbiAgICBwcm92aWRlZEluOiAncm9vdCcsXG59KVxuZXhwb3J0IGNsYXNzIFRoZW1lSW1hZ2VzU3RvcmUgaW1wbGVtZW50cyBTdGF0ZVN0b3JlIHtcblxuICAgIC8qKlxuICAgICAqIFB1YmxpYyBsb25nLWxpdmVkIG9ic2VydmFibGUgc3RyZWFtc1xuICAgICAqL1xuICAgIGltYWdlcyQ6IE9ic2VydmFibGU8VGhlbWVJbWFnZU1hcD47XG5cbiAgICBwcm90ZWN0ZWQgc3RvcmUgPSBuZXcgQmVoYXZpb3JTdWJqZWN0PFRoZW1lSW1hZ2VzPihpbnRlcm5hbFN0YXRlKTtcbiAgICBwcm90ZWN0ZWQgc3RhdGUkID0gdGhpcy5zdG9yZS5hc09ic2VydmFibGUoKTtcbiAgICBwcm90ZWN0ZWQgcmVzb3VyY2VOYW1lID0gJ3RoZW1lSW1hZ2VzJztcbiAgICBwcm90ZWN0ZWQgZnJvbnRlbmROYW1lID0gJ3RoZW1lLWltYWdlcyc7XG4gICAgcHJvdGVjdGVkIGZpZWxkc01ldGFkYXRhID0ge1xuICAgICAgICBmaWVsZHM6IFtcbiAgICAgICAgICAgICdpZCcsXG4gICAgICAgICAgICAnX2lkJyxcbiAgICAgICAgICAgICdpdGVtcydcbiAgICAgICAgXVxuICAgIH07XG5cbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgcHJvdGVjdGVkIHJlY29yZEdRTDogRW50aXR5R1FMLFxuICAgICAgICBwcm90ZWN0ZWQgYXBwU3RhdGVTdG9yZTogQXBwU3RhdGVTdG9yZSxcbiAgICAgICAgcHJvdGVjdGVkIGljb25SZWdpc3RyeTogU3ZnSWNvblJlZ2lzdHJ5U2VydmljZVxuICAgICkge1xuICAgICAgICB0aGlzLmltYWdlcyQgPSB0aGlzLnN0YXRlJC5waXBlKG1hcChzdGF0ZSA9PiBzdGF0ZS5pbWFnZXMpLCBkaXN0aW5jdFVudGlsQ2hhbmdlZCgpKTtcbiAgICB9XG5cblxuICAgIC8qKlxuICAgICAqIFB1YmxpYyBBcGlcbiAgICAgKi9cblxuICAgIC8qKlxuICAgICAqIENsZWFyIHN0YXRlXG4gICAgICovXG4gICAgcHVibGljIGNsZWFyKCk6IHZvaWQge1xuICAgICAgICBjYWNoZWRUaGVtZSA9IG51bGw7XG4gICAgICAgIGNhY2hlJCA9IG51bGw7XG4gICAgICAgIHRoaXMudXBkYXRlU3RhdGUoZGVlcENsb25lKGluaXRpYWxTdGF0ZSkpO1xuICAgIH1cblxuICAgIHB1YmxpYyBjbGVhckF1dGhCYXNlZCgpOiB2b2lkIHtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDaGFuZ2UgdGhlIGN1cnJlbnQgdGhlbWVcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSB0aGVtZSB0byBzZXRcbiAgICAgKi9cbiAgICBwdWJsaWMgY2hhbmdlVGhlbWUodGhlbWU6IHN0cmluZyk6IHZvaWQge1xuXG4gICAgICAgIHRoaXMuYXBwU3RhdGVTdG9yZS51cGRhdGVMb2FkaW5nKCdjaGFuZ2UtdGhlbWUnLCB0cnVlKTtcblxuICAgICAgICB0aGlzLmxvYWQodGhlbWUpLnBpcGUoXG4gICAgICAgICAgICB0YXAoKCkgPT4gdGhpcy5hcHBTdGF0ZVN0b3JlLnVwZGF0ZUxvYWRpbmcoJ2NoYW5nZS10aGVtZScsIGZhbHNlKSlcbiAgICAgICAgKS5zdWJzY3JpYmUoKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIHRoZSBjdXJyZW50bHkgYWN0aXZlIGltYWdlIHRoZW1lXG4gICAgICpcbiAgICAgKiBAcmV0dXJucyB7c3RyaW5nfSB0aGUgdGhlbWVcbiAgICAgKi9cbiAgICBwdWJsaWMgZ2V0VGhlbWUoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIGludGVybmFsU3RhdGUudGhlbWU7XG4gICAgfVxuXG5cbiAgICAvKipcbiAgICAgKiBJbml0aWFsIFRoZW1lSW1hZ2VzIGxvYWQgaWYgbm90IGNhY2hlZCBhbmQgdXBkYXRlIHN0YXRlLlxuICAgICAqIFJldHVybnMgb2JzZXJ2YWJsZSB0byBiZSB1c2VkIGluIHJlc29sdmVyIGlmIG5lZWRlZFxuICAgICAqXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHRoZW1lIHRvIGxvYWRcbiAgICAgKiBAcmV0dXJucyB7b2JqZWN0fSBPYnNlcnZhYmxlPGFueT5cbiAgICAgKi9cbiAgICBwdWJsaWMgbG9hZCh0aGVtZTogc3RyaW5nKTogT2JzZXJ2YWJsZTxhbnk+IHtcblxuICAgICAgICByZXR1cm4gdGhpcy5nZXRUaGVtZUltYWdlcyh0aGVtZSkucGlwZShcbiAgICAgICAgICAgIHRhcChpbWFnZXMgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlU3RhdGUoey4uLmludGVybmFsU3RhdGUsIGltYWdlcywgdGhlbWV9KTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ2hlY2sgaWYgbG9hZGVkXG4gICAgICovXG4gICAgcHVibGljIGlzQ2FjaGVkKCk6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gY2FjaGUkICE9PSBudWxsO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFNldCBwcmUtbG9hZGVkIHRoZW1lIGltYWdlcyBhbmQgY2FjaGVcbiAgICAgKi9cbiAgICBwdWJsaWMgc2V0KHRoZW1lOiBzdHJpbmcsIGltYWdlczogVGhlbWVJbWFnZU1hcCk6IHZvaWQge1xuXG4gICAgICAgIGNhY2hlZFRoZW1lID0gdGhlbWU7XG4gICAgICAgIHRoaXMucmVnaXN0ZXJTdmdzKGltYWdlcyk7XG5cbiAgICAgICAgY2FjaGUkID0gb2YoaW1hZ2VzKS5waXBlKHNoYXJlUmVwbGF5KDEpKTtcbiAgICAgICAgdGhpcy51cGRhdGVTdGF0ZSh7Li4uaW50ZXJuYWxTdGF0ZSwgaW1hZ2VzfSk7XG4gICAgfVxuXG5cbiAgICAvKipcbiAgICAgKiBJbnRlcm5hbCBBUElcbiAgICAgKi9cblxuICAgIC8qKlxuICAgICAqIFVwZGF0ZSB0aGUgc3RhdGVcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7b2JqZWN0fSBzdGF0ZSB0byBzZXRcbiAgICAgKi9cbiAgICBwcm90ZWN0ZWQgdXBkYXRlU3RhdGUoc3RhdGU6IFRoZW1lSW1hZ2VzKTogdm9pZCB7XG4gICAgICAgIHRoaXMuc3RvcmUubmV4dChpbnRlcm5hbFN0YXRlID0gc3RhdGUpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEdldCB0aGVtZSBpbWFnZXMgY2FjaGVkIE9ic2VydmFibGUgb3IgY2FsbCB0aGUgYmFja2VuZFxuICAgICAqXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHRoZW1lIHRvIHJldHJpZXZlXG4gICAgICogQHJldHVybnMge29iamVjdH0gT2JzZXJ2YWJsZTxhbnk+XG4gICAgICovXG4gICAgcHJvdGVjdGVkIGdldFRoZW1lSW1hZ2VzKHRoZW1lOiBzdHJpbmcpOiBPYnNlcnZhYmxlPGFueT4ge1xuXG4gICAgICAgIGlmIChjYWNoZWRUaGVtZSAhPT0gdGhlbWUgfHwgY2FjaGUkID09PSBudWxsKSB7XG4gICAgICAgICAgICBjYWNoZWRUaGVtZSA9IHRoZW1lO1xuICAgICAgICAgICAgY2FjaGUkID0gdGhpcy5mZXRjaCh0aGVtZSkucGlwZShcbiAgICAgICAgICAgICAgICBzaGFyZVJlcGxheSgxKVxuICAgICAgICAgICAgKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBjYWNoZSQ7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIHJlZ2lzdGVyU3ZncyhpbWFnZXM6IFRoZW1lSW1hZ2VNYXApIHtcbiAgICAgICAgT2JqZWN0LmtleXMoaW1hZ2VzKS5mb3JFYWNoKGtleSA9PiB7XG4gICAgICAgICAgICBjb25zdCBpbWFnZSA9IGltYWdlc1trZXldO1xuICAgICAgICAgICAgY29uc3QgY29udGVudCA9IGltYWdlWydjb250ZW50J10gPz8gJyc7XG4gICAgICAgICAgICBjb25zdCBuYW1lID0gaW1hZ2VbJ25hbWUnXSA/PyAnJztcblxuICAgICAgICAgICAgaWYgKGNvbnRlbnQgPT09ICcnIHx8IG5hbWUgPT09ICcnKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB0aGlzLmljb25SZWdpc3RyeS5hZGRTdmcobmFtZSwgY29udGVudCk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEZldGNoIHRoZSB0aGVtZSBpbWFnZXMgZnJvbSB0aGUgYmFja2VuZFxuICAgICAqXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHRoZW1lIHRvIGxvYWRcbiAgICAgKiBAcmV0dXJucyB7b2JqZWN0fSBPYnNlcnZhYmxlPGFueT5cbiAgICAgKi9cbiAgICBwcm90ZWN0ZWQgZmV0Y2godGhlbWU6IHN0cmluZyk6IE9ic2VydmFibGU8YW55PiB7XG5cbiAgICAgICAgcmV0dXJuIHRoaXMucmVjb3JkR1FMXG4gICAgICAgICAgICAuZmV0Y2godGhpcy5yZXNvdXJjZU5hbWUsIGAvYXBpLyR7dGhpcy5mcm9udGVuZE5hbWV9LyR7dGhlbWV9YCwgdGhpcy5maWVsZHNNZXRhZGF0YSlcbiAgICAgICAgICAgIC5waXBlKFxuICAgICAgICAgICAgICAgIG1hcCgoe2RhdGF9KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGxldCBpbWFnZXMgPSB7fTtcblxuICAgICAgICAgICAgICAgICAgICBpZiAoZGF0YSAmJiBkYXRhLnRoZW1lSW1hZ2VzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpbWFnZXMgPSBkYXRhLnRoZW1lSW1hZ2VzLml0ZW1zO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKCFlbXB0eU9iamVjdChpbWFnZXMpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBwYXJzZWRJbWFnZXMgPSB7fTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucmVnaXN0ZXJTdmdzKGltYWdlcyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIE9iamVjdC5rZXlzKGltYWdlcykuZm9yRWFjaChrZXkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHtjb250ZW50LCAuLi5pbWFnZX0gPSBpbWFnZXNba2V5XSA/PyB7fTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXJzZWRJbWFnZXNba2V5XSA9IGltYWdlO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBwYXJzZWRJbWFnZXM7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gaW1hZ2VzO1xuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICApO1xuICAgIH1cbn1cbiJdfQ==