import { BaseWidgetComponent } from '../../../widgets/base-widget.model';
import { SidebarWidgetRegistry } from './sidebar-widget.registry';
import * as i0 from "@angular/core";
export declare class SidebarWidgetComponent extends BaseWidgetComponent {
    protected registry: SidebarWidgetRegistry;
    type: string;
    constructor(registry: SidebarWidgetRegistry);
    get componentType(): any;
    getErrorMessage(): string;
    static ɵfac: i0.ɵɵFactoryDeclaration<SidebarWidgetComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<SidebarWidgetComponent, "scrm-sidebar-widget", never, { "type": { "alias": "type"; "required": false; }; }, {}, never, never, false, never>;
}
