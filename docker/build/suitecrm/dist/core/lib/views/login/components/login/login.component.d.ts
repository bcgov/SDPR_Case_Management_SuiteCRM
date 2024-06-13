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
import { OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { RecoverPasswordService } from '../../../../services/process/processes/recover-password/recover-password';
import { SystemConfigMap, SystemConfigStore } from '../../../../store/system-config/system-config.store';
import { AuthService } from '../../../../services/auth/auth.service';
import { LanguageStore, LanguageStringMap } from '../../../../store/language/language.store';
import { MessageService } from '../../../../services/message/message.service';
import { StringMap } from 'common';
import { HttpErrorResponse } from '@angular/common/http';
import { AppStateStore } from "../../../../store/app-state/app-state.store";
import * as i0 from "@angular/core";
export declare class LoginUiComponent implements OnInit {
    protected router: Router;
    protected auth: AuthService;
    protected message: MessageService;
    protected configs: SystemConfigStore;
    protected languageStore: LanguageStore;
    protected recoverPasswordService: RecoverPasswordService;
    protected appState: AppStateStore;
    hidden: boolean;
    loading: boolean;
    error: string;
    uname: string;
    passw: string;
    email: string;
    cardState: string;
    systemConfigs$: Observable<SystemConfigMap>;
    appStrings$: Observable<LanguageStringMap>;
    language: string;
    vm$: Observable<{
        systemConfigs: SystemConfigMap;
        appStrings: LanguageStringMap;
        showLanguages: boolean;
        showForgotPassword: boolean;
    }>;
    constructor(router: Router, auth: AuthService, message: MessageService, configs: SystemConfigStore, languageStore: LanguageStore, recoverPasswordService: RecoverPasswordService, appState: AppStateStore);
    ngOnInit(): void;
    onLanguageSelect(language: string): void;
    changeLanguage(language: string): void;
    getEnabledLanguages(): StringMap;
    getEnabledLanguagesKeys(): string[];
    flipCard(): void;
    doLogin(): void;
    recoverPassword(): void;
    onLoginSuccess(result: any): void;
    onLoginError(httpError: HttpErrorResponse): void;
    protected getTooManyFailedMessage(defaultTooManyFailedMessage: string): string;
    protected setCurrentLanguage(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<LoginUiComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<LoginUiComponent, "scrm-login-ui", never, {}, {}, never, never, false, never>;
}
