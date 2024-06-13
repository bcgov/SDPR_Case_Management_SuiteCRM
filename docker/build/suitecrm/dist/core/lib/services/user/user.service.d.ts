import { HttpClient } from '@angular/common/http';
import { User } from 'common';
import * as i0 from "@angular/core";
export declare class UserService {
    private http;
    constructor(http: HttpClient);
    getAll(): import("rxjs").Observable<User[]>;
    static ɵfac: i0.ɵɵFactoryDeclaration<UserService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<UserService>;
}
