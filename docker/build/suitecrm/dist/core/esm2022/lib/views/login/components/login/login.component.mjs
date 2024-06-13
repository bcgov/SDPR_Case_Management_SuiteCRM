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
import { Router } from '@angular/router';
import { combineLatestWith, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { transition, trigger, useAnimation } from '@angular/animations';
import { fadeIn } from 'ng-animate';
import { RecoverPasswordService } from '../../../../services/process/processes/recover-password/recover-password';
import { SystemConfigStore } from '../../../../store/system-config/system-config.store';
import { AuthService } from '../../../../services/auth/auth.service';
import { LanguageStore } from '../../../../store/language/language.store';
import { MessageService } from '../../../../services/message/message.service';
import { AppStateStore } from "../../../../store/app-state/app-state.store";
import * as i0 from "@angular/core";
import * as i1 from "@angular/router";
import * as i2 from "../../../../services/auth/auth.service";
import * as i3 from "../../../../services/message/message.service";
import * as i4 from "../../../../store/system-config/system-config.store";
import * as i5 from "../../../../store/language/language.store";
import * as i6 from "../../../../services/process/processes/recover-password/recover-password";
import * as i7 from "../../../../store/app-state/app-state.store";
import * as i8 from "@angular/forms";
import * as i9 from "../../../../components/logo/logo.component";
import * as i10 from "@angular/common";
import * as i11 from "../../../../components/image/image.component";
import * as i12 from "../../../../directives/button-loading/button-loading.directive";
function LoginUiComponent_div_0_div_6_option_9_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "option", 17);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r8 = ctx.$implicit;
    const ctx_r7 = i0.ɵɵnextContext(3);
    let tmp_0_0;
    i0.ɵɵproperty("selected", ((tmp_0_0 = ctx_r7.language) !== null && tmp_0_0 !== undefined ? tmp_0_0 : "en_us") === item_r8)("value", item_r8);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", ctx_r7.getEnabledLanguages()[item_r8], " ");
} }
function LoginUiComponent_div_0_div_6_Template(rf, ctx) { if (rf & 1) {
    const _r10 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 10)(1, "div", 5)(2, "label", 11);
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd()();
    i0.ɵɵelement(4, "div", 12);
    i0.ɵɵelementStart(5, "div", 5)(6, "div", 13)(7, "select", 14, 15);
    i0.ɵɵlistener("change", function LoginUiComponent_div_0_div_6_Template_select_change_7_listener() { i0.ɵɵrestoreView(_r10); const _r6 = i0.ɵɵreference(8); const ctx_r9 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r9.onLanguageSelect(_r6.value)); });
    i0.ɵɵtemplate(9, LoginUiComponent_div_0_div_6_option_9_Template, 2, 3, "option", 16);
    i0.ɵɵelementEnd()()()();
} if (rf & 2) {
    const vm_r1 = i0.ɵɵnextContext().ngIf;
    const ctx_r3 = i0.ɵɵnextContext();
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(vm_r1.appStrings["LBL_LANGUAGE"]);
    i0.ɵɵadvance(6);
    i0.ɵɵproperty("ngForOf", ctx_r3.getEnabledLanguagesKeys());
} }
function LoginUiComponent_div_0_div_8_div_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 28);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const vm_r1 = i0.ɵɵnextContext(2).ngIf;
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", vm_r1.appStrings["ERR_MISSING_REQUIRED_FIELDS"], " ");
} }
function LoginUiComponent_div_0_div_8_div_10_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 28);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const vm_r1 = i0.ɵɵnextContext(2).ngIf;
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", vm_r1.appStrings["ERR_MISSING_REQUIRED_FIELDS"], " ");
} }
function LoginUiComponent_div_0_div_8_div_13_Template(rf, ctx) { if (rf & 1) {
    const _r20 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 29)(1, "a", 30);
    i0.ɵɵlistener("click", function LoginUiComponent_div_0_div_8_div_13_Template_a_click_1_listener() { i0.ɵɵrestoreView(_r20); const ctx_r19 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r19.flipCard()); });
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const vm_r1 = i0.ɵɵnextContext(2).ngIf;
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", vm_r1.appStrings["LBL_LOGIN_FORGOT_PASSWORD"], " ");
} }
function LoginUiComponent_div_0_div_8_Template(rf, ctx) { if (rf & 1) {
    const _r23 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 18)(1, "div", 13);
    i0.ɵɵelement(2, "scrm-image", 19);
    i0.ɵɵelementStart(3, "input", 20, 21);
    i0.ɵɵlistener("ngModelChange", function LoginUiComponent_div_0_div_8_Template_input_ngModelChange_3_listener($event) { i0.ɵɵrestoreView(_r23); const ctx_r22 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r22.uname = $event); });
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(5, LoginUiComponent_div_0_div_8_div_5_Template, 2, 1, "div", 22);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "div", 13);
    i0.ɵɵelement(7, "scrm-image", 23);
    i0.ɵɵelementStart(8, "input", 24, 25);
    i0.ɵɵlistener("ngModelChange", function LoginUiComponent_div_0_div_8_Template_input_ngModelChange_8_listener($event) { i0.ɵɵrestoreView(_r23); const ctx_r24 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r24.passw = $event); });
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(10, LoginUiComponent_div_0_div_8_div_10_Template, 2, 1, "div", 22);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(11, "button", 26);
    i0.ɵɵlistener("click", function LoginUiComponent_div_0_div_8_Template_button_click_11_listener() { i0.ɵɵrestoreView(_r23); i0.ɵɵnextContext(); const _r2 = i0.ɵɵreference(2); const ctx_r25 = i0.ɵɵnextContext(); _r2.control.markAllAsTouched(); return i0.ɵɵresetView(_r2.valid && ctx_r25.doLogin()); });
    i0.ɵɵtext(12);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(13, LoginUiComponent_div_0_div_8_div_13_Template, 3, 1, "div", 27);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const _r12 = i0.ɵɵreference(4);
    const _r14 = i0.ɵɵreference(9);
    const vm_r1 = i0.ɵɵnextContext().ngIf;
    const ctx_r4 = i0.ɵɵnextContext();
    i0.ɵɵproperty("@fade", undefined);
    i0.ɵɵadvance(3);
    i0.ɵɵclassProp("is-invalid", _r12.invalid && _r12.touched);
    i0.ɵɵpropertyInterpolate("placeholder", vm_r1.appStrings["LBL_USER_NAME"]);
    i0.ɵɵproperty("ngModel", ctx_r4.uname);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", _r12.invalid && _r12.touched);
    i0.ɵɵadvance(3);
    i0.ɵɵclassProp("is-invalid", _r14.invalid && _r14.touched);
    i0.ɵɵpropertyInterpolate("placeholder", vm_r1.appStrings["LBL_PASSWORD"]);
    i0.ɵɵproperty("ngModel", ctx_r4.passw);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", _r14.invalid && _r14.touched);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("scrm-button-loading", ctx_r4.loading);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", vm_r1.appStrings["LBL_LOGIN_BUTTON_LABEL"], " ");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", vm_r1.showForgotPassword);
} }
function LoginUiComponent_div_0_div_9_div_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 28);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const vm_r1 = i0.ɵɵnextContext(2).ngIf;
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", vm_r1.appStrings["ERR_MISSING_REQUIRED_FIELDS"], " ");
} }
function LoginUiComponent_div_0_div_9_div_10_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 28);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const vm_r1 = i0.ɵɵnextContext(2).ngIf;
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", vm_r1.appStrings["ERR_MISSING_REQUIRED_FIELDS"], " ");
} }
function LoginUiComponent_div_0_div_9_Template(rf, ctx) { if (rf & 1) {
    const _r34 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 31)(1, "div", 13);
    i0.ɵɵelement(2, "scrm-image", 19);
    i0.ɵɵelementStart(3, "input", 20, 21);
    i0.ɵɵlistener("ngModelChange", function LoginUiComponent_div_0_div_9_Template_input_ngModelChange_3_listener($event) { i0.ɵɵrestoreView(_r34); const ctx_r33 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r33.uname = $event); });
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(5, LoginUiComponent_div_0_div_9_div_5_Template, 2, 1, "div", 22);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "div", 13);
    i0.ɵɵelement(7, "scrm-image", 32);
    i0.ɵɵelementStart(8, "input", 33, 34);
    i0.ɵɵlistener("ngModelChange", function LoginUiComponent_div_0_div_9_Template_input_ngModelChange_8_listener($event) { i0.ɵɵrestoreView(_r34); const ctx_r35 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r35.email = $event); });
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(10, LoginUiComponent_div_0_div_9_div_10_Template, 2, 1, "div", 22);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(11, "button", 35);
    i0.ɵɵlistener("click", function LoginUiComponent_div_0_div_9_Template_button_click_11_listener() { i0.ɵɵrestoreView(_r34); i0.ɵɵnextContext(); const _r2 = i0.ɵɵreference(2); const ctx_r36 = i0.ɵɵnextContext(); _r2.control.markAllAsTouched(); return i0.ɵɵresetView(_r2.valid && ctx_r36.recoverPassword()); });
    i0.ɵɵtext(12);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(13, "div")(14, "a", 36);
    i0.ɵɵlistener("click", function LoginUiComponent_div_0_div_9_Template_a_click_14_listener() { i0.ɵɵrestoreView(_r34); const ctx_r37 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r37.flipCard()); });
    i0.ɵɵtext(15);
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const _r27 = i0.ɵɵreference(4);
    const _r29 = i0.ɵɵreference(9);
    const vm_r1 = i0.ɵɵnextContext().ngIf;
    const ctx_r5 = i0.ɵɵnextContext();
    i0.ɵɵproperty("@fade", undefined);
    i0.ɵɵadvance(3);
    i0.ɵɵclassProp("is-invalid", _r27.invalid && _r27.touched);
    i0.ɵɵpropertyInterpolate("placeholder", vm_r1.appStrings["LBL_USER_NAME"]);
    i0.ɵɵproperty("ngModel", ctx_r5.uname);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", _r27.invalid && _r27.touched);
    i0.ɵɵadvance(3);
    i0.ɵɵclassProp("is-invalid", _r29.invalid && _r29.touched);
    i0.ɵɵpropertyInterpolate("placeholder", vm_r1.appStrings["LBL_EMAIL"]);
    i0.ɵɵproperty("ngModel", ctx_r5.email);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", _r29.invalid && _r29.touched);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", vm_r1.appStrings["LBL_GENERATE_PASSWORD_BUTTON_TITLE"], " ");
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1(" ", vm_r1.appStrings["LBL_BACK"], " ");
} }
function LoginUiComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 1)(1, "form", 2, 3)(3, "div", 4)(4, "div", 5);
    i0.ɵɵelement(5, "scrm-logo-ui");
    i0.ɵɵelementEnd()();
    i0.ɵɵtemplate(6, LoginUiComponent_div_0_div_6_Template, 10, 2, "div", 6);
    i0.ɵɵelementStart(7, "div", 7);
    i0.ɵɵtemplate(8, LoginUiComponent_div_0_div_8_Template, 14, 14, "div", 8);
    i0.ɵɵtemplate(9, LoginUiComponent_div_0_div_9_Template, 16, 13, "div", 9);
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const vm_r1 = ctx.ngIf;
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(6);
    i0.ɵɵproperty("ngIf", vm_r1.showLanguages);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", ctx_r0.cardState === "front");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r0.cardState === "back");
} }
class LoginUiComponent {
    constructor(router, auth, message, configs, languageStore, recoverPasswordService, appState) {
        this.router = router;
        this.auth = auth;
        this.message = message;
        this.configs = configs;
        this.languageStore = languageStore;
        this.recoverPasswordService = recoverPasswordService;
        this.appState = appState;
        this.hidden = true;
        this.loading = false;
        this.error = '';
        this.uname = '';
        this.passw = '';
        this.email = '';
        this.cardState = 'front';
        this.systemConfigs$ = this.configs.configs$;
        this.appStrings$ = this.languageStore.appStrings$;
        this.language = null;
        this.vm$ = this.systemConfigs$.pipe(combineLatestWith(this.appStrings$), map(([systemConfigs, appStrings]) => {
            let showLanguages = false;
            let showForgotPassword = false;
            if (systemConfigs.languages && systemConfigs.languages.items) {
                showLanguages = Object.keys(systemConfigs.languages.items).length > 1;
            }
            if (systemConfigs.passwordsetting && systemConfigs.passwordsetting.items) {
                const forgotPasswordProperty = systemConfigs.passwordsetting.items.forgotpasswordON;
                showForgotPassword = [true, '1', 'true'].includes(forgotPasswordProperty);
            }
            return {
                systemConfigs,
                appStrings,
                showLanguages,
                showForgotPassword
            };
        }));
        this.loading = false;
        this.hidden = false;
        this.language = null;
    }
    ngOnInit() {
        this.setCurrentLanguage();
        this.appState.removeAllPrevRoutes();
    }
    onLanguageSelect(language) {
        if (!language) {
            return;
        }
        if (language === this.language) {
            return;
        }
        this.changeLanguage(language);
    }
    changeLanguage(language) {
        this.language = language;
        let languagesLoading = false;
        if (this?.appState?.updateLoading) {
            this.appState.updateLoading('change-language', true);
            languagesLoading = true;
        }
        this.languageStore.changeLanguage(language, true).pipe(tap(() => {
            if (languagesLoading) {
                this.appState.updateLoading('change-language', false);
            }
        })).subscribe();
    }
    getEnabledLanguages() {
        return this.languageStore.getEnabledLanguages();
    }
    getEnabledLanguagesKeys() {
        return Object.keys(this.languageStore.getEnabledLanguages() ?? {}) ?? [];
    }
    flipCard() {
        if (this.cardState === 'front') {
            this.cardState = 'back';
        }
        else {
            this.cardState = 'front';
        }
    }
    doLogin() {
        this.loading = true;
        this.auth.doLogin(this.uname, this.passw, this.onLoginSuccess.bind(this), this.onLoginError.bind(this));
    }
    recoverPassword() {
        this.recoverPasswordService
            .run(this.uname, this.email)
            .subscribe((process) => {
            this.message.log('Recover Password Status: ' + process.status);
            let handler = 'addSuccessMessageByKey';
            if (process.status === 'error') {
                handler = 'addDangerMessageByKey';
            }
            if (process.messages) {
                process.messages.forEach(message => {
                    this.message[handler](message);
                });
            }
        }, () => {
            this.message.log('Recover Password failed');
            this.message.addDangerMessageByKey('ERR_AJAX_LOAD_FAILURE');
        });
    }
    onLoginSuccess(result) {
        this.loading = false;
        this.message.log('Login success');
        this.message.removeMessages();
        this.languageStore.setSessionLanguage()
            .pipe(catchError(() => of({})))
            .subscribe(() => {
            if (result && result.redirect && result.redirect.route) {
                this.router.navigate([result.redirect.route], {
                    queryParams: result.redirect.queryParams ?? {}
                }).then();
                return;
            }
            if (this.appState.getPreLoginUrl()) {
                this.router.navigateByUrl(this.appState.getPreLoginUrl()).then(() => {
                    this.appState.setPreLoginUrl('');
                });
                return;
            }
            const defaultModule = this.configs.getHomePage();
            this.router.navigate(['/' + defaultModule]).then();
        });
        return;
    }
    onLoginError(httpError) {
        this.loading = false;
        this.message.log('Login failed');
        const defaultMessage = 'Login credentials incorrect, please try again.';
        const defaultTooManyFailedMessage = 'Too many failed login attempts, please try again later.';
        let message = this.languageStore.getFieldLabel('LOGIN_INCORRECT');
        const errorMessage = httpError?.error?.error ?? '';
        if (typeof errorMessage === 'string' && errorMessage.includes('Too many failed login attempts, please try again in')) {
            message = this.getTooManyFailedMessage(defaultTooManyFailedMessage);
        }
        if (!message) {
            message = defaultMessage;
        }
        this.message.addDangerMessage(message);
    }
    getTooManyFailedMessage(defaultTooManyFailedMessage) {
        let tooManyFailedMessage = this.languageStore.getFieldLabel('LOGIN_TOO_MANY_FAILED');
        if (!tooManyFailedMessage) {
            tooManyFailedMessage = defaultTooManyFailedMessage;
        }
        return tooManyFailedMessage;
    }
    setCurrentLanguage() {
        let currentLanguage = this.languageStore.getSelectedLanguage() ?? '';
        const activeLanguage = this.languageStore.getActiveLanguage();
        if (!currentLanguage) {
            currentLanguage = activeLanguage;
        }
        if (!this.languageStore.isLanguageEnabled(currentLanguage)) {
            currentLanguage = '';
        }
        if (this.language && currentLanguage === this.language) {
            return;
        }
        const defaultLanguage = this.configs.getConfigValue('default_language') ?? 'en_us';
        if (!currentLanguage) {
            currentLanguage = defaultLanguage;
        }
        if (!this.languageStore.isLanguageEnabled(currentLanguage)) {
            currentLanguage = this.languageStore.getFirstLanguage();
        }
        this.language = currentLanguage;
        this.changeLanguage(currentLanguage);
    }
    static { this.ɵfac = function LoginUiComponent_Factory(t) { return new (t || LoginUiComponent)(i0.ɵɵdirectiveInject(i1.Router), i0.ɵɵdirectiveInject(i2.AuthService), i0.ɵɵdirectiveInject(i3.MessageService), i0.ɵɵdirectiveInject(i4.SystemConfigStore), i0.ɵɵdirectiveInject(i5.LanguageStore), i0.ɵɵdirectiveInject(i6.RecoverPasswordService), i0.ɵɵdirectiveInject(i7.AppStateStore)); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: LoginUiComponent, selectors: [["scrm-login-ui"]], decls: 2, vars: 3, consts: [["class", "login-view full-height-view d-flex align-items-center", 4, "ngIf"], [1, "login-view", "full-height-view", "d-flex", "align-items-center"], ["name", "login", 1, "login-form"], ["loginForm", "ngForm"], [1, "form-row", "form-group"], [1, "col"], ["class", "form-row", 4, "ngIf"], [1, "form-row", "fade-card"], ["class", "fade-card-front col", 4, "ngIf"], ["class", "fade-card-back col", 4, "ngIf"], [1, "form-row"], ["for", "languages", 1, ""], [1, "w-100"], [1, "inner-addon", "left-addon"], ["id", "languages", 3, "change"], ["languageSelect", ""], [3, "selected", "value", 4, "ngFor", "ngForOf"], [3, "selected", "value"], [1, "fade-card-front", "col"], ["image", "login_user"], ["type", "text", "name", "username", "aria-label", "Username", "required", "", 3, "ngModel", "placeholder", "ngModelChange"], ["username", "ngModel"], ["class", "invalid-feedback", 4, "ngIf"], ["image", "login_password"], ["type", "password", "name", "password", "aria-label", "Password", "required", "", 3, "ngModel", "placeholder", "ngModelChange"], ["password", "ngModel"], ["id", "login-button", 1, "login-button", 3, "scrm-button-loading", "click"], ["class", "forgotten-password", 4, "ngIf"], [1, "invalid-feedback"], [1, "forgotten-password"], [1, "forgotten-password-link", 3, "click"], [1, "fade-card-back", "col"], ["image", "email"], ["type", "email", "name", "email", "aria-label", "Email", "required", "", 3, "ngModel", "placeholder", "ngModelChange"], ["mail", "ngModel"], ["scrm-button-loading", "", 1, "submit-button", "login-button", 3, "click"], [1, "back-link", "forgotten-password-link", 3, "click"]], template: function LoginUiComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵtemplate(0, LoginUiComponent_div_0_Template, 10, 3, "div", 0);
            i0.ɵɵpipe(1, "async");
        } if (rf & 2) {
            i0.ɵɵproperty("ngIf", i0.ɵɵpipeBind1(1, 1, ctx.vm$));
        } }, dependencies: [i8.ɵNgNoValidate, i8.NgSelectOption, i8.ɵNgSelectMultipleOption, i8.DefaultValueAccessor, i8.NgControlStatus, i8.NgControlStatusGroup, i8.RequiredValidator, i8.NgModel, i8.NgForm, i9.LogoUiComponent, i10.NgForOf, i10.NgIf, i11.ImageComponent, i12.ButtonLoadingDirective, i10.AsyncPipe], encapsulation: 2, data: { animation: [
                trigger('fade', [
                    transition(':enter', useAnimation(fadeIn, {
                        params: { timing: 0.5, delay: 0 }
                    })),
                ])
            ] } }); }
}
export { LoginUiComponent };
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(LoginUiComponent, [{
        type: Component,
        args: [{ selector: 'scrm-login-ui', animations: [
                    trigger('fade', [
                        transition(':enter', useAnimation(fadeIn, {
                            params: { timing: 0.5, delay: 0 }
                        })),
                    ])
                ], template: "<! --\n/**\n* SuiteCRM is a customer relationship management program developed by SalesAgility Ltd.\n* Copyright (C) 2021 SalesAgility Ltd.\n*\n* This program is free software; you can redistribute it and/or modify it under\n* the terms of the GNU Affero General Public License version 3 as published by the\n* Free Software Foundation with the addition of the following permission added\n* to Section 15 as permitted in Section 7(a): FOR ANY PART OF THE COVERED WORK\n* IN WHICH THE COPYRIGHT IS OWNED BY SALESAGILITY, SALESAGILITY DISCLAIMS THE\n* WARRANTY OF NON INFRINGEMENT OF THIRD PARTY RIGHTS.\n*\n* This program is distributed in the hope that it will be useful, but WITHOUT\n* ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS\n* FOR A PARTICULAR PURPOSE. See the GNU Affero General Public License for more\n* details.\n*\n* You should have received a copy of the GNU Affero General Public License\n* along with this program.  If not, see http://www.gnu.org/licenses.\n*\n* In accordance with Section 7(b) of the GNU Affero General Public License\n* version 3, these Appropriate Legal Notices must retain the display of the\n* \"Supercharged by SuiteCRM\" logo. If the display of the logos is not reasonably\n* feasible for technical reasons, the Appropriate Legal Notices must display\n* the words \"Supercharged by SuiteCRM\".\n*/\n-->\n<div *ngIf=\"(vm$ | async) as vm\" class=\"login-view full-height-view d-flex align-items-center\">\n\n    <!-- Start of login form section -->\n\n    <form name=\"login\" class=\"login-form\" #loginForm=\"ngForm\">\n        <div class=\"form-row form-group\">\n            <div class=\"col\">\n                <scrm-logo-ui></scrm-logo-ui>\n            </div>\n        </div>\n        <div class=\"form-row\" *ngIf=\"vm.showLanguages\">\n            <div class=\"col\">\n                <label class=\"\" for=\"languages\">{{vm.appStrings['LBL_LANGUAGE']}}</label>\n            </div>\n            <div class=\"w-100\"></div>\n            <div class=\"col\">\n                <div class=\"inner-addon left-addon\">\n                    <select #languageSelect id=\"languages\"\n                            (change)=\"onLanguageSelect(languageSelect.value)\">\n                        <option *ngFor=\"let item of getEnabledLanguagesKeys()\"\n                                [selected]=\"(language ?? 'en_us') === item\"\n                                [value]=\"item\">\n                            {{getEnabledLanguages()[item]}}\n                        </option>\n                    </select>\n                </div>\n            </div>\n        </div>\n\n\n        <div class=\"form-row fade-card\">\n\n            <!-- Card front -->\n            <div class=\"fade-card-front col\"\n                 *ngIf=\"cardState==='front'\"\n                 [@fade]>\n\n                <div class=\"inner-addon left-addon\">\n                    <scrm-image image=\"login_user\"></scrm-image>\n                    <input [(ngModel)]=\"uname\"\n                           type=\"text\"\n                           name=\"username\"\n                           [class.is-invalid]=\"username.invalid && username.touched\"\n                           #username=\"ngModel\"\n                           placeholder=\"{{vm.appStrings['LBL_USER_NAME']}}\"\n                           aria-label=\"Username\"\n                           required>\n                    <div *ngIf=\"username.invalid && username.touched\" class=\"invalid-feedback\">\n                        {{vm.appStrings['ERR_MISSING_REQUIRED_FIELDS']}}\n                    </div>\n                </div>\n\n                <div class=\"inner-addon left-addon\">\n                    <scrm-image image=\"login_password\"></scrm-image>\n                    <input [(ngModel)]=\"passw\"\n                           type=\"password\"\n                           name=\"password\"\n                           [class.is-invalid]=\"password.invalid && password.touched\"\n                           #password=\"ngModel\"\n                           placeholder=\"{{vm.appStrings['LBL_PASSWORD']}}\"\n                           aria-label=\"Password\"\n                           required>\n                    <div *ngIf=\"password.invalid && password.touched\" class=\"invalid-feedback\">\n                        {{vm.appStrings['ERR_MISSING_REQUIRED_FIELDS']}}\n                    </div>\n                </div>\n\n\n                <button id=\"login-button\" class=\"login-button\"\n                        [scrm-button-loading]=\"loading\"\n                        (click)=\"loginForm.control.markAllAsTouched(); loginForm.valid && doLogin()\">\n                    {{vm.appStrings['LBL_LOGIN_BUTTON_LABEL']}}\n                </button>\n                <div class=\"forgotten-password\" *ngIf=\"vm.showForgotPassword\">\n                    <a class=\"forgotten-password-link\" (click)=\"flipCard()\">\n                        {{vm.appStrings['LBL_LOGIN_FORGOT_PASSWORD']}}\n                    </a>\n                </div>\n\n            </div>\n\n            <!-- Card back-->\n            <div class=\"fade-card-back col\"\n                 *ngIf=\"cardState==='back'\"\n                 [@fade]>\n                <div class=\"inner-addon left-addon\">\n                    <scrm-image image=\"login_user\"></scrm-image>\n                    <input [(ngModel)]=\"uname\"\n                           type=\"text\"\n                           name=\"username\"\n                           [class.is-invalid]=\"username.invalid && username.touched\"\n                           #username=\"ngModel\"\n                           placeholder=\"{{vm.appStrings['LBL_USER_NAME']}}\"\n                           aria-label=\"Username\"\n                           required>\n                    <div *ngIf=\"username.invalid && username.touched\" class=\"invalid-feedback\">\n                        {{vm.appStrings['ERR_MISSING_REQUIRED_FIELDS']}}\n                    </div>\n                </div>\n\n                <div class=\"inner-addon left-addon\">\n                    <scrm-image image=\"email\"></scrm-image>\n                    <input [(ngModel)]=\"email\"\n                           type=\"email\"\n                           name=\"email\"\n                           [class.is-invalid]=\"mail.invalid && mail.touched\"\n                           #mail=\"ngModel\"\n                           placeholder=\"{{vm.appStrings['LBL_EMAIL']}}\"\n                           aria-label=\"Email\"\n                           required>\n                    <div *ngIf=\"mail.invalid && mail.touched\" class=\"invalid-feedback\">\n                        {{vm.appStrings['ERR_MISSING_REQUIRED_FIELDS']}}\n                    </div>\n                </div>\n\n                <button class=\"submit-button login-button\"\n                        scrm-button-loading\n                        (click)=\"loginForm.control.markAllAsTouched(); loginForm.valid && recoverPassword()\">\n                    {{vm.appStrings['LBL_GENERATE_PASSWORD_BUTTON_TITLE']}}\n                </button>\n                <div>\n                    <a class=\"back-link forgotten-password-link\" (click)=\"flipCard()\">\n                        {{vm.appStrings['LBL_BACK']}}\n                    </a>\n                </div>\n            </div>\n        </div>\n    </form>\n\n    <!-- End of login form section -->\n\n</div>\n\n<!-- End of login component section -->\n" }]
    }], function () { return [{ type: i1.Router }, { type: i2.AuthService }, { type: i3.MessageService }, { type: i4.SystemConfigStore }, { type: i5.LanguageStore }, { type: i6.RecoverPasswordService }, { type: i7.AppStateStore }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW4uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vY29yZS9hcHAvY29yZS9zcmMvbGliL3ZpZXdzL2xvZ2luL2NvbXBvbmVudHMvbG9naW4vbG9naW4uY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vY29yZS9hcHAvY29yZS9zcmMvbGliL3ZpZXdzL2xvZ2luL2NvbXBvbmVudHMvbG9naW4vbG9naW4uY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQXdCRztBQUVILE9BQU8sRUFBQyxTQUFTLEVBQVMsTUFBTSxlQUFlLENBQUM7QUFDaEQsT0FBTyxFQUFDLE1BQU0sRUFBQyxNQUFNLGlCQUFpQixDQUFDO0FBQ3ZDLE9BQU8sRUFBQyxpQkFBaUIsRUFBYyxFQUFFLEVBQUMsTUFBTSxNQUFNLENBQUM7QUFDdkQsT0FBTyxFQUFDLFVBQVUsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFDLE1BQU0sZ0JBQWdCLENBQUM7QUFDcEQsT0FBTyxFQUFDLFVBQVUsRUFBRSxPQUFPLEVBQUUsWUFBWSxFQUFDLE1BQU0scUJBQXFCLENBQUM7QUFDdEUsT0FBTyxFQUFDLE1BQU0sRUFBQyxNQUFNLFlBQVksQ0FBQztBQUNsQyxPQUFPLEVBQUMsc0JBQXNCLEVBQUMsTUFBTSwwRUFBMEUsQ0FBQztBQUNoSCxPQUFPLEVBQWtCLGlCQUFpQixFQUFDLE1BQU0scURBQXFELENBQUM7QUFDdkcsT0FBTyxFQUFDLFdBQVcsRUFBQyxNQUFNLHdDQUF3QyxDQUFDO0FBQ25FLE9BQU8sRUFBQyxhQUFhLEVBQW9CLE1BQU0sMkNBQTJDLENBQUM7QUFDM0YsT0FBTyxFQUFDLGNBQWMsRUFBQyxNQUFNLDhDQUE4QyxDQUFDO0FBSTVFLE9BQU8sRUFBQyxhQUFhLEVBQUMsTUFBTSw2Q0FBNkMsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7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Y2VzQ29udGVudCI6WyIvKipcbiAqIFN1aXRlQ1JNIGlzIGEgY3VzdG9tZXIgcmVsYXRpb25zaGlwIG1hbmFnZW1lbnQgcHJvZ3JhbSBkZXZlbG9wZWQgYnkgU2FsZXNBZ2lsaXR5IEx0ZC5cbiAqIENvcHlyaWdodCAoQykgMjAyMSBTYWxlc0FnaWxpdHkgTHRkLlxuICpcbiAqIFRoaXMgcHJvZ3JhbSBpcyBmcmVlIHNvZnR3YXJlOyB5b3UgY2FuIHJlZGlzdHJpYnV0ZSBpdCBhbmQvb3IgbW9kaWZ5IGl0IHVuZGVyXG4gKiB0aGUgdGVybXMgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZSB2ZXJzaW9uIDMgYXMgcHVibGlzaGVkIGJ5IHRoZVxuICogRnJlZSBTb2Z0d2FyZSBGb3VuZGF0aW9uIHdpdGggdGhlIGFkZGl0aW9uIG9mIHRoZSBmb2xsb3dpbmcgcGVybWlzc2lvbiBhZGRlZFxuICogdG8gU2VjdGlvbiAxNSBhcyBwZXJtaXR0ZWQgaW4gU2VjdGlvbiA3KGEpOiBGT1IgQU5ZIFBBUlQgT0YgVEhFIENPVkVSRUQgV09SS1xuICogSU4gV0hJQ0ggVEhFIENPUFlSSUdIVCBJUyBPV05FRCBCWSBTQUxFU0FHSUxJVFksIFNBTEVTQUdJTElUWSBESVNDTEFJTVMgVEhFXG4gKiBXQVJSQU5UWSBPRiBOT04gSU5GUklOR0VNRU5UIE9GIFRISVJEIFBBUlRZIFJJR0hUUy5cbiAqXG4gKiBUaGlzIHByb2dyYW0gaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCwgYnV0IFdJVEhPVVRcbiAqIEFOWSBXQVJSQU5UWTsgd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTXG4gKiBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuIFNlZSB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGZvciBtb3JlXG4gKiBkZXRhaWxzLlxuICpcbiAqIFlvdSBzaG91bGQgaGF2ZSByZWNlaXZlZCBhIGNvcHkgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuICogYWxvbmcgd2l0aCB0aGlzIHByb2dyYW0uICBJZiBub3QsIHNlZSA8aHR0cDovL3d3dy5nbnUub3JnL2xpY2Vuc2VzLz4uXG4gKlxuICogSW4gYWNjb3JkYW5jZSB3aXRoIFNlY3Rpb24gNyhiKSBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4gKiB2ZXJzaW9uIDMsIHRoZXNlIEFwcHJvcHJpYXRlIExlZ2FsIE5vdGljZXMgbXVzdCByZXRhaW4gdGhlIGRpc3BsYXkgb2YgdGhlXG4gKiBcIlN1cGVyY2hhcmdlZCBieSBTdWl0ZUNSTVwiIGxvZ28uIElmIHRoZSBkaXNwbGF5IG9mIHRoZSBsb2dvcyBpcyBub3QgcmVhc29uYWJseVxuICogZmVhc2libGUgZm9yIHRlY2huaWNhbCByZWFzb25zLCB0aGUgQXBwcm9wcmlhdGUgTGVnYWwgTm90aWNlcyBtdXN0IGRpc3BsYXlcbiAqIHRoZSB3b3JkcyBcIlN1cGVyY2hhcmdlZCBieSBTdWl0ZUNSTVwiLlxuICovXG5cbmltcG9ydCB7Q29tcG9uZW50LCBPbkluaXR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtSb3V0ZXJ9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQge2NvbWJpbmVMYXRlc3RXaXRoLCBPYnNlcnZhYmxlLCBvZn0gZnJvbSAncnhqcyc7XG5pbXBvcnQge2NhdGNoRXJyb3IsIG1hcCwgdGFwfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQge3RyYW5zaXRpb24sIHRyaWdnZXIsIHVzZUFuaW1hdGlvbn0gZnJvbSAnQGFuZ3VsYXIvYW5pbWF0aW9ucyc7XG5pbXBvcnQge2ZhZGVJbn0gZnJvbSAnbmctYW5pbWF0ZSc7XG5pbXBvcnQge1JlY292ZXJQYXNzd29yZFNlcnZpY2V9IGZyb20gJy4uLy4uLy4uLy4uL3NlcnZpY2VzL3Byb2Nlc3MvcHJvY2Vzc2VzL3JlY292ZXItcGFzc3dvcmQvcmVjb3Zlci1wYXNzd29yZCc7XG5pbXBvcnQge1N5c3RlbUNvbmZpZ01hcCwgU3lzdGVtQ29uZmlnU3RvcmV9IGZyb20gJy4uLy4uLy4uLy4uL3N0b3JlL3N5c3RlbS1jb25maWcvc3lzdGVtLWNvbmZpZy5zdG9yZSc7XG5pbXBvcnQge0F1dGhTZXJ2aWNlfSBmcm9tICcuLi8uLi8uLi8uLi9zZXJ2aWNlcy9hdXRoL2F1dGguc2VydmljZSc7XG5pbXBvcnQge0xhbmd1YWdlU3RvcmUsIExhbmd1YWdlU3RyaW5nTWFwfSBmcm9tICcuLi8uLi8uLi8uLi9zdG9yZS9sYW5ndWFnZS9sYW5ndWFnZS5zdG9yZSc7XG5pbXBvcnQge01lc3NhZ2VTZXJ2aWNlfSBmcm9tICcuLi8uLi8uLi8uLi9zZXJ2aWNlcy9tZXNzYWdlL21lc3NhZ2Uuc2VydmljZSc7XG5pbXBvcnQge1Byb2Nlc3N9IGZyb20gJy4uLy4uLy4uLy4uL3NlcnZpY2VzL3Byb2Nlc3MvcHJvY2Vzcy5zZXJ2aWNlJztcbmltcG9ydCB7U3RyaW5nTWFwfSBmcm9tICdjb21tb24nO1xuaW1wb3J0IHtIdHRwRXJyb3JSZXNwb25zZX0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuaW1wb3J0IHtBcHBTdGF0ZVN0b3JlfSBmcm9tIFwiLi4vLi4vLi4vLi4vc3RvcmUvYXBwLXN0YXRlL2FwcC1zdGF0ZS5zdG9yZVwiO1xuXG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnc2NybS1sb2dpbi11aScsXG4gICAgdGVtcGxhdGVVcmw6ICcuL2xvZ2luLmNvbXBvbmVudC5odG1sJyxcbiAgICBzdHlsZVVybHM6IFtdLFxuICAgIGFuaW1hdGlvbnM6IFtcbiAgICAgICAgdHJpZ2dlcignZmFkZScsIFtcbiAgICAgICAgICAgIHRyYW5zaXRpb24oJzplbnRlcicsIHVzZUFuaW1hdGlvbihmYWRlSW4sIHtcbiAgICAgICAgICAgICAgICBwYXJhbXM6IHt0aW1pbmc6IDAuNSwgZGVsYXk6IDB9XG4gICAgICAgICAgICB9KSksXG4gICAgICAgIF0pXG4gICAgXVxufSlcbmV4cG9ydCBjbGFzcyBMb2dpblVpQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgICBoaWRkZW4gPSB0cnVlO1xuICAgIGxvYWRpbmcgPSBmYWxzZTtcbiAgICBlcnJvciA9ICcnO1xuICAgIHVuYW1lID0gJyc7XG4gICAgcGFzc3cgPSAnJztcbiAgICBlbWFpbCA9ICcnO1xuXG4gICAgY2FyZFN0YXRlID0gJ2Zyb250JztcblxuICAgIHN5c3RlbUNvbmZpZ3MkOiBPYnNlcnZhYmxlPFN5c3RlbUNvbmZpZ01hcD4gPSB0aGlzLmNvbmZpZ3MuY29uZmlncyQ7XG4gICAgYXBwU3RyaW5ncyQ6IE9ic2VydmFibGU8TGFuZ3VhZ2VTdHJpbmdNYXA+ID0gdGhpcy5sYW5ndWFnZVN0b3JlLmFwcFN0cmluZ3MkO1xuXG4gICAgbGFuZ3VhZ2U6IHN0cmluZyA9IG51bGw7XG5cbiAgICB2bSQgPSB0aGlzLnN5c3RlbUNvbmZpZ3MkLnBpcGUoXG4gICAgICAgIGNvbWJpbmVMYXRlc3RXaXRoKHRoaXMuYXBwU3RyaW5ncyQpLFxuICAgICAgICBtYXAoKFtzeXN0ZW1Db25maWdzLCBhcHBTdHJpbmdzXTogW1N5c3RlbUNvbmZpZ01hcCwgTGFuZ3VhZ2VTdHJpbmdNYXBdKSA9PiB7XG4gICAgICAgICAgICBsZXQgc2hvd0xhbmd1YWdlcyA9IGZhbHNlO1xuICAgICAgICAgICAgbGV0IHNob3dGb3Jnb3RQYXNzd29yZCA9IGZhbHNlO1xuXG4gICAgICAgICAgICBpZiAoc3lzdGVtQ29uZmlncy5sYW5ndWFnZXMgJiYgc3lzdGVtQ29uZmlncy5sYW5ndWFnZXMuaXRlbXMpIHtcbiAgICAgICAgICAgICAgICBzaG93TGFuZ3VhZ2VzID0gT2JqZWN0LmtleXMoc3lzdGVtQ29uZmlncy5sYW5ndWFnZXMuaXRlbXMpLmxlbmd0aCA+IDE7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChzeXN0ZW1Db25maWdzLnBhc3N3b3Jkc2V0dGluZyAmJiBzeXN0ZW1Db25maWdzLnBhc3N3b3Jkc2V0dGluZy5pdGVtcykge1xuICAgICAgICAgICAgICAgIGNvbnN0IGZvcmdvdFBhc3N3b3JkUHJvcGVydHkgPSBzeXN0ZW1Db25maWdzLnBhc3N3b3Jkc2V0dGluZy5pdGVtcy5mb3Jnb3RwYXNzd29yZE9OO1xuICAgICAgICAgICAgICAgIHNob3dGb3Jnb3RQYXNzd29yZCA9IFt0cnVlLCAnMScsICd0cnVlJ10uaW5jbHVkZXMoZm9yZ290UGFzc3dvcmRQcm9wZXJ0eSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgc3lzdGVtQ29uZmlncyxcbiAgICAgICAgICAgICAgICBhcHBTdHJpbmdzLFxuICAgICAgICAgICAgICAgIHNob3dMYW5ndWFnZXMsXG4gICAgICAgICAgICAgICAgc2hvd0ZvcmdvdFBhc3N3b3JkXG4gICAgICAgICAgICB9O1xuICAgICAgICB9KVxuICAgICk7XG5cbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgcHJvdGVjdGVkIHJvdXRlcjogUm91dGVyLFxuICAgICAgICBwcm90ZWN0ZWQgYXV0aDogQXV0aFNlcnZpY2UsXG4gICAgICAgIHByb3RlY3RlZCBtZXNzYWdlOiBNZXNzYWdlU2VydmljZSxcbiAgICAgICAgcHJvdGVjdGVkIGNvbmZpZ3M6IFN5c3RlbUNvbmZpZ1N0b3JlLFxuICAgICAgICBwcm90ZWN0ZWQgbGFuZ3VhZ2VTdG9yZTogTGFuZ3VhZ2VTdG9yZSxcbiAgICAgICAgcHJvdGVjdGVkIHJlY292ZXJQYXNzd29yZFNlcnZpY2U6IFJlY292ZXJQYXNzd29yZFNlcnZpY2UsXG4gICAgICAgIHByb3RlY3RlZCBhcHBTdGF0ZTogQXBwU3RhdGVTdG9yZVxuICAgICkge1xuICAgICAgICB0aGlzLmxvYWRpbmcgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5oaWRkZW4gPSBmYWxzZTtcbiAgICAgICAgdGhpcy5sYW5ndWFnZSA9IG51bGw7XG4gICAgfVxuXG4gICAgbmdPbkluaXQoKSB7XG4gICAgICAgIHRoaXMuc2V0Q3VycmVudExhbmd1YWdlKCk7XG4gICAgICAgIHRoaXMuYXBwU3RhdGUucmVtb3ZlQWxsUHJldlJvdXRlcygpO1xuICAgIH1cblxuICAgIG9uTGFuZ3VhZ2VTZWxlY3QobGFuZ3VhZ2U6IHN0cmluZyk6IHZvaWQge1xuICAgICAgICBpZiAoIWxhbmd1YWdlKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBpZiAobGFuZ3VhZ2UgPT09IHRoaXMubGFuZ3VhZ2UpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmNoYW5nZUxhbmd1YWdlKGxhbmd1YWdlKTtcbiAgICB9XG5cbiAgICBjaGFuZ2VMYW5ndWFnZShsYW5ndWFnZTogc3RyaW5nKTogdm9pZCB7XG4gICAgICAgIHRoaXMubGFuZ3VhZ2UgPSBsYW5ndWFnZTtcblxuICAgICAgICBsZXQgbGFuZ3VhZ2VzTG9hZGluZyA9IGZhbHNlO1xuICAgICAgICBpZiAodGhpcz8uYXBwU3RhdGU/LnVwZGF0ZUxvYWRpbmcpIHtcbiAgICAgICAgICAgIHRoaXMuYXBwU3RhdGUudXBkYXRlTG9hZGluZygnY2hhbmdlLWxhbmd1YWdlJywgdHJ1ZSk7XG4gICAgICAgICAgICBsYW5ndWFnZXNMb2FkaW5nID0gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMubGFuZ3VhZ2VTdG9yZS5jaGFuZ2VMYW5ndWFnZShsYW5ndWFnZSwgdHJ1ZSkucGlwZShcbiAgICAgICAgICAgIHRhcCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKGxhbmd1YWdlc0xvYWRpbmcpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5hcHBTdGF0ZS51cGRhdGVMb2FkaW5nKCdjaGFuZ2UtbGFuZ3VhZ2UnLCBmYWxzZSk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB9KVxuICAgICAgICApLnN1YnNjcmliZSgpO1xuICAgIH1cblxuICAgIGdldEVuYWJsZWRMYW5ndWFnZXMoKTogU3RyaW5nTWFwIHtcbiAgICAgICAgcmV0dXJuIHRoaXMubGFuZ3VhZ2VTdG9yZS5nZXRFbmFibGVkTGFuZ3VhZ2VzKCk7XG4gICAgfVxuXG4gICAgZ2V0RW5hYmxlZExhbmd1YWdlc0tleXMoKTogc3RyaW5nW10ge1xuICAgICAgICByZXR1cm4gT2JqZWN0LmtleXModGhpcy5sYW5ndWFnZVN0b3JlLmdldEVuYWJsZWRMYW5ndWFnZXMoKSA/PyB7fSkgPz8gW107XG4gICAgfVxuXG4gICAgZmxpcENhcmQoKTogdm9pZCB7XG4gICAgICAgIGlmICh0aGlzLmNhcmRTdGF0ZSA9PT0gJ2Zyb250Jykge1xuICAgICAgICAgICAgdGhpcy5jYXJkU3RhdGUgPSAnYmFjayc7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmNhcmRTdGF0ZSA9ICdmcm9udCc7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBkb0xvZ2luKCk6IHZvaWQge1xuICAgICAgICB0aGlzLmxvYWRpbmcgPSB0cnVlO1xuICAgICAgICB0aGlzLmF1dGguZG9Mb2dpbih0aGlzLnVuYW1lLCB0aGlzLnBhc3N3LCB0aGlzLm9uTG9naW5TdWNjZXNzLmJpbmQodGhpcyksIHRoaXMub25Mb2dpbkVycm9yLmJpbmQodGhpcykpO1xuICAgIH1cblxuICAgIHJlY292ZXJQYXNzd29yZCgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5yZWNvdmVyUGFzc3dvcmRTZXJ2aWNlXG4gICAgICAgICAgICAucnVuKHRoaXMudW5hbWUsIHRoaXMuZW1haWwpXG4gICAgICAgICAgICAuc3Vic2NyaWJlKFxuICAgICAgICAgICAgICAgIChwcm9jZXNzOiBQcm9jZXNzKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubWVzc2FnZS5sb2coJ1JlY292ZXIgUGFzc3dvcmQgU3RhdHVzOiAnICsgcHJvY2Vzcy5zdGF0dXMpO1xuXG4gICAgICAgICAgICAgICAgICAgIGxldCBoYW5kbGVyID0gJ2FkZFN1Y2Nlc3NNZXNzYWdlQnlLZXknO1xuICAgICAgICAgICAgICAgICAgICBpZiAocHJvY2Vzcy5zdGF0dXMgPT09ICdlcnJvcicpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGhhbmRsZXIgPSAnYWRkRGFuZ2VyTWVzc2FnZUJ5S2V5JztcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIGlmIChwcm9jZXNzLm1lc3NhZ2VzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwcm9jZXNzLm1lc3NhZ2VzLmZvckVhY2gobWVzc2FnZSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5tZXNzYWdlW2hhbmRsZXJdKG1lc3NhZ2UpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5tZXNzYWdlLmxvZygnUmVjb3ZlciBQYXNzd29yZCBmYWlsZWQnKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5tZXNzYWdlLmFkZERhbmdlck1lc3NhZ2VCeUtleSgnRVJSX0FKQVhfTE9BRF9GQUlMVVJFJyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgKTtcbiAgICB9XG5cbiAgICBvbkxvZ2luU3VjY2VzcyhyZXN1bHQ6IGFueSk6IHZvaWQge1xuICAgICAgICB0aGlzLmxvYWRpbmcgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5tZXNzYWdlLmxvZygnTG9naW4gc3VjY2VzcycpO1xuICAgICAgICB0aGlzLm1lc3NhZ2UucmVtb3ZlTWVzc2FnZXMoKTtcblxuICAgICAgICB0aGlzLmxhbmd1YWdlU3RvcmUuc2V0U2Vzc2lvbkxhbmd1YWdlKClcbiAgICAgICAgICAgIC5waXBlKGNhdGNoRXJyb3IoKCkgPT4gb2Yoe30pKSlcbiAgICAgICAgICAgIC5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChyZXN1bHQgJiYgcmVzdWx0LnJlZGlyZWN0ICYmIHJlc3VsdC5yZWRpcmVjdC5yb3V0ZSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShcbiAgICAgICAgICAgICAgICAgICAgICAgIFtyZXN1bHQucmVkaXJlY3Qucm91dGVdLFxuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgIHF1ZXJ5UGFyYW1zOiByZXN1bHQucmVkaXJlY3QucXVlcnlQYXJhbXMgPz8ge31cbiAgICAgICAgICAgICAgICAgICAgICAgIH0pLnRoZW4oKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmFwcFN0YXRlLmdldFByZUxvZ2luVXJsKCkpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGVCeVVybCh0aGlzLmFwcFN0YXRlLmdldFByZUxvZ2luVXJsKCkpLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5hcHBTdGF0ZS5zZXRQcmVMb2dpblVybCgnJyk7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgY29uc3QgZGVmYXVsdE1vZHVsZSA9IHRoaXMuY29uZmlncy5nZXRIb21lUGFnZSgpO1xuICAgICAgICAgICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFsnLycgKyBkZWZhdWx0TW9kdWxlXSkudGhlbigpO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIG9uTG9naW5FcnJvcihodHRwRXJyb3I6IEh0dHBFcnJvclJlc3BvbnNlKTogdm9pZCB7XG4gICAgICAgIHRoaXMubG9hZGluZyA9IGZhbHNlO1xuICAgICAgICB0aGlzLm1lc3NhZ2UubG9nKCdMb2dpbiBmYWlsZWQnKTtcblxuICAgICAgICBjb25zdCBkZWZhdWx0TWVzc2FnZSA9ICdMb2dpbiBjcmVkZW50aWFscyBpbmNvcnJlY3QsIHBsZWFzZSB0cnkgYWdhaW4uJztcbiAgICAgICAgY29uc3QgZGVmYXVsdFRvb01hbnlGYWlsZWRNZXNzYWdlID0gJ1RvbyBtYW55IGZhaWxlZCBsb2dpbiBhdHRlbXB0cywgcGxlYXNlIHRyeSBhZ2FpbiBsYXRlci4nO1xuICAgICAgICBsZXQgbWVzc2FnZSA9IHRoaXMubGFuZ3VhZ2VTdG9yZS5nZXRGaWVsZExhYmVsKCdMT0dJTl9JTkNPUlJFQ1QnKTtcblxuICAgICAgICBjb25zdCBlcnJvck1lc3NhZ2UgPSBodHRwRXJyb3I/LmVycm9yPy5lcnJvciA/PyAnJztcblxuICAgICAgICBpZiAodHlwZW9mIGVycm9yTWVzc2FnZSA9PT0gJ3N0cmluZycgJiYgZXJyb3JNZXNzYWdlLmluY2x1ZGVzKCdUb28gbWFueSBmYWlsZWQgbG9naW4gYXR0ZW1wdHMsIHBsZWFzZSB0cnkgYWdhaW4gaW4nKSkge1xuICAgICAgICAgICAgbWVzc2FnZSA9IHRoaXMuZ2V0VG9vTWFueUZhaWxlZE1lc3NhZ2UoZGVmYXVsdFRvb01hbnlGYWlsZWRNZXNzYWdlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghbWVzc2FnZSkge1xuICAgICAgICAgICAgbWVzc2FnZSA9IGRlZmF1bHRNZXNzYWdlXG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5tZXNzYWdlLmFkZERhbmdlck1lc3NhZ2UobWVzc2FnZSk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIGdldFRvb01hbnlGYWlsZWRNZXNzYWdlKGRlZmF1bHRUb29NYW55RmFpbGVkTWVzc2FnZTogc3RyaW5nKTogc3RyaW5nIHtcbiAgICAgICAgbGV0IHRvb01hbnlGYWlsZWRNZXNzYWdlID0gdGhpcy5sYW5ndWFnZVN0b3JlLmdldEZpZWxkTGFiZWwoJ0xPR0lOX1RPT19NQU5ZX0ZBSUxFRCcpO1xuXG4gICAgICAgIGlmICghdG9vTWFueUZhaWxlZE1lc3NhZ2UpIHtcbiAgICAgICAgICAgIHRvb01hbnlGYWlsZWRNZXNzYWdlID0gZGVmYXVsdFRvb01hbnlGYWlsZWRNZXNzYWdlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0b29NYW55RmFpbGVkTWVzc2FnZTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgc2V0Q3VycmVudExhbmd1YWdlKCk6IHZvaWQge1xuICAgICAgICBsZXQgY3VycmVudExhbmd1YWdlID0gdGhpcy5sYW5ndWFnZVN0b3JlLmdldFNlbGVjdGVkTGFuZ3VhZ2UoKSA/PyAnJztcbiAgICAgICAgY29uc3QgYWN0aXZlTGFuZ3VhZ2UgPSB0aGlzLmxhbmd1YWdlU3RvcmUuZ2V0QWN0aXZlTGFuZ3VhZ2UoKTtcblxuICAgICAgICBpZiAoIWN1cnJlbnRMYW5ndWFnZSkge1xuICAgICAgICAgICAgY3VycmVudExhbmd1YWdlID0gYWN0aXZlTGFuZ3VhZ2U7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIXRoaXMubGFuZ3VhZ2VTdG9yZS5pc0xhbmd1YWdlRW5hYmxlZChjdXJyZW50TGFuZ3VhZ2UpKSB7XG4gICAgICAgICAgICBjdXJyZW50TGFuZ3VhZ2UgPSAnJztcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLmxhbmd1YWdlICYmIGN1cnJlbnRMYW5ndWFnZSA9PT0gdGhpcy5sYW5ndWFnZSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgZGVmYXVsdExhbmd1YWdlID0gdGhpcy5jb25maWdzLmdldENvbmZpZ1ZhbHVlKCdkZWZhdWx0X2xhbmd1YWdlJykgPz8gJ2VuX3VzJztcblxuICAgICAgICBpZiAoIWN1cnJlbnRMYW5ndWFnZSkge1xuICAgICAgICAgICAgY3VycmVudExhbmd1YWdlID0gZGVmYXVsdExhbmd1YWdlO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCF0aGlzLmxhbmd1YWdlU3RvcmUuaXNMYW5ndWFnZUVuYWJsZWQoY3VycmVudExhbmd1YWdlKSkge1xuICAgICAgICAgICAgY3VycmVudExhbmd1YWdlID0gdGhpcy5sYW5ndWFnZVN0b3JlLmdldEZpcnN0TGFuZ3VhZ2UoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMubGFuZ3VhZ2UgPSBjdXJyZW50TGFuZ3VhZ2U7XG4gICAgICAgIHRoaXMuY2hhbmdlTGFuZ3VhZ2UoY3VycmVudExhbmd1YWdlKTtcbiAgICB9XG59XG4iLCI8ISAtLVxuLyoqXG4qIFN1aXRlQ1JNIGlzIGEgY3VzdG9tZXIgcmVsYXRpb25zaGlwIG1hbmFnZW1lbnQgcHJvZ3JhbSBkZXZlbG9wZWQgYnkgU2FsZXNBZ2lsaXR5IEx0ZC5cbiogQ29weXJpZ2h0IChDKSAyMDIxIFNhbGVzQWdpbGl0eSBMdGQuXG4qXG4qIFRoaXMgcHJvZ3JhbSBpcyBmcmVlIHNvZnR3YXJlOyB5b3UgY2FuIHJlZGlzdHJpYnV0ZSBpdCBhbmQvb3IgbW9kaWZ5IGl0IHVuZGVyXG4qIHRoZSB0ZXJtcyBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIHZlcnNpb24gMyBhcyBwdWJsaXNoZWQgYnkgdGhlXG4qIEZyZWUgU29mdHdhcmUgRm91bmRhdGlvbiB3aXRoIHRoZSBhZGRpdGlvbiBvZiB0aGUgZm9sbG93aW5nIHBlcm1pc3Npb24gYWRkZWRcbiogdG8gU2VjdGlvbiAxNSBhcyBwZXJtaXR0ZWQgaW4gU2VjdGlvbiA3KGEpOiBGT1IgQU5ZIFBBUlQgT0YgVEhFIENPVkVSRUQgV09SS1xuKiBJTiBXSElDSCBUSEUgQ09QWVJJR0hUIElTIE9XTkVEIEJZIFNBTEVTQUdJTElUWSwgU0FMRVNBR0lMSVRZIERJU0NMQUlNUyBUSEVcbiogV0FSUkFOVFkgT0YgTk9OIElORlJJTkdFTUVOVCBPRiBUSElSRCBQQVJUWSBSSUdIVFMuXG4qXG4qIFRoaXMgcHJvZ3JhbSBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLCBidXQgV0lUSE9VVFxuKiBBTlkgV0FSUkFOVFk7IHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZiBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTU1xuKiBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuIFNlZSB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGZvciBtb3JlXG4qIGRldGFpbHMuXG4qXG4qIFlvdSBzaG91bGQgaGF2ZSByZWNlaXZlZCBhIGNvcHkgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuKiBhbG9uZyB3aXRoIHRoaXMgcHJvZ3JhbS4gIElmIG5vdCwgc2VlIGh0dHA6Ly93d3cuZ251Lm9yZy9saWNlbnNlcy5cbipcbiogSW4gYWNjb3JkYW5jZSB3aXRoIFNlY3Rpb24gNyhiKSBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4qIHZlcnNpb24gMywgdGhlc2UgQXBwcm9wcmlhdGUgTGVnYWwgTm90aWNlcyBtdXN0IHJldGFpbiB0aGUgZGlzcGxheSBvZiB0aGVcbiogXCJTdXBlcmNoYXJnZWQgYnkgU3VpdGVDUk1cIiBsb2dvLiBJZiB0aGUgZGlzcGxheSBvZiB0aGUgbG9nb3MgaXMgbm90IHJlYXNvbmFibHlcbiogZmVhc2libGUgZm9yIHRlY2huaWNhbCByZWFzb25zLCB0aGUgQXBwcm9wcmlhdGUgTGVnYWwgTm90aWNlcyBtdXN0IGRpc3BsYXlcbiogdGhlIHdvcmRzIFwiU3VwZXJjaGFyZ2VkIGJ5IFN1aXRlQ1JNXCIuXG4qL1xuLS0+XG48ZGl2ICpuZ0lmPVwiKHZtJCB8IGFzeW5jKSBhcyB2bVwiIGNsYXNzPVwibG9naW4tdmlldyBmdWxsLWhlaWdodC12aWV3IGQtZmxleCBhbGlnbi1pdGVtcy1jZW50ZXJcIj5cblxuICAgIDwhLS0gU3RhcnQgb2YgbG9naW4gZm9ybSBzZWN0aW9uIC0tPlxuXG4gICAgPGZvcm0gbmFtZT1cImxvZ2luXCIgY2xhc3M9XCJsb2dpbi1mb3JtXCIgI2xvZ2luRm9ybT1cIm5nRm9ybVwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1yb3cgZm9ybS1ncm91cFwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbFwiPlxuICAgICAgICAgICAgICAgIDxzY3JtLWxvZ28tdWk+PC9zY3JtLWxvZ28tdWk+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLXJvd1wiICpuZ0lmPVwidm0uc2hvd0xhbmd1YWdlc1wiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbFwiPlxuICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzcz1cIlwiIGZvcj1cImxhbmd1YWdlc1wiPnt7dm0uYXBwU3RyaW5nc1snTEJMX0xBTkdVQUdFJ119fTwvbGFiZWw+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ3LTEwMFwiPjwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbFwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJpbm5lci1hZGRvbiBsZWZ0LWFkZG9uXCI+XG4gICAgICAgICAgICAgICAgICAgIDxzZWxlY3QgI2xhbmd1YWdlU2VsZWN0IGlkPVwibGFuZ3VhZ2VzXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAoY2hhbmdlKT1cIm9uTGFuZ3VhZ2VTZWxlY3QobGFuZ3VhZ2VTZWxlY3QudmFsdWUpXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uICpuZ0Zvcj1cImxldCBpdGVtIG9mIGdldEVuYWJsZWRMYW5ndWFnZXNLZXlzKClcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbc2VsZWN0ZWRdPVwiKGxhbmd1YWdlID8/ICdlbl91cycpID09PSBpdGVtXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW3ZhbHVlXT1cIml0ZW1cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7e2dldEVuYWJsZWRMYW5ndWFnZXMoKVtpdGVtXX19XG4gICAgICAgICAgICAgICAgICAgICAgICA8L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgPC9zZWxlY3Q+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG5cblxuICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1yb3cgZmFkZS1jYXJkXCI+XG5cbiAgICAgICAgICAgIDwhLS0gQ2FyZCBmcm9udCAtLT5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmYWRlLWNhcmQtZnJvbnQgY29sXCJcbiAgICAgICAgICAgICAgICAgKm5nSWY9XCJjYXJkU3RhdGU9PT0nZnJvbnQnXCJcbiAgICAgICAgICAgICAgICAgW0BmYWRlXT5cblxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJpbm5lci1hZGRvbiBsZWZ0LWFkZG9uXCI+XG4gICAgICAgICAgICAgICAgICAgIDxzY3JtLWltYWdlIGltYWdlPVwibG9naW5fdXNlclwiPjwvc2NybS1pbWFnZT5cbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IFsobmdNb2RlbCldPVwidW5hbWVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cInVzZXJuYW1lXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIFtjbGFzcy5pcy1pbnZhbGlkXT1cInVzZXJuYW1lLmludmFsaWQgJiYgdXNlcm5hbWUudG91Y2hlZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAjdXNlcm5hbWU9XCJuZ01vZGVsXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwie3t2bS5hcHBTdHJpbmdzWydMQkxfVVNFUl9OQU1FJ119fVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICBhcmlhLWxhYmVsPVwiVXNlcm5hbWVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWQ+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgKm5nSWY9XCJ1c2VybmFtZS5pbnZhbGlkICYmIHVzZXJuYW1lLnRvdWNoZWRcIiBjbGFzcz1cImludmFsaWQtZmVlZGJhY2tcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIHt7dm0uYXBwU3RyaW5nc1snRVJSX01JU1NJTkdfUkVRVUlSRURfRklFTERTJ119fVxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJpbm5lci1hZGRvbiBsZWZ0LWFkZG9uXCI+XG4gICAgICAgICAgICAgICAgICAgIDxzY3JtLWltYWdlIGltYWdlPVwibG9naW5fcGFzc3dvcmRcIj48L3Njcm0taW1hZ2U+XG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCBbKG5nTW9kZWwpXT1cInBhc3N3XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJwYXNzd29yZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwicGFzc3dvcmRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgW2NsYXNzLmlzLWludmFsaWRdPVwicGFzc3dvcmQuaW52YWxpZCAmJiBwYXNzd29yZC50b3VjaGVkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICNwYXNzd29yZD1cIm5nTW9kZWxcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJ7e3ZtLmFwcFN0cmluZ3NbJ0xCTF9QQVNTV09SRCddfX1cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJpYS1sYWJlbD1cIlBhc3N3b3JkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2ICpuZ0lmPVwicGFzc3dvcmQuaW52YWxpZCAmJiBwYXNzd29yZC50b3VjaGVkXCIgY2xhc3M9XCJpbnZhbGlkLWZlZWRiYWNrXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICB7e3ZtLmFwcFN0cmluZ3NbJ0VSUl9NSVNTSU5HX1JFUVVJUkVEX0ZJRUxEUyddfX1cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG5cblxuICAgICAgICAgICAgICAgIDxidXR0b24gaWQ9XCJsb2dpbi1idXR0b25cIiBjbGFzcz1cImxvZ2luLWJ1dHRvblwiXG4gICAgICAgICAgICAgICAgICAgICAgICBbc2NybS1idXR0b24tbG9hZGluZ109XCJsb2FkaW5nXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIChjbGljayk9XCJsb2dpbkZvcm0uY29udHJvbC5tYXJrQWxsQXNUb3VjaGVkKCk7IGxvZ2luRm9ybS52YWxpZCAmJiBkb0xvZ2luKClcIj5cbiAgICAgICAgICAgICAgICAgICAge3t2bS5hcHBTdHJpbmdzWydMQkxfTE9HSU5fQlVUVE9OX0xBQkVMJ119fVxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3Jnb3R0ZW4tcGFzc3dvcmRcIiAqbmdJZj1cInZtLnNob3dGb3Jnb3RQYXNzd29yZFwiPlxuICAgICAgICAgICAgICAgICAgICA8YSBjbGFzcz1cImZvcmdvdHRlbi1wYXNzd29yZC1saW5rXCIgKGNsaWNrKT1cImZsaXBDYXJkKClcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIHt7dm0uYXBwU3RyaW5nc1snTEJMX0xPR0lOX0ZPUkdPVF9QQVNTV09SRCddfX1cbiAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgPCEtLSBDYXJkIGJhY2stLT5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmYWRlLWNhcmQtYmFjayBjb2xcIlxuICAgICAgICAgICAgICAgICAqbmdJZj1cImNhcmRTdGF0ZT09PSdiYWNrJ1wiXG4gICAgICAgICAgICAgICAgIFtAZmFkZV0+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImlubmVyLWFkZG9uIGxlZnQtYWRkb25cIj5cbiAgICAgICAgICAgICAgICAgICAgPHNjcm0taW1hZ2UgaW1hZ2U9XCJsb2dpbl91c2VyXCI+PC9zY3JtLWltYWdlPlxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgWyhuZ01vZGVsKV09XCJ1bmFtZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwidXNlcm5hbWVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgW2NsYXNzLmlzLWludmFsaWRdPVwidXNlcm5hbWUuaW52YWxpZCAmJiB1c2VybmFtZS50b3VjaGVkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICN1c2VybmFtZT1cIm5nTW9kZWxcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJ7e3ZtLmFwcFN0cmluZ3NbJ0xCTF9VU0VSX05BTUUnXX19XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIGFyaWEtbGFiZWw9XCJVc2VybmFtZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICByZXF1aXJlZD5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiAqbmdJZj1cInVzZXJuYW1lLmludmFsaWQgJiYgdXNlcm5hbWUudG91Y2hlZFwiIGNsYXNzPVwiaW52YWxpZC1mZWVkYmFja1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAge3t2bS5hcHBTdHJpbmdzWydFUlJfTUlTU0lOR19SRVFVSVJFRF9GSUVMRFMnXX19XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImlubmVyLWFkZG9uIGxlZnQtYWRkb25cIj5cbiAgICAgICAgICAgICAgICAgICAgPHNjcm0taW1hZ2UgaW1hZ2U9XCJlbWFpbFwiPjwvc2NybS1pbWFnZT5cbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IFsobmdNb2RlbCldPVwiZW1haWxcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cImVtYWlsXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJlbWFpbFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICBbY2xhc3MuaXMtaW52YWxpZF09XCJtYWlsLmludmFsaWQgJiYgbWFpbC50b3VjaGVkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICNtYWlsPVwibmdNb2RlbFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cInt7dm0uYXBwU3RyaW5nc1snTEJMX0VNQUlMJ119fVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICBhcmlhLWxhYmVsPVwiRW1haWxcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWQ+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgKm5nSWY9XCJtYWlsLmludmFsaWQgJiYgbWFpbC50b3VjaGVkXCIgY2xhc3M9XCJpbnZhbGlkLWZlZWRiYWNrXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICB7e3ZtLmFwcFN0cmluZ3NbJ0VSUl9NSVNTSU5HX1JFUVVJUkVEX0ZJRUxEUyddfX1cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwic3VibWl0LWJ1dHRvbiBsb2dpbi1idXR0b25cIlxuICAgICAgICAgICAgICAgICAgICAgICAgc2NybS1idXR0b24tbG9hZGluZ1xuICAgICAgICAgICAgICAgICAgICAgICAgKGNsaWNrKT1cImxvZ2luRm9ybS5jb250cm9sLm1hcmtBbGxBc1RvdWNoZWQoKTsgbG9naW5Gb3JtLnZhbGlkICYmIHJlY292ZXJQYXNzd29yZCgpXCI+XG4gICAgICAgICAgICAgICAgICAgIHt7dm0uYXBwU3RyaW5nc1snTEJMX0dFTkVSQVRFX1BBU1NXT1JEX0JVVFRPTl9USVRMRSddfX1cbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICA8YSBjbGFzcz1cImJhY2stbGluayBmb3Jnb3R0ZW4tcGFzc3dvcmQtbGlua1wiIChjbGljayk9XCJmbGlwQ2FyZCgpXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICB7e3ZtLmFwcFN0cmluZ3NbJ0xCTF9CQUNLJ119fVxuICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgPC9mb3JtPlxuXG4gICAgPCEtLSBFbmQgb2YgbG9naW4gZm9ybSBzZWN0aW9uIC0tPlxuXG48L2Rpdj5cblxuPCEtLSBFbmQgb2YgbG9naW4gY29tcG9uZW50IHNlY3Rpb24gLS0+XG4iXX0=