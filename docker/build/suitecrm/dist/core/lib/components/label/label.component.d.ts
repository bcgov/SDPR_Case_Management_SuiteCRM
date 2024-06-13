import { LanguageStore } from '../../store/language/language.store';
import * as i0 from "@angular/core";
export declare class LabelComponent {
    language: LanguageStore;
    labelKey: string;
    module: string;
    listKey: string;
    languages$: import("rxjs").Observable<import("../../store/language/language.store").LanguageStrings>;
    constructor(language: LanguageStore);
    static ɵfac: i0.ɵɵFactoryDeclaration<LabelComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<LabelComponent, "scrm-label", never, { "labelKey": { "alias": "labelKey"; "required": false; }; "module": { "alias": "module"; "required": false; }; "listKey": { "alias": "listKey"; "required": false; }; }, {}, never, never, false, never>;
}
