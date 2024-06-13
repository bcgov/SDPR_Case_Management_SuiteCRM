import { RecordListModalStore } from '../store/record-list-modal/record-list-modal.store';
import { RecordListModalFilterAdapterInterface } from './adapter.model';
import { FilterConfig } from '../../list-filter/components/list-filter/list-filter.model';
import * as i0 from "@angular/core";
export declare class ModalRecordFilterAdapter implements RecordListModalFilterAdapterInterface {
    getConfig(store: RecordListModalStore): FilterConfig;
    static ɵfac: i0.ɵɵFactoryDeclaration<ModalRecordFilterAdapter, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<ModalRecordFilterAdapter>;
}
