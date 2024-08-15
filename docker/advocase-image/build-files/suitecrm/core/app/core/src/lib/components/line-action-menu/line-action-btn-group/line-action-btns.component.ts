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

import {Component, Input} from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'line-action-btns',
    templateUrl: 'line-action-btns.component.html',
})
export class LineActionBtnComponent {
  @Input() record: any;
  @Input() module: string;
  @Input() subpanel: boolean;
  currentModule: string;

  constructor(
    private router: Router
  ) {
  }

  ngOnInit(): void {
    this.currentModule = this.module;
    console.log(this.record);
  }

  onClickPhone(event: MouseEvent) {
    this.router.navigate(['meetings/edit'], {
      queryParams: {
        return_module: 'Meetings',
        return_action: 'DetailView'
      }
    });
    event.stopPropagation();
  }

  onClickPaperClip(event: MouseEvent) {
    this.router.navigate(['documents/edit'], {
      queryParams: {
        return_module: 'Cases',
        return_action: 'DetailView',
        return_id: this.record.id,
        relate_to: 'cases',
        relate_id: this.record.id,
        case_id: this.record.id,
        case_name: 'DemoCase',
        return_name: 'DemoCase',
        documents_cases_name: 'DemoCase',
        parent_name: 'DemoCase',
        parent_id: this.record.id,
        target_module: 'documents',
        return_relationship: 'documents_cases',
        parent_type: 'Cases'
      }
    });
    event.stopPropagation();
  }

  onClickCreateCase(event: MouseEvent) {
    this.router.navigate(['cases/edit'], {
      queryParams: {
        return_module: 'Cases',
        return_action: 'DetailView'
      }
    });
    event.stopPropagation();
  }
}
