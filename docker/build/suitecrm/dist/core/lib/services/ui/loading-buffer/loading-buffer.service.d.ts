import { BehaviorSubject, Observable, Subscription } from 'rxjs';
import { SystemConfigStore } from '../../../store/system-config/system-config.store';
import * as i0 from "@angular/core";
export declare class LoadingBuffer {
    protected config: SystemConfigStore;
    protected delayConfigKey: string;
    loading$: Observable<boolean>;
    protected loadingStore: BehaviorSubject<boolean>;
    protected loadingBufferStore: BehaviorSubject<boolean>;
    protected loadingBufferStore$: Observable<boolean>;
    protected subs: Subscription[];
    protected buffered: boolean;
    constructor(config: SystemConfigStore, delayConfigKey?: string);
    /**
     * Update loading status
     *
     * @param {boolean} loading status to set
     */
    updateLoading(loading: boolean): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<LoadingBuffer, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<LoadingBuffer>;
}
