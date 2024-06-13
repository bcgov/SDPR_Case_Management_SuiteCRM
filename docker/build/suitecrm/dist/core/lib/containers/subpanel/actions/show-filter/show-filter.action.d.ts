import { ViewMode } from 'common';
import { SubpanelActionData, SubpanelActionHandler } from '../subpanel.action';
import { SubpanelStore } from "../../store/subpanel/subpanel.store";
import * as i0 from "@angular/core";
export declare class SubpanelShowFilterAction extends SubpanelActionHandler {
    key: string;
    modes: ViewMode[];
    shouldDisplay(data: SubpanelActionData): boolean;
    getStatus(data: SubpanelActionData): string;
    run(data: SubpanelActionData): void;
    isAnyFilterApplied(store: SubpanelStore): boolean;
    static ɵfac: i0.ɵɵFactoryDeclaration<SubpanelShowFilterAction, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<SubpanelShowFilterAction>;
}
