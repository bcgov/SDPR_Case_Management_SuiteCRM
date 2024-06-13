import { ButtonInterface } from 'common';
import * as i0 from "@angular/core";
export declare class ModalComponent {
    klass: string;
    headerKlass: string;
    bodyKlass: string;
    footerKlass: string;
    titleKey: string;
    closable: boolean;
    close: ButtonInterface;
    static ɵfac: i0.ɵɵFactoryDeclaration<ModalComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ModalComponent, "scrm-modal", never, { "klass": { "alias": "klass"; "required": false; }; "headerKlass": { "alias": "headerKlass"; "required": false; }; "bodyKlass": { "alias": "bodyKlass"; "required": false; }; "footerKlass": { "alias": "footerKlass"; "required": false; }; "titleKey": { "alias": "titleKey"; "required": false; }; "closable": { "alias": "closable"; "required": false; }; "close": { "alias": "close"; "required": false; }; }, {}, never, ["[modal-body]", "[modal-footer]"], false, never>;
}
