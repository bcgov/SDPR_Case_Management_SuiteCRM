<?php
/**
 * SuiteCRM is a customer relationship management program developed by SalesAgility Ltd.
 * Copyright (C) 2022 SalesAgility Ltd.
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
 * along with this program.  If not, see http://www.gnu.org/licenses.
 *
 * In accordance with Section 7(b) of the GNU Affero General Public License
 * version 3, these Appropriate Legal Notices must retain the display of the
 * "Supercharged by SuiteCRM" logo. If the display of the logos is not reasonably
 * feasible for technical reasons, the Appropriate Legal Notices must display
 * the words "Supercharged by SuiteCRM".
 */

namespace App\Logging\Services;

use Exception;
use Psr\Log\LoggerInterface;

trait AppLoggingTrait
{
    abstract public function getLogger(): LoggerInterface;

    /**
     * @param string $message
     * @param string $level
     * @param array $context
     * @return void
     */
    protected function log(string $message, string $level = 'info', array $context = []): void
    {
        $className = get_class($this);
        try {
            $this->getLogger()->$level("$className | " . $message, $context);
        } catch (Exception $e) {
        }
    }

    /**
     * Json encode and log array
     *
     * @param string $message
     * @param array $contents
     * @param string $level
     * @param array $context
     *
     * @return void
     */
    protected function logArray(string $message, array $contents, string $level = 'info', array $context = []): void
    {
        $className = get_class($this);
        try {
            $this->getLogger()->$level("$className | " . $message . " | " . json_encode($contents, JSON_THROW_ON_ERROR),
                $context);
        } catch (Exception $e) {
        }
    }

}
