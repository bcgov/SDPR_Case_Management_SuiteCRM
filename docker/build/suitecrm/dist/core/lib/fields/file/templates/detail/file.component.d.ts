import { BaseFieldComponent } from '../../../base/base-field.component';
import { DataTypeFormatter } from '../../../../services/formatters/data-type.formatter.service';
import { FieldLogicManager } from '../../../field-logic/field-logic.manager';
import { LegacyEntrypointLinkBuilder } from "../../../../services/navigation/legacy-entrypoint-link-builder/legacy-entrypoint-link-builder.service";
import { FieldLogicDisplayManager } from "../../../field-logic-display/field-logic-display.manager";
import * as i0 from "@angular/core";
export declare class FileDetailFieldComponent extends BaseFieldComponent {
    protected typeFormatter: DataTypeFormatter;
    protected logic: FieldLogicManager;
    protected logicDisplay: FieldLogicDisplayManager;
    private legacyEntrypointLinkBuilder;
    filenameLink: string;
    constructor(typeFormatter: DataTypeFormatter, logic: FieldLogicManager, logicDisplay: FieldLogicDisplayManager, legacyEntrypointLinkBuilder: LegacyEntrypointLinkBuilder);
    ngOnInit(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<FileDetailFieldComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<FileDetailFieldComponent, "scrm-file-detail", never, {}, {}, never, never, false, never>;
}
