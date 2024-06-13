import { SortDirection } from 'common';
import { Observable } from 'rxjs';
import { SortDirectionDataSource } from './sort-button.model';
import * as i0 from "@angular/core";
export declare class SortButtonComponent {
    state: SortDirectionDataSource;
    direction$: Observable<SortDirection>;
    protected statusIcons: {
        NONE: string;
        ASC: string;
        DESC: string;
    };
    protected nextDirection: {
        NONE: SortDirection;
        ASC: SortDirection;
        DESC: SortDirection;
    };
    constructor();
    ngOnInit(): void;
    getStatusIcon(direction: SortDirection): string;
    changeSorting(direction: SortDirection): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<SortButtonComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<SortButtonComponent, "scrm-sort-button", never, { "state": { "alias": "state"; "required": false; }; }, {}, never, never, false, never>;
}
