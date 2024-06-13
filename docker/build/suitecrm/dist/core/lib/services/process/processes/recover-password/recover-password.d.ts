import { Observable } from 'rxjs';
import { Process, ProcessService } from '../../process.service';
import { AppStateStore } from '../../../../store/app-state/app-state.store';
import * as i0 from "@angular/core";
export declare class RecoverPasswordService {
    private processService;
    private appStateStore;
    protected processType: string;
    constructor(processService: ProcessService, appStateStore: AppStateStore);
    /**
     * Send recover password request
     *
     * @param {string} userName to check
     * @param {string} email to check
     * @returns {{}} Observable<Process>
     */
    run(userName: string, email: string): Observable<Process>;
    static ɵfac: i0.ɵɵFactoryDeclaration<RecoverPasswordService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<RecoverPasswordService>;
}
