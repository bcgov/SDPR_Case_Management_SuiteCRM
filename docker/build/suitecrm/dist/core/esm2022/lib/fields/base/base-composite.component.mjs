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
import { Component } from '@angular/core';
import { BaseFieldComponent } from './base-field.component';
import { DataTypeFormatter } from '../../services/formatters/data-type.formatter.service';
import { StandardFieldRegistry } from '../standard-field.registry';
import { RecordManager } from '../../services/record/record.manager';
import { emptyObject } from 'common';
import set from 'lodash-es/set';
import { FieldLogicManager } from '../field-logic/field-logic.manager';
import { FieldLogicDisplayManager } from '../field-logic-display/field-logic-display.manager';
import * as i0 from "@angular/core";
import * as i1 from "../../services/formatters/data-type.formatter.service";
import * as i2 from "../standard-field.registry";
import * as i3 from "../../services/record/record.manager";
import * as i4 from "../field-logic/field-logic.manager";
import * as i5 from "../field-logic-display/field-logic-display.manager";
class BaseComposite extends BaseFieldComponent {
    constructor(typeFormatter, registry, recordManager, logic, logicDisplay) {
        super(typeFormatter, logic, logicDisplay);
        this.typeFormatter = typeFormatter;
        this.registry = registry;
        this.recordManager = recordManager;
        this.logic = logic;
        this.logicDisplay = logicDisplay;
    }
    ngOnInit() {
        super.ngOnInit();
        this.initUpdateParentSubscription();
    }
    ngOnDestroy() {
        this.subs.forEach(sub => sub.unsubscribe());
    }
    getComponentType(type, definition) {
        let module = (this.record && this.record.module) || 'default';
        const displayType = (definition && definition.displayType) || '';
        return this.registry.getDisplayType(module, type, displayType, this.getMode(), this.field.name);
    }
    /**
     * Get the attribute fields from the field
     *
     * @returns {object} Field[]
     */
    getAttributes() {
        const fields = [];
        this.field.definition.layout.forEach(name => {
            if (!this.field.attributes[name] || this.field.attributes[name].display === 'none') {
                return;
            }
            fields.push(this.field.attributes[name]);
        });
        return fields;
    }
    getModule() {
        if (!this.record) {
            return null;
        }
        return this.record.module;
    }
    getMode() {
        if (this.mode === 'filter') {
            return 'edit';
        }
        return this.mode;
    }
    /**
     * Get flex direction to be used
     *
     * @returns {string} direction
     */
    getDirection() {
        let direction = 'flex-column';
        if (this.field.definition.display === 'inline') {
            direction = 'flex-row';
        }
        return direction;
    }
    /**
     * Check if is configured
     *
     * @returns {boolean} is configured
     */
    isConfigured() {
        return this.hasDisplay() && this.hasLayout() && this.hasAttributes();
    }
    /**
     * Show label
     * @param attribute
     */
    showLabel(attribute) {
        const definition = attribute.definition || null;
        const showLabel = definition.showLabel || null;
        const labelDisplay = (attribute.metadata && attribute.metadata.labelDisplay) || '';
        if (!definition || !showLabel || labelDisplay === 'hide') {
            return false;
        }
        return (showLabel.includes('*') || showLabel.includes(this.mode));
    }
    /**
     * Check if groupFields are configured
     *
     * @returns {boolean} has groupFields
     */
    hasAttributes() {
        return !!(this.field.definition.attributeFields && !emptyObject(this.field.definition.attributeFields));
    }
    /**
     * Check if layout is configured
     *
     * @returns {boolean} has layout
     */
    hasLayout() {
        return !!(this.field.definition.layout && this.field.definition.layout.length);
    }
    /**
     * Check if display is configured
     *
     * @returns {boolean} has display
     */
    hasDisplay() {
        return !!this.field.definition.display;
    }
    /**
     * Init Update parent subscription
     */
    initUpdateParentSubscription() {
        if (!this.field.attributes) {
            return;
        }
        Object.keys(this.field.attributes).forEach(attributeKey => {
            const attribute = this.field.attributes[attributeKey];
            if (!attribute.valueChanges$) {
                return;
            }
            this.subs.push(attribute.valueChanges$.subscribe(value => {
                const val = value.valueObject || value.valueList || value.value;
                this.setValueOnParent(attribute, val);
            }));
        });
    }
    /**
     * Set attribute value on parent
     *
     * @param {object} attribute
     * @param {} value
     */
    setValueOnParent(attribute, value) {
        const valueParent = attribute.valueParent ?? 'field';
        const parent = valueParent === 'record' ? this.record : this.field;
        if (attribute.valuePath) {
            set(parent, attribute.valuePath, value);
            return;
        }
        if (valueParent === 'record') {
            set(this.record.attributes, attribute.name, value);
        }
        else {
            set(this.field.valueObject, attribute.name, value);
        }
    }
    static { this.ɵfac = function BaseComposite_Factory(t) { return new (t || BaseComposite)(i0.ɵɵdirectiveInject(i1.DataTypeFormatter), i0.ɵɵdirectiveInject(i2.StandardFieldRegistry), i0.ɵɵdirectiveInject(i3.RecordManager), i0.ɵɵdirectiveInject(i4.FieldLogicManager), i0.ɵɵdirectiveInject(i5.FieldLogicDisplayManager)); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: BaseComposite, selectors: [["ng-component"]], features: [i0.ɵɵInheritDefinitionFeature], decls: 0, vars: 0, template: function BaseComposite_Template(rf, ctx) { }, encapsulation: 2 }); }
}
export { BaseComposite };
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(BaseComposite, [{
        type: Component,
        args: [{ template: '' }]
    }], function () { return [{ type: i1.DataTypeFormatter }, { type: i2.StandardFieldRegistry }, { type: i3.RecordManager }, { type: i4.FieldLogicManager }, { type: i5.FieldLogicDisplayManager }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFzZS1jb21wb3NpdGUuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vY29yZS9hcHAvY29yZS9zcmMvbGliL2ZpZWxkcy9iYXNlL2Jhc2UtY29tcG9zaXRlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBd0JHO0FBRUgsT0FBTyxFQUFDLFNBQVMsRUFBb0IsTUFBTSxlQUFlLENBQUM7QUFDM0QsT0FBTyxFQUFDLGtCQUFrQixFQUFDLE1BQU0sd0JBQXdCLENBQUM7QUFDMUQsT0FBTyxFQUFDLGlCQUFpQixFQUFDLE1BQU0sdURBQXVELENBQUM7QUFDeEYsT0FBTyxFQUFDLHFCQUFxQixFQUFDLE1BQU0sNEJBQTRCLENBQUM7QUFDakUsT0FBTyxFQUFDLGFBQWEsRUFBQyxNQUFNLHNDQUFzQyxDQUFDO0FBQ25FLE9BQU8sRUFBQyxXQUFXLEVBQXlDLE1BQU0sUUFBUSxDQUFDO0FBQzNFLE9BQU8sR0FBRyxNQUFNLGVBQWUsQ0FBQztBQUNoQyxPQUFPLEVBQUMsaUJBQWlCLEVBQUMsTUFBTSxvQ0FBb0MsQ0FBQztBQUNyRSxPQUFPLEVBQUMsd0JBQXdCLEVBQUMsTUFBTSxvREFBb0QsQ0FBQzs7Ozs7OztBQUU1RixNQUNhLGFBQWMsU0FBUSxrQkFBa0I7SUFFakQsWUFDYyxhQUFnQyxFQUNoQyxRQUErQixFQUMvQixhQUE0QixFQUM1QixLQUF3QixFQUN4QixZQUFzQztRQUVoRCxLQUFLLENBQUMsYUFBYSxFQUFFLEtBQUssRUFBRSxZQUFZLENBQUMsQ0FBQztRQU5oQyxrQkFBYSxHQUFiLGFBQWEsQ0FBbUI7UUFDaEMsYUFBUSxHQUFSLFFBQVEsQ0FBdUI7UUFDL0Isa0JBQWEsR0FBYixhQUFhLENBQWU7UUFDNUIsVUFBSyxHQUFMLEtBQUssQ0FBbUI7UUFDeEIsaUJBQVksR0FBWixZQUFZLENBQTBCO0lBR3BELENBQUM7SUFFRCxRQUFRO1FBQ0osS0FBSyxDQUFDLFFBQVEsRUFBRSxDQUFDO1FBQ2pCLElBQUksQ0FBQyw0QkFBNEIsRUFBRSxDQUFDO0lBQ3hDLENBQUM7SUFFRCxXQUFXO1FBQ1AsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsV0FBVyxFQUFFLENBQUMsQ0FBQztJQUNoRCxDQUFDO0lBRUQsZ0JBQWdCLENBQUMsSUFBWSxFQUFFLFVBQTJCO1FBQ3RELElBQUksTUFBTSxHQUFHLENBQUMsSUFBSSxDQUFDLE1BQU0sSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLFNBQVMsQ0FBQztRQUU5RCxNQUFNLFdBQVcsR0FBRyxDQUFDLFVBQVUsSUFBSSxVQUFVLENBQUMsV0FBVyxDQUFDLElBQUksRUFBRSxDQUFDO1FBRWpFLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQyxjQUFjLENBQUMsTUFBTSxFQUFFLElBQUksRUFBRSxXQUFXLEVBQUUsSUFBSSxDQUFDLE9BQU8sRUFBRSxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDcEcsQ0FBQztJQUVEOzs7O09BSUc7SUFDSCxhQUFhO1FBQ1QsTUFBTSxNQUFNLEdBQVksRUFBRSxDQUFDO1FBRTNCLElBQUksQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEVBQUU7WUFDeEMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxDQUFDLE9BQU8sS0FBSyxNQUFNLEVBQUU7Z0JBQ2hGLE9BQU87YUFDVjtZQUNELE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztRQUM3QyxDQUFDLENBQUMsQ0FBQztRQUVILE9BQU8sTUFBTSxDQUFDO0lBQ2xCLENBQUM7SUFFRCxTQUFTO1FBQ0wsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUU7WUFDZCxPQUFPLElBQUksQ0FBQztTQUNmO1FBRUQsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQztJQUM5QixDQUFDO0lBRUQsT0FBTztRQUNILElBQUksSUFBSSxDQUFDLElBQUksS0FBSyxRQUFRLEVBQUU7WUFDeEIsT0FBTyxNQUFNLENBQUM7U0FDakI7UUFFRCxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUM7SUFDckIsQ0FBQztJQUVEOzs7O09BSUc7SUFDSCxZQUFZO1FBQ1IsSUFBSSxTQUFTLEdBQUcsYUFBYSxDQUFDO1FBRTlCLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsT0FBTyxLQUFLLFFBQVEsRUFBRTtZQUM1QyxTQUFTLEdBQUcsVUFBVSxDQUFDO1NBQzFCO1FBRUQsT0FBTyxTQUFTLENBQUM7SUFDckIsQ0FBQztJQUVEOzs7O09BSUc7SUFDSCxZQUFZO1FBQ1IsT0FBTyxJQUFJLENBQUMsVUFBVSxFQUFFLElBQUksSUFBSSxDQUFDLFNBQVMsRUFBRSxJQUFJLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQztJQUN6RSxDQUFDO0lBRUQ7OztPQUdHO0lBQ0gsU0FBUyxDQUFDLFNBQXlCO1FBQy9CLE1BQU0sVUFBVSxHQUFHLFNBQVMsQ0FBQyxVQUFVLElBQUksSUFBSSxDQUFDO1FBQ2hELE1BQU0sU0FBUyxHQUFHLFVBQVUsQ0FBQyxTQUFTLElBQUksSUFBSSxDQUFDO1FBQy9DLE1BQU0sWUFBWSxHQUFHLENBQUMsU0FBUyxDQUFDLFFBQVEsSUFBSSxTQUFTLENBQUMsUUFBUSxDQUFDLFlBQVksQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUVuRixJQUFJLENBQUMsVUFBVSxJQUFJLENBQUMsU0FBUyxJQUFJLFlBQVksS0FBSyxNQUFNLEVBQUU7WUFDdEQsT0FBTyxLQUFLLENBQUM7U0FDaEI7UUFFRCxPQUFPLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsSUFBSSxTQUFTLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO0lBQ3RFLENBQUM7SUFFRDs7OztPQUlHO0lBQ08sYUFBYTtRQUNuQixPQUFPLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDLGVBQWUsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxlQUFlLENBQUMsQ0FBQyxDQUFDO0lBQzVHLENBQUM7SUFFRDs7OztPQUlHO0lBQ08sU0FBUztRQUNmLE9BQU8sQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsTUFBTSxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUNuRixDQUFDO0lBRUQ7Ozs7T0FJRztJQUNPLFVBQVU7UUFDaEIsT0FBTyxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDO0lBQzNDLENBQUM7SUFFRDs7T0FFRztJQUNPLDRCQUE0QjtRQUNsQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxVQUFVLEVBQUU7WUFDeEIsT0FBTztTQUNWO1FBRUQsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxZQUFZLENBQUMsRUFBRTtZQUN0RCxNQUFNLFNBQVMsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxZQUFZLENBQUMsQ0FBQztZQUV0RCxJQUFJLENBQUMsU0FBUyxDQUFDLGFBQWEsRUFBRTtnQkFDMUIsT0FBTzthQUNWO1lBRUQsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLGFBQWEsQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLEVBQUU7Z0JBQ3JELE1BQU0sR0FBRyxHQUFHLEtBQUssQ0FBQyxXQUFXLElBQUksS0FBSyxDQUFDLFNBQVMsSUFBSSxLQUFLLENBQUMsS0FBSyxDQUFDO2dCQUNoRSxJQUFJLENBQUMsZ0JBQWdCLENBQUMsU0FBUyxFQUFFLEdBQUcsQ0FBQyxDQUFDO1lBQzFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDUixDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFFRDs7Ozs7T0FLRztJQUNPLGdCQUFnQixDQUFDLFNBQXlCLEVBQUUsS0FBVTtRQUM1RCxNQUFNLFdBQVcsR0FBRyxTQUFTLENBQUMsV0FBVyxJQUFJLE9BQU8sQ0FBQztRQUNyRCxNQUFNLE1BQU0sR0FBRyxXQUFXLEtBQUssUUFBUSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDO1FBRW5FLElBQUksU0FBUyxDQUFDLFNBQVMsRUFBRTtZQUNyQixHQUFHLENBQUMsTUFBTSxFQUFFLFNBQVMsQ0FBQyxTQUFTLEVBQUUsS0FBSyxDQUFDLENBQUM7WUFDeEMsT0FBTztTQUNWO1FBRUQsSUFBSSxXQUFXLEtBQUssUUFBUSxFQUFFO1lBQzFCLEdBQUcsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLFVBQVUsRUFBRSxTQUFTLENBQUMsSUFBSSxFQUFFLEtBQUssQ0FBQyxDQUFDO1NBQ3REO2FBQU07WUFDSCxHQUFHLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxXQUFXLEVBQUUsU0FBUyxDQUFDLElBQUksRUFBRSxLQUFLLENBQUMsQ0FBQztTQUN0RDtJQUNMLENBQUM7OEVBNUtRLGFBQWE7b0VBQWIsYUFBYTs7U0FBYixhQUFhO3VGQUFiLGFBQWE7Y0FEekIsU0FBUztlQUFDLEVBQUMsUUFBUSxFQUFFLEVBQUUsRUFBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogU3VpdGVDUk0gaXMgYSBjdXN0b21lciByZWxhdGlvbnNoaXAgbWFuYWdlbWVudCBwcm9ncmFtIGRldmVsb3BlZCBieSBTYWxlc0FnaWxpdHkgTHRkLlxuICogQ29weXJpZ2h0IChDKSAyMDIxIFNhbGVzQWdpbGl0eSBMdGQuXG4gKlxuICogVGhpcyBwcm9ncmFtIGlzIGZyZWUgc29mdHdhcmU7IHlvdSBjYW4gcmVkaXN0cmlidXRlIGl0IGFuZC9vciBtb2RpZnkgaXQgdW5kZXJcbiAqIHRoZSB0ZXJtcyBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIHZlcnNpb24gMyBhcyBwdWJsaXNoZWQgYnkgdGhlXG4gKiBGcmVlIFNvZnR3YXJlIEZvdW5kYXRpb24gd2l0aCB0aGUgYWRkaXRpb24gb2YgdGhlIGZvbGxvd2luZyBwZXJtaXNzaW9uIGFkZGVkXG4gKiB0byBTZWN0aW9uIDE1IGFzIHBlcm1pdHRlZCBpbiBTZWN0aW9uIDcoYSk6IEZPUiBBTlkgUEFSVCBPRiBUSEUgQ09WRVJFRCBXT1JLXG4gKiBJTiBXSElDSCBUSEUgQ09QWVJJR0hUIElTIE9XTkVEIEJZIFNBTEVTQUdJTElUWSwgU0FMRVNBR0lMSVRZIERJU0NMQUlNUyBUSEVcbiAqIFdBUlJBTlRZIE9GIE5PTiBJTkZSSU5HRU1FTlQgT0YgVEhJUkQgUEFSVFkgUklHSFRTLlxuICpcbiAqIFRoaXMgcHJvZ3JhbSBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLCBidXQgV0lUSE9VVFxuICogQU5ZIFdBUlJBTlRZOyB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2YgTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1NcbiAqIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS4gU2VlIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgZm9yIG1vcmVcbiAqIGRldGFpbHMuXG4gKlxuICogWW91IHNob3VsZCBoYXZlIHJlY2VpdmVkIGEgY29weSBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4gKiBhbG9uZyB3aXRoIHRoaXMgcHJvZ3JhbS4gIElmIG5vdCwgc2VlIDxodHRwOi8vd3d3LmdudS5vcmcvbGljZW5zZXMvPi5cbiAqXG4gKiBJbiBhY2NvcmRhbmNlIHdpdGggU2VjdGlvbiA3KGIpIG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiAqIHZlcnNpb24gMywgdGhlc2UgQXBwcm9wcmlhdGUgTGVnYWwgTm90aWNlcyBtdXN0IHJldGFpbiB0aGUgZGlzcGxheSBvZiB0aGVcbiAqIFwiU3VwZXJjaGFyZ2VkIGJ5IFN1aXRlQ1JNXCIgbG9nby4gSWYgdGhlIGRpc3BsYXkgb2YgdGhlIGxvZ29zIGlzIG5vdCByZWFzb25hYmx5XG4gKiBmZWFzaWJsZSBmb3IgdGVjaG5pY2FsIHJlYXNvbnMsIHRoZSBBcHByb3ByaWF0ZSBMZWdhbCBOb3RpY2VzIG11c3QgZGlzcGxheVxuICogdGhlIHdvcmRzIFwiU3VwZXJjaGFyZ2VkIGJ5IFN1aXRlQ1JNXCIuXG4gKi9cblxuaW1wb3J0IHtDb21wb25lbnQsIE9uRGVzdHJveSwgT25Jbml0fSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7QmFzZUZpZWxkQ29tcG9uZW50fSBmcm9tICcuL2Jhc2UtZmllbGQuY29tcG9uZW50JztcbmltcG9ydCB7RGF0YVR5cGVGb3JtYXR0ZXJ9IGZyb20gJy4uLy4uL3NlcnZpY2VzL2Zvcm1hdHRlcnMvZGF0YS10eXBlLmZvcm1hdHRlci5zZXJ2aWNlJztcbmltcG9ydCB7U3RhbmRhcmRGaWVsZFJlZ2lzdHJ5fSBmcm9tICcuLi9zdGFuZGFyZC1maWVsZC5yZWdpc3RyeSc7XG5pbXBvcnQge1JlY29yZE1hbmFnZXJ9IGZyb20gJy4uLy4uL3NlcnZpY2VzL3JlY29yZC9yZWNvcmQubWFuYWdlcic7XG5pbXBvcnQge2VtcHR5T2JqZWN0LCBGaWVsZCwgRmllbGRBdHRyaWJ1dGUsIEZpZWxkRGVmaW5pdGlvbn0gZnJvbSAnY29tbW9uJztcbmltcG9ydCBzZXQgZnJvbSAnbG9kYXNoLWVzL3NldCc7XG5pbXBvcnQge0ZpZWxkTG9naWNNYW5hZ2VyfSBmcm9tICcuLi9maWVsZC1sb2dpYy9maWVsZC1sb2dpYy5tYW5hZ2VyJztcbmltcG9ydCB7RmllbGRMb2dpY0Rpc3BsYXlNYW5hZ2VyfSBmcm9tICcuLi9maWVsZC1sb2dpYy1kaXNwbGF5L2ZpZWxkLWxvZ2ljLWRpc3BsYXkubWFuYWdlcic7XG5cbkBDb21wb25lbnQoe3RlbXBsYXRlOiAnJ30pXG5leHBvcnQgY2xhc3MgQmFzZUNvbXBvc2l0ZSBleHRlbmRzIEJhc2VGaWVsZENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcblxuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBwcm90ZWN0ZWQgdHlwZUZvcm1hdHRlcjogRGF0YVR5cGVGb3JtYXR0ZXIsXG4gICAgICAgIHByb3RlY3RlZCByZWdpc3RyeTogU3RhbmRhcmRGaWVsZFJlZ2lzdHJ5LFxuICAgICAgICBwcm90ZWN0ZWQgcmVjb3JkTWFuYWdlcjogUmVjb3JkTWFuYWdlcixcbiAgICAgICAgcHJvdGVjdGVkIGxvZ2ljOiBGaWVsZExvZ2ljTWFuYWdlcixcbiAgICAgICAgcHJvdGVjdGVkIGxvZ2ljRGlzcGxheTogRmllbGRMb2dpY0Rpc3BsYXlNYW5hZ2VyXG4gICAgKSB7XG4gICAgICAgIHN1cGVyKHR5cGVGb3JtYXR0ZXIsIGxvZ2ljLCBsb2dpY0Rpc3BsYXkpO1xuICAgIH1cblxuICAgIG5nT25Jbml0KCk6IHZvaWQge1xuICAgICAgICBzdXBlci5uZ09uSW5pdCgpO1xuICAgICAgICB0aGlzLmluaXRVcGRhdGVQYXJlbnRTdWJzY3JpcHRpb24oKTtcbiAgICB9XG5cbiAgICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5zdWJzLmZvckVhY2goc3ViID0+IHN1Yi51bnN1YnNjcmliZSgpKTtcbiAgICB9XG5cbiAgICBnZXRDb21wb25lbnRUeXBlKHR5cGU6IHN0cmluZywgZGVmaW5pdGlvbjogRmllbGREZWZpbml0aW9uKTogYW55IHtcbiAgICAgICAgbGV0IG1vZHVsZSA9ICh0aGlzLnJlY29yZCAmJiB0aGlzLnJlY29yZC5tb2R1bGUpIHx8ICdkZWZhdWx0JztcblxuICAgICAgICBjb25zdCBkaXNwbGF5VHlwZSA9IChkZWZpbml0aW9uICYmIGRlZmluaXRpb24uZGlzcGxheVR5cGUpIHx8ICcnO1xuXG4gICAgICAgIHJldHVybiB0aGlzLnJlZ2lzdHJ5LmdldERpc3BsYXlUeXBlKG1vZHVsZSwgdHlwZSwgZGlzcGxheVR5cGUsIHRoaXMuZ2V0TW9kZSgpLCB0aGlzLmZpZWxkLm5hbWUpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEdldCB0aGUgYXR0cmlidXRlIGZpZWxkcyBmcm9tIHRoZSBmaWVsZFxuICAgICAqXG4gICAgICogQHJldHVybnMge29iamVjdH0gRmllbGRbXVxuICAgICAqL1xuICAgIGdldEF0dHJpYnV0ZXMoKTogRmllbGRbXSB7XG4gICAgICAgIGNvbnN0IGZpZWxkczogRmllbGRbXSA9IFtdO1xuXG4gICAgICAgIHRoaXMuZmllbGQuZGVmaW5pdGlvbi5sYXlvdXQuZm9yRWFjaChuYW1lID0+IHtcbiAgICAgICAgICAgIGlmICghdGhpcy5maWVsZC5hdHRyaWJ1dGVzW25hbWVdIHx8IHRoaXMuZmllbGQuYXR0cmlidXRlc1tuYW1lXS5kaXNwbGF5ID09PSAnbm9uZScpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBmaWVsZHMucHVzaCh0aGlzLmZpZWxkLmF0dHJpYnV0ZXNbbmFtZV0pO1xuICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gZmllbGRzO1xuICAgIH1cblxuICAgIGdldE1vZHVsZSgpOiBzdHJpbmcge1xuICAgICAgICBpZiAoIXRoaXMucmVjb3JkKSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0aGlzLnJlY29yZC5tb2R1bGU7XG4gICAgfVxuXG4gICAgZ2V0TW9kZSgpOiBzdHJpbmcge1xuICAgICAgICBpZiAodGhpcy5tb2RlID09PSAnZmlsdGVyJykge1xuICAgICAgICAgICAgcmV0dXJuICdlZGl0JztcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0aGlzLm1vZGU7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogR2V0IGZsZXggZGlyZWN0aW9uIHRvIGJlIHVzZWRcbiAgICAgKlxuICAgICAqIEByZXR1cm5zIHtzdHJpbmd9IGRpcmVjdGlvblxuICAgICAqL1xuICAgIGdldERpcmVjdGlvbigpOiBzdHJpbmcge1xuICAgICAgICBsZXQgZGlyZWN0aW9uID0gJ2ZsZXgtY29sdW1uJztcblxuICAgICAgICBpZiAodGhpcy5maWVsZC5kZWZpbml0aW9uLmRpc3BsYXkgPT09ICdpbmxpbmUnKSB7XG4gICAgICAgICAgICBkaXJlY3Rpb24gPSAnZmxleC1yb3cnO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGRpcmVjdGlvbjtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDaGVjayBpZiBpcyBjb25maWd1cmVkXG4gICAgICpcbiAgICAgKiBAcmV0dXJucyB7Ym9vbGVhbn0gaXMgY29uZmlndXJlZFxuICAgICAqL1xuICAgIGlzQ29uZmlndXJlZCgpOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaGFzRGlzcGxheSgpICYmIHRoaXMuaGFzTGF5b3V0KCkgJiYgdGhpcy5oYXNBdHRyaWJ1dGVzKCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU2hvdyBsYWJlbFxuICAgICAqIEBwYXJhbSBhdHRyaWJ1dGVcbiAgICAgKi9cbiAgICBzaG93TGFiZWwoYXR0cmlidXRlOiBGaWVsZEF0dHJpYnV0ZSk6IGJvb2xlYW4ge1xuICAgICAgICBjb25zdCBkZWZpbml0aW9uID0gYXR0cmlidXRlLmRlZmluaXRpb24gfHwgbnVsbDtcbiAgICAgICAgY29uc3Qgc2hvd0xhYmVsID0gZGVmaW5pdGlvbi5zaG93TGFiZWwgfHwgbnVsbDtcbiAgICAgICAgY29uc3QgbGFiZWxEaXNwbGF5ID0gKGF0dHJpYnV0ZS5tZXRhZGF0YSAmJiBhdHRyaWJ1dGUubWV0YWRhdGEubGFiZWxEaXNwbGF5KSB8fCAnJztcblxuICAgICAgICBpZiAoIWRlZmluaXRpb24gfHwgIXNob3dMYWJlbCB8fCBsYWJlbERpc3BsYXkgPT09ICdoaWRlJykge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIChzaG93TGFiZWwuaW5jbHVkZXMoJyonKSB8fCBzaG93TGFiZWwuaW5jbHVkZXModGhpcy5tb2RlKSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ2hlY2sgaWYgZ3JvdXBGaWVsZHMgYXJlIGNvbmZpZ3VyZWRcbiAgICAgKlxuICAgICAqIEByZXR1cm5zIHtib29sZWFufSBoYXMgZ3JvdXBGaWVsZHNcbiAgICAgKi9cbiAgICBwcm90ZWN0ZWQgaGFzQXR0cmlidXRlcygpOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuICEhKHRoaXMuZmllbGQuZGVmaW5pdGlvbi5hdHRyaWJ1dGVGaWVsZHMgJiYgIWVtcHR5T2JqZWN0KHRoaXMuZmllbGQuZGVmaW5pdGlvbi5hdHRyaWJ1dGVGaWVsZHMpKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDaGVjayBpZiBsYXlvdXQgaXMgY29uZmlndXJlZFxuICAgICAqXG4gICAgICogQHJldHVybnMge2Jvb2xlYW59IGhhcyBsYXlvdXRcbiAgICAgKi9cbiAgICBwcm90ZWN0ZWQgaGFzTGF5b3V0KCk6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gISEodGhpcy5maWVsZC5kZWZpbml0aW9uLmxheW91dCAmJiB0aGlzLmZpZWxkLmRlZmluaXRpb24ubGF5b3V0Lmxlbmd0aCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ2hlY2sgaWYgZGlzcGxheSBpcyBjb25maWd1cmVkXG4gICAgICpcbiAgICAgKiBAcmV0dXJucyB7Ym9vbGVhbn0gaGFzIGRpc3BsYXlcbiAgICAgKi9cbiAgICBwcm90ZWN0ZWQgaGFzRGlzcGxheSgpOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuICEhdGhpcy5maWVsZC5kZWZpbml0aW9uLmRpc3BsYXk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogSW5pdCBVcGRhdGUgcGFyZW50IHN1YnNjcmlwdGlvblxuICAgICAqL1xuICAgIHByb3RlY3RlZCBpbml0VXBkYXRlUGFyZW50U3Vic2NyaXB0aW9uKCk6IHZvaWQge1xuICAgICAgICBpZiAoIXRoaXMuZmllbGQuYXR0cmlidXRlcykge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgT2JqZWN0LmtleXModGhpcy5maWVsZC5hdHRyaWJ1dGVzKS5mb3JFYWNoKGF0dHJpYnV0ZUtleSA9PiB7XG4gICAgICAgICAgICBjb25zdCBhdHRyaWJ1dGUgPSB0aGlzLmZpZWxkLmF0dHJpYnV0ZXNbYXR0cmlidXRlS2V5XTtcblxuICAgICAgICAgICAgaWYgKCFhdHRyaWJ1dGUudmFsdWVDaGFuZ2VzJCkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdGhpcy5zdWJzLnB1c2goYXR0cmlidXRlLnZhbHVlQ2hhbmdlcyQuc3Vic2NyaWJlKHZhbHVlID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCB2YWwgPSB2YWx1ZS52YWx1ZU9iamVjdCB8fCB2YWx1ZS52YWx1ZUxpc3QgfHwgdmFsdWUudmFsdWU7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXRWYWx1ZU9uUGFyZW50KGF0dHJpYnV0ZSwgdmFsKTtcbiAgICAgICAgICAgIH0pKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU2V0IGF0dHJpYnV0ZSB2YWx1ZSBvbiBwYXJlbnRcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7b2JqZWN0fSBhdHRyaWJ1dGVcbiAgICAgKiBAcGFyYW0ge30gdmFsdWVcbiAgICAgKi9cbiAgICBwcm90ZWN0ZWQgc2V0VmFsdWVPblBhcmVudChhdHRyaWJ1dGU6IEZpZWxkQXR0cmlidXRlLCB2YWx1ZTogYW55KTogdm9pZCB7XG4gICAgICAgIGNvbnN0IHZhbHVlUGFyZW50ID0gYXR0cmlidXRlLnZhbHVlUGFyZW50ID8/ICdmaWVsZCc7XG4gICAgICAgIGNvbnN0IHBhcmVudCA9IHZhbHVlUGFyZW50ID09PSAncmVjb3JkJyA/IHRoaXMucmVjb3JkIDogdGhpcy5maWVsZDtcblxuICAgICAgICBpZiAoYXR0cmlidXRlLnZhbHVlUGF0aCkge1xuICAgICAgICAgICAgc2V0KHBhcmVudCwgYXR0cmlidXRlLnZhbHVlUGF0aCwgdmFsdWUpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHZhbHVlUGFyZW50ID09PSAncmVjb3JkJykge1xuICAgICAgICAgICAgc2V0KHRoaXMucmVjb3JkLmF0dHJpYnV0ZXMsIGF0dHJpYnV0ZS5uYW1lLCB2YWx1ZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBzZXQodGhpcy5maWVsZC52YWx1ZU9iamVjdCwgYXR0cmlidXRlLm5hbWUsIHZhbHVlKTtcbiAgICAgICAgfVxuICAgIH1cbn1cbiJdfQ==