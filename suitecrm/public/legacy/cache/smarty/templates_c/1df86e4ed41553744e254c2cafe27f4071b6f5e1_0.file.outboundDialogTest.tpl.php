<?php
/* Smarty version 4.3.2, created on 2024-03-13 03:09:43
  from '/suitecrm/public/legacy/modules/Emails/templates/outboundDialogTest.tpl' */

/* @var Smarty_Internal_Template $_smarty_tpl */
if ($_smarty_tpl->_decodeProperties($_smarty_tpl, array (
  'version' => '4.3.2',
  'unifunc' => 'content_65f118f71fd5f2_44922938',
  'has_nocache_code' => false,
  'file_dependency' => 
  array (
    '1df86e4ed41553744e254c2cafe27f4071b6f5e1' => 
    array (
      0 => '/suitecrm/public/legacy/modules/Emails/templates/outboundDialogTest.tpl',
      1 => 1710132962,
      2 => 'file',
    ),
  ),
  'includes' => 
  array (
  ),
),false)) {
function content_65f118f71fd5f2_44922938 (Smarty_Internal_Template $_smarty_tpl) {
?><div id="testOutbound">
		<table  border="0" cellspacing="0" cellpadding="0" class="edit view">
			<tr>
				<td scope="row">
					<?php echo $_smarty_tpl->tpl_vars['app_strings']->value['LBL_EMAIL_SETTINGS_FROM_TO_EMAIL_ADDR'];?>
 
					<span class="required">
						<?php echo $_smarty_tpl->tpl_vars['app_strings']->value['LBL_REQUIRED_SYMBOL'];?>

					</span>
				</td>
				<td >
					<input type="text" id="outboundtest_from_address" name="outboundtest_from_address" size="35" maxlength="64" value="<?php echo $_smarty_tpl->tpl_vars['CURRENT_USER_EMAIL']->value;?>
">
				</td>
			</tr>
			<tr>
				<td scope="row" colspan="2">
					<input type="button" class="button" value="   <?php echo $_smarty_tpl->tpl_vars['app_strings']->value['LBL_EMAIL_SEND'];?>
   " onclick="javascript:SUGAR.email2.accounts.testOutboundSettings();">&nbsp;
					<input type="button" class="button" value="   <?php echo $_smarty_tpl->tpl_vars['app_strings']->value['LBL_CANCEL_BUTTON_LABEL'];?>
   " onclick="javascript:SUGAR.email2.accounts.testOutboundDialog.hide();">&nbsp;
				</td>
			</tr>

		</table>
</div>
<?php }
}
