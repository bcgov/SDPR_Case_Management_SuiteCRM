<?php
/**
 *
 * SugarCRM Community Edition is a customer relationship management program developed by
 * SugarCRM, Inc. Copyright (C) 2004-2013 SugarCRM Inc.
 *
 * SuiteCRM is an extension to SugarCRM Community Edition developed by SalesAgility Ltd.
 * Copyright (C) 2011 - 2018 SalesAgility Ltd.
 *
 * This program is free software; you can redistribute it and/or modify it under
 * the terms of the GNU Affero General Public License version 3 as published by the
 * Free Software Foundation with the addition of the following permission added
 * to Section 15 as permitted in Section 7(a): FOR ANY PART OF THE COVERED WORK
 * IN WHICH THE COPYRIGHT IS OWNED BY SUGARCRM, SUGARCRM DISCLAIMS THE WARRANTY
 * OF NON INFRINGEMENT OF THIRD PARTY RIGHTS.
 *
 * This program is distributed in the hope that it will be useful, but WITHOUT
 * ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS
 * FOR A PARTICULAR PURPOSE. See the GNU Affero General Public License for more
 * details.
 *
 * You should have received a copy of the GNU Affero General Public License along with
 * this program; if not, see http://www.gnu.org/licenses or write to the Free
 * Software Foundation, Inc., 51 Franklin Street, Fifth Floor, Boston, MA
 * 02110-1301 USA.
 *
 * You can contact SugarCRM, Inc. headquarters at 10050 North Wolfe Road,
 * SW2-130, Cupertino, CA 95014, USA. or at email address contact@sugarcrm.com.
 *
 * The interactive user interfaces in modified source and object code versions
 * of this program must display Appropriate Legal Notices, as required under
 * Section 5 of the GNU Affero General Public License version 3.
 *
 * In accordance with Section 7(b) of the GNU Affero General Public License version 3,
 * these Appropriate Legal Notices must retain the display of the "Powered by
 * SugarCRM" logo and "Supercharged by SuiteCRM" logo. If the display of the logos is not
 * reasonably feasible for technical reasons, the Appropriate Legal Notices must
 * display the words "Powered by SugarCRM" and "Supercharged by SuiteCRM".
 */


require_once('include/SugarCache/SugarCacheAbstract.php');

/**
 * Redis SugarCache backend, using the PHP Redis C library at http://github.com/nicolasff/phpredis
 */
class SugarCacheRedis extends SugarCacheAbstract
{
    /**
     * @var Redis server name string
     */
    protected $_host = 'localhost';
    
    /**
     * @var Redis server port int
     */
    protected $_port = 6379;
    
    /**
     * @var Redis password string
     */
    protected $_password = '';
    
    /**
     * @var Redis database number int
     */
    protected $_database = 0;
    
    /**
     * @var Redis object
     */
    protected $_redis = null;
    
    /**
     * @see SugarCacheAbstract::$_priority
     */
    protected $_priority = 920;
    
    /**
     * @see SugarCacheAbstract::useBackend()
     */
    public function useBackend()
    {
        if (!parent::useBackend()) {
            return false;
        }
        
        if (extension_loaded("redis")
                && empty($GLOBALS['sugar_config']['external_cache_disabled_redis'])
                && $this->_getRedisObject()) {
            return true;
        }
            
        return false;
    }
    
    /**
     * @see SugarCacheAbstract::__construct()
     */
    public function __construct()
    {
        parent::__construct();
    }
    
 protected function _getRedisObject()
 {
     try {
         if (!($this->_redis instanceof Redis) || !$this->_redis->ping()) {
             $this->_redis = new Redis();
             $this->_host = SugarConfig::getInstance()->get('external_cache.redis.host', $this->_host);
             $this->_port = SugarConfig::getInstance()->get('external_cache.redis.port', $this->_port);
             $this->_password = SugarConfig::getInstance()->get('external_cache.redis.password', $this->_password);
             $this->_database = SugarConfig::getInstance()->get('external_cache.redis.database', $this->_database);
             
             if (!$this->_redis->connect($this->_host, $this->_port)) {
                 return false;
             }
             
             // Authenticate if a password is set
             if (!empty($this->_password)) {
                 if (!$this->_redis->auth($this->_password)) {
                     $GLOBALS['log']->error('Redis authentication failed');
                     return false;
                 }
             }
             
             // Select the specified database
             if (!$this->_redis->select($this->_database)) {
                 $GLOBALS['log']->error('Redis database selection failed');
                 return false;
             }
         }
     } catch (RedisException $e) {
         $GLOBALS['log']->error('Redis connection error: ' . $e->getMessage());
         return false;
     }
     
     return $this->_redis;
 }
    
   /**
    * @see SugarCacheAbstract::_getExternal()
    */
   protected function _getExternal($key)
   {
       $redis = $this->_getRedisObject();
       if (!$redis) {
           $GLOBALS['log']->error('Redis: Failed to get Redis object in _getExternal');
           return null;
       }
       
       try {
           $key = $this->_fixKeyName($key);
           $returnValue = $redis->get($key);
           
           if ($returnValue === false) {
               $GLOBALS['log']->debug("Redis: Cache miss for key '$key'");
               return null;
           }
           
           if (is_string($returnValue)) {
               $unserializedValue = @unserialize($returnValue);
               if ($unserializedValue === false && $returnValue !== 'b:0;') {
                   $GLOBALS['log']->error("Redis: Failed to unserialize value for key '$key'");
                   return null;
               }
               return $unserializedValue;
           }
           
           return $returnValue;
       } catch (Exception $e) {
           $GLOBALS['log']->error('Redis: Exception in _getExternal: ' . $e->getMessage());
           return null;
       }
   }
   
   /**
    * @see SugarCacheAbstract::_setExternal()
    */
   protected function _setExternal($key, $value)
   {
       $redis = $this->_getRedisObject();
       if (!$redis) {
           $GLOBALS['log']->error('Redis: Failed to get Redis object in _setExternal');
           return;
       }
       
       try {
           $value = serialize($value);
           $key = $this->_fixKeyName($key);
           
           $setResult = $redis->set($key, $value);
           if (!$setResult) {
               $GLOBALS['log']->error("Redis: Failed to set key '$key'");
               return;
           }
           
           $expireResult = $redis->expire($key, $this->_expireTimeout);
           if (!$expireResult) {
               $GLOBALS['log']->error("Redis: Failed to set expiry for key '$key'");
           }
           
           $GLOBALS['log']->debug("Redis: Successfully stored key '$key' with expiry {$this->_expireTimeout}");
       } catch (Exception $e) {
           $GLOBALS['log']->error('Redis: Exception in _setExternal: ' . $e->getMessage());
       }
   }
   
   /**
    * @see SugarCacheAbstract::_clearExternal()
    */
   protected function _clearExternal($key)
   {
       $redis = $this->_getRedisObject();
       if (!$redis) {
           return;
       }
       
       $key = $this->_fixKeyName($key);
       $redis->del($key);
   }
   
   /**
    * @see SugarCacheAbstract::_resetExternal()
    */
   protected function _resetExternal()
   {
       $redis = $this->_getRedisObject();
       if (!$redis) {
           return;
       }
       
       $redis->flushAll();
   }
    
    /**
     * Fixed the key naming used so we don't have any spaces
     *
     * @param  string $key
     * @return string fixed key name
     */
    protected function _fixKeyName($key)
    {
        return str_replace(' ', '_', $key);
    }
}
