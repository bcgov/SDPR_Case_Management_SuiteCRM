<?php
/* Smarty version 4.3.2, created on 2024-03-13 03:09:43
  from '/suitecrm/public/legacy/modules/Users/_baseEmail.tpl' */

/* @var Smarty_Internal_Template $_smarty_tpl */
if ($_smarty_tpl->_decodeProperties($_smarty_tpl, array (
  'version' => '4.3.2',
  'unifunc' => 'content_65f118f71b17b6_98228272',
  'has_nocache_code' => false,
  'file_dependency' => 
  array (
    '965fb51f2a4f8b4713da9c82ecb9f792da38e833' => 
    array (
      0 => '/suitecrm/public/legacy/modules/Users/_baseEmail.tpl',
      1 => 1710133016,
      2 => 'file',
    ),
  ),
  'includes' => 
  array (
    'file:modules/Emails/templates/_baseJsVars.tpl' => 1,
    'file:modules/Emails/templates/_baseConfigData.tpl' => 1,
    'file:modules/Emails/templates/overlay.tpl' => 1,
    'file:modules/Emails/templates/advancedSearch.tpl' => 1,
    'file:modules/Emails/templates/emailSettings.tpl' => 1,
    'file:modules/Emails/templates/addressSearchContent.tpl' => 1,
    'file:modules/Emails/templates/outboundDialog.tpl' => 1,
    'file:modules/Emails/templates/editAccountDialogue.tpl' => 1,
    'file:modules/Emails/templates/outboundDialogTest.tpl' => 1,
    'file:modules/Emails/templates/assignTo.tpl' => 1,
  ),
),false)) {
function content_65f118f71b17b6_98228272 (Smarty_Internal_Template $_smarty_tpl) {
$_smarty_tpl->_checkPlugins(array(0=>array('file'=>'/suitecrm/public/legacy/include/Smarty/plugins/function.sugar_getjspath.php','function'=>'smarty_function_sugar_getjspath',),));
?>
<link rel="stylesheet" type="text/css" href="<?php echo smarty_function_sugar_getjspath(array('file'=>'modules/Emails/EmailUI.css'),$_smarty_tpl);?>
"/>
<?php $_smarty_tpl->_subTemplateRender("file:modules/Emails/templates/_baseJsVars.tpl", $_smarty_tpl->cache_id, $_smarty_tpl->compile_id, 0, $_smarty_tpl->cache_lifetime, array(), 0, false);
echo '<script'; ?>
 type="text/javascript" src='<?php echo smarty_function_sugar_getjspath(array('file'=>'include/javascript/tiny_mce/tiny_mce.js'),$_smarty_tpl);?>
'><?php echo '</script'; ?>
>
<?php echo '<script'; ?>
 type="text/javascript" src='<?php echo smarty_function_sugar_getjspath(array('file'=>'cache/include/javascript/sugar_grp_emails.js'),$_smarty_tpl);?>
'><?php echo '</script'; ?>
>
<?php echo '<script'; ?>
 type="text/javascript"
        src='<?php echo smarty_function_sugar_getjspath(array('file'=>'cache/include/javascript/sugar_grp_yui_widgets.js'),$_smarty_tpl);?>
'><?php echo '</script'; ?>
>
<?php echo '<script'; ?>
 type="text/javascript" src="include/javascript/jsclass_base.js"><?php echo '</script'; ?>
>
<?php echo '<script'; ?>
 type="text/javascript" src="include/javascript/jsclass_async.js"><?php echo '</script'; ?>
>

<?php echo '<script'; ?>
 type="text/javascript" language="Javascript">

    <?php $_smarty_tpl->_subTemplateRender("file:modules/Emails/templates/_baseConfigData.tpl", $_smarty_tpl->cache_id, $_smarty_tpl->compile_id, 0, $_smarty_tpl->cache_lifetime, array(), 0, false);
?>

    var calFormat = '<?php echo $_smarty_tpl->tpl_vars['calFormat']->value;?>
';
    var theme = "<?php echo $_smarty_tpl->tpl_vars['theme']->value;?>
";

    <?php echo $_smarty_tpl->tpl_vars['quickSearchForAssignedUser']->value;?>


    SUGAR.email2.detailView.qcmodules = <?php echo $_smarty_tpl->tpl_vars['qcModules']->value;?>
;


    var isAdmin = <?php echo $_smarty_tpl->tpl_vars['is_admin']->value;?>
;
    var loadingSprite = app_strings.LBL_EMAIL_LOADING + " <img src='include/javascript/yui/build/assets/skins/sam/wait.gif' alt=$mod_strings.LBL_WAIT height='14' align='absmiddle'>";
<?php echo '</script'; ?>
>
<div class="email">
    <form id="emailUIForm" name="emailUIForm">
        <input type="hidden" id="module" name="module" value="Emails">
        <input type="hidden" id="action" name="action" value="EmailUIAjax">
        <input type="hidden" id="to_pdf" name="to_pdf" value="true">
        <input type="hidden" id="emailUIAction" name="emailUIAction">
        <input type="hidden" id="mbox" name="mbox">
        <input type="hidden" id="uid" name="uid">
        <input type="hidden" id="ieId" name="ieId">
        <input type="hidden" id="forceRefresh" name="forceRefresh">
        <input type="hidden" id="focusFolder" name="focusFolder">
        <input type="hidden" id="focusFolderOpen" name="focusFolderOpen">
        <input type="hidden" id="sortBy" name="sortBy">
        <input type="hidden" id="reverse" name="reverse">
    </form>
    <div id="overDiv" style="position:absolute; visibility:hidden; z-index:1000;"></div>

    <table cellpadding="0" cellspacing="0" border="0" width="100%" style="display: none;">
        <tr>
            <td NOWRAP style="padding-bottom: 2px;">
                <button class="button" id="checkEmailButton" onclick="SUGAR.email2.folders.startEmailAccountCheck();">
                    <img src="themes/default/images/icon_email_check.gif" alt=$mod_strings.LBL_CHECKEMAIL
                         align="absmiddle" border="0"> <?php echo $_smarty_tpl->tpl_vars['app_strings']->value['LBL_EMAIL_CHECK'];?>
</button>
                <button class="button" id="composeButton" onclick="SUGAR.email2.composeLayout.c0_composeNewEmail();">
                    <img src="themes/default/images/icon_email_compose.gif" alt=$mod_strings.LBL_COMPOSEEMAIL
                         align="absmiddle" border="0"> <?php echo $_smarty_tpl->tpl_vars['mod_strings']->value['LNK_NEW_SEND_EMAIL'];?>
</button>
                <?php if ($_smarty_tpl->tpl_vars['ID']->value) {?>
                    <button class="button" id="settingsButton"
                            onclick="SUGAR.email2.settings.showSettings(getUserEditViewUserId());"><img
                                src="themes/default/images/icon_email_settings.gif" alt=$mod_strings.LBL_EMAILSETTINGS
                                align="absmiddle" border="0"> <?php echo $_smarty_tpl->tpl_vars['app_strings']->value['LBL_EMAIL_SETTINGS'];?>
</button>
                <?php }?>
            </td>
            <td NOWRAP align="right" style="padding-bottom: 2px;">
                <a href="index.php?module=Administration&action=SupportPortal&view=documentation&version=<?php echo $_smarty_tpl->tpl_vars['sugar_version']->value;?>
&edition=<?php echo $_smarty_tpl->tpl_vars['sugar_flavor']->value;?>
&lang=<?php echo $_smarty_tpl->tpl_vars['current_language']->value;?>
&help_module=Emails&help_action=index&key=<?php echo $_smarty_tpl->tpl_vars['server_unique_key']->value;?>
"
                   width='13' height='13' alt='<?php echo $_smarty_tpl->tpl_vars['app_strings']->value['LNK_HELP'];?>
' border='0' align='absmiddle'
                   target="_blank"></a>
                &nbsp;
                <a href="index.php?module=Administration&action=SupportPortal&view=documentation&version=<?php echo $_smarty_tpl->tpl_vars['sugar_version']->value;?>
&edition=<?php echo $_smarty_tpl->tpl_vars['sugar_flavor']->value;?>
&lang=<?php echo $_smarty_tpl->tpl_vars['current_language']->value;?>
&help_module=Emails&help_action=index&key=<?php echo $_smarty_tpl->tpl_vars['server_unique_key']->value;?>
"
                   class='utilsLink' target="_blank"><?php echo $_smarty_tpl->tpl_vars['app_strings']->value['LNK_HELP'];?>
</a>
            </td>
        </tr>
    </table>


    <?php $_smarty_tpl->_subTemplateRender("file:modules/Emails/templates/overlay.tpl", $_smarty_tpl->cache_id, $_smarty_tpl->compile_id, 0, $_smarty_tpl->cache_lifetime, array(), 0, false);
?>

    <div id="emailContextMenu"></div>
    <div id="folderContextMenu"></div>
    <div id="container" class="email" style="position:relative; height:550px; overflow:hidden; display: none;"></div>
    <div id="innerLayout" class="yui-hidden"></div>
    <div id="listViewLayout" class="yui-hidden"></div>
    <div id="settingsDialog"></div>

    <!-- Hidden Content -->
    <div class="yui-hidden">
        <div id="searchTab" style="padding:5px">
            <?php $_smarty_tpl->_subTemplateRender("file:modules/Emails/templates/advancedSearch.tpl", $_smarty_tpl->cache_id, $_smarty_tpl->compile_id, 0, $_smarty_tpl->cache_lifetime, array(), 0, false);
?>
        </div>
        <div id="settings">
            <?php $_smarty_tpl->_subTemplateRender("file:modules/Emails/templates/emailSettings.tpl", $_smarty_tpl->cache_id, $_smarty_tpl->compile_id, 0, $_smarty_tpl->cache_lifetime, array(), 0, false);
?>
        </div>

        <div id="footerLinks" class="yui-hidden"></div>
    </div>


    <div id="editContact" class="yui-hidden"></div>
    <div id="editContactTab" class="yui-hidden"></div>
    <div id="editMailingList" class="yui-hidden"></div>
    <div id="editMailingListTab" class="yui-hidden"></div>


    <!-- for detailView quickCreate() calls -->
    <div id="quickCreateForEmail"></div>
    <div id="quickCreateContent"></div>


    <div id="importDialog"></div>
    <div id="importDialogContent"></div>


    <div id="relateDialog"></div>
    <div id="relateDialogContent"></div>


    <div id="assignmentDialog"></div>
    <div id="assignmentDialogContent"></div>


    <div id="emailDetailDialog"></div>
    <div id="emailDetailDialogContent"></div>


    <!-- for detailView views -->
    <div id="viewDialog"></div>
    <div id="viewDialogContent"></div>

    <!-- addressBook select -->
    <?php $_smarty_tpl->_subTemplateRender("file:modules/Emails/templates/addressSearchContent.tpl", $_smarty_tpl->cache_id, $_smarty_tpl->compile_id, 0, $_smarty_tpl->cache_lifetime, array(), 0, false);
?>

    <!-- accounts outbound server dialogue -->
    <div id="outboundDialog" class="yui-hidden">
        <?php $_smarty_tpl->_subTemplateRender("file:modules/Emails/templates/outboundDialog.tpl", $_smarty_tpl->cache_id, $_smarty_tpl->compile_id, 0, $_smarty_tpl->cache_lifetime, array(), 0, false);
?>
    </div>

    <!-- accounts edit dialogue -->
    <div id="editAccountDialogue" class="yui-hidden">
        <?php $_smarty_tpl->_subTemplateRender("file:modules/Emails/templates/editAccountDialogue.tpl", $_smarty_tpl->cache_id, $_smarty_tpl->compile_id, 0, $_smarty_tpl->cache_lifetime, array(), 0, false);
?>
    </div>

    <div id="testOutboundDialog" class="yui-hidden">
        <?php $_smarty_tpl->_subTemplateRender("file:modules/Emails/templates/outboundDialogTest.tpl", $_smarty_tpl->cache_id, $_smarty_tpl->compile_id, 0, $_smarty_tpl->cache_lifetime, array(), 0, false);
?>
    </div>

    <div id="assignToDiv" class="yui-hidden">
        <?php $_smarty_tpl->_subTemplateRender("file:modules/Emails/templates/assignTo.tpl", $_smarty_tpl->cache_id, $_smarty_tpl->compile_id, 0, $_smarty_tpl->cache_lifetime, array(), 0, false);
?>
    </div>


    <?php echo '<script'; ?>
 type="text/javascript" language="Javascript">
      enableQS(true);
    <?php echo '</script'; ?>
>

</div><?php }
}
