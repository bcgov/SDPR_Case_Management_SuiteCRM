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

import {ComponentFixture, TestBed, waitForAsync} from '@angular/core/testing';
import {of} from 'rxjs';
import {take} from 'rxjs/operators';
import {Component} from '@angular/core';
import {RouterTestingModule} from '@angular/router/testing';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {AngularSvgIconModule} from 'angular-svg-icon';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import {MenuRecentlyViewedComponent} from './menu-recently-viewed.component';
import {MenuItemLinkComponent} from '../menu-item-link/menu-item-link.component';
import {LanguageStrings} from '../../../store/language/language.store';
import {languageMockData} from '../../../store/language/language.store.spec.mock';
import {themeImagesMockData} from '../../../store/theme-images/theme-images.store.spec.mock';
import {ImageModule} from '../../image/image.module';
import {ThemeImagesStore} from '../../../store/theme-images/theme-images.store';

const recentRecords = [
    {
        summary: 'Module 1',
        url: '/fake-module-1'
    },
    {
        summary: 'Module 2',
        url: '/fake-module-2'
    }
];

@Component({
    selector: 'menu-recently-viewed-test-host-component',
    template: '<scrm-menu-recently-viewed [records]="records"></scrm-menu-recently-viewed>'
})
class MenuRecentlyViewedTestHostComponent {
    records = recentRecords;
    languages: LanguageStrings = {
        ...languageMockData,
        languageKey: 'en_us'
    };
}

describe('MenuRecentlyViewedComponent', () => {
    let testHostComponent: MenuRecentlyViewedTestHostComponent;
    let testHostFixture: ComponentFixture<MenuRecentlyViewedTestHostComponent>;

    beforeEach(waitForAsync(() => {
        TestBed.configureTestingModule({
            declarations: [
                MenuItemLinkComponent,
                MenuRecentlyViewedComponent,
                MenuRecentlyViewedTestHostComponent
            ],
            imports: [
                AngularSvgIconModule.forRoot(),
                RouterTestingModule,
                HttpClientTestingModule,
                ImageModule,
                NgbModule,
            ],
            providers: [
                {
                    provide: ThemeImagesStore, useValue: {
                        images$: of(themeImagesMockData).pipe(take(1))
                    }
                },
            ],
        }).compileComponents();
    }));

    beforeEach(() => {
        testHostFixture = TestBed.createComponent(MenuRecentlyViewedTestHostComponent);
        testHostComponent = testHostFixture.componentInstance;
        testHostFixture.detectChanges();
    });

    it('should create', () => {
        expect(testHostComponent).toBeTruthy();
    });

    it('should have label', () => {
        const title = testHostFixture.nativeElement.querySelector('h4');

        expect(title.textContent).toContain('Recently Viewed');
    });

    it('should have recently viewed record links', () => {

        const navItemLinks = testHostFixture.nativeElement.getElementsByClassName('nav-item');

        expect(navItemLinks.length).toEqual(2);

        let links = navItemLinks[0].getElementsByClassName('nav-link');

        expect(links.length).toEqual(1);
        expect(links[0].textContent).toContain('Module 1');
        expect(links[0].attributes.getNamedItem('href').value).toContain('/fake-module-1');

        links = navItemLinks[1].getElementsByClassName('nav-link');

        expect(links.length).toEqual(1);
        expect(links[0].textContent).toContain('Module 2');
        expect(links[0].attributes.getNamedItem('href').value).toContain('/fake-module-2');
    });
});
