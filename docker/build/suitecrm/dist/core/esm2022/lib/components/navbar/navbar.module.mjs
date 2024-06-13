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
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarUiComponent } from './navbar.component';
import { LogoUiModule } from '../logo/logo.module';
import { LogoutUiModule } from '../logout/logout.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';
import { MenuItemLinkComponent } from './menu-item-link/menu-item-link.component';
import { GroupedMenuItemComponent } from './grouped-menu-item/grouped-menu-item.component';
import { MenuItemsListComponent } from './menu-items-list/menu-items-list.component';
import { MenuRecentlyViewedComponent } from './menu-recently-viewed/menu-recently-viewed.component';
import { HomeMenuItemComponent } from './home-menu-item/home-menu-item.component';
import { MenuItemComponent } from './menu-item/menu-item.component';
import { ImageModule } from '../image/image.module';
import { BaseNavbarComponent } from './base-navbar/base-navbar.component';
import { DynamicModule } from 'ng-dynamic-component';
import { BaseMenuItemLinkComponent } from './menu-item-link/base-menu-item-link.component';
import { BaseMenuItemComponent } from './menu-item/base-menu-item.component';
import { BaseGroupedMenuItemComponent } from './grouped-menu-item/base-grouped-menu-item.component';
import { BaseHomeMenuItemComponent } from './home-menu-item/base-home-menu-item.component';
import { BaseMenuRecentlyViewedComponent } from './menu-recently-viewed/base-menu-recently-viewed.component';
import { BaseMenuItemsListComponent } from './menu-items-list/base-menu-items-list.component';
import { LogoutUiComponent } from '../logout/logout.component';
import { LabelModule } from '../label/label.module';
import { SubMenuRecentlyViewedComponent } from './sub-menu-recently-viewed/sub-menu-recently-viewed.component';
import { BaseSubMenuRecentlyViewedComponent } from './sub-menu-recently-viewed/base-sub-menu-recently-viewed.component';
import { BaseSubMenuFavoritesComponent } from './sub-menu-favorites/base-sub-menu-favorites.component';
import { SubMenuFavoritesComponent } from './sub-menu-favorites/sub-menu-favorites.component';
import { MenuFavoritesComponent } from './menu-favorites/menu-favorites.component';
import { BaseMenuFavoritesComponent } from './menu-favorites/base-menu-favorites.component';
import { BaseFavoritesComponent } from './menu-favorites/base-favorites.component';
import { FormsModule } from '@angular/forms';
import { NotificationsModule } from '../../containers/notifications/notifications.module';
import { SearchBarModule } from '../search-bar/search-bar.module';
import { DropdownButtonModule } from "../dropdown-button/dropdown-button.module";
import { RecentlyViewedComponent } from "./recently-viewed/recently-viewed.component";
import * as i0 from "@angular/core";
class NavbarUiModule {
    static { this.ɵfac = function NavbarUiModule_Factory(t) { return new (t || NavbarUiModule)(); }; }
    static { this.ɵmod = /*@__PURE__*/ i0.ɵɵdefineNgModule({ type: NavbarUiModule }); }
    static { this.ɵinj = /*@__PURE__*/ i0.ɵɵdefineInjector({ imports: [CommonModule,
            LogoUiModule,
            LogoutUiModule,
            NgbModule,
            RouterModule,
            ImageModule,
            DynamicModule,
            LabelModule,
            FormsModule,
            NotificationsModule,
            SearchBarModule,
            RecentlyViewedComponent,
            DropdownButtonModule] }); }
}
export { NavbarUiModule };
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(NavbarUiModule, [{
        type: NgModule,
        args: [{
                declarations: [
                    NavbarUiComponent,
                    MenuItemComponent,
                    BaseMenuItemComponent,
                    MenuRecentlyViewedComponent,
                    BaseMenuRecentlyViewedComponent,
                    SubMenuRecentlyViewedComponent,
                    BaseSubMenuRecentlyViewedComponent,
                    BaseFavoritesComponent,
                    MenuFavoritesComponent,
                    BaseMenuFavoritesComponent,
                    SubMenuFavoritesComponent,
                    BaseSubMenuFavoritesComponent,
                    HomeMenuItemComponent,
                    MenuItemLinkComponent,
                    BaseHomeMenuItemComponent,
                    BaseMenuItemLinkComponent,
                    GroupedMenuItemComponent,
                    BaseGroupedMenuItemComponent,
                    MenuItemsListComponent,
                    BaseMenuItemsListComponent,
                    BaseNavbarComponent
                ],
                exports: [
                    NavbarUiComponent,
                    MenuItemComponent,
                    BaseMenuItemComponent,
                    MenuRecentlyViewedComponent,
                    BaseMenuRecentlyViewedComponent,
                    SubMenuRecentlyViewedComponent,
                    BaseSubMenuRecentlyViewedComponent,
                    BaseFavoritesComponent,
                    MenuFavoritesComponent,
                    SubMenuFavoritesComponent,
                    BaseSubMenuFavoritesComponent,
                    HomeMenuItemComponent,
                    MenuItemLinkComponent,
                    BaseHomeMenuItemComponent,
                    BaseMenuItemLinkComponent,
                    GroupedMenuItemComponent,
                    BaseGroupedMenuItemComponent,
                    MenuItemsListComponent,
                    BaseMenuItemsListComponent,
                    BaseNavbarComponent,
                    LogoutUiComponent
                ],
                imports: [
                    CommonModule,
                    LogoUiModule,
                    LogoutUiModule,
                    NgbModule,
                    RouterModule,
                    ImageModule,
                    DynamicModule,
                    LabelModule,
                    FormsModule,
                    NotificationsModule,
                    SearchBarModule,
                    RecentlyViewedComponent,
                    DropdownButtonModule
                ]
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(NavbarUiModule, { declarations: [NavbarUiComponent,
        MenuItemComponent,
        BaseMenuItemComponent,
        MenuRecentlyViewedComponent,
        BaseMenuRecentlyViewedComponent,
        SubMenuRecentlyViewedComponent,
        BaseSubMenuRecentlyViewedComponent,
        BaseFavoritesComponent,
        MenuFavoritesComponent,
        BaseMenuFavoritesComponent,
        SubMenuFavoritesComponent,
        BaseSubMenuFavoritesComponent,
        HomeMenuItemComponent,
        MenuItemLinkComponent,
        BaseHomeMenuItemComponent,
        BaseMenuItemLinkComponent,
        GroupedMenuItemComponent,
        BaseGroupedMenuItemComponent,
        MenuItemsListComponent,
        BaseMenuItemsListComponent,
        BaseNavbarComponent], imports: [CommonModule,
        LogoUiModule,
        LogoutUiModule,
        NgbModule,
        RouterModule,
        ImageModule,
        DynamicModule,
        LabelModule,
        FormsModule,
        NotificationsModule,
        SearchBarModule,
        RecentlyViewedComponent,
        DropdownButtonModule], exports: [NavbarUiComponent,
        MenuItemComponent,
        BaseMenuItemComponent,
        MenuRecentlyViewedComponent,
        BaseMenuRecentlyViewedComponent,
        SubMenuRecentlyViewedComponent,
        BaseSubMenuRecentlyViewedComponent,
        BaseFavoritesComponent,
        MenuFavoritesComponent,
        SubMenuFavoritesComponent,
        BaseSubMenuFavoritesComponent,
        HomeMenuItemComponent,
        MenuItemLinkComponent,
        BaseHomeMenuItemComponent,
        BaseMenuItemLinkComponent,
        GroupedMenuItemComponent,
        BaseGroupedMenuItemComponent,
        MenuItemsListComponent,
        BaseMenuItemsListComponent,
        BaseNavbarComponent,
        LogoutUiComponent] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmF2YmFyLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL2NvcmUvYXBwL2NvcmUvc3JjL2xpYi9jb21wb25lbnRzL25hdmJhci9uYXZiYXIubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0F3Qkc7QUFFSCxPQUFPLEVBQUMsUUFBUSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ3ZDLE9BQU8sRUFBQyxZQUFZLEVBQUMsTUFBTSxpQkFBaUIsQ0FBQztBQUM3QyxPQUFPLEVBQUMsaUJBQWlCLEVBQUMsTUFBTSxvQkFBb0IsQ0FBQztBQUVyRCxPQUFPLEVBQUMsWUFBWSxFQUFDLE1BQU0scUJBQXFCLENBQUM7QUFDakQsT0FBTyxFQUFDLGNBQWMsRUFBQyxNQUFNLHlCQUF5QixDQUFDO0FBQ3ZELE9BQU8sRUFBQyxTQUFTLEVBQUMsTUFBTSw0QkFBNEIsQ0FBQztBQUNyRCxPQUFPLEVBQUMsWUFBWSxFQUFDLE1BQU0saUJBQWlCLENBQUM7QUFDN0MsT0FBTyxFQUFDLHFCQUFxQixFQUFDLE1BQU0sMkNBQTJDLENBQUM7QUFDaEYsT0FBTyxFQUFDLHdCQUF3QixFQUFDLE1BQU0saURBQWlELENBQUM7QUFDekYsT0FBTyxFQUFDLHNCQUFzQixFQUFDLE1BQU0sNkNBQTZDLENBQUM7QUFDbkYsT0FBTyxFQUFDLDJCQUEyQixFQUFDLE1BQU0sdURBQXVELENBQUM7QUFDbEcsT0FBTyxFQUFDLHFCQUFxQixFQUFDLE1BQU0sMkNBQTJDLENBQUM7QUFDaEYsT0FBTyxFQUFDLGlCQUFpQixFQUFDLE1BQU0saUNBQWlDLENBQUM7QUFDbEUsT0FBTyxFQUFDLFdBQVcsRUFBQyxNQUFNLHVCQUF1QixDQUFDO0FBQ2xELE9BQU8sRUFBQyxtQkFBbUIsRUFBQyxNQUFNLHFDQUFxQyxDQUFDO0FBQ3hFLE9BQU8sRUFBQyxhQUFhLEVBQUMsTUFBTSxzQkFBc0IsQ0FB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ZCxTQUFTO29CQUNULFlBQVk7b0JBQ1osV0FBVztvQkFDWCxhQUFhO29CQUNiLFdBQVc7b0JBQ1gsV0FBVztvQkFDWCxtQkFBbUI7b0JBQ25CLGVBQWU7b0JBQ2YsdUJBQXVCO29CQUN2QixvQkFBb0I7aUJBQ3ZCO2FBQ0o7O3dGQUNZLGNBQWMsbUJBN0RuQixpQkFBaUI7UUFDakIsaUJBQWlCO1FBQ2pCLHFCQUFxQjtRQUNyQiwyQkFBMkI7UUFDM0IsK0JBQStCO1FBQy9CLDhCQUE4QjtRQUM5QixrQ0FBa0M7UUFDbEMsc0JBQXNCO1FBQ3RCLHNCQUFzQjtRQUN0QiwwQkFBMEI7UUFDMUIseUJBQXlCO1FBQ3pCLDZCQUE2QjtRQUM3QixxQkFBcUI7UUFDckIscUJBQXFCO1FBQ3JCLHlCQUF5QjtRQUN6Qix5QkFBeUI7UUFDekIsd0JBQXdCO1FBQ3hCLDRCQUE0QjtRQUM1QixzQkFBc0I7UUFDdEIsMEJBQTBCO1FBQzFCLG1CQUFtQixhQTBCbkIsWUFBWTtRQUNaLFlBQVk7UUFDWixjQUFjO1FBQ2QsU0FBUztRQUNULFlBQVk7UUFDWixXQUFXO1FBQ1gsYUFBYTtRQUNiLFdBQVc7UUFDWCxXQUFXO1FBQ1gsbUJBQW1CO1FBQ25CLGVBQWU7UUFDZix1QkFBdUI7UUFDdkIsb0JBQW9CLGFBbkNwQixpQkFBaUI7UUFDakIsaUJBQWlCO1FBQ2pCLHFCQUFxQjtRQUNyQiwyQkFBMkI7UUFDM0IsK0JBQStCO1FBQy9CLDhCQUE4QjtRQUM5QixrQ0FBa0M7UUFDbEMsc0JBQXNCO1FBQ3RCLHNCQUFzQjtRQUN0Qix5QkFBeUI7UUFDekIsNkJBQTZCO1FBQzdCLHFCQUFxQjtRQUNyQixxQkFBcUI7UUFDckIseUJBQXlCO1FBQ3pCLHlCQUF5QjtRQUN6Qix3QkFBd0I7UUFDeEIsNEJBQTRCO1FBQzVCLHNCQUFzQjtRQUN0QiwwQkFBMEI7UUFDMUIsbUJBQW1CO1FBQ25CLGlCQUFpQiIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogU3VpdGVDUk0gaXMgYSBjdXN0b21lciByZWxhdGlvbnNoaXAgbWFuYWdlbWVudCBwcm9ncmFtIGRldmVsb3BlZCBieSBTYWxlc0FnaWxpdHkgTHRkLlxuICogQ29weXJpZ2h0IChDKSAyMDIxIFNhbGVzQWdpbGl0eSBMdGQuXG4gKlxuICogVGhpcyBwcm9ncmFtIGlzIGZyZWUgc29mdHdhcmU7IHlvdSBjYW4gcmVkaXN0cmlidXRlIGl0IGFuZC9vciBtb2RpZnkgaXQgdW5kZXJcbiAqIHRoZSB0ZXJtcyBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIHZlcnNpb24gMyBhcyBwdWJsaXNoZWQgYnkgdGhlXG4gKiBGcmVlIFNvZnR3YXJlIEZvdW5kYXRpb24gd2l0aCB0aGUgYWRkaXRpb24gb2YgdGhlIGZvbGxvd2luZyBwZXJtaXNzaW9uIGFkZGVkXG4gKiB0byBTZWN0aW9uIDE1IGFzIHBlcm1pdHRlZCBpbiBTZWN0aW9uIDcoYSk6IEZPUiBBTlkgUEFSVCBPRiBUSEUgQ09WRVJFRCBXT1JLXG4gKiBJTiBXSElDSCBUSEUgQ09QWVJJR0hUIElTIE9XTkVEIEJZIFNBTEVTQUdJTElUWSwgU0FMRVNBR0lMSVRZIERJU0NMQUlNUyBUSEVcbiAqIFdBUlJBTlRZIE9GIE5PTiBJTkZSSU5HRU1FTlQgT0YgVEhJUkQgUEFSVFkgUklHSFRTLlxuICpcbiAqIFRoaXMgcHJvZ3JhbSBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLCBidXQgV0lUSE9VVFxuICogQU5ZIFdBUlJBTlRZOyB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2YgTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1NcbiAqIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS4gU2VlIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgZm9yIG1vcmVcbiAqIGRldGFpbHMuXG4gKlxuICogWW91IHNob3VsZCBoYXZlIHJlY2VpdmVkIGEgY29weSBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4gKiBhbG9uZyB3aXRoIHRoaXMgcHJvZ3JhbS4gIElmIG5vdCwgc2VlIDxodHRwOi8vd3d3LmdudS5vcmcvbGljZW5zZXMvPi5cbiAqXG4gKiBJbiBhY2NvcmRhbmNlIHdpdGggU2VjdGlvbiA3KGIpIG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiAqIHZlcnNpb24gMywgdGhlc2UgQXBwcm9wcmlhdGUgTGVnYWwgTm90aWNlcyBtdXN0IHJldGFpbiB0aGUgZGlzcGxheSBvZiB0aGVcbiAqIFwiU3VwZXJjaGFyZ2VkIGJ5IFN1aXRlQ1JNXCIgbG9nby4gSWYgdGhlIGRpc3BsYXkgb2YgdGhlIGxvZ29zIGlzIG5vdCByZWFzb25hYmx5XG4gKiBmZWFzaWJsZSBmb3IgdGVjaG5pY2FsIHJlYXNvbnMsIHRoZSBBcHByb3ByaWF0ZSBMZWdhbCBOb3RpY2VzIG11c3QgZGlzcGxheVxuICogdGhlIHdvcmRzIFwiU3VwZXJjaGFyZ2VkIGJ5IFN1aXRlQ1JNXCIuXG4gKi9cblxuaW1wb3J0IHtOZ01vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0NvbW1vbk1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7TmF2YmFyVWlDb21wb25lbnR9IGZyb20gJy4vbmF2YmFyLmNvbXBvbmVudCc7XG5cbmltcG9ydCB7TG9nb1VpTW9kdWxlfSBmcm9tICcuLi9sb2dvL2xvZ28ubW9kdWxlJztcbmltcG9ydCB7TG9nb3V0VWlNb2R1bGV9IGZyb20gJy4uL2xvZ291dC9sb2dvdXQubW9kdWxlJztcbmltcG9ydCB7TmdiTW9kdWxlfSBmcm9tICdAbmctYm9vdHN0cmFwL25nLWJvb3RzdHJhcCc7XG5pbXBvcnQge1JvdXRlck1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7TWVudUl0ZW1MaW5rQ29tcG9uZW50fSBmcm9tICcuL21lbnUtaXRlbS1saW5rL21lbnUtaXRlbS1saW5rLmNvbXBvbmVudCc7XG5pbXBvcnQge0dyb3VwZWRNZW51SXRlbUNvbXBvbmVudH0gZnJvbSAnLi9ncm91cGVkLW1lbnUtaXRlbS9ncm91cGVkLW1lbnUtaXRlbS5jb21wb25lbnQnO1xuaW1wb3J0IHtNZW51SXRlbXNMaXN0Q29tcG9uZW50fSBmcm9tICcuL21lbnUtaXRlbXMtbGlzdC9tZW51LWl0ZW1zLWxpc3QuY29tcG9uZW50JztcbmltcG9ydCB7TWVudVJlY2VudGx5Vmlld2VkQ29tcG9uZW50fSBmcm9tICcuL21lbnUtcmVjZW50bHktdmlld2VkL21lbnUtcmVjZW50bHktdmlld2VkLmNvbXBvbmVudCc7XG5pbXBvcnQge0hvbWVNZW51SXRlbUNvbXBvbmVudH0gZnJvbSAnLi9ob21lLW1lbnUtaXRlbS9ob21lLW1lbnUtaXRlbS5jb21wb25lbnQnO1xuaW1wb3J0IHtNZW51SXRlbUNvbXBvbmVudH0gZnJvbSAnLi9tZW51LWl0ZW0vbWVudS1pdGVtLmNvbXBvbmVudCc7XG5pbXBvcnQge0ltYWdlTW9kdWxlfSBmcm9tICcuLi9pbWFnZS9pbWFnZS5tb2R1bGUnO1xuaW1wb3J0IHtCYXNlTmF2YmFyQ29tcG9uZW50fSBmcm9tICcuL2Jhc2UtbmF2YmFyL2Jhc2UtbmF2YmFyLmNvbXBvbmVudCc7XG5pbXBvcnQge0R5bmFtaWNNb2R1bGV9IGZyb20gJ25nLWR5bmFtaWMtY29tcG9uZW50JztcbmltcG9ydCB7QmFzZU1lbnVJdGVtTGlua0NvbXBvbmVudH0gZnJvbSAnLi9tZW51LWl0ZW0tbGluay9iYXNlLW1lbnUtaXRlbS1saW5rLmNvbXBvbmVudCc7XG5pbXBvcnQge0Jhc2VNZW51SXRlbUNvbXBvbmVudH0gZnJvbSAnLi9tZW51LWl0ZW0vYmFzZS1tZW51LWl0ZW0uY29tcG9uZW50JztcbmltcG9ydCB7QmFzZUdyb3VwZWRNZW51SXRlbUNvbXBvbmVudH0gZnJvbSAnLi9ncm91cGVkLW1lbnUtaXRlbS9iYXNlLWdyb3VwZWQtbWVudS1pdGVtLmNvbXBvbmVudCc7XG5pbXBvcnQge0Jhc2VIb21lTWVudUl0ZW1Db21wb25lbnR9IGZyb20gJy4vaG9tZS1tZW51LWl0ZW0vYmFzZS1ob21lLW1lbnUtaXRlbS5jb21wb25lbnQnO1xuaW1wb3J0IHtCYXNlTWVudVJlY2VudGx5Vmlld2VkQ29tcG9uZW50fSBmcm9tICcuL21lbnUtcmVjZW50bHktdmlld2VkL2Jhc2UtbWVudS1yZWNlbnRseS12aWV3ZWQuY29tcG9uZW50JztcbmltcG9ydCB7QmFzZU1lbnVJdGVtc0xpc3RDb21wb25lbnR9IGZyb20gJy4vbWVudS1pdGVtcy1saXN0L2Jhc2UtbWVudS1pdGVtcy1saXN0LmNvbXBvbmVudCc7XG5pbXBvcnQge0xvZ291dFVpQ29tcG9uZW50fSBmcm9tICcuLi9sb2dvdXQvbG9nb3V0LmNvbXBvbmVudCc7XG5pbXBvcnQge0xhYmVsTW9kdWxlfSBmcm9tICcuLi9sYWJlbC9sYWJlbC5tb2R1bGUnO1xuaW1wb3J0IHtTdWJNZW51UmVjZW50bHlWaWV3ZWRDb21wb25lbnR9IGZyb20gJy4vc3ViLW1lbnUtcmVjZW50bHktdmlld2VkL3N1Yi1tZW51LXJlY2VudGx5LXZpZXdlZC5jb21wb25lbnQnO1xuaW1wb3J0IHtCYXNlU3ViTWVudVJlY2VudGx5Vmlld2VkQ29tcG9uZW50fSBmcm9tICcuL3N1Yi1tZW51LXJlY2VudGx5LXZpZXdlZC9iYXNlLXN1Yi1tZW51LXJlY2VudGx5LXZpZXdlZC5jb21wb25lbnQnO1xuaW1wb3J0IHtCYXNlU3ViTWVudUZhdm9yaXRlc0NvbXBvbmVudH0gZnJvbSAnLi9zdWItbWVudS1mYXZvcml0ZXMvYmFzZS1zdWItbWVudS1mYXZvcml0ZXMuY29tcG9uZW50JztcbmltcG9ydCB7U3ViTWVudUZhdm9yaXRlc0NvbXBvbmVudH0gZnJvbSAnLi9zdWItbWVudS1mYXZvcml0ZXMvc3ViLW1lbnUtZmF2b3JpdGVzLmNvbXBvbmVudCc7XG5pbXBvcnQge01lbnVGYXZvcml0ZXNDb21wb25lbnR9IGZyb20gJy4vbWVudS1mYXZvcml0ZXMvbWVudS1mYXZvcml0ZXMuY29tcG9uZW50JztcbmltcG9ydCB7QmFzZU1lbnVGYXZvcml0ZXNDb21wb25lbnR9IGZyb20gJy4vbWVudS1mYXZvcml0ZXMvYmFzZS1tZW51LWZhdm9yaXRlcy5jb21wb25lbnQnO1xuaW1wb3J0IHtCYXNlRmF2b3JpdGVzQ29tcG9uZW50fSBmcm9tICcuL21lbnUtZmF2b3JpdGVzL2Jhc2UtZmF2b3JpdGVzLmNvbXBvbmVudCc7XG5pbXBvcnQge0Zvcm1zTW9kdWxlfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQge05vdGlmaWNhdGlvbnNNb2R1bGV9IGZyb20gJy4uLy4uL2NvbnRhaW5lcnMvbm90aWZpY2F0aW9ucy9ub3RpZmljYXRpb25zLm1vZHVsZSc7XG5pbXBvcnQge1NlYXJjaEJhck1vZHVsZX0gZnJvbSAnLi4vc2VhcmNoLWJhci9zZWFyY2gtYmFyLm1vZHVsZSc7XG5pbXBvcnQge0Ryb3Bkb3duQnV0dG9uTW9kdWxlfSBmcm9tIFwiLi4vZHJvcGRvd24tYnV0dG9uL2Ryb3Bkb3duLWJ1dHRvbi5tb2R1bGVcIjtcbmltcG9ydCB7UmVjZW50bHlWaWV3ZWRDb21wb25lbnR9IGZyb20gXCIuL3JlY2VudGx5LXZpZXdlZC9yZWNlbnRseS12aWV3ZWQuY29tcG9uZW50XCI7XG5cblxuQE5nTW9kdWxlKHtcbiAgICBkZWNsYXJhdGlvbnM6IFtcbiAgICAgICAgTmF2YmFyVWlDb21wb25lbnQsXG4gICAgICAgIE1lbnVJdGVtQ29tcG9uZW50LFxuICAgICAgICBCYXNlTWVudUl0ZW1Db21wb25lbnQsXG4gICAgICAgIE1lbnVSZWNlbnRseVZpZXdlZENvbXBvbmVudCxcbiAgICAgICAgQmFzZU1lbnVSZWNlbnRseVZpZXdlZENvbXBvbmVudCxcbiAgICAgICAgU3ViTWVudVJlY2VudGx5Vmlld2VkQ29tcG9uZW50LFxuICAgICAgICBCYXNlU3ViTWVudVJlY2VudGx5Vmlld2VkQ29tcG9uZW50LFxuICAgICAgICBCYXNlRmF2b3JpdGVzQ29tcG9uZW50LFxuICAgICAgICBNZW51RmF2b3JpdGVzQ29tcG9uZW50LFxuICAgICAgICBCYXNlTWVudUZhdm9yaXRlc0NvbXBvbmVudCxcbiAgICAgICAgU3ViTWVudUZhdm9yaXRlc0NvbXBvbmVudCxcbiAgICAgICAgQmFzZVN1Yk1lbnVGYXZvcml0ZXNDb21wb25lbnQsXG4gICAgICAgIEhvbWVNZW51SXRlbUNvbXBvbmVudCxcbiAgICAgICAgTWVudUl0ZW1MaW5rQ29tcG9uZW50LFxuICAgICAgICBCYXNlSG9tZU1lbnVJdGVtQ29tcG9uZW50LFxuICAgICAgICBCYXNlTWVudUl0ZW1MaW5rQ29tcG9uZW50LFxuICAgICAgICBHcm91cGVkTWVudUl0ZW1Db21wb25lbnQsXG4gICAgICAgIEJhc2VHcm91cGVkTWVudUl0ZW1Db21wb25lbnQsXG4gICAgICAgIE1lbnVJdGVtc0xpc3RDb21wb25lbnQsXG4gICAgICAgIEJhc2VNZW51SXRlbXNMaXN0Q29tcG9uZW50LFxuICAgICAgICBCYXNlTmF2YmFyQ29tcG9uZW50XG4gICAgXSxcbiAgICBleHBvcnRzOiBbXG4gICAgICAgIE5hdmJhclVpQ29tcG9uZW50LFxuICAgICAgICBNZW51SXRlbUNvbXBvbmVudCxcbiAgICAgICAgQmFzZU1lbnVJdGVtQ29tcG9uZW50LFxuICAgICAgICBNZW51UmVjZW50bHlWaWV3ZWRDb21wb25lbnQsXG4gICAgICAgIEJhc2VNZW51UmVjZW50bHlWaWV3ZWRDb21wb25lbnQsXG4gICAgICAgIFN1Yk1lbnVSZWNlbnRseVZpZXdlZENvbXBvbmVudCxcbiAgICAgICAgQmFzZVN1Yk1lbnVSZWNlbnRseVZpZXdlZENvbXBvbmVudCxcbiAgICAgICAgQmFzZUZhdm9yaXRlc0NvbXBvbmVudCxcbiAgICAgICAgTWVudUZhdm9yaXRlc0NvbXBvbmVudCxcbiAgICAgICAgU3ViTWVudUZhdm9yaXRlc0NvbXBvbmVudCxcbiAgICAgICAgQmFzZVN1Yk1lbnVGYXZvcml0ZXNDb21wb25lbnQsXG4gICAgICAgIEhvbWVNZW51SXRlbUNvbXBvbmVudCxcbiAgICAgICAgTWVudUl0ZW1MaW5rQ29tcG9uZW50LFxuICAgICAgICBCYXNlSG9tZU1lbnVJdGVtQ29tcG9uZW50LFxuICAgICAgICBCYXNlTWVudUl0ZW1MaW5rQ29tcG9uZW50LFxuICAgICAgICBHcm91cGVkTWVudUl0ZW1Db21wb25lbnQsXG4gICAgICAgIEJhc2VHcm91cGVkTWVudUl0ZW1Db21wb25lbnQsXG4gICAgICAgIE1lbnVJdGVtc0xpc3RDb21wb25lbnQsXG4gICAgICAgIEJhc2VNZW51SXRlbXNMaXN0Q29tcG9uZW50LFxuICAgICAgICBCYXNlTmF2YmFyQ29tcG9uZW50LFxuICAgICAgICBMb2dvdXRVaUNvbXBvbmVudFxuICAgIF0sXG4gICAgaW1wb3J0czogW1xuICAgICAgICBDb21tb25Nb2R1bGUsXG4gICAgICAgIExvZ29VaU1vZHVsZSxcbiAgICAgICAgTG9nb3V0VWlNb2R1bGUsXG4gICAgICAgIE5nYk1vZHVsZSxcbiAgICAgICAgUm91dGVyTW9kdWxlLFxuICAgICAgICBJbWFnZU1vZHVsZSxcbiAgICAgICAgRHluYW1pY01vZHVsZSxcbiAgICAgICAgTGFiZWxNb2R1bGUsXG4gICAgICAgIEZvcm1zTW9kdWxlLFxuICAgICAgICBOb3RpZmljYXRpb25zTW9kdWxlLFxuICAgICAgICBTZWFyY2hCYXJNb2R1bGUsXG4gICAgICAgIFJlY2VudGx5Vmlld2VkQ29tcG9uZW50LFxuICAgICAgICBEcm9wZG93bkJ1dHRvbk1vZHVsZVxuICAgIF1cbn0pXG5leHBvcnQgY2xhc3MgTmF2YmFyVWlNb2R1bGUge1xufVxuIl19