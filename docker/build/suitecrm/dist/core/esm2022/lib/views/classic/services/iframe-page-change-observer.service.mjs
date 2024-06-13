/**
 * SuiteCRM is a customer relationship management program developed by SalesAgility Ltd.
 * Copyright (C) 2021 SalesAgility Ltd.
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
export class IframePageChangeObserver {
    constructor(iframe, changeCallback = null, loadCallback = null, unLoadCallback = null) {
        this.changeCallback = null;
        this.loadCallback = null;
        this.unLoadCallback = null;
        this.unloadListener = null;
        this.loadListener = null;
        this.iframe = iframe;
        this.changeCallback = changeCallback;
        this.loadCallback = loadCallback;
        this.unLoadCallback = unLoadCallback;
    }
    /**
     * Public Api
     */
    init() {
        this.loadListener = this.loadHandler.bind(this);
        this.unloadListener = this.unloadHandler.bind(this);
        this.iframe.contentWindow.addEventListener('load', this.loadListener);
        this.iframe.contentWindow.removeEventListener('unload', this.unloadListener);
    }
    destroy() {
        const contentWindow = this.iframe && this.iframe.contentWindow;
        if (contentWindow) {
            contentWindow.removeEventListener('unload', this.unloadListener);
            contentWindow.removeEventListener('load', this.loadListener);
        }
        this.iframe = null;
        this.lastDispatched = null;
        this.changeCallback = null;
        this.loadCallback = null;
        this.unLoadCallback = null;
        this.loadListener = null;
        this.unloadListener = null;
    }
    /**
     * Internal API
     */
    loadHandler() {
        this.loadCallback();
        this.bindUnload();
    }
    bindUnload() {
        this.iframe.contentWindow.removeEventListener('unload', this.unloadListener);
        this.unloadListener = this.unloadHandler.bind(this);
        this.iframe.contentWindow.addEventListener('unload', this.unloadListener);
    }
    unloadHandler() {
        this.unLoadCallback();
        // Timeout needed because the URL changes immediately after
        // the `unload` event is dispatched.
        setTimeout(this.triggerPageChange.bind(this), 0);
    }
    triggerPageChange() {
        const newHref = this.iframe && this.iframe.contentWindow && this.iframe.contentWindow.location.href;
        if (newHref && newHref !== this.lastDispatched) {
            this.lastDispatched = newHref;
            this.changeCallback(newHref);
        }
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaWZyYW1lLXBhZ2UtY2hhbmdlLW9ic2VydmVyLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9jb3JlL2FwcC9jb3JlL3NyYy9saWIvdmlld3MvY2xhc3NpYy9zZXJ2aWNlcy9pZnJhbWUtcGFnZS1jaGFuZ2Utb2JzZXJ2ZXIuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBd0JHO0FBRUgsTUFBTSxPQUFPLHdCQUF3QjtJQVNqQyxZQUNJLE1BQU0sRUFDTixpQkFBMkIsSUFBSSxFQUMvQixlQUF5QixJQUFJLEVBQzdCLGlCQUEyQixJQUFJO1FBVjNCLG1CQUFjLEdBQWEsSUFBSSxDQUFDO1FBQ2hDLGlCQUFZLEdBQWEsSUFBSSxDQUFDO1FBQzlCLG1CQUFjLEdBQWEsSUFBSSxDQUFDO1FBQ2hDLG1CQUFjLEdBQWEsSUFBSSxDQUFDO1FBQ2hDLGlCQUFZLEdBQWEsSUFBSSxDQUFDO1FBUWxDLElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO1FBQ3JCLElBQUksQ0FBQyxjQUFjLEdBQUcsY0FBYyxDQUFDO1FBQ3JDLElBQUksQ0FBQyxZQUFZLEdBQUcsWUFBWSxDQUFDO1FBQ2pDLElBQUksQ0FBQyxjQUFjLEdBQUcsY0FBYyxDQUFDO0lBQ3pDLENBQUM7SUFFRDs7T0FFRztJQUVJLElBQUk7UUFDUCxJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ2hELElBQUksQ0FBQyxjQUFjLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDcEQsSUFBSSxDQUFDLE1BQU0sQ0FBQyxhQUFhLENBQUMsZ0JBQWdCLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQztRQUN0RSxJQUFJLENBQUMsTUFBTSxDQUFDLGFBQWEsQ0FBQyxtQkFBbUIsQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDO0lBQ2pGLENBQUM7SUFFTSxPQUFPO1FBRVYsTUFBTSxhQUFhLEdBQUcsSUFBSSxDQUFDLE1BQU0sSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLGFBQWEsQ0FBQztRQUUvRCxJQUFJLGFBQWEsRUFBRTtZQUNmLGFBQWEsQ0FBQyxtQkFBbUIsQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDO1lBQ2pFLGFBQWEsQ0FBQyxtQkFBbUIsQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO1NBQ2hFO1FBQ0QsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7UUFDbkIsSUFBSSxDQUFDLGNBQWMsR0FBRyxJQUFJLENBQUM7UUFDM0IsSUFBSSxDQUFDLGNBQWMsR0FBRyxJQUFJLENBQUM7UUFDM0IsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUM7UUFDekIsSUFBSSxDQUFDLGNBQWMsR0FBRyxJQUFJLENBQUM7UUFDM0IsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUM7UUFDekIsSUFBSSxDQUFDLGNBQWMsR0FBRyxJQUFJLENBQUM7SUFDL0IsQ0FBQztJQUdEOztPQUVHO0lBRU8sV0FBVztRQUNqQixJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7UUFDcEIsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO0lBQ3RCLENBQUM7SUFFUyxVQUFVO1FBQ2hCLElBQUksQ0FBQyxNQUFNLENBQUMsYUFBYSxDQUFDLG1CQUFtQixDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsY0FBYyxDQUFDLENBQUM7UUFDN0UsSUFBSSxDQUFDLGNBQWMsR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNwRCxJQUFJLENBQUMsTUFBTSxDQUFDLGFBQWEsQ0FBQyxnQkFBZ0IsQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDO0lBQzlFLENBQUM7SUFFUyxhQUFhO1FBQ25CLElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQztRQUV0QiwyREFBMkQ7UUFDM0Qsb0NBQW9DO1FBQ3BDLFVBQVUsQ0FBQyxJQUFJLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQ3JELENBQUM7SUFFUyxpQkFBaUI7UUFDdkIsTUFBTSxPQUFPLEdBQUcsSUFBSSxDQUFDLE1BQU0sSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLGFBQWEsSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDO1FBRXBHLElBQUksT0FBTyxJQUFJLE9BQU8sS0FBSyxJQUFJLENBQUMsY0FBYyxFQUFFO1lBQzVDLElBQUksQ0FBQyxjQUFjLEdBQUcsT0FBTyxDQUFDO1lBQzlCLElBQUksQ0FBQyxjQUFjLENBQUMsT0FBTyxDQUFDLENBQUM7U0FDaEM7SUFDTCxDQUFDO0NBRUoiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIFN1aXRlQ1JNIGlzIGEgY3VzdG9tZXIgcmVsYXRpb25zaGlwIG1hbmFnZW1lbnQgcHJvZ3JhbSBkZXZlbG9wZWQgYnkgU2FsZXNBZ2lsaXR5IEx0ZC5cbiAqIENvcHlyaWdodCAoQykgMjAyMSBTYWxlc0FnaWxpdHkgTHRkLlxuICpcbiAqIFRoaXMgcHJvZ3JhbSBpcyBmcmVlIHNvZnR3YXJlOyB5b3UgY2FuIHJlZGlzdHJpYnV0ZSBpdCBhbmQvb3IgbW9kaWZ5IGl0IHVuZGVyXG4gKiB0aGUgdGVybXMgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZSB2ZXJzaW9uIDMgYXMgcHVibGlzaGVkIGJ5IHRoZVxuICogRnJlZSBTb2Z0d2FyZSBGb3VuZGF0aW9uIHdpdGggdGhlIGFkZGl0aW9uIG9mIHRoZSBmb2xsb3dpbmcgcGVybWlzc2lvbiBhZGRlZFxuICogdG8gU2VjdGlvbiAxNSBhcyBwZXJtaXR0ZWQgaW4gU2VjdGlvbiA3KGEpOiBGT1IgQU5ZIFBBUlQgT0YgVEhFIENPVkVSRUQgV09SS1xuICogSU4gV0hJQ0ggVEhFIENPUFlSSUdIVCBJUyBPV05FRCBCWSBTQUxFU0FHSUxJVFksIFNBTEVTQUdJTElUWSBESVNDTEFJTVMgVEhFXG4gKiBXQVJSQU5UWSBPRiBOT04gSU5GUklOR0VNRU5UIE9GIFRISVJEIFBBUlRZIFJJR0hUUy5cbiAqXG4gKiBUaGlzIHByb2dyYW0gaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCwgYnV0IFdJVEhPVVRcbiAqIEFOWSBXQVJSQU5UWTsgd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTXG4gKiBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuIFNlZSB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGZvciBtb3JlXG4gKiBkZXRhaWxzLlxuICpcbiAqIFlvdSBzaG91bGQgaGF2ZSByZWNlaXZlZCBhIGNvcHkgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuICogYWxvbmcgd2l0aCB0aGlzIHByb2dyYW0uICBJZiBub3QsIHNlZSA8aHR0cDovL3d3dy5nbnUub3JnL2xpY2Vuc2VzLz4uXG4gKlxuICogSW4gYWNjb3JkYW5jZSB3aXRoIFNlY3Rpb24gNyhiKSBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4gKiB2ZXJzaW9uIDMsIHRoZXNlIEFwcHJvcHJpYXRlIExlZ2FsIE5vdGljZXMgbXVzdCByZXRhaW4gdGhlIGRpc3BsYXkgb2YgdGhlXG4gKiBcIlN1cGVyY2hhcmdlZCBieSBTdWl0ZUNSTVwiIGxvZ28uIElmIHRoZSBkaXNwbGF5IG9mIHRoZSBsb2dvcyBpcyBub3QgcmVhc29uYWJseVxuICogZmVhc2libGUgZm9yIHRlY2huaWNhbCByZWFzb25zLCB0aGUgQXBwcm9wcmlhdGUgTGVnYWwgTm90aWNlcyBtdXN0IGRpc3BsYXlcbiAqIHRoZSB3b3JkcyBcIlN1cGVyY2hhcmdlZCBieSBTdWl0ZUNSTVwiLlxuICovXG5cbmV4cG9ydCBjbGFzcyBJZnJhbWVQYWdlQ2hhbmdlT2JzZXJ2ZXIge1xuICAgIHByaXZhdGUgaWZyYW1lOiBhbnk7XG4gICAgcHJpdmF0ZSBsYXN0RGlzcGF0Y2hlZDogc3RyaW5nO1xuICAgIHByaXZhdGUgY2hhbmdlQ2FsbGJhY2s6IEZ1bmN0aW9uID0gbnVsbDtcbiAgICBwcml2YXRlIGxvYWRDYWxsYmFjazogRnVuY3Rpb24gPSBudWxsO1xuICAgIHByaXZhdGUgdW5Mb2FkQ2FsbGJhY2s6IEZ1bmN0aW9uID0gbnVsbDtcbiAgICBwcml2YXRlIHVubG9hZExpc3RlbmVyOiBGdW5jdGlvbiA9IG51bGw7XG4gICAgcHJpdmF0ZSBsb2FkTGlzdGVuZXI6IEZ1bmN0aW9uID0gbnVsbDtcblxuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBpZnJhbWUsXG4gICAgICAgIGNoYW5nZUNhbGxiYWNrOiBGdW5jdGlvbiA9IG51bGwsXG4gICAgICAgIGxvYWRDYWxsYmFjazogRnVuY3Rpb24gPSBudWxsLFxuICAgICAgICB1bkxvYWRDYWxsYmFjazogRnVuY3Rpb24gPSBudWxsLFxuICAgICkge1xuICAgICAgICB0aGlzLmlmcmFtZSA9IGlmcmFtZTtcbiAgICAgICAgdGhpcy5jaGFuZ2VDYWxsYmFjayA9IGNoYW5nZUNhbGxiYWNrO1xuICAgICAgICB0aGlzLmxvYWRDYWxsYmFjayA9IGxvYWRDYWxsYmFjaztcbiAgICAgICAgdGhpcy51bkxvYWRDYWxsYmFjayA9IHVuTG9hZENhbGxiYWNrO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFB1YmxpYyBBcGlcbiAgICAgKi9cblxuICAgIHB1YmxpYyBpbml0KCk6IHZvaWQge1xuICAgICAgICB0aGlzLmxvYWRMaXN0ZW5lciA9IHRoaXMubG9hZEhhbmRsZXIuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy51bmxvYWRMaXN0ZW5lciA9IHRoaXMudW5sb2FkSGFuZGxlci5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLmlmcmFtZS5jb250ZW50V2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCB0aGlzLmxvYWRMaXN0ZW5lcik7XG4gICAgICAgIHRoaXMuaWZyYW1lLmNvbnRlbnRXaW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcigndW5sb2FkJywgdGhpcy51bmxvYWRMaXN0ZW5lcik7XG4gICAgfVxuXG4gICAgcHVibGljIGRlc3Ryb3koKTogdm9pZCB7XG5cbiAgICAgICAgY29uc3QgY29udGVudFdpbmRvdyA9IHRoaXMuaWZyYW1lICYmIHRoaXMuaWZyYW1lLmNvbnRlbnRXaW5kb3c7XG5cbiAgICAgICAgaWYgKGNvbnRlbnRXaW5kb3cpIHtcbiAgICAgICAgICAgIGNvbnRlbnRXaW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcigndW5sb2FkJywgdGhpcy51bmxvYWRMaXN0ZW5lcik7XG4gICAgICAgICAgICBjb250ZW50V2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2xvYWQnLCB0aGlzLmxvYWRMaXN0ZW5lcik7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5pZnJhbWUgPSBudWxsO1xuICAgICAgICB0aGlzLmxhc3REaXNwYXRjaGVkID0gbnVsbDtcbiAgICAgICAgdGhpcy5jaGFuZ2VDYWxsYmFjayA9IG51bGw7XG4gICAgICAgIHRoaXMubG9hZENhbGxiYWNrID0gbnVsbDtcbiAgICAgICAgdGhpcy51bkxvYWRDYWxsYmFjayA9IG51bGw7XG4gICAgICAgIHRoaXMubG9hZExpc3RlbmVyID0gbnVsbDtcbiAgICAgICAgdGhpcy51bmxvYWRMaXN0ZW5lciA9IG51bGw7XG4gICAgfVxuXG5cbiAgICAvKipcbiAgICAgKiBJbnRlcm5hbCBBUElcbiAgICAgKi9cblxuICAgIHByb3RlY3RlZCBsb2FkSGFuZGxlcigpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5sb2FkQ2FsbGJhY2soKTtcbiAgICAgICAgdGhpcy5iaW5kVW5sb2FkKCk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIGJpbmRVbmxvYWQoKTogdm9pZCB7XG4gICAgICAgIHRoaXMuaWZyYW1lLmNvbnRlbnRXaW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcigndW5sb2FkJywgdGhpcy51bmxvYWRMaXN0ZW5lcik7XG4gICAgICAgIHRoaXMudW5sb2FkTGlzdGVuZXIgPSB0aGlzLnVubG9hZEhhbmRsZXIuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5pZnJhbWUuY29udGVudFdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCd1bmxvYWQnLCB0aGlzLnVubG9hZExpc3RlbmVyKTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgdW5sb2FkSGFuZGxlcigpOiB2b2lkIHtcbiAgICAgICAgdGhpcy51bkxvYWRDYWxsYmFjaygpO1xuXG4gICAgICAgIC8vIFRpbWVvdXQgbmVlZGVkIGJlY2F1c2UgdGhlIFVSTCBjaGFuZ2VzIGltbWVkaWF0ZWx5IGFmdGVyXG4gICAgICAgIC8vIHRoZSBgdW5sb2FkYCBldmVudCBpcyBkaXNwYXRjaGVkLlxuICAgICAgICBzZXRUaW1lb3V0KHRoaXMudHJpZ2dlclBhZ2VDaGFuZ2UuYmluZCh0aGlzKSwgMCk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIHRyaWdnZXJQYWdlQ2hhbmdlKCk6IHZvaWQge1xuICAgICAgICBjb25zdCBuZXdIcmVmID0gdGhpcy5pZnJhbWUgJiYgdGhpcy5pZnJhbWUuY29udGVudFdpbmRvdyAmJiB0aGlzLmlmcmFtZS5jb250ZW50V2luZG93LmxvY2F0aW9uLmhyZWY7XG5cbiAgICAgICAgaWYgKG5ld0hyZWYgJiYgbmV3SHJlZiAhPT0gdGhpcy5sYXN0RGlzcGF0Y2hlZCkge1xuICAgICAgICAgICAgdGhpcy5sYXN0RGlzcGF0Y2hlZCA9IG5ld0hyZWY7XG4gICAgICAgICAgICB0aGlzLmNoYW5nZUNhbGxiYWNrKG5ld0hyZWYpO1xuICAgICAgICB9XG4gICAgfVxuXG59XG4iXX0=