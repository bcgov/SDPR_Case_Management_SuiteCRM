<?php

// This file has been auto-generated by the Symfony Dependency Injection Component for internal use.

if (\class_exists(\ContainerGRi2xj9\App_KernelProdContainer::class, false)) {
    // no-op
} elseif (!include __DIR__.'/ContainerGRi2xj9/App_KernelProdContainer.php') {
    touch(__DIR__.'/ContainerGRi2xj9.legacy');

    return;
}

if (!\class_exists(App_KernelProdContainer::class, false)) {
    \class_alias(\ContainerGRi2xj9\App_KernelProdContainer::class, App_KernelProdContainer::class, false);
}

return new \ContainerGRi2xj9\App_KernelProdContainer([
    'container.build_hash' => 'GRi2xj9',
    'container.build_id' => '071c2bf8',
    'container.build_time' => 1712010555,
], __DIR__.\DIRECTORY_SEPARATOR.'ContainerGRi2xj9');
