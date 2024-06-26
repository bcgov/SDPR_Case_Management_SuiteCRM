<?php
/**
 * SuiteCRM is a customer relationship management program developed by SalesAgility Ltd.
 * Copyright (C) 2023 SalesAgility Ltd.
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


namespace App\Process\Service\RecordThreadItemActions;

use ApiPlatform\Core\Exception\InvalidArgumentException;
use App\Data\Service\AlertProviderInterface;
use App\Process\Entity\Process;
use App\Process\Service\ProcessHandlerInterface;

class DismissAlertAction implements ProcessHandlerInterface
{
    protected const MSG_OPTIONS_NOT_FOUND = 'Process options are not defined';

    protected const PROCESS_TYPE = 'record-thread-item-dismiss-alert';

    /**
     * @var AlertProviderInterface
     */
    private $alertProvider;

    /**
     * DismissAlertAction constructor.
     * @param AlertProviderInterface $alertProvider
     */
    public function __construct(
        AlertProviderInterface $alertProvider
    ) {
        $this->alertProvider = $alertProvider;
    }

    /**
     * @inheritDoc
     */
    public function getProcessType(): string
    {
        return self::PROCESS_TYPE;
    }

    /**
     * @inheritDoc
     */
    public function requiredAuthRole(): string
    {
        return 'ROLE_USER';
    }

    /**
     * @inheritDoc
     */
    public function getRequiredACLs(Process $process): array
    {
        $options = $process->getOptions();
        $module = $options['module'] ?? '';

        return [
            $module => [
                [
                    'action' => 'delete',
                    'record' => $options['id'] ?? ''
                ]
            ],
        ];
    }

    /**
     * @inheritDoc
     */
    public function configure(Process $process): void
    {
        //This process is synchronous
        //We aren't going to store a record on db
        //thus we will use process type as the id
        $process->setId(self::PROCESS_TYPE);
        $process->setAsync(false);
    }

    /**
     * @inheritDoc
     */
    public function validate(Process $process): void
    {
        if (empty($process->getOptions())) {
            throw new InvalidArgumentException(self::MSG_OPTIONS_NOT_FOUND);
        }

        $options = $process->getOptions();

        if (empty($options['id'])) {
            throw new InvalidArgumentException(self::MSG_OPTIONS_NOT_FOUND);
        }
    }

    /**
     * @inheritDoc
     */
    public function run(Process $process)
    {
        $result = $this->dismissAlert($process);

        $process->setStatus('success');
        $process->setMessages(['LBL_ALERT_DISMISS_SUCCESS']);
        if (!$result) {
            $process->setStatus('error');
            $process->setMessages(['LBL_ALERT_DISMISS_ERROR']);

            return;
        }

        $responseData = [
            'reloadThread' => true,
        ];

        $process->setData($responseData);
    }

    /**
     * @param Process $process
     * @return bool
     */
    protected function dismissAlert(Process $process): bool
    {
        $options = $process->getOptions();

        return $this->alertProvider->dismissAlert($options['id']);
    }
}
