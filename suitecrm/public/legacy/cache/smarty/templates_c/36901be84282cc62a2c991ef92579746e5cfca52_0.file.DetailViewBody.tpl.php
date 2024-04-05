<?php
/* Smarty version 4.3.2, created on 2024-03-13 03:10:20
  from '/suitecrm/public/legacy/modules/ACLRoles/DetailViewBody.tpl' */

/* @var Smarty_Internal_Template $_smarty_tpl */
if ($_smarty_tpl->_decodeProperties($_smarty_tpl, array (
  'version' => '4.3.2',
  'unifunc' => 'content_65f1191c9f10d0_65345163',
  'has_nocache_code' => false,
  'file_dependency' => 
  array (
    '36901be84282cc62a2c991ef92579746e5cfca52' => 
    array (
      0 => '/suitecrm/public/legacy/modules/ACLRoles/DetailViewBody.tpl',
      1 => 1710132896,
      2 => 'file',
    ),
  ),
  'includes' => 
  array (
  ),
),false)) {
function content_65f1191c9f10d0_65345163 (Smarty_Internal_Template $_smarty_tpl) {
$_smarty_tpl->_checkPlugins(array(0=>array('file'=>'/suitecrm/public/legacy/include/Smarty/plugins/modifier.capitalize.php','function'=>'smarty_modifier_capitalize',),));
?>

<TABLE width='100%' class='detail view' border='0' cellpadding=0 cellspacing = 1  ><TR><td style="background: transparent;"></td><?php
$_from = $_smarty_tpl->smarty->ext->_foreach->init($_smarty_tpl, $_smarty_tpl->tpl_vars['ACTION_NAMES']->value, 'ACTION_NAME');
$_smarty_tpl->tpl_vars['ACTION_NAME']->do_else = true;
if ($_from !== null) foreach ($_from as $_smarty_tpl->tpl_vars['ACTION_NAME']->value) {
$_smarty_tpl->tpl_vars['ACTION_NAME']->do_else = false;
?><td style="text-align: center;" scope="row"><b><?php echo $_smarty_tpl->tpl_vars['ACTION_NAME']->value;?>
</b></td><?php
}
if ($_smarty_tpl->tpl_vars['ACTION_NAME']->do_else) {
?><td colspan="2">&nbsp;</td><?php
}
$_smarty_tpl->smarty->ext->_foreach->restore($_smarty_tpl, 1);?></TR><?php
$_from = $_smarty_tpl->smarty->ext->_foreach->init($_smarty_tpl, $_smarty_tpl->tpl_vars['CATEGORIES']->value, 'TYPES', false, 'CATEGORY_NAME');
$_smarty_tpl->tpl_vars['TYPES']->do_else = true;
if ($_from !== null) foreach ($_from as $_smarty_tpl->tpl_vars['CATEGORY_NAME']->value => $_smarty_tpl->tpl_vars['TYPES']->value) {
$_smarty_tpl->tpl_vars['TYPES']->do_else = false;
if ($_smarty_tpl->tpl_vars['APP_LIST']->value['moduleList'][$_smarty_tpl->tpl_vars['CATEGORY_NAME']->value] != 'Users') {?><TR><?php if ($_smarty_tpl->tpl_vars['APP_LIST']->value['moduleList'][$_smarty_tpl->tpl_vars['CATEGORY_NAME']->value] == 'Users') {?><td nowrap width='1%' scope="row"><b><?php echo $_smarty_tpl->tpl_vars['MOD']->value['LBL_USER_NAME_FOR_ROLE'];?>
</b></td><?php } else { ?><td nowrap width='1%' scope="row"><b><?php echo $_smarty_tpl->tpl_vars['APP_LIST']->value['moduleList'][$_smarty_tpl->tpl_vars['CATEGORY_NAME']->value];?>
</b></td><?php }
$_from = $_smarty_tpl->smarty->ext->_foreach->init($_smarty_tpl, $_smarty_tpl->tpl_vars['ACTION_NAMES']->value, 'ACTION_LABEL', false, 'ACTION_NAME');
$_smarty_tpl->tpl_vars['ACTION_LABEL']->do_else = true;
if ($_from !== null) foreach ($_from as $_smarty_tpl->tpl_vars['ACTION_NAME']->value => $_smarty_tpl->tpl_vars['ACTION_LABEL']->value) {
$_smarty_tpl->tpl_vars['ACTION_LABEL']->do_else = false;
$_smarty_tpl->_assignInScope('ACTION_FIND', 'false');
$_from = $_smarty_tpl->smarty->ext->_foreach->init($_smarty_tpl, $_smarty_tpl->tpl_vars['TYPES']->value, 'ACTIONS', false, 'TYPE_NAME');
$_smarty_tpl->tpl_vars['ACTIONS']->do_else = true;
if ($_from !== null) foreach ($_from as $_smarty_tpl->tpl_vars['TYPE_NAME']->value => $_smarty_tpl->tpl_vars['ACTIONS']->value) {
$_smarty_tpl->tpl_vars['ACTIONS']->do_else = false;
$_from = $_smarty_tpl->smarty->ext->_foreach->init($_smarty_tpl, $_smarty_tpl->tpl_vars['ACTIONS']->value, 'ACTION', false, 'ACTION_NAME_ACTIVE');
$_smarty_tpl->tpl_vars['ACTION']->do_else = true;
if ($_from !== null) foreach ($_from as $_smarty_tpl->tpl_vars['ACTION_NAME_ACTIVE']->value => $_smarty_tpl->tpl_vars['ACTION']->value) {
$_smarty_tpl->tpl_vars['ACTION']->do_else = false;
if ($_smarty_tpl->tpl_vars['ACTION_NAME']->value == $_smarty_tpl->tpl_vars['ACTION_NAME_ACTIVE']->value) {
$_smarty_tpl->_assignInScope('ACTION_FIND', 'true');?><td width='<?php echo $_smarty_tpl->tpl_vars['TDWIDTH']->value;?>
%' align='center'><div align='center' class="acl<?php echo smarty_modifier_capitalize($_smarty_tpl->tpl_vars['ACTION']->value['accessLabel']);?>
"><b><?php echo $_smarty_tpl->tpl_vars['ACTION']->value['accessName'];?>
</b></div></td><?php }
}
$_smarty_tpl->smarty->ext->_foreach->restore($_smarty_tpl, 1);
}
$_smarty_tpl->smarty->ext->_foreach->restore($_smarty_tpl, 1);
if ($_smarty_tpl->tpl_vars['ACTION_FIND']->value == 'false') {?><td nowrap width='<?php echo $_smarty_tpl->tpl_vars['TDWIDTH']->value;?>
%' style="text-align: center;"><div><font color='red'>N/A</font></div></td><?php }
}
$_smarty_tpl->smarty->ext->_foreach->restore($_smarty_tpl, 1);?></TR><?php }
}
if ($_smarty_tpl->tpl_vars['TYPES']->do_else) {
?><tr> <td colspan="2">No Actions</td></tr><?php
}
$_smarty_tpl->smarty->ext->_foreach->restore($_smarty_tpl, 1);?></TABLE><?php }
}
