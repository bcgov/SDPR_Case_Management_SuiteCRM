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


namespace App\Languages\LegacyHandler;


use ApiPlatform\Core\Exception\ItemNotFoundException;
use App\Engine\LegacyHandler\LegacyHandler;
use App\Engine\LegacyHandler\LegacyScopeState;
use App\Languages\Entity\ModStrings;
use App\Module\Service\ModuleNameMapperInterface;
use App\Module\Service\ModuleRegistryInterface;
use Symfony\Component\HttpFoundation\Session\SessionInterface;

class ModStringsHandler extends LegacyHandler
{
    protected const MSG_LANGUAGE_NOT_FOUND = 'Not able to get language: ';
    public const HANDLER_KEY = 'mod-strings';

    protected static $extraModules = [
        'SecurityGroups',
        'Bugs',
        'History',
        'Activities'
    ];

    /**
     * @var ModuleNameMapperInterface
     */
    private $moduleNameMapper;

    /**
     * @var ModuleRegistryInterface
     */
    private $moduleRegistry;

    /**
     * SystemConfigHandler constructor.
     * @param string $projectDir
     * @param string $legacyDir
     * @param string $legacySessionName
     * @param string $defaultSessionName
     * @param LegacyScopeState $legacyScopeState
     * @param ModuleNameMapperInterface $moduleNameMapper
     * @param ModuleRegistryInterface $moduleRegistry
     * @param SessionInterface $session
     */
    public function __construct(
        string $projectDir,
        string $legacyDir,
        string $legacySessionName,
        string $defaultSessionName,
        LegacyScopeState $legacyScopeState,
        ModuleNameMapperInterface $moduleNameMapper,
        ModuleRegistryInterface $moduleRegistry,
        SessionInterface $session
    ) {
        parent::__construct($projectDir, $legacyDir, $legacySessionName, $defaultSessionName, $legacyScopeState, $session);
        $this->moduleNameMapper = $moduleNameMapper;
        $this->moduleRegistry = $moduleRegistry;
    }

    /**
     * @inheritDoc
     */
    public function getHandlerKey(): string
    {
        return self::HANDLER_KEY;
    }

    /**
     * Get mod strings for given $language
     * @param $language
     * @return ModStrings|null
     */
    public function getModStrings(string $language): ?ModStrings
    {
        if (empty($language)) {
            return null;
        }

        $this->init();

        $enabledLanguages = get_languages();

        if (empty($enabledLanguages) || !array_key_exists($language, $enabledLanguages)) {
            throw new ItemNotFoundException(self::MSG_LANGUAGE_NOT_FOUND . "'$language'");
        }

        $modules = $this->moduleRegistry->getUserAccessibleModules();

        $modules = array_merge($modules, self::$extraModules);

        $allModStringsArray = [];
        foreach ($modules as $module) {
            $frontendName = $this->moduleNameMapper->toFrontEnd($module);
            $moduleStrings = return_module_language($language, $module);
            if (!empty($moduleStrings)) {
                $moduleStrings = $this->removeEndingColon($moduleStrings);
            }
            $allModStringsArray[$frontendName] = $moduleStrings;
        }


        if (empty($allModStringsArray)) {
            throw new ItemNotFoundException(self::MSG_LANGUAGE_NOT_FOUND . "'$language'");
        }

        $modStrings = new ModStrings();
        $modStrings->setId($language);
        $modStrings->setItems($allModStringsArray);

        $this->close();

        return $modStrings;
    }

    /**
     * @param array $stringArray
     * @return array
     */
    protected function removeEndingColon(array $stringArray): array
    {
        $stringArray = array_map(static function ($label) {
            if (is_string($label)) {
                return preg_replace('/:$/', '', $label);
            }

            return $label;
        }, $stringArray);

        return $stringArray;
    }
}
