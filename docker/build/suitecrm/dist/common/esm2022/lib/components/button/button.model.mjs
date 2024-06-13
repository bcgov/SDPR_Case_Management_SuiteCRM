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
export class Button {
    constructor(klass = null, onClick = null, label = null, icon = null, labelKey = null, titleKey = null, labelModule = null) {
        this.klass = klass;
        this.onClick = onClick;
        this.label = label;
        this.icon = icon;
        this.labelKey = labelKey;
        this.titleKey = titleKey;
        this.labelModule = labelModule;
    }
    static fromButton(button) {
        return new Button(button.klass, button.onClick, button.label, button.icon, button.labelKey, button.titleKey, button.labelModule);
    }
    static appendClasses(button, newClasses) {
        if (!button.klass) {
            button.klass = newClasses;
            return;
        }
        if (typeof button.klass === 'string') {
            button.klass = newClasses.join(' ') + ' ' + button.klass;
            return;
        }
        if (button.klass instanceof Array || button.klass instanceof Set) {
            button.klass = [
                ...button.klass,
                ...newClasses
            ];
            return;
        }
        if (button.klass instanceof Object) {
            const classes = {
                ...button.klass,
            };
            classes[newClasses.join(' ')] = true;
            button.klass = classes;
        }
    }
    addClasses(newClasses) {
        if (!this.klass) {
            this.klass = newClasses;
            return;
        }
        if (typeof this.klass === 'string') {
            this.klass = newClasses.join(' ') + ' ' + this.klass;
            return;
        }
        if (this.klass instanceof Array || this.klass instanceof Set) {
            this.klass = [
                ...this.klass,
                ...newClasses
            ];
            return;
        }
        if (this.klass instanceof Object) {
            const classes = {
                ...this.klass,
            };
            classes[newClasses.join(' ')] = true;
            this.klass = classes;
        }
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnV0dG9uLm1vZGVsLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vY29yZS9hcHAvY29tbW9uL3NyYy9saWIvY29tcG9uZW50cy9idXR0b24vYnV0dG9uLm1vZGVsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0F3Qkc7QUFvQkgsTUFBTSxPQUFPLE1BQU07SUFFZixZQUNXLFFBQWtFLElBQUksRUFDdEUsVUFBMEIsSUFBSSxFQUM5QixRQUFnQixJQUFJLEVBQ3BCLE9BQWUsSUFBSSxFQUNuQixXQUFtQixJQUFJLEVBQ3ZCLFdBQW1CLElBQUksRUFDdkIsY0FBc0IsSUFBSTtRQU4xQixVQUFLLEdBQUwsS0FBSyxDQUFpRTtRQUN0RSxZQUFPLEdBQVAsT0FBTyxDQUF1QjtRQUM5QixVQUFLLEdBQUwsS0FBSyxDQUFlO1FBQ3BCLFNBQUksR0FBSixJQUFJLENBQWU7UUFDbkIsYUFBUSxHQUFSLFFBQVEsQ0FBZTtRQUN2QixhQUFRLEdBQVIsUUFBUSxDQUFlO1FBQ3ZCLGdCQUFXLEdBQVgsV0FBVyxDQUFlO0lBRXJDLENBQUM7SUFFTSxNQUFNLENBQUMsVUFBVSxDQUFDLE1BQXVCO1FBQzVDLE9BQU8sSUFBSSxNQUFNLENBQ2IsTUFBTSxDQUFDLEtBQUssRUFDWixNQUFNLENBQUMsT0FBTyxFQUNkLE1BQU0sQ0FBQyxLQUFLLEVBQ1osTUFBTSxDQUFDLElBQUksRUFDWCxNQUFNLENBQUMsUUFBUSxFQUNmLE1BQU0sQ0FBQyxRQUFRLEVBQ2YsTUFBTSxDQUFDLFdBQVcsQ0FDckIsQ0FBQztJQUNOLENBQUM7SUFFTSxNQUFNLENBQUMsYUFBYSxDQUFDLE1BQXVCLEVBQUUsVUFBb0I7UUFFckUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQUU7WUFDZixNQUFNLENBQUMsS0FBSyxHQUFHLFVBQVUsQ0FBQztZQUMxQixPQUFPO1NBQ1Y7UUFFRCxJQUFJLE9BQU8sTUFBTSxDQUFDLEtBQUssS0FBSyxRQUFRLEVBQUU7WUFDbEMsTUFBTSxDQUFDLEtBQUssR0FBRyxVQUFVLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsR0FBRyxNQUFNLENBQUMsS0FBSyxDQUFDO1lBQ3pELE9BQU87U0FDVjtRQUVELElBQUksTUFBTSxDQUFDLEtBQUssWUFBWSxLQUFLLElBQUksTUFBTSxDQUFDLEtBQUssWUFBWSxHQUFHLEVBQUU7WUFDOUQsTUFBTSxDQUFDLEtBQUssR0FBRztnQkFDWCxHQUFHLE1BQU0sQ0FBQyxLQUFLO2dCQUNmLEdBQUcsVUFBVTthQUNoQixDQUFDO1lBRUYsT0FBTztTQUNWO1FBRUQsSUFBSSxNQUFNLENBQUMsS0FBSyxZQUFZLE1BQU0sRUFBRTtZQUNoQyxNQUFNLE9BQU8sR0FBRztnQkFDWixHQUFHLE1BQU0sQ0FBQyxLQUFLO2FBQ2xCLENBQUM7WUFFRixPQUFPLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQztZQUNyQyxNQUFNLENBQUMsS0FBSyxHQUFHLE9BQU8sQ0FBQztTQUMxQjtJQUNMLENBQUM7SUFFTSxVQUFVLENBQUMsVUFBb0I7UUFFbEMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUU7WUFDYixJQUFJLENBQUMsS0FBSyxHQUFHLFVBQVUsQ0FBQztZQUN4QixPQUFPO1NBQ1Y7UUFFRCxJQUFJLE9BQU8sSUFBSSxDQUFDLEtBQUssS0FBSyxRQUFRLEVBQUU7WUFDaEMsSUFBSSxDQUFDLEtBQUssR0FBRyxVQUFVLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDO1lBQ3JELE9BQU87U0FDVjtRQUVELElBQUksSUFBSSxDQUFDLEtBQUssWUFBWSxLQUFLLElBQUksSUFBSSxDQUFDLEtBQUssWUFBWSxHQUFHLEVBQUU7WUFDMUQsSUFBSSxDQUFDLEtBQUssR0FBRztnQkFDVCxHQUFHLElBQUksQ0FBQyxLQUFLO2dCQUNiLEdBQUcsVUFBVTthQUNoQixDQUFDO1lBRUYsT0FBTztTQUNWO1FBRUQsSUFBSSxJQUFJLENBQUMsS0FBSyxZQUFZLE1BQU0sRUFBRTtZQUM5QixNQUFNLE9BQU8sR0FBRztnQkFDWixHQUFHLElBQUksQ0FBQyxLQUFLO2FBQ2hCLENBQUM7WUFFRixPQUFPLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQztZQUNyQyxJQUFJLENBQUMsS0FBSyxHQUFHLE9BQU8sQ0FBQztTQUN4QjtJQUNMLENBQUM7Q0FDSiIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogU3VpdGVDUk0gaXMgYSBjdXN0b21lciByZWxhdGlvbnNoaXAgbWFuYWdlbWVudCBwcm9ncmFtIGRldmVsb3BlZCBieSBTYWxlc0FnaWxpdHkgTHRkLlxuICogQ29weXJpZ2h0IChDKSAyMDIxIFNhbGVzQWdpbGl0eSBMdGQuXG4gKlxuICogVGhpcyBwcm9ncmFtIGlzIGZyZWUgc29mdHdhcmU7IHlvdSBjYW4gcmVkaXN0cmlidXRlIGl0IGFuZC9vciBtb2RpZnkgaXQgdW5kZXJcbiAqIHRoZSB0ZXJtcyBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIHZlcnNpb24gMyBhcyBwdWJsaXNoZWQgYnkgdGhlXG4gKiBGcmVlIFNvZnR3YXJlIEZvdW5kYXRpb24gd2l0aCB0aGUgYWRkaXRpb24gb2YgdGhlIGZvbGxvd2luZyBwZXJtaXNzaW9uIGFkZGVkXG4gKiB0byBTZWN0aW9uIDE1IGFzIHBlcm1pdHRlZCBpbiBTZWN0aW9uIDcoYSk6IEZPUiBBTlkgUEFSVCBPRiBUSEUgQ09WRVJFRCBXT1JLXG4gKiBJTiBXSElDSCBUSEUgQ09QWVJJR0hUIElTIE9XTkVEIEJZIFNBTEVTQUdJTElUWSwgU0FMRVNBR0lMSVRZIERJU0NMQUlNUyBUSEVcbiAqIFdBUlJBTlRZIE9GIE5PTiBJTkZSSU5HRU1FTlQgT0YgVEhJUkQgUEFSVFkgUklHSFRTLlxuICpcbiAqIFRoaXMgcHJvZ3JhbSBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLCBidXQgV0lUSE9VVFxuICogQU5ZIFdBUlJBTlRZOyB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2YgTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1NcbiAqIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS4gU2VlIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgZm9yIG1vcmVcbiAqIGRldGFpbHMuXG4gKlxuICogWW91IHNob3VsZCBoYXZlIHJlY2VpdmVkIGEgY29weSBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4gKiBhbG9uZyB3aXRoIHRoaXMgcHJvZ3JhbS4gIElmIG5vdCwgc2VlIDxodHRwOi8vd3d3LmdudS5vcmcvbGljZW5zZXMvPi5cbiAqXG4gKiBJbiBhY2NvcmRhbmNlIHdpdGggU2VjdGlvbiA3KGIpIG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiAqIHZlcnNpb24gMywgdGhlc2UgQXBwcm9wcmlhdGUgTGVnYWwgTm90aWNlcyBtdXN0IHJldGFpbiB0aGUgZGlzcGxheSBvZiB0aGVcbiAqIFwiU3VwZXJjaGFyZ2VkIGJ5IFN1aXRlQ1JNXCIgbG9nby4gSWYgdGhlIGRpc3BsYXkgb2YgdGhlIGxvZ29zIGlzIG5vdCByZWFzb25hYmx5XG4gKiBmZWFzaWJsZSBmb3IgdGVjaG5pY2FsIHJlYXNvbnMsIHRoZSBBcHByb3ByaWF0ZSBMZWdhbCBOb3RpY2VzIG11c3QgZGlzcGxheVxuICogdGhlIHdvcmRzIFwiU3VwZXJjaGFyZ2VkIGJ5IFN1aXRlQ1JNXCIuXG4gKi9cblxuZXhwb3J0IGRlY2xhcmUgdHlwZSBCdXR0b25DYWxsYmFjayA9ICguLi5hcmdzKSA9PiB2b2lkO1xuXG5leHBvcnQgaW50ZXJmYWNlIEJ1dHRvbkludGVyZmFjZSB7XG4gICAgaWQ/OiBzdHJpbmc7XG4gICAga2xhc3M/OiBzdHJpbmcgfCBzdHJpbmdbXSB8IFNldDxzdHJpbmc+IHwgeyBba2V5OiBzdHJpbmddOiBhbnkgfTtcbiAgICBvbkNsaWNrPzogQnV0dG9uQ2FsbGJhY2s7XG4gICAgZGVib3VuY2VDbGljaz86IGJvb2xlYW47XG4gICAgY2xpY2tEZWJvdW5jZVRpbWU/OiBudW1iZXI7XG4gICAgbGFiZWw/OiBzdHJpbmc7XG4gICAgbGFiZWxLZXk/OiBzdHJpbmc7XG4gICAgdGl0bGVLZXk/OiBzdHJpbmc7XG4gICAgdGl0bGU/OiBzdHJpbmc7XG4gICAgaWNvbj86IHN0cmluZztcbiAgICBpY29uS2xhc3M/OiBzdHJpbmc7XG4gICAgbGFiZWxNb2R1bGU/OiBzdHJpbmc7XG4gICAgc2VjdGlvbj86IHN0cmluZztcbn1cblxuZXhwb3J0IGNsYXNzIEJ1dHRvbiBpbXBsZW1lbnRzIEJ1dHRvbkludGVyZmFjZSB7XG5cbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgcHVibGljIGtsYXNzOiBzdHJpbmcgfCBzdHJpbmdbXSB8IFNldDxzdHJpbmc+IHwgeyBba2V5OiBzdHJpbmddOiBhbnkgfSA9IG51bGwsXG4gICAgICAgIHB1YmxpYyBvbkNsaWNrOiBCdXR0b25DYWxsYmFjayA9IG51bGwsXG4gICAgICAgIHB1YmxpYyBsYWJlbDogc3RyaW5nID0gbnVsbCxcbiAgICAgICAgcHVibGljIGljb246IHN0cmluZyA9IG51bGwsXG4gICAgICAgIHB1YmxpYyBsYWJlbEtleTogc3RyaW5nID0gbnVsbCxcbiAgICAgICAgcHVibGljIHRpdGxlS2V5OiBzdHJpbmcgPSBudWxsLFxuICAgICAgICBwdWJsaWMgbGFiZWxNb2R1bGU6IHN0cmluZyA9IG51bGxcbiAgICApIHtcbiAgICB9XG5cbiAgICBwdWJsaWMgc3RhdGljIGZyb21CdXR0b24oYnV0dG9uOiBCdXR0b25JbnRlcmZhY2UpOiBCdXR0b24ge1xuICAgICAgICByZXR1cm4gbmV3IEJ1dHRvbihcbiAgICAgICAgICAgIGJ1dHRvbi5rbGFzcyxcbiAgICAgICAgICAgIGJ1dHRvbi5vbkNsaWNrLFxuICAgICAgICAgICAgYnV0dG9uLmxhYmVsLFxuICAgICAgICAgICAgYnV0dG9uLmljb24sXG4gICAgICAgICAgICBidXR0b24ubGFiZWxLZXksXG4gICAgICAgICAgICBidXR0b24udGl0bGVLZXksXG4gICAgICAgICAgICBidXR0b24ubGFiZWxNb2R1bGVcbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgc3RhdGljIGFwcGVuZENsYXNzZXMoYnV0dG9uOiBCdXR0b25JbnRlcmZhY2UsIG5ld0NsYXNzZXM6IHN0cmluZ1tdKTogdm9pZCB7XG5cbiAgICAgICAgaWYgKCFidXR0b24ua2xhc3MpIHtcbiAgICAgICAgICAgIGJ1dHRvbi5rbGFzcyA9IG5ld0NsYXNzZXM7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodHlwZW9mIGJ1dHRvbi5rbGFzcyA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgIGJ1dHRvbi5rbGFzcyA9IG5ld0NsYXNzZXMuam9pbignICcpICsgJyAnICsgYnV0dG9uLmtsYXNzO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGJ1dHRvbi5rbGFzcyBpbnN0YW5jZW9mIEFycmF5IHx8IGJ1dHRvbi5rbGFzcyBpbnN0YW5jZW9mIFNldCkge1xuICAgICAgICAgICAgYnV0dG9uLmtsYXNzID0gW1xuICAgICAgICAgICAgICAgIC4uLmJ1dHRvbi5rbGFzcyxcbiAgICAgICAgICAgICAgICAuLi5uZXdDbGFzc2VzXG4gICAgICAgICAgICBdO1xuXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoYnV0dG9uLmtsYXNzIGluc3RhbmNlb2YgT2JqZWN0KSB7XG4gICAgICAgICAgICBjb25zdCBjbGFzc2VzID0ge1xuICAgICAgICAgICAgICAgIC4uLmJ1dHRvbi5rbGFzcyxcbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIGNsYXNzZXNbbmV3Q2xhc3Nlcy5qb2luKCcgJyldID0gdHJ1ZTtcbiAgICAgICAgICAgIGJ1dHRvbi5rbGFzcyA9IGNsYXNzZXM7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwdWJsaWMgYWRkQ2xhc3NlcyhuZXdDbGFzc2VzOiBzdHJpbmdbXSk6IHZvaWQge1xuXG4gICAgICAgIGlmICghdGhpcy5rbGFzcykge1xuICAgICAgICAgICAgdGhpcy5rbGFzcyA9IG5ld0NsYXNzZXM7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodHlwZW9mIHRoaXMua2xhc3MgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICB0aGlzLmtsYXNzID0gbmV3Q2xhc3Nlcy5qb2luKCcgJykgKyAnICcgKyB0aGlzLmtsYXNzO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMua2xhc3MgaW5zdGFuY2VvZiBBcnJheSB8fCB0aGlzLmtsYXNzIGluc3RhbmNlb2YgU2V0KSB7XG4gICAgICAgICAgICB0aGlzLmtsYXNzID0gW1xuICAgICAgICAgICAgICAgIC4uLnRoaXMua2xhc3MsXG4gICAgICAgICAgICAgICAgLi4ubmV3Q2xhc3Nlc1xuICAgICAgICAgICAgXTtcblxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMua2xhc3MgaW5zdGFuY2VvZiBPYmplY3QpIHtcbiAgICAgICAgICAgIGNvbnN0IGNsYXNzZXMgPSB7XG4gICAgICAgICAgICAgICAgLi4udGhpcy5rbGFzcyxcbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIGNsYXNzZXNbbmV3Q2xhc3Nlcy5qb2luKCcgJyldID0gdHJ1ZTtcbiAgICAgICAgICAgIHRoaXMua2xhc3MgPSBjbGFzc2VzO1xuICAgICAgICB9XG4gICAgfVxufVxuIl19