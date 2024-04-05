<?php

namespace ContainerGRi2xj9;

use Symfony\Component\DependencyInjection\Argument\RewindableGenerator;
use Symfony\Component\DependencyInjection\Exception\RuntimeException;

/*
 * @internal This class has been auto-generated by the Symfony Dependency Injection Component.
 */
class getAccountsNewByMonthService extends App_KernelProdContainer
{
    /*
     * Gets the private 'App\Module\Accounts\Statistics\Series\AccountsNewByMonth' shared autowired service.
     *
     * @return \App\Module\Accounts\Statistics\Series\AccountsNewByMonth
     */
    public static function do($container, $lazyLoad = true)
    {
        include_once \dirname(__DIR__, 3).'/core/backend/Statistics/Service/StatisticsProviderInterface.php';
        include_once \dirname(__DIR__, 3).'/core/backend/Statistics/StatisticsHandlingTrait.php';
        include_once \dirname(__DIR__, 3).'/core/modules/Accounts/Statistics/Series/AccountsNewByMonth.php';

        return $container->privates['App\\Module\\Accounts\\Statistics\\Series\\AccountsNewByMonth'] = new \App\Module\Accounts\Statistics\Series\AccountsNewByMonth(\dirname(__DIR__, 3), (\dirname(__DIR__, 3).'/public/legacy'), 'LEGACYSESSID', 'PHPSESSID', ($container->privates['App\\Engine\\LegacyHandler\\LegacyScopeState'] ?? ($container->privates['App\\Engine\\LegacyHandler\\LegacyScopeState'] = new \App\Engine\LegacyHandler\LegacyScopeState())), ($container->privates['App\\Data\\LegacyHandler\\ListDataQueryHandler'] ?? $container->load('getListDataQueryHandlerService')), ($container->privates['App\\Module\\LegacyHandler\\ModuleNameMapperHandler'] ?? $container->getModuleNameMapperHandlerService()), ($container->services['session'] ?? $container->getSessionService()));
    }
}
