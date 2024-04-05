<?php
/* Smarty version 4.3.2, created on 2024-03-13 03:09:43
  from '/suitecrm/public/legacy/modules/Emails/templates/editAccountDialogue.tpl' */

/* @var Smarty_Internal_Template $_smarty_tpl */
if ($_smarty_tpl->_decodeProperties($_smarty_tpl, array (
  'version' => '4.3.2',
  'unifunc' => 'content_65f118f71f9b19_12426104',
  'has_nocache_code' => false,
  'file_dependency' => 
  array (
    '5c4be83856a9897c73384ec998001207f953a800' => 
    array (
      0 => '/suitecrm/public/legacy/modules/Emails/templates/editAccountDialogue.tpl',
      1 => 1710132961,
      2 => 'file',
    ),
  ),
  'includes' => 
  array (
  ),
),false)) {
function content_65f118f71f9b19_12426104 (Smarty_Internal_Template $_smarty_tpl) {
$_smarty_tpl->_checkPlugins(array(0=>array('file'=>'/suitecrm/public/legacy/include/Smarty/plugins/function.sugar_getimage.php','function'=>'smarty_function_sugar_getimage',),));
?>

<form id="ieAccount" name="ieAccount">
    <input type="hidden" id="ie_id" name="ie_id">
    <input type="hidden" id="ie_status" name="ie_status" value="Active">
    <input type="hidden" id="ie_team" name="ie_team" value="<?php echo $_smarty_tpl->tpl_vars['ie_team']->value;?>
">
    <input type="hidden" id="group_id" name="group_id">
    <input type="hidden" id="group_id" name="mark_read" value="1">
    <input type="hidden" name="searchField" value="">

    <table border="0" cellspacing="0" cellpadding="0" class="edit view">
        <tr>
            <td colspan="2">
                <h4><?php echo $_smarty_tpl->tpl_vars['mod_strings']->value['LBL_EMAIL_SETTINGS_INBOUND'];?>
</h4>
            </td>
            <td style="vertical-align:bottom;"><a href="javascript:void(0);" id="prefill_gmail_defaults_link"
                                                  onclick="javascript:SUGAR.email2.accounts.fillInboundGmailDefaults();"><?php echo $_smarty_tpl->tpl_vars['app_strings']->value['LBL_EMAIL_ACCOUNTS_GMAIL_DEFAULTS'];?>
</a>&nbsp;
            </td>
        </tr>
        <tr>
            <td valign="top" scope="row" width="15%" NOWRAP>
                <?php echo $_smarty_tpl->tpl_vars['app_strings']->value['LBL_EMAIL_SETTINGS_NAME'];?>
: <span class="required"><?php echo $_smarty_tpl->tpl_vars['app_strings']->value['LBL_REQUIRED_SYMBOL'];?>
</span>
            </td>
            <td valign="top" width="35%">
                <input id='ie_name' name='ie_name' type="text" size="30">
            </td>
        </tr>
        <tr>
            <td valign="top" scope="row">
                <?php echo $_smarty_tpl->tpl_vars['ie_mod_strings']->value['LBL_LOGIN'];?>
: <span class="required"><?php echo $_smarty_tpl->tpl_vars['app_strings']->value['LBL_REQUIRED_SYMBOL'];?>
</span>&nbsp;
            </td>
            <td valign="top">
                <input id='email_user' name='email_user' size='30' maxlength='100' type="text"
                       onclick="SUGAR.email2.accounts.ieAccountError(SUGAR.email2.accounts.normalStyle);">
            </td>
        </tr>

        <tr>
            <td valign="top" scope="row">
                <?php echo $_smarty_tpl->tpl_vars['ie_mod_strings']->value['LBL_PASSWORD'];?>
: <span class="required"><?php echo $_smarty_tpl->tpl_vars['app_strings']->value['LBL_REQUIRED_SYMBOL'];?>
</span>&nbsp;
            </td>
            <td valign="top" class="view input-button">
                <input id='email_password' name='email_password' size='30' maxlength='100' type="password"
                       onclick="SUGAR.email2.accounts.ieAccountError(SUGAR.email2.accounts.normalStyle);">
                <a href="javascript:void(0)" id='email_password_link'
                   onClick="SUGAR.util.setEmailPasswordEdit('email_password')"
                   style="display: none"><?php echo $_smarty_tpl->tpl_vars['app_strings']->value['LBL_CHANGE_PASSWORD'];?>
</a>
            </td>
        </tr>

        <tr>
            <td valign="top" scope="row" NOWRAP>
                <?php echo $_smarty_tpl->tpl_vars['ie_mod_strings']->value['LBL_SERVER_URL'];?>
: <span class="required"><?php echo $_smarty_tpl->tpl_vars['app_strings']->value['LBL_REQUIRED_SYMBOL'];?>
</span>&nbsp;
            </td>
            <td valign="top">
                <input id='server_url' name='server_url' size='30' maxlength='100' type="text"
                       onclick="SUGAR.email2.accounts.ieAccountError(SUGAR.email2.accounts.normalStyle);">
            </td>
        </tr>
        <tr>
            <td valign="top" scope="row" NOWRAP>
                <?php echo $_smarty_tpl->tpl_vars['ie_mod_strings']->value['LBL_SERVER_TYPE'];?>
: <span class="required"><?php echo $_smarty_tpl->tpl_vars['app_strings']->value['LBL_REQUIRED_SYMBOL'];?>
</span>&nbsp;
            </td>
            <td valign="top">
                <select name='protocol' id="protocol"
                        onchange="SUGAR.email2.accounts.setPortDefault(); SUGAR.email2.accounts.ieAccountError(SUGAR.email2.accounts.normalStyle);"><?php echo $_smarty_tpl->tpl_vars['PROTOCOL']->value;?>
</select>
            </td>
        </tr>
        <tr>
            <td valign="top" scope="row" NOWRAP>
                <?php echo $_smarty_tpl->tpl_vars['ie_mod_strings']->value['LBL_SSL'];?>
:&nbsp;
                <div id="rollover">
                    <a href="#"
                       class="rollover"><?php echo smarty_function_sugar_getimage(array('alt'=>$_smarty_tpl->tpl_vars['mod_strings']->value['LBL_HELP'],'name'=>"helpInline",'ext'=>".gif",'other_attributes'=>'border="0" '),$_smarty_tpl);?>

                        <span><?php echo $_smarty_tpl->tpl_vars['ie_mod_strings']->value['LBL_SSL_DESC'];?>
</span></a>
                </div>
            </td>
            <td valign="top" width="15%">
                <div class="maybe">
                    <input name='ssl' id='ssl' <?php echo $_smarty_tpl->tpl_vars['CERT']->value;?>
 value='1' type='checkbox' <?php echo $_smarty_tpl->tpl_vars['SSL']->value;?>

                           onClick="SUGAR.email2.accounts.setPortDefault();">
                </div>
            </td>
        </tr>
        <tr>
            <td valign="top" scope="row" NOWRAP>
                <?php echo $_smarty_tpl->tpl_vars['ie_mod_strings']->value['LBL_PORT'];?>
: <span class="required"><?php echo $_smarty_tpl->tpl_vars['app_strings']->value['LBL_REQUIRED_SYMBOL'];?>
</span>&nbsp;
            </td>
            <td valign="top">
                <input name='port' id='port' size='10'
                       onclick="SUGAR.email2.accounts.ieAccountError(SUGAR.email2.accounts.normalStyle);">
            </td>
        </tr>
        <tr id="mailboxdiv" style="dispay:'none';">
            <td valign="top" scope="row" NOWRAP>
                <?php echo $_smarty_tpl->tpl_vars['ie_mod_strings']->value['LBL_MAILBOX'];?>
: <span class="required"><?php echo $_smarty_tpl->tpl_vars['app_strings']->value['LBL_REQUIRED_SYMBOL'];?>
</span>&nbsp;
            </td>
            <td valign="top">
                <input id='mailbox' value="" name='mailbox' size='30' maxlength='500' type="text"
                       onclick="SUGAR.email2.accounts.ieAccountError(SUGAR.email2.accounts.normalStyle);"/>
                <input type="button" id="subscribeFolderButton" name="subscribeFolderButton" class="button"
                       onclick='this.form.searchField.value="";SUGAR.email2.accounts.getFoldersListForInboundAccountForEmail2();'
                       value="<?php echo $_smarty_tpl->tpl_vars['app_strings']->value['LBL_EMAIL_SELECT'];?>
"/>
            </td>
        </tr>
        <tr id="trashFolderdiv" style="dispay:'none';">
            <td valign="top" scope="row" NOWRAP>
                <?php echo $_smarty_tpl->tpl_vars['ie_mod_strings']->value['LBL_TRASH_FOLDER'];?>
: <span class="required"><?php echo $_smarty_tpl->tpl_vars['app_strings']->value['LBL_REQUIRED_SYMBOL'];?>
</span>&nbsp;
            </td>
            <td valign="top">
                <input id='trashFolder' value="" name='trashFolder' size='30' maxlength='100' type="text"
                       onclick="SUGAR.email2.accounts.ieAccountError(SUGAR.email2.accounts.normalStyle);"/>
                <input type="button" id="trashFolderButton" name="trashFolderButton" class="button"
                       onclick='this.form.searchField.value="trash";SUGAR.email2.accounts.getFoldersListForInboundAccountForEmail2();'
                       value="<?php echo $_smarty_tpl->tpl_vars['app_strings']->value['LBL_EMAIL_SELECT'];?>
"/>
            </td>
        </tr>
        <tr id="sentFolderdiv" style="dispay:'none';">
            <td valign="top" scope="row" NOWRAP>
                <?php echo $_smarty_tpl->tpl_vars['ie_mod_strings']->value['LBL_SENT_FOLDER'];?>
: &nbsp;
            </td>
            <td valign="top">
                <input id='sentFolder' value="" name='sentFolder' size='30' maxlength='100' type="text"
                       onclick="SUGAR.email2.accounts.ieAccountError(SUGAR.email2.accounts.normalStyle);"/>
                <input type="button" id="sentFolderButton" name="sentFolderButton" class="button"
                       onclick='this.form.searchField.value="sent";SUGAR.email2.accounts.getFoldersListForInboundAccountForEmail2();'
                       value="<?php echo $_smarty_tpl->tpl_vars['app_strings']->value['LBL_EMAIL_SELECT'];?>
"/>
            </td>
        </tr>
        <tr>
            <td colspan="2" class="button-padding">
                <input title="<?php echo $_smarty_tpl->tpl_vars['ie_mod_strings']->value['LBL_TEST_BUTTON_TITLE'];?>
"
                       type='button'
                       class="button"
                       onClick='SUGAR.email2.accounts.testSettings();'
                       name="button" id="testButton" value="  <?php echo $_smarty_tpl->tpl_vars['ie_mod_strings']->value['LBL_TEST_SETTINGS'];?>
  ">
                &nbsp;
            </td>
        </tr>
        <tr>
            <td>&nbsp;</td>
        </tr>
    </table>
    <table class="edit view">
        <td scope="row">
            <?php echo $_smarty_tpl->tpl_vars['app_strings']->value['LBL_EMAIL_SIGNATURES'];?>
:
        </td>
        <td>
            <?php echo $_smarty_tpl->tpl_vars['signaturesAccountSettings']->value;?>

        </td>
    </table>
    <table border="0" cellspacing="0" cellpadding="0" class="edit view" width="100%">
        <tr>
            <td colspan="2">
                <h4><?php echo $_smarty_tpl->tpl_vars['mod_strings']->value['LBL_EMAIL_SETTINGS_OUTBOUND'];?>
</h4>
            </td>
        </tr>
        <tr>
            <td scope="row">
                <?php echo $_smarty_tpl->tpl_vars['app_strings']->value['LBL_EMAIL_SETTINGS_REPLY_TO_ADDR'];?>
:
            </td>
            <td>
                <input type="text" id="reply_to_addr" name="reply_to_addr" size="30" maxlength="64" value="">
            </td>
        </tr>
        <tr>
            <td scope="row">
                <?php echo $_smarty_tpl->tpl_vars['mod_strings']->value['LBL_EMAIL_SETTINGS_OUTBOUND_ACCOUNT'];?>
:
                <span class="required"><?php echo $_smarty_tpl->tpl_vars['app_strings']->value['LBL_REQUIRED_SYMBOL'];?>
</span>
            </td>
            <td>
                <select name='outbound_email' id='outbound_email'
                        onchange="SUGAR.email2.accounts.checkOutBoundSelection()"></select>
            </td>
        </tr>
        <tr class="yui-hidden" id="inboundAccountRequiredUsername">
            <td scope="row">
                <?php echo $_smarty_tpl->tpl_vars['app_strings']->value['LBL_EMAIL_ACCOUNTS_SMTPUSER'];?>
:
                <span class="required"><?php echo $_smarty_tpl->tpl_vars['app_strings']->value['LBL_REQUIRED_SYMBOL'];?>
</span>
            </td>
            <td>
                <input type="text" id="inbound_mail_smtpuser" name="mail_smtpuser" size="30" maxlength="255">
            </td>
        </tr>
        <tr class="yui-hidden" id="inboundAccountRequiredPassword">
            <td scope="row">
                <?php echo $_smarty_tpl->tpl_vars['app_strings']->value['LBL_EMAIL_ACCOUNTS_SMTPPASS'];?>
:
                <span class="required"><?php echo $_smarty_tpl->tpl_vars['app_strings']->value['LBL_REQUIRED_SYMBOL'];?>
</span>
            </td>
            <td>
                <input type="password" id="inbound_mail_smtppass" name="mail_smtppass" size="30" maxlength="255">
            </td>
        </tr>

        <tr>
            <td style="padding: 0px !important;" colspan="2">&nbsp;</td>
        </tr>

        <tr style="padding-bottom: 25px;padding-top:15px;">
            <td scope="row" colspan="2">
                <input title="<?php echo $_smarty_tpl->tpl_vars['ie_mod_strings']->value['LBL_EMAIL_SAVE'];?>
"
                       type='button'
                       accessKey="<?php echo $_smarty_tpl->tpl_vars['app_strings']->value['LBL_SAVE_BUTTON_KEY'];?>
"
                       class="button"
                       onClick='SUGAR.email2.accounts.saveIeAccount(getUserEditViewUserId());'
                       name="button" id="saveButton" value="  <?php echo $_smarty_tpl->tpl_vars['app_strings']->value['LBL_EMAIL_DONE_BUTTON_LABEL'];?>
  ">
                &nbsp;
                <input title="<?php echo $_smarty_tpl->tpl_vars['app_strings']->value['LBL_EMAIL_SETTINGS_ADD_ACCOUNT'];?>
"
                       type='button'
                       class="button"
                       onClick='SUGAR.email2.accounts.clearInboundAccountEditScreen();SE.accounts.setPortDefault();'
                       name="button" id="clearButton" value="  <?php echo $_smarty_tpl->tpl_vars['app_strings']->value['LBL_EMAIL_SETTINGS_ADD_ACCOUNT'];?>
  ">
                &nbsp;
            </td>
        </tr>
        <tr>
            <td>&nbsp;</td>
        </tr>
    </table>
</form><?php }
}
