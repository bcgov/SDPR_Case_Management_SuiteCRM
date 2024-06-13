import { deepClone } from 'common';
import { Injectable } from '@angular/core';
import * as i0 from "@angular/core";
class SavedSearchRecordMapper {
    getKey() {
        return 'criteria';
    }
    map(record) {
        const savedFilter = record;
        if (savedFilter.criteria) {
            const contents = savedFilter?.attributes?.contents ?? {};
            const filters = savedFilter?.criteria?.filters ?? {};
            contents.filters = deepClone(filters);
            if (record.fields.name) {
                contents.name = record.fields.name.value;
                savedFilter.criteria.name = contents.name;
            }
            if (record.fields.orderBy) {
                contents.orderBy = record.fields.orderBy.value;
                savedFilter.criteria.orderBy = contents.orderBy;
            }
            if (record.fields.sortOrder) {
                contents.sortOrder = record.fields.sortOrder.value;
                savedFilter.criteria.sortOrder = contents.sortOrder;
            }
            if (record.attributes.search_module) {
                contents.searchModule = record.attributes.search_module;
                savedFilter.criteria.searchModule = contents.searchModule;
            }
            savedFilter.attributes.contents = contents;
        }
        let key = savedFilter.key || '';
        if (key === 'default') {
            key = '';
        }
        savedFilter.id = key;
        savedFilter.attributes.id = key;
    }
    static { this.ɵfac = function SavedSearchRecordMapper_Factory(t) { return new (t || SavedSearchRecordMapper)(); }; }
    static { this.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: SavedSearchRecordMapper, factory: SavedSearchRecordMapper.ɵfac, providedIn: 'root' }); }
}
export { SavedSearchRecordMapper };
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(SavedSearchRecordMapper, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2F2ZWQtc2VhcmNoLnJlY29yZC1tYXBwZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9jb3JlL2FwcC9jb3JlL3NyYy9saWIvY29udGFpbmVycy9saXN0LWZpbHRlci9zdG9yZS9zYXZlZC1maWx0ZXIvcmVjb3JkLW1hcHBlcnMvc2F2ZWQtc2VhcmNoLnJlY29yZC1tYXBwZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFDLFNBQVMsRUFBdUIsTUFBTSxRQUFRLENBQUM7QUFDdkQsT0FBTyxFQUFDLFVBQVUsRUFBQyxNQUFNLGVBQWUsQ0FBQzs7QUFHekMsTUFHYSx1QkFBdUI7SUFFaEMsTUFBTTtRQUNGLE9BQU8sVUFBVSxDQUFDO0lBQ3RCLENBQUM7SUFFRCxHQUFHLENBQUMsTUFBYztRQUNkLE1BQU0sV0FBVyxHQUFnQixNQUFNLENBQUM7UUFDeEMsSUFBSSxXQUFXLENBQUMsUUFBUSxFQUFFO1lBQ3RCLE1BQU0sUUFBUSxHQUFHLFdBQVcsRUFBRSxVQUFVLEVBQUUsUUFBUSxJQUFJLEVBQUUsQ0FBQztZQUN6RCxNQUFNLE9BQU8sR0FBRyxXQUFXLEVBQUUsUUFBUSxFQUFFLE9BQU8sSUFBSSxFQUFFLENBQUM7WUFDckQsUUFBUSxDQUFDLE9BQU8sR0FBRyxTQUFTLENBQUMsT0FBTyxDQUFDLENBQUM7WUFFdEMsSUFBSSxNQUFNLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRTtnQkFDcEIsUUFBUSxDQUFDLElBQUksR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUM7Z0JBQ3pDLFdBQVcsQ0FBQyxRQUFRLENBQUMsSUFBSSxHQUFHLFFBQVEsQ0FBQyxJQUFJLENBQUM7YUFDN0M7WUFFRCxJQUFJLE1BQU0sQ0FBQyxNQUFNLENBQUMsT0FBTyxFQUFFO2dCQUN2QixRQUFRLENBQUMsT0FBTyxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQztnQkFDL0MsV0FBVyxDQUFDLFFBQVEsQ0FBQyxPQUFPLEdBQUcsUUFBUSxDQUFDLE9BQU8sQ0FBQzthQUNuRDtZQUVELElBQUksTUFBTSxDQUFDLE1BQU0sQ0FBQyxTQUFTLEVBQUU7Z0JBQ3pCLFFBQVEsQ0FBQyxTQUFTLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDO2dCQUNuRCxXQUFXLENBQUMsUUFBUSxDQUFDLFNBQVMsR0FBRyxRQUFRLENBQUMsU0FBUyxDQUFDO2FBQ3ZEO1lBRUQsSUFBSSxNQUFNLENBQUMsVUFBVSxDQUFDLGFBQWEsRUFBRTtnQkFDakMsUUFBUSxDQUFDLFlBQVksR0FBRyxNQUFNLENBQUMsVUFBVSxDQUFDLGFBQWEsQ0FBQztnQkFDeEQsV0FBVyxDQUFDLFFBQVEsQ0FBQyxZQUFZLEdBQUcsUUFBUSxDQUFDLFlBQVksQ0FBQzthQUM3RDtZQUVELFdBQVcsQ0FBQyxVQUFVLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQztTQUM5QztRQUVELElBQUksR0FBRyxHQUFHLFdBQVcsQ0FBQyxHQUFHLElBQUksRUFBRSxDQUFDO1FBQ2hDLElBQUksR0FBRyxLQUFLLFNBQVMsRUFBRTtZQUNuQixHQUFHLEdBQUcsRUFBRSxDQUFDO1NBQ1o7UUFFRCxXQUFXLENBQUMsRUFBRSxHQUFHLEdBQUcsQ0FBQztRQUNyQixXQUFXLENBQUMsVUFBVSxDQUFDLEVBQUUsR0FBRyxHQUFHLENBQUM7SUFDcEMsQ0FBQzt3RkEzQ1EsdUJBQXVCO3VFQUF2Qix1QkFBdUIsV0FBdkIsdUJBQXVCLG1CQUZwQixNQUFNOztTQUVULHVCQUF1Qjt1RkFBdkIsdUJBQXVCO2NBSG5DLFVBQVU7ZUFBQztnQkFDUixVQUFVLEVBQUUsTUFBTTthQUNyQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7ZGVlcENsb25lLCBSZWNvcmQsIFJlY29yZE1hcHBlcn0gZnJvbSAnY29tbW9uJztcbmltcG9ydCB7SW5qZWN0YWJsZX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1NhdmVkRmlsdGVyfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9zdG9yZS9zYXZlZC1maWx0ZXJzL3NhdmVkLWZpbHRlci5tb2RlbCc7XG5cbkBJbmplY3RhYmxlKHtcbiAgICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgU2F2ZWRTZWFyY2hSZWNvcmRNYXBwZXIgaW1wbGVtZW50cyBSZWNvcmRNYXBwZXIge1xuXG4gICAgZ2V0S2V5KCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiAnY3JpdGVyaWEnO1xuICAgIH1cblxuICAgIG1hcChyZWNvcmQ6IFJlY29yZCk6IHZvaWQge1xuICAgICAgICBjb25zdCBzYXZlZEZpbHRlcjogU2F2ZWRGaWx0ZXIgPSByZWNvcmQ7XG4gICAgICAgIGlmIChzYXZlZEZpbHRlci5jcml0ZXJpYSkge1xuICAgICAgICAgICAgY29uc3QgY29udGVudHMgPSBzYXZlZEZpbHRlcj8uYXR0cmlidXRlcz8uY29udGVudHMgPz8ge307XG4gICAgICAgICAgICBjb25zdCBmaWx0ZXJzID0gc2F2ZWRGaWx0ZXI/LmNyaXRlcmlhPy5maWx0ZXJzID8/IHt9O1xuICAgICAgICAgICAgY29udGVudHMuZmlsdGVycyA9IGRlZXBDbG9uZShmaWx0ZXJzKTtcblxuICAgICAgICAgICAgaWYgKHJlY29yZC5maWVsZHMubmFtZSkge1xuICAgICAgICAgICAgICAgIGNvbnRlbnRzLm5hbWUgPSByZWNvcmQuZmllbGRzLm5hbWUudmFsdWU7XG4gICAgICAgICAgICAgICAgc2F2ZWRGaWx0ZXIuY3JpdGVyaWEubmFtZSA9IGNvbnRlbnRzLm5hbWU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChyZWNvcmQuZmllbGRzLm9yZGVyQnkpIHtcbiAgICAgICAgICAgICAgICBjb250ZW50cy5vcmRlckJ5ID0gcmVjb3JkLmZpZWxkcy5vcmRlckJ5LnZhbHVlO1xuICAgICAgICAgICAgICAgIHNhdmVkRmlsdGVyLmNyaXRlcmlhLm9yZGVyQnkgPSBjb250ZW50cy5vcmRlckJ5O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAocmVjb3JkLmZpZWxkcy5zb3J0T3JkZXIpIHtcbiAgICAgICAgICAgICAgICBjb250ZW50cy5zb3J0T3JkZXIgPSByZWNvcmQuZmllbGRzLnNvcnRPcmRlci52YWx1ZTtcbiAgICAgICAgICAgICAgICBzYXZlZEZpbHRlci5jcml0ZXJpYS5zb3J0T3JkZXIgPSBjb250ZW50cy5zb3J0T3JkZXI7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChyZWNvcmQuYXR0cmlidXRlcy5zZWFyY2hfbW9kdWxlKSB7XG4gICAgICAgICAgICAgICAgY29udGVudHMuc2VhcmNoTW9kdWxlID0gcmVjb3JkLmF0dHJpYnV0ZXMuc2VhcmNoX21vZHVsZTtcbiAgICAgICAgICAgICAgICBzYXZlZEZpbHRlci5jcml0ZXJpYS5zZWFyY2hNb2R1bGUgPSBjb250ZW50cy5zZWFyY2hNb2R1bGU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHNhdmVkRmlsdGVyLmF0dHJpYnV0ZXMuY29udGVudHMgPSBjb250ZW50cztcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCBrZXkgPSBzYXZlZEZpbHRlci5rZXkgfHwgJyc7XG4gICAgICAgIGlmIChrZXkgPT09ICdkZWZhdWx0Jykge1xuICAgICAgICAgICAga2V5ID0gJyc7XG4gICAgICAgIH1cblxuICAgICAgICBzYXZlZEZpbHRlci5pZCA9IGtleTtcbiAgICAgICAgc2F2ZWRGaWx0ZXIuYXR0cmlidXRlcy5pZCA9IGtleTtcbiAgICB9XG59XG4iXX0=