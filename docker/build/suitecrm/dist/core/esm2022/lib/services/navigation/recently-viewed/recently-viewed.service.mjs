import { Injectable } from '@angular/core';
import { MetadataStore } from '../../../store/metadata/metadata.store.service';
import { deepClone } from 'common';
import { ProcessService } from '../../process/process.service';
import { take } from 'rxjs/operators';
import { GlobalRecentlyViewedStore } from "../../../store/global-recently-viewed/global-recently-viewed.store";
import { ModuleNameMapper } from "../module-name-mapper/module-name-mapper.service";
import * as i0 from "@angular/core";
import * as i1 from "../../../store/metadata/metadata.store.service";
import * as i2 from "../../../store/global-recently-viewed/global-recently-viewed.store";
import * as i3 from "../../process/process.service";
import * as i4 from "../module-name-mapper/module-name-mapper.service";
class RecentlyViewedService {
    constructor(metadata, globalRecentlyViewedStore, processService, moduleNameMapper) {
        this.metadata = metadata;
        this.globalRecentlyViewedStore = globalRecentlyViewedStore;
        this.processService = processService;
        this.moduleNameMapper = moduleNameMapper;
    }
    /**
     * Public Api
     */
    /**
     * On navigation add
     * @param module
     * @param route
     */
    onNavigationAdd(module, route) {
        let mode = 'detail';
        const data = (route && route.data) || {};
        if (data.mode) {
            mode = data.mode;
        }
        const recordId = route?.params?.record ?? null;
        if (recordId && mode !== 'create') {
            const recentlyViewed = this.buildRecentlyViewed(module, recordId);
            this.addRecentlyViewed(module, recentlyViewed);
        }
    }
    /**
     * Build new recently viewed
     * @param module
     * @param id
     * @param view
     */
    buildRecentlyViewed(module, id, view = 'detailview') {
        module = this.moduleNameMapper.toLegacy(module);
        return deepClone({
            module: 'Tracker',
            type: 'Tracker',
            attributes: {
                module_name: module ?? '',
                item_id: id ?? '',
                action: view ?? '',
            },
        });
    }
    /**
     * Add recently viewed
     * @param module
     * @param viewed
     */
    addRecentlyViewed(module, viewed) {
        this.saveRecentlyViewed(module, viewed);
    }
    /**
     * Save recently viewed to backend
     * @param module
     * @param viewed
     */
    saveRecentlyViewed(module, viewed) {
        const processType = 'add-recently-viewed';
        const options = {
            recentlyViewed: viewed
        };
        setTimeout(() => {
            this.processService.submit(processType, options).pipe(take(1)).subscribe(result => {
                const saved = {
                    id: viewed.id ?? '',
                    module: viewed.module ?? '',
                    attributes: { ...(viewed.attributes ?? {}) },
                };
                const tracker = result?.data?.tracker ?? null;
                if (tracker === null) {
                    return;
                }
                saved.attributes.item_summary = tracker.item_summary;
                const newItemId = saved?.attributes?.item_id ?? '';
                const metadata = this.metadata.getModuleMeta(module);
                const current = metadata?.recentlyViewed ?? null;
                if (current) {
                    let cleared = current.filter(item => ((item?.attributes?.item_id ?? '') !== newItemId));
                    cleared.unshift(saved);
                    metadata.recentlyViewed = cleared;
                }
                this.globalRecentlyViewedStore.addToState(saved);
                this.metadata.setModuleMetadata(module, metadata);
            });
        }, 500);
    }
    static { this.ɵfac = function RecentlyViewedService_Factory(t) { return new (t || RecentlyViewedService)(i0.ɵɵinject(i1.MetadataStore), i0.ɵɵinject(i2.GlobalRecentlyViewedStore), i0.ɵɵinject(i3.ProcessService), i0.ɵɵinject(i4.ModuleNameMapper)); }; }
    static { this.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: RecentlyViewedService, factory: RecentlyViewedService.ɵfac, providedIn: 'root' }); }
}
export { RecentlyViewedService };
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(RecentlyViewedService, [{
        type: Injectable,
        args: [{ providedIn: 'root' }]
    }], function () { return [{ type: i1.MetadataStore }, { type: i2.GlobalRecentlyViewedStore }, { type: i3.ProcessService }, { type: i4.ModuleNameMapper }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVjZW50bHktdmlld2VkLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9jb3JlL2FwcC9jb3JlL3NyYy9saWIvc2VydmljZXMvbmF2aWdhdGlvbi9yZWNlbnRseS12aWV3ZWQvcmVjZW50bHktdmlld2VkLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFDLFVBQVUsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUMsYUFBYSxFQUFDLE1BQU0sZ0RBQWdELENBQUM7QUFDN0UsT0FBTyxFQUFDLFNBQVMsRUFBMkIsTUFBTSxRQUFRLENBQUM7QUFDM0QsT0FBTyxFQUFDLGNBQWMsRUFBQyxNQUFNLCtCQUErQixDQUFDO0FBQzdELE9BQU8sRUFBQyxJQUFJLEVBQUMsTUFBTSxnQkFBZ0IsQ0FBQztBQUVwQyxPQUFPLEVBQUMseUJBQXlCLEVBQUMsTUFBTSxvRUFBb0UsQ0FBQztBQUM3RyxPQUFPLEVBQUMsZ0JBQWdCLEVBQUMsTUFBTSxrREFBa0QsQ0FBQzs7Ozs7O0FBRWxGLE1BQ2EscUJBQXFCO0lBRTlCLFlBQ2MsUUFBdUIsRUFDdkIseUJBQW9ELEVBQ3BELGNBQThCLEVBQzlCLGdCQUFrQztRQUhsQyxhQUFRLEdBQVIsUUFBUSxDQUFlO1FBQ3ZCLDhCQUF5QixHQUF6Qix5QkFBeUIsQ0FBMkI7UUFDcEQsbUJBQWMsR0FBZCxjQUFjLENBQWdCO1FBQzlCLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBa0I7SUFFaEQsQ0FBQztJQUVEOztPQUVHO0lBRUg7Ozs7T0FJRztJQUNJLGVBQWUsQ0FBQyxNQUFjLEVBQUUsS0FBNkI7UUFFaEUsSUFBSSxJQUFJLEdBQUcsUUFBb0IsQ0FBQztRQUNoQyxNQUFNLElBQUksR0FBRyxDQUFDLEtBQUssSUFBSSxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDO1FBRXpDLElBQUksSUFBSSxDQUFDLElBQUks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eUJBQXlCLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxDQUFDO2dCQUVqRCxJQUFJLENBQUMsUUFBUSxDQUFDLGlCQUFpQixDQUFDLE1BQU0sRUFBRSxRQUFRLENBQUMsQ0FBQztZQUN0RCxDQUFDLENBQUMsQ0FBQztRQUNQLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQztJQUNaLENBQUM7c0ZBM0dRLHFCQUFxQjt1RUFBckIscUJBQXFCLFdBQXJCLHFCQUFxQixtQkFEVCxNQUFNOztTQUNsQixxQkFBcUI7dUZBQXJCLHFCQUFxQjtjQURqQyxVQUFVO2VBQUMsRUFBQyxVQUFVLEVBQUUsTUFBTSxFQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtJbmplY3RhYmxlfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7TWV0YWRhdGFTdG9yZX0gZnJvbSAnLi4vLi4vLi4vc3RvcmUvbWV0YWRhdGEvbWV0YWRhdGEuc3RvcmUuc2VydmljZSc7XG5pbXBvcnQge2RlZXBDbG9uZSwgUmVjZW50bHlWaWV3ZWQsIFZpZXdNb2RlfSBmcm9tICdjb21tb24nO1xuaW1wb3J0IHtQcm9jZXNzU2VydmljZX0gZnJvbSAnLi4vLi4vcHJvY2Vzcy9wcm9jZXNzLnNlcnZpY2UnO1xuaW1wb3J0IHt0YWtlfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQge0FjdGl2YXRlZFJvdXRlU25hcHNob3R9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQge0dsb2JhbFJlY2VudGx5Vmlld2VkU3RvcmV9IGZyb20gXCIuLi8uLi8uLi9zdG9yZS9nbG9iYWwtcmVjZW50bHktdmlld2VkL2dsb2JhbC1yZWNlbnRseS12aWV3ZWQuc3RvcmVcIjtcbmltcG9ydCB7TW9kdWxlTmFtZU1hcHBlcn0gZnJvbSBcIi4uL21vZHVsZS1uYW1lLW1hcHBlci9tb2R1bGUtbmFtZS1tYXBwZXIuc2VydmljZVwiO1xuXG5ASW5qZWN0YWJsZSh7cHJvdmlkZWRJbjogJ3Jvb3QnfSlcbmV4cG9ydCBjbGFzcyBSZWNlbnRseVZpZXdlZFNlcnZpY2Uge1xuXG4gICAgY29uc3RydWN0b3IoXG4gICAgICAgIHByb3RlY3RlZCBtZXRhZGF0YTogTWV0YWRhdGFTdG9yZSxcbiAgICAgICAgcHJvdGVjdGVkIGdsb2JhbFJlY2VudGx5Vmlld2VkU3RvcmU6IEdsb2JhbFJlY2VudGx5Vmlld2VkU3RvcmUsXG4gICAgICAgIHByb3RlY3RlZCBwcm9jZXNzU2VydmljZTogUHJvY2Vzc1NlcnZpY2UsXG4gICAgICAgIHByb3RlY3RlZCBtb2R1bGVOYW1lTWFwcGVyOiBNb2R1bGVOYW1lTWFwcGVyXG4gICAgKSB7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUHVibGljIEFwaVxuICAgICAqL1xuXG4gICAgLyoqXG4gICAgICogT24gbmF2aWdhdGlvbiBhZGRcbiAgICAgKiBAcGFyYW0gbW9kdWxlXG4gICAgICogQHBhcmFtIHJvdXRlXG4gICAgICovXG4gICAgcHVibGljIG9uTmF2aWdhdGlvbkFkZChtb2R1bGU6IHN0cmluZywgcm91dGU6IEFjdGl2YXRlZFJvdXRlU25hcHNob3QpIHtcblxuICAgICAgICBsZXQgbW9kZSA9ICdkZXRhaWwnIGFzIFZpZXdNb2RlO1xuICAgICAgICBjb25zdCBkYXRhID0gKHJvdXRlICYmIHJvdXRlLmRhdGEpIHx8IHt9O1xuXG4gICAgICAgIGlmIChkYXRhLm1vZGUpIHtcbiAgICAgICAgICAgIG1vZGUgPSBkYXRhLm1vZGU7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCByZWNvcmRJZCA9IHJvdXRlPy5wYXJhbXM/LnJlY29yZCA/PyBudWxsO1xuXG4gICAgICAgIGlmIChyZWNvcmRJZCAmJiBtb2RlICE9PSAnY3JlYXRlJykge1xuICAgICAgICAgICAgY29uc3QgcmVjZW50bHlWaWV3ZWQgPSB0aGlzLmJ1aWxkUmVjZW50bHlWaWV3ZWQobW9kdWxlLCByZWNvcmRJZCk7XG4gICAgICAgICAgICB0aGlzLmFkZFJlY2VudGx5Vmlld2VkKG1vZHVsZSwgcmVjZW50bHlWaWV3ZWQpXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBCdWlsZCBuZXcgcmVjZW50bHkgdmlld2VkXG4gICAgICogQHBhcmFtIG1vZHVsZVxuICAgICAqIEBwYXJhbSBpZFxuICAgICAqIEBwYXJhbSB2aWV3XG4gICAgICovXG4gICAgcHVibGljIGJ1aWxkUmVjZW50bHlWaWV3ZWQobW9kdWxlOiBzdHJpbmcsIGlkOiBzdHJpbmcsIHZpZXcgPSAnZGV0YWlsdmlldycpOiBSZWNlbnRseVZpZXdlZCB7XG4gICAgICAgIG1vZHVsZSA9IHRoaXMubW9kdWxlTmFtZU1hcHBlci50b0xlZ2FjeShtb2R1bGUpO1xuICAgICAgICByZXR1cm4gZGVlcENsb25lKHtcbiAgICAgICAgICAgIG1vZHVsZTogJ1RyYWNrZXInLFxuICAgICAgICAgICAgdHlwZTogJ1RyYWNrZXInLFxuICAgICAgICAgICAgYXR0cmlidXRlczoge1xuICAgICAgICAgICAgICAgIG1vZHVsZV9uYW1lOiBtb2R1bGUgPz8gJycsXG4gICAgICAgICAgICAgICAgaXRlbV9pZDogaWQgPz8gJycsXG4gICAgICAgICAgICAgICAgYWN0aW9uOiB2aWV3ID8/ICcnLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgfSBhcyBSZWNlbnRseVZpZXdlZCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQWRkIHJlY2VudGx5IHZpZXdlZFxuICAgICAqIEBwYXJhbSBtb2R1bGVcbiAgICAgKiBAcGFyYW0gdmlld2VkXG4gICAgICovXG4gICAgcHVibGljIGFkZFJlY2VudGx5Vmlld2VkKG1vZHVsZTogc3RyaW5nLCB2aWV3ZWQ6IFJlY2VudGx5Vmlld2VkKTogdm9pZCB7XG4gICAgICAgIHRoaXMuc2F2ZVJlY2VudGx5Vmlld2VkKG1vZHVsZSwgdmlld2VkKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTYXZlIHJlY2VudGx5IHZpZXdlZCB0byBiYWNrZW5kXG4gICAgICogQHBhcmFtIG1vZHVsZVxuICAgICAqIEBwYXJhbSB2aWV3ZWRcbiAgICAgKi9cbiAgICBwcm90ZWN0ZWQgc2F2ZVJlY2VudGx5Vmlld2VkKG1vZHVsZTogc3RyaW5nLCB2aWV3ZWQ6IFJlY2VudGx5Vmlld2VkKTogdm9pZCB7XG5cbiAgICAgICAgY29uc3QgcHJvY2Vzc1R5cGUgPSAnYWRkLXJlY2VudGx5LXZpZXdlZCc7XG5cbiAgICAgICAgY29uc3Qgb3B0aW9ucyA9IHtcbiAgICAgICAgICAgIHJlY2VudGx5Vmlld2VkOiB2aWV3ZWRcbiAgICAgICAgfTtcblxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIHRoaXMucHJvY2Vzc1NlcnZpY2Uuc3VibWl0KHByb2Nlc3NUeXBlLCBvcHRpb25zKS5waXBlKHRha2UoMSkpLnN1YnNjcmliZShyZXN1bHQgPT4ge1xuXG4gICAgICAgICAgICAgICAgY29uc3Qgc2F2ZWQgPSB7XG4gICAgICAgICAgICAgICAgICAgIGlkOiB2aWV3ZWQuaWQgPz8gJycsXG4gICAgICAgICAgICAgICAgICAgIG1vZHVsZTogdmlld2VkLm1vZHVsZSA/PyAnJyxcbiAgICAgICAgICAgICAgICAgICAgYXR0cmlidXRlczogey4uLih2aWV3ZWQuYXR0cmlidXRlcyA/PyB7fSl9LFxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgY29uc3QgdHJhY2tlciA9IHJlc3VsdD8uZGF0YT8udHJhY2tlciA/PyBudWxsO1xuICAgICAgICAgICAgICAgIGlmICh0cmFja2VyID09PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBzYXZlZC5hdHRyaWJ1dGVzLml0ZW1fc3VtbWFyeSA9IHRyYWNrZXIuaXRlbV9zdW1tYXJ5O1xuICAgICAgICAgICAgICAgIGNvbnN0IG5ld0l0ZW1JZCA9IHNhdmVkPy5hdHRyaWJ1dGVzPy5pdGVtX2lkID8/ICcnO1xuXG4gICAgICAgICAgICAgICAgY29uc3QgbWV0YWRhdGEgPSB0aGlzLm1ldGFkYXRhLmdldE1vZHVsZU1ldGEobW9kdWxlKTtcblxuICAgICAgICAgICAgICAgIGNvbnN0IGN1cnJlbnQgPSBtZXRhZGF0YT8ucmVjZW50bHlWaWV3ZWQgPz8gbnVsbDtcbiAgICAgICAgICAgICAgICBpZiAoY3VycmVudCkge1xuICAgICAgICAgICAgICAgICAgICBsZXQgY2xlYXJlZCA9IGN1cnJlbnQuZmlsdGVyKGl0ZW0gPT4gKChpdGVtPy5hdHRyaWJ1dGVzPy5pdGVtX2lkID8/ICcnKSAhPT0gbmV3SXRlbUlkKSk7XG4gICAgICAgICAgICAgICAgICAgIGNsZWFyZWQudW5zaGlmdChzYXZlZCk7XG4gICAgICAgICAgICAgICAgICAgIG1ldGFkYXRhLnJlY2VudGx5Vmlld2VkID0gY2xlYXJlZDtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICB0aGlzLmdsb2JhbFJlY2VudGx5Vmlld2VkU3RvcmUuYWRkVG9TdGF0ZShzYXZlZCk7XG5cbiAgICAgICAgICAgICAgICB0aGlzLm1ldGFkYXRhLnNldE1vZHVsZU1ldGFkYXRhKG1vZHVsZSwgbWV0YWRhdGEpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0sIDUwMCk7XG4gICAgfVxuXG59XG4iXX0=