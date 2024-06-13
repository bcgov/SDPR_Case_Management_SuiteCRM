import { Record } from 'common';
import { RecordListModalResult } from '../../containers/record-list-modal/components/record-list-modal/record-list-modal.model';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { LanguageStore } from '../../store/language/language.store';
import { MessageService } from '../message/message.service';
import * as i0 from "@angular/core";
export declare class SelectModalService {
    protected languageStore: LanguageStore;
    protected message: MessageService;
    protected modalService: NgbModal;
    constructor(languageStore: LanguageStore, message: MessageService, modalService: NgbModal);
    /**
     * Get Selected Record
     *
     * @param {string} selectModule: The Modal module
     * @param onSelectCallback
     * @returns {void}
     */
    showSelectModal(selectModule: string, onSelectCallback?: Function): void;
    /**
     * Get Selected Record
     *
     * @param {object} data RecordListModalResult
     * @returns {object} Record
     */
    protected getSelectedRecord(data: RecordListModalResult): Record;
    static ɵfac: i0.ɵɵFactoryDeclaration<SelectModalService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<SelectModalService>;
}
