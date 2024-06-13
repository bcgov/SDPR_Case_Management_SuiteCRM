import { UnitConverter, UnitConverterOptions } from './unit-converter.model';
import { CurrencyUnitConverter } from './currency/currency.unit-converter';
import * as i0 from "@angular/core";
export interface UnitConverterMap {
    [key: string]: UnitConverter;
}
export declare class DataTypeUnitConverter {
    protected currencyUnitConverter: CurrencyUnitConverter;
    map: UnitConverterMap;
    constructor(currencyUnitConverter: CurrencyUnitConverter);
    addUnitConverter(unitType: string, unitConverter: UnitConverter): void;
    toUserFormat(dataType: string, value: string, options?: UnitConverterOptions): string;
    toInternalFormat(dataType: string, value: string): string;
    static ɵfac: i0.ɵɵFactoryDeclaration<DataTypeUnitConverter, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<DataTypeUnitConverter>;
}
