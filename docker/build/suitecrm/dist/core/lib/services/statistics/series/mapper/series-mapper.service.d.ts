import { ObjectMap, SeriesResult } from 'common';
import { SeriesTraverser, SeriesVisitor, SeriesVisitorMap } from './series-traverser.service';
import { DataTypeSeriesMapper } from './data-type-mapper/data-type.series-mapper';
import * as i0 from "@angular/core";
export declare class SeriesMapper {
    protected traverser: SeriesTraverser;
    protected dataTypeMapper: DataTypeSeriesMapper;
    registry: SeriesVisitorMap;
    constructor(traverser: SeriesTraverser, dataTypeMapper: DataTypeSeriesMapper);
    addMapper(unitType: string, mapper: SeriesVisitor): void;
    map(result: SeriesResult, mapperType: string, options?: ObjectMap): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<SeriesMapper, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<SeriesMapper>;
}
