<?php

namespace ContainerGRi2xj9;

use Symfony\Component\DependencyInjection\Argument\RewindableGenerator;
use Symfony\Component\DependencyInjection\Exception\RuntimeException;

/*
 * @internal This class has been auto-generated by the Symfony Dependency Injection Component.
 */
class getUpdateFavoriteService extends App_KernelProdContainer
{
    /*
     * Gets the private 'App\Module\LegacyHandler\Favorites\UpdateFavorite' shared autowired service.
     *
     * @return \App\Module\LegacyHandler\Favorites\UpdateFavorite
     */
    public static function do($container, $lazyLoad = true)
    {
        include_once \dirname(__DIR__, 3).'/core/backend/Process/Service/ProcessHandlerInterface.php';
        include_once \dirname(__DIR__, 3).'/core/backend/Module/LegacyHandler/Favorites/UpdateFavorite.php';

        return $container->privates['App\\Module\\LegacyHandler\\Favorites\\UpdateFavorite'] = new \App\Module\LegacyHandler\Favorites\UpdateFavorite(\dirname(__DIR__, 3), (\dirname(__DIR__, 3).'/public/legacy'), 'LEGACYSESSID', 'PHPSESSID', ($container->privates['App\\Engine\\LegacyHandler\\LegacyScopeState'] ?? ($container->privates['App\\Engine\\LegacyHandler\\LegacyScopeState'] = new \App\Engine\LegacyHandler\LegacyScopeState())), ($container->services['session'] ?? $container->getSessionService()), ($container->privates['App\\Module\\LegacyHandler\\ModuleNameMapperHandler'] ?? $container->getModuleNameMapperHandlerService()));
    }
}
