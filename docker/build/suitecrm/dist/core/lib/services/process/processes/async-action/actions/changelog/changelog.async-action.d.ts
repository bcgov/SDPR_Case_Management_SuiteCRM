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
import { AsyncActionData, AsyncActionHandler } from '../../async-action.model';
import { Router } from '@angular/router';
import { MessageService } from '../../../../../message/message.service';
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import * as i0 from "@angular/core";
export declare class ChangelogAsyncAction extends AsyncActionHandler {
    protected router: Router;
    protected modalService: NgbModal;
    protected message: MessageService;
    key: string;
    constructor(router: Router, modalService: NgbModal, message: MessageService);
    run(data: AsyncActionData): void;
    /**
     * Remove title text from iframe source document
     */
    changeLogLegacyContentFormatter(iframeElement: HTMLIFrameElement): void;
    /**
     * Show record selection modal
     */
    protected showClassicViewModal(url: string): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<ChangelogAsyncAction, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<ChangelogAsyncAction>;
}
