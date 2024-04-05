<?php
/* Smarty version 4.3.2, created on 2024-03-13 03:10:20
  from '/suitecrm/public/legacy/include/SugarFields/Fields/Relate/DetailView.tpl' */

/* @var Smarty_Internal_Template $_smarty_tpl */
if ($_smarty_tpl->_decodeProperties($_smarty_tpl, array (
  'version' => '4.3.2',
  'unifunc' => 'content_65f1191cac0c77_72314134',
  'has_nocache_code' => false,
  'file_dependency' => 
  array (
    'fa69e45a3d1bde0525771d17c70b194dcf97af38' => 
    array (
      0 => '/suitecrm/public/legacy/include/SugarFields/Fields/Relate/DetailView.tpl',
      1 => 1710132775,
      2 => 'file',
    ),
  ),
  'includes' => 
  array (
  ),
),false)) {
function content_65f1191cac0c77_72314134 (Smarty_Internal_Template $_smarty_tpl) {
$_smarty_tpl->_checkPlugins(array(0=>array('file'=>'/suitecrm/public/legacy/include/Smarty/plugins/function.sugarvar.php','function'=>'smarty_function_sugarvar',),1=>array('file'=>'/suitecrm/public/legacy/include/Smarty/plugins/function.sugarvar_connector.php','function'=>'smarty_function_sugarvar_connector',),));
?>
{*
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

*}
<?php if (!$_smarty_tpl->tpl_vars['nolink']->value && !empty($_smarty_tpl->tpl_vars['vardef']->value['id_name'])) {?> 
{if !empty(<?php echo smarty_function_sugarvar(array('memberName'=>'vardef.id_name','key'=>'value','string'=>'true'),$_smarty_tpl);?>
)}
{capture assign="detail_url"}index.php?module=<?php echo $_smarty_tpl->tpl_vars['vardef']->value['module'];?>
&action=DetailView&record=<?php echo smarty_function_sugarvar(array('memberName'=>'vardef.id_name','key'=>'value'),$_smarty_tpl);?>
{/capture}
<a href="{sugar_ajax_url url=$detail_url}">{/if}
<?php }?>
<span id="<?php echo $_smarty_tpl->tpl_vars['vardef']->value['id_name'];?>
" class="sugar_field" data-id-value="<?php echo smarty_function_sugarvar(array('memberName'=>'vardef.id_name','key'=>'value'),$_smarty_tpl);?>
"><?php echo smarty_function_sugarvar(array('key'=>'value'),$_smarty_tpl);?>
</span>
<?php if (!$_smarty_tpl->tpl_vars['nolink']->value && !empty($_smarty_tpl->tpl_vars['vardef']->value['id_name'])) {?>
{if !empty(<?php echo smarty_function_sugarvar(array('memberName'=>'vardef.id_name','key'=>'value','string'=>'true'),$_smarty_tpl);?>
)}</a>{/if}
<?php }
if (!empty($_smarty_tpl->tpl_vars['displayParams']->value['enableConnectors']) && !empty($_smarty_tpl->tpl_vars['vardef']->value['id_name'])) {?>
{if !empty(<?php echo smarty_function_sugarvar(array('memberName'=>'vardef.id_name','key'=>'value','string'=>'true'),$_smarty_tpl);?>
)}
<?php echo smarty_function_sugarvar_connector(array('view'=>'DetailView'),$_smarty_tpl);?>
 
{/if}
<?php }
}
}
