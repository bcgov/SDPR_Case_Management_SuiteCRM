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
import { AfterViewInit, ElementRef, OnDestroy, OnInit } from '@angular/core';
import { IframeResizeHandlerHandler } from "../../../../views/classic/services/iframe-resize-handler.service";
import { IframePageChangeObserver } from "../../../../views/classic/services/iframe-page-change-observer.service";
import { NgbActiveModal } from "@ng-bootstrap/ng-bootstrap";
import { ButtonInterface } from "common";
import { LanguageStore } from "../../../../store/language/language.store";
import * as i0 from "@angular/core";
export declare class ClassicModalComponent implements OnInit, OnDestroy, AfterViewInit {
    languageStore: LanguageStore;
    protected activeModal: NgbActiveModal;
    url: string;
    titleKey: string;
    asyncActionCallback: Function;
    dataContainer: ElementRef;
    closeButton: ButtonInterface;
    wrapper: any;
    protected iframe: any;
    private iframePageChangeHandler;
    private iframeResizeHandler;
    constructor(languageStore: LanguageStore, activeModal: NgbActiveModal);
    ngOnInit(): void;
    ngAfterViewInit(): void;
    ngOnDestroy(): void;
    cleanObservers(): void;
    initIframe(): void;
    initObservers(): void;
    protected onIFrameLoad(): void;
    protected onIFrameUnload(): void;
    protected buildIframePageChangeObserver(): IframePageChangeObserver;
    protected buildIframeResizeHandlerHandler(): IframeResizeHandlerHandler;
    static ɵfac: i0.ɵɵFactoryDeclaration<ClassicModalComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ClassicModalComponent, "scrm-classic-modal", never, { "url": { "alias": "url"; "required": false; }; "titleKey": { "alias": "titleKey"; "required": false; }; "asyncActionCallback": { "alias": "asyncActionCallback"; "required": false; }; }, {}, never, never, false, never>;
}
