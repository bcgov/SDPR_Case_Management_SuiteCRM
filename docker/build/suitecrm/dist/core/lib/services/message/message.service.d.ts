import { Message } from 'common';
import { BehaviorSubject, Observable } from 'rxjs';
import { SystemConfigStore } from '../../store/system-config/system-config.store';
import * as i0 from "@angular/core";
export declare class MessageService {
    config: SystemConfigStore;
    messages$: Observable<Message[]>;
    protected messages: Message[];
    protected messagesStage: BehaviorSubject<Message[]>;
    protected timeout: number;
    constructor(config: SystemConfigStore);
    updateState(messages: Message[]): void;
    removeMessages(): void;
    contains(message: Message, remove?: boolean): boolean;
    addMessage(message: Message): number;
    addPrimaryMessage(text: string): number;
    addSecondaryMessage(text: string): number;
    addSuccessMessage(text: string): number;
    addSuccessMessageByKey(labelKey: string): number;
    addDangerMessage(text: string): number;
    addDangerMessageByKey(labelKey: string): number;
    addWarningMessage(text: string): number;
    addWarningMessageByKey(labelKey: string): number;
    addInfoMessage(text: string): number;
    addDarkMessage(text: string): number;
    log(...args: any[]): void;
    error(...args: any[]): void;
    protected initTimeOut(): void;
    /**
     * Compare the text/labelKey on two messages. LabelKey always takes priority
     *
     * @param {Message} newMessage New Message
     * @param {Message} existingMessage Existing Message
     * @protected
     * @returns {boolean} True if is the same
     */
    protected isSame(newMessage: Message, existingMessage: Message): boolean;
    static ɵfac: i0.ɵɵFactoryDeclaration<MessageService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<MessageService>;
}
