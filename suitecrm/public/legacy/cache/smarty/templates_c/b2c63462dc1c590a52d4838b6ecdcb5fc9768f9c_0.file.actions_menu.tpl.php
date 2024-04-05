<?php
/* Smarty version 4.3.2, created on 2024-03-11 17:06:14
  from '/suitecrm/public/legacy/themes/suite8/include/MySugar/tpls/actions_menu.tpl' */

/* @var Smarty_Internal_Template $_smarty_tpl */
if ($_smarty_tpl->_decodeProperties($_smarty_tpl, array (
  'version' => '4.3.2',
  'unifunc' => 'content_65ef3a06045897_12173192',
  'has_nocache_code' => false,
  'file_dependency' => 
  array (
    'b2c63462dc1c590a52d4838b6ecdcb5fc9768f9c' => 
    array (
      0 => '/suitecrm/public/legacy/themes/suite8/include/MySugar/tpls/actions_menu.tpl',
      1 => 1710133120,
      2 => 'file',
    ),
  ),
  'includes' => 
  array (
  ),
),false)) {
function content_65ef3a06045897_12173192 (Smarty_Internal_Template $_smarty_tpl) {
?><ul class="dropdown-menu tab-actions">
    <?php if (!$_smarty_tpl->tpl_vars['lock_homepage']->value) {?>

        <li>
            <input class="button addDashlets" type="button" name="Edit"  data-toggle="modal" data-target=".modal-add-dashlet" value="<?php echo $_smarty_tpl->tpl_vars['lblAddDashlets']->value;?>
">
        </li>
        <li>
            <input class="button addDashboard" type="button" name="Edit"  data-toggle="modal" data-target=".modal-add-dashboard" value="<?php echo $_smarty_tpl->tpl_vars['lblAddTab']->value;?>
">
        </li>
        <li>
            <input class="button addDashboard" type="button" name="Edit"  data-toggle="modal" data-target=".modal-edit-dashboard" value="<?php echo $_smarty_tpl->tpl_vars['app']->value['LBL_EDIT_TAB'];?>
">
        </li>
    <?php }?>
</ul>
<?php }
}
