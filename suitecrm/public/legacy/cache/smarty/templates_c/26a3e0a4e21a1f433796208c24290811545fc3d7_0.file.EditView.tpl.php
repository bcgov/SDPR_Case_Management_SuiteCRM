<?php
/* Smarty version 4.3.2, created on 2024-03-13 03:09:43
  from '/suitecrm/public/legacy/include/SugarFields/Fields/Relate/EditView.tpl' */

/* @var Smarty_Internal_Template $_smarty_tpl */
if ($_smarty_tpl->_decodeProperties($_smarty_tpl, array (
  'version' => '4.3.2',
  'unifunc' => 'content_65f118f72fc1b9_88404374',
  'has_nocache_code' => false,
  'file_dependency' => 
  array (
    '26a3e0a4e21a1f433796208c24290811545fc3d7' => 
    array (
      0 => '/suitecrm/public/legacy/include/SugarFields/Fields/Relate/EditView.tpl',
      1 => 1710132775,
      2 => 'file',
    ),
  ),
  'includes' => 
  array (
  ),
),false)) {
function content_65f118f72fc1b9_88404374 (Smarty_Internal_Template $_smarty_tpl) {
$_smarty_tpl->_checkPlugins(array(0=>array('file'=>'/suitecrm/public/legacy/include/Smarty/plugins/function.sugarvar.php','function'=>'smarty_function_sugarvar',),));
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
<?php $_smarty_tpl->smarty->ext->_capture->open($_smarty_tpl, 'idname', 'idname', null);
echo smarty_function_sugarvar(array('key'=>'name'),$_smarty_tpl);
$_smarty_tpl->smarty->ext->_capture->close($_smarty_tpl);
if (!empty($_smarty_tpl->tpl_vars['displayParams']->value['idName'])) {?>
    <?php $_smarty_tpl->_assignInScope('idname', $_smarty_tpl->tpl_vars['displayParams']->value['idName']);
}?>
<input type="text" name="<?php echo $_smarty_tpl->tpl_vars['idname']->value;?>
" class=<?php if (empty($_smarty_tpl->tpl_vars['displayParams']->value['class'])) {?>"sqsEnabled"<?php } else { ?> "<?php echo $_smarty_tpl->tpl_vars['displayParams']->value['class'];?>
" <?php }?> tabindex="<?php echo $_smarty_tpl->tpl_vars['tabindex']->value;?>
" id="<?php echo $_smarty_tpl->tpl_vars['idname']->value;?>
" size="<?php echo $_smarty_tpl->tpl_vars['displayParams']->value['size'];?>
" value="<?php echo smarty_function_sugarvar(array('key'=>'value'),$_smarty_tpl);?>
" title='<?php echo $_smarty_tpl->tpl_vars['vardef']->value['help'];?>
' autocomplete="off" <?php echo $_smarty_tpl->tpl_vars['displayParams']->value['readOnly'];?>
 <?php echo $_smarty_tpl->tpl_vars['displayParams']->value['field'];?>
	<?php if (!empty($_smarty_tpl->tpl_vars['displayParams']->value['accesskey'])) {?> accesskey='<?php echo $_smarty_tpl->tpl_vars['displayParams']->value['accesskey'];?>
' <?php }?> >
<input type="hidden" name="<?php if (!empty($_smarty_tpl->tpl_vars['displayParams']->value['idNameHidden'])) {
echo $_smarty_tpl->tpl_vars['displayParams']->value['idNameHidden'];
}
echo smarty_function_sugarvar(array('key'=>'id_name'),$_smarty_tpl);?>
" 
	id="<?php if (!empty($_smarty_tpl->tpl_vars['displayParams']->value['idNameHidden'])) {
echo $_smarty_tpl->tpl_vars['displayParams']->value['idNameHidden'];
}
echo smarty_function_sugarvar(array('key'=>'id_name'),$_smarty_tpl);?>
" 
	<?php if (!empty($_smarty_tpl->tpl_vars['vardef']->value['id_name'])) {?>value="<?php echo smarty_function_sugarvar(array('memberName'=>'vardef.id_name','key'=>'value'),$_smarty_tpl);?>
"<?php }?>>
<?php if (empty($_smarty_tpl->tpl_vars['displayParams']->value['hideButtons'])) {?>
<span class="id-ff multiple selectcrossbtn">
<button type="button" name="btn_<?php echo $_smarty_tpl->tpl_vars['idname']->value;?>
" id="btn_<?php echo $_smarty_tpl->tpl_vars['idname']->value;?>
" tabindex="<?php echo $_smarty_tpl->tpl_vars['tabindex']->value;?>
" title="{sugar_translate label="<?php echo $_smarty_tpl->tpl_vars['displayParams']->value['accessKeySelectTitle'];?>
"}" class="firstChild" value="{sugar_translate label="<?php echo $_smarty_tpl->tpl_vars['displayParams']->value['accessKeySelectLabel'];?>
"}"
onclick='open_popup(
    "<?php echo smarty_function_sugarvar(array('key'=>'module'),$_smarty_tpl);?>
", 
	600, 
	400, 
	"<?php echo $_smarty_tpl->tpl_vars['displayParams']->value['initial_filter'];?>
", 
	true, 
	false, 
	<?php echo $_smarty_tpl->tpl_vars['displayParams']->value['popupData'];?>
, 
	"single", 
	true
);' <?php if ((isset($_smarty_tpl->tpl_vars['displayParams']->value['javascript']['btn']))) {
echo $_smarty_tpl->tpl_vars['displayParams']->value['javascript']['btn'];
}?>>
{sugar_getimage name="cursor" attr='border="0"'}
</button>
<?php if (empty($_smarty_tpl->tpl_vars['displayParams']->value['selectOnly'])) {?>
<button type="button" name="btn_clr_<?php echo $_smarty_tpl->tpl_vars['idname']->value;?>
" id="btn_clr_<?php echo $_smarty_tpl->tpl_vars['idname']->value;?>
" tabindex="<?php echo $_smarty_tpl->tpl_vars['tabindex']->value;?>
" title="{sugar_translate label="<?php echo $_smarty_tpl->tpl_vars['displayParams']->value['accessKeyClearTitle'];?>
"}"  class="lastChild"
onclick="SUGAR.clearRelateField(this.form, '<?php echo $_smarty_tpl->tpl_vars['idname']->value;?>
', '<?php if (!empty($_smarty_tpl->tpl_vars['displayParams']->value['idName'])) {
echo $_smarty_tpl->tpl_vars['displayParams']->value['idName'];?>
_<?php }
echo smarty_function_sugarvar(array('key'=>'id_name'),$_smarty_tpl);?>
');"  value="{sugar_translate label="<?php echo $_smarty_tpl->tpl_vars['displayParams']->value['accessKeyClearLabel'];?>
"}" <?php if ((isset($_smarty_tpl->tpl_vars['displayParams']->value['javascript']['btn_clear']))) {
echo $_smarty_tpl->tpl_vars['displayParams']->value['javascript']['btn_clear'];
}?>>
{sugar_getimage name="cross" attr='border="0"'}
</button>
<?php }?>
</span>
<?php }
if (!empty($_smarty_tpl->tpl_vars['displayParams']->value['allowNewValue'])) {?>
<input type="hidden" name="<?php echo $_smarty_tpl->tpl_vars['idname']->value;?>
_allow_new_value" id="<?php echo $_smarty_tpl->tpl_vars['idname']->value;?>
_allow_new_value" value="true">
<?php }
echo '<script'; ?>
 type="text/javascript">
SUGAR.util.doWhen(
		"typeof(sqs_objects) != 'undefined' && typeof(sqs_objects['{$form_name}_<?php echo $_smarty_tpl->tpl_vars['idname']->value;?>
']) != 'undefined'",
		enableQS
);
<?php echo '</script'; ?>
>
<?php }
}
