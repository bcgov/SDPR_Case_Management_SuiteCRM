<?php

namespace ContainerGRi2xj9;

use Symfony\Component\DependencyInjection\Argument\RewindableGenerator;
use Symfony\Component\DependencyInjection\Exception\RuntimeException;

/*
 * @internal This class has been auto-generated by the Symfony Dependency Injection Component.
 */
class getApiPlatform_Pagination_LegacyService extends App_KernelProdContainer
{
    /*
     * Gets the private 'api_platform.pagination.legacy' shared service.
     *
     * @return \ApiPlatform\Core\DataProvider\Pagination
     */
    public static function do($container, $lazyLoad = true)
    {
        include_once \dirname(__DIR__, 3).'/vendor/api-platform/core/src/Core/DataProvider/Pagination.php';

        return $container->privates['api_platform.pagination.legacy'] = new \ApiPlatform\Core\DataProvider\Pagination(($container->privates['api_platform.metadata.resource.metadata_factory.cached'] ?? $container->getApiPlatform_Metadata_Resource_MetadataFactory_CachedService()), $container->parameters['api_platform.collection.pagination'], $container->parameters['api_platform.graphql.collection.pagination']);
    }
}
