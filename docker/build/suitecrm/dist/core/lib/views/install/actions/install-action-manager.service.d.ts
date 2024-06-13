import { InstallViewActionData } from './install-view.action';
import { BaseActionManager } from '../../../services/actions/base-action-manager.service';
import { InstallAction } from './install/install.action';
import * as i0 from "@angular/core";
export declare class InstallActionManager extends BaseActionManager<InstallViewActionData> {
    protected save: InstallAction;
    constructor(save: InstallAction);
    static ɵfac: i0.ɵɵFactoryDeclaration<InstallActionManager, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<InstallActionManager>;
}
