<?php

namespace ContainerGRi2xj9;

include_once \dirname(__DIR__, 3).'/vendor/doctrine/persistence/src/Persistence/ObjectManager.php';
include_once \dirname(__DIR__, 3).'/vendor/doctrine/orm/lib/Doctrine/ORM/EntityManagerInterface.php';
include_once \dirname(__DIR__, 3).'/vendor/doctrine/orm/lib/Doctrine/ORM/EntityManager.php';
class EntityManager_9a5be93 extends \Doctrine\ORM\EntityManager implements \ProxyManager\Proxy\VirtualProxyInterface
{
    private $valueHolderd05b6 = null;
    private $initializer23994 = null;
    private static $publicProperties429de = [
        
    ];
    public function getConnection()
    {
        $this->initializer23994 && ($this->initializer23994->__invoke($valueHolderd05b6, $this, 'getConnection', array(), $this->initializer23994) || 1) && $this->valueHolderd05b6 = $valueHolderd05b6;
        return $this->valueHolderd05b6->getConnection();
    }
    public function getMetadataFactory()
    {
        $this->initializer23994 && ($this->initializer23994->__invoke($valueHolderd05b6, $this, 'getMetadataFactory', array(), $this->initializer23994) || 1) && $this->valueHolderd05b6 = $valueHolderd05b6;
        return $this->valueHolderd05b6->getMetadataFactory();
    }
    public function getExpressionBuilder()
    {
        $this->initializer23994 && ($this->initializer23994->__invoke($valueHolderd05b6, $this, 'getExpressionBuilder', array(), $this->initializer23994) || 1) && $this->valueHolderd05b6 = $valueHolderd05b6;
        return $this->valueHolderd05b6->getExpressionBuilder();
    }
    public function beginTransaction()
    {
        $this->initializer23994 && ($this->initializer23994->__invoke($valueHolderd05b6, $this, 'beginTransaction', array(), $this->initializer23994) || 1) && $this->valueHolderd05b6 = $valueHolderd05b6;
        return $this->valueHolderd05b6->beginTransaction();
    }
    public function getCache()
    {
        $this->initializer23994 && ($this->initializer23994->__invoke($valueHolderd05b6, $this, 'getCache', array(), $this->initializer23994) || 1) && $this->valueHolderd05b6 = $valueHolderd05b6;
        return $this->valueHolderd05b6->getCache();
    }
    public function transactional($func)
    {
        $this->initializer23994 && ($this->initializer23994->__invoke($valueHolderd05b6, $this, 'transactional', array('func' => $func), $this->initializer23994) || 1) && $this->valueHolderd05b6 = $valueHolderd05b6;
        return $this->valueHolderd05b6->transactional($func);
    }
    public function wrapInTransaction(callable $func)
    {
        $this->initializer23994 && ($this->initializer23994->__invoke($valueHolderd05b6, $this, 'wrapInTransaction', array('func' => $func), $this->initializer23994) || 1) && $this->valueHolderd05b6 = $valueHolderd05b6;
        return $this->valueHolderd05b6->wrapInTransaction($func);
    }
    public function commit()
    {
        $this->initializer23994 && ($this->initializer23994->__invoke($valueHolderd05b6, $this, 'commit', array(), $this->initializer23994) || 1) && $this->valueHolderd05b6 = $valueHolderd05b6;
        return $this->valueHolderd05b6->commit();
    }
    public function rollback()
    {
        $this->initializer23994 && ($this->initializer23994->__invoke($valueHolderd05b6, $this, 'rollback', array(), $this->initializer23994) || 1) && $this->valueHolderd05b6 = $valueHolderd05b6;
        return $this->valueHolderd05b6->rollback();
    }
    public function getClassMetadata($className)
    {
        $this->initializer23994 && ($this->initializer23994->__invoke($valueHolderd05b6, $this, 'getClassMetadata', array('className' => $className), $this->initializer23994) || 1) && $this->valueHolderd05b6 = $valueHolderd05b6;
        return $this->valueHolderd05b6->getClassMetadata($className);
    }
    public function createQuery($dql = '')
    {
        $this->initializer23994 && ($this->initializer23994->__invoke($valueHolderd05b6, $this, 'createQuery', array('dql' => $dql), $this->initializer23994) || 1) && $this->valueHolderd05b6 = $valueHolderd05b6;
        return $this->valueHolderd05b6->createQuery($dql);
    }
    public function createNamedQuery($name)
    {
        $this->initializer23994 && ($this->initializer23994->__invoke($valueHolderd05b6, $this, 'createNamedQuery', array('name' => $name), $this->initializer23994) || 1) && $this->valueHolderd05b6 = $valueHolderd05b6;
        return $this->valueHolderd05b6->createNamedQuery($name);
    }
    public function createNativeQuery($sql, \Doctrine\ORM\Query\ResultSetMapping $rsm)
    {
        $this->initializer23994 && ($this->initializer23994->__invoke($valueHolderd05b6, $this, 'createNativeQuery', array('sql' => $sql, 'rsm' => $rsm), $this->initializer23994) || 1) && $this->valueHolderd05b6 = $valueHolderd05b6;
        return $this->valueHolderd05b6->createNativeQuery($sql, $rsm);
    }
    public function createNamedNativeQuery($name)
    {
        $this->initializer23994 && ($this->initializer23994->__invoke($valueHolderd05b6, $this, 'createNamedNativeQuery', array('name' => $name), $this->initializer23994) || 1) && $this->valueHolderd05b6 = $valueHolderd05b6;
        return $this->valueHolderd05b6->createNamedNativeQuery($name);
    }
    public function createQueryBuilder()
    {
        $this->initializer23994 && ($this->initializer23994->__invoke($valueHolderd05b6, $this, 'createQueryBuilder', array(), $this->initializer23994) || 1) && $this->valueHolderd05b6 = $valueHolderd05b6;
        return $this->valueHolderd05b6->createQueryBuilder();
    }
    public function flush($entity = null)
    {
        $this->initializer23994 && ($this->initializer23994->__invoke($valueHolderd05b6, $this, 'flush', array('entity' => $entity), $this->initializer23994) || 1) && $this->valueHolderd05b6 = $valueHolderd05b6;
        return $this->valueHolderd05b6->flush($entity);
    }
    public function find($className, $id, $lockMode = null, $lockVersion = null)
    {
        $this->initializer23994 && ($this->initializer23994->__invoke($valueHolderd05b6, $this, 'find', array('className' => $className, 'id' => $id, 'lockMode' => $lockMode, 'lockVersion' => $lockVersion), $this->initializer23994) || 1) && $this->valueHolderd05b6 = $valueHolderd05b6;
        return $this->valueHolderd05b6->find($className, $id, $lockMode, $lockVersion);
    }
    public function getReference($entityName, $id)
    {
        $this->initializer23994 && ($this->initializer23994->__invoke($valueHolderd05b6, $this, 'getReference', array('entityName' => $entityName, 'id' => $id), $this->initializer23994) || 1) && $this->valueHolderd05b6 = $valueHolderd05b6;
        return $this->valueHolderd05b6->getReference($entityName, $id);
    }
    public function getPartialReference($entityName, $identifier)
    {
        $this->initializer23994 && ($this->initializer23994->__invoke($valueHolderd05b6, $this, 'getPartialReference', array('entityName' => $entityName, 'identifier' => $identifier), $this->initializer23994) || 1) && $this->valueHolderd05b6 = $valueHolderd05b6;
        return $this->valueHolderd05b6->getPartialReference($entityName, $identifier);
    }
    public function clear($entityName = null)
    {
        $this->initializer23994 && ($this->initializer23994->__invoke($valueHolderd05b6, $this, 'clear', array('entityName' => $entityName), $this->initializer23994) || 1) && $this->valueHolderd05b6 = $valueHolderd05b6;
        return $this->valueHolderd05b6->clear($entityName);
    }
    public function close()
    {
        $this->initializer23994 && ($this->initializer23994->__invoke($valueHolderd05b6, $this, 'close', array(), $this->initializer23994) || 1) && $this->valueHolderd05b6 = $valueHolderd05b6;
        return $this->valueHolderd05b6->close();
    }
    public function persist($entity)
    {
        $this->initializer23994 && ($this->initializer23994->__invoke($valueHolderd05b6, $this, 'persist', array('entity' => $entity), $this->initializer23994) || 1) && $this->valueHolderd05b6 = $valueHolderd05b6;
        return $this->valueHolderd05b6->persist($entity);
    }
    public function remove($entity)
    {
        $this->initializer23994 && ($this->initializer23994->__invoke($valueHolderd05b6, $this, 'remove', array('entity' => $entity), $this->initializer23994) || 1) && $this->valueHolderd05b6 = $valueHolderd05b6;
        return $this->valueHolderd05b6->remove($entity);
    }
    public function refresh($entity)
    {
        $this->initializer23994 && ($this->initializer23994->__invoke($valueHolderd05b6, $this, 'refresh', array('entity' => $entity), $this->initializer23994) || 1) && $this->valueHolderd05b6 = $valueHolderd05b6;
        return $this->valueHolderd05b6->refresh($entity);
    }
    public function detach($entity)
    {
        $this->initializer23994 && ($this->initializer23994->__invoke($valueHolderd05b6, $this, 'detach', array('entity' => $entity), $this->initializer23994) || 1) && $this->valueHolderd05b6 = $valueHolderd05b6;
        return $this->valueHolderd05b6->detach($entity);
    }
    public function merge($entity)
    {
        $this->initializer23994 && ($this->initializer23994->__invoke($valueHolderd05b6, $this, 'merge', array('entity' => $entity), $this->initializer23994) || 1) && $this->valueHolderd05b6 = $valueHolderd05b6;
        return $this->valueHolderd05b6->merge($entity);
    }
    public function copy($entity, $deep = false)
    {
        $this->initializer23994 && ($this->initializer23994->__invoke($valueHolderd05b6, $this, 'copy', array('entity' => $entity, 'deep' => $deep), $this->initializer23994) || 1) && $this->valueHolderd05b6 = $valueHolderd05b6;
        return $this->valueHolderd05b6->copy($entity, $deep);
    }
    public function lock($entity, $lockMode, $lockVersion = null)
    {
        $this->initializer23994 && ($this->initializer23994->__invoke($valueHolderd05b6, $this, 'lock', array('entity' => $entity, 'lockMode' => $lockMode, 'lockVersion' => $lockVersion), $this->initializer23994) || 1) && $this->valueHolderd05b6 = $valueHolderd05b6;
        return $this->valueHolderd05b6->lock($entity, $lockMode, $lockVersion);
    }
    public function getRepository($entityName)
    {
        $this->initializer23994 && ($this->initializer23994->__invoke($valueHolderd05b6, $this, 'getRepository', array('entityName' => $entityName), $this->initializer23994) || 1) && $this->valueHolderd05b6 = $valueHolderd05b6;
        return $this->valueHolderd05b6->getRepository($entityName);
    }
    public function contains($entity)
    {
        $this->initializer23994 && ($this->initializer23994->__invoke($valueHolderd05b6, $this, 'contains', array('entity' => $entity), $this->initializer23994) || 1) && $this->valueHolderd05b6 = $valueHolderd05b6;
        return $this->valueHolderd05b6->contains($entity);
    }
    public function getEventManager()
    {
        $this->initializer23994 && ($this->initializer23994->__invoke($valueHolderd05b6, $this, 'getEventManager', array(), $this->initializer23994) || 1) && $this->valueHolderd05b6 = $valueHolderd05b6;
        return $this->valueHolderd05b6->getEventManager();
    }
    public function getConfiguration()
    {
        $this->initializer23994 && ($this->initializer23994->__invoke($valueHolderd05b6, $this, 'getConfiguration', array(), $this->initializer23994) || 1) && $this->valueHolderd05b6 = $valueHolderd05b6;
        return $this->valueHolderd05b6->getConfiguration();
    }
    public function isOpen()
    {
        $this->initializer23994 && ($this->initializer23994->__invoke($valueHolderd05b6, $this, 'isOpen', array(), $this->initializer23994) || 1) && $this->valueHolderd05b6 = $valueHolderd05b6;
        return $this->valueHolderd05b6->isOpen();
    }
    public function getUnitOfWork()
    {
        $this->initializer23994 && ($this->initializer23994->__invoke($valueHolderd05b6, $this, 'getUnitOfWork', array(), $this->initializer23994) || 1) && $this->valueHolderd05b6 = $valueHolderd05b6;
        return $this->valueHolderd05b6->getUnitOfWork();
    }
    public function getHydrator($hydrationMode)
    {
        $this->initializer23994 && ($this->initializer23994->__invoke($valueHolderd05b6, $this, 'getHydrator', array('hydrationMode' => $hydrationMode), $this->initializer23994) || 1) && $this->valueHolderd05b6 = $valueHolderd05b6;
        return $this->valueHolderd05b6->getHydrator($hydrationMode);
    }
    public function newHydrator($hydrationMode)
    {
        $this->initializer23994 && ($this->initializer23994->__invoke($valueHolderd05b6, $this, 'newHydrator', array('hydrationMode' => $hydrationMode), $this->initializer23994) || 1) && $this->valueHolderd05b6 = $valueHolderd05b6;
        return $this->valueHolderd05b6->newHydrator($hydrationMode);
    }
    public function getProxyFactory()
    {
        $this->initializer23994 && ($this->initializer23994->__invoke($valueHolderd05b6, $this, 'getProxyFactory', array(), $this->initializer23994) || 1) && $this->valueHolderd05b6 = $valueHolderd05b6;
        return $this->valueHolderd05b6->getProxyFactory();
    }
    public function initializeObject($obj)
    {
        $this->initializer23994 && ($this->initializer23994->__invoke($valueHolderd05b6, $this, 'initializeObject', array('obj' => $obj), $this->initializer23994) || 1) && $this->valueHolderd05b6 = $valueHolderd05b6;
        return $this->valueHolderd05b6->initializeObject($obj);
    }
    public function getFilters()
    {
        $this->initializer23994 && ($this->initializer23994->__invoke($valueHolderd05b6, $this, 'getFilters', array(), $this->initializer23994) || 1) && $this->valueHolderd05b6 = $valueHolderd05b6;
        return $this->valueHolderd05b6->getFilters();
    }
    public function isFiltersStateClean()
    {
        $this->initializer23994 && ($this->initializer23994->__invoke($valueHolderd05b6, $this, 'isFiltersStateClean', array(), $this->initializer23994) || 1) && $this->valueHolderd05b6 = $valueHolderd05b6;
        return $this->valueHolderd05b6->isFiltersStateClean();
    }
    public function hasFilters()
    {
        $this->initializer23994 && ($this->initializer23994->__invoke($valueHolderd05b6, $this, 'hasFilters', array(), $this->initializer23994) || 1) && $this->valueHolderd05b6 = $valueHolderd05b6;
        return $this->valueHolderd05b6->hasFilters();
    }
    public static function staticProxyConstructor($initializer)
    {
        static $reflection;
        $reflection = $reflection ?? new \ReflectionClass(__CLASS__);
        $instance   = $reflection->newInstanceWithoutConstructor();
        \Closure::bind(function (\Doctrine\ORM\EntityManager $instance) {
            unset($instance->config, $instance->conn, $instance->metadataFactory, $instance->unitOfWork, $instance->eventManager, $instance->proxyFactory, $instance->repositoryFactory, $instance->expressionBuilder, $instance->closed, $instance->filterCollection, $instance->cache);
        }, $instance, 'Doctrine\\ORM\\EntityManager')->__invoke($instance);
        $instance->initializer23994 = $initializer;
        return $instance;
    }
    protected function __construct(\Doctrine\DBAL\Connection $conn, \Doctrine\ORM\Configuration $config, \Doctrine\Common\EventManager $eventManager)
    {
        static $reflection;
        if (! $this->valueHolderd05b6) {
            $reflection = $reflection ?? new \ReflectionClass('Doctrine\\ORM\\EntityManager');
            $this->valueHolderd05b6 = $reflection->newInstanceWithoutConstructor();
        \Closure::bind(function (\Doctrine\ORM\EntityManager $instance) {
            unset($instance->config, $instance->conn, $instance->metadataFactory, $instance->unitOfWork, $instance->eventManager, $instance->proxyFactory, $instance->repositoryFactory, $instance->expressionBuilder, $instance->closed, $instance->filterCollection, $instance->cache);
        }, $this, 'Doctrine\\ORM\\EntityManager')->__invoke($this);
        }
        $this->valueHolderd05b6->__construct($conn, $config, $eventManager);
    }
    public function & __get($name)
    {
        $this->initializer23994 && ($this->initializer23994->__invoke($valueHolderd05b6, $this, '__get', ['name' => $name], $this->initializer23994) || 1) && $this->valueHolderd05b6 = $valueHolderd05b6;
        if (isset(self::$publicProperties429de[$name])) {
            return $this->valueHolderd05b6->$name;
        }
        $realInstanceReflection = new \ReflectionClass('Doctrine\\ORM\\EntityManager');
        if (! $realInstanceReflection->hasProperty($name)) {
            $targetObject = $this->valueHolderd05b6;
            $backtrace = debug_backtrace(false, 1);
            trigger_error(
                sprintf(
                    'Undefined property: %s::$%s in %s on line %s',
                    $realInstanceReflection->getName(),
                    $name,
                    $backtrace[0]['file'],
                    $backtrace[0]['line']
                ),
                \E_USER_NOTICE
            );
            return $targetObject->$name;
        }
        $targetObject = $this->valueHolderd05b6;
        $accessor = function & () use ($targetObject, $name) {
            return $targetObject->$name;
        };
        $backtrace = debug_backtrace(true, 2);
        $scopeObject = isset($backtrace[1]['object']) ? $backtrace[1]['object'] : new \ProxyManager\Stub\EmptyClassStub();
        $accessor = $accessor->bindTo($scopeObject, get_class($scopeObject));
        $returnValue = & $accessor();
        return $returnValue;
    }
    public function __set($name, $value)
    {
        $this->initializer23994 && ($this->initializer23994->__invoke($valueHolderd05b6, $this, '__set', array('name' => $name, 'value' => $value), $this->initializer23994) || 1) && $this->valueHolderd05b6 = $valueHolderd05b6;
        $realInstanceReflection = new \ReflectionClass('Doctrine\\ORM\\EntityManager');
        if (! $realInstanceReflection->hasProperty($name)) {
            $targetObject = $this->valueHolderd05b6;
            $targetObject->$name = $value;
            return $targetObject->$name;
        }
        $targetObject = $this->valueHolderd05b6;
        $accessor = function & () use ($targetObject, $name, $value) {
            $targetObject->$name = $value;
            return $targetObject->$name;
        };
        $backtrace = debug_backtrace(true, 2);
        $scopeObject = isset($backtrace[1]['object']) ? $backtrace[1]['object'] : new \ProxyManager\Stub\EmptyClassStub();
        $accessor = $accessor->bindTo($scopeObject, get_class($scopeObject));
        $returnValue = & $accessor();
        return $returnValue;
    }
    public function __isset($name)
    {
        $this->initializer23994 && ($this->initializer23994->__invoke($valueHolderd05b6, $this, '__isset', array('name' => $name), $this->initializer23994) || 1) && $this->valueHolderd05b6 = $valueHolderd05b6;
        $realInstanceReflection = new \ReflectionClass('Doctrine\\ORM\\EntityManager');
        if (! $realInstanceReflection->hasProperty($name)) {
            $targetObject = $this->valueHolderd05b6;
            return isset($targetObject->$name);
        }
        $targetObject = $this->valueHolderd05b6;
        $accessor = function () use ($targetObject, $name) {
            return isset($targetObject->$name);
        };
        $backtrace = debug_backtrace(true, 2);
        $scopeObject = isset($backtrace[1]['object']) ? $backtrace[1]['object'] : new \ProxyManager\Stub\EmptyClassStub();
        $accessor = $accessor->bindTo($scopeObject, get_class($scopeObject));
        $returnValue = $accessor();
        return $returnValue;
    }
    public function __unset($name)
    {
        $this->initializer23994 && ($this->initializer23994->__invoke($valueHolderd05b6, $this, '__unset', array('name' => $name), $this->initializer23994) || 1) && $this->valueHolderd05b6 = $valueHolderd05b6;
        $realInstanceReflection = new \ReflectionClass('Doctrine\\ORM\\EntityManager');
        if (! $realInstanceReflection->hasProperty($name)) {
            $targetObject = $this->valueHolderd05b6;
            unset($targetObject->$name);
            return;
        }
        $targetObject = $this->valueHolderd05b6;
        $accessor = function () use ($targetObject, $name) {
            unset($targetObject->$name);
            return;
        };
        $backtrace = debug_backtrace(true, 2);
        $scopeObject = isset($backtrace[1]['object']) ? $backtrace[1]['object'] : new \ProxyManager\Stub\EmptyClassStub();
        $accessor = $accessor->bindTo($scopeObject, get_class($scopeObject));
        $accessor();
    }
    public function __clone()
    {
        $this->initializer23994 && ($this->initializer23994->__invoke($valueHolderd05b6, $this, '__clone', array(), $this->initializer23994) || 1) && $this->valueHolderd05b6 = $valueHolderd05b6;
        $this->valueHolderd05b6 = clone $this->valueHolderd05b6;
    }
    public function __sleep()
    {
        $this->initializer23994 && ($this->initializer23994->__invoke($valueHolderd05b6, $this, '__sleep', array(), $this->initializer23994) || 1) && $this->valueHolderd05b6 = $valueHolderd05b6;
        return array('valueHolderd05b6');
    }
    public function __wakeup()
    {
        \Closure::bind(function (\Doctrine\ORM\EntityManager $instance) {
            unset($instance->config, $instance->conn, $instance->metadataFactory, $instance->unitOfWork, $instance->eventManager, $instance->proxyFactory, $instance->repositoryFactory, $instance->expressionBuilder, $instance->closed, $instance->filterCollection, $instance->cache);
        }, $this, 'Doctrine\\ORM\\EntityManager')->__invoke($this);
    }
    public function setProxyInitializer(\Closure $initializer = null) : void
    {
        $this->initializer23994 = $initializer;
    }
    public function getProxyInitializer() : ?\Closure
    {
        return $this->initializer23994;
    }
    public function initializeProxy() : bool
    {
        return $this->initializer23994 && ($this->initializer23994->__invoke($valueHolderd05b6, $this, 'initializeProxy', array(), $this->initializer23994) || 1) && $this->valueHolderd05b6 = $valueHolderd05b6;
    }
    public function isProxyInitialized() : bool
    {
        return null !== $this->valueHolderd05b6;
    }
    public function getWrappedValueHolderValue()
    {
        return $this->valueHolderd05b6;
    }
}

if (!\class_exists('EntityManager_9a5be93', false)) {
    \class_alias(__NAMESPACE__.'\\EntityManager_9a5be93', 'EntityManager_9a5be93', false);
}
