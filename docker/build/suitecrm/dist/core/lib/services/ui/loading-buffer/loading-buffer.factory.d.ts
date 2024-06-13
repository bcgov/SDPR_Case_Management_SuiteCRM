import { SystemConfigStore } from '../../../store/system-config/system-config.store';
import { LoadingBuffer } from './loading-buffer.service';
import * as i0 from "@angular/core";
export declare class LoadingBufferFactory {
    protected config: SystemConfigStore;
    constructor(config: SystemConfigStore);
    create(delayConfigKey?: string): LoadingBuffer;
    static ɵfac: i0.ɵɵFactoryDeclaration<LoadingBufferFactory, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<LoadingBufferFactory>;
}
