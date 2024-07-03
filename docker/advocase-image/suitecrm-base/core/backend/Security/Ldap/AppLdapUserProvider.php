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

namespace App\Security\Ldap;

use App\Authentication\LegacyHandler\UserHandler;
use Symfony\Component\Ldap\Security\LdapUser;
use Symfony\Component\Security\Core\Exception\InvalidArgumentException;
use Symfony\Component\Security\Core\Exception\UsernameNotFoundException;
use Symfony\Component\Security\Core\User\PasswordUpgraderInterface;
use Symfony\Component\Security\Core\User\UserInterface;
use Symfony\Component\Security\Core\User\UserProviderInterface;

class AppLdapUserProvider implements UserProviderInterface, PasswordUpgraderInterface
{
    /**
     * @var AppLdapUserProviderProxy
     */
    protected $proxy;

    /**
     * @var UserHandler
     */
    protected $userHandler;

    /**
     * @var array
     */
    protected $ldapAutoCreateExtraFieldsMap;

    /**
     * @param AppLdapUserProviderProxy $proxy
     * @param UserHandler $userHandler
     * @param array|null $ldapAutoCreateExtraFieldsMap
     */
    public function __construct(
        AppLdapUserProviderProxy $proxy,
        UserHandler $userHandler,
        ?array $ldapAutoCreateExtraFieldsMap
    ) {
        $this->proxy = $proxy;
        $this->userHandler = $userHandler;
        $this->ldapAutoCreateExtraFieldsMap = $ldapAutoCreateExtraFieldsMap ?? [];
    }

    /**
     * @inheritDoc
     */
    public function loadUserByUsername(string $username)
    {
        $existsUser = $this->userHandler->userExists($username);

        $ldapUser = $this->getLdapUser($username, $existsUser);
        $entityUser = $this->getEntityUser($existsUser, $username);

        if ($entityUser !== null) {
            return $entityUser;
        }

        if ($ldapUser !== null) {
            return $this->createUser($ldapUser, $username);
        }

        throw new UsernameNotFoundException(sprintf('User "%s" not found.', $username));
    }

    /**
     * @param string $username
     * @param bool $existsUser
     * @return LdapUser|UserInterface|null
     */
    protected function getLdapUser(string $username, bool $existsUser)
    {
        $ldapUser = null;
        try {
            $ldapUser = $this->proxy->getLdapUserProvider()->loadUserByUsername($username);
        } catch (UsernameNotFoundException|InvalidArgumentException $e) {
            if ($existsUser === false) {
                throw $e;
            }
        }

        return $ldapUser;
    }

    /**
     * @param bool $existsUser
     * @param string $username
     * @return mixed|object|UserInterface|null
     */
    protected function getEntityUser(bool $existsUser, string $username)
    {
        $entityUser = null;
        if ($existsUser === true) {
            try {
                $entityUser = $this->proxy->getEntityUserProvider()->loadUserByUsername($username);
            } catch (UsernameNotFoundException $e) {
            }
        }

        return $entityUser;
    }

    /**
     * @param $ldapUser
     * @param string $username
     * @return mixed|object|UserInterface
     */
    protected function createUser($ldapUser, string $username)
    {
        $extraFields = $ldapUser->getExtraFields() ?? [];
        $userInfo = $this->mapExtraFields($extraFields);

        $this->userHandler->createExternalAuthUser($username, $userInfo);

        $entityUser = null;
        try {
            $entityUser = $this->proxy->getEntityUserProvider()->loadUserByUsername($username);
        } catch (UsernameNotFoundException $e) {
        }

        return $entityUser;
    }

    /**
     * @param array $extraFields
     * @return array
     */
    protected function mapExtraFields(array $extraFields): array
    {
        $userInfo = $extraFields;
        if (empty($extraFields) || empty($this->ldapAutoCreateExtraFieldsMap)) {
            return $userInfo;
        }


        $userInfo = [];
        foreach ($this->ldapAutoCreateExtraFieldsMap as $ldapKey => $fieldKey) {
            if (isset($extraFields[$ldapKey])) {
                $userInfo[$fieldKey] = $extraFields[$ldapKey];
            }
        }

        return $userInfo;
    }

    /**
     * @inheritDoc
     */
    public function refreshUser(UserInterface $user)
    {
        return $this->proxy->getEntityUserProvider()->refreshUser($user);
    }

    /**
     * @inheritDoc
     */
    public function supportsClass(string $class): bool
    {
        return $this->proxy->getEntityUserProvider()->supportsClass($class);
    }

    /**
     * @inheritDoc
     */
    public function upgradePassword(UserInterface $user, string $newEncodedPassword): void
    {
        $this->proxy->getEntityUserProvider()->upgradePassword($user, $newEncodedPassword);
    }
}
