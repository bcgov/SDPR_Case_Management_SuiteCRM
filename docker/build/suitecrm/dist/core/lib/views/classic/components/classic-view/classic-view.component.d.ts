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
import { AfterViewInit, ElementRef, NgZone, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';
import { IframeResizeHandlerHandler } from '../../services/iframe-resize-handler.service';
import { SystemConfigStore } from '../../../../store/system-config/system-config.store';
import { AuthService } from '../../../../services/auth/auth.service';
import { RouteConverter, RouteInfo } from '../../../../services/navigation/route-converter/route-converter.service';
import { IframePageChangeObserver } from '../../services/iframe-page-change-observer.service';
import * as i0 from "@angular/core";
export declare class ClassicViewUiComponent implements OnInit, OnDestroy, AfterViewInit {
    private route;
    private router;
    private sanitizer;
    private routeConverter;
    private auth;
    private ngZone;
    private systemConfigs;
    dataContainer: ElementRef;
    wrapper: any;
    url: string;
    protected iframe: any;
    private iframePageChangeHandler;
    private iframeResizeHandler;
    constructor(route: ActivatedRoute, router: Router, sanitizer: DomSanitizer, routeConverter: RouteConverter, auth: AuthService, ngZone: NgZone, systemConfigs: SystemConfigStore);
    ngOnInit(): void;
    ngAfterViewInit(): void;
    ngOnDestroy(): void;
    cleanObservers(): void;
    initIframe(): void;
    initObservers(): void;
    protected onPageChange(newLocation: any): void;
    protected onIFrameLoad(): void;
    protected onIFrameUnload(): void;
    protected buildIframePageChangeObserver(): IframePageChangeObserver;
    protected buildIframeResizeHandlerHandler(): IframeResizeHandlerHandler;
    /**
     * Check if should re-direct to link or if it was excluded
     *
     * @param {string} legacyLink to check
     * @returns {boolean} should redirect
     */
    protected shouldRedirect(legacyLink: string): boolean;
    /**
     * Check if given route is to exclude from redirection
     *
     * @param {object} routeInfo to check
     * @returns {boolean} is to exclude
     */
    protected toExclude(routeInfo: RouteInfo): boolean;
    static ɵfac: i0.ɵɵFactoryDeclaration<ClassicViewUiComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ClassicViewUiComponent, "scrm-classic-view-ui", never, {}, {}, never, never, false, never>;
}
