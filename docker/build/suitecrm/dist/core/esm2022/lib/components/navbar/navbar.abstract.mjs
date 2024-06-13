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
import { LogoAbstract } from '../logo/logo-abstract';
import { ready } from 'common';
import { LinkTarget } from './link-target';
export class NavbarAbstract {
    /**
     * Public API
     */
    constructor(routeConverter, moduleNavigation, preferences, language, appState, moduleNameMapper) {
        this.routeConverter = routeConverter;
        this.moduleNavigation = moduleNavigation;
        this.preferences = preferences;
        this.language = language;
        this.appState = appState;
        this.moduleNameMapper = moduleNameMapper;
        this.authenticated = true;
        this.logo = new LogoAbstract();
        this.useGroupTabs = false;
        this.globalActions = [];
        this.currentUser = {
            id: '',
            firstName: '',
            lastName: '',
        };
        this.all = {
            modules: [],
            extra: [],
        };
        this.menu = [];
    }
    /**
     * Reset menus
     */
    resetMenu() {
        this.menu = [];
        this.globalActions = [];
        this.all.modules = [];
        this.all.extra = [];
        this.current = null;
        this.currentUser = {};
    }
    /**
     * Build user action menu
     *
     * @param {[]} userActionMenu info
     * @param {object} currentUser info
     */
    buildUserActionMenu(userActionMenu, currentUser) {
        this.currentUser.id = currentUser.id;
        this.currentUser.firstName = currentUser.firstName;
        this.currentUser.lastName = currentUser.lastName;
        if (userActionMenu) {
            userActionMenu.forEach((subMenu) => {
                const name = subMenu.name;
                let url = subMenu.url;
                if (name === 'logout') {
                    return;
                }
                let target = LinkTarget.none;
                if (name === 'training') {
                    target = LinkTarget.blank;
                }
                else {
                    url = this.routeConverter.toFrontEndLink(url);
                }
                const label = this.language.getAppString(subMenu.labelKey) ?? '';
                this.globalActions.push({
                    link: {
                        url,
                        label,
                        target
                    },
                });
            });
        }
        return;
    }
    /**
     * Build navbar
     *
     * @param {object} navigation info
     * @param {object} currentUser info
     * @param {number} maxTabs to display
     */
    build(navigation, currentUser, maxTabs) {
        this.buildUserActionMenu(navigation.userActionMenu, currentUser);
        const navigationParadigm = this.preferences.getUserPreference('navigation_paradigm');
        const sort = this.preferences.getUserPreference('sort_modules_by_name') === 'on';
        if (navigationParadigm === 'm') {
            this.buildModuleNavigation(navigation, maxTabs, sort);
            return;
        }
        if (navigationParadigm === 'gm') {
            this.buildGroupedNavigation(navigation, maxTabs, sort);
            return;
        }
    }
    /**
     * Build Group tab menu
     *
     * @param {[]} items list
     * @param {object} modules info
     * @param {number} threshold limit
     * @param {object} groupedTabs info
     * @param {boolean} sort flag
     */
    buildGroupTabMenu(items, modules, threshold, groupedTabs, sort) {
        const navItems = [];
        const moreItems = [];
        if (items && items.length > 0) {
            items.forEach((module) => {
                moreItems.push(this.buildTabMenuItem(module, modules[module]));
            });
            if (sort) {
                this.sortMenuItems(moreItems);
            }
        }
        let count = 0;
        groupedTabs.forEach((groupedTab) => {
            if (count <= threshold) {
                navItems.push(this.buildTabGroupedMenuItem(groupedTab.labelKey, groupedTab.modules, modules, sort));
            }
            count++;
        });
        this.menu = navItems;
        this.all.modules = moreItems;
    }
    /**
     *
     * Internal API
     *
     */
    /**
     * Build module navigation
     *
     * @param {object} navigation info
     * @param {number} maxTabs to use
     * @param {boolean} sort flag
     */
    buildModuleNavigation(navigation, maxTabs, sort) {
        if (!ready([navigation.tabs, navigation.modules])) {
            return;
        }
        this.buildTabMenu(navigation.tabs, navigation.modules, maxTabs, sort);
        this.buildSelectedModule(navigation);
    }
    /**
     * Build grouped navigation
     *
     * @param {object} navigation info
     * @param {number} maxTabs to use
     * @param {boolean} sort flag
     */
    buildGroupedNavigation(navigation, maxTabs, sort) {
        if (!ready([navigation.tabs, navigation.modules, navigation.groupedTabs])) {
            return;
        }
        this.buildGroupTabMenu(navigation.tabs, navigation.modules, maxTabs, navigation.groupedTabs, sort);
        this.buildSelectedModule(navigation);
    }
    /**
     * Build selected module
     *
     * @param {object} navigation info
     */
    buildSelectedModule(navigation) {
        const module = this.appState.getModule() ?? '';
        if (module === '' || module === 'home') {
            return;
        }
        if (!navigation.modules[module]) {
            return;
        }
        this.current = this.buildTabMenuItem(module, navigation.modules[module]);
    }
    /**
     * Build tab / module menu
     *
     * @param {[]} items list
     * @param {object} modules info
     * @param {number} threshold limit
     * @param {boolean} sort flag
     */
    buildTabMenu(items, modules, threshold, sort) {
        const navItems = [];
        const moreItems = [];
        if (!items || items.length === 0) {
            this.menu = navItems;
            this.all.modules = moreItems;
            return;
        }
        let count = 0;
        items.forEach((module) => {
            const item = this.buildTabMenuItem(module, modules[module]);
            if (module === 'home' || this.appState.getModule() === module || count >= threshold) {
                moreItems.push(item);
            }
            else {
                navItems.push(item);
            }
            count++;
        });
        if (sort) {
            this.sortMenuItems(navItems);
            this.sortMenuItems(moreItems);
        }
        this.menu = navItems;
        this.all.modules = moreItems;
    }
    /**
     * Build Grouped Tab menu item
     *
     * @param {string} moduleLabel to display
     * @param {object} groupedModules list
     * @param {object} modules list
     * @param {boolean} sort flag
     *
     * @returns {object} group tab menu item
     */
    buildTabGroupedMenuItem(moduleLabel, groupedModules, modules, sort) {
        return {
            link: {
                label: this.language.getAppString(moduleLabel) || moduleLabel,
                url: '',
                route: null,
                params: null
            },
            icon: '',
            submenu: this.buildGroupedMenu(groupedModules, modules, sort)
        };
    }
    /**
     * Build Grouped menu
     *
     * @param {object} groupedModules info
     * @param {object} modules map
     * @param {boolean} sort flag
     *
     * @returns {[]} menu item array
     */
    buildGroupedMenu(groupedModules, modules, sort) {
        const groupedItems = [];
        let homeMenuItem = null;
        groupedModules.forEach((groupedModule) => {
            const module = modules[groupedModule];
            if (!module) {
                return;
            }
            const moduleMenuItem = this.buildTabMenuItem(groupedModule, module);
            if (groupedModule === 'home') {
                homeMenuItem = moduleMenuItem;
                return;
            }
            groupedItems.push(moduleMenuItem);
        });
        if (sort) {
            this.sortMenuItems(groupedItems);
        }
        if (homeMenuItem) {
            groupedItems.unshift(homeMenuItem);
        }
        return groupedItems;
    }
    /**
     * Build module menu items
     *
     * @param {string} module name
     * @param {object} moduleInfo info
     *
     * @returns {object} menuItem
     */
    buildTabMenuItem(module, moduleInfo) {
        if (moduleInfo.name) {
            module = moduleInfo.name;
        }
        const moduleRoute = this.moduleNavigation.getModuleRoute(moduleInfo);
        const appListStrings = this.language.getLanguageStrings()?.appListStrings ?? {};
        const menuItem = {
            link: {
                label: this.moduleNavigation.getModuleLabel(moduleInfo, appListStrings),
                url: moduleRoute.url,
                route: moduleRoute.route,
                params: null
            },
            icon: this.moduleNameMapper.toLegacy(module) ?? null,
            submenu: [],
            module: module ?? null,
            isGroupedMenu: false
        };
        let hasSubmenu = false;
        if (moduleInfo) {
            moduleInfo.menu.forEach((subMenu) => {
                const sublinks = subMenu.sublinks || [];
                const subMenuItem = this.buildSubMenuItem(module, subMenu, sublinks);
                menuItem.submenu.push(subMenuItem);
                if (sublinks.length > 0) {
                    hasSubmenu = true;
                }
            });
        }
        menuItem.isGroupedMenu = hasSubmenu;
        return menuItem;
    }
    buildSubMenuItem(module, subMenu, sublinks) {
        const moduleActionRoute = this.moduleNavigation.getActionRoute(subMenu);
        const subMenuItem = {
            link: {
                label: this.moduleNavigation.getActionLabel(module, subMenu, this.language.getLanguageStrings()),
                url: moduleActionRoute.url,
                route: moduleActionRoute.route,
                params: moduleActionRoute.params,
                process: moduleActionRoute.process
            },
            icon: subMenu.icon || '',
            submenu: sublinks.map((item) => this.buildSubMenuItem(module, item, [])),
        };
        return subMenuItem;
    }
    /**
     * Sort menu items by label
     *
     * @param {object} navItems to sort
     */
    sortMenuItems(navItems) {
        navItems.sort((a, b) => {
            const nameA = a.link.label.toUpperCase(); // ignore upper and lowercase
            const nameB = b.link.label.toUpperCase(); // ignore upper and lowercase
            if (nameA < nameB) {
                return -1;
            }
            if (nameA > nameB) {
                return 1;
            }
            // names must be equal
            return 0;
        });
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmF2YmFyLmFic3RyYWN0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vY29yZS9hcHAvY29yZS9zcmMvbGliL2NvbXBvbmVudHMvbmF2YmFyL25hdmJhci5hYnN0cmFjdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBd0JHO0FBR0gsT0FBTyxFQUFDLFlBQVksRUFBQyxNQUFNLHVCQUF1QixDQUFDO0FBR25ELE9BQU8sRUFBVyxLQUFLLEVBQU8sTUFBTSxRQUFRLENBQUM7QUFTN0MsT0FBTyxFQUFDLFVBQVUsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQU96QyxNQUFNLE9BQU8sY0FBYztJQWlCdkI7O09BRUc7SUFFSCxZQUNZLGNBQThCLEVBQzVCLGdCQUFrQyxFQUNsQyxXQUFnQyxFQUNoQyxRQUF1QixFQUN2QixRQUF1QixFQUN2QixnQkFBa0M7UUFMcEMsbUJBQWMsR0FBZCxjQUFjLENBQWdCO1FBQzVCLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBa0I7UUFDbEMsZ0JBQVcsR0FBWCxXQUFXLENBQXFCO1FBQ2hDLGFBQVEsR0FBUixRQUFRLENBQWU7UUFDdkIsYUFBUSxHQUFSLFFBQVEsQ0FBZTtRQUN2QixxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWtCO1FBMUJoRCxrQkFBYSxHQUFHLElBQUksQ0FBQztRQUNyQixTQUFJLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUMxQixpQkFBWSxHQUFHLEtBQUssQ0FBQztRQUNyQixrQkFBYSxHQUFzQixFQUFFLENBQUM7UUFDdEMsZ0JBQVcsR0FBcUI7WUFDNUIsRUFBRSxFQUFFLEVBQUU7WUFDTixTQUFTLEVBQUUsRUFBRTtZQUNiLFFBQVEsRUFBRSxFQUFFO1NBQ2YsQ0FBQztRQUNGLFFBQUcsR0FBRztZQUNGLE9BQU8sRUFBRSxFQUFFO1lBQ1gsS0FBSyxFQUFFLEVBQUU7U0FDWixDQUFDO1FBQ0YsU0FBSSxHQUFl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O1lBRXZFLElBQUksS0FBSyxHQUFHLEtBQUssRUFBRTtnQkFDZixPQUFPLENBQUMsQ0FBQyxDQUFDO2FBQ2I7WUFDRCxJQUFJLEtBQUssR0FBRyxLQUFLLEVBQUU7Z0JBQ2YsT0FBTyxDQUFDLENBQUM7YUFDWjtZQUVELHNCQUFzQjtZQUN0QixPQUFPLENBQUMsQ0FBQztRQUNiLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztDQUNKIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBTdWl0ZUNSTSBpcyBhIGN1c3RvbWVyIHJlbGF0aW9uc2hpcCBtYW5hZ2VtZW50IHByb2dyYW0gZGV2ZWxvcGVkIGJ5IFNhbGVzQWdpbGl0eSBMdGQuXG4gKiBDb3B5cmlnaHQgKEMpIDIwMjEgU2FsZXNBZ2lsaXR5IEx0ZC5cbiAqXG4gKiBUaGlzIHByb2dyYW0gaXMgZnJlZSBzb2Z0d2FyZTsgeW91IGNhbiByZWRpc3RyaWJ1dGUgaXQgYW5kL29yIG1vZGlmeSBpdCB1bmRlclxuICogdGhlIHRlcm1zIG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgdmVyc2lvbiAzIGFzIHB1Ymxpc2hlZCBieSB0aGVcbiAqIEZyZWUgU29mdHdhcmUgRm91bmRhdGlvbiB3aXRoIHRoZSBhZGRpdGlvbiBvZiB0aGUgZm9sbG93aW5nIHBlcm1pc3Npb24gYWRkZWRcbiAqIHRvIFNlY3Rpb24gMTUgYXMgcGVybWl0dGVkIGluIFNlY3Rpb24gNyhhKTogRk9SIEFOWSBQQVJUIE9GIFRIRSBDT1ZFUkVEIFdPUktcbiAqIElOIFdISUNIIFRIRSBDT1BZUklHSFQgSVMgT1dORUQgQlkgU0FMRVNBR0lMSVRZLCBTQUxFU0FHSUxJVFkgRElTQ0xBSU1TIFRIRVxuICogV0FSUkFOVFkgT0YgTk9OIElORlJJTkdFTUVOVCBPRiBUSElSRCBQQVJUWSBSSUdIVFMuXG4gKlxuICogVGhpcyBwcm9ncmFtIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsIGJ1dCBXSVRIT1VUXG4gKiBBTlkgV0FSUkFOVFk7IHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZiBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTU1xuICogRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLiBTZWUgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBmb3IgbW9yZVxuICogZGV0YWlscy5cbiAqXG4gKiBZb3Ugc2hvdWxkIGhhdmUgcmVjZWl2ZWQgYSBjb3B5IG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiAqIGFsb25nIHdpdGggdGhpcyBwcm9ncmFtLiAgSWYgbm90LCBzZWUgPGh0dHA6Ly93d3cuZ251Lm9yZy9saWNlbnNlcy8+LlxuICpcbiAqIEluIGFjY29yZGFuY2Ugd2l0aCBTZWN0aW9uIDcoYikgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuICogdmVyc2lvbiAzLCB0aGVzZSBBcHByb3ByaWF0ZSBMZWdhbCBOb3RpY2VzIG11c3QgcmV0YWluIHRoZSBkaXNwbGF5IG9mIHRoZVxuICogXCJTdXBlcmNoYXJnZWQgYnkgU3VpdGVDUk1cIiBsb2dvLiBJZiB0aGUgZGlzcGxheSBvZiB0aGUgbG9nb3MgaXMgbm90IHJlYXNvbmFibHlcbiAqIGZlYXNpYmxlIGZvciB0ZWNobmljYWwgcmVhc29ucywgdGhlIEFwcHJvcHJpYXRlIExlZ2FsIE5vdGljZXMgbXVzdCBkaXNwbGF5XG4gKiB0aGUgd29yZHMgXCJTdXBlcmNoYXJnZWQgYnkgU3VpdGVDUk1cIi5cbiAqL1xuXG5pbXBvcnQge05hdmJhck1vZGVsfSBmcm9tICcuL25hdmJhci1tb2RlbCc7XG5pbXBvcnQge0xvZ29BYnN0cmFjdH0gZnJvbSAnLi4vbG9nby9sb2dvLWFic3RyYWN0JztcbmltcG9ydCB7Q3VycmVudFVzZXJNb2RlbH0gZnJvbSAnLi9jdXJyZW50LXVzZXItbW9kZWwnO1xuaW1wb3J0IHtBY3Rpb25MaW5rTW9kZWx9IGZyb20gJy4vYWN0aW9uLWxpbmstbW9kZWwnO1xuaW1wb3J0IHtNZW51SXRlbSwgcmVhZHksIFVzZXJ9IGZyb20gJ2NvbW1vbic7XG5pbXBvcnQge0xhbmd1YWdlU3RvcmV9IGZyb20gJy4uLy4uL3N0b3JlL2xhbmd1YWdlL2xhbmd1YWdlLnN0b3JlJztcbmltcG9ydCB7XG4gICAgR3JvdXBlZFRhYixcbiAgICBOYXZiYXJNb2R1bGUsXG4gICAgTmF2YmFyTW9kdWxlTWFwLFxuICAgIE5hdmlnYXRpb24sXG4gICAgVXNlckFjdGlvbk1lbnVcbn0gZnJvbSAnLi4vLi4vc3RvcmUvbmF2aWdhdGlvbi9uYXZpZ2F0aW9uLnN0b3JlJztcbmltcG9ydCB7TGlua1RhcmdldH0gZnJvbSAnLi9saW5rLXRhcmdldCc7XG5pbXBvcnQge1JvdXRlQ29udmVydGVyfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9uYXZpZ2F0aW9uL3JvdXRlLWNvbnZlcnRlci9yb3V0ZS1jb252ZXJ0ZXIuc2VydmljZSc7XG5pbXBvcnQge1VzZXJQcmVmZXJlbmNlU3RvcmV9IGZyb20gJy4uLy4uL3N0b3JlL3VzZXItcHJlZmVyZW5jZS91c2VyLXByZWZlcmVuY2Uuc3RvcmUnO1xuaW1wb3J0IHtNb2R1bGVOYXZpZ2F0aW9ufSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9uYXZpZ2F0aW9uL21vZHVsZS1uYXZpZ2F0aW9uL21vZHVsZS1uYXZpZ2F0aW9uLnNlcnZpY2UnO1xuaW1wb3J0IHtBcHBTdGF0ZVN0b3JlfSBmcm9tICcuLi8uLi9zdG9yZS9hcHAtc3RhdGUvYXBwLXN0YXRlLnN0b3JlJztcbmltcG9ydCB7TW9kdWxlTmFtZU1hcHBlcn0gZnJvbSBcIi4uLy4uL3NlcnZpY2VzL25hdmlnYXRpb24vbW9kdWxlLW5hbWUtbWFwcGVyL21vZHVsZS1uYW1lLW1hcHBlci5zZXJ2aWNlXCI7XG5cbmV4cG9ydCBjbGFzcyBOYXZiYXJBYnN0cmFjdCBpbXBsZW1lbnRzIE5hdmJhck1vZGVsIHtcbiAgICBhdXRoZW50aWNhdGVkID0gdHJ1ZTtcbiAgICBsb2dvID0gbmV3IExvZ29BYnN0cmFjdCgpO1xuICAgIHVzZUdyb3VwVGFicyA9IGZhbHNlO1xuICAgIGdsb2JhbEFjdGlvbnM6IEFjdGlvbkxpbmtNb2RlbFtdID0gW107XG4gICAgY3VycmVudFVzZXI6IEN1cnJlbnRVc2VyTW9kZWwgPSB7XG4gICAgICAgIGlkOiAnJyxcbiAgICAgICAgZmlyc3ROYW1lOiAnJyxcbiAgICAgICAgbGFzdE5hbWU6ICcnLFxuICAgIH07XG4gICAgYWxsID0ge1xuICAgICAgICBtb2R1bGVzOiBbXSxcbiAgICAgICAgZXh0cmE6IFtdLFxuICAgIH07XG4gICAgbWVudTogTWVudUl0ZW1bXSA9IFtdO1xuICAgIGN1cnJlbnQ/OiBNZW51SXRlbTtcblxuICAgIC8qKlxuICAgICAqIFB1YmxpYyBBUElcbiAgICAgKi9cblxuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBwcml2YXRlIHJvdXRlQ29udmVydGVyOiBSb3V0ZUNvbnZlcnRlcixcbiAgICAgICAgcHJvdGVjdGVkIG1vZHVsZU5hdmlnYXRpb246IE1vZHVsZU5hdmlnYXRpb24sXG4gICAgICAgIHByb3RlY3RlZCBwcmVmZXJlbmNlczogVXNlclByZWZlcmVuY2VTdG9yZSxcbiAgICAgICAgcHJvdGVjdGVkIGxhbmd1YWdlOiBMYW5ndWFnZVN0b3JlLFxuICAgICAgICBwcm90ZWN0ZWQgYXBwU3RhdGU6IEFwcFN0YXRlU3RvcmUsXG4gICAgICAgIHByb3RlY3RlZCBtb2R1bGVOYW1lTWFwcGVyOiBNb2R1bGVOYW1lTWFwcGVyXG4gICAgKSB7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmVzZXQgbWVudXNcbiAgICAgKi9cbiAgICBwdWJsaWMgcmVzZXRNZW51KCk6IHZvaWQge1xuICAgICAgICB0aGlzLm1lbnUgPSBbXTtcbiAgICAgICAgdGhpcy5nbG9iYWxBY3Rpb25zID0gW107XG4gICAgICAgIHRoaXMuYWxsLm1vZHVsZXMgPSBbXTtcbiAgICAgICAgdGhpcy5hbGwuZXh0cmEgPSBbXTtcbiAgICAgICAgdGhpcy5jdXJyZW50ID0gbnVsbDtcbiAgICAgICAgdGhpcy5jdXJyZW50VXNlciA9IHt9IGFzIFVzZXI7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQnVpbGQgdXNlciBhY3Rpb24gbWVudVxuICAgICAqXG4gICAgICogQHBhcmFtIHtbXX0gdXNlckFjdGlvbk1lbnUgaW5mb1xuICAgICAqIEBwYXJhbSB7b2JqZWN0fSBjdXJyZW50VXNlciBpbmZvXG4gICAgICovXG4gICAgcHVibGljIGJ1aWxkVXNlckFjdGlvbk1lbnUoXG4gICAgICAgIHVzZXJBY3Rpb25NZW51OiBVc2VyQWN0aW9uTWVudVtdLFxuICAgICAgICBjdXJyZW50VXNlcjogQ3VycmVudFVzZXJNb2RlbFxuICAgICk6IHZvaWQge1xuICAgICAgICB0aGlzLmN1cnJlbnRVc2VyLmlkID0gY3VycmVudFVzZXIuaWQ7XG4gICAgICAgIHRoaXMuY3VycmVudFVzZXIuZmlyc3ROYW1lID0gY3VycmVudFVzZXIuZmlyc3ROYW1lO1xuICAgICAgICB0aGlzLmN1cnJlbnRVc2VyLmxhc3ROYW1lID0gY3VycmVudFVzZXIubGFzdE5hbWU7XG5cbiAgICAgICAgaWYgKHVzZXJBY3Rpb25NZW51KSB7XG4gICAgICAgICAgICB1c2VyQWN0aW9uTWVudS5mb3JFYWNoKChzdWJNZW51KSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgbmFtZSA9IHN1Yk1lbnUubmFtZTtcbiAgICAgICAgICAgICAgICBsZXQgdXJsID0gc3ViTWVudS51cmw7XG5cbiAgICAgICAgICAgICAgICBpZiAobmFtZSA9PT0gJ2xvZ291dCcpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGxldCB0YXJnZXQgPSBMaW5rVGFyZ2V0Lm5vbmU7XG5cbiAgICAgICAgICAgICAgICBpZiAobmFtZSA9PT0gJ3RyYWluaW5nJykge1xuICAgICAgICAgICAgICAgICAgICB0YXJnZXQgPSBMaW5rVGFyZ2V0LmJsYW5rO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHVybCA9IHRoaXMucm91dGVDb252ZXJ0ZXIudG9Gcm9udEVuZExpbmsodXJsKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBjb25zdCBsYWJlbCA9IHRoaXMubGFuZ3VhZ2UuZ2V0QXBwU3RyaW5nKHN1Yk1lbnUubGFiZWxLZXkpID8/ICcnO1xuXG4gICAgICAgICAgICAgICAgdGhpcy5nbG9iYWxBY3Rpb25zLnB1c2goe1xuICAgICAgICAgICAgICAgICAgICBsaW5rOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB1cmwsXG4gICAgICAgICAgICAgICAgICAgICAgICBsYWJlbCxcbiAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEJ1aWxkIG5hdmJhclxuICAgICAqXG4gICAgICogQHBhcmFtIHtvYmplY3R9IG5hdmlnYXRpb24gaW5mb1xuICAgICAqIEBwYXJhbSB7b2JqZWN0fSBjdXJyZW50VXNlciBpbmZvXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IG1heFRhYnMgdG8gZGlzcGxheVxuICAgICAqL1xuICAgIHB1YmxpYyBidWlsZChcbiAgICAgICAgbmF2aWdhdGlvbjogTmF2aWdhdGlvbixcbiAgICAgICAgY3VycmVudFVzZXI6IEN1cnJlbnRVc2VyTW9kZWwsXG4gICAgICAgIG1heFRhYnM6IG51bWJlcixcbiAgICApOiB2b2lkIHtcblxuICAgICAgICB0aGlzLmJ1aWxkVXNlckFjdGlvbk1lbnUobmF2aWdhdGlvbi51c2VyQWN0aW9uTWVudSwgY3VycmVudFVzZXIpO1xuXG4gICAgICAgIGNvbnN0IG5hdmlnYXRpb25QYXJhZGlnbSA9IHRoaXMucHJlZmVyZW5jZXMuZ2V0VXNlclByZWZlcmVuY2UoJ25hdmlnYXRpb25fcGFyYWRpZ20nKTtcbiAgICAgICAgY29uc3Qgc29ydCA9IHRoaXMucHJlZmVyZW5jZXMuZ2V0VXNlclByZWZlcmVuY2UoJ3NvcnRfbW9kdWxlc19ieV9uYW1lJykgPT09ICdvbic7XG5cbiAgICAgICAgaWYgKG5hdmlnYXRpb25QYXJhZGlnbSA9PT0gJ20nKSB7XG4gICAgICAgICAgICB0aGlzLmJ1aWxkTW9kdWxlTmF2aWdhdGlvbihuYXZpZ2F0aW9uLCBtYXhUYWJzLCBzb3J0KTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChuYXZpZ2F0aW9uUGFyYWRpZ20gPT09ICdnbScpIHtcbiAgICAgICAgICAgIHRoaXMuYnVpbGRHcm91cGVkTmF2aWdhdGlvbihuYXZpZ2F0aW9uLCBtYXhUYWJzLCBzb3J0KTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEJ1aWxkIEdyb3VwIHRhYiBtZW51XG4gICAgICpcbiAgICAgKiBAcGFyYW0ge1tdfSBpdGVtcyBsaXN0XG4gICAgICogQHBhcmFtIHtvYmplY3R9IG1vZHVsZXMgaW5mb1xuICAgICAqIEBwYXJhbSB7bnVtYmVyfSB0aHJlc2hvbGQgbGltaXRcbiAgICAgKiBAcGFyYW0ge29iamVjdH0gZ3JvdXBlZFRhYnMgaW5mb1xuICAgICAqIEBwYXJhbSB7Ym9vbGVhbn0gc29ydCBmbGFnXG4gICAgICovXG4gICAgcHVibGljIGJ1aWxkR3JvdXBUYWJNZW51KFxuICAgICAgICBpdGVtczogc3RyaW5nW10sXG4gICAgICAgIG1vZHVsZXM6IE5hdmJhck1vZHVsZU1hcCxcbiAgICAgICAgdGhyZXNob2xkOiBudW1iZXIsXG4gICAgICAgIGdyb3VwZWRUYWJzOiBHcm91cGVkVGFiW10sXG4gICAgICAgIHNvcnQ6IGJvb2xlYW5cbiAgICApOiB2b2lkIHtcblxuICAgICAgICBjb25zdCBuYXZJdGVtcyA9IFtdO1xuICAgICAgICBjb25zdCBtb3JlSXRlbXMgPSBbXTtcblxuICAgICAgICBpZiAoaXRlbXMgJiYgaXRlbXMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgaXRlbXMuZm9yRWFjaCgobW9kdWxlKSA9PiB7XG4gICAgICAgICAgICAgICAgbW9yZUl0ZW1zLnB1c2godGhpcy5idWlsZFRhYk1lbnVJdGVtKG1vZHVsZSwgbW9kdWxlc1ttb2R1bGVdKSk7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgaWYgKHNvcnQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNvcnRNZW51SXRlbXMobW9yZUl0ZW1zKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGxldCBjb3VudCA9IDA7XG4gICAgICAgIGdyb3VwZWRUYWJzLmZvckVhY2goKGdyb3VwZWRUYWI6IGFueSkgPT4ge1xuXG4gICAgICAgICAgICBpZiAoY291bnQgPD0gdGhyZXNob2xkKSB7XG4gICAgICAgICAgICAgICAgbmF2SXRlbXMucHVzaCh0aGlzLmJ1aWxkVGFiR3JvdXBlZE1lbnVJdGVtKFxuICAgICAgICAgICAgICAgICAgICBncm91cGVkVGFiLmxhYmVsS2V5LFxuICAgICAgICAgICAgICAgICAgICBncm91cGVkVGFiLm1vZHVsZXMsXG4gICAgICAgICAgICAgICAgICAgIG1vZHVsZXMsXG4gICAgICAgICAgICAgICAgICAgIHNvcnRcbiAgICAgICAgICAgICAgICApKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgY291bnQrKztcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy5tZW51ID0gbmF2SXRlbXM7XG4gICAgICAgIHRoaXMuYWxsLm1vZHVsZXMgPSBtb3JlSXRlbXM7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBJbnRlcm5hbCBBUElcbiAgICAgKlxuICAgICAqL1xuXG4gICAgLyoqXG4gICAgICogQnVpbGQgbW9kdWxlIG5hdmlnYXRpb25cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7b2JqZWN0fSBuYXZpZ2F0aW9uIGluZm9cbiAgICAgKiBAcGFyYW0ge251bWJlcn0gbWF4VGFicyB0byB1c2VcbiAgICAgKiBAcGFyYW0ge2Jvb2xlYW59IHNvcnQgZmxhZ1xuICAgICAqL1xuICAgIHByb3RlY3RlZCBidWlsZE1vZHVsZU5hdmlnYXRpb24oXG4gICAgICAgIG5hdmlnYXRpb246IE5hdmlnYXRpb24sXG4gICAgICAgIG1heFRhYnM6IG51bWJlcixcbiAgICAgICAgc29ydDogYm9vbGVhbixcbiAgICApOiB2b2lkIHtcblxuICAgICAgICBpZiAoIXJlYWR5KFtuYXZpZ2F0aW9uLnRhYnMsIG5hdmlnYXRpb24ubW9kdWxlc10pKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmJ1aWxkVGFiTWVudShuYXZpZ2F0aW9uLnRhYnMsIG5hdmlnYXRpb24ubW9kdWxlcywgbWF4VGFicywgc29ydCk7XG4gICAgICAgIHRoaXMuYnVpbGRTZWxlY3RlZE1vZHVsZShuYXZpZ2F0aW9uKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBCdWlsZCBncm91cGVkIG5hdmlnYXRpb25cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7b2JqZWN0fSBuYXZpZ2F0aW9uIGluZm9cbiAgICAgKiBAcGFyYW0ge251bWJlcn0gbWF4VGFicyB0byB1c2VcbiAgICAgKiBAcGFyYW0ge2Jvb2xlYW59IHNvcnQgZmxhZ1xuICAgICAqL1xuICAgIHByb3RlY3RlZCBidWlsZEdyb3VwZWROYXZpZ2F0aW9uKFxuICAgICAgICBuYXZpZ2F0aW9uOiBOYXZpZ2F0aW9uLFxuICAgICAgICBtYXhUYWJzOiBudW1iZXIsXG4gICAgICAgIHNvcnQ6IGJvb2xlYW4sXG4gICAgKTogdm9pZCB7XG5cbiAgICAgICAgaWYgKCFyZWFkeShbbmF2aWdhdGlvbi50YWJzLCBuYXZpZ2F0aW9uLm1vZHVsZXMsIG5hdmlnYXRpb24uZ3JvdXBlZFRhYnNdKSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5idWlsZEdyb3VwVGFiTWVudShuYXZpZ2F0aW9uLnRhYnMsIG5hdmlnYXRpb24ubW9kdWxlcywgbWF4VGFicywgbmF2aWdhdGlvbi5ncm91cGVkVGFicywgc29ydCk7XG4gICAgICAgIHRoaXMuYnVpbGRTZWxlY3RlZE1vZHVsZShuYXZpZ2F0aW9uKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBCdWlsZCBzZWxlY3RlZCBtb2R1bGVcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7b2JqZWN0fSBuYXZpZ2F0aW9uIGluZm9cbiAgICAgKi9cbiAgICBwcm90ZWN0ZWQgYnVpbGRTZWxlY3RlZE1vZHVsZShcbiAgICAgICAgbmF2aWdhdGlvbjogTmF2aWdhdGlvbixcbiAgICApOiB2b2lkIHtcbiAgICAgICAgY29uc3QgbW9kdWxlID0gdGhpcy5hcHBTdGF0ZS5nZXRNb2R1bGUoKSA/PyAnJztcblxuICAgICAgICBpZiAobW9kdWxlID09PSAnJyB8fCBtb2R1bGUgPT09ICdob21lJykge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCFuYXZpZ2F0aW9uLm1vZHVsZXNbbW9kdWxlXSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5jdXJyZW50ID0gdGhpcy5idWlsZFRhYk1lbnVJdGVtKG1vZHVsZSwgbmF2aWdhdGlvbi5tb2R1bGVzW21vZHVsZV0pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEJ1aWxkIHRhYiAvIG1vZHVsZSBtZW51XG4gICAgICpcbiAgICAgKiBAcGFyYW0ge1tdfSBpdGVtcyBsaXN0XG4gICAgICogQHBhcmFtIHtvYmplY3R9IG1vZHVsZXMgaW5mb1xuICAgICAqIEBwYXJhbSB7bnVtYmVyfSB0aHJlc2hvbGQgbGltaXRcbiAgICAgKiBAcGFyYW0ge2Jvb2xlYW59IHNvcnQgZmxhZ1xuICAgICAqL1xuICAgIHByb3RlY3RlZCBidWlsZFRhYk1lbnUoXG4gICAgICAgIGl0ZW1zOiBzdHJpbmdbXSxcbiAgICAgICAgbW9kdWxlczogTmF2YmFyTW9kdWxlTWFwLFxuICAgICAgICB0aHJlc2hvbGQ6IG51bWJlcixcbiAgICAgICAgc29ydDogYm9vbGVhbixcbiAgICApOiB2b2lkIHtcblxuICAgICAgICBjb25zdCBuYXZJdGVtcyA9IFtdO1xuICAgICAgICBjb25zdCBtb3JlSXRlbXMgPSBbXTtcblxuICAgICAgICBpZiAoIWl0ZW1zIHx8IGl0ZW1zLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgdGhpcy5tZW51ID0gbmF2SXRlbXM7XG4gICAgICAgICAgICB0aGlzLmFsbC5tb2R1bGVzID0gbW9yZUl0ZW1zO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgbGV0IGNvdW50ID0gMDtcbiAgICAgICAgaXRlbXMuZm9yRWFjaCgobW9kdWxlOiBzdHJpbmcpID0+IHtcblxuICAgICAgICAgICAgY29uc3QgaXRlbSA9IHRoaXMuYnVpbGRUYWJNZW51SXRlbShtb2R1bGUsIG1vZHVsZXNbbW9kdWxlXSk7XG5cbiAgICAgICAgICAgIGlmIChtb2R1bGUgPT09ICdob21lJyB8fCB0aGlzLmFwcFN0YXRlLmdldE1vZHVsZSgpID09PSBtb2R1bGUgfHwgY291bnQgPj0gdGhyZXNob2xkKSB7XG4gICAgICAgICAgICAgICAgbW9yZUl0ZW1zLnB1c2goaXRlbSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIG5hdkl0ZW1zLnB1c2goaXRlbSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGNvdW50Kys7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGlmIChzb3J0KSB7XG4gICAgICAgICAgICB0aGlzLnNvcnRNZW51SXRlbXMobmF2SXRlbXMpO1xuICAgICAgICAgICAgdGhpcy5zb3J0TWVudUl0ZW1zKG1vcmVJdGVtcyk7XG4gICAgICAgIH1cblxuXG4gICAgICAgIHRoaXMubWVudSA9IG5hdkl0ZW1zO1xuICAgICAgICB0aGlzLmFsbC5tb2R1bGVzID0gbW9yZUl0ZW1zO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEJ1aWxkIEdyb3VwZWQgVGFiIG1lbnUgaXRlbVxuICAgICAqXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IG1vZHVsZUxhYmVsIHRvIGRpc3BsYXlcbiAgICAgKiBAcGFyYW0ge29iamVjdH0gZ3JvdXBlZE1vZHVsZXMgbGlzdFxuICAgICAqIEBwYXJhbSB7b2JqZWN0fSBtb2R1bGVzIGxpc3RcbiAgICAgKiBAcGFyYW0ge2Jvb2xlYW59IHNvcnQgZmxhZ1xuICAgICAqXG4gICAgICogQHJldHVybnMge29iamVjdH0gZ3JvdXAgdGFiIG1lbnUgaXRlbVxuICAgICAqL1xuICAgIHByb3RlY3RlZCBidWlsZFRhYkdyb3VwZWRNZW51SXRlbShcbiAgICAgICAgbW9kdWxlTGFiZWw6IHN0cmluZyxcbiAgICAgICAgZ3JvdXBlZE1vZHVsZXM6IGFueVtdLFxuICAgICAgICBtb2R1bGVzOiBOYXZiYXJNb2R1bGVNYXAsXG4gICAgICAgIHNvcnQ6IGJvb2xlYW5cbiAgICApOiBhbnkge1xuXG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBsaW5rOiB7XG4gICAgICAgICAgICAgICAgbGFiZWw6IHRoaXMubGFuZ3VhZ2UuZ2V0QXBwU3RyaW5nKG1vZHVsZUxhYmVsKSB8fCBtb2R1bGVMYWJlbCxcbiAgICAgICAgICAgICAgICB1cmw6ICcnLFxuICAgICAgICAgICAgICAgIHJvdXRlOiBudWxsLFxuICAgICAgICAgICAgICAgIHBhcmFtczogbnVsbFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGljb246ICcnLFxuICAgICAgICAgICAgc3VibWVudTogdGhpcy5idWlsZEdyb3VwZWRNZW51KGdyb3VwZWRNb2R1bGVzLCBtb2R1bGVzLCBzb3J0KVxuICAgICAgICB9O1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEJ1aWxkIEdyb3VwZWQgbWVudVxuICAgICAqXG4gICAgICogQHBhcmFtIHtvYmplY3R9IGdyb3VwZWRNb2R1bGVzIGluZm9cbiAgICAgKiBAcGFyYW0ge29iamVjdH0gbW9kdWxlcyBtYXBcbiAgICAgKiBAcGFyYW0ge2Jvb2xlYW59IHNvcnQgZmxhZ1xuICAgICAqXG4gICAgICogQHJldHVybnMge1tdfSBtZW51IGl0ZW0gYXJyYXlcbiAgICAgKi9cbiAgICBwcm90ZWN0ZWQgYnVpbGRHcm91cGVkTWVudShcbiAgICAgICAgZ3JvdXBlZE1vZHVsZXM6IGFueVtdLFxuICAgICAgICBtb2R1bGVzOiBOYXZiYXJNb2R1bGVNYXAsXG4gICAgICAgIHNvcnQ6IGJvb2xlYW5cbiAgICApOiBNZW51SXRlbVtdIHtcblxuICAgICAgICBjb25zdCBncm91cGVkSXRlbXMgPSBbXTtcbiAgICAgICAgbGV0IGhvbWVNZW51SXRlbSA9IG51bGw7XG5cbiAgICAgICAgZ3JvdXBlZE1vZHVsZXMuZm9yRWFjaCgoZ3JvdXBlZE1vZHVsZSkgPT4ge1xuXG4gICAgICAgICAgICBjb25zdCBtb2R1bGUgPSBtb2R1bGVzW2dyb3VwZWRNb2R1bGVdO1xuXG4gICAgICAgICAgICBpZiAoIW1vZHVsZSkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgY29uc3QgbW9kdWxlTWVudUl0ZW0gPSB0aGlzLmJ1aWxkVGFiTWVudUl0ZW0oZ3JvdXBlZE1vZHVsZSwgbW9kdWxlKTtcblxuICAgICAgICAgICAgaWYgKGdyb3VwZWRNb2R1bGUgPT09ICdob21lJykge1xuICAgICAgICAgICAgICAgIGhvbWVNZW51SXRlbSA9IG1vZHVsZU1lbnVJdGVtO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgZ3JvdXBlZEl0ZW1zLnB1c2gobW9kdWxlTWVudUl0ZW0pO1xuICAgICAgICB9KTtcblxuICAgICAgICBpZiAoc29ydCkge1xuICAgICAgICAgICAgdGhpcy5zb3J0TWVudUl0ZW1zKGdyb3VwZWRJdGVtcyk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoaG9tZU1lbnVJdGVtKSB7XG4gICAgICAgICAgICBncm91cGVkSXRlbXMudW5zaGlmdChob21lTWVudUl0ZW0pO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGdyb3VwZWRJdGVtcztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBCdWlsZCBtb2R1bGUgbWVudSBpdGVtc1xuICAgICAqXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IG1vZHVsZSBuYW1lXG4gICAgICogQHBhcmFtIHtvYmplY3R9IG1vZHVsZUluZm8gaW5mb1xuICAgICAqXG4gICAgICogQHJldHVybnMge29iamVjdH0gbWVudUl0ZW1cbiAgICAgKi9cbiAgICBwcm90ZWN0ZWQgYnVpbGRUYWJNZW51SXRlbShcbiAgICAgICAgbW9kdWxlOiBzdHJpbmcsXG4gICAgICAgIG1vZHVsZUluZm86IE5hdmJhck1vZHVsZSxcbiAgICApOiBNZW51SXRlbSB7XG4gICAgICAgIGlmIChtb2R1bGVJbmZvLm5hbWUpIHtcbiAgICAgICAgICAgIG1vZHVsZSA9IG1vZHVsZUluZm8ubmFtZTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBtb2R1bGVSb3V0ZSA9IHRoaXMubW9kdWxlTmF2aWdhdGlvbi5nZXRNb2R1bGVSb3V0ZShtb2R1bGVJbmZvKTtcbiAgICAgICAgY29uc3QgYXBwTGlzdFN0cmluZ3MgPSB0aGlzLmxhbmd1YWdlLmdldExhbmd1YWdlU3RyaW5ncygpPy5hcHBMaXN0U3RyaW5ncyA/PyB7fTtcbiAgICAgICAgY29uc3QgbWVudUl0ZW06IE1lbnVJdGVtID0ge1xuICAgICAgICAgICAgbGluazoge1xuICAgICAgICAgICAgICAgIGxhYmVsOiB0aGlzLm1vZHVsZU5hdmlnYXRpb24uZ2V0TW9kdWxlTGFiZWwobW9kdWxlSW5mbywgYXBwTGlzdFN0cmluZ3MpLFxuICAgICAgICAgICAgICAgIHVybDogbW9kdWxlUm91dGUudXJsLFxuICAgICAgICAgICAgICAgIHJvdXRlOiBtb2R1bGVSb3V0ZS5yb3V0ZSxcbiAgICAgICAgICAgICAgICBwYXJhbXM6IG51bGxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBpY29uOiB0aGlzLm1vZHVsZU5hbWVNYXBwZXIudG9MZWdhY3kobW9kdWxlKSA/PyBudWxsLFxuICAgICAgICAgICAgc3VibWVudTogW10sXG4gICAgICAgICAgICBtb2R1bGU6IG1vZHVsZSA/PyBudWxsLFxuICAgICAgICAgICAgaXNHcm91cGVkTWVudTogZmFsc2VcbiAgICAgICAgfTtcbiAgICAgICAgbGV0IGhhc1N1Ym1lbnUgPSBmYWxzZTtcbiAgICAgICAgaWYgKG1vZHVsZUluZm8pIHtcbiAgICAgICAgICAgIG1vZHVsZUluZm8ubWVudS5mb3JFYWNoKChzdWJNZW51KSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3Qgc3VibGlua3MgPSBzdWJNZW51LnN1YmxpbmtzIHx8IFtdO1xuICAgICAgICAgICAgICAgIGNvbnN0IHN1Yk1lbnVJdGVtID0gdGhpcy5idWlsZFN1Yk1lbnVJdGVtKG1vZHVsZSwgc3ViTWVudSwgc3VibGlua3MpO1xuICAgICAgICAgICAgICAgIG1lbnVJdGVtLnN1Ym1lbnUucHVzaChzdWJNZW51SXRlbSk7XG4gICAgICAgICAgICAgICAgaWYgKHN1YmxpbmtzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgaGFzU3VibWVudSA9IHRydWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgbWVudUl0ZW0uaXNHcm91cGVkTWVudSA9IGhhc1N1Ym1lbnU7XG4gICAgICAgIHJldHVybiBtZW51SXRlbTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgYnVpbGRTdWJNZW51SXRlbShtb2R1bGU6IHN0cmluZywgc3ViTWVudTogYW55LCBzdWJsaW5rczogYW55KTogTWVudUl0ZW0ge1xuICAgICAgICBjb25zdCBtb2R1bGVBY3Rpb25Sb3V0ZSA9IHRoaXMubW9kdWxlTmF2aWdhdGlvbi5nZXRBY3Rpb25Sb3V0ZShzdWJNZW51KTtcbiAgICAgICAgY29uc3Qgc3ViTWVudUl0ZW06IE1lbnVJdGVtID0ge1xuICAgICAgICAgICAgbGluazoge1xuICAgICAgICAgICAgICAgIGxhYmVsOiB0aGlzLm1vZHVsZU5hdmlnYXRpb24uZ2V0QWN0aW9uTGFiZWwobW9kdWxlLCBzdWJNZW51LCB0aGlzLmxhbmd1YWdlLmdldExhbmd1YWdlU3RyaW5ncygpKSxcbiAgICAgICAgICAgICAgICB1cmw6IG1vZHVsZUFjdGlvblJvdXRlLnVybCxcbiAgICAgICAgICAgICAgICByb3V0ZTogbW9kdWxlQWN0aW9uUm91dGUucm91dGUsXG4gICAgICAgICAgICAgICAgcGFyYW1zOiBtb2R1bGVBY3Rpb25Sb3V0ZS5wYXJhbXMsXG4gICAgICAgICAgICAgICAgcHJvY2VzczogbW9kdWxlQWN0aW9uUm91dGUucHJvY2Vzc1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGljb246IHN1Yk1lbnUuaWNvbiB8fCAnJyxcbiAgICAgICAgICAgIHN1Ym1lbnU6IHN1YmxpbmtzLm1hcCgoaXRlbSkgPT4gdGhpcy5idWlsZFN1Yk1lbnVJdGVtKG1vZHVsZSwgaXRlbSwgW10pKSxcblxuICAgICAgICB9O1xuICAgICAgICByZXR1cm4gc3ViTWVudUl0ZW07XG4gICAgfVxuXG5cbiAgICAvKipcbiAgICAgKiBTb3J0IG1lbnUgaXRlbXMgYnkgbGFiZWxcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7b2JqZWN0fSBuYXZJdGVtcyB0byBzb3J0XG4gICAgICovXG4gICAgcHJvdGVjdGVkIHNvcnRNZW51SXRlbXMobmF2SXRlbXM6IGFueVtdKTogdm9pZCB7XG4gICAgICAgIG5hdkl0ZW1zLnNvcnQoKGE6IE1lbnVJdGVtLCBiOiBNZW51SXRlbSkgPT4ge1xuXG4gICAgICAgICAgICBjb25zdCBuYW1lQSA9IGEubGluay5sYWJlbC50b1VwcGVyQ2FzZSgpOyAvLyBpZ25vcmUgdXBwZXIgYW5kIGxvd2VyY2FzZVxuICAgICAgICAgICAgY29uc3QgbmFtZUIgPSBiLmxpbmsubGFiZWwudG9VcHBlckNhc2UoKTsgLy8gaWdub3JlIHVwcGVyIGFuZCBsb3dlcmNhc2VcblxuICAgICAgICAgICAgaWYgKG5hbWVBIDwgbmFtZUIpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gLTE7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAobmFtZUEgPiBuYW1lQikge1xuICAgICAgICAgICAgICAgIHJldHVybiAxO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBuYW1lcyBtdXN0IGJlIGVxdWFsXG4gICAgICAgICAgICByZXR1cm4gMDtcbiAgICAgICAgfSk7XG4gICAgfVxufVxuIl19