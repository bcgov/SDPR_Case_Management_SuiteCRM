import { SavedFilterActionData } from './saved-filter.action';
import { SavedFilterSaveAction } from './save/saved-filter-save.action';
import { SavedFilterDeleteAction } from './delete/saved-filter-delete.action';
import { BaseActionManager } from '../../../services/actions/base-action-manager.service';
import * as i0 from "@angular/core";
export declare class SavedFilterActionManager extends BaseActionManager<SavedFilterActionData> {
    constructor(save: SavedFilterSaveAction, deleteAction: SavedFilterDeleteAction);
    static ɵfac: i0.ɵɵFactoryDeclaration<SavedFilterActionManager, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<SavedFilterActionManager>;
}
