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


namespace App\ViewDefinitions\LegacyHandler;

use App\Data\Service\RecordActionDefinitionProviderInterface;
use App\Engine\LegacyHandler\LegacyHandler;
use App\Engine\LegacyHandler\LegacyScopeState;
use App\FieldDefinitions\Entity\FieldDefinition;
use App\ViewDefinitions\Service\FieldAliasMapper;
use App\ViewDefinitions\Service\WidgetDefinitionProviderInterface;
use BeanFactory;
use DetailView2;
use EditView;
use Exception;
use Psr\Log\LoggerInterface;
use Symfony\Component\HttpFoundation\Session\SessionInterface;
use ViewDetail;
use ViewEdit;
use ViewFactory;

class RecordViewDefinitionHandler extends LegacyHandler
{
    use FieldDefinitionsInjectorTrait;

    protected $defaultDefinition = [
        'name' => '',
        'label' => '',
    ];

    /**
     * @var LoggerInterface
     */
    private $logger;

    /**
     * @var RecordActionDefinitionProviderInterface
     */
    private $actionDefinitionProvider;

    /**
     * @var WidgetDefinitionProviderInterface
     */
    private $widgetDefinitionProvider;

    /**
     * @var array
     */
    private $recordViewSidebarWidgets;

    /**
     * @var array
     */
    private $recordViewBottomWidgets;

    /**
     * @var array
     */
    private $recordViewTopWidgets;

    /**
     * @var FieldAliasMapper
     */
    private $fieldAliasMapper;

    /**
     * RecordViewDefinitionHandler constructor.
     * @param string $projectDir
     * @param string $legacyDir
     * @param string $legacySessionName
     * @param string $defaultSessionName
     * @param LegacyScopeState $legacyScopeState
     * @param LoggerInterface $logger
     * @param RecordActionDefinitionProviderInterface $actionDefinitionProvider
     * @param WidgetDefinitionProviderInterface $widgetDefinitionProvider
     * @param FieldAliasMapper $fieldAliasMapper
     * @param array $recordViewSidebarWidgets
     * @param array $recordViewBottomWidgets
     * @param array $recordViewTopWidgets
     * @param SessionInterface $session
     */
    public function __construct(
        string $projectDir,
        string $legacyDir,
        string $legacySessionName,
        string $defaultSessionName,
        LegacyScopeState $legacyScopeState,
        LoggerInterface $logger,
        RecordActionDefinitionProviderInterface $actionDefinitionProvider,
        WidgetDefinitionProviderInterface $widgetDefinitionProvider,
        FieldAliasMapper $fieldAliasMapper,
        array $recordViewSidebarWidgets,
        array $recordViewBottomWidgets,
        array $recordViewTopWidgets,
        SessionInterface $session
    ) {
        parent::__construct(
            $projectDir,
            $legacyDir,
            $legacySessionName,
            $defaultSessionName,
            $legacyScopeState,
            $session
        );
        $this->logger = $logger;
        $this->actionDefinitionProvider = $actionDefinitionProvider;
        $this->widgetDefinitionProvider = $widgetDefinitionProvider;
        $this->recordViewSidebarWidgets = $recordViewSidebarWidgets;
        $this->recordViewBottomWidgets = $recordViewBottomWidgets;
        $this->recordViewTopWidgets = $recordViewTopWidgets;
        $this->fieldAliasMapper = $fieldAliasMapper;
    }

    /**
     * @inheritDoc
     */
    public function getHandlerKey(): string
    {
        return 'record-view-definitions';
    }

    /**
     * Get record view defs array. Using Session swapping.
     * @param string $module
     * @param string $legacyModuleName
     * @param FieldDefinition $fieldDefinition
     * @return array
     */
    public function get(
        string $module,
        string $legacyModuleName,
        FieldDefinition $fieldDefinition
    ): array {
        $this->init();

        $metadata = $this->fetch($module, $legacyModuleName, $fieldDefinition);

        $this->close();

        return $metadata;
    }

    /**
     * Get record view defs array. No swapping.
     * @param string $module
     * @param string $legacyModuleName
     * @param FieldDefinition $fieldDefinition
     * @return array
     */
    public function fetch(
        string $module,
        string $legacyModuleName,
        FieldDefinition $fieldDefinition
    ): array {
        $detailViewDefs = $this->getDetailViewDefs($legacyModuleName);
        $editViewDefs = $this->getEditViewDefs($legacyModuleName);
        $vardefs = $fieldDefinition->getVardef();

        $metadata = [
            'templateMeta' => [],
            'topWidget' => [],
            'sidebarWidgets' => [],
            'bottomWidgets' => [],
            'actions' => [],
            'panels' => [],
            'summaryTemplates' => [],
            'vardefs' => $vardefs,
        ];

        $this->addTemplateMeta($detailViewDefs, $metadata);
        $this->addTopWidgetConfig($module, $detailViewDefs, $metadata);
        $this->addSidebarWidgetConfig($module, $detailViewDefs, $metadata);
        $this->addBottomWidgetConfig($module, $detailViewDefs, $metadata);
        $this->addPanelDefinitions($detailViewDefs, $editViewDefs, $vardefs, $metadata);
        $this->addActionConfig($module, $detailViewDefs, $metadata);
        $this->addSummaryTemplates($detailViewDefs, $metadata);

        return $metadata;
    }

    /**
     * Get detail view defs from legacy
     * @param string $module
     * @return array
     */
    protected function getDetailViewDefs(string $module): array
    {
        /* @noinspection PhpIncludeInspection */
        require_once 'include/MVC/View/ViewFactory.php';

        /* @var ViewDetail $view */
        $view = ViewFactory::loadView(
            'detail',
            $module,
            BeanFactory::newBean($module)
        );

        $view->module = $module;

        $this->loadDetailViewMetadata($view);

        return $view->dv->defs ?? [];
    }

    /**
     * @param ViewDetail $view
     */
    protected function loadDetailViewMetadata(ViewDetail $view): void
    {

        /* @noinspection PhpIncludeInspection */
        require_once 'include/DetailView/DetailView2.php';
        $metadataFile = $view->getMetaDataFile();

        if (empty($metadataFile)) {
            return;
        }

        $view->dv = new DetailView2();
        $view->dv->ss =& $view->ss;

        try {
            $view->dv->setup(
                $view->module,
                $view->bean,
                $metadataFile,
                get_custom_file_if_exists('include/DetailView/DetailView.tpl')
            );
        } catch (Exception $exception) {
            // Detail View metadata definition[file] is not available & couldn't be derived by the system
            $view->dv->defs = [];
        }
    }

    /**
     * Get detail view defs from legacy
     * @param string $module
     * @return array
     */
    protected function getEditViewDefs(string $module): array
    {
        /* @noinspection PhpIncludeInspection */
        require_once 'include/MVC/View/ViewFactory.php';

        /* @var ViewEdit $view */
        $view = ViewFactory::loadView(
            'edit',
            $module,
            BeanFactory::newBean($module)
        );

        $view->module = $module;

        $this->loadEditViewMetadata($view);

        return $view->ev->defs ?? [];
    }

    /**
     * @param ViewEdit $view
     */
    protected function loadEditViewMetadata(ViewEdit $view): void
    {

        /* @noinspection PhpIncludeInspection */
        require_once 'include/EditView/EditView2.php';
        $metadataFile = $view->getMetaDataFile();

        if (empty($metadataFile)) {
            return;
        }

        $view->ev = new EditView();
        $view->ev->ss =& $view->ss;

        try {
            $view->ev->setup($view->module, $view->bean, $metadataFile);
        } catch (Exception $exception) {
            // Edit View metadata definition[file] is not available & couldn't be derived by the system
            $view->ev->defs = [];
        }
    }

    /**
     * @param array $viewDefs
     * @param array $metadata
     */
    protected function addTemplateMeta(array $viewDefs, array &$metadata): void
    {
        $metadata['templateMeta']['maxColumns'] = $viewDefs['templateMeta']['maxColumns'] ?? 2;
        $metadata['templateMeta']['useTabs'] = $viewDefs['templateMeta']['useTabs'] ?? true;
        $metadata['templateMeta']['tabDefs'] = $viewDefs['templateMeta']['tabDefs'] ?? [];
    }

    /**
     * @param string $module
     * @param array $viewDefs
     * @param array $metadata
     */
    protected function addTopWidgetConfig(string $module, array $viewDefs, array &$metadata): void
    {
        $metadata['topWidget'] = $this->widgetDefinitionProvider->getTopWidgets(
            $this->recordViewTopWidgets,
            $module,
            ['widget' => $viewDefs['topWidget'] ?? []]
        );
    }

    /**
     * @param array $viewDefs
     * @param array $metadata
     */
    protected function addSummaryTemplates(array $viewDefs, array &$metadata): void
    {
        $templates = $viewDefs['summaryTemplates'] ?? [];
        $metadata['summaryTemplates']['create'] = $templates['create'] ?? 'LBL_CREATE';

        $nameVardefs = $metadata['vardefs']['name'] ?? [];
        $nameSource = $nameVardefs['source'] ?? '';
        $nameConcatFields = $nameVardefs['db_concat_fields'] ?? [];

        if ($nameSource !== 'non-db' || empty($nameConcatFields)) {
            $metadata['summaryTemplates']['edit'] = $templates['edit'] ?? 'LBL_SUMMARY_DEFAULT';
            $metadata['summaryTemplates']['detail'] = $templates['detail'] ?? 'LBL_SUMMARY_DEFAULT';
            return;
        }

        if (in_array('first_name', $nameConcatFields, true) && in_array('last_name', $nameConcatFields, true)) {
            $metadata['summaryTemplates']['edit'] = $templates['edit'] ?? 'LBL_SUMMARY_PERSON';
            $metadata['summaryTemplates']['detail'] = $templates['detail'] ?? 'LBL_SUMMARY_PERSON';
            return;
        }

        if (in_array('document_name', $nameConcatFields, true)) {
            $metadata['summaryTemplates']['edit'] = $templates['edit'] ?? 'LBL_SUMMARY_DOCUMENT';
            $metadata['summaryTemplates']['detail'] = $templates['detail'] ?? 'LBL_SUMMARY_DOCUMENT';
        }

    }

    /**
     * @param string $module
     * @param array $viewDefs
     * @param array $metadata
     */
    protected function addSidebarWidgetConfig(string $module, array $viewDefs, array &$metadata): void
    {
        $metadata['sidebarWidgets'] = $this->widgetDefinitionProvider->getSidebarWidgets(
            $this->recordViewSidebarWidgets,
            $module,
            ['widgets' => $viewDefs['sidebarWidgets'] ?? []]
        );
    }

    /**
     * @param string $module
     * @param array $viewDefs
     * @param array $metadata
     */
    protected function addBottomWidgetConfig(string $module, array $viewDefs, array &$metadata): void
    {
        $metadata['bottomWidgets'] = $this->widgetDefinitionProvider->getBottomWidgets(
            $this->recordViewBottomWidgets,
            $module,
            ['widgets' => $viewDefs['bottomWidgets'] ?? []]
        );
    }

    /**
     * @param array $detailViewDefs
     * @param array $editViewDefs
     * @param array|null $vardefs
     * @param array $metadata
     */
    protected function addPanelDefinitions(
        array $detailViewDefs,
        array $editViewDefs,
        ?array &$vardefs,
        array &$metadata
    ): void {
        $detailViewDefs = $detailViewDefs ?? [];
        $panels = $detailViewDefs['panels'] ?? [];
        $editViewFields = $this->getCellFields($editViewDefs);

        foreach ($panels as $panelKey => $panel) {
            $panelRows = [];

            if (is_string($panel)) {
                $newRow = [
                    'cols' => []
                ];

                $definition = $this->getBaseFieldCellDefinition($panel);
                $this->addCell($newRow, $definition, $vardefs, $editViewFields);
                $panelRows[] = $newRow;

                // to append to the end
                $metadata['panels'][] = [
                    'key' => $panelKey,
                    'rows' => $panelRows
                ];

                continue;
            }

            foreach ($panel as $row) {
                $newRow = [
                    'cols' => []
                ];

                if (is_string($row)) {
                    $definition = $this->getBaseFieldCellDefinition($row);
                    $this->addCell($newRow, $definition, $vardefs, $editViewFields);
                    $panelRows[] = $newRow;

                    continue;
                }

                foreach ($row as $cell) {
                    $definition = $cell;

                    if (empty($cell)) {
                        continue;
                    }

                    if (is_string($cell) && isset($row['name'])) {
                        $definition = $row;
                        $this->addCell($newRow, $definition, $vardefs, $editViewFields);
                        continue;
                    }

                    if (is_string($cell)) {
                        $definition = $this->getBaseFieldCellDefinition($cell);
                    }

                    $this->addCell($newRow, $definition, $vardefs, $editViewFields);
                }
                $panelRows[] = $newRow;
            }

            // to append to the end
            $metadata['panels'][] = [
                'key' => $panelKey,
                'rows' => $panelRows
            ];
        }
    }

    /**
     * @param array $viewDefs
     * @return array
     */
    protected function getCellFields(array $viewDefs): array
    {
        $panels = $viewDefs['panels'] ?? [];
        $cells = [];

        foreach ($panels as $panelKey => $panel) {
            if (is_string($panel)) {
                $definition = $this->getBaseFieldCellDefinition($panel);
                $cells[$definition['name']] = $definition;

                continue;
            }

            foreach ($panel as $row) {
                if (is_string($row)) {
                    $definition = $this->getBaseFieldCellDefinition($row);
                    $cells[$definition['name']] = $definition;

                    continue;
                }

                foreach ($row as $cell) {
                    $definition = $cell;

                    if (empty($cell)) {
                        continue;
                    }

                    if (is_string($cell) && isset($row['name'])) {
                        $definition = $row;
                        $cells[$definition['name']] = $definition;
                        continue;
                    }

                    if (is_string($cell)) {
                        $definition = $this->getBaseFieldCellDefinition($cell);
                        $cells[$definition['name']] = $definition;
                    }

                    if (isset($definition['name'])){
                        $cells[$definition['name']] = $definition;
                    }
                }
            }
        }

        return $cells;
    }

    /**
     * @param string $field
     * @return array
     */
    protected function getBaseFieldCellDefinition(string $field): array
    {
        $definition = array_merge([], $this->defaultDefinition);
        $definition['name'] = $field;

        return $definition;
    }

    /**
     * @param $newRow
     * @param $definition
     * @param $vardefs
     * @param array $editViewFields
     */
    protected function addCell(&$newRow, $definition, &$vardefs, array $editViewFields): void
    {
        $fieldName = $definition['name'] ?? '';
        if (empty($fieldName)) {
            return;
        }

        if (!isset($vardefs[$fieldName])) {
            $message = "RecordViewDefinitions: '$fieldName' not set on vardefs. Ignoring.";
            $this->logger->warning($message);

            return;
        }

        $definition = $this->buildFieldCell($definition, $vardefs);

        $definition = $this->mergeDisplayParams($definition);
        $definition = $this->mergeEditViewDefs($definition, $editViewFields);

        $newRow['cols'][] = $definition;
    }

    /**
     * Build list view column
     * @param $definition
     * @param array|null $vardefs
     * @return array
     */
    protected function buildFieldCell($definition, ?array &$vardefs): array
    {
        return $this->addFieldDefinition(
            $vardefs,
            $definition['name'],
            $definition,
            $this->defaultDefinition,
            $this->fieldAliasMapper
        );
    }

    /**
     * @param string $module
     * @param array $detailViewDefs
     * @param array $metadata
     */
    protected function addActionConfig(string $module, array $detailViewDefs, array &$metadata): void
    {
        $recordActions = $detailViewDefs['recordActions'] ?? [];
        $actions = $this->actionDefinitionProvider->getActions($module, $recordActions) ?? [];

        $metadata['actions'] = array_values($actions);
    }

    /**
     * @param $definition
     * @param array $editViewFields
     * @return mixed
     */
    protected function mergeEditViewDefs($definition, array $editViewFields)
    {
        if (isset($editViewFields[$definition['name']])) {
            $fieldDefinitions = $definition['fieldDefinition'] ?? [];
            $editViewDefinition = $editViewFields[$definition['name']] ?? [];
            $toMerge = [
                'required',
                'readOnly'
            ];

            foreach ($toMerge as $key) {
                $attribute = $editViewDefinition['displayParams'][$key] ?? null;
                if ($attribute !== null) {
                    $fieldDefinitions[$key] = $attribute;
                }
            }

            $definition['fieldDefinition'] = $fieldDefinitions;
        }

        return $definition;
    }

    /**
     * @param $definition
     * @return mixed
     */
    protected function mergeDisplayParams($definition)
    {
        $fieldDefinitions = $definition['fieldDefinition'] ?? [];
        $toMerge = [
            'required',
            'readOnly'
        ];

        foreach ($toMerge as $key) {
            $attribute = $definition['displayParams'][$key] ?? null;
            if ($attribute !== null) {
                $fieldDefinitions[$key] = $attribute;
            }
        }

        $definition['fieldDefinition'] = $fieldDefinitions;

        return $definition;
    }
}
