/**
 * SuiteCRM is a customer relationship management program developed by SalesAgility Ltd.
 * Copyright (C) 2021-2023 SalesAgility Ltd.
 *
 * This program is free software; you can redistribute it and/or modify it under
 * the terms of the GNU Affero General Public License version 3 as published by the
 * Free Software Foundation with the addition of the following permission added
 * to Section 15 as permitted in Section 7(a): FOR ANY PART OF THE COVERED WORK
 * IN WHICH THE COPYRIGHT IS OWNED BY SALESAGILITY, SALESAGILITY DISCLAIMS THE
 * WARRANTY OF NON INFRINGEMENT OF THIRD PARTY RIGHTS.
 *
 * This program is distributed in the hope that it will be useful, but WITHOUT
 * ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS
 * FOR A PARTICULAR PURPOSE. See the GNU Affero General Public License for more
 * details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 *
 * In accordance with Section 7(b) of the GNU Affero General Public License
 * version 3, these Appropriate Legal Notices must retain the display of the
 * "Supercharged by SuiteCRM" logo. If the display of the logos is not reasonably
 * feasible for technical reasons, the Appropriate Legal Notices must display
 * the words "Supercharged by SuiteCRM".
 */
import { Injectable } from '@angular/core';
import { MessageTypes } from 'common';
import { BehaviorSubject } from 'rxjs';
import { SystemConfigStore } from '../../store/system-config/system-config.store';
import * as i0 from "@angular/core";
import * as i1 from "../../store/system-config/system-config.store";
class MessageService {
    constructor(config) {
        this.config = config;
        this.messages = [];
        this.timeout = 3;
        this.messagesStage = new BehaviorSubject([]);
        this.messages$ = this.messagesStage.asObservable();
        this.initTimeOut();
    }
    updateState(messages) {
        this.messagesStage.next(this.messages = messages);
    }
    removeMessages() {
        this.updateState([]);
    }
    contains(message, remove = false) {
        let found = false;
        for (let i = 0; i < this.messages.length; i++) {
            if (!this.isSame(message, this.messages[i])) {
                continue;
            }
            found = true;
            if (remove) {
                const messages = [...this.messages];
                messages.splice(i, 1);
                this.updateState(messages);
            }
            break;
        }
        return found;
    }
    addMessage(message) {
        // push message only if it does not contains already...
        let ret = -1;
        if (!this.contains(message)) {
            const newMessages = [...this.messages];
            ret = newMessages.push(message);
            if (message.type === MessageTypes.success || message.type === MessageTypes.warning) {
                setTimeout(() => {
                    this.contains(message, true);
                }, this.timeout * 1000);
            }
            this.updateState(newMessages);
        }
        return ret;
    }
    addPrimaryMessage(text) {
        return this.addMessage({
            type: MessageTypes.primary,
            text
        });
    }
    addSecondaryMessage(text) {
        return this.addMessage({
            type: MessageTypes.secondary,
            text
        });
    }
    addSuccessMessage(text) {
        return this.addMessage({
            type: MessageTypes.success,
            text
        });
    }
    addSuccessMessageByKey(labelKey) {
        return this.addMessage({
            type: MessageTypes.success,
            labelKey
        });
    }
    addDangerMessage(text) {
        return this.addMessage({
            type: MessageTypes.danger,
            text
        });
    }
    addDangerMessageByKey(labelKey) {
        return this.addMessage({
            type: MessageTypes.danger,
            labelKey
        });
    }
    addWarningMessage(text) {
        return this.addMessage({
            type: MessageTypes.warning,
            text
        });
    }
    addWarningMessageByKey(labelKey) {
        return this.addMessage({
            type: MessageTypes.warning,
            labelKey
        });
    }
    addInfoMessage(text) {
        return this.addMessage({
            type: MessageTypes.info,
            text
        });
    }
    addDarkMessage(text) {
        return this.addMessage({
            type: MessageTypes.dark,
            text
        });
    }
    // --- LOG ---
    log(...args) {
        console.log.apply(console, args);
    }
    error(...args) {
        console.error.apply(console, args);
    }
    initTimeOut() {
        const ui = this.config.getConfigValue('ui');
        if (ui && ui.alert_timeout) {
            const parsed = parseInt(ui.alert_timeout, 10);
            if (!isNaN(parsed)) {
                this.timeout = parsed;
            }
        }
    }
    /**
     * Compare the text/labelKey on two messages. LabelKey always takes priority
     *
     * @param {Message} newMessage New Message
     * @param {Message} existingMessage Existing Message
     * @protected
     * @returns {boolean} True if is the same
     */
    isSame(newMessage, existingMessage) {
        let sourceField = 'text';
        if (newMessage.labelKey) {
            sourceField = 'labelKey';
        }
        return newMessage[sourceField] === existingMessage[sourceField];
    }
    static { this.ɵfac = function MessageService_Factory(t) { return new (t || MessageService)(i0.ɵɵinject(i1.SystemConfigStore)); }; }
    static { this.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: MessageService, factory: MessageService.ɵfac, providedIn: 'root' }); }
}
export { MessageService };
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(MessageService, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: i1.SystemConfigStore }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVzc2FnZS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vY29yZS9hcHAvY29yZS9zcmMvbGliL3NlcnZpY2VzL21lc3NhZ2UvbWVzc2FnZS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0F3Qkc7QUFFSCxPQUFPLEVBQUMsVUFBVSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBVSxZQUFZLEVBQUMsTUFBTSxRQUFRLENBQUM7QUFDN0MsT0FBTyxFQUFDLGVBQWUsRUFBYSxNQUFNLE1BQU0sQ0FBQztBQUNqRCxPQUFPLEVBQUMsaUJBQWlCLEVBQUMsTUFBTSwrQ0FBK0MsQ0FBQzs7O0FBRWhGLE1BR2EsY0FBYztJQU12QixZQUFtQixNQUF5QjtRQUF6QixXQUFNLEdBQU4sTUFBTSxDQUFtQjtRQUpsQyxhQUFRLEdBQWMsRUFBRSxDQUFDO1FBRXpCLFlBQU8sR0FBRyxDQUFDLENBQUM7UUFHbEIsSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLGVBQWUsQ0FBWSxFQUFFLENBQUMsQ0FBQztRQUN4RCxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsWUFBWSxFQUFFLENBQUM7UUFDbkQsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO0lBQ3ZCLENBQUM7SUFFRCxXQUFXLENBQUMsUUFBbUI7UUFDM0IsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUMsQ0FBQztJQUN0RCxDQUFDO0lBRUQsY0FBYztRQUNWLElBQUksQ0FBQyxXQUFXLENBQUMsRUFBRSxDQUFDLENBQUM7SUFDekIsQ0FBQztJQUVELFFBQVEsQ0FBQyxPQUFnQixFQUFFLE1BQU0sR0FBRyxLQUFLO1FBQ3JDLElBQUksS0FBSyxHQUFHLEtBQUssQ0FBQztRQUNsQixLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7WUFDM0MsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRTtnQkFDekMsU0FBUzthQUNaO1lBQ0QsS0FBSyxHQUFHLElBQUksQ0FBQztZQUNiLElBQUksTUFBTSxFQUFFO2dCQUNSLE1BQU0sUUFBUSxHQUFHLENBQUMsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7Z0JBQ3BDLFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO2dCQUN0QixJQUFJLENBQUMsV0FBVyxDQUFDLFFBQVEsQ0FBQyxDQUFDO2FBQzlCO1lBQ0QsTUFBTTtTQUNUO1FBQ0QsT0FBTyxLQUFLLENBQUM7SUFDakIsQ0FBQztJQUVELFVBQVUsQ0FBQyxPQUFnQjtRQUN2Qix1REFBdUQ7UUFDdkQsSUFBSSxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFDYixJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsRUFBRTtZQUN6QixNQUFNLFdBQVcsR0FBRyxDQUFDLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1lBQ3ZDLEdBQUcsR0FBRyxXQUFXLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1lBRWhDLElBQUksT0FBTyxDQUFDLElBQUksS0FBSyxZQUFZLENBQUMsT0FBTyxJQUFJLE9BQU8sQ0FBQyxJQUFJLEtBQUssWUFBWSxDQUFDLE9BQU8sRUFBRTtnQkFDaEYsVUFBVSxDQUFDLEdBQUcsRUFBRTtvQkFDWixJQUFJLENBQUMsUUFBUSxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsQ0FBQztnQkFDakMsQ0FBQyxFQUFFLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLENBQUM7YUFDM0I7WUFFRCxJQUFJLENBQUMsV0FBVyxDQUFDLFdBQVcsQ0FBQyxDQUFDO1NBQ2pDO1FBRUQsT0FBTyxHQUFHLENBQUM7SUFDZixDQUFDO0lBRUQsaUJBQWlCLENBQUMsSUFBWTtRQUMxQixPQUFPLElBQUksQ0FBQyxVQUFVLENBQUM7WUFDbkIsSUFBSSxFQUFFLFlBQVksQ0FBQyxPQUFPO1lBQzFCLElBQUk7U0FDUCxDQUFDLENBQUM7SUFDUCxDQUFDO0lBRUQsbUJBQW1CLENBQUMsSUFBWTtRQUM1QixPQUFPLElBQUksQ0FBQyxVQUFVLENBQUM7WUFDbkIsSUFBSSxFQUFFLFlBQVksQ0FBQyxTQUFTO1lBQzVCLElBQUk7U0FDUCxDQUFDLENBQUM7SUFDUCxDQUFDO0lBRUQsaUJBQWlCLENBQUMsSUFBWTtRQUMxQixPQUFPLElBQUksQ0FBQyxVQUFVLENBQUM7WUFDbkIsSUFBSSxFQUFFLFlBQVksQ0FBQyxPQUFPO1lBQzFCLElBQUk7U0FDUCxDQUFDLENBQUM7SUFDUCxDQUFDO0lBRUQsc0JBQXNCLENBQUMsUUFBZ0I7UUFDbkMsT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDO1lBQ25CLElBQUksRUFBRSxZQUFZLENBQUMsT0FBTztZQUMxQixRQUFRO1NBQ1gsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUVELGdCQUFnQixDQUFDLElBQVk7UUFDekIsT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDO1lBQ25CLElBQUksRUFBRSxZQUFZLENBQUMsTUFBTTtZQUN6QixJQUFJO1NBQ1AsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUVELHFCQUFxQixDQUFDLFFBQWdCO1FBQ2xDLE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQztZQUNuQixJQUFJLEVBQUUsWUFBWSxDQUFDLE1BQU07WUFDekIsUUFBUTtTQUNYLENBQUMsQ0FBQztJQUNQLENBQUM7SUFFRCxpQkFBaUIsQ0FBQyxJQUFZO1FBQzFCLE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQztZQUNuQixJQUFJLEVBQUUsWUFBWSxDQUFDLE9BQU87WUFDMUIsSUFBSTtTQUNQLENBQUMsQ0FBQztJQUNQLENBQUM7SUFFRCxzQkFBc0IsQ0FBQyxRQUFnQjtRQUNuQyxPQUFPLElBQUksQ0FBQyxVQUFVLENBQUM7WUFDbkIsSUFBSSxFQUFFLFlBQVksQ0FBQyxPQUFPO1lBQzFCLFFBQVE7U0FDWCxDQUFDLENBQUM7SUFDUCxDQUFDO0lBRUQsY0FBYyxDQUFDLElBQVk7UUFDdkIsT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDO1lBQ25CLElBQUksRUFBRSxZQUFZLENBQUMsSUFBSTtZQUN2QixJQUFJO1NBQ1AsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUVELGNBQWMsQ0FBQyxJQUFZO1FBQ3ZCLE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQztZQUNuQixJQUFJLEVBQUUsWUFBWSxDQUFDLElBQUk7WUFDdkIsSUFBSTtTQUNQLENBQUMsQ0FBQztJQUNQLENBQUM7SUFFRCxjQUFjO0lBRWQsR0FBRyxDQUFDLEdBQUcsSUFBVztRQUNkLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsQ0FBQztJQUNyQyxDQUFDO0lBRUQsS0FBSyxDQUFDLEdBQUcsSUFBVztRQUNoQixPQUFPLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDdkMsQ0FBQztJQUdTLFdBQVc7UUFDakIsTUFBTSxFQUFFLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDNUMsSUFBSSxFQUFFLElBQUksRUFBRSxDQUFDLGFBQWEsRUFBRTtZQUN4QixNQUFNLE1BQU0sR0FBRyxRQUFRLENBQUMsRUFBRSxDQUFDLGFBQWEsRUFBRSxFQUFFLENBQUMsQ0FBQztZQUM5QyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxFQUFFO2dCQUNoQixJQUFJLENBQUMsT0FBTyxHQUFHLE1BQU0sQ0FBQzthQUN6QjtTQUNKO0lBQ0wsQ0FBQztJQUVEOzs7Ozs7O09BT0c7SUFDTyxNQUFNLENBQUMsVUFBbUIsRUFBRSxlQUF3QjtRQUUxRCxJQUFJLFdBQVcsR0FBRyxNQUFNLENBQUM7UUFDekIsSUFBSSxVQUFVLENBQUMsUUFBUSxFQUFDO1lBQ3BCLFdBQVcsR0FBRyxVQUFVLENBQUM7U0FDNUI7UUFFRCxPQUFPLFVBQVUsQ0FBQyxXQUFXLENBQUMsS0FBSyxlQUFlLENBQUMsV0FBVyxDQUFDLENBQUM7SUFDcEUsQ0FBQzsrRUFuS1EsY0FBYzt1RUFBZCxjQUFjLFdBQWQsY0FBYyxtQkFGWCxNQUFNOztTQUVULGNBQWM7dUZBQWQsY0FBYztjQUgxQixVQUFVO2VBQUM7Z0JBQ1IsVUFBVSxFQUFFLE1BQU07YUFDckIiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIFN1aXRlQ1JNIGlzIGEgY3VzdG9tZXIgcmVsYXRpb25zaGlwIG1hbmFnZW1lbnQgcHJvZ3JhbSBkZXZlbG9wZWQgYnkgU2FsZXNBZ2lsaXR5IEx0ZC5cbiAqIENvcHlyaWdodCAoQykgMjAyMS0yMDIzIFNhbGVzQWdpbGl0eSBMdGQuXG4gKlxuICogVGhpcyBwcm9ncmFtIGlzIGZyZWUgc29mdHdhcmU7IHlvdSBjYW4gcmVkaXN0cmlidXRlIGl0IGFuZC9vciBtb2RpZnkgaXQgdW5kZXJcbiAqIHRoZSB0ZXJtcyBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIHZlcnNpb24gMyBhcyBwdWJsaXNoZWQgYnkgdGhlXG4gKiBGcmVlIFNvZnR3YXJlIEZvdW5kYXRpb24gd2l0aCB0aGUgYWRkaXRpb24gb2YgdGhlIGZvbGxvd2luZyBwZXJtaXNzaW9uIGFkZGVkXG4gKiB0byBTZWN0aW9uIDE1IGFzIHBlcm1pdHRlZCBpbiBTZWN0aW9uIDcoYSk6IEZPUiBBTlkgUEFSVCBPRiBUSEUgQ09WRVJFRCBXT1JLXG4gKiBJTiBXSElDSCBUSEUgQ09QWVJJR0hUIElTIE9XTkVEIEJZIFNBTEVTQUdJTElUWSwgU0FMRVNBR0lMSVRZIERJU0NMQUlNUyBUSEVcbiAqIFdBUlJBTlRZIE9GIE5PTiBJTkZSSU5HRU1FTlQgT0YgVEhJUkQgUEFSVFkgUklHSFRTLlxuICpcbiAqIFRoaXMgcHJvZ3JhbSBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLCBidXQgV0lUSE9VVFxuICogQU5ZIFdBUlJBTlRZOyB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2YgTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1NcbiAqIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS4gU2VlIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgZm9yIG1vcmVcbiAqIGRldGFpbHMuXG4gKlxuICogWW91IHNob3VsZCBoYXZlIHJlY2VpdmVkIGEgY29weSBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4gKiBhbG9uZyB3aXRoIHRoaXMgcHJvZ3JhbS4gIElmIG5vdCwgc2VlIDxodHRwOi8vd3d3LmdudS5vcmcvbGljZW5zZXMvPi5cbiAqXG4gKiBJbiBhY2NvcmRhbmNlIHdpdGggU2VjdGlvbiA3KGIpIG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiAqIHZlcnNpb24gMywgdGhlc2UgQXBwcm9wcmlhdGUgTGVnYWwgTm90aWNlcyBtdXN0IHJldGFpbiB0aGUgZGlzcGxheSBvZiB0aGVcbiAqIFwiU3VwZXJjaGFyZ2VkIGJ5IFN1aXRlQ1JNXCIgbG9nby4gSWYgdGhlIGRpc3BsYXkgb2YgdGhlIGxvZ29zIGlzIG5vdCByZWFzb25hYmx5XG4gKiBmZWFzaWJsZSBmb3IgdGVjaG5pY2FsIHJlYXNvbnMsIHRoZSBBcHByb3ByaWF0ZSBMZWdhbCBOb3RpY2VzIG11c3QgZGlzcGxheVxuICogdGhlIHdvcmRzIFwiU3VwZXJjaGFyZ2VkIGJ5IFN1aXRlQ1JNXCIuXG4gKi9cblxuaW1wb3J0IHtJbmplY3RhYmxlfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7TWVzc2FnZSwgTWVzc2FnZVR5cGVzfSBmcm9tICdjb21tb24nO1xuaW1wb3J0IHtCZWhhdmlvclN1YmplY3QsIE9ic2VydmFibGV9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHtTeXN0ZW1Db25maWdTdG9yZX0gZnJvbSAnLi4vLi4vc3RvcmUvc3lzdGVtLWNvbmZpZy9zeXN0ZW0tY29uZmlnLnN0b3JlJztcblxuQEluamVjdGFibGUoe1xuICAgIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBNZXNzYWdlU2VydmljZSB7XG4gICAgbWVzc2FnZXMkOiBPYnNlcnZhYmxlPE1lc3NhZ2VbXT47XG4gICAgcHJvdGVjdGVkIG1lc3NhZ2VzOiBNZXNzYWdlW10gPSBbXTtcbiAgICBwcm90ZWN0ZWQgbWVzc2FnZXNTdGFnZTogQmVoYXZpb3JTdWJqZWN0PE1lc3NhZ2VbXT47XG4gICAgcHJvdGVjdGVkIHRpbWVvdXQgPSAzO1xuXG4gICAgY29uc3RydWN0b3IocHVibGljIGNvbmZpZzogU3lzdGVtQ29uZmlnU3RvcmUpIHtcbiAgICAgICAgdGhpcy5tZXNzYWdlc1N0YWdlID0gbmV3IEJlaGF2aW9yU3ViamVjdDxNZXNzYWdlW10+KFtdKTtcbiAgICAgICAgdGhpcy5tZXNzYWdlcyQgPSB0aGlzLm1lc3NhZ2VzU3RhZ2UuYXNPYnNlcnZhYmxlKCk7XG4gICAgICAgIHRoaXMuaW5pdFRpbWVPdXQoKTtcbiAgICB9XG5cbiAgICB1cGRhdGVTdGF0ZShtZXNzYWdlczogTWVzc2FnZVtdKTogdm9pZCB7XG4gICAgICAgIHRoaXMubWVzc2FnZXNTdGFnZS5uZXh0KHRoaXMubWVzc2FnZXMgPSBtZXNzYWdlcyk7XG4gICAgfVxuXG4gICAgcmVtb3ZlTWVzc2FnZXMoKTogdm9pZCB7XG4gICAgICAgIHRoaXMudXBkYXRlU3RhdGUoW10pO1xuICAgIH1cblxuICAgIGNvbnRhaW5zKG1lc3NhZ2U6IE1lc3NhZ2UsIHJlbW92ZSA9IGZhbHNlKTogYm9vbGVhbiB7XG4gICAgICAgIGxldCBmb3VuZCA9IGZhbHNlO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMubWVzc2FnZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGlmICghdGhpcy5pc1NhbWUobWVzc2FnZSwgdGhpcy5tZXNzYWdlc1tpXSkpIHtcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGZvdW5kID0gdHJ1ZTtcbiAgICAgICAgICAgIGlmIChyZW1vdmUpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBtZXNzYWdlcyA9IFsuLi50aGlzLm1lc3NhZ2VzXTtcbiAgICAgICAgICAgICAgICBtZXNzYWdlcy5zcGxpY2UoaSwgMSk7XG4gICAgICAgICAgICAgICAgdGhpcy51cGRhdGVTdGF0ZShtZXNzYWdlcyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZm91bmQ7XG4gICAgfVxuXG4gICAgYWRkTWVzc2FnZShtZXNzYWdlOiBNZXNzYWdlKTogbnVtYmVyIHtcbiAgICAgICAgLy8gcHVzaCBtZXNzYWdlIG9ubHkgaWYgaXQgZG9lcyBub3QgY29udGFpbnMgYWxyZWFkeS4uLlxuICAgICAgICBsZXQgcmV0ID0gLTE7XG4gICAgICAgIGlmICghdGhpcy5jb250YWlucyhtZXNzYWdlKSkge1xuICAgICAgICAgICAgY29uc3QgbmV3TWVzc2FnZXMgPSBbLi4udGhpcy5tZXNzYWdlc107XG4gICAgICAgICAgICByZXQgPSBuZXdNZXNzYWdlcy5wdXNoKG1lc3NhZ2UpO1xuXG4gICAgICAgICAgICBpZiAobWVzc2FnZS50eXBlID09PSBNZXNzYWdlVHlwZXMuc3VjY2VzcyB8fCBtZXNzYWdlLnR5cGUgPT09IE1lc3NhZ2VUeXBlcy53YXJuaW5nKSB7XG4gICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY29udGFpbnMobWVzc2FnZSwgdHJ1ZSk7XG4gICAgICAgICAgICAgICAgfSwgdGhpcy50aW1lb3V0ICogMTAwMCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHRoaXMudXBkYXRlU3RhdGUobmV3TWVzc2FnZXMpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHJldDtcbiAgICB9XG5cbiAgICBhZGRQcmltYXJ5TWVzc2FnZSh0ZXh0OiBzdHJpbmcpOiBudW1iZXIge1xuICAgICAgICByZXR1cm4gdGhpcy5hZGRNZXNzYWdlKHtcbiAgICAgICAgICAgIHR5cGU6IE1lc3NhZ2VUeXBlcy5wcmltYXJ5LFxuICAgICAgICAgICAgdGV4dFxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBhZGRTZWNvbmRhcnlNZXNzYWdlKHRleHQ6IHN0cmluZyk6IG51bWJlciB7XG4gICAgICAgIHJldHVybiB0aGlzLmFkZE1lc3NhZ2Uoe1xuICAgICAgICAgICAgdHlwZTogTWVzc2FnZVR5cGVzLnNlY29uZGFyeSxcbiAgICAgICAgICAgIHRleHRcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgYWRkU3VjY2Vzc01lc3NhZ2UodGV4dDogc3RyaW5nKTogbnVtYmVyIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuYWRkTWVzc2FnZSh7XG4gICAgICAgICAgICB0eXBlOiBNZXNzYWdlVHlwZXMuc3VjY2VzcyxcbiAgICAgICAgICAgIHRleHRcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgYWRkU3VjY2Vzc01lc3NhZ2VCeUtleShsYWJlbEtleTogc3RyaW5nKTogbnVtYmVyIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuYWRkTWVzc2FnZSh7XG4gICAgICAgICAgICB0eXBlOiBNZXNzYWdlVHlwZXMuc3VjY2VzcyxcbiAgICAgICAgICAgIGxhYmVsS2V5XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGFkZERhbmdlck1lc3NhZ2UodGV4dDogc3RyaW5nKTogbnVtYmVyIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuYWRkTWVzc2FnZSh7XG4gICAgICAgICAgICB0eXBlOiBNZXNzYWdlVHlwZXMuZGFuZ2VyLFxuICAgICAgICAgICAgdGV4dFxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBhZGREYW5nZXJNZXNzYWdlQnlLZXkobGFiZWxLZXk6IHN0cmluZyk6IG51bWJlciB7XG4gICAgICAgIHJldHVybiB0aGlzLmFkZE1lc3NhZ2Uoe1xuICAgICAgICAgICAgdHlwZTogTWVzc2FnZVR5cGVzLmRhbmdlcixcbiAgICAgICAgICAgIGxhYmVsS2V5XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGFkZFdhcm5pbmdNZXNzYWdlKHRleHQ6IHN0cmluZyk6IG51bWJlciB7XG4gICAgICAgIHJldHVybiB0aGlzLmFkZE1lc3NhZ2Uoe1xuICAgICAgICAgICAgdHlwZTogTWVzc2FnZVR5cGVzLndhcm5pbmcsXG4gICAgICAgICAgICB0ZXh0XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGFkZFdhcm5pbmdNZXNzYWdlQnlLZXkobGFiZWxLZXk6IHN0cmluZyk6IG51bWJlciB7XG4gICAgICAgIHJldHVybiB0aGlzLmFkZE1lc3NhZ2Uoe1xuICAgICAgICAgICAgdHlwZTogTWVzc2FnZVR5cGVzLndhcm5pbmcsXG4gICAgICAgICAgICBsYWJlbEtleVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBhZGRJbmZvTWVzc2FnZSh0ZXh0OiBzdHJpbmcpOiBudW1iZXIge1xuICAgICAgICByZXR1cm4gdGhpcy5hZGRNZXNzYWdlKHtcbiAgICAgICAgICAgIHR5cGU6IE1lc3NhZ2VUeXBlcy5pbmZvLFxuICAgICAgICAgICAgdGV4dFxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBhZGREYXJrTWVzc2FnZSh0ZXh0OiBzdHJpbmcpOiBudW1iZXIge1xuICAgICAgICByZXR1cm4gdGhpcy5hZGRNZXNzYWdlKHtcbiAgICAgICAgICAgIHR5cGU6IE1lc3NhZ2VUeXBlcy5kYXJrLFxuICAgICAgICAgICAgdGV4dFxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvLyAtLS0gTE9HIC0tLVxuXG4gICAgbG9nKC4uLmFyZ3M6IGFueVtdKTogdm9pZCB7XG4gICAgICAgIGNvbnNvbGUubG9nLmFwcGx5KGNvbnNvbGUsIGFyZ3MpO1xuICAgIH1cblxuICAgIGVycm9yKC4uLmFyZ3M6IGFueVtdKTogdm9pZCB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IuYXBwbHkoY29uc29sZSwgYXJncyk7XG4gICAgfVxuXG5cbiAgICBwcm90ZWN0ZWQgaW5pdFRpbWVPdXQoKTogdm9pZCB7XG4gICAgICAgIGNvbnN0IHVpID0gdGhpcy5jb25maWcuZ2V0Q29uZmlnVmFsdWUoJ3VpJyk7XG4gICAgICAgIGlmICh1aSAmJiB1aS5hbGVydF90aW1lb3V0KSB7XG4gICAgICAgICAgICBjb25zdCBwYXJzZWQgPSBwYXJzZUludCh1aS5hbGVydF90aW1lb3V0LCAxMCk7XG4gICAgICAgICAgICBpZiAoIWlzTmFOKHBhcnNlZCkpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnRpbWVvdXQgPSBwYXJzZWQ7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDb21wYXJlIHRoZSB0ZXh0L2xhYmVsS2V5IG9uIHR3byBtZXNzYWdlcy4gTGFiZWxLZXkgYWx3YXlzIHRha2VzIHByaW9yaXR5XG4gICAgICpcbiAgICAgKiBAcGFyYW0ge01lc3NhZ2V9IG5ld01lc3NhZ2UgTmV3IE1lc3NhZ2VcbiAgICAgKiBAcGFyYW0ge01lc3NhZ2V9IGV4aXN0aW5nTWVzc2FnZSBFeGlzdGluZyBNZXNzYWdlXG4gICAgICogQHByb3RlY3RlZFxuICAgICAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIGlzIHRoZSBzYW1lXG4gICAgICovXG4gICAgcHJvdGVjdGVkIGlzU2FtZShuZXdNZXNzYWdlOiBNZXNzYWdlLCBleGlzdGluZ01lc3NhZ2U6IE1lc3NhZ2UpOiBib29sZWFuIHtcblxuICAgICAgICBsZXQgc291cmNlRmllbGQgPSAndGV4dCc7XG4gICAgICAgIGlmIChuZXdNZXNzYWdlLmxhYmVsS2V5KXtcbiAgICAgICAgICAgIHNvdXJjZUZpZWxkID0gJ2xhYmVsS2V5JztcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBuZXdNZXNzYWdlW3NvdXJjZUZpZWxkXSA9PT0gZXhpc3RpbmdNZXNzYWdlW3NvdXJjZUZpZWxkXTtcbiAgICB9XG59XG4iXX0=