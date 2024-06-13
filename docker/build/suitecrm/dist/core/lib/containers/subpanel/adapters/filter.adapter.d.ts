import { FilterConfig } from "../../list-filter/components/list-filter/list-filter.model";
import { SubpanelStore } from "../store/subpanel/subpanel.store";
import * as i0 from "@angular/core";
export declare class SubpanelFilterAdapter {
    protected store: SubpanelStore;
    constructor(store: SubpanelStore);
    getConfig(): FilterConfig;
    static ɵfac: i0.ɵɵFactoryDeclaration<SubpanelFilterAdapter, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<SubpanelFilterAdapter>;
}
