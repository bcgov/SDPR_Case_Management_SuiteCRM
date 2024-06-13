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
/**
 * Deep clones an object
 *
 * @param {object} obj to clone
 * @returns {string} any
 */
export const deepClone = (obj) => JSON.parse(JSON.stringify(obj));
/**
 * Check if all entries have been loaded and are ready to use
 *
 * @param entries
 * @returns boolean
 */
export const ready = (entries) => {
    let areReady = true;
    entries.every(entry => {
        if (!entry) {
            areReady = false;
            return false;
        }
        if (Array.isArray(entry) && entry.length <= 0) {
            areReady = false;
            return false;
        }
        if (typeof entry === 'object' && Object.keys(entry).length <= 0) {
            areReady = false;
            return false;
        }
        return true;
    });
    return areReady;
};
/**
 * Pad all values of an object
 * Singular digit numbers will be padded/prefixed with a 0
 * e.g. numbers 1-9 will be padded with a 0 in front to 01-09
 *
 * @param {object} obj to pad
 * @returns {object} any
 */
export const padObjectValues = (obj) => {
    Object.keys(obj).forEach(key => {
        obj[key] = String(obj[key]).padStart(2, '0');
    });
    return obj;
};
/**
 * @param {object} obj to be checked
 * @returns {boolean} true/false
 * @description Returns true, if the object is empty
 */
export const emptyObject = (obj) => (obj && (Object.keys(obj).length === 0));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib2JqZWN0LXV0aWxzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vY29yZS9hcHAvY29tbW9uL3NyYy9saWIvdXRpbHMvb2JqZWN0LXV0aWxzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0F3Qkc7QUFFSDs7Ozs7R0FLRztBQUNILE1BQU0sQ0FBQyxNQUFNLFNBQVMsR0FBRyxDQUFDLEdBQVEsRUFBTyxFQUFFLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7QUFFNUU7Ozs7O0dBS0c7QUFDSCxNQUFNLENBQUMsTUFBTSxLQUFLLEdBQUcsQ0FBQyxPQUE2QyxFQUFXLEVBQUU7SUFDNUUsSUFBSSxRQUFRLEdBQUcsSUFBSSxDQUFDO0lBRXBCLE9BQU8sQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLEVBQUU7UUFFbEIsSUFBSSxDQUFDLEtBQUssRUFBRTtZQUNSLFFBQVEsR0FBRyxLQUFLLENBQUM7WUFDakIsT0FBTyxLQUFLLENBQUM7U0FDaEI7UUFDRCxJQUFJLEtBQUssQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLElBQUksS0FBSyxDQUFDLE1BQU0sSUFBSSxDQUFDLEVBQUU7WUFDM0MsUUFBUSxHQUFHLEtBQUssQ0FBQztZQUNqQixPQUFPLEtBQUssQ0FBQztTQUNoQjtRQUVELElBQUksT0FBTyxLQUFLLEtBQUssUUFBUSxJQUFJLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsTUFBTSxJQUFJLENBQUMsRUFBRTtZQUM3RCxRQUFRLEdBQUcsS0FBSyxDQUFDO1lBQ2pCLE9BQU8sS0FBSyxDQUFDO1NBQ2hCO1FBRUQsT0FBTyxJQUFJLENBQUM7SUFDaEIsQ0FBQyxDQUFDLENBQUM7SUFFSCxPQUFPLFFBQVEsQ0FBQztBQUNwQixDQUFDLENBQUM7QUFFRjs7Ozs7OztHQU9HO0FBQ0gsTUFBTSxDQUFDLE1BQU0sZUFBZSxHQUFHLENBQUMsR0FBUSxFQUFPLEVBQUU7SUFDN0MsTUFBTSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLEVBQUU7UUFDM0IsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLE1BQU0sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDO0lBQ2pELENBQUMsQ0FBQyxDQUFDO0lBQ0gsT0FBTyxHQUFHLENBQUM7QUFDZixDQUFDLENBQUM7QUFFRjs7OztHQUlHO0FBQ0gsTUFBTSxDQUFDLE1BQU0sV0FBVyxHQUFHLENBQUMsR0FBUSxFQUFXLEVBQUUsQ0FDN0MsQ0FBQyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLE1BQU0sS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBTdWl0ZUNSTSBpcyBhIGN1c3RvbWVyIHJlbGF0aW9uc2hpcCBtYW5hZ2VtZW50IHByb2dyYW0gZGV2ZWxvcGVkIGJ5IFNhbGVzQWdpbGl0eSBMdGQuXG4gKiBDb3B5cmlnaHQgKEMpIDIwMjEgU2FsZXNBZ2lsaXR5IEx0ZC5cbiAqXG4gKiBUaGlzIHByb2dyYW0gaXMgZnJlZSBzb2Z0d2FyZTsgeW91IGNhbiByZWRpc3RyaWJ1dGUgaXQgYW5kL29yIG1vZGlmeSBpdCB1bmRlclxuICogdGhlIHRlcm1zIG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgdmVyc2lvbiAzIGFzIHB1Ymxpc2hlZCBieSB0aGVcbiAqIEZyZWUgU29mdHdhcmUgRm91bmRhdGlvbiB3aXRoIHRoZSBhZGRpdGlvbiBvZiB0aGUgZm9sbG93aW5nIHBlcm1pc3Npb24gYWRkZWRcbiAqIHRvIFNlY3Rpb24gMTUgYXMgcGVybWl0dGVkIGluIFNlY3Rpb24gNyhhKTogRk9SIEFOWSBQQVJUIE9GIFRIRSBDT1ZFUkVEIFdPUktcbiAqIElOIFdISUNIIFRIRSBDT1BZUklHSFQgSVMgT1dORUQgQlkgU0FMRVNBR0lMSVRZLCBTQUxFU0FHSUxJVFkgRElTQ0xBSU1TIFRIRVxuICogV0FSUkFOVFkgT0YgTk9OIElORlJJTkdFTUVOVCBPRiBUSElSRCBQQVJUWSBSSUdIVFMuXG4gKlxuICogVGhpcyBwcm9ncmFtIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsIGJ1dCBXSVRIT1VUXG4gKiBBTlkgV0FSUkFOVFk7IHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZiBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTU1xuICogRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLiBTZWUgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBmb3IgbW9yZVxuICogZGV0YWlscy5cbiAqXG4gKiBZb3Ugc2hvdWxkIGhhdmUgcmVjZWl2ZWQgYSBjb3B5IG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiAqIGFsb25nIHdpdGggdGhpcyBwcm9ncmFtLiAgSWYgbm90LCBzZWUgPGh0dHA6Ly93d3cuZ251Lm9yZy9saWNlbnNlcy8+LlxuICpcbiAqIEluIGFjY29yZGFuY2Ugd2l0aCBTZWN0aW9uIDcoYikgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuICogdmVyc2lvbiAzLCB0aGVzZSBBcHByb3ByaWF0ZSBMZWdhbCBOb3RpY2VzIG11c3QgcmV0YWluIHRoZSBkaXNwbGF5IG9mIHRoZVxuICogXCJTdXBlcmNoYXJnZWQgYnkgU3VpdGVDUk1cIiBsb2dvLiBJZiB0aGUgZGlzcGxheSBvZiB0aGUgbG9nb3MgaXMgbm90IHJlYXNvbmFibHlcbiAqIGZlYXNpYmxlIGZvciB0ZWNobmljYWwgcmVhc29ucywgdGhlIEFwcHJvcHJpYXRlIExlZ2FsIE5vdGljZXMgbXVzdCBkaXNwbGF5XG4gKiB0aGUgd29yZHMgXCJTdXBlcmNoYXJnZWQgYnkgU3VpdGVDUk1cIi5cbiAqL1xuXG4vKipcbiAqIERlZXAgY2xvbmVzIGFuIG9iamVjdFxuICpcbiAqIEBwYXJhbSB7b2JqZWN0fSBvYmogdG8gY2xvbmVcbiAqIEByZXR1cm5zIHtzdHJpbmd9IGFueVxuICovXG5leHBvcnQgY29uc3QgZGVlcENsb25lID0gKG9iajogYW55KTogYW55ID0+IEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkob2JqKSk7XG5cbi8qKlxuICogQ2hlY2sgaWYgYWxsIGVudHJpZXMgaGF2ZSBiZWVuIGxvYWRlZCBhbmQgYXJlIHJlYWR5IHRvIHVzZVxuICpcbiAqIEBwYXJhbSBlbnRyaWVzXG4gKiBAcmV0dXJucyBib29sZWFuXG4gKi9cbmV4cG9ydCBjb25zdCByZWFkeSA9IChlbnRyaWVzOiAoQXJyYXk8YW55PiB8IFJlY29yZDxzdHJpbmcsIGFueT4pW10pOiBib29sZWFuID0+IHtcbiAgICBsZXQgYXJlUmVhZHkgPSB0cnVlO1xuXG4gICAgZW50cmllcy5ldmVyeShlbnRyeSA9PiB7XG5cbiAgICAgICAgaWYgKCFlbnRyeSkge1xuICAgICAgICAgICAgYXJlUmVhZHkgPSBmYWxzZTtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShlbnRyeSkgJiYgZW50cnkubGVuZ3RoIDw9IDApIHtcbiAgICAgICAgICAgIGFyZVJlYWR5ID0gZmFsc2U7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodHlwZW9mIGVudHJ5ID09PSAnb2JqZWN0JyAmJiBPYmplY3Qua2V5cyhlbnRyeSkubGVuZ3RoIDw9IDApIHtcbiAgICAgICAgICAgIGFyZVJlYWR5ID0gZmFsc2U7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9KTtcblxuICAgIHJldHVybiBhcmVSZWFkeTtcbn07XG5cbi8qKlxuICogUGFkIGFsbCB2YWx1ZXMgb2YgYW4gb2JqZWN0XG4gKiBTaW5ndWxhciBkaWdpdCBudW1iZXJzIHdpbGwgYmUgcGFkZGVkL3ByZWZpeGVkIHdpdGggYSAwXG4gKiBlLmcuIG51bWJlcnMgMS05IHdpbGwgYmUgcGFkZGVkIHdpdGggYSAwIGluIGZyb250IHRvIDAxLTA5XG4gKlxuICogQHBhcmFtIHtvYmplY3R9IG9iaiB0byBwYWRcbiAqIEByZXR1cm5zIHtvYmplY3R9IGFueVxuICovXG5leHBvcnQgY29uc3QgcGFkT2JqZWN0VmFsdWVzID0gKG9iajogYW55KTogYW55ID0+IHtcbiAgICBPYmplY3Qua2V5cyhvYmopLmZvckVhY2goa2V5ID0+IHtcbiAgICAgICAgb2JqW2tleV0gPSBTdHJpbmcob2JqW2tleV0pLnBhZFN0YXJ0KDIsICcwJyk7XG4gICAgfSk7XG4gICAgcmV0dXJuIG9iajtcbn07XG5cbi8qKlxuICogQHBhcmFtIHtvYmplY3R9IG9iaiB0byBiZSBjaGVja2VkXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gdHJ1ZS9mYWxzZVxuICogQGRlc2NyaXB0aW9uIFJldHVybnMgdHJ1ZSwgaWYgdGhlIG9iamVjdCBpcyBlbXB0eVxuICovXG5leHBvcnQgY29uc3QgZW1wdHlPYmplY3QgPSAob2JqOiBhbnkpOiBib29sZWFuID0+XG4gICAgKG9iaiAmJiAoT2JqZWN0LmtleXMob2JqKS5sZW5ndGggPT09IDApKTtcblxuXG4iXX0=