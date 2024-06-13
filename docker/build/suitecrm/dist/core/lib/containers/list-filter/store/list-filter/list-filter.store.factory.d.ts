import { MessageService } from '../../../../services/message/message.service';
import { SaveFilterStoreFactory } from '../saved-filter/saved-filter.store.factory';
import { ListFilterStore } from './list-filter.store';
import * as i0 from "@angular/core";
export declare class ListFilterStoreFactory {
    protected message: MessageService;
    protected savedFilterStoreFactory: SaveFilterStoreFactory;
    constructor(message: MessageService, savedFilterStoreFactory: SaveFilterStoreFactory);
    create(): ListFilterStore;
    static ɵfac: i0.ɵɵFactoryDeclaration<ListFilterStoreFactory, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<ListFilterStoreFactory>;
}
