<?php
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

namespace App\ViewDefinitions\LegacyHandler\RecordView;

use App\FieldDefinitions\Entity\FieldDefinition;
use App\ViewDefinitions\Entity\ViewDefinition;
use App\ViewDefinitions\LegacyHandler\ViewDefinitionMapperInterface;

class RecordViewDynamicEnumMapper implements ViewDefinitionMapperInterface
{

    /**
     * RecordViewReadOnlyMapper constructor.
     */
    public function __construct()
    {
    }

    /**
     * @inheritDoc
     */
    public function getKey(): string
    {
        return 'record-view-dynamicenum';
    }

    /**
     * @inheritDoc
     */
    public function getModule(): string
    {
        return 'default';
    }

    /**
     * @inheritDoc
     */
    public function map(ViewDefinition $definition, FieldDefinition $fieldDefinition): void
    {
        $recordView = $definition->getRecordView() ?? [];
        $panels = $recordView['panels'] ?? [];

        if (empty($recordView) || empty($panels)) {
            return;
        }
        foreach ($panels as $panelKey => $panel) {
            foreach ($panel['rows'] as $rowKey => $row) {
                $cols = $this->mapCols($row);
                $panels[$panelKey]['rows'][$rowKey]['cols'] = $cols;
            }
        }
        $recordView['panels'] = $panels;
        $definition->setRecordView($recordView);
    }

    /**
     * @param $row
     * @param FieldDefinition $fieldDefinition
     * @return array cols
     */
    public function mapCols(array $row): array
    {
        $cols = [];
        foreach ($row['cols'] as $cellKey => $cell) {

            $type = strtolower($cell['type'] ?? '');

            if ($type === 'dynamicenum') {
                $cell['type'] = 'enum';
                $cell['dynamic'] = true;
            }
            $cols[$cellKey] = $cell;
        }

        return $cols;
    }

}
