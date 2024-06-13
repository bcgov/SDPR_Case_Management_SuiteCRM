import { LanguageStore } from '../../../../store/language/language.store';
import { AdminLinkGroupModel } from '../../../../store/admin-metadata/admin-metadata.model';
import * as i0 from "@angular/core";
export declare class AdminCardComponent {
    language: LanguageStore;
    content: AdminLinkGroupModel;
    constructor(language: LanguageStore);
    static ɵfac: i0.ɵɵFactoryDeclaration<AdminCardComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<AdminCardComponent, "scrm-admin-card", never, { "content": { "alias": "content"; "required": false; }; }, {}, never, never, false, never>;
}
