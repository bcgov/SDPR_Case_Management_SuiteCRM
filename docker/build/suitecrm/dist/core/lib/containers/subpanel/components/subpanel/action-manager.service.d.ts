import { SubpanelCreateAction } from '../../actions/create/create.action';
import { SubpanelActionData } from '../../actions/subpanel.action';
import { SubpanelSelectAction } from "../../actions/select/select.action";
import { AsyncProcessSubpanelAction } from '../../actions/async-process/async-process.action';
import { SubpanelShowFilterAction } from "../../actions/show-filter/show-filter.action";
import { BaseActionManager } from "../../../../services/actions/base-action-manager.service";
import { SubpanelClearFilterAction } from "../../actions/clear-filter/clear-filter.action";
import * as i0 from "@angular/core";
export declare class SubpanelActionManager extends BaseActionManager<SubpanelActionData> {
    protected create: SubpanelCreateAction;
    protected select: SubpanelSelectAction;
    protected async: AsyncProcessSubpanelAction;
    protected showFilter: SubpanelShowFilterAction;
    protected clearFilter: SubpanelClearFilterAction;
    constructor(create: SubpanelCreateAction, select: SubpanelSelectAction, async: AsyncProcessSubpanelAction, showFilter: SubpanelShowFilterAction, clearFilter: SubpanelClearFilterAction);
    static ɵfac: i0.ɵɵFactoryDeclaration<SubpanelActionManager, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<SubpanelActionManager>;
}
