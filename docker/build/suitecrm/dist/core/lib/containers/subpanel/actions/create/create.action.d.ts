import { Params, Router } from '@angular/router';
import { ModuleNameMapper } from '../../../../services/navigation/module-name-mapper/module-name-mapper.service';
import { ViewMode } from 'common';
import { SubpanelActionData, SubpanelActionHandler } from '../subpanel.action';
import * as i0 from "@angular/core";
export declare class SubpanelCreateAction extends SubpanelActionHandler {
    protected moduleNameMapper: ModuleNameMapper;
    protected router: Router;
    key: string;
    modes: ViewMode[];
    constructor(moduleNameMapper: ModuleNameMapper, router: Router);
    run(data: SubpanelActionData): void;
    shouldDisplay(): boolean;
    /**
     * Add additional record fields
     *
     * @param {object} data SubpanelActionData
     * @param {object} queryParams Params map
     */
    protected addAdditionalFields(data: SubpanelActionData, queryParams: Params): void;
    /**
     * Add configuration defined params
     *
     * @param {object} data SubpanelActionData
     * @param {object} queryParams Params map
     */
    protected addParams(data: SubpanelActionData, queryParams: Params): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<SubpanelCreateAction, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<SubpanelCreateAction>;
}
