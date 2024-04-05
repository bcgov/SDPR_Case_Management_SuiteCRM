<?php
/* Smarty version 4.3.2, created on 2024-03-13 03:09:43
  from '/suitecrm/public/legacy/modules/Emails/templates/emailSettingsGeneral.tpl' */

/* @var Smarty_Internal_Template $_smarty_tpl */
if ($_smarty_tpl->_decodeProperties($_smarty_tpl, array (
  'version' => '4.3.2',
  'unifunc' => 'content_65f118f71c9c28_53180955',
  'has_nocache_code' => false,
  'file_dependency' => 
  array (
    '71a79c45f1edfab1c9344c180c6502c58d2420d1' => 
    array (
      0 => '/suitecrm/public/legacy/modules/Emails/templates/emailSettingsGeneral.tpl',
      1 => 1710132962,
      2 => 'file',
    ),
  ),
  'includes' => 
  array (
    'file:modules/Emails/templates/emailSettingsFolders.tpl' => 1,
  ),
),false)) {
function content_65f118f71c9c28_53180955 (Smarty_Internal_Template $_smarty_tpl) {
$_smarty_tpl->_checkPlugins(array(0=>array('file'=>'/suitecrm/public/legacy/include/Smarty/plugins/function.html_options.php','function'=>'smarty_function_html_options',),1=>array('file'=>'/suitecrm/public/legacy/include/Smarty/plugins/function.sugar_getimage.php','function'=>'smarty_function_sugar_getimage',),));
?>

<form name="formEmailSettingsGeneral" id="formEmailSettingsGeneral">
    <table cellpadding="4" class="view emailSettings">
        <tr>
            <th colspan="4" colspan="4" scope="row">
                <h4><?php echo $_smarty_tpl->tpl_vars['app_strings']->value['LBL_EMAIL_SETTINGS_TITLE_PREFERENCES'];?>
</h4>
            </th>
        </tr>
        <tr>
            <td scope="row">
                <?php echo $_smarty_tpl->tpl_vars['app_strings']->value['LBL_EMAIL_SETTINGS_CHECK_INTERVAL'];?>
:
            </td>
            <td>
                <?php echo smarty_function_html_options(array('options'=>$_smarty_tpl->tpl_vars['emailCheckInterval']->value['options'],'selected'=>$_smarty_tpl->tpl_vars['emailCheckInterval']->value['selected'],'name'=>'emailCheckInterval','id'=>'emailCheckInterval'),$_smarty_tpl);?>

            </td>
            <td scope="row">
                <?php echo $_smarty_tpl->tpl_vars['app_strings']->value['LBL_DEFAULT_EMAIL_SIGNATURES'];?>
:
            </td>
            <td>
                <?php echo $_smarty_tpl->tpl_vars['signaturesSettings']->value;?>
 <?php echo $_smarty_tpl->tpl_vars['signatureButtons']->value;?>

                <input type="hidden" name="signatureDefault" id="signatureDefault" value="<?php echo $_smarty_tpl->tpl_vars['signatureDefaultId']->value;?>
">
            </td>
        </tr>
        <tr>
            <td scope="row">
                <?php echo $_smarty_tpl->tpl_vars['app_strings']->value['LBL_EMAIL_SETTINGS_SEND_EMAIL_AS'];?>
:
            </td>
            <td>
                <input class="checkbox" type="checkbox" id="sendPlainText" name="sendPlainText"
                       value="1" <?php echo $_smarty_tpl->tpl_vars['sendPlainTextChecked']->value;?>
 />
            </td>
            <td scope="row">
                <?php echo $_smarty_tpl->tpl_vars['mod_strings']->value['LBL_SIGNATURE_PREPEND'];?>
:
            </td>
            <td>
                <input type="checkbox" name="signature_prepend" <?php echo $_smarty_tpl->tpl_vars['signaturePrepend']->value;?>
>
            </td>
        </tr>
        <tr>
            <td scope="row">
                <?php echo $_smarty_tpl->tpl_vars['app_strings']->value['LBL_EMAIL_CHARSET'];?>
:
            </td>
            <td>
                <?php echo smarty_function_html_options(array('options'=>$_smarty_tpl->tpl_vars['charset']->value['options'],'selected'=>$_smarty_tpl->tpl_vars['charset']->value['selected'],'name'=>'default_charset','id'=>'default_charset'),$_smarty_tpl);?>

            </td>
            <td scope="row">
                &nbsp;
            </td>
            <td>
                &nbsp;
            </td>
        </tr>
    </table>
    <table cellpadding="4" cellspacing="0" border="0" class="view">
        <tr>
            <th colspan="4">
                <h4><?php echo $_smarty_tpl->tpl_vars['app_strings']->value['LBL_EMAIL_SETTINGS_TITLE_LAYOUT'];?>
</h4>
            </th>
        </tr>
        <tr>
            <td scope="row" width="20%">
                <?php echo $_smarty_tpl->tpl_vars['app_strings']->value['LBL_EMAIL_SETTINGS_SHOW_NUM_IN_LIST'];?>
:
                <div id="rollover">
                    <a href="#"
                       class="rollover"><?php echo smarty_function_sugar_getimage(array('alt'=>$_smarty_tpl->tpl_vars['mod_strings']->value['LBL_HELP'],'name'=>"helpInline",'ext'=>".gif",'other_attributes'=>'border="0" '),$_smarty_tpl);?>

                        <span><?php echo $_smarty_tpl->tpl_vars['app_strings']->value['LBL_EMAIL_SETTINGS_REQUIRE_REFRESH'];?>
</span></a>
                </div>
            </td>
            <td>
                <select name="showNumInList" id="showNumInList">
                    <?php echo $_smarty_tpl->tpl_vars['showNumInList']->value;?>

                </select>
            </td>
            <td scope="row">&nbsp;</td>
            <td>&nbsp;</td>
        </tr>
    </table>

    <?php $_smarty_tpl->_subTemplateRender("file:modules/Emails/templates/emailSettingsFolders.tpl", $_smarty_tpl->cache_id, $_smarty_tpl->compile_id, 0, $_smarty_tpl->cache_lifetime, array(), 0, false);
?>


</form>

<?php }
}
