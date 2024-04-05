<?php

namespace ContainerGRi2xj9;

use Symfony\Component\DependencyInjection\Argument\RewindableGenerator;
use Symfony\Component\DependencyInjection\Exception\RuntimeException;

/*
 * @internal This class has been auto-generated by the Symfony Dependency Injection Component.
 */
class getStatisticsItemDataProviderService extends App_KernelProdContainer
{
    /*
     * Gets the private 'App\Statistics\DataProvider\StatisticsItemDataProvider' shared autowired service.
     *
     * @return \App\Statistics\DataProvider\StatisticsItemDataProvider
     */
    public static function do($container, $lazyLoad = true)
    {
        include_once \dirname(__DIR__, 3).'/core/backend/Statistics/DataProvider/StatisticsItemDataProvider.php';

        return $container->privates['App\\Statistics\\DataProvider\\StatisticsItemDataProvider'] = new \App\Statistics\DataProvider\StatisticsItemDataProvider(($container->privates['App\\Statistics\\Service\\StatisticsProviderRegistry'] ?? $container->load('getStatisticsProviderRegistryService')));
    }
}
