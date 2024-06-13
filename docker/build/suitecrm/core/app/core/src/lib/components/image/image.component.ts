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

import {
    Component,
    Input,
    OnDestroy,
    OnInit,
    signal,
} from '@angular/core';
import {Observable, Subscription} from 'rxjs';
import {filter, map, tap} from 'rxjs/operators';
import {ThemeImage, ThemeImageMap, ThemeImagesStore} from '../../store/theme-images/theme-images.store';

@Component({
    selector: 'scrm-image',
    templateUrl: './image.component.html',
    styleUrls: []
})
export class ImageComponent  implements OnInit, OnDestroy {
    @Input() image: string;
    @Input() klass = '';
    @Input() title = '';
    @Input() wrapperClass = 'sicon';

    images$: Observable<ThemeImageMap> = this.themeImagesStore.images$;

    imageSig = signal<any>({});

    protected subs: Subscription[] = [];

    constructor(protected themeImagesStore: ThemeImagesStore) {
    }

    ngOnInit(): void {
        this.subs = [];
        this.subs.push(this.images$.pipe(
            filter(img => img !== null),
            map((images) => ({images})),
            tap(data => this.getImage(data, this.image)),
        ).subscribe());
    }

    ngOnDestroy() {
        this.subs.forEach(sub => sub.unsubscribe());
        this.subs = [];
    }

    /**
     * Get image from current view model and log if not existent
     *
     * @param vm
     * @param image name
     * @returns ThemeImage
     */
    getImage(vm: { images: ThemeImageMap }, image: string): void {
        if (!vm || !vm.images || Object.keys(vm.images).length < 1) {
            return null;
        }

        this.imageSig.update(() => vm.images[image]);

        if (!this.imageSig()) {
            console.warn(`Image with name '${image}' not found`);
        }
    }
}
