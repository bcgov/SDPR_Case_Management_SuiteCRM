import { Record, RecordMapper } from 'common';
import * as i0 from "@angular/core";
export declare class BaseSaveRecordMapper implements RecordMapper {
    getKey(): string;
    map(record: Record): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<BaseSaveRecordMapper, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<BaseSaveRecordMapper>;
}
