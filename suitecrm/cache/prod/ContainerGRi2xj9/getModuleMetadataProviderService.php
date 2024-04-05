<?php

namespace ContainerGRi2xj9;

use Symfony\Component\DependencyInjection\Argument\RewindableGenerator;
use Symfony\Component\DependencyInjection\Exception\RuntimeException;

/*
 * @internal This class has been auto-generated by the Symfony Dependency Injection Component.
 */
class getModuleMetadataProviderService extends App_KernelProdContainer
{
    /*
     * Gets the private 'App\Metadata\Service\ModuleMetadataProvider' shared autowired service.
     *
     * @return \App\Metadata\Service\ModuleMetadataProvider
     */
    public static function do($container, $lazyLoad = true)
    {
        include_once \dirname(__DIR__, 3).'/core/backend/Metadata/Service/ModuleMetadataProviderInterface.php';
        include_once \dirname(__DIR__, 3).'/core/backend/Metadata/Service/ModuleMetadataProvider.php';
        include_once \dirname(__DIR__, 3).'/core/backend/Module/LegacyHandler/RecentlyViewed/RecentlyViewedHandler.php';

        $a = ($container->privates['App\\Module\\LegacyHandler\\ModuleNameMapperHandler'] ?? $container->getModuleNameMapperHandlerService());

        return $container->privates['App\\Metadata\\Service\\ModuleMetadataProvider'] = new \App\Metadata\Service\ModuleMetadataProvider($a, ($container->privates['App\\ViewDefinitions\\LegacyHandler\\ViewDefinitionsHandler'] ?? $container->load('getViewDefinitionsHandlerService')), new \App\Module\LegacyHandler\RecentlyViewed\RecentlyViewedHandler(\dirname(__DIR__, 3), (\dirname(__DIR__, 3).'/public/legacy'), 'LEGACYSESSID', 'PHPSESSID', ($container->privates['App\\Engine\\LegacyHandler\\LegacyScopeState'] ?? ($container->privates['App\\Engine\\LegacyHandler\\LegacyScopeState'] = new \App\Engine\LegacyHandler\LegacyScopeState())), ($container->services['session'] ?? $container->getSessionService()), $a), ($container->privates['App\\Module\\LegacyHandler\\Favorites\\FavoritesHandler'] ?? $container->load('getFavoritesHandlerService')), ($container->services['cache.app'] ?? $container->load('getCache_AppService')));
    }
}
