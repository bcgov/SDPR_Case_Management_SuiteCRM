import { Observable } from 'rxjs';
import { EntityMutationGQL } from '../api/graphql-api/api.record.create';
import * as i0 from "@angular/core";
export interface ProcessOptions {
    [key: string]: any;
}
export interface Process {
    id: string;
    _id: string;
    status: string;
    async: boolean;
    type: string;
    options: ProcessOptions;
    data?: ProcessOptions;
    messages: string[];
}
export declare class ProcessService {
    private recordMutationGQL;
    protected graphqlName: string;
    protected coreName: string;
    protected createFieldsMetadata: {
        fields: string[];
    };
    constructor(recordMutationGQL: EntityMutationGQL);
    /**
     * Public Api
     */
    /**
     * Submit and action/process request
     * Returns observable
     *
     * @param {string} type to create
     * @param {object} options to send
     * @returns {object} Observable<any>
     */
    submit(type: string, options: ProcessOptions): Observable<Process>;
    /**
     * Internal API
     */
    /**
     * Create a process on the backend
     *
     * @param {string} type to create
     * @param {object} options to send
     * @returns {object} Observable<any>
     */
    protected create(type: string, options: ProcessOptions): Observable<Process>;
    static ɵfac: i0.ɵɵFactoryDeclaration<ProcessService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<ProcessService>;
}
