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
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecordListModalComponent } from './record-list-modal.component';
import { LoadingSpinnerModule } from '../../../../components/loading-spinner/loading-spinner.module';
import { LabelModule } from '../../../../components/label/label.module';
import { ModalModule } from '../../../../components/modal/components/modal/modal.module';
import { ListFilterModule } from '../../../list-filter/components/list-filter/list-filter.module';
import { TableModule } from '../../../../components/table/table.module';
import { ButtonModule } from "../../../../components/button/button.module";
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "../../../../components/modal/components/modal/modal.component";
import * as i3 from "../../../../components/table/table.component";
import * as i4 from "../../../../components/label/label.component";
import * as i5 from "../../../../components/loading-spinner/loading-spinner.component";
import * as i6 from "../../../list-filter/components/list-filter/list-filter.component";
import * as i7 from "../../../../components/button/button.component";
class RecordListModalModule {
    static { this.ɵfac = function RecordListModalModule_Factory(t) { return new (t || RecordListModalModule)(); }; }
    static { this.ɵmod = /*@__PURE__*/ i0.ɵɵdefineNgModule({ type: RecordListModalModule }); }
    static { this.ɵinj = /*@__PURE__*/ i0.ɵɵdefineInjector({ imports: [CommonModule,
            ModalModule,
            TableModule,
            LabelModule,
            LoadingSpinnerModule,
            ListFilterModule,
            ButtonModule] }); }
}
export { RecordListModalModule };
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(RecordListModalModule, [{
        type: NgModule,
        args: [{
                declarations: [RecordListModalComponent],
                imports: [
                    CommonModule,
                    ModalModule,
                    TableModule,
                    LabelModule,
                    LoadingSpinnerModule,
                    ListFilterModule,
                    ButtonModule,
                ]
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(RecordListModalModule, { declarations: [RecordListModalComponent], imports: [CommonModule,
        ModalModule,
        TableModule,
        LabelModule,
        LoadingSpinnerModule,
        ListFilterModule,
        ButtonModule] }); })();
i0.ɵɵsetComponentScope(RecordListModalComponent, [i1.NgIf, i2.ModalComponent, i3.TableComponent, i4.LabelComponent, i5.LoadingSpinnerComponent, i6.ListFilterComponent, i7.ButtonComponent], [i1.AsyncPipe]);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVjb3JkLWxpc3QtbW9kYWwubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vY29yZS9hcHAvY29yZS9zcmMvbGliL2NvbnRhaW5lcnMvcmVjb3JkLWxpc3QtbW9kYWwvY29tcG9uZW50cy9yZWNvcmQtbGlzdC1tb2RhbC9yZWNvcmQtbGlzdC1tb2RhbC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQXdCRztBQUVILE9BQU8sRUFBQyxRQUFRLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDdkMsT0FBTyxFQUFDLFlBQVksRUFBQyxNQUFNLGlCQUFpQixDQUFDO0FBQzdDLE9BQU8sRUFBQyx3QkFBd0IsRUFBQyxNQUFNLCtCQUErQixDQUFDO0FBQ3ZFLE9BQU8sRUFBQyxvQkFBb0IsRUFBQyxNQUFNLCtEQUErRCxDQUFDO0FBQ25HLE9BQU8sRUFBQyxXQUFXLEVBQUMsTUFBTSwyQ0FBMkMsQ0FBQztBQUN0RSxPQUFPLEVBQUMsV0FBVyxFQUFDLE1BQU0sNERBQTRELENBQUM7QUFDdkYsT0FBTyxFQUFDLGdCQUFnQixFQUFDLE1BQU0sZ0VBQWdFLENBQUM7QUFDaEcsT0FBTyxFQUFDLFdBQVcsRUFBQyxNQUFNLDJDQUEyQyxDQUFDO0FBQ3RFLE9BQU8sRUFBQyxZQUFZLEVBQUMsTUFBTSw2Q0FBNkMsQ0FBQzs7Ozs7Ozs7O0FBR3pFLE1BWWEscUJBQXFCO3NGQUFyQixxQkFBcUI7bUVBQXJCLHFCQUFxQjt1RUFUMUIsWUFBWTtZQUNaLFdBQVc7WUFDWCxXQUFXO1lBQ1gsV0FBVztZQUNYLG9CQUFvQjtZQUNwQixnQkFBZ0I7WUFDaEIsWUFBWTs7U0FHUCxxQkFBcUI7dUZBQXJCLHFCQUFxQjtjQVpqQyxRQUFRO2VBQUM7Z0JBQ04sWUFBWSxFQUFFLENBQUMsd0JBQXdCLENBQUM7Z0JBQ3hDLE9BQU8sRUFBRTtvQkFDTCxZQUFZO29CQUNaLFdBQVc7b0JBQ1gsV0FBVztvQkFDWCxXQUFXO29CQUNYLG9CQUFvQjtvQkFDcEIsZ0JBQWdCO29CQUNoQixZQUFZO2lCQUNmO2FBQ0o7O3dGQUNZLHFCQUFxQixtQkFYZix3QkFBd0IsYUFFbkMsWUFBWTtRQUNaLFdBQVc7UUFDWCxXQUFXO1FBQ1gsV0FBVztRQUNYLG9CQUFvQjtRQUNwQixnQkFBZ0I7UUFDaEIsWUFBWTt1QkFSRCx3QkFBd0IiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIFN1aXRlQ1JNIGlzIGEgY3VzdG9tZXIgcmVsYXRpb25zaGlwIG1hbmFnZW1lbnQgcHJvZ3JhbSBkZXZlbG9wZWQgYnkgU2FsZXNBZ2lsaXR5IEx0ZC5cbiAqIENvcHlyaWdodCAoQykgMjAyMSBTYWxlc0FnaWxpdHkgTHRkLlxuICpcbiAqIFRoaXMgcHJvZ3JhbSBpcyBmcmVlIHNvZnR3YXJlOyB5b3UgY2FuIHJlZGlzdHJpYnV0ZSBpdCBhbmQvb3IgbW9kaWZ5IGl0IHVuZGVyXG4gKiB0aGUgdGVybXMgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZSB2ZXJzaW9uIDMgYXMgcHVibGlzaGVkIGJ5IHRoZVxuICogRnJlZSBTb2Z0d2FyZSBGb3VuZGF0aW9uIHdpdGggdGhlIGFkZGl0aW9uIG9mIHRoZSBmb2xsb3dpbmcgcGVybWlzc2lvbiBhZGRlZFxuICogdG8gU2VjdGlvbiAxNSBhcyBwZXJtaXR0ZWQgaW4gU2VjdGlvbiA3KGEpOiBGT1IgQU5ZIFBBUlQgT0YgVEhFIENPVkVSRUQgV09SS1xuICogSU4gV0hJQ0ggVEhFIENPUFlSSUdIVCBJUyBPV05FRCBCWSBTQUxFU0FHSUxJVFksIFNBTEVTQUdJTElUWSBESVNDTEFJTVMgVEhFXG4gKiBXQVJSQU5UWSBPRiBOT04gSU5GUklOR0VNRU5UIE9GIFRISVJEIFBBUlRZIFJJR0hUUy5cbiAqXG4gKiBUaGlzIHByb2dyYW0gaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCwgYnV0IFdJVEhPVVRcbiAqIEFOWSBXQVJSQU5UWTsgd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTXG4gKiBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuIFNlZSB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGZvciBtb3JlXG4gKiBkZXRhaWxzLlxuICpcbiAqIFlvdSBzaG91bGQgaGF2ZSByZWNlaXZlZCBhIGNvcHkgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuICogYWxvbmcgd2l0aCB0aGlzIHByb2dyYW0uICBJZiBub3QsIHNlZSA8aHR0cDovL3d3dy5nbnUub3JnL2xpY2Vuc2VzLz4uXG4gKlxuICogSW4gYWNjb3JkYW5jZSB3aXRoIFNlY3Rpb24gNyhiKSBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4gKiB2ZXJzaW9uIDMsIHRoZXNlIEFwcHJvcHJpYXRlIExlZ2FsIE5vdGljZXMgbXVzdCByZXRhaW4gdGhlIGRpc3BsYXkgb2YgdGhlXG4gKiBcIlN1cGVyY2hhcmdlZCBieSBTdWl0ZUNSTVwiIGxvZ28uIElmIHRoZSBkaXNwbGF5IG9mIHRoZSBsb2dvcyBpcyBub3QgcmVhc29uYWJseVxuICogZmVhc2libGUgZm9yIHRlY2huaWNhbCByZWFzb25zLCB0aGUgQXBwcm9wcmlhdGUgTGVnYWwgTm90aWNlcyBtdXN0IGRpc3BsYXlcbiAqIHRoZSB3b3JkcyBcIlN1cGVyY2hhcmdlZCBieSBTdWl0ZUNSTVwiLlxuICovXG5cbmltcG9ydCB7TmdNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtDb21tb25Nb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQge1JlY29yZExpc3RNb2RhbENvbXBvbmVudH0gZnJvbSAnLi9yZWNvcmQtbGlzdC1tb2RhbC5jb21wb25lbnQnO1xuaW1wb3J0IHtMb2FkaW5nU3Bpbm5lck1vZHVsZX0gZnJvbSAnLi4vLi4vLi4vLi4vY29tcG9uZW50cy9sb2FkaW5nLXNwaW5uZXIvbG9hZGluZy1zcGlubmVyLm1vZHVsZSc7XG5pbXBvcnQge0xhYmVsTW9kdWxlfSBmcm9tICcuLi8uLi8uLi8uLi9jb21wb25lbnRzL2xhYmVsL2xhYmVsLm1vZHVsZSc7XG5pbXBvcnQge01vZGFsTW9kdWxlfSBmcm9tICcuLi8uLi8uLi8uLi9jb21wb25lbnRzL21vZGFsL2NvbXBvbmVudHMvbW9kYWwvbW9kYWwubW9kdWxlJztcbmltcG9ydCB7TGlzdEZpbHRlck1vZHVsZX0gZnJvbSAnLi4vLi4vLi4vbGlzdC1maWx0ZXIvY29tcG9uZW50cy9saXN0LWZpbHRlci9saXN0LWZpbHRlci5tb2R1bGUnO1xuaW1wb3J0IHtUYWJsZU1vZHVsZX0gZnJvbSAnLi4vLi4vLi4vLi4vY29tcG9uZW50cy90YWJsZS90YWJsZS5tb2R1bGUnO1xuaW1wb3J0IHtCdXR0b25Nb2R1bGV9IGZyb20gXCIuLi8uLi8uLi8uLi9jb21wb25lbnRzL2J1dHRvbi9idXR0b24ubW9kdWxlXCI7XG5cblxuQE5nTW9kdWxlKHtcbiAgICBkZWNsYXJhdGlvbnM6IFtSZWNvcmRMaXN0TW9kYWxDb21wb25lbnRdLFxuICAgIGltcG9ydHM6IFtcbiAgICAgICAgQ29tbW9uTW9kdWxlLFxuICAgICAgICBNb2RhbE1vZHVsZSxcbiAgICAgICAgVGFibGVNb2R1bGUsXG4gICAgICAgIExhYmVsTW9kdWxlLFxuICAgICAgICBMb2FkaW5nU3Bpbm5lck1vZHVsZSxcbiAgICAgICAgTGlzdEZpbHRlck1vZHVsZSxcbiAgICAgICAgQnV0dG9uTW9kdWxlLFxuICAgIF1cbn0pXG5leHBvcnQgY2xhc3MgUmVjb3JkTGlzdE1vZGFsTW9kdWxlIHtcbn1cbiJdfQ==