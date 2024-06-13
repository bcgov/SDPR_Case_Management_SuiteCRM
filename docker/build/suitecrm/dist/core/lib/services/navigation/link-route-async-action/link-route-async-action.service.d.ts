import { AsyncActionService } from '../../process/processes/async-action/async-action';
import { Field, Record } from 'common';
import * as i0 from "@angular/core";
export declare class LinkRouteAsyncActionService {
    protected asyncActionService: AsyncActionService;
    constructor(asyncActionService: AsyncActionService);
    run(linkAsyncAction: string, field: Field, record: Record): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<LinkRouteAsyncActionService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<LinkRouteAsyncActionService>;
}
