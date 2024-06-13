/**
 * SuiteCRM is a customer relationship management program developed by SalesAgility Ltd.
 * Copyright (C) 2021 SalesAgility Ltd.
 *
 * This program is free software; you can redistribute it and/or modify it under
 * the terms of the GNU Affero General Public License version 3 as published by the
 * Free Software Foundation with the addition of the following permission added
 * to Section 15 as permitted in Section 7(a): FOR ANY PART OF THE COVERED WORK
 * IN WHICH THE COPYRIGHT IS OWNED BY SALESAGILITY, SALESAGILITY DISCLAIMS THE
 * WARRANTY OF NON INFRINGEMENT OF THIRD PARTY RIGHTS.
 *
 * This program is distributed in the hope that it will be useful, but WITHOUT
 * ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS
 * FOR A PARTICULAR PURPOSE. See the GNU Affero General Public License for more
 * details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 *
 * In accordance with Section 7(b) of the GNU Affero General Public License
 * version 3, these Appropriate Legal Notices must retain the display of the
 * "Supercharged by SuiteCRM" logo. If the display of the logos is not reasonably
 * feasible for technical reasons, the Appropriate Legal Notices must display
 * the words "Supercharged by SuiteCRM".
 */
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { BaseFieldComponent } from '../../../base/base-field.component';
import { DataTypeFormatter } from '../../../../services/formatters/data-type.formatter.service';
import { FieldLogicManager } from '../../../field-logic/field-logic.manager';
import { SystemConfigStore } from '../../../../store/system-config/system-config.store';
import { merge } from 'lodash-es';
import { FieldLogicDisplayManager } from '../../../field-logic-display/field-logic-display.manager';
import * as i0 from "@angular/core";
import * as i1 from "../../../../services/formatters/data-type.formatter.service";
import * as i2 from "../../../field-logic/field-logic.manager";
import * as i3 from "../../../field-logic-display/field-logic-display.manager";
import * as i4 from "../../../../store/system-config/system-config.store";
import * as i5 from "@angular/forms";
import * as i6 from "@tinymce/tinymce-angular";
class TinymceEditFieldComponent extends BaseFieldComponent {
    constructor(typeFormatter, logic, logicDisplay, config) {
        super(typeFormatter, logic, logicDisplay);
        this.typeFormatter = typeFormatter;
        this.logic = logic;
        this.logicDisplay = logicDisplay;
        this.config = config;
        this.settings = {};
        this.modelEvents = 'change';
        this.ignoreEvents = "onKeyDown,onKeyPress,onKeyUp,onSelectionChange";
        this.value = '';
    }
    ngOnInit() {
        super.ngOnInit();
        this.initSettings();
        this.subscribeValueChanges();
        this.value = this.field.value ?? '';
    }
    ngOnDestroy() {
        this.unsubscribeAll();
    }
    initSettings() {
        const defaults = {
            height: 300,
            menubar: false,
            deprecation_warnings: false,
            plugins: [
                'advlist autolink lists link image charmap print preview anchor',
                'searchreplace visualblocks code fullscreen',
                'insertdatetime media table paste code help wordcount'
            ],
            toolbar: 'undo redo | formatselect | bold italic backcolor | alignleft aligncenter alignright alignjustify |  bullist numlist outdent indent | removeformat | help',
            toolbar_mode: 'floating',
        };
        const ui = this.config.getConfigValue('ui');
        const systemDefaults = ui?.tinymce?.edit ?? {};
        const fieldConfig = this?.field?.metadata?.tinymce?.edit ?? {};
        let settings = {};
        settings = merge(settings, defaults, systemDefaults, fieldConfig);
        this.modelEvents = settings?.modelEvents ?? 'change';
        this.ignoreEvents = settings?.ignoreEvents ?? "onKeyDown,onKeyPress,onKeyUp,onSelectionChange";
        this.settings = settings;
    }
    setModel() {
        this.field.formControl.setValue(this.value);
    }
    static { this.ɵfac = function TinymceEditFieldComponent_Factory(t) { return new (t || TinymceEditFieldComponent)(i0.ɵɵdirectiveInject(i1.DataTypeFormatter), i0.ɵɵdirectiveInject(i2.FieldLogicManager), i0.ɵɵdirectiveInject(i3.FieldLogicDisplayManager), i0.ɵɵdirectiveInject(i4.SystemConfigStore)); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: TinymceEditFieldComponent, selectors: [["scrm-tinymce-edit"]], features: [i0.ɵɵInheritDefinitionFeature], decls: 1, vars: 4, consts: [[1, "field-html", 3, "init", "modelEvents", "ignoreEvents", "formControl"]], template: function TinymceEditFieldComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelement(0, "editor", 0);
        } if (rf & 2) {
            i0.ɵɵproperty("init", ctx.settings)("modelEvents", ctx.modelEvents)("ignoreEvents", ctx.ignoreEvents)("formControl", ctx.field.formControl);
        } }, dependencies: [i5.NgControlStatus, i6.EditorComponent, i5.FormControlDirective], encapsulation: 2, changeDetection: 0 }); }
}
export { TinymceEditFieldComponent };
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(TinymceEditFieldComponent, [{
        type: Component,
        args: [{ selector: 'scrm-tinymce-edit', changeDetection: ChangeDetectionStrategy.OnPush, template: "<! --\n/**\n* SuiteCRM is a customer relationship management program developed by SalesAgility Ltd.\n* Copyright (C) 2021 SalesAgility Ltd.\n*\n* This program is free software; you can redistribute it and/or modify it under\n* the terms of the GNU Affero General Public License version 3 as published by the\n* Free Software Foundation with the addition of the following permission added\n* to Section 15 as permitted in Section 7(a): FOR ANY PART OF THE COVERED WORK\n* IN WHICH THE COPYRIGHT IS OWNED BY SALESAGILITY, SALESAGILITY DISCLAIMS THE\n* WARRANTY OF NON INFRINGEMENT OF THIRD PARTY RIGHTS.\n*\n* This program is distributed in the hope that it will be useful, but WITHOUT\n* ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS\n* FOR A PARTICULAR PURPOSE. See the GNU Affero General Public License for more\n* details.\n*\n* You should have received a copy of the GNU Affero General Public License\n* along with this program.  If not, see http://www.gnu.org/licenses.\n*\n* In accordance with Section 7(b) of the GNU Affero General Public License\n* version 3, these Appropriate Legal Notices must retain the display of the\n* \"Supercharged by SuiteCRM\" logo. If the display of the logos is not reasonably\n* feasible for technical reasons, the Appropriate Legal Notices must display\n* the words \"Supercharged by SuiteCRM\".\n*/\n-->\n<editor\n    class=\"field-html\"\n    [init]=\"settings\"\n    [modelEvents]=\"modelEvents\"\n    [ignoreEvents]=\"ignoreEvents\"\n    [formControl]=\"field.formControl\"\n></editor>\n" }]
    }], function () { return [{ type: i1.DataTypeFormatter }, { type: i2.FieldLogicManager }, { type: i3.FieldLogicDisplayManager }, { type: i4.SystemConfigStore }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGlueW1jZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9jb3JlL2FwcC9jb3JlL3NyYy9saWIvZmllbGRzL3RpbnltY2UvdGVtcGxhdGVzL2VkaXQvdGlueW1jZS5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9jb3JlL2FwcC9jb3JlL3NyYy9saWIvZmllbGRzL3RpbnltY2UvdGVtcGxhdGVzL2VkaXQvdGlueW1jZS5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBd0JHO0FBRUgsT0FBTyxFQUFDLHVCQUF1QixFQUFFLFNBQVMsRUFBWSxNQUFNLGVBQWUsQ0FBQztBQUM1RSxPQUFPLEVBQUMsa0JBQWtCLEVBQUMsTUFBTSxvQ0FBb0MsQ0FBQztBQUN0RSxPQUFPLEVBQUMsaUJBQWlCLEVBQUMsTUFBTSw2REFBNkQsQ0FBQztBQUM5RixPQUFPLEVBQUMsaUJBQWlCLEVBQUMsTUFBTSwwQ0FBMEMsQ0FBQztBQUMzRSxPQUFPLEVBQUMsaUJBQWlCLEVBQUMsTUFBTSxxREFBcUQsQ0FBQztBQUN0RixPQUFPLEVBQUMsS0FBSyxFQUFDLE1BQU0sV0FBVyxDQUFDO0FBQ2hDLE9BQU8sRUFBQyx3QkFBd0IsRUFBQyxNQUFNLDBEQUEwRCxDQUFDOzs7Ozs7OztBQUVsRyxNQU1hLHlCQUEwQixTQUFRLGtCQUFrQjtJQU83RCxZQUNjLGFBQWdDLEVBQ2hDLEtBQXdCLEVBQ3hCLFlBQXNDLEVBQ3RDLE1BQXlCO1FBRW5DLEtBQUssQ0FBQyxhQUFhLEVBQUUsS0FBSyxFQUFFLFlBQVksQ0FBQyxDQUFDO1FBTGhDLGtCQUFhLEdBQWIsYUFBYSxDQUFtQjtRQUNoQyxVQUFLLEdBQUwsS0FBSyxDQUFtQjtRQUN4QixpQkFBWSxHQUFaLFlBQVksQ0FBMEI7UUFDdEMsV0FBTSxHQUFOLE1BQU0sQ0FBbUI7UUFUdkMsYUFBUSxHQUFRLEVBQUUsQ0FBQztRQUNuQixnQkFBVyxHQUFHLFFBQVEsQ0FBQTtRQUN0QixpQkFBWSxHQUFHLGdEQUFnRCxDQUFBO1FBQy9ELFVBQUssR0FBVyxFQUFFLENBQUM7SUFTbkIsQ0FBQztJQUVELFFBQVE7UUFDSixLQUFLLENBQUMsUUFBUSxFQUFFLENBQUM7UUFDakIsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO1FBQ3BCLElBQUksQ0FBQyxxQkFBcUIsRUFBRSxDQUFDO1FBQzdCLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLElBQUksRUFBRSxDQUFDO0lBQ3hDLENBQUM7SUFFRCxXQUFXO1FBQ1AsSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDO0lBQzFCLENBQUM7SUFFRCxZQUFZO1FBRVIsTUFBTSxRQUFRLEdBQUc7WUFDYixNQUFNLEVBQUUsR0FBRztZQUNYLE9BQU8sRUFBRSxLQUFLO1lBQ2Qsb0JBQW9CLEVBQUUsS0FBSztZQUMzQixPQUFPLEVBQUU7Z0JBQ0wsZ0VBQWdFO2dCQUNoRSw0Q0FBNEM7Z0JBQzVDLHNEQUFzRDthQUN6RDtZQUNELE9BQU8sRUFBRSwwSkFBMEo7WUFDbkssWUFBWSxFQUFFLFVBQVU7U0FDM0IsQ0FBQztRQUVGLE1BQU0sRUFBRSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQzVDLE1BQU0sY0FBYyxHQUFHLEVBQUUsRUFBRSxPQUFPLEVBQUUsSUFBSSxJQUFJLEVBQUUsQ0FBQztRQUMvQyxNQUFNLFdBQVcsR0FBRyxJQUFJLEVBQUUsS0FBSyxFQUFFLFFBQVEsRUFBRSxPQUFPLEVBQUUsSUFBSSxJQUFJLEVBQUUsQ0FBQztRQUMvRCxJQUFJLFFBQVEsR0FBRyxFQUFTLENBQUM7UUFFekIsUUFBUSxHQUFHLEtBQUssQ0FBQyxRQUFRLEVBQUUsUUFBUSxFQUFFLGNBQWMsRUFBRSxXQUFXLENBQUMsQ0FBQztRQUVsRSxJQUFJLENBQUMsV0FBVyxHQUFHLFFBQVEsRUFBRSxXQUFXLElBQUksUUFBUSxDQUFBO1FBQ3BELElBQUksQ0FBQyxZQUFZLEdBQUcsUUFBUSxFQUFFLFlBQVksSUFBSSxnREFBZ0QsQ0FBQTtRQUU5RixJQUFJLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQztJQUM3QixDQUFDO0lBRUQsUUFBUTtRQUNKLElBQUksQ0FBQyxLQUFLLENBQUMsV0FBVyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDaEQsQ0FBQzswRkF6RFEseUJBQXlCO29FQUF6Qix5QkFBeUI7WUNidEMsNEJBTVU7O1lBSk4sbUNBQWlCLGdDQUFBLGtDQUFBLHNDQUFBOzs7U0RXUix5QkFBeUI7dUZBQXpCLHlCQUF5QjtjQU5yQyxTQUFTOzJCQUNJLG1CQUFtQixtQkFHWix1QkFBdUIsQ0FBQyxNQUFNIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBTdWl0ZUNSTSBpcyBhIGN1c3RvbWVyIHJlbGF0aW9uc2hpcCBtYW5hZ2VtZW50IHByb2dyYW0gZGV2ZWxvcGVkIGJ5IFNhbGVzQWdpbGl0eSBMdGQuXG4gKiBDb3B5cmlnaHQgKEMpIDIwMjEgU2FsZXNBZ2lsaXR5IEx0ZC5cbiAqXG4gKiBUaGlzIHByb2dyYW0gaXMgZnJlZSBzb2Z0d2FyZTsgeW91IGNhbiByZWRpc3RyaWJ1dGUgaXQgYW5kL29yIG1vZGlmeSBpdCB1bmRlclxuICogdGhlIHRlcm1zIG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgdmVyc2lvbiAzIGFzIHB1Ymxpc2hlZCBieSB0aGVcbiAqIEZyZWUgU29mdHdhcmUgRm91bmRhdGlvbiB3aXRoIHRoZSBhZGRpdGlvbiBvZiB0aGUgZm9sbG93aW5nIHBlcm1pc3Npb24gYWRkZWRcbiAqIHRvIFNlY3Rpb24gMTUgYXMgcGVybWl0dGVkIGluIFNlY3Rpb24gNyhhKTogRk9SIEFOWSBQQVJUIE9GIFRIRSBDT1ZFUkVEIFdPUktcbiAqIElOIFdISUNIIFRIRSBDT1BZUklHSFQgSVMgT1dORUQgQlkgU0FMRVNBR0lMSVRZLCBTQUxFU0FHSUxJVFkgRElTQ0xBSU1TIFRIRVxuICogV0FSUkFOVFkgT0YgTk9OIElORlJJTkdFTUVOVCBPRiBUSElSRCBQQVJUWSBSSUdIVFMuXG4gKlxuICogVGhpcyBwcm9ncmFtIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsIGJ1dCBXSVRIT1VUXG4gKiBBTlkgV0FSUkFOVFk7IHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZiBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTU1xuICogRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLiBTZWUgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBmb3IgbW9yZVxuICogZGV0YWlscy5cbiAqXG4gKiBZb3Ugc2hvdWxkIGhhdmUgcmVjZWl2ZWQgYSBjb3B5IG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiAqIGFsb25nIHdpdGggdGhpcyBwcm9ncmFtLiAgSWYgbm90LCBzZWUgPGh0dHA6Ly93d3cuZ251Lm9yZy9saWNlbnNlcy8+LlxuICpcbiAqIEluIGFjY29yZGFuY2Ugd2l0aCBTZWN0aW9uIDcoYikgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuICogdmVyc2lvbiAzLCB0aGVzZSBBcHByb3ByaWF0ZSBMZWdhbCBOb3RpY2VzIG11c3QgcmV0YWluIHRoZSBkaXNwbGF5IG9mIHRoZVxuICogXCJTdXBlcmNoYXJnZWQgYnkgU3VpdGVDUk1cIiBsb2dvLiBJZiB0aGUgZGlzcGxheSBvZiB0aGUgbG9nb3MgaXMgbm90IHJlYXNvbmFibHlcbiAqIGZlYXNpYmxlIGZvciB0ZWNobmljYWwgcmVhc29ucywgdGhlIEFwcHJvcHJpYXRlIExlZ2FsIE5vdGljZXMgbXVzdCBkaXNwbGF5XG4gKiB0aGUgd29yZHMgXCJTdXBlcmNoYXJnZWQgYnkgU3VpdGVDUk1cIi5cbiAqL1xuXG5pbXBvcnQge0NoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBDb21wb25lbnQsIE9uRGVzdHJveX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0Jhc2VGaWVsZENvbXBvbmVudH0gZnJvbSAnLi4vLi4vLi4vYmFzZS9iYXNlLWZpZWxkLmNvbXBvbmVudCc7XG5pbXBvcnQge0RhdGFUeXBlRm9ybWF0dGVyfSBmcm9tICcuLi8uLi8uLi8uLi9zZXJ2aWNlcy9mb3JtYXR0ZXJzL2RhdGEtdHlwZS5mb3JtYXR0ZXIuc2VydmljZSc7XG5pbXBvcnQge0ZpZWxkTG9naWNNYW5hZ2VyfSBmcm9tICcuLi8uLi8uLi9maWVsZC1sb2dpYy9maWVsZC1sb2dpYy5tYW5hZ2VyJztcbmltcG9ydCB7U3lzdGVtQ29uZmlnU3RvcmV9IGZyb20gJy4uLy4uLy4uLy4uL3N0b3JlL3N5c3RlbS1jb25maWcvc3lzdGVtLWNvbmZpZy5zdG9yZSc7XG5pbXBvcnQge21lcmdlfSBmcm9tICdsb2Rhc2gtZXMnO1xuaW1wb3J0IHtGaWVsZExvZ2ljRGlzcGxheU1hbmFnZXJ9IGZyb20gJy4uLy4uLy4uL2ZpZWxkLWxvZ2ljLWRpc3BsYXkvZmllbGQtbG9naWMtZGlzcGxheS5tYW5hZ2VyJztcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdzY3JtLXRpbnltY2UtZWRpdCcsXG4gICAgdGVtcGxhdGVVcmw6ICcuL3RpbnltY2UuY29tcG9uZW50Lmh0bWwnLFxuICAgIHN0eWxlVXJsczogW10sXG4gICAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2hcbn0pXG5leHBvcnQgY2xhc3MgVGlueW1jZUVkaXRGaWVsZENvbXBvbmVudCBleHRlbmRzIEJhc2VGaWVsZENvbXBvbmVudCBpbXBsZW1lbnRzIE9uRGVzdHJveSB7XG5cbiAgICBzZXR0aW5nczogYW55ID0ge307XG4gICAgbW9kZWxFdmVudHMgPSAnY2hhbmdlJ1xuICAgIGlnbm9yZUV2ZW50cyA9IFwib25LZXlEb3duLG9uS2V5UHJlc3Msb25LZXlVcCxvblNlbGVjdGlvbkNoYW5nZVwiXG4gICAgdmFsdWU6IHN0cmluZyA9ICcnO1xuXG4gICAgY29uc3RydWN0b3IoXG4gICAgICAgIHByb3RlY3RlZCB0eXBlRm9ybWF0dGVyOiBEYXRhVHlwZUZvcm1hdHRlcixcbiAgICAgICAgcHJvdGVjdGVkIGxvZ2ljOiBGaWVsZExvZ2ljTWFuYWdlcixcbiAgICAgICAgcHJvdGVjdGVkIGxvZ2ljRGlzcGxheTogRmllbGRMb2dpY0Rpc3BsYXlNYW5hZ2VyLFxuICAgICAgICBwcm90ZWN0ZWQgY29uZmlnOiBTeXN0ZW1Db25maWdTdG9yZVxuICAgICkge1xuICAgICAgICBzdXBlcih0eXBlRm9ybWF0dGVyLCBsb2dpYywgbG9naWNEaXNwbGF5KTtcbiAgICB9XG5cbiAgICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICAgICAgc3VwZXIubmdPbkluaXQoKTtcbiAgICAgICAgdGhpcy5pbml0U2V0dGluZ3MoKTtcbiAgICAgICAgdGhpcy5zdWJzY3JpYmVWYWx1ZUNoYW5nZXMoKTtcbiAgICAgICAgdGhpcy52YWx1ZSA9IHRoaXMuZmllbGQudmFsdWUgPz8gJyc7XG4gICAgfVxuXG4gICAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgICAgIHRoaXMudW5zdWJzY3JpYmVBbGwoKTtcbiAgICB9XG5cbiAgICBpbml0U2V0dGluZ3MoKTogdm9pZCB7XG5cbiAgICAgICAgY29uc3QgZGVmYXVsdHMgPSB7XG4gICAgICAgICAgICBoZWlnaHQ6IDMwMCxcbiAgICAgICAgICAgIG1lbnViYXI6IGZhbHNlLFxuICAgICAgICAgICAgZGVwcmVjYXRpb25fd2FybmluZ3M6IGZhbHNlLFxuICAgICAgICAgICAgcGx1Z2luczogW1xuICAgICAgICAgICAgICAgICdhZHZsaXN0IGF1dG9saW5rIGxpc3RzIGxpbmsgaW1hZ2UgY2hhcm1hcCBwcmludCBwcmV2aWV3IGFuY2hvcicsXG4gICAgICAgICAgICAgICAgJ3NlYXJjaHJlcGxhY2UgdmlzdWFsYmxvY2tzIGNvZGUgZnVsbHNjcmVlbicsXG4gICAgICAgICAgICAgICAgJ2luc2VydGRhdGV0aW1lIG1lZGlhIHRhYmxlIHBhc3RlIGNvZGUgaGVscCB3b3JkY291bnQnXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgdG9vbGJhcjogJ3VuZG8gcmVkbyB8IGZvcm1hdHNlbGVjdCB8IGJvbGQgaXRhbGljIGJhY2tjb2xvciB8IGFsaWdubGVmdCBhbGlnbmNlbnRlciBhbGlnbnJpZ2h0IGFsaWduanVzdGlmeSB8ICBidWxsaXN0IG51bWxpc3Qgb3V0ZGVudCBpbmRlbnQgfCByZW1vdmVmb3JtYXQgfCBoZWxwJyxcbiAgICAgICAgICAgIHRvb2xiYXJfbW9kZTogJ2Zsb2F0aW5nJyxcbiAgICAgICAgfTtcblxuICAgICAgICBjb25zdCB1aSA9IHRoaXMuY29uZmlnLmdldENvbmZpZ1ZhbHVlKCd1aScpO1xuICAgICAgICBjb25zdCBzeXN0ZW1EZWZhdWx0cyA9IHVpPy50aW55bWNlPy5lZGl0ID8/IHt9O1xuICAgICAgICBjb25zdCBmaWVsZENvbmZpZyA9IHRoaXM/LmZpZWxkPy5tZXRhZGF0YT8udGlueW1jZT8uZWRpdCA/PyB7fTtcbiAgICAgICAgbGV0IHNldHRpbmdzID0ge30gYXMgYW55O1xuXG4gICAgICAgIHNldHRpbmdzID0gbWVyZ2Uoc2V0dGluZ3MsIGRlZmF1bHRzLCBzeXN0ZW1EZWZhdWx0cywgZmllbGRDb25maWcpO1xuXG4gICAgICAgIHRoaXMubW9kZWxFdmVudHMgPSBzZXR0aW5ncz8ubW9kZWxFdmVudHMgPz8gJ2NoYW5nZSdcbiAgICAgICAgdGhpcy5pZ25vcmVFdmVudHMgPSBzZXR0aW5ncz8uaWdub3JlRXZlbnRzID8/IFwib25LZXlEb3duLG9uS2V5UHJlc3Msb25LZXlVcCxvblNlbGVjdGlvbkNoYW5nZVwiXG5cbiAgICAgICAgdGhpcy5zZXR0aW5ncyA9IHNldHRpbmdzO1xuICAgIH1cblxuICAgIHNldE1vZGVsKCk6IHZvaWQge1xuICAgICAgICB0aGlzLmZpZWxkLmZvcm1Db250cm9sLnNldFZhbHVlKHRoaXMudmFsdWUpO1xuICAgIH1cbn1cbiIsIjwhIC0tXG4vKipcbiogU3VpdGVDUk0gaXMgYSBjdXN0b21lciByZWxhdGlvbnNoaXAgbWFuYWdlbWVudCBwcm9ncmFtIGRldmVsb3BlZCBieSBTYWxlc0FnaWxpdHkgTHRkLlxuKiBDb3B5cmlnaHQgKEMpIDIwMjEgU2FsZXNBZ2lsaXR5IEx0ZC5cbipcbiogVGhpcyBwcm9ncmFtIGlzIGZyZWUgc29mdHdhcmU7IHlvdSBjYW4gcmVkaXN0cmlidXRlIGl0IGFuZC9vciBtb2RpZnkgaXQgdW5kZXJcbiogdGhlIHRlcm1zIG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgdmVyc2lvbiAzIGFzIHB1Ymxpc2hlZCBieSB0aGVcbiogRnJlZSBTb2Z0d2FyZSBGb3VuZGF0aW9uIHdpdGggdGhlIGFkZGl0aW9uIG9mIHRoZSBmb2xsb3dpbmcgcGVybWlzc2lvbiBhZGRlZFxuKiB0byBTZWN0aW9uIDE1IGFzIHBlcm1pdHRlZCBpbiBTZWN0aW9uIDcoYSk6IEZPUiBBTlkgUEFSVCBPRiBUSEUgQ09WRVJFRCBXT1JLXG4qIElOIFdISUNIIFRIRSBDT1BZUklHSFQgSVMgT1dORUQgQlkgU0FMRVNBR0lMSVRZLCBTQUxFU0FHSUxJVFkgRElTQ0xBSU1TIFRIRVxuKiBXQVJSQU5UWSBPRiBOT04gSU5GUklOR0VNRU5UIE9GIFRISVJEIFBBUlRZIFJJR0hUUy5cbipcbiogVGhpcyBwcm9ncmFtIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsIGJ1dCBXSVRIT1VUXG4qIEFOWSBXQVJSQU5UWTsgd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTXG4qIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS4gU2VlIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgZm9yIG1vcmVcbiogZGV0YWlscy5cbipcbiogWW91IHNob3VsZCBoYXZlIHJlY2VpdmVkIGEgY29weSBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4qIGFsb25nIHdpdGggdGhpcyBwcm9ncmFtLiAgSWYgbm90LCBzZWUgaHR0cDovL3d3dy5nbnUub3JnL2xpY2Vuc2VzLlxuKlxuKiBJbiBhY2NvcmRhbmNlIHdpdGggU2VjdGlvbiA3KGIpIG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiogdmVyc2lvbiAzLCB0aGVzZSBBcHByb3ByaWF0ZSBMZWdhbCBOb3RpY2VzIG11c3QgcmV0YWluIHRoZSBkaXNwbGF5IG9mIHRoZVxuKiBcIlN1cGVyY2hhcmdlZCBieSBTdWl0ZUNSTVwiIGxvZ28uIElmIHRoZSBkaXNwbGF5IG9mIHRoZSBsb2dvcyBpcyBub3QgcmVhc29uYWJseVxuKiBmZWFzaWJsZSBmb3IgdGVjaG5pY2FsIHJlYXNvbnMsIHRoZSBBcHByb3ByaWF0ZSBMZWdhbCBOb3RpY2VzIG11c3QgZGlzcGxheVxuKiB0aGUgd29yZHMgXCJTdXBlcmNoYXJnZWQgYnkgU3VpdGVDUk1cIi5cbiovXG4tLT5cbjxlZGl0b3JcbiAgICBjbGFzcz1cImZpZWxkLWh0bWxcIlxuICAgIFtpbml0XT1cInNldHRpbmdzXCJcbiAgICBbbW9kZWxFdmVudHNdPVwibW9kZWxFdmVudHNcIlxuICAgIFtpZ25vcmVFdmVudHNdPVwiaWdub3JlRXZlbnRzXCJcbiAgICBbZm9ybUNvbnRyb2xdPVwiZmllbGQuZm9ybUNvbnRyb2xcIlxuPjwvZWRpdG9yPlxuIl19