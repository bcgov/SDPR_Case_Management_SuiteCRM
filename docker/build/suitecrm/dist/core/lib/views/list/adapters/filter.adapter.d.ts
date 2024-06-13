import { ListViewStore } from '../store/list-view/list-view.store';
import { FilterConfig } from '../../../containers/list-filter/components/list-filter/list-filter.model';
import * as i0 from "@angular/core";
export declare class FilterAdapter {
    protected store: ListViewStore;
    constructor(store: ListViewStore);
    getConfig(): FilterConfig;
    static ɵfac: i0.ɵɵFactoryDeclaration<FilterAdapter, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<FilterAdapter>;
}
