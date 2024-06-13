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
import { BehaviorSubject } from 'rxjs';
import { map, take } from 'rxjs/operators';
import { ListViewStore } from '../../store/list-view/list-view.store';
import { SystemConfigStore } from '../../../../store/system-config/system-config.store';
import { ScreenSize, ScreenSizeObserverService } from '../../../../services/ui/screen-size-observer/screen-size-observer.service';
import { ModuleNavigation } from '../../../../services/navigation/module-navigation/module-navigation.service';
import { AsyncActionService } from '../../../../services/process/processes/async-action/async-action';
import * as i0 from "@angular/core";
import * as i1 from "../../store/list-view/list-view.store";
import * as i2 from "../../../../services/navigation/module-navigation/module-navigation.service";
import * as i3 from "../../../../services/ui/screen-size-observer/screen-size-observer.service";
import * as i4 from "../../../../store/system-config/system-config.store";
import * as i5 from "../../../../services/process/processes/async-action/async-action";
import * as i6 from "@angular/common";
import * as i7 from "../../../../components/button-group/button-group.component";
function ActionMenuComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 1);
    i0.ɵɵelement(1, "scrm-button-group", 2);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("config$", ctx_r0.config$);
} }
class ActionMenuComponent {
    constructor(listStore, actionHandler, screenSize, systemConfigs, asyncActionService) {
        this.listStore = listStore;
        this.actionHandler = actionHandler;
        this.screenSize = screenSize;
        this.systemConfigs = systemConfigs;
        this.asyncActionService = asyncActionService;
        this.configState = new BehaviorSubject({ buttons: [] });
        this.config$ = this.configState.asObservable();
        this.vm$ = this.screenSize.screenSize$.pipe(map((screenSize) => {
            if (screenSize) {
                this.screen = screenSize;
            }
            this.configState.next(this.getButtonGroupConfig());
            return { screenSize };
        }));
        this.screen = ScreenSize.Medium;
        this.defaultBreakpoint = 3;
    }
    ngOnInit() {
        this.configState.next(this.getButtonGroupConfig());
    }
    getButtonGroupConfig() {
        const actions = this.actions;
        const config = {
            buttonKlass: ['action-button'],
            dropdownLabel: this.listStore.appStrings.LBL_MORE || '',
            buttons: [],
            dropdownOptions: {
                placement: ['bottom-right']
            },
            breakpoint: this.getBreakpoint()
        };
        actions.forEach(action => {
            const buttonConfig = this.getButtonConfig(action);
            if (buttonConfig && buttonConfig.klass) {
                config.buttons.push(buttonConfig);
            }
        });
        return config;
    }
    getBreakpoint() {
        const breakpointMap = this.systemConfigs && this.systemConfigs.getConfigValue('listview_actions_limits');
        if (this.screen && breakpointMap && breakpointMap[this.screen]) {
            this.breakpoint = breakpointMap[this.screen];
            return this.breakpoint;
        }
        if (this.breakpoint) {
            return this.breakpoint;
        }
        return this.defaultBreakpoint;
    }
    get actions() {
        if (!this.listStore.vm.appData.module || !this.listStore.vm.appData.module.menu) {
            return [];
        }
        return this.listStore.vm.appData.module.menu.filter(action => !(action.name === 'List' || action.name === 'View'));
    }
    getButtonConfig(action) {
        if (!this.listStore.vm.appData.appState.module) {
            return {};
        }
        if (!this.listStore.vm.appData.language) {
            return {};
        }
        const module = this.listStore.vm.appData.appState.module;
        const language = this.listStore.vm.appData.language;
        let labelKey = '';
        if (action.actionLabelKey) {
            labelKey = action.actionLabelKey;
        }
        return {
            klass: 'action-button',
            label: this.actionHandler.getActionLabel(module, action, language, labelKey),
            onClick: () => {
                if (action?.process) {
                    this.handleProcess(module, action?.process);
                    return;
                }
                this.actionHandler.navigate(action).then();
            }
        };
    }
    handleProcess(moduleName, process) {
        if (!process) {
            return;
        }
        const processType = process;
        const options = {
            action: processType,
            module: moduleName,
        };
        this.asyncActionService.run(processType, options).pipe(take(1)).subscribe();
    }
    static { this.ɵfac = function ActionMenuComponent_Factory(t) { return new (t || ActionMenuComponent)(i0.ɵɵdirectiveInject(i1.ListViewStore), i0.ɵɵdirectiveInject(i2.ModuleNavigation), i0.ɵɵdirectiveInject(i3.ScreenSizeObserverService), i0.ɵɵdirectiveInject(i4.SystemConfigStore), i0.ɵɵdirectiveInject(i5.AsyncActionService)); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: ActionMenuComponent, selectors: [["scrm-action-menu"]], decls: 2, vars: 3, consts: [["class", "list-view-actions float-right", 4, "ngIf"], [1, "list-view-actions", "float-right"], [3, "config$"]], template: function ActionMenuComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵtemplate(0, ActionMenuComponent_div_0_Template, 2, 1, "div", 0);
            i0.ɵɵpipe(1, "async");
        } if (rf & 2) {
            i0.ɵɵproperty("ngIf", i0.ɵɵpipeBind1(1, 1, ctx.vm$));
        } }, dependencies: [i6.NgIf, i7.ButtonGroupComponent, i6.AsyncPipe], encapsulation: 2 }); }
}
export { ActionMenuComponent };
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ActionMenuComponent, [{
        type: Component,
        args: [{ selector: 'scrm-action-menu', template: "<! --\n/**\n* SuiteCRM is a customer relationship management program developed by SalesAgility Ltd.\n* Copyright (C) 2021 SalesAgility Ltd.\n*\n* This program is free software; you can redistribute it and/or modify it under\n* the terms of the GNU Affero General Public License version 3 as published by the\n* Free Software Foundation with the addition of the following permission added\n* to Section 15 as permitted in Section 7(a): FOR ANY PART OF THE COVERED WORK\n* IN WHICH THE COPYRIGHT IS OWNED BY SALESAGILITY, SALESAGILITY DISCLAIMS THE\n* WARRANTY OF NON INFRINGEMENT OF THIRD PARTY RIGHTS.\n*\n* This program is distributed in the hope that it will be useful, but WITHOUT\n* ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS\n* FOR A PARTICULAR PURPOSE. See the GNU Affero General Public License for more\n* details.\n*\n* You should have received a copy of the GNU Affero General Public License\n* along with this program.  If not, see http://www.gnu.org/licenses.\n*\n* In accordance with Section 7(b) of the GNU Affero General Public License\n* version 3, these Appropriate Legal Notices must retain the display of the\n* \"Supercharged by SuiteCRM\" logo. If the display of the logos is not reasonably\n* feasible for technical reasons, the Appropriate Legal Notices must display\n* the words \"Supercharged by SuiteCRM\".\n*/\n-->\n<div class=\"list-view-actions float-right\" *ngIf=\"(vm$ | async) as vm\">\n    <scrm-button-group [config$]=\"config$\"></scrm-button-group>\n</div>\n" }]
    }], function () { return [{ type: i1.ListViewStore }, { type: i2.ModuleNavigation }, { type: i3.ScreenSizeObserverService }, { type: i4.SystemConfigStore }, { type: i5.AsyncActionService }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWN0aW9uLW1lbnUuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vY29yZS9hcHAvY29yZS9zcmMvbGliL3ZpZXdzL2xpc3QvY29tcG9uZW50cy9hY3Rpb24tbWVudS9hY3Rpb24tbWVudS5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9jb3JlL2FwcC9jb3JlL3NyYy9saWIvdmlld3MvbGlzdC9jb21wb25lbnRzL2FjdGlvbi1tZW51L2FjdGlvbi1tZW51LmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0F3Qkc7QUFFSCxPQUFPLEVBQUMsU0FBUyxFQUFTLE1BQU0sZUFBZSxDQUFDO0FBRWhELE9BQU8sRUFBQyxlQUFlLEVBQUMsTUFBTSxNQUFNLENBQUM7QUFDckMsT0FBTyxFQUFDLEdBQUcsRUFBRSxJQUFJLEVBQUMsTUFBTSxnQkFBZ0IsQ0FBQztBQUN6QyxPQUFPLEVBQUMsYUFBYSxFQUFDLE1BQU0sdUNBQXVDLENBQUM7QUFDcEUsT0FBTyxFQUFDLGlCQUFpQixFQUFDLE1BQU0scURBQXFELENBQUM7QUFFdEYsT0FBTyxFQUNILFVBQVUsRUFDVix5QkFBeUIsRUFDNUIsTUFBTSwyRUFBMkUsQ0FBQztBQUNuRixPQUFPLEVBQUMsZ0JBQWdCLEVBQUMsTUFBTSw2RUFBNkUsQ0FBQztBQUM3RyxPQUFPLEVBQW1CLGtCQUFrQixFQUFDLE1BQU0sa0VBQWtFLENBQUM7Ozs7Ozs7Ozs7SUNYdEgsOEJBQXVFO0lBQ25FLHVDQUEyRDtJQUMvRCxpQkFBTTs7O0lBRGlCLGVBQW1CO0lBQW5CLHdDQUFtQjs7QURZMUMsTUFJYSxtQkFBbUI7SUFvQjVCLFlBQ2MsU0FBd0IsRUFDeEIsYUFBK0IsRUFDL0IsVUFBcUMsRUFDckMsYUFBZ0MsRUFDaEMsa0JBQXNDO1FBSnRDLGNBQVMsR0FBVCxTQUFTLENB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Q0FBQyxNQUFNLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQztZQUMvQyxDQUFDO1NBQ0osQ0FBQztJQUNOLENBQUM7SUFFUyxhQUFhLENBQUMsVUFBa0IsRUFBRSxPQUFlO1FBRXZELElBQUcsQ0FBQyxPQUFPLEVBQUU7WUFDVCxPQUFPO1NBQ1Y7UUFFRCxNQUFNLFdBQVcsR0FBRyxPQUFPLENBQUM7UUFFNUIsTUFBTSxPQUFPLEdBQUc7WUFDWixNQUFNLEVBQUUsV0FBVztZQUNuQixNQUFNLEVBQUUsVUFBVTtTQUNELENBQUM7UUFFdEIsSUFBSSxDQUFDLGtCQUFrQixDQUFDLEdBQUcsQ0FBQyxXQUFXLEVBQUUsT0FBTyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsRUFBRSxDQUFDO0lBQ2hGLENBQUM7b0ZBMUhRLG1CQUFtQjtvRUFBbkIsbUJBQW1CO1lDakJoQyxvRUFFTTs7O1lBRnNDLG9EQUFvQjs7O1NEaUJuRCxtQkFBbUI7dUZBQW5CLG1CQUFtQjtjQUovQixTQUFTOzJCQUNJLGtCQUFrQiIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogU3VpdGVDUk0gaXMgYSBjdXN0b21lciByZWxhdGlvbnNoaXAgbWFuYWdlbWVudCBwcm9ncmFtIGRldmVsb3BlZCBieSBTYWxlc0FnaWxpdHkgTHRkLlxuICogQ29weXJpZ2h0IChDKSAyMDIxIFNhbGVzQWdpbGl0eSBMdGQuXG4gKlxuICogVGhpcyBwcm9ncmFtIGlzIGZyZWUgc29mdHdhcmU7IHlvdSBjYW4gcmVkaXN0cmlidXRlIGl0IGFuZC9vciBtb2RpZnkgaXQgdW5kZXJcbiAqIHRoZSB0ZXJtcyBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIHZlcnNpb24gMyBhcyBwdWJsaXNoZWQgYnkgdGhlXG4gKiBGcmVlIFNvZnR3YXJlIEZvdW5kYXRpb24gd2l0aCB0aGUgYWRkaXRpb24gb2YgdGhlIGZvbGxvd2luZyBwZXJtaXNzaW9uIGFkZGVkXG4gKiB0byBTZWN0aW9uIDE1IGFzIHBlcm1pdHRlZCBpbiBTZWN0aW9uIDcoYSk6IEZPUiBBTlkgUEFSVCBPRiBUSEUgQ09WRVJFRCBXT1JLXG4gKiBJTiBXSElDSCBUSEUgQ09QWVJJR0hUIElTIE9XTkVEIEJZIFNBTEVTQUdJTElUWSwgU0FMRVNBR0lMSVRZIERJU0NMQUlNUyBUSEVcbiAqIFdBUlJBTlRZIE9GIE5PTiBJTkZSSU5HRU1FTlQgT0YgVEhJUkQgUEFSVFkgUklHSFRTLlxuICpcbiAqIFRoaXMgcHJvZ3JhbSBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLCBidXQgV0lUSE9VVFxuICogQU5ZIFdBUlJBTlRZOyB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2YgTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1NcbiAqIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS4gU2VlIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgZm9yIG1vcmVcbiAqIGRldGFpbHMuXG4gKlxuICogWW91IHNob3VsZCBoYXZlIHJlY2VpdmVkIGEgY29weSBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4gKiBhbG9uZyB3aXRoIHRoaXMgcHJvZ3JhbS4gIElmIG5vdCwgc2VlIDxodHRwOi8vd3d3LmdudS5vcmcvbGljZW5zZXMvPi5cbiAqXG4gKiBJbiBhY2NvcmRhbmNlIHdpdGggU2VjdGlvbiA3KGIpIG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiAqIHZlcnNpb24gMywgdGhlc2UgQXBwcm9wcmlhdGUgTGVnYWwgTm90aWNlcyBtdXN0IHJldGFpbiB0aGUgZGlzcGxheSBvZiB0aGVcbiAqIFwiU3VwZXJjaGFyZ2VkIGJ5IFN1aXRlQ1JNXCIgbG9nby4gSWYgdGhlIGRpc3BsYXkgb2YgdGhlIGxvZ29zIGlzIG5vdCByZWFzb25hYmx5XG4gKiBmZWFzaWJsZSBmb3IgdGVjaG5pY2FsIHJlYXNvbnMsIHRoZSBBcHByb3ByaWF0ZSBMZWdhbCBOb3RpY2VzIG11c3QgZGlzcGxheVxuICogdGhlIHdvcmRzIFwiU3VwZXJjaGFyZ2VkIGJ5IFN1aXRlQ1JNXCIuXG4gKi9cblxuaW1wb3J0IHtDb21wb25lbnQsIE9uSW5pdH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0J1dHRvbkdyb3VwSW50ZXJmYWNlLCBCdXR0b25JbnRlcmZhY2V9IGZyb20gJ2NvbW1vbic7XG5pbXBvcnQge0JlaGF2aW9yU3ViamVjdH0gZnJvbSAncnhqcyc7XG5pbXBvcnQge21hcCwgdGFrZX0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHtMaXN0Vmlld1N0b3JlfSBmcm9tICcuLi8uLi9zdG9yZS9saXN0LXZpZXcvbGlzdC12aWV3LnN0b3JlJztcbmltcG9ydCB7U3lzdGVtQ29uZmlnU3RvcmV9IGZyb20gJy4uLy4uLy4uLy4uL3N0b3JlL3N5c3RlbS1jb25maWcvc3lzdGVtLWNvbmZpZy5zdG9yZSc7XG5pbXBvcnQge01vZHVsZUFjdGlvbn0gZnJvbSAnLi4vLi4vLi4vLi4vc3RvcmUvbmF2aWdhdGlvbi9uYXZpZ2F0aW9uLnN0b3JlJztcbmltcG9ydCB7XG4gICAgU2NyZWVuU2l6ZSxcbiAgICBTY3JlZW5TaXplT2JzZXJ2ZXJTZXJ2aWNlXG59IGZyb20gJy4uLy4uLy4uLy4uL3NlcnZpY2VzL3VpL3NjcmVlbi1zaXplLW9ic2VydmVyL3NjcmVlbi1zaXplLW9ic2VydmVyLnNlcnZpY2UnO1xuaW1wb3J0IHtNb2R1bGVOYXZpZ2F0aW9ufSBmcm9tICcuLi8uLi8uLi8uLi9zZXJ2aWNlcy9uYXZpZ2F0aW9uL21vZHVsZS1uYXZpZ2F0aW9uL21vZHVsZS1uYXZpZ2F0aW9uLnNlcnZpY2UnO1xuaW1wb3J0IHtBc3luY0FjdGlvbklucHV0LCBBc3luY0FjdGlvblNlcnZpY2V9IGZyb20gJy4uLy4uLy4uLy4uL3NlcnZpY2VzL3Byb2Nlc3MvcHJvY2Vzc2VzL2FzeW5jLWFjdGlvbi9hc3luYy1hY3Rpb24nO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ3Njcm0tYWN0aW9uLW1lbnUnLFxuICAgIHRlbXBsYXRlVXJsOiAnYWN0aW9uLW1lbnUuY29tcG9uZW50Lmh0bWwnLFxufSlcbmV4cG9ydCBjbGFzcyBBY3Rpb25NZW51Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICAgIGNvbmZpZ1N0YXRlID0gbmV3IEJlaGF2aW9yU3ViamVjdDxCdXR0b25Hcm91cEludGVyZmFjZT4oe2J1dHRvbnM6IFtdfSk7XG4gICAgY29uZmlnJCA9IHRoaXMuY29uZmlnU3RhdGUuYXNPYnNlcnZhYmxlKCk7XG5cbiAgICB2bSQgPSB0aGlzLnNjcmVlblNpemUuc2NyZWVuU2l6ZSQucGlwZShcbiAgICAgICAgbWFwKChzY3JlZW5TaXplKSA9PiB7XG4gICAgICAgICAgICBpZiAoc2NyZWVuU2l6ZSkge1xuICAgICAgICAgICAgICAgIHRoaXMuc2NyZWVuID0gc2NyZWVuU2l6ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuY29uZmlnU3RhdGUubmV4dCh0aGlzLmdldEJ1dHRvbkdyb3VwQ29uZmlnKCkpO1xuICAgICAgICAgICAgcmV0dXJuIHtzY3JlZW5TaXplfTtcbiAgICAgICAgfSlcbiAgICApO1xuXG4gICAgcHJvdGVjdGVkIHNjcmVlbjogU2NyZWVuU2l6ZSA9IFNjcmVlblNpemUuTWVkaXVtO1xuICAgIHByb3RlY3RlZCBkZWZhdWx0QnJlYWtwb2ludCA9IDM7XG4gICAgcHJvdGVjdGVkIGJyZWFrcG9pbnQ6IG51bWJlcjtcblxuXG4gICAgY29uc3RydWN0b3IoXG4gICAgICAgIHByb3RlY3RlZCBsaXN0U3RvcmU6IExpc3RWaWV3U3RvcmUsXG4gICAgICAgIHByb3RlY3RlZCBhY3Rpb25IYW5kbGVyOiBNb2R1bGVOYXZpZ2F0aW9uLFxuICAgICAgICBwcm90ZWN0ZWQgc2NyZWVuU2l6ZTogU2NyZWVuU2l6ZU9ic2VydmVyU2VydmljZSxcbiAgICAgICAgcHJvdGVjdGVkIHN5c3RlbUNvbmZpZ3M6IFN5c3RlbUNvbmZpZ1N0b3JlLFxuICAgICAgICBwcm90ZWN0ZWQgYXN5bmNBY3Rpb25TZXJ2aWNlOiBBc3luY0FjdGlvblNlcnZpY2VcbiAgICApIHtcbiAgICB9XG5cbiAgICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5jb25maWdTdGF0ZS5uZXh0KHRoaXMuZ2V0QnV0dG9uR3JvdXBDb25maWcoKSk7XG4gICAgfVxuXG4gICAgZ2V0QnV0dG9uR3JvdXBDb25maWcoKTogQnV0dG9uR3JvdXBJbnRlcmZhY2Uge1xuICAgICAgICBjb25zdCBhY3Rpb25zID0gdGhpcy5hY3Rpb25zO1xuICAgICAgICBjb25zdCBjb25maWcgPSB7XG4gICAgICAgICAgICBidXR0b25LbGFzczogWydhY3Rpb24tYnV0dG9uJ10sXG4gICAgICAgICAgICBkcm9wZG93bkxhYmVsOiB0aGlzLmxpc3RTdG9yZS5hcHBTdHJpbmdzLkxCTF9NT1JFIHx8ICcnLFxuICAgICAgICAgICAgYnV0dG9uczogW10sXG4gICAgICAgICAgICBkcm9wZG93bk9wdGlvbnM6IHtcbiAgICAgICAgICAgICAgICBwbGFjZW1lbnQ6IFsnYm90dG9tLXJpZ2h0J11cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBicmVha3BvaW50OiB0aGlzLmdldEJyZWFrcG9pbnQoKVxuICAgICAgICB9IGFzIEJ1dHRvbkdyb3VwSW50ZXJmYWNlO1xuXG4gICAgICAgIGFjdGlvbnMuZm9yRWFjaChhY3Rpb24gPT4ge1xuICAgICAgICAgICAgY29uc3QgYnV0dG9uQ29uZmlnID0gdGhpcy5nZXRCdXR0b25Db25maWcoYWN0aW9uKTtcbiAgICAgICAgICAgIGlmIChidXR0b25Db25maWcgJiYgYnV0dG9uQ29uZmlnLmtsYXNzKSB7XG4gICAgICAgICAgICAgICAgY29uZmlnLmJ1dHRvbnMucHVzaChidXR0b25Db25maWcpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIGNvbmZpZztcbiAgICB9XG5cbiAgICBnZXRCcmVha3BvaW50KCk6IG51bWJlciB7XG5cbiAgICAgICAgY29uc3QgYnJlYWtwb2ludE1hcCA9IHRoaXMuc3lzdGVtQ29uZmlncyAmJiB0aGlzLnN5c3RlbUNvbmZpZ3MuZ2V0Q29uZmlnVmFsdWUoJ2xpc3R2aWV3X2FjdGlvbnNfbGltaXRzJyk7XG5cbiAgICAgICAgaWYgKHRoaXMuc2NyZWVuICYmIGJyZWFrcG9pbnRNYXAgJiYgYnJlYWtwb2ludE1hcFt0aGlzLnNjcmVlbl0pIHtcbiAgICAgICAgICAgIHRoaXMuYnJlYWtwb2ludCA9IGJyZWFrcG9pbnRNYXBbdGhpcy5zY3JlZW5dO1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuYnJlYWtwb2ludDtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLmJyZWFrcG9pbnQpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmJyZWFrcG9pbnQ7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdGhpcy5kZWZhdWx0QnJlYWtwb2ludDtcbiAgICB9XG5cbiAgICBnZXQgYWN0aW9ucygpOiBNb2R1bGVBY3Rpb25bXSB7XG4gICAgICAgIGlmICghdGhpcy5saXN0U3RvcmUudm0uYXBwRGF0YS5tb2R1bGUgfHwgIXRoaXMubGlzdFN0b3JlLnZtLmFwcERhdGEubW9kdWxlLm1lbnUpIHtcbiAgICAgICAgICAgIHJldHVybiBbXTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0aGlzLmxpc3RTdG9yZS52bS5hcHBEYXRhLm1vZHVsZS5tZW51LmZpbHRlcihhY3Rpb24gPT4gIShhY3Rpb24ubmFtZSA9PT0gJ0xpc3QnIHx8IGFjdGlvbi5uYW1lID09PSAnVmlldycpKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0QnV0dG9uQ29uZmlnKGFjdGlvbjogTW9kdWxlQWN0aW9uKTogQnV0dG9uSW50ZXJmYWNlIHtcblxuICAgICAgICBpZiAoIXRoaXMubGlzdFN0b3JlLnZtLmFwcERhdGEuYXBwU3RhdGUubW9kdWxlKSB7XG4gICAgICAgICAgICByZXR1cm4ge307XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIXRoaXMubGlzdFN0b3JlLnZtLmFwcERhdGEubGFuZ3VhZ2UpIHtcbiAgICAgICAgICAgIHJldHVybiB7fTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IG1vZHVsZSA9IHRoaXMubGlzdFN0b3JlLnZtLmFwcERhdGEuYXBwU3RhdGUubW9kdWxlO1xuICAgICAgICBjb25zdCBsYW5ndWFnZSA9IHRoaXMubGlzdFN0b3JlLnZtLmFwcERhdGEubGFuZ3VhZ2U7XG4gICAgICAgIGxldCBsYWJlbEtleSA9ICcnO1xuICAgICAgICBpZiAoYWN0aW9uLmFjdGlvbkxhYmVsS2V5KSB7XG4gICAgICAgICAgICBsYWJlbEtleSA9IGFjdGlvbi5hY3Rpb25MYWJlbEtleTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBrbGFzczogJ2FjdGlvbi1idXR0b24nLFxuICAgICAgICAgICAgbGFiZWw6IHRoaXMuYWN0aW9uSGFuZGxlci5nZXRBY3Rpb25MYWJlbChtb2R1bGUsIGFjdGlvbiwgbGFuZ3VhZ2UsIGxhYmVsS2V5KSxcbiAgICAgICAgICAgIG9uQ2xpY2s6ICgpOiB2b2lkID0+IHtcbiAgICAgICAgICAgICAgICBpZihhY3Rpb24/LnByb2Nlc3MpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5oYW5kbGVQcm9jZXNzKG1vZHVsZSwgYWN0aW9uPy5wcm9jZXNzKVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0aGlzLmFjdGlvbkhhbmRsZXIubmF2aWdhdGUoYWN0aW9uKS50aGVuKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIGhhbmRsZVByb2Nlc3MobW9kdWxlTmFtZTogc3RyaW5nLCBwcm9jZXNzOiBzdHJpbmcpIHtcblxuICAgICAgICBpZighcHJvY2Vzcykge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgcHJvY2Vzc1R5cGUgPSBwcm9jZXNzO1xuXG4gICAgICAgIGNvbnN0IG9wdGlvbnMgPSB7XG4gICAgICAgICAgICBhY3Rpb246IHByb2Nlc3NUeXBlLFxuICAgICAgICAgICAgbW9kdWxlOiBtb2R1bGVOYW1lLFxuICAgICAgICB9IGFzIEFzeW5jQWN0aW9uSW5wdXQ7XG5cbiAgICAgICAgdGhpcy5hc3luY0FjdGlvblNlcnZpY2UucnVuKHByb2Nlc3NUeXBlLCBvcHRpb25zKS5waXBlKHRha2UoMSkpLnN1YnNjcmliZSgpO1xuICAgIH1cbn1cbiIsIjwhIC0tXG4vKipcbiogU3VpdGVDUk0gaXMgYSBjdXN0b21lciByZWxhdGlvbnNoaXAgbWFuYWdlbWVudCBwcm9ncmFtIGRldmVsb3BlZCBieSBTYWxlc0FnaWxpdHkgTHRkLlxuKiBDb3B5cmlnaHQgKEMpIDIwMjEgU2FsZXNBZ2lsaXR5IEx0ZC5cbipcbiogVGhpcyBwcm9ncmFtIGlzIGZyZWUgc29mdHdhcmU7IHlvdSBjYW4gcmVkaXN0cmlidXRlIGl0IGFuZC9vciBtb2RpZnkgaXQgdW5kZXJcbiogdGhlIHRlcm1zIG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgdmVyc2lvbiAzIGFzIHB1Ymxpc2hlZCBieSB0aGVcbiogRnJlZSBTb2Z0d2FyZSBGb3VuZGF0aW9uIHdpdGggdGhlIGFkZGl0aW9uIG9mIHRoZSBmb2xsb3dpbmcgcGVybWlzc2lvbiBhZGRlZFxuKiB0byBTZWN0aW9uIDE1IGFzIHBlcm1pdHRlZCBpbiBTZWN0aW9uIDcoYSk6IEZPUiBBTlkgUEFSVCBPRiBUSEUgQ09WRVJFRCBXT1JLXG4qIElOIFdISUNIIFRIRSBDT1BZUklHSFQgSVMgT1dORUQgQlkgU0FMRVNBR0lMSVRZLCBTQUxFU0FHSUxJVFkgRElTQ0xBSU1TIFRIRVxuKiBXQVJSQU5UWSBPRiBOT04gSU5GUklOR0VNRU5UIE9GIFRISVJEIFBBUlRZIFJJR0hUUy5cbipcbiogVGhpcyBwcm9ncmFtIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsIGJ1dCBXSVRIT1VUXG4qIEFOWSBXQVJSQU5UWTsgd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTXG4qIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS4gU2VlIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgZm9yIG1vcmVcbiogZGV0YWlscy5cbipcbiogWW91IHNob3VsZCBoYXZlIHJlY2VpdmVkIGEgY29weSBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4qIGFsb25nIHdpdGggdGhpcyBwcm9ncmFtLiAgSWYgbm90LCBzZWUgaHR0cDovL3d3dy5nbnUub3JnL2xpY2Vuc2VzLlxuKlxuKiBJbiBhY2NvcmRhbmNlIHdpdGggU2VjdGlvbiA3KGIpIG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiogdmVyc2lvbiAzLCB0aGVzZSBBcHByb3ByaWF0ZSBMZWdhbCBOb3RpY2VzIG11c3QgcmV0YWluIHRoZSBkaXNwbGF5IG9mIHRoZVxuKiBcIlN1cGVyY2hhcmdlZCBieSBTdWl0ZUNSTVwiIGxvZ28uIElmIHRoZSBkaXNwbGF5IG9mIHRoZSBsb2dvcyBpcyBub3QgcmVhc29uYWJseVxuKiBmZWFzaWJsZSBmb3IgdGVjaG5pY2FsIHJlYXNvbnMsIHRoZSBBcHByb3ByaWF0ZSBMZWdhbCBOb3RpY2VzIG11c3QgZGlzcGxheVxuKiB0aGUgd29yZHMgXCJTdXBlcmNoYXJnZWQgYnkgU3VpdGVDUk1cIi5cbiovXG4tLT5cbjxkaXYgY2xhc3M9XCJsaXN0LXZpZXctYWN0aW9ucyBmbG9hdC1yaWdodFwiICpuZ0lmPVwiKHZtJCB8IGFzeW5jKSBhcyB2bVwiPlxuICAgIDxzY3JtLWJ1dHRvbi1ncm91cCBbY29uZmlnJF09XCJjb25maWckXCI+PC9zY3JtLWJ1dHRvbi1ncm91cD5cbjwvZGl2PlxuIl19