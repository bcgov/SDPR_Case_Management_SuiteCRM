<?php
/* Smarty version 4.3.2, created on 2024-03-11 17:22:50
  from '/suitecrm/public/legacy/modules/Emails/templates/displayIndicatorField.tpl' */

/* @var Smarty_Internal_Template $_smarty_tpl */
if ($_smarty_tpl->_decodeProperties($_smarty_tpl, array (
  'version' => '4.3.2',
  'unifunc' => 'content_65ef3dead55b84_91905178',
  'has_nocache_code' => false,
  'file_dependency' => 
  array (
    'b8a6c18505f77638768af7b24705f792d7580caf' => 
    array (
      0 => '/suitecrm/public/legacy/modules/Emails/templates/displayIndicatorField.tpl',
      1 => 1710132961,
      2 => 'file',
    ),
  ),
  'includes' => 
  array (
  ),
),false)) {
function content_65ef3dead55b84_91905178 (Smarty_Internal_Template $_smarty_tpl) {
?>
<div class="email-indicator">
    <?php if (!empty($_smarty_tpl->tpl_vars['bean']->value)) {?>
        <?php if (!empty($_smarty_tpl->tpl_vars['bean']->value['status']) && $_smarty_tpl->tpl_vars['bean']->value['status'] == 'unread') {?>
            <div class="email-new"></div>
        <?php }?>
        <?php if (!empty($_smarty_tpl->tpl_vars['bean']->value['is_imported']) && !empty($_smarty_tpl->tpl_vars['bean']->value['inbound_email_record']) && $_smarty_tpl->tpl_vars['bean']->value['is_imported'] == true && $_smarty_tpl->tpl_vars['bean']->value['inbound_email_record'] == $_REQUEST['inbound_email_record']) {?>
            <div class="email-imported"><span class="glyphicon glyphicon-ok"></span></div>
        <?php }?>
        <?php if (!empty($_smarty_tpl->tpl_vars['bean']->value['flagged']) && $_smarty_tpl->tpl_vars['bean']->value['flagged'] == 1) {?>
            <span class="email-flagged">!</span>
        <?php }?>
    <?php }?>
</div>
<?php }
}
