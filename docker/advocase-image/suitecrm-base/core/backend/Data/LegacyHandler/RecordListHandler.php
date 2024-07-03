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

namespace App\Data\LegacyHandler;

use App\Engine\LegacyHandler\LegacyHandler;
use App\Engine\LegacyHandler\LegacyScopeState;
use App\Data\Entity\RecordList;
use App\Module\Service\ModuleNameMapperInterface;
use App\Data\Service\RecordListProviderInterface;
use InvalidArgumentException;
use Symfony\Component\HttpFoundation\Session\SessionInterface;

/**
 * Class RecordListHandler
 * @package App\Legacy
 */
class RecordListHandler extends LegacyHandler implements RecordListProviderInterface
{
    public const HANDLER_KEY = 'list-view';

    /**
     * @var ModuleNameMapperInterface
     */
    private $moduleNameMapper;

    /**
     * @var ListDataHandler
     */
    private $listDataHandler;

    /**
     * @var PresetListDataHandlers
     */
    private $presetHandlers;

    /**
     * SystemConfigHandler constructor.
     * @param string $projectDir
     * @param string $legacyDir
     * @param string $legacySessionName
     * @param string $defaultSessionName
     * @param LegacyScopeState $legacyScopeState
     * @param ModuleNameMapperInterface $moduleNameMapper
     * @param ListDataHandler $listDataHandler
     * @param PresetListDataHandlers $presetHandlers
     */
    public function __construct(
        string $projectDir,
        string $legacyDir,
        string $legacySessionName,
        string $defaultSessionName,
        LegacyScopeState $legacyScopeState,
        ModuleNameMapperInterface $moduleNameMapper,
        ListDataHandler $listDataHandler,
        PresetListDataHandlers $presetHandlers,
        SessionInterface $session
    ) {
        parent::__construct($projectDir, $legacyDir, $legacySessionName, $defaultSessionName, $legacyScopeState,
            $session);
        $this->moduleNameMapper = $moduleNameMapper;
        $this->listDataHandler = $listDataHandler;
        $this->presetHandlers = $presetHandlers;
    }

    /**
     * @inheritDoc
     */
    public function getHandlerKey(): string
    {
        return self::HANDLER_KEY;
    }

    /**
     * @param string $moduleName
     * @param array $criteria
     * @param int $offset
     * @param int $limit
     * @param array $sort
     * @return RecordList
     */
    public function getList(
        string $moduleName,
        array $criteria = [],
        int $offset = -1,
        int $limit = -1,
        array $sort = []
    ): RecordList {
        $this->init();
        $this->startLegacyApp();

        $moduleName = $this->validateModuleName($moduleName);

        $listData = $this->getData($moduleName, $criteria, $offset, $limit, $sort);

        if ($this->currentPageHasNoRecords($listData)) {
            $listData = $this->getData($moduleName, $criteria, 0, $limit, $sort);
        }

        $recordList = new RecordList();
        $recordList->setId($moduleName);

        $records = [];
        foreach ($listData->getRecords() as $record) {
            $records[] = $record->toArray();
        }

        $recordList->setRecords($records);
        $recordList->setMeta(
            array_merge(
                [
                    'offsets' => $listData->getOffsets(),
                    'ordering' => $listData->getOrdering()
                ],
                $listData->getMeta() ?? []
            ));

        $this->close();

        return $recordList;
    }

    /**
     * @param $moduleName
     * @return string
     */
    private function validateModuleName($moduleName): string
    {
        $moduleName = $this->moduleNameMapper->toLegacy($moduleName);

        if (!$this->moduleNameMapper->isValidModule($moduleName)) {
            throw new InvalidArgumentException('Invalid module name: ' . $moduleName);
        }

        return $moduleName;
    }

    /**
     * @param string $module
     * @param array $criteria
     * @param int $offset
     * @param int $limit
     * @param array $sort
     * @return ListData
     */
    protected function getData(
        string $module,
        array $criteria = [],
        int $offset = -1,
        int $limit = -1,
        array $sort = []
    ): ListData {
        if (isset($criteria['preset'])) {
            $type = $criteria['preset']['type'] ?? '';

            return $this->presetHandlers->get($type)->fetch($module, $criteria, $offset, $limit, $sort);
        }

        return $this->listDataHandler->fetch($module, $criteria, $offset, $limit, $sort);
    }

    /**
     * @param ListData $recordList
     * @return bool
     */
    protected function currentPageHasNoRecords(ListData $recordList): bool
    {
        $totalRecords = (int)($recordList->getOffsets()['total'] ?? 0);
        $current = (int)($recordList->getOrdering()['current'] ?? 0);

        return $totalRecords && $current && $current >= $totalRecords;
    }

}
