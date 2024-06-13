import { DataItem, ObjectMap, SeriesResult } from 'common';
import * as i0 from "@angular/core";
export interface SeriesVisitor {
    visit(item: DataItem, options?: ObjectMap): void;
}
export interface SeriesVisitorMap {
    [key: string]: SeriesVisitor;
}
export declare class SeriesTraverser {
    traverse(result: SeriesResult, visitor: SeriesVisitor, options?: ObjectMap): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<SeriesTraverser, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<SeriesTraverser>;
}
