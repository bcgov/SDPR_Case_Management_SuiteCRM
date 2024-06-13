import { DataTypeUnitConverter } from '../../../../unit-converters/data-type.unit-converter.service';
import { SeriesVisitor } from '../series-traverser.service';
import { DataItem, ObjectMap } from 'common';
import * as i0 from "@angular/core";
export declare class DataTypeSeriesMapper implements SeriesVisitor {
    protected converter: DataTypeUnitConverter;
    constructor(converter: DataTypeUnitConverter);
    visit(item: DataItem, options?: ObjectMap): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<DataTypeSeriesMapper, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<DataTypeSeriesMapper>;
}
