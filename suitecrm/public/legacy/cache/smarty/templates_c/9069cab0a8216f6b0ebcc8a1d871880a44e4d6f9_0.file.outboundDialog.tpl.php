<?php
/* Smarty version 4.3.2, created on 2024-03-13 03:09:43
  from '/suitecrm/public/legacy/modules/Emails/templates/outboundDialog.tpl' */

/* @var Smarty_Internal_Template $_smarty_tpl */
if ($_smarty_tpl->_decodeProperties($_smarty_tpl, array (
  'version' => '4.3.2',
  'unifunc' => 'content_65f118f71e8a43_15137334',
  'has_nocache_code' => false,
  'file_dependency' => 
  array (
    '9069cab0a8216f6b0ebcc8a1d871880a44e4d6f9' => 
    array (
      0 => '/suitecrm/public/legacy/modules/Emails/templates/outboundDialog.tpl',
      1 => 1710132962,
      2 => 'file',
    ),
  ),
  'includes' => 
  array (
  ),
),false)) {
function content_65f118f71e8a43_15137334 (Smarty_Internal_Template $_smarty_tpl) {
$_smarty_tpl->_checkPlugins(array(0=>array('file'=>'/suitecrm/public/legacy/include/Smarty/plugins/function.sugar_translate.php','function'=>'smarty_function_sugar_translate',),));
?>
<div id="outboundServers">
	<form id="outboundEmailForm">
		<input type="hidden" id="mail_id" name="mail_id">
		<input type="hidden" id="type" name="type" value="user">
		<input type="hidden" id="mail_sendtype" name="mail_sendtype" value="SMTP">

		<table width="100%" border="0" cellspacing="1" cellpadding="0" class="edit view">
		    <tr>
				<td scope="row" width="15%" NOWRAP>
					<?php echo $_smarty_tpl->tpl_vars['app_strings']->value['LBL_EMAIL_ACCOUNTS_NAME'];?>
:
					<span class="required">
						<?php echo $_smarty_tpl->tpl_vars['app_strings']->value['LBL_REQUIRED_SYMBOL'];?>

					</span>
				</td>
				<td  width="35%">
					<input type="text" class="input" id="mail_name" name="mail_name" size="25" maxlength="64">
				</td>
			</tr>
			<tr id="chooseEmailProviderTD">
                <td align="left" scope="row" colspan="4"><?php echo smarty_function_sugar_translate(array('module'=>'Emails','label'=>'LBL_CHOOSE_EMAIL_PROVIDER'),$_smarty_tpl);?>
</td>
            </tr>
            <tr id="smtpButtonGroupTD">
                <td colspan="4">
                    <div id="smtpButtonGroup" class="yui-buttongroup">
                        <span id="gmail" class="yui-button yui-radio-button">
                            <span class="first-child">
                                <button type="button" name="mail_smtptype" value="gmail">
                                    &nbsp;&nbsp;&nbsp;&nbsp;<?php echo $_smarty_tpl->tpl_vars['app_strings']->value['LBL_SMTPTYPE_GMAIL'];?>
&nbsp;&nbsp;&nbsp;&nbsp;
                                </button>
                            </span>
                        </span>
                        <span id="yahoomail" class="yui-button yui-radio-button">
                            <span class="first-child">
                                <button type="button" name="mail_smtptype" value="yahoomail">
                                    &nbsp;&nbsp;&nbsp;&nbsp;<?php echo $_smarty_tpl->tpl_vars['app_strings']->value['LBL_SMTPTYPE_YAHOO'];?>
&nbsp;&nbsp;&nbsp;&nbsp;
                                </button>
                            </span>
                        </span>
                        <span id="exchange" class="yui-button yui-radio-button">
                            <span class="first-child">
                                <button type="button" name="mail_smtptype" value="exchange">
                                    &nbsp;&nbsp;&nbsp;&nbsp;<?php echo $_smarty_tpl->tpl_vars['app_strings']->value['LBL_SMTPTYPE_EXCHANGE'];?>
&nbsp;&nbsp;&nbsp;&nbsp;
                                </button>
                            </span>
                        </span>
                        <span id="other" class="yui-button yui-radio-button yui-button-checked">
                            <span class="first-child">
                                <button type="button" name="mail_smtptype" value="other">
                                    &nbsp;&nbsp;&nbsp;&nbsp;<?php echo $_smarty_tpl->tpl_vars['app_strings']->value['LBL_SMTPTYPE_OTHER'];?>
&nbsp;&nbsp;&nbsp;&nbsp;
                                </button>
                            </span>
                        </span>
                    </div>
                </td>
            </tr>
            <tr>
                <td colspan="4">
                    <div id="smtp_settings">
                        <table width="100%" cellpadding="0" cellspacing="1">
                            <tr>
                                <td width="20%" scope="row" nowrap="nowrap"><span><?php echo smarty_function_sugar_translate(array('module'=>'EmailMan','label'=>'LBL_NOTIFY_FROMNAME'),$_smarty_tpl);?>
:</span><span class="required" id="required_smtp_from_name"><?php echo $_smarty_tpl->tpl_vars['app_strings']->value['LBL_REQUIRED_SYMBOL'];?>
</span></td>
                                <td width="30%" ><input type="text" name="smtp_from_name" id="smtp_from_name" size="30" value="" title=""></td>
                                <td width="20%" scope="row" nowrap="nowrap"><span><?php echo smarty_function_sugar_translate(array('module'=>'EmailMan','label'=>'LBL_NOTIFY_FROMADDRESS'),$_smarty_tpl);?>
:</span><span class="required" id="required_smtp_from_addr"><?php echo $_smarty_tpl->tpl_vars['app_strings']->value['LBL_REQUIRED_SYMBOL'];?>
</span></td>
                                <td width="30%" ><input type="text" name="smtp_from_addr" id="smtp_from_addr" size="30" value="" title=""></td>
                            </tr>
                            <tr id="mailsettings1">
                                <td width="20%" scope="row" nowrap="nowrap"><span id="mail_smtpserver_label"><?php echo smarty_function_sugar_translate(array('module'=>'Emails','label'=>'LBL_MAIL_SMTPSERVER'),$_smarty_tpl);?>
</span> <span class="required" id="required_mail_smtpserver"><?php echo $_smarty_tpl->tpl_vars['app_strings']->value['LBL_REQUIRED_SYMBOL'];?>
</span></td>
                                <td width="30%" ><slot><input type="text" id="mail_smtpserver" name="mail_smtpserver" tabindex="1" size="25" maxlength="255"></slot></td>
                                <td width="20%" scope="row" nowrap="nowrap"><span id="mail_smtpport_label"><?php echo smarty_function_sugar_translate(array('module'=>'Emails','label'=>'LBL_MAIL_SMTPPORT'),$_smarty_tpl);?>
</span></td>
                                <td width="30%" ><input type="text" id="mail_smtpport" name="mail_smtpport" tabindex="1" size="5" maxlength="5"></td>
                            </tr>
                            <tr id="mailsettings2">
                                <td width="20%" scope="row"><span id='mail_smtpauth_req_label'><?php echo smarty_function_sugar_translate(array('module'=>'Emails','label'=>'LBL_MAIL_SMTPAUTH_REQ'),$_smarty_tpl);?>
</span></td>
                                <td width="30%">
                                    <input id='mail_smtpauth_req' name='mail_smtpauth_req' type="checkbox" class="checkbox" value="1" tabindex='1'
                                        onclick="javascript:SUGAR.email2.accounts.smtp_authenticate_field_display();">
                                </td>
                                <td width="20%" scope="row" nowrap="nowrap"><span id="mail_smtpssl_label"><?php echo $_smarty_tpl->tpl_vars['app_strings']->value['LBL_EMAIL_SMTP_SSL_OR_TLS'];?>
</span></td>
                                <td width="30%">
                                <select id="mail_smtpssl" name="mail_smtpssl" tabindex="501" 
                                    onclick="javascript:SUGAR.email2.accounts.smtp_setDefaultSMTPPort();"><?php echo $_smarty_tpl->tpl_vars['MAIL_SSL_OPTIONS']->value;?>
</select>
                                </td>
                            </tr>
                            <tr id="smtp_auth1">
                                <td width="20%" scope="row" nowrap="nowrap"><span id="mail_smtpuser_label"><?php echo smarty_function_sugar_translate(array('module'=>'Emails','label'=>'LBL_MAIL_SMTPUSER'),$_smarty_tpl);?>
</span> <span class="required"><?php echo $_smarty_tpl->tpl_vars['app_strings']->value['LBL_REQUIRED_SYMBOL'];?>
</span></td>
                                <td width="30%" ><slot><input type="text" id="mail_smtpuser" name="mail_smtpuser" size="25" maxlength="255" tabindex='1' ></slot></td>
                                <td >&nbsp;</td>
                                <td >&nbsp;</td>
                            </tr>
                            <tr id="smtp_auth2">
                                <td width="20%" scope="row" nowrap="nowrap"><span id="mail_smtppass_label"><?php echo smarty_function_sugar_translate(array('module'=>'Emails','label'=>'LBL_MAIL_SMTPPASS'),$_smarty_tpl);?>
</span> <span class="required"><?php echo $_smarty_tpl->tpl_vars['app_strings']->value['LBL_REQUIRED_SYMBOL'];?>
</span></td>
                                <td width="30%" ><slot>
                                <input type="password" id="mail_smtppass" name="mail_smtppass" size="25" maxlength="255" abindex='1'>
                                <a href="javascript:void(0)" id='mail_smtppass_link' onClick="SUGAR.util.setEmailPasswordEdit('mail_smtppass')" style="display: none"><?php echo $_smarty_tpl->tpl_vars['app_strings']->value['LBL_CHANGE_PASSWORD'];?>
</a>
                                </slot></td>
                                <td >&nbsp;</td>
                                <td >&nbsp;</td>
                            </tr>
                        </table>
                     </div>
                </td>
            </tr>
			<tr>
				<td colspan="2">
				    <input type="button" class="button" value="   <?php echo $_smarty_tpl->tpl_vars['app_strings']->value['LBL_EMAIL_DONE_BUTTON_LABEL'];?>
   " onclick="javascript:SUGAR.email2.accounts.saveOutboundSettings();">&nbsp;
				    <input type="button" class="button" value="   <?php echo $_smarty_tpl->tpl_vars['app_strings']->value['LBL_EMAIL_TEST_OUTBOUND_SETTINGS'];?>
   " onclick="javascript:SUGAR.email2.accounts.testOutboundSettingsDialog();">&nbsp;
				</td>
			</tr>
		</table>
	</form>
</div>
<?php }
}
