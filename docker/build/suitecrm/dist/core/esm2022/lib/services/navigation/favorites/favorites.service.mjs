import { Injectable } from '@angular/core';
import { MetadataStore } from '../../../store/metadata/metadata.store.service';
import { deepClone } from 'common';
import { ProcessService } from '../../process/process.service';
import { take } from 'rxjs/operators';
import * as i0 from "@angular/core";
import * as i1 from "../../../store/metadata/metadata.store.service";
import * as i2 from "../../process/process.service";
class FavoritesService {
    constructor(metadata, processService) {
        this.metadata = metadata;
        this.processService = processService;
    }
    /**
     * Public Api
     */
    /**
     * Build new favorite
     * @param module
     * @param id
     */
    build(module, id) {
        return deepClone({
            module: 'Favorite',
            type: 'Favorite',
            attributes: {
                parent_id: id,
                parent_type: module,
            },
        });
    }
    /**
     * Add favorite
     * @param module
     * @param favorite
     */
    add(module, favorite) {
        this.update(module, favorite, 'add');
    }
    /**
     * Add favorite
     * @param module
     * @param favorite
     */
    remove(module, favorite) {
        this.update(module, favorite, 'remove');
    }
    /**
     * Save favorite to backend
     * @param module
     * @param favorite
     * @param action
     */
    update(module, favorite, action) {
        const processType = 'update-favorite';
        const options = {
            favorite: favorite,
            action
        };
        setTimeout(() => {
            this.processService.submit(processType, options).pipe(take(1)).subscribe(result => {
                const savedFavorite = result?.data?.favorite ?? null;
                if (savedFavorite === null) {
                    this.removeFavoriteFromMetadata(module, favorite);
                    return;
                }
                this.addFavoriteToMetadata(savedFavorite, module);
            });
        }, 100);
    }
    /**
     *
     * @param savedFavorite
     * @param module
     * @private
     */
    addFavoriteToMetadata(savedFavorite, module) {
        const saved = {
            id: savedFavorite?.id ?? '',
            module: savedFavorite?.module ?? '',
            attributes: { ...(savedFavorite?.attributes ?? {}) },
        };
        const newItemId = savedFavorite?.attributes?.parent_id ?? '';
        const metadata = this.metadata.getModuleMeta(module);
        const current = metadata?.favorites ?? null;
        if (current) {
            let cleared = current.filter(item => ((item?.attributes?.parent_id ?? '') !== newItemId));
            cleared.unshift(saved);
            metadata.favorites = cleared;
        }
        this.metadata.setModuleMetadata(module, metadata);
    }
    /**
     * Remove favorite from metadata
     * @param module
     * @param favorite
     */
    removeFavoriteFromMetadata(module, favorite) {
        const metadata = this.metadata.getModuleMeta(module);
        const current = metadata?.favorites ?? null;
        const parentId = favorite?.attributes?.parent_id ?? null;
        if (!current || !current.length || !parentId) {
            return;
        }
        metadata.favorites = current.filter(item => ((item?.attributes?.parent_id ?? '') !== parentId));
        this.metadata.setModuleMetadata(module, metadata);
    }
    static { this.ɵfac = function FavoritesService_Factory(t) { return new (t || FavoritesService)(i0.ɵɵinject(i1.MetadataStore), i0.ɵɵinject(i2.ProcessService)); }; }
    static { this.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: FavoritesService, factory: FavoritesService.ɵfac, providedIn: 'root' }); }
}
export { FavoritesService };
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(FavoritesService, [{
        type: Injectable,
        args: [{ providedIn: 'root' }]
    }], function () { return [{ type: i1.MetadataStore }, { type: i2.ProcessService }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmF2b3JpdGVzLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9jb3JlL2FwcC9jb3JlL3NyYy9saWIvc2VydmljZXMvbmF2aWdhdGlvbi9mYXZvcml0ZXMvZmF2b3JpdGVzLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFDLFVBQVUsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUMsYUFBYSxFQUFDLE1BQU0sZ0RBQWdELENBQUM7QUFDN0UsT0FBTyxFQUFDLFNBQVMsRUFBVyxNQUFNLFFBQVEsQ0FBQztBQUMzQyxPQUFPLEVBQUMsY0FBYyxFQUFDLE1BQU0sK0JBQStCLENBQUM7QUFDN0QsT0FBTyxFQUFDLElBQUksRUFBQyxNQUFNLGdCQUFnQixDQUFDOzs7O0FBRXBDLE1BQ2EsZ0JBQWdCO0lBRXpCLFlBQ2MsUUFBdUIsRUFDdkIsY0FBOEI7UUFEOUIsYUFBUSxHQUFSLFFBQVEsQ0FBZTtRQUN2QixtQkFBYyxHQUFkLGNBQWMsQ0FBZ0I7SUFFNUMsQ0FBQztJQUVEOztPQUVHO0lBRUg7Ozs7T0FJRztJQUNJLEtBQUssQ0FBQyxNQUFjLEVBQUUsRUFBVTtRQUNuQyxPQUFPLFNBQVMsQ0FBQztZQUNiLE1BQU0sRUFBRSxVQUFVO1lBQ2xCLElBQUksRUFBRSxVQUFVO1lBQ2hCLFVBQVUsRUFBRTtnQkFDUixTQUFTLEVBQUUsRUFBRTtnQkFDYixXQUFXLEVBQUUsTUFBTTthQUN0QjtTQUNRLENBQUMsQ0FBQztJQUNuQixDQUFDO0lBR0Q7Ozs7T0FJRztJQUNJLEdBQUcsQ0FBQyxNQUFjLEVBQUUsUUFBa0I7UUFDekMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEVBQUUsUUFBUSxFQUFFLEtBQUssQ0FBQyxDQUFDO0lBQ3pDLENBQUM7SUFFRDs7OztPQUlHO0lBQ0ksTUFBTSxDQUFDLE1BQWMsRUFBRSxRQUFrQjtRQUM1QyxJQUFJLENBQUMsTUFB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SUFBSSxDQUFDLFFBQVEsQ0FBQyxpQkFBaUIsQ0FBQyxNQUFNLEVBQUUsUUFBUSxDQUFDLENBQUM7SUFDdEQsQ0FBQztpRkFySFEsZ0JBQWdCO3VFQUFoQixnQkFBZ0IsV0FBaEIsZ0JBQWdCLG1CQURKLE1BQU07O1NBQ2xCLGdCQUFnQjt1RkFBaEIsZ0JBQWdCO2NBRDVCLFVBQVU7ZUFBQyxFQUFDLFVBQVUsRUFBRSxNQUFNLEVBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0luamVjdGFibGV9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtNZXRhZGF0YVN0b3JlfSBmcm9tICcuLi8uLi8uLi9zdG9yZS9tZXRhZGF0YS9tZXRhZGF0YS5zdG9yZS5zZXJ2aWNlJztcbmltcG9ydCB7ZGVlcENsb25lLCBGYXZvcml0ZX0gZnJvbSAnY29tbW9uJztcbmltcG9ydCB7UHJvY2Vzc1NlcnZpY2V9IGZyb20gJy4uLy4uL3Byb2Nlc3MvcHJvY2Vzcy5zZXJ2aWNlJztcbmltcG9ydCB7dGFrZX0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5ASW5qZWN0YWJsZSh7cHJvdmlkZWRJbjogJ3Jvb3QnfSlcbmV4cG9ydCBjbGFzcyBGYXZvcml0ZXNTZXJ2aWNlIHtcblxuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBwcm90ZWN0ZWQgbWV0YWRhdGE6IE1ldGFkYXRhU3RvcmUsXG4gICAgICAgIHByb3RlY3RlZCBwcm9jZXNzU2VydmljZTogUHJvY2Vzc1NlcnZpY2VcbiAgICApIHtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBQdWJsaWMgQXBpXG4gICAgICovXG5cbiAgICAvKipcbiAgICAgKiBCdWlsZCBuZXcgZmF2b3JpdGVcbiAgICAgKiBAcGFyYW0gbW9kdWxlXG4gICAgICogQHBhcmFtIGlkXG4gICAgICovXG4gICAgcHVibGljIGJ1aWxkKG1vZHVsZTogc3RyaW5nLCBpZDogc3RyaW5nKTogRmF2b3JpdGUge1xuICAgICAgICByZXR1cm4gZGVlcENsb25lKHtcbiAgICAgICAgICAgIG1vZHVsZTogJ0Zhdm9yaXRlJyxcbiAgICAgICAgICAgIHR5cGU6ICdGYXZvcml0ZScsXG4gICAgICAgICAgICBhdHRyaWJ1dGVzOiB7XG4gICAgICAgICAgICAgICAgcGFyZW50X2lkOiBpZCxcbiAgICAgICAgICAgICAgICBwYXJlbnRfdHlwZTogbW9kdWxlLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgfSBhcyBGYXZvcml0ZSk7XG4gICAgfVxuXG5cbiAgICAvKipcbiAgICAgKiBBZGQgZmF2b3JpdGVcbiAgICAgKiBAcGFyYW0gbW9kdWxlXG4gICAgICogQHBhcmFtIGZhdm9yaXRlXG4gICAgICovXG4gICAgcHVibGljIGFkZChtb2R1bGU6IHN0cmluZywgZmF2b3JpdGU6IEZhdm9yaXRlKTogdm9pZCB7XG4gICAgICAgIHRoaXMudXBkYXRlKG1vZHVsZSwgZmF2b3JpdGUsICdhZGQnKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBBZGQgZmF2b3JpdGVcbiAgICAgKiBAcGFyYW0gbW9kdWxlXG4gICAgICogQHBhcmFtIGZhdm9yaXRlXG4gICAgICovXG4gICAgcHVibGljIHJlbW92ZShtb2R1bGU6IHN0cmluZywgZmF2b3JpdGU6IEZhdm9yaXRlKTogdm9pZCB7XG4gICAgICAgIHRoaXMudXBkYXRlKG1vZHVsZSwgZmF2b3JpdGUsICdyZW1vdmUnKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTYXZlIGZhdm9yaXRlIHRvIGJhY2tlbmRcbiAgICAgKiBAcGFyYW0gbW9kdWxlXG4gICAgICogQHBhcmFtIGZhdm9yaXRlXG4gICAgICogQHBhcmFtIGFjdGlvblxuICAgICAqL1xuICAgIHByb3RlY3RlZCB1cGRhdGUobW9kdWxlOiBzdHJpbmcsIGZhdm9yaXRlOiBGYXZvcml0ZSwgYWN0aW9uOiBzdHJpbmcpOiB2b2lkIHtcblxuICAgICAgICBjb25zdCBwcm9jZXNzVHlwZSA9ICd1cGRhdGUtZmF2b3JpdGUnO1xuXG4gICAgICAgIGNvbnN0IG9wdGlvbnMgPSB7XG4gICAgICAgICAgICBmYXZvcml0ZTogZmF2b3JpdGUsXG4gICAgICAgICAgICBhY3Rpb25cbiAgICAgICAgfTtcblxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIHRoaXMucHJvY2Vzc1NlcnZpY2Uuc3VibWl0KHByb2Nlc3NUeXBlLCBvcHRpb25zKS5waXBlKHRha2UoMSkpLnN1YnNjcmliZShyZXN1bHQgPT4ge1xuXG4gICAgICAgICAgICAgICAgY29uc3Qgc2F2ZWRGYXZvcml0ZSA9IHJlc3VsdD8uZGF0YT8uZmF2b3JpdGUgPz8gbnVsbDtcbiAgICAgICAgICAgICAgICBpZiAoc2F2ZWRGYXZvcml0ZSA9PT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnJlbW92ZUZhdm9yaXRlRnJvbU1ldGFkYXRhKG1vZHVsZSwgZmF2b3JpdGUpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRoaXMuYWRkRmF2b3JpdGVUb01ldGFkYXRhKHNhdmVkRmF2b3JpdGUsIG1vZHVsZSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSwgMTAwKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEBwYXJhbSBzYXZlZEZhdm9yaXRlXG4gICAgICogQHBhcmFtIG1vZHVsZVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgcHJvdGVjdGVkIGFkZEZhdm9yaXRlVG9NZXRhZGF0YShzYXZlZEZhdm9yaXRlOiBGYXZvcml0ZSwgbW9kdWxlOiBzdHJpbmcpOiB2b2lkIHtcbiAgICAgICAgY29uc3Qgc2F2ZWQgPSB7XG4gICAgICAgICAgICBpZDogc2F2ZWRGYXZvcml0ZT8uaWQgPz8gJycsXG4gICAgICAgICAgICBtb2R1bGU6IHNhdmVkRmF2b3JpdGU/Lm1vZHVsZSA/PyAnJyxcbiAgICAgICAgICAgIGF0dHJpYnV0ZXM6IHsuLi4oc2F2ZWRGYXZvcml0ZT8uYXR0cmlidXRlcyA/PyB7fSl9LFxuICAgICAgICB9O1xuXG4gICAgICAgIGNvbnN0IG5ld0l0ZW1JZCA9IHNhdmVkRmF2b3JpdGU/LmF0dHJpYnV0ZXM/LnBhcmVudF9pZCA/PyAnJztcbiAgICAgICAgY29uc3QgbWV0YWRhdGEgPSB0aGlzLm1ldGFkYXRhLmdldE1vZHVsZU1ldGEobW9kdWxlKTtcblxuICAgICAgICBjb25zdCBjdXJyZW50ID0gbWV0YWRhdGE/LmZhdm9yaXRlcyA/PyBudWxsO1xuICAgICAgICBpZiAoY3VycmVudCkge1xuICAgICAgICAgICAgbGV0IGNsZWFyZWQgPSBjdXJyZW50LmZpbHRlcihpdGVtID0+ICgoaXRlbT8uYXR0cmlidXRlcz8ucGFyZW50X2lkID8/ICcnKSAhPT0gbmV3SXRlbUlkKSk7XG4gICAgICAgICAgICBjbGVhcmVkLnVuc2hpZnQoc2F2ZWQpO1xuICAgICAgICAgICAgbWV0YWRhdGEuZmF2b3JpdGVzID0gY2xlYXJlZDtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMubWV0YWRhdGEuc2V0TW9kdWxlTWV0YWRhdGEobW9kdWxlLCBtZXRhZGF0YSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmVtb3ZlIGZhdm9yaXRlIGZyb20gbWV0YWRhdGFcbiAgICAgKiBAcGFyYW0gbW9kdWxlXG4gICAgICogQHBhcmFtIGZhdm9yaXRlXG4gICAgICovXG4gICAgcHJvdGVjdGVkIHJlbW92ZUZhdm9yaXRlRnJvbU1ldGFkYXRhKG1vZHVsZTogc3RyaW5nLCBmYXZvcml0ZTogRmF2b3JpdGUpOiB2b2lkIHtcbiAgICAgICAgY29uc3QgbWV0YWRhdGEgPSB0aGlzLm1ldGFkYXRhLmdldE1vZHVsZU1ldGEobW9kdWxlKTtcblxuICAgICAgICBjb25zdCBjdXJyZW50ID0gbWV0YWRhdGE/LmZhdm9yaXRlcyA/PyBudWxsO1xuICAgICAgICBjb25zdCBwYXJlbnRJZCA9IGZhdm9yaXRlPy5hdHRyaWJ1dGVzPy5wYXJlbnRfaWQgPz8gbnVsbDtcbiAgICAgICAgaWYgKCFjdXJyZW50IHx8ICFjdXJyZW50Lmxlbmd0aCB8fCAhcGFyZW50SWQpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIG1ldGFkYXRhLmZhdm9yaXRlcyA9IGN1cnJlbnQuZmlsdGVyKGl0ZW0gPT4gKChpdGVtPy5hdHRyaWJ1dGVzPy5wYXJlbnRfaWQgPz8gJycpICE9PSBwYXJlbnRJZCkpO1xuICAgICAgICB0aGlzLm1ldGFkYXRhLnNldE1vZHVsZU1ldGFkYXRhKG1vZHVsZSwgbWV0YWRhdGEpO1xuICAgIH1cbn1cbiJdfQ==