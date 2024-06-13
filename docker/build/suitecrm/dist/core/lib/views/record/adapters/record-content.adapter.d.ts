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
import { Observable, Subscription } from 'rxjs';
import { Panel, Record } from 'common';
import { MetadataStore, RecordViewMetadata } from '../../../store/metadata/metadata.store.service';
import { RecordContentConfig, RecordContentDataSource } from '../../../components/record-content/record-content.model';
import { RecordActionManager } from '../actions/record-action-manager.service';
import { LanguageStore } from '../../../store/language/language.store';
import { RecordViewStore } from '../store/record-view/record-view.store';
import { PanelLogicManager } from '../../../components/panel-logic/panel-logic.manager';
import * as i0 from "@angular/core";
export declare class RecordContentAdapter implements RecordContentDataSource {
    protected store: RecordViewStore;
    protected metadata: MetadataStore;
    protected language: LanguageStore;
    protected actions: RecordActionManager;
    protected logicManager: PanelLogicManager;
    inlineEdit: true;
    protected fieldSubs: Subscription[];
    constructor(store: RecordViewStore, metadata: MetadataStore, language: LanguageStore, actions: RecordActionManager, logicManager: PanelLogicManager);
    getEditAction(): void;
    getDisplayConfig(): Observable<RecordContentConfig>;
    getPanels(): Observable<Panel[]>;
    getRecord(): Observable<Record>;
    protected getLayout(recordMeta: RecordViewMetadata): string;
    clean(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<RecordContentAdapter, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<RecordContentAdapter>;
}
