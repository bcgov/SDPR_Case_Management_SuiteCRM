<?php

namespace ContainerGRi2xj9;

use Symfony\Component\DependencyInjection\Argument\RewindableGenerator;
use Symfony\Component\DependencyInjection\Exception\RuntimeException;

/*
 * @internal This class has been auto-generated by the Symfony Dependency Injection Component.
 */
class getUpgradePackageHandlerService extends App_KernelProdContainer
{
    /*
     * Gets the private 'App\Install\Service\Upgrade\UpgradePackageHandler' shared autowired service.
     *
     * @return \App\Install\Service\Upgrade\UpgradePackageHandler
     */
    public static function do($container, $lazyLoad = true)
    {
        include_once \dirname(__DIR__, 3).'/core/backend/Install/Service/Package/PackageHandler.php';
        include_once \dirname(__DIR__, 3).'/core/backend/Install/Service/Upgrade/UpgradePackageHandler.php';
        include_once \dirname(__DIR__, 3).'/core/backend/Engine/Service/FolderSync/FolderSync.php';
        include_once \dirname(__DIR__, 3).'/core/backend/Engine/Service/FolderSync/FolderComparatorInterface.php';
        include_once \dirname(__DIR__, 3).'/core/backend/Engine/Service/FolderSync/FolderComparator.php';

        return $container->privates['App\\Install\\Service\\Upgrade\\UpgradePackageHandler'] = new \App\Install\Service\Upgrade\UpgradePackageHandler(\dirname(__DIR__, 3), (\dirname(__DIR__, 3).'/tmp/package/upgrade'), (\dirname(__DIR__, 3).'/public/legacy'), new \App\Engine\Service\FolderSync\FolderSync(), new \App\Engine\Service\FolderSync\FolderComparator(), ($container->services['monolog.logger.upgrade'] ?? $container->load('getMonolog_Logger_UpgradeService')), $container->parameters['upgrades']);
    }
}
