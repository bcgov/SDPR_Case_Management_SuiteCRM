import { Observable, Subject, Subscription } from 'rxjs';
import * as i0 from "@angular/core";
export declare class ImmediateDebounce {
    protected buffer: Subject<boolean>;
    protected buffer$: Observable<boolean>;
    protected enabled: boolean;
    protected subs: Subscription[];
    protected debounceTime: number;
    constructor();
    init(time?: number): void;
    destroy(): void;
    debounce(callBack: Function): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<ImmediateDebounce, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<ImmediateDebounce>;
}
