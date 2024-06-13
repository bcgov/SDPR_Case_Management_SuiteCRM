import { LineActionData } from './line.action';
import { CreateRelatedLineAction } from './create-related/create-related.action';
import { BaseActionManager } from '../../../services/actions/base-action-manager.service';
import { AsyncProcessLineAction } from './async-process/async-process.action';
import * as i0 from "@angular/core";
export declare class LineActionActionManager extends BaseActionManager<LineActionData> {
    protected createRelated: CreateRelatedLineAction;
    protected async: AsyncProcessLineAction;
    constructor(createRelated: CreateRelatedLineAction, async: AsyncProcessLineAction);
    static ɵfac: i0.ɵɵFactoryDeclaration<LineActionActionManager, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<LineActionActionManager>;
}
