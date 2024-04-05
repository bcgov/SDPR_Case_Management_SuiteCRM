<?php
/* Smarty version 4.3.2, created on 2024-03-13 01:15:10
  from '/suitecrm/public/legacy/include/SugarFields/Fields/Base/ListView.tpl' */

/* @var Smarty_Internal_Template $_smarty_tpl */
if ($_smarty_tpl->_decodeProperties($_smarty_tpl, array (
  'version' => '4.3.2',
  'unifunc' => 'content_65f0fe1e3d7a61_45963739',
  'has_nocache_code' => false,
  'file_dependency' => 
  array (
    '571a3852e66c199253a859f8bba138ffde10035d' => 
    array (
      0 => '/suitecrm/public/legacy/include/SugarFields/Fields/Base/ListView.tpl',
      1 => 1710132771,
      2 => 'file',
    ),
  ),
  'includes' => 
  array (
  ),
),false)) {
function content_65f0fe1e3d7a61_45963739 (Smarty_Internal_Template $_smarty_tpl) {
$_smarty_tpl->_checkPlugins(array(0=>array('file'=>'/suitecrm/public/legacy/include/Smarty/plugins/function.sugar_fetch.php','function'=>'smarty_function_sugar_fetch',),));
?>

<?php echo smarty_function_sugar_fetch(array('object'=>$_smarty_tpl->tpl_vars['parentFieldArray']->value,'key'=>$_smarty_tpl->tpl_vars['col']->value),$_smarty_tpl);?>

<?php }
}
