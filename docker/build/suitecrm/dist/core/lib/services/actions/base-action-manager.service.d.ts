import { Action, ActionData, ActionHandler, ActionHandlerMap, ActionManager, ViewMode } from 'common';
import * as i0 from "@angular/core";
export declare class BaseActionManager<D extends ActionData> implements ActionManager<D> {
    actions: {
        [key: string]: ActionHandlerMap<D>;
    };
    run(action: Action, mode: ViewMode, data: D): void;
    getHandler(action: Action, mode: ViewMode): ActionHandler<D>;
    addHandler(action: Action, mode: ViewMode, handler: ActionHandler<D>): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<BaseActionManager<any>, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<BaseActionManager<any>>;
}
