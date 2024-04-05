<?php
/* Smarty version 4.3.2, created on 2024-03-13 03:09:43
  from '/suitecrm/public/legacy/cache/themes/suite8/modules/Users/EditView.tpl' */

/* @var Smarty_Internal_Template $_smarty_tpl */
if ($_smarty_tpl->_decodeProperties($_smarty_tpl, array (
  'version' => '4.3.2',
  'unifunc' => 'content_65f118f73fdfb1_57527087',
  'has_nocache_code' => false,
  'file_dependency' => 
  array (
    '0c51d1e7c9f3fc7ef033f9f7a53794ed0f40172b' => 
    array (
      0 => '/suitecrm/public/legacy/cache/themes/suite8/modules/Users/EditView.tpl',
      1 => 1710299383,
      2 => 'file',
    ),
  ),
  'includes' => 
  array (
    'file:modules/Reminders/tpls/remindersDefaults.tpl' => 1,
  ),
),false)) {
function content_65f118f73fdfb1_57527087 (Smarty_Internal_Template $_smarty_tpl) {
$_smarty_tpl->_checkPlugins(array(0=>array('file'=>'/suitecrm/public/legacy/include/Smarty/plugins/function.sugar_getjspath.php','function'=>'smarty_function_sugar_getjspath',),1=>array('file'=>'/suitecrm/public/legacy/include/Smarty/plugins/function.sugar_action_menu.php','function'=>'smarty_function_sugar_action_menu',),2=>array('file'=>'/suitecrm/public/legacy/include/Smarty/plugins/function.sugar_include.php','function'=>'smarty_function_sugar_include',),3=>array('file'=>'/suitecrm/public/legacy/include/Smarty/plugins/function.sugar_translate.php','function'=>'smarty_function_sugar_translate',),4=>array('file'=>'/suitecrm/public/legacy/include/Smarty/plugins/block.minify.php','function'=>'smarty_block_minify',),5=>array('file'=>'/suitecrm/public/legacy/include/Smarty/plugins/modifier.strip_semicolon.php','function'=>'smarty_modifier_strip_semicolon',),6=>array('file'=>'/suitecrm/public/legacy/include/Smarty/plugins/function.counter.php','function'=>'smarty_function_counter',),7=>array('file'=>'/suitecrm/public/legacy/include/Smarty/plugins/function.html_options.php','function'=>'smarty_function_html_options',),8=>array('file'=>'/suitecrm/public/legacy/include/Smarty/plugins/function.sugar_getimage.php','function'=>'smarty_function_sugar_getimage',),9=>array('file'=>'/suitecrm/public/legacy/include/Smarty/plugins/function.sugar_help.php','function'=>'smarty_function_sugar_help',),10=>array('file'=>'/suitecrm/public/legacy/include/Smarty/plugins/function.sugar_getimagepath.php','function'=>'smarty_function_sugar_getimagepath',),));
?>

<div class="edit-border-bottom"></div>

<?php echo $_smarty_tpl->tpl_vars['ROLLOVER']->value;?>

<?php echo '<script'; ?>
 type="text/javascript" src="<?php echo smarty_function_sugar_getjspath(array('file'=>'modules/Emails/javascript/vars.js'),$_smarty_tpl);?>
"><?php echo '</script'; ?>
>
<?php echo '<script'; ?>
 type="text/javascript" src="<?php echo smarty_function_sugar_getjspath(array('file'=>'cache/include/javascript/sugar_grp_emails.js'),$_smarty_tpl);?>
"><?php echo '</script'; ?>
>
<link rel="stylesheet" type="text/css" href="<?php echo smarty_function_sugar_getjspath(array('file'=>'modules/Users/PasswordRequirementBox.css'),$_smarty_tpl);?>
">
<?php echo '<script'; ?>
 type="text/javascript" src="<?php echo smarty_function_sugar_getjspath(array('file'=>'cache/include/javascript/sugar_grp_yui_widgets.js'),$_smarty_tpl);?>
"><?php echo '</script'; ?>
>
<?php echo '<script'; ?>
 type='text/javascript' src='<?php echo smarty_function_sugar_getjspath(array('file'=>'include/SubPanel/SubPanelTiles.js'),$_smarty_tpl);?>
'><?php echo '</script'; ?>
>
<?php echo '<script'; ?>
 type='text/javascript'>
var ERR_RULES_NOT_MET = '<?php echo $_smarty_tpl->tpl_vars['MOD']->value['ERR_RULES_NOT_MET'];?>
';
var ERR_ENTER_OLD_PASSWORD = '<?php echo $_smarty_tpl->tpl_vars['MOD']->value['ERR_ENTER_OLD_PASSWORD'];?>
';
var ERR_ENTER_NEW_PASSWORD = '<?php echo $_smarty_tpl->tpl_vars['MOD']->value['ERR_ENTER_NEW_PASSWORD'];?>
';
var ERR_ENTER_CONFIRMATION_PASSWORD = '<?php echo $_smarty_tpl->tpl_vars['MOD']->value['ERR_ENTER_CONFIRMATION_PASSWORD'];?>
';
var ERR_REENTER_PASSWORDS = '<?php echo $_smarty_tpl->tpl_vars['MOD']->value['ERR_REENTER_PASSWORDS'];?>
';
<?php echo '</script'; ?>
>
<?php echo '<script'; ?>
 type='text/javascript' src='<?php echo smarty_function_sugar_getjspath(array('file'=>'modules/Users/User.js'),$_smarty_tpl);?>
'><?php echo '</script'; ?>
>
<?php echo '<script'; ?>
 type='text/javascript' src='<?php echo smarty_function_sugar_getjspath(array('file'=>'modules/Users/UserEditView.js'),$_smarty_tpl);?>
'><?php echo '</script'; ?>
>
<?php echo '<script'; ?>
 type='text/javascript' src='<?php echo smarty_function_sugar_getjspath(array('file'=>'modules/Users/PasswordRequirementBox.js'),$_smarty_tpl);?>
'><?php echo '</script'; ?>
>
<?php echo $_smarty_tpl->tpl_vars['ERROR_STRING']->value;?>

<!-- This is here for the external API forms -->
<form name="DetailView" id="DetailView" method="POST" action="index.php">
<input type="hidden" name="record" id="record" value="<?php echo $_smarty_tpl->tpl_vars['ID']->value;?>
">
<input type="hidden" name="module" value="Users">
<input type="hidden" name="return_module" value="Users">
<input type="hidden" name="return_id" value="<?php echo $_smarty_tpl->tpl_vars['RETURN_ID']->value;?>
">
<input type="hidden" name="return_action" value="EditView">
</form>
<form name="EditView" enctype="multipart/form-data" id="EditView" method="POST" action="index.php" class="userprofile">
<input type="hidden" name="display_tabs_def">
<input type="hidden" name="hide_tabs_def">
<input type="hidden" name="remove_tabs_def">
<input type="hidden" name="module" value="Users">
<input type="hidden" name="record" id="record" value="<?php echo $_smarty_tpl->tpl_vars['ID']->value;?>
">
<input type="hidden" name="action">
<input type="hidden" name="page" value="EditView">
<input type="hidden" name="return_module" value="<?php echo $_smarty_tpl->tpl_vars['RETURN_MODULE']->value;?>
">
<input type="hidden" name="return_id" value="<?php echo $_smarty_tpl->tpl_vars['RETURN_ID']->value;?>
">
<input type="hidden" name="return_action" value="<?php echo $_smarty_tpl->tpl_vars['RETURN_ACTION']->value;?>
">
<input type="hidden" name="password_change" id="password_change" value="false">
<input type="hidden" name="required_password" id="required_password" value='<?php echo $_smarty_tpl->tpl_vars['REQUIRED_PASSWORD']->value;?>
' >
<input type="hidden" name="old_user_name" value="<?php echo $_smarty_tpl->tpl_vars['USER_NAME']->value;?>
">
<input type="hidden" name="type" value="<?php echo $_smarty_tpl->tpl_vars['REDIRECT_EMAILS_TYPE']->value;?>
">
<input type="hidden" id="is_group" name="is_group" value='<?php echo $_smarty_tpl->tpl_vars['IS_GROUP']->value;?>
' <?php echo $_smarty_tpl->tpl_vars['IS_GROUP_DISABLED']->value;?>
>
<input type="hidden" id='portal_only' name='portal_only' value='<?php echo $_smarty_tpl->tpl_vars['IS_PORTALONLY']->value;?>
' <?php echo $_smarty_tpl->tpl_vars['IS_PORTAL_ONLY_DISABLED']->value;?>
>
<input type="hidden" name="is_admin" id="is_admin" value='<?php echo $_smarty_tpl->tpl_vars['IS_FOCUS_ADMIN']->value;?>
' <?php echo $_smarty_tpl->tpl_vars['IS_ADMIN_DISABLED']->value;?>
 >
<input type="hidden" name="is_current_admin" id="is_current_admin" value='<?php echo $_smarty_tpl->tpl_vars['IS_ADMIN']->value;?>
' >
<input type="hidden" name="edit_self" id="edit_self" value='<?php echo $_smarty_tpl->tpl_vars['EDIT_SELF']->value;?>
' >
<input type="hidden" name="required_email_address" id="required_email_address" value='<?php echo $_smarty_tpl->tpl_vars['REQUIRED_EMAIL_ADDRESS']->value;?>
' >
<input type="hidden" name="isDuplicate" id="isDuplicate" value="<?php echo $_smarty_tpl->tpl_vars['isDuplicate']->value;?>
">
<div id="popup_window"></div>
<?php echo '<script'; ?>
 type="text/javascript">
var EditView_tabs = new YAHOO.widget.TabView("EditView_tabs");


//Override so we do not force submit, just simulate the 'save button' click
SUGAR.EmailAddressWidget.prototype.forceSubmit = function() { document.getElementById('Save').click();}

EditView_tabs.on('contentReady', function(e){

<?php if ($_smarty_tpl->tpl_vars['ID']->value) {?>

    var eapmTabIndex = 4;
    <?php if (!$_smarty_tpl->tpl_vars['SHOW_THEMES']->value) {?>eapmTabIndex = 3;<?php }?>
    EditView_tabs.getTab(eapmTabIndex).set('dataSrc','index.php?sugar_body_only=1&module=Users&subpanel=eapm&action=SubPanelViewer&inline=1&record=<?php echo $_smarty_tpl->tpl_vars['ID']->value;?>
&layout_def_key=UserEAPM&inline=1&ajaxSubpanel=true');
    EditView_tabs.getTab(eapmTabIndex).set('cacheData',true);
    EditView_tabs.getTab(eapmTabIndex).on('dataLoadedChange',function(){
        //reinit action menus
        $("ul.clickMenu").each(function(index, node){
            $(node).sugarActionMenu();
        });
    });

    if ( document.location.hash == '#tab5' ) {
        EditView_tabs.selectTab(eapmTabIndex);
    }

<?php }?>

<?php if ($_smarty_tpl->tpl_vars['scroll_to_cal']->value) {?>
    
        //we are coming from the tour welcome page, so we need to simulate a click on the 4th tab
        // and scroll to the calendar_options div after the tabs have rendered
        document.getElementById('tab4').click();
        document.getElementById('calendar_options').scrollIntoView();
    
<?php }?>

});
<?php echo '</script'; ?>
>
<table width="100%" cellpadding="0" cellspacing="0" border="0" class="actionsContainer">
<tr>
<td>
<?php echo smarty_function_sugar_action_menu(array('id'=>"userEditActions",'class'=>"clickMenu fancymenu",'buttons'=>$_smarty_tpl->tpl_vars['ACTION_BUTTON_HEADER']->value,'flat'=>true),$_smarty_tpl);?>

</td>
<td align="right" nowrap>
<span class="required"><?php echo $_smarty_tpl->tpl_vars['APP']->value['LBL_REQUIRED_SYMBOL'];?>
</span> <?php echo $_smarty_tpl->tpl_vars['APP']->value['NTC_REQUIRED'];?>

</td>
</tr>
</table>
<div id="EditView_tabs" class="yui-navset">
<ul class="yui-nav userprofile-nav">
<li class="selected"><a id="tab1" href="#tab1"><em><?php echo $_smarty_tpl->tpl_vars['MOD']->value['LBL_USER_INFORMATION'];?>
</em></a></li>
<li <?php if ($_smarty_tpl->tpl_vars['CHANGE_PWD']->value == 0) {?>style='display:none'<?php }?>><a id="tab2" href="#tab2"><em><?php echo $_smarty_tpl->tpl_vars['MOD']->value['LBL_CHANGE_PASSWORD_TITLE'];?>
</em></a></li>
<?php if ($_smarty_tpl->tpl_vars['SHOW_THEMES']->value) {?>
<li><a id="tab3" href="#tab3" style='display:<?php echo $_smarty_tpl->tpl_vars['HIDE_FOR_GROUP_AND_PORTAL']->value;?>
;'><em><?php echo $_smarty_tpl->tpl_vars['MOD']->value['LBL_THEME'];?>
</em></a></li>
<?php }?>
<li><a id="tab4" href="#tab4" style='display:<?php echo $_smarty_tpl->tpl_vars['HIDE_FOR_GROUP_AND_PORTAL']->value;?>
;'><em><?php echo $_smarty_tpl->tpl_vars['MOD']->value['LBL_ADVANCED'];?>
</em></a></li>
<?php if ($_smarty_tpl->tpl_vars['ID']->value) {?>
<li><a id="tab5" href="#tab5" style='display:<?php echo $_smarty_tpl->tpl_vars['HIDE_FOR_GROUP_AND_PORTAL']->value;?>
;'><em><?php echo $_smarty_tpl->tpl_vars['MOD']->value['LBL_EAPM_SUBPANEL_TITLE'];?>
</em></a></li>
<?php }?>
<li><a id="tab6" href="#tab6" style='display:<?php echo $_smarty_tpl->tpl_vars['HIDE_FOR_GROUP_AND_PORTAL']->value;?>
;'><em><?php echo $_smarty_tpl->tpl_vars['MOD']->value['LBL_LAYOUT_OPTIONS'];?>
</em></a></li>
</ul>
<div class="yui-content user-tab-content">
<div>
<!-- BEGIN METADATA GENERATED CONTENT -->
<?php echo smarty_function_sugar_include(array('include'=>$_smarty_tpl->tpl_vars['includes']->value),$_smarty_tpl);?>

<div id="EditView_tabs">

<ul class="nav nav-tabs">
</ul>
<div class="clearfix"></div>
<div class="tab-content" style="padding: 0; border: 0;">

<div class="tab-pane panel-collapse">&nbsp;</div>
</div>

<div class="panel-content">




<div class="panel panel-default">
<div class="panel-heading ">
<a class="" role="button" data-toggle="collapse-edit" aria-expanded="false">
<div class="col-xs-10 col-sm-11 col-md-11">
<?php echo smarty_function_sugar_translate(array('label'=>'LBL_USER_INFORMATION','module'=>'Users'),$_smarty_tpl);?>

</div>
</a>
</div>
<div class="panel-body panel-collapse collapse in panelContainer" id="detailpanel_-1" data-id="LBL_USER_INFORMATION">
<div class="tab-content">
<!-- tab_panel_content.tpl -->
<div class="row edit-view-row">



<div class="col-xs-12 col-sm-6 edit-view-row-item edit-view-bordered" data-field="user_name">


<div class="col-xs-12 col-sm-4 label" data-label="LBL_USER_NAME">

<?php $_smarty_tpl->smarty->_cache['_tag_stack'][] = array('minify', array());
$_block_repeat=true;
echo smarty_block_minify(array(), null, $_smarty_tpl, $_block_repeat);
while ($_block_repeat) {
ob_start();
$_smarty_tpl->smarty->ext->_capture->open($_smarty_tpl, "label", "label", null);
echo smarty_function_sugar_translate(array('label'=>'LBL_USER_NAME','module'=>'Users'),$_smarty_tpl);
$_smarty_tpl->smarty->ext->_capture->close($_smarty_tpl);
echo smarty_modifier_strip_semicolon($_smarty_tpl->tpl_vars['label']->value);?>
:

<span class="required">*</span>
<?php $_block_repeat=false;
echo smarty_block_minify(array(), ob_get_clean(), $_smarty_tpl, $_block_repeat);
}
array_pop($_smarty_tpl->smarty->_cache['_tag_stack']);?>
</div>

<div class="col-xs-12 col-sm-8 edit-view-field " type="user_name" field="user_name"  >
<?php echo smarty_function_counter(array('name'=>"panelFieldCount",'print'=>false),$_smarty_tpl);?>


<?php if (strlen($_smarty_tpl->tpl_vars['fields']->value['user_name']['value']) <= 0) {
$_smarty_tpl->_assignInScope('value', $_smarty_tpl->tpl_vars['fields']->value['user_name']['default_value']);
} else {
$_smarty_tpl->_assignInScope('value', $_smarty_tpl->tpl_vars['fields']->value['user_name']['value']);
}?>
<input type='text' name='<?php echo $_smarty_tpl->tpl_vars['fields']->value['user_name']['name'];?>
'
id='<?php echo $_smarty_tpl->tpl_vars['fields']->value['user_name']['name'];?>
' size='30'
maxlength='60'        value='<?php echo $_smarty_tpl->tpl_vars['value']->value;?>
' title=''      >
</div>
<div class="edit-dotted-border"></div>

<!-- [/hide] -->
</div>


<div class="col-xs-12 col-sm-6 edit-view-row-item edit-view-bordered" data-field="first_name">


<div class="col-xs-12 col-sm-4 label" data-label="LBL_FIRST_NAME">

<?php $_smarty_tpl->smarty->_cache['_tag_stack'][] = array('minify', array());
$_block_repeat=true;
echo smarty_block_minify(array(), null, $_smarty_tpl, $_block_repeat);
while ($_block_repeat) {
ob_start();
$_smarty_tpl->smarty->ext->_capture->open($_smarty_tpl, "label", "label", null);
echo smarty_function_sugar_translate(array('label'=>'LBL_FIRST_NAME','module'=>'Users'),$_smarty_tpl);
$_smarty_tpl->smarty->ext->_capture->close($_smarty_tpl);
echo smarty_modifier_strip_semicolon($_smarty_tpl->tpl_vars['label']->value);?>
:

<?php $_block_repeat=false;
echo smarty_block_minify(array(), ob_get_clean(), $_smarty_tpl, $_block_repeat);
}
array_pop($_smarty_tpl->smarty->_cache['_tag_stack']);?>
</div>

<div class="col-xs-12 col-sm-8 edit-view-field " type="name" field="first_name"  >
<?php echo smarty_function_counter(array('name'=>"panelFieldCount",'print'=>false),$_smarty_tpl);?>


<?php if (strlen($_smarty_tpl->tpl_vars['fields']->value['first_name']['value']) <= 0) {
$_smarty_tpl->_assignInScope('value', $_smarty_tpl->tpl_vars['fields']->value['first_name']['default_value']);
} else {
$_smarty_tpl->_assignInScope('value', $_smarty_tpl->tpl_vars['fields']->value['first_name']['value']);
}?>
<input type='text' name='<?php echo $_smarty_tpl->tpl_vars['fields']->value['first_name']['name'];?>
'
id='<?php echo $_smarty_tpl->tpl_vars['fields']->value['first_name']['name'];?>
' size='30'
maxlength='255'        value='<?php echo $_smarty_tpl->tpl_vars['value']->value;?>
' title=''      >
</div>
<div class="edit-dotted-border"></div>

<!-- [/hide] -->
</div>
<div class="clear"></div>
<div class="clear"></div>
</div>
<div class="row edit-view-row">



<div class="col-xs-12 col-sm-6 edit-view-row-item edit-view-bordered" data-field="status">


<div class="col-xs-12 col-sm-4 label" data-label="LBL_STATUS">

<?php $_smarty_tpl->smarty->_cache['_tag_stack'][] = array('minify', array());
$_block_repeat=true;
echo smarty_block_minify(array(), null, $_smarty_tpl, $_block_repeat);
while ($_block_repeat) {
ob_start();
$_smarty_tpl->smarty->ext->_capture->open($_smarty_tpl, "label", "label", null);
echo smarty_function_sugar_translate(array('label'=>'LBL_STATUS','module'=>'Users'),$_smarty_tpl);
$_smarty_tpl->smarty->ext->_capture->close($_smarty_tpl);
echo smarty_modifier_strip_semicolon($_smarty_tpl->tpl_vars['label']->value);?>
:

<span class="required">*</span>
<?php $_block_repeat=false;
echo smarty_block_minify(array(), ob_get_clean(), $_smarty_tpl, $_block_repeat);
}
array_pop($_smarty_tpl->smarty->_cache['_tag_stack']);?>
</div>

<div class="col-xs-12 col-sm-8 edit-view-field " type="enum" field="status"  >
<?php echo smarty_function_counter(array('name'=>"panelFieldCount",'print'=>false),$_smarty_tpl);?>

<?php if (!empty($_smarty_tpl->tpl_vars['IS_ADMIN']->value)) {?>
<select name="<?php echo $_smarty_tpl->tpl_vars['fields']->value['status']['name'];?>
"
id="<?php echo $_smarty_tpl->tpl_vars['fields']->value['status']['name'];?>
"
title=''              
>
<?php if ((isset($_smarty_tpl->tpl_vars['fields']->value['status']['value']))) {
echo smarty_function_html_options(array('options'=>$_smarty_tpl->tpl_vars['fields']->value['status']['options'],'selected'=>$_smarty_tpl->tpl_vars['fields']->value['status']['value']),$_smarty_tpl);?>

<?php } else {
echo smarty_function_html_options(array('options'=>$_smarty_tpl->tpl_vars['fields']->value['status']['options'],'selected'=>$_smarty_tpl->tpl_vars['fields']->value['status']['default']),$_smarty_tpl);?>

<?php }?>
</select>
<?php } else {
echo $_smarty_tpl->tpl_vars['STATUS_READONLY']->value;
}?>
</div>
<div class="edit-dotted-border"></div>

<!-- [/hide] -->
</div>


<div class="col-xs-12 col-sm-6 edit-view-row-item edit-view-bordered" data-field="last_name">


<div class="col-xs-12 col-sm-4 label" data-label="LBL_LAST_NAME">

<?php $_smarty_tpl->smarty->_cache['_tag_stack'][] = array('minify', array());
$_block_repeat=true;
echo smarty_block_minify(array(), null, $_smarty_tpl, $_block_repeat);
while ($_block_repeat) {
ob_start();
$_smarty_tpl->smarty->ext->_capture->open($_smarty_tpl, "label", "label", null);
echo smarty_function_sugar_translate(array('label'=>'LBL_LAST_NAME','module'=>'Users'),$_smarty_tpl);
$_smarty_tpl->smarty->ext->_capture->close($_smarty_tpl);
echo smarty_modifier_strip_semicolon($_smarty_tpl->tpl_vars['label']->value);?>
:

<span class="required">*</span>
<?php $_block_repeat=false;
echo smarty_block_minify(array(), ob_get_clean(), $_smarty_tpl, $_block_repeat);
}
array_pop($_smarty_tpl->smarty->_cache['_tag_stack']);?>
</div>

<div class="col-xs-12 col-sm-8 edit-view-field " type="name" field="last_name"  >
<?php echo smarty_function_counter(array('name'=>"panelFieldCount",'print'=>false),$_smarty_tpl);?>


<?php if (strlen($_smarty_tpl->tpl_vars['fields']->value['last_name']['value']) <= 0) {
$_smarty_tpl->_assignInScope('value', $_smarty_tpl->tpl_vars['fields']->value['last_name']['default_value']);
} else {
$_smarty_tpl->_assignInScope('value', $_smarty_tpl->tpl_vars['fields']->value['last_name']['value']);
}?>
<input type='text' name='<?php echo $_smarty_tpl->tpl_vars['fields']->value['last_name']['name'];?>
'
id='<?php echo $_smarty_tpl->tpl_vars['fields']->value['last_name']['name'];?>
' size='30'
maxlength='255'        value='<?php echo $_smarty_tpl->tpl_vars['value']->value;?>
' title=''      >
</div>
<div class="edit-dotted-border"></div>

<!-- [/hide] -->
</div>
<div class="clear"></div>
<div class="clear"></div>
</div>
<div class="row edit-view-row">



<div class="col-xs-12 col-sm-12 edit-view-row-item" data-field="UserType">


<div class="col-xs-12 col-sm-2 label" data-label="LBL_USER_TYPE">

<?php $_smarty_tpl->smarty->_cache['_tag_stack'][] = array('minify', array());
$_block_repeat=true;
echo smarty_block_minify(array(), null, $_smarty_tpl, $_block_repeat);
while ($_block_repeat) {
ob_start();
$_smarty_tpl->smarty->ext->_capture->open($_smarty_tpl, "label", "label", null);
echo smarty_function_sugar_translate(array('label'=>'LBL_USER_TYPE','module'=>'Users'),$_smarty_tpl);
$_smarty_tpl->smarty->ext->_capture->close($_smarty_tpl);
echo smarty_modifier_strip_semicolon($_smarty_tpl->tpl_vars['label']->value);?>
:

<?php $_block_repeat=false;
echo smarty_block_minify(array(), ob_get_clean(), $_smarty_tpl, $_block_repeat);
}
array_pop($_smarty_tpl->smarty->_cache['_tag_stack']);?>
</div>

<div class="col-xs-12 col-sm-8 edit-view-field " type="enum" field="UserType" colspan='3' >
<?php echo smarty_function_counter(array('name'=>"panelFieldCount",'print'=>false),$_smarty_tpl);?>

<?php if ($_smarty_tpl->tpl_vars['IS_ADMIN']->value) {
echo $_smarty_tpl->tpl_vars['USER_TYPE_DROPDOWN']->value;
} else {
echo $_smarty_tpl->tpl_vars['USER_TYPE_READONLY']->value;
}?>
</div>
<div class="edit-dotted-border"></div>

<!-- [/hide] -->
</div>
<div class="clear"></div>
</div>
<div class="row edit-view-row">



<div class="col-xs-12 col-sm-12 edit-view-row-item" data-field="photo">


<div class="col-xs-12 col-sm-2 label" data-label="LBL_PHOTO">

<?php $_smarty_tpl->smarty->_cache['_tag_stack'][] = array('minify', array());
$_block_repeat=true;
echo smarty_block_minify(array(), null, $_smarty_tpl, $_block_repeat);
while ($_block_repeat) {
ob_start();
$_smarty_tpl->smarty->ext->_capture->open($_smarty_tpl, "label", "label", null);
echo smarty_function_sugar_translate(array('label'=>'LBL_PHOTO','module'=>'Users'),$_smarty_tpl);
$_smarty_tpl->smarty->ext->_capture->close($_smarty_tpl);
echo smarty_modifier_strip_semicolon($_smarty_tpl->tpl_vars['label']->value);?>
:

<?php $_block_repeat=false;
echo smarty_block_minify(array(), ob_get_clean(), $_smarty_tpl, $_block_repeat);
}
array_pop($_smarty_tpl->smarty->_cache['_tag_stack']);?>
</div>

<div class="col-xs-12 col-sm-8 edit-view-field " type="image" field="photo" colspan='3' >
<?php echo smarty_function_counter(array('name'=>"panelFieldCount",'print'=>false),$_smarty_tpl);?>


<?php echo '<script'; ?>
 type="text/javascript">
    
        $( document ).ready(function() {
        $( "form#EditView" )
        .attr( "enctype", "multipart/form-data" )
        .attr( "encoding", "multipart/form-data" );
    });

<?php echo '</script'; ?>
>
<?php echo '<script'; ?>
 type="text/javascript" src='include/SugarFields/Fields/Image/SugarFieldFile.js?v=MWagh1TdXMJiNr8SpuWIOg'><?php echo '</script'; ?>
>
<?php if (!empty($_smarty_tpl->tpl_vars['fields']->value['photo']['value'])) {
$_smarty_tpl->_assignInScope('showRemove', true);
} else {
$_smarty_tpl->_assignInScope('showRemove', false);
}
$_smarty_tpl->_assignInScope('noChange', false);?>
<input type="hidden" name="deleteAttachment" value="0">
<input type="hidden" name="<?php echo $_smarty_tpl->tpl_vars['fields']->value['photo']['name'];?>
" id="<?php echo $_smarty_tpl->tpl_vars['fields']->value['photo']['name'];?>
" value="<?php echo $_smarty_tpl->tpl_vars['fields']->value['photo']['value'];?>
">
<input type="hidden" name="<?php echo $_smarty_tpl->tpl_vars['fields']->value['photo']['name'];?>
_record_id" id="<?php echo $_smarty_tpl->tpl_vars['fields']->value['photo']['name'];?>
_record_id" value="<?php echo $_smarty_tpl->tpl_vars['fields']->value['id']['value'];?>
">
<span id="<?php echo $_smarty_tpl->tpl_vars['fields']->value['photo']['name'];?>
_old" style="display:<?php if (!$_smarty_tpl->tpl_vars['showRemove']->value) {?>none;<?php }?>">
<a href="index.php?entryPoint=download&id=<?php echo $_smarty_tpl->tpl_vars['fields']->value['id']['value'];?>
_<?php echo $_smarty_tpl->tpl_vars['fields']->value['photo']['name'];?>
&type=<?php echo $_smarty_tpl->tpl_vars['module']->value;?>
&time=<?php echo $_smarty_tpl->tpl_vars['fields']->value['date_modified']['value'];?>
" class="tabDetailViewDFLink"><?php echo $_smarty_tpl->tpl_vars['fields']->value['photo']['value'];?>
</a>
<?php if (!$_smarty_tpl->tpl_vars['noChange']->value) {?>
<input type='button' class='button' id='remove_button' value='<?php echo $_smarty_tpl->tpl_vars['APP']->value['LBL_REMOVE'];?>
' onclick='SUGAR.field.file.deleteAttachment("<?php echo $_smarty_tpl->tpl_vars['fields']->value['photo']['name'];?>
","",this);'>
<?php }?>
</span>
<?php if (!$_smarty_tpl->tpl_vars['noChange']->value) {?>
<span id="<?php echo $_smarty_tpl->tpl_vars['fields']->value['photo']['name'];?>
_new" style="display:<?php if ($_smarty_tpl->tpl_vars['showRemove']->value) {?>none;<?php }?>">
<input type="hidden" name="<?php echo $_smarty_tpl->tpl_vars['fields']->value['photo']['name'];?>
_escaped">
<input id="<?php echo $_smarty_tpl->tpl_vars['fields']->value['photo']['name'];?>
_file" name="<?php echo $_smarty_tpl->tpl_vars['fields']->value['photo']['name'];?>
_file"
type="file" title='' size="30"
maxlength='255'
>
<?php } else { ?>

<?php }
echo '<script'; ?>
 type="text/javascript">
$( "#<?php echo $_smarty_tpl->tpl_vars['fields']->value['photo']['name'];?>
_file " ).change(function() {
        $("#<?php echo $_smarty_tpl->tpl_vars['fields']->value['photo']['name'];?>
").val($("#<?php echo $_smarty_tpl->tpl_vars['fields']->value['photo']['name'];?>
_file").val());
});
        <?php echo '</script'; ?>
>
</span>
</div>
<div class="edit-dotted-border"></div>

<!-- [/hide] -->
</div>
<div class="clear"></div>
</div>
<div class="row edit-view-row">



<div class="col-xs-12 col-sm-12 edit-view-row-item" data-field="factor_auth">


<div class="col-xs-12 col-sm-2 label" data-label="LBL_FACTOR_AUTH">

<?php $_smarty_tpl->smarty->_cache['_tag_stack'][] = array('minify', array());
$_block_repeat=true;
echo smarty_block_minify(array(), null, $_smarty_tpl, $_block_repeat);
while ($_block_repeat) {
ob_start();
$_smarty_tpl->smarty->ext->_capture->open($_smarty_tpl, "label", "label", null);
echo smarty_function_sugar_translate(array('label'=>'LBL_FACTOR_AUTH','module'=>'Users'),$_smarty_tpl);
$_smarty_tpl->smarty->ext->_capture->close($_smarty_tpl);
echo smarty_modifier_strip_semicolon($_smarty_tpl->tpl_vars['label']->value);?>
:

<?php $_block_repeat=false;
echo smarty_block_minify(array(), ob_get_clean(), $_smarty_tpl, $_block_repeat);
}
array_pop($_smarty_tpl->smarty->_cache['_tag_stack']);?>
</div>

<div class="col-xs-12 col-sm-8 edit-view-field " type="bool" field="factor_auth" colspan='3' >
<?php echo smarty_function_counter(array('name'=>"panelFieldCount",'print'=>false),$_smarty_tpl);?>


<?php if (strval($_smarty_tpl->tpl_vars['fields']->value['factor_auth']['value']) == "1" || strval($_smarty_tpl->tpl_vars['fields']->value['factor_auth']['value']) == "yes" || strval($_smarty_tpl->tpl_vars['fields']->value['factor_auth']['value']) == "on") {?> 
<?php $_smarty_tpl->_assignInScope('checked', 'checked="checked"');
} else {
$_smarty_tpl->_assignInScope('checked', '');
}?>
<input type="hidden" name="<?php echo $_smarty_tpl->tpl_vars['fields']->value['factor_auth']['name'];?>
" value="0"> 
<input type="checkbox" id="<?php echo $_smarty_tpl->tpl_vars['fields']->value['factor_auth']['name'];?>
" 
name="<?php echo $_smarty_tpl->tpl_vars['fields']->value['factor_auth']['name'];?>
" 
value="1" title='' tabindex="0" <?php echo $_smarty_tpl->tpl_vars['checked']->value;?>
 >
</div>
<div class="edit-dotted-border"></div>

<!-- [/hide] -->
</div>
<div class="clear"></div>
</div>
</div>
</div>
</div>




<div class="panel panel-default">
<div class="panel-heading ">
<a class="" role="button" data-toggle="collapse-edit" aria-expanded="false">
<div class="col-xs-10 col-sm-11 col-md-11">
<?php echo smarty_function_sugar_translate(array('label'=>'LBL_EMPLOYEE_INFORMATION','module'=>'Users'),$_smarty_tpl);?>

</div>
</a>
</div>
<div class="panel-body panel-collapse collapse in panelContainer" id="detailpanel_0" data-id="LBL_EMPLOYEE_INFORMATION">
<div class="tab-content">
<!-- tab_panel_content.tpl -->
<div class="row edit-view-row">



<div class="col-xs-12 col-sm-6 edit-view-row-item edit-view-bordered" data-field="employee_status">


<div class="col-xs-12 col-sm-4 label" data-label="LBL_EMPLOYEE_STATUS">

<?php $_smarty_tpl->smarty->_cache['_tag_stack'][] = array('minify', array());
$_block_repeat=true;
echo smarty_block_minify(array(), null, $_smarty_tpl, $_block_repeat);
while ($_block_repeat) {
ob_start();
$_smarty_tpl->smarty->ext->_capture->open($_smarty_tpl, "label", "label", null);
echo smarty_function_sugar_translate(array('label'=>'LBL_EMPLOYEE_STATUS','module'=>'Users'),$_smarty_tpl);
$_smarty_tpl->smarty->ext->_capture->close($_smarty_tpl);
echo smarty_modifier_strip_semicolon($_smarty_tpl->tpl_vars['label']->value);?>
:

<?php $_block_repeat=false;
echo smarty_block_minify(array(), ob_get_clean(), $_smarty_tpl, $_block_repeat);
}
array_pop($_smarty_tpl->smarty->_cache['_tag_stack']);?>
</div>

<div class="col-xs-12 col-sm-8 edit-view-field " type="varchar" field="employee_status"  >
<?php echo smarty_function_counter(array('name'=>"panelFieldCount",'print'=>false),$_smarty_tpl);?>

<?php if ($_smarty_tpl->tpl_vars['IS_ADMIN']->value) {?><span id='employee_status_span'>
<?php echo $_smarty_tpl->tpl_vars['fields']->value['employee_status']['value'];?>

</span><?php } else {
echo $_smarty_tpl->tpl_vars['EMPLOYEE_STATUS_READONLY']->value;
}?>
</div>
<div class="edit-dotted-border"></div>

<!-- [/hide] -->
</div>


<div class="col-xs-12 col-sm-6 edit-view-row-item edit-view-bordered" data-field="show_on_employees">


<div class="col-xs-12 col-sm-4 label" data-label="LBL_SHOW_ON_EMPLOYEES">

<?php $_smarty_tpl->smarty->_cache['_tag_stack'][] = array('minify', array());
$_block_repeat=true;
echo smarty_block_minify(array(), null, $_smarty_tpl, $_block_repeat);
while ($_block_repeat) {
ob_start();
$_smarty_tpl->smarty->ext->_capture->open($_smarty_tpl, "label", "label", null);
echo smarty_function_sugar_translate(array('label'=>'LBL_SHOW_ON_EMPLOYEES','module'=>'Users'),$_smarty_tpl);
$_smarty_tpl->smarty->ext->_capture->close($_smarty_tpl);
echo smarty_modifier_strip_semicolon($_smarty_tpl->tpl_vars['label']->value);?>
:

<?php $_block_repeat=false;
echo smarty_block_minify(array(), ob_get_clean(), $_smarty_tpl, $_block_repeat);
}
array_pop($_smarty_tpl->smarty->_cache['_tag_stack']);?>
</div>

<div class="col-xs-12 col-sm-8 edit-view-field " type="bool" field="show_on_employees"  >
<?php echo smarty_function_counter(array('name'=>"panelFieldCount",'print'=>false),$_smarty_tpl);?>


<?php if (strval($_smarty_tpl->tpl_vars['fields']->value['show_on_employees']['value']) == "1" || strval($_smarty_tpl->tpl_vars['fields']->value['show_on_employees']['value']) == "yes" || strval($_smarty_tpl->tpl_vars['fields']->value['show_on_employees']['value']) == "on") {?> 
<?php $_smarty_tpl->_assignInScope('checked', 'checked="checked"');
} else {
$_smarty_tpl->_assignInScope('checked', '');
}?>
<input type="hidden" name="<?php echo $_smarty_tpl->tpl_vars['fields']->value['show_on_employees']['name'];?>
" value="0"> 
<input type="checkbox" id="<?php echo $_smarty_tpl->tpl_vars['fields']->value['show_on_employees']['name'];?>
" 
name="<?php echo $_smarty_tpl->tpl_vars['fields']->value['show_on_employees']['name'];?>
" 
value="1" title='' tabindex="0" <?php echo $_smarty_tpl->tpl_vars['checked']->value;?>
 >
</div>
<div class="edit-dotted-border"></div>

<!-- [/hide] -->
</div>
<div class="clear"></div>
<div class="clear"></div>
</div>
<div class="row edit-view-row">



<div class="col-xs-12 col-sm-6 edit-view-row-item edit-view-bordered" data-field="title">


<div class="col-xs-12 col-sm-4 label" data-label="LBL_TITLE">

<?php $_smarty_tpl->smarty->_cache['_tag_stack'][] = array('minify', array());
$_block_repeat=true;
echo smarty_block_minify(array(), null, $_smarty_tpl, $_block_repeat);
while ($_block_repeat) {
ob_start();
$_smarty_tpl->smarty->ext->_capture->open($_smarty_tpl, "label", "label", null);
echo smarty_function_sugar_translate(array('label'=>'LBL_TITLE','module'=>'Users'),$_smarty_tpl);
$_smarty_tpl->smarty->ext->_capture->close($_smarty_tpl);
echo smarty_modifier_strip_semicolon($_smarty_tpl->tpl_vars['label']->value);?>
:

<?php $_block_repeat=false;
echo smarty_block_minify(array(), ob_get_clean(), $_smarty_tpl, $_block_repeat);
}
array_pop($_smarty_tpl->smarty->_cache['_tag_stack']);?>
</div>

<div class="col-xs-12 col-sm-8 edit-view-field " type="varchar" field="title"  >
<?php echo smarty_function_counter(array('name'=>"panelFieldCount",'print'=>false),$_smarty_tpl);?>

<?php if ($_smarty_tpl->tpl_vars['IS_ADMIN']->value) {
if (strlen($_smarty_tpl->tpl_vars['fields']->value['title']['value']) <= 0) {
$_smarty_tpl->_assignInScope('value', $_smarty_tpl->tpl_vars['fields']->value['title']['default_value']);
} else {
$_smarty_tpl->_assignInScope('value', $_smarty_tpl->tpl_vars['fields']->value['title']['value']);
}?>
<input type='text' name='<?php echo $_smarty_tpl->tpl_vars['fields']->value['title']['name'];?>
'
id='<?php echo $_smarty_tpl->tpl_vars['fields']->value['title']['name'];?>
' size='30'
maxlength='50'        value='<?php echo $_smarty_tpl->tpl_vars['value']->value;?>
' title=''      >
<?php } else {
echo $_smarty_tpl->tpl_vars['TITLE_READONLY']->value;
}?>
</div>
<div class="edit-dotted-border"></div>

<!-- [/hide] -->
</div>


<div class="col-xs-12 col-sm-6 edit-view-row-item edit-view-bordered" data-field="phone_work">


<div class="col-xs-12 col-sm-4 label" data-label="LBL_WORK_PHONE">

<?php $_smarty_tpl->smarty->_cache['_tag_stack'][] = array('minify', array());
$_block_repeat=true;
echo smarty_block_minify(array(), null, $_smarty_tpl, $_block_repeat);
while ($_block_repeat) {
ob_start();
$_smarty_tpl->smarty->ext->_capture->open($_smarty_tpl, "label", "label", null);
echo smarty_function_sugar_translate(array('label'=>'LBL_WORK_PHONE','module'=>'Users'),$_smarty_tpl);
$_smarty_tpl->smarty->ext->_capture->close($_smarty_tpl);
echo smarty_modifier_strip_semicolon($_smarty_tpl->tpl_vars['label']->value);?>
:

<?php $_block_repeat=false;
echo smarty_block_minify(array(), ob_get_clean(), $_smarty_tpl, $_block_repeat);
}
array_pop($_smarty_tpl->smarty->_cache['_tag_stack']);?>
</div>

<div class="col-xs-12 col-sm-8 edit-view-field " type="phone" field="phone_work"  class="phone">
<?php echo smarty_function_counter(array('name'=>"panelFieldCount",'print'=>false),$_smarty_tpl);?>


<?php if (strlen($_smarty_tpl->tpl_vars['fields']->value['phone_work']['value']) <= 0) {
$_smarty_tpl->_assignInScope('value', $_smarty_tpl->tpl_vars['fields']->value['phone_work']['default_value']);
} else {
$_smarty_tpl->_assignInScope('value', $_smarty_tpl->tpl_vars['fields']->value['phone_work']['value']);
}?>  
<input type='text' name='<?php echo $_smarty_tpl->tpl_vars['fields']->value['phone_work']['name'];?>
' id='<?php echo $_smarty_tpl->tpl_vars['fields']->value['phone_work']['name'];?>
' size='30' maxlength='50' value='<?php echo $_smarty_tpl->tpl_vars['value']->value;?>
' title='' tabindex='0'	  class="phone" >
</div>
<div class="edit-dotted-border"></div>

<!-- [/hide] -->
</div>
<div class="clear"></div>
<div class="clear"></div>
</div>
<div class="row edit-view-row">



<div class="col-xs-12 col-sm-6 edit-view-row-item edit-view-bordered" data-field="department">


<div class="col-xs-12 col-sm-4 label" data-label="LBL_DEPARTMENT">

<?php $_smarty_tpl->smarty->_cache['_tag_stack'][] = array('minify', array());
$_block_repeat=true;
echo smarty_block_minify(array(), null, $_smarty_tpl, $_block_repeat);
while ($_block_repeat) {
ob_start();
$_smarty_tpl->smarty->ext->_capture->open($_smarty_tpl, "label", "label", null);
echo smarty_function_sugar_translate(array('label'=>'LBL_DEPARTMENT','module'=>'Users'),$_smarty_tpl);
$_smarty_tpl->smarty->ext->_capture->close($_smarty_tpl);
echo smarty_modifier_strip_semicolon($_smarty_tpl->tpl_vars['label']->value);?>
:

<?php $_block_repeat=false;
echo smarty_block_minify(array(), ob_get_clean(), $_smarty_tpl, $_block_repeat);
}
array_pop($_smarty_tpl->smarty->_cache['_tag_stack']);?>
</div>

<div class="col-xs-12 col-sm-8 edit-view-field " type="varchar" field="department"  >
<?php echo smarty_function_counter(array('name'=>"panelFieldCount",'print'=>false),$_smarty_tpl);?>

<?php if ($_smarty_tpl->tpl_vars['IS_ADMIN']->value) {
if (strlen($_smarty_tpl->tpl_vars['fields']->value['department']['value']) <= 0) {
$_smarty_tpl->_assignInScope('value', $_smarty_tpl->tpl_vars['fields']->value['department']['default_value']);
} else {
$_smarty_tpl->_assignInScope('value', $_smarty_tpl->tpl_vars['fields']->value['department']['value']);
}?>
<input type='text' name='<?php echo $_smarty_tpl->tpl_vars['fields']->value['department']['name'];?>
'
id='<?php echo $_smarty_tpl->tpl_vars['fields']->value['department']['name'];?>
' size='30'
maxlength='50'        value='<?php echo $_smarty_tpl->tpl_vars['value']->value;?>
' title=''      >
<?php } else {
echo $_smarty_tpl->tpl_vars['DEPT_READONLY']->value;
}?>
</div>
<div class="edit-dotted-border"></div>

<!-- [/hide] -->
</div>


<div class="col-xs-12 col-sm-6 edit-view-row-item edit-view-bordered" data-field="phone_mobile">


<div class="col-xs-12 col-sm-4 label" data-label="LBL_MOBILE_PHONE">

<?php $_smarty_tpl->smarty->_cache['_tag_stack'][] = array('minify', array());
$_block_repeat=true;
echo smarty_block_minify(array(), null, $_smarty_tpl, $_block_repeat);
while ($_block_repeat) {
ob_start();
$_smarty_tpl->smarty->ext->_capture->open($_smarty_tpl, "label", "label", null);
echo smarty_function_sugar_translate(array('label'=>'LBL_MOBILE_PHONE','module'=>'Users'),$_smarty_tpl);
$_smarty_tpl->smarty->ext->_capture->close($_smarty_tpl);
echo smarty_modifier_strip_semicolon($_smarty_tpl->tpl_vars['label']->value);?>
:

<?php $_block_repeat=false;
echo smarty_block_minify(array(), ob_get_clean(), $_smarty_tpl, $_block_repeat);
}
array_pop($_smarty_tpl->smarty->_cache['_tag_stack']);?>
</div>

<div class="col-xs-12 col-sm-8 edit-view-field " type="phone" field="phone_mobile"  class="phone">
<?php echo smarty_function_counter(array('name'=>"panelFieldCount",'print'=>false),$_smarty_tpl);?>


<?php if (strlen($_smarty_tpl->tpl_vars['fields']->value['phone_mobile']['value']) <= 0) {
$_smarty_tpl->_assignInScope('value', $_smarty_tpl->tpl_vars['fields']->value['phone_mobile']['default_value']);
} else {
$_smarty_tpl->_assignInScope('value', $_smarty_tpl->tpl_vars['fields']->value['phone_mobile']['value']);
}?>  
<input type='text' name='<?php echo $_smarty_tpl->tpl_vars['fields']->value['phone_mobile']['name'];?>
' id='<?php echo $_smarty_tpl->tpl_vars['fields']->value['phone_mobile']['name'];?>
' size='30' maxlength='50' value='<?php echo $_smarty_tpl->tpl_vars['value']->value;?>
' title='' tabindex='0'	  class="phone" >
</div>
<div class="edit-dotted-border"></div>

<!-- [/hide] -->
</div>
<div class="clear"></div>
<div class="clear"></div>
</div>
<div class="row edit-view-row">



<div class="col-xs-12 col-sm-6 edit-view-row-item edit-view-bordered" data-field="reports_to_name">


<div class="col-xs-12 col-sm-4 label" data-label="LBL_REPORTS_TO_NAME">

<?php $_smarty_tpl->smarty->_cache['_tag_stack'][] = array('minify', array());
$_block_repeat=true;
echo smarty_block_minify(array(), null, $_smarty_tpl, $_block_repeat);
while ($_block_repeat) {
ob_start();
$_smarty_tpl->smarty->ext->_capture->open($_smarty_tpl, "label", "label", null);
echo smarty_function_sugar_translate(array('label'=>'LBL_REPORTS_TO_NAME','module'=>'Users'),$_smarty_tpl);
$_smarty_tpl->smarty->ext->_capture->close($_smarty_tpl);
echo smarty_modifier_strip_semicolon($_smarty_tpl->tpl_vars['label']->value);?>
:

<?php $_block_repeat=false;
echo smarty_block_minify(array(), ob_get_clean(), $_smarty_tpl, $_block_repeat);
}
array_pop($_smarty_tpl->smarty->_cache['_tag_stack']);?>
</div>

<div class="col-xs-12 col-sm-8 edit-view-field " type="relate" field="reports_to_name"  >
<?php echo smarty_function_counter(array('name'=>"panelFieldCount",'print'=>false),$_smarty_tpl);?>

<?php if ($_smarty_tpl->tpl_vars['IS_ADMIN']->value) {?>
<input type="text" name="<?php echo $_smarty_tpl->tpl_vars['fields']->value['reports_to_name']['name'];?>
" class="sqsEnabled" tabindex="0" id="<?php echo $_smarty_tpl->tpl_vars['fields']->value['reports_to_name']['name'];?>
" size="" value="<?php echo $_smarty_tpl->tpl_vars['fields']->value['reports_to_name']['value'];?>
" title='' autocomplete="off"  	 >
<input type="hidden" name="<?php echo $_smarty_tpl->tpl_vars['fields']->value['reports_to_name']['id_name'];?>
" 
id="<?php echo $_smarty_tpl->tpl_vars['fields']->value['reports_to_name']['id_name'];?>
" 
value="<?php echo $_smarty_tpl->tpl_vars['fields']->value['reports_to_id']['value'];?>
">
<span class="id-ff multiple selectcrossbtn">
<button type="button" name="btn_<?php echo $_smarty_tpl->tpl_vars['fields']->value['reports_to_name']['name'];?>
" id="btn_<?php echo $_smarty_tpl->tpl_vars['fields']->value['reports_to_name']['name'];?>
" tabindex="0" title="<?php echo smarty_function_sugar_translate(array('label'=>"LBL_ACCESSKEY_SELECT_USERS_TITLE"),$_smarty_tpl);?>
" class="firstChild" value="<?php echo smarty_function_sugar_translate(array('label'=>"LBL_ACCESSKEY_SELECT_USERS_LABEL"),$_smarty_tpl);?>
"
onclick='open_popup(
"<?php echo $_smarty_tpl->tpl_vars['fields']->value['reports_to_name']['module'];?>
", 
600, 
400, 
"", 
true, 
false, 
{"call_back_function":"set_return","form_name":"EditView","field_to_name_array":{"id":"reports_to_id","last_name":"reports_to_name"}}, 
"single", 
true
);' >
<?php echo smarty_function_sugar_getimage(array('name'=>"cursor",'attr'=>'border="0"'),$_smarty_tpl);?>

</button>
<button type="button" name="btn_clr_<?php echo $_smarty_tpl->tpl_vars['fields']->value['reports_to_name']['name'];?>
" id="btn_clr_<?php echo $_smarty_tpl->tpl_vars['fields']->value['reports_to_name']['name'];?>
" tabindex="0" title="<?php echo smarty_function_sugar_translate(array('label'=>"LBL_ACCESSKEY_CLEAR_USERS_TITLE"),$_smarty_tpl);?>
"  class="lastChild"
onclick="SUGAR.clearRelateField(this.form, '<?php echo $_smarty_tpl->tpl_vars['fields']->value['reports_to_name']['name'];?>
', '<?php echo $_smarty_tpl->tpl_vars['fields']->value['reports_to_name']['id_name'];?>
');"  value="<?php echo smarty_function_sugar_translate(array('label'=>"LBL_ACCESSKEY_CLEAR_USERS_LABEL"),$_smarty_tpl);?>
" >
<?php echo smarty_function_sugar_getimage(array('name'=>"cross",'attr'=>'border="0"'),$_smarty_tpl);?>

</button>
</span>
<?php echo '<script'; ?>
 type="text/javascript">
SUGAR.util.doWhen(
		"typeof(sqs_objects) != 'undefined' && typeof(sqs_objects['<?php echo $_smarty_tpl->tpl_vars['form_name']->value;?>
_<?php echo $_smarty_tpl->tpl_vars['fields']->value['reports_to_name']['name'];?>
']) != 'undefined'",
		enableQS
);
<?php echo '</script'; ?>
>
<?php } else {
echo $_smarty_tpl->tpl_vars['REPORTS_TO_READONLY']->value;
}?>
</div>
<div class="edit-dotted-border"></div>

<!-- [/hide] -->
</div>


<div class="col-xs-12 col-sm-6 edit-view-row-item edit-view-bordered" data-field="phone_other">


<div class="col-xs-12 col-sm-4 label" data-label="LBL_OTHER_PHONE">

<?php $_smarty_tpl->smarty->_cache['_tag_stack'][] = array('minify', array());
$_block_repeat=true;
echo smarty_block_minify(array(), null, $_smarty_tpl, $_block_repeat);
while ($_block_repeat) {
ob_start();
$_smarty_tpl->smarty->ext->_capture->open($_smarty_tpl, "label", "label", null);
echo smarty_function_sugar_translate(array('label'=>'LBL_OTHER_PHONE','module'=>'Users'),$_smarty_tpl);
$_smarty_tpl->smarty->ext->_capture->close($_smarty_tpl);
echo smarty_modifier_strip_semicolon($_smarty_tpl->tpl_vars['label']->value);?>
:

<?php $_block_repeat=false;
echo smarty_block_minify(array(), ob_get_clean(), $_smarty_tpl, $_block_repeat);
}
array_pop($_smarty_tpl->smarty->_cache['_tag_stack']);?>
</div>

<div class="col-xs-12 col-sm-8 edit-view-field " type="phone" field="phone_other"  class="phone">
<?php echo smarty_function_counter(array('name'=>"panelFieldCount",'print'=>false),$_smarty_tpl);?>


<?php if (strlen($_smarty_tpl->tpl_vars['fields']->value['phone_other']['value']) <= 0) {
$_smarty_tpl->_assignInScope('value', $_smarty_tpl->tpl_vars['fields']->value['phone_other']['default_value']);
} else {
$_smarty_tpl->_assignInScope('value', $_smarty_tpl->tpl_vars['fields']->value['phone_other']['value']);
}?>  
<input type='text' name='<?php echo $_smarty_tpl->tpl_vars['fields']->value['phone_other']['name'];?>
' id='<?php echo $_smarty_tpl->tpl_vars['fields']->value['phone_other']['name'];?>
' size='30' maxlength='50' value='<?php echo $_smarty_tpl->tpl_vars['value']->value;?>
' title='' tabindex='0'	  class="phone" >
</div>
<div class="edit-dotted-border"></div>

<!-- [/hide] -->
</div>
<div class="clear"></div>
<div class="clear"></div>
</div>
<div class="row edit-view-row">



<div class="col-xs-12 col-sm-6 edit-view-row-item edit-view-bordered" data-field="">
</div>


<div class="col-xs-12 col-sm-6 edit-view-row-item edit-view-bordered" data-field="phone_fax">


<div class="col-xs-12 col-sm-4 label" data-label="LBL_FAX_PHONE">

<?php $_smarty_tpl->smarty->_cache['_tag_stack'][] = array('minify', array());
$_block_repeat=true;
echo smarty_block_minify(array(), null, $_smarty_tpl, $_block_repeat);
while ($_block_repeat) {
ob_start();
$_smarty_tpl->smarty->ext->_capture->open($_smarty_tpl, "label", "label", null);
echo smarty_function_sugar_translate(array('label'=>'LBL_FAX_PHONE','module'=>'Users'),$_smarty_tpl);
$_smarty_tpl->smarty->ext->_capture->close($_smarty_tpl);
echo smarty_modifier_strip_semicolon($_smarty_tpl->tpl_vars['label']->value);?>
:

<?php $_block_repeat=false;
echo smarty_block_minify(array(), ob_get_clean(), $_smarty_tpl, $_block_repeat);
}
array_pop($_smarty_tpl->smarty->_cache['_tag_stack']);?>
</div>

<div class="col-xs-12 col-sm-8 edit-view-field " type="phone" field="phone_fax"  class="phone">
<?php echo smarty_function_counter(array('name'=>"panelFieldCount",'print'=>false),$_smarty_tpl);?>


<?php if (strlen($_smarty_tpl->tpl_vars['fields']->value['phone_fax']['value']) <= 0) {
$_smarty_tpl->_assignInScope('value', $_smarty_tpl->tpl_vars['fields']->value['phone_fax']['default_value']);
} else {
$_smarty_tpl->_assignInScope('value', $_smarty_tpl->tpl_vars['fields']->value['phone_fax']['value']);
}?>  
<input type='text' name='<?php echo $_smarty_tpl->tpl_vars['fields']->value['phone_fax']['name'];?>
' id='<?php echo $_smarty_tpl->tpl_vars['fields']->value['phone_fax']['name'];?>
' size='30' maxlength='50' value='<?php echo $_smarty_tpl->tpl_vars['value']->value;?>
' title='' tabindex='0'	  class="phone" >
</div>
<div class="edit-dotted-border"></div>

<!-- [/hide] -->
</div>
<div class="clear"></div>
<div class="clear"></div>
</div>
<div class="row edit-view-row">



<div class="col-xs-12 col-sm-6 edit-view-row-item edit-view-bordered" data-field="">
</div>


<div class="col-xs-12 col-sm-6 edit-view-row-item edit-view-bordered" data-field="phone_home">


<div class="col-xs-12 col-sm-4 label" data-label="LBL_HOME_PHONE">

<?php $_smarty_tpl->smarty->_cache['_tag_stack'][] = array('minify', array());
$_block_repeat=true;
echo smarty_block_minify(array(), null, $_smarty_tpl, $_block_repeat);
while ($_block_repeat) {
ob_start();
$_smarty_tpl->smarty->ext->_capture->open($_smarty_tpl, "label", "label", null);
echo smarty_function_sugar_translate(array('label'=>'LBL_HOME_PHONE','module'=>'Users'),$_smarty_tpl);
$_smarty_tpl->smarty->ext->_capture->close($_smarty_tpl);
echo smarty_modifier_strip_semicolon($_smarty_tpl->tpl_vars['label']->value);?>
:

<?php $_block_repeat=false;
echo smarty_block_minify(array(), ob_get_clean(), $_smarty_tpl, $_block_repeat);
}
array_pop($_smarty_tpl->smarty->_cache['_tag_stack']);?>
</div>

<div class="col-xs-12 col-sm-8 edit-view-field " type="phone" field="phone_home"  class="phone">
<?php echo smarty_function_counter(array('name'=>"panelFieldCount",'print'=>false),$_smarty_tpl);?>


<?php if (strlen($_smarty_tpl->tpl_vars['fields']->value['phone_home']['value']) <= 0) {
$_smarty_tpl->_assignInScope('value', $_smarty_tpl->tpl_vars['fields']->value['phone_home']['default_value']);
} else {
$_smarty_tpl->_assignInScope('value', $_smarty_tpl->tpl_vars['fields']->value['phone_home']['value']);
}?>  
<input type='text' name='<?php echo $_smarty_tpl->tpl_vars['fields']->value['phone_home']['name'];?>
' id='<?php echo $_smarty_tpl->tpl_vars['fields']->value['phone_home']['name'];?>
' size='30' maxlength='50' value='<?php echo $_smarty_tpl->tpl_vars['value']->value;?>
' title='' tabindex='0'	  class="phone" >
</div>
<div class="edit-dotted-border"></div>

<!-- [/hide] -->
</div>
<div class="clear"></div>
<div class="clear"></div>
</div>
<div class="row edit-view-row">



<div class="col-xs-12 col-sm-6 edit-view-row-item edit-view-bordered" data-field="messenger_type">


<div class="col-xs-12 col-sm-4 label" data-label="LBL_MESSENGER_TYPE">

<?php $_smarty_tpl->smarty->_cache['_tag_stack'][] = array('minify', array());
$_block_repeat=true;
echo smarty_block_minify(array(), null, $_smarty_tpl, $_block_repeat);
while ($_block_repeat) {
ob_start();
$_smarty_tpl->smarty->ext->_capture->open($_smarty_tpl, "label", "label", null);
echo smarty_function_sugar_translate(array('label'=>'LBL_MESSENGER_TYPE','module'=>'Users'),$_smarty_tpl);
$_smarty_tpl->smarty->ext->_capture->close($_smarty_tpl);
echo smarty_modifier_strip_semicolon($_smarty_tpl->tpl_vars['label']->value);?>
:

<?php $_block_repeat=false;
echo smarty_block_minify(array(), ob_get_clean(), $_smarty_tpl, $_block_repeat);
}
array_pop($_smarty_tpl->smarty->_cache['_tag_stack']);?>
</div>

<div class="col-xs-12 col-sm-8 edit-view-field " type="enum" field="messenger_type"  >
<?php echo smarty_function_counter(array('name'=>"panelFieldCount",'print'=>false),$_smarty_tpl);?>


<select name="<?php echo $_smarty_tpl->tpl_vars['fields']->value['messenger_type']['name'];?>
"
id="<?php echo $_smarty_tpl->tpl_vars['fields']->value['messenger_type']['name'];?>
"
title=''              
>
<?php if ((isset($_smarty_tpl->tpl_vars['fields']->value['messenger_type']['value']))) {
echo smarty_function_html_options(array('options'=>$_smarty_tpl->tpl_vars['fields']->value['messenger_type']['options'],'selected'=>$_smarty_tpl->tpl_vars['fields']->value['messenger_type']['value']),$_smarty_tpl);?>

<?php } else {
echo smarty_function_html_options(array('options'=>$_smarty_tpl->tpl_vars['fields']->value['messenger_type']['options'],'selected'=>$_smarty_tpl->tpl_vars['fields']->value['messenger_type']['default']),$_smarty_tpl);?>

<?php }?>
</select>
</div>
<div class="edit-dotted-border"></div>

<!-- [/hide] -->
</div>


<div class="col-xs-12 col-sm-6 edit-view-row-item edit-view-bordered" data-field="messenger_id">


<div class="col-xs-12 col-sm-4 label" data-label="LBL_MESSENGER_ID">

<?php $_smarty_tpl->smarty->_cache['_tag_stack'][] = array('minify', array());
$_block_repeat=true;
echo smarty_block_minify(array(), null, $_smarty_tpl, $_block_repeat);
while ($_block_repeat) {
ob_start();
$_smarty_tpl->smarty->ext->_capture->open($_smarty_tpl, "label", "label", null);
echo smarty_function_sugar_translate(array('label'=>'LBL_MESSENGER_ID','module'=>'Users'),$_smarty_tpl);
$_smarty_tpl->smarty->ext->_capture->close($_smarty_tpl);
echo smarty_modifier_strip_semicolon($_smarty_tpl->tpl_vars['label']->value);?>
:

<?php $_block_repeat=false;
echo smarty_block_minify(array(), ob_get_clean(), $_smarty_tpl, $_block_repeat);
}
array_pop($_smarty_tpl->smarty->_cache['_tag_stack']);?>
</div>

<div class="col-xs-12 col-sm-8 edit-view-field " type="varchar" field="messenger_id"  >
<?php echo smarty_function_counter(array('name'=>"panelFieldCount",'print'=>false),$_smarty_tpl);?>


<?php if (strlen($_smarty_tpl->tpl_vars['fields']->value['messenger_id']['value']) <= 0) {
$_smarty_tpl->_assignInScope('value', $_smarty_tpl->tpl_vars['fields']->value['messenger_id']['default_value']);
} else {
$_smarty_tpl->_assignInScope('value', $_smarty_tpl->tpl_vars['fields']->value['messenger_id']['value']);
}?>
<input type='text' name='<?php echo $_smarty_tpl->tpl_vars['fields']->value['messenger_id']['name'];?>
'
id='<?php echo $_smarty_tpl->tpl_vars['fields']->value['messenger_id']['name'];?>
' size='30'
maxlength='100'        value='<?php echo $_smarty_tpl->tpl_vars['value']->value;?>
' title=''      >
</div>
<div class="edit-dotted-border"></div>

<!-- [/hide] -->
</div>
<div class="clear"></div>
<div class="clear"></div>
</div>
<div class="row edit-view-row">



<div class="col-xs-12 col-sm-6 edit-view-row-item edit-view-bordered" data-field="address_street">


<div class="col-xs-12 col-sm-4 label" data-label="LBL_ADDRESS_STREET">

<?php $_smarty_tpl->smarty->_cache['_tag_stack'][] = array('minify', array());
$_block_repeat=true;
echo smarty_block_minify(array(), null, $_smarty_tpl, $_block_repeat);
while ($_block_repeat) {
ob_start();
$_smarty_tpl->smarty->ext->_capture->open($_smarty_tpl, "label", "label", null);
echo smarty_function_sugar_translate(array('label'=>'LBL_ADDRESS_STREET','module'=>'Users'),$_smarty_tpl);
$_smarty_tpl->smarty->ext->_capture->close($_smarty_tpl);
echo smarty_modifier_strip_semicolon($_smarty_tpl->tpl_vars['label']->value);?>
:

<?php $_block_repeat=false;
echo smarty_block_minify(array(), ob_get_clean(), $_smarty_tpl, $_block_repeat);
}
array_pop($_smarty_tpl->smarty->_cache['_tag_stack']);?>
</div>

<div class="col-xs-12 col-sm-8 edit-view-field " type="varchar" field="address_street"  >
<?php echo smarty_function_counter(array('name'=>"panelFieldCount",'print'=>false),$_smarty_tpl);?>


<?php if (strlen($_smarty_tpl->tpl_vars['fields']->value['address_street']['value']) <= 0) {
$_smarty_tpl->_assignInScope('value', $_smarty_tpl->tpl_vars['fields']->value['address_street']['default_value']);
} else {
$_smarty_tpl->_assignInScope('value', $_smarty_tpl->tpl_vars['fields']->value['address_street']['value']);
}?>
<input type='text' name='<?php echo $_smarty_tpl->tpl_vars['fields']->value['address_street']['name'];?>
'
id='<?php echo $_smarty_tpl->tpl_vars['fields']->value['address_street']['name'];?>
' size='30'
maxlength='150'        value='<?php echo $_smarty_tpl->tpl_vars['value']->value;?>
' title=''      >
</div>
<div class="edit-dotted-border"></div>

<!-- [/hide] -->
</div>


<div class="col-xs-12 col-sm-6 edit-view-row-item edit-view-bordered" data-field="address_city">


<div class="col-xs-12 col-sm-4 label" data-label="LBL_ADDRESS_CITY">

<?php $_smarty_tpl->smarty->_cache['_tag_stack'][] = array('minify', array());
$_block_repeat=true;
echo smarty_block_minify(array(), null, $_smarty_tpl, $_block_repeat);
while ($_block_repeat) {
ob_start();
$_smarty_tpl->smarty->ext->_capture->open($_smarty_tpl, "label", "label", null);
echo smarty_function_sugar_translate(array('label'=>'LBL_ADDRESS_CITY','module'=>'Users'),$_smarty_tpl);
$_smarty_tpl->smarty->ext->_capture->close($_smarty_tpl);
echo smarty_modifier_strip_semicolon($_smarty_tpl->tpl_vars['label']->value);?>
:

<?php $_block_repeat=false;
echo smarty_block_minify(array(), ob_get_clean(), $_smarty_tpl, $_block_repeat);
}
array_pop($_smarty_tpl->smarty->_cache['_tag_stack']);?>
</div>

<div class="col-xs-12 col-sm-8 edit-view-field " type="varchar" field="address_city"  >
<?php echo smarty_function_counter(array('name'=>"panelFieldCount",'print'=>false),$_smarty_tpl);?>


<?php if (strlen($_smarty_tpl->tpl_vars['fields']->value['address_city']['value']) <= 0) {
$_smarty_tpl->_assignInScope('value', $_smarty_tpl->tpl_vars['fields']->value['address_city']['default_value']);
} else {
$_smarty_tpl->_assignInScope('value', $_smarty_tpl->tpl_vars['fields']->value['address_city']['value']);
}?>
<input type='text' name='<?php echo $_smarty_tpl->tpl_vars['fields']->value['address_city']['name'];?>
'
id='<?php echo $_smarty_tpl->tpl_vars['fields']->value['address_city']['name'];?>
' size='30'
maxlength='100'        value='<?php echo $_smarty_tpl->tpl_vars['value']->value;?>
' title=''      >
</div>
<div class="edit-dotted-border"></div>

<!-- [/hide] -->
</div>
<div class="clear"></div>
<div class="clear"></div>
</div>
<div class="row edit-view-row">



<div class="col-xs-12 col-sm-6 edit-view-row-item edit-view-bordered" data-field="address_state">


<div class="col-xs-12 col-sm-4 label" data-label="LBL_ADDRESS_STATE">

<?php $_smarty_tpl->smarty->_cache['_tag_stack'][] = array('minify', array());
$_block_repeat=true;
echo smarty_block_minify(array(), null, $_smarty_tpl, $_block_repeat);
while ($_block_repeat) {
ob_start();
$_smarty_tpl->smarty->ext->_capture->open($_smarty_tpl, "label", "label", null);
echo smarty_function_sugar_translate(array('label'=>'LBL_ADDRESS_STATE','module'=>'Users'),$_smarty_tpl);
$_smarty_tpl->smarty->ext->_capture->close($_smarty_tpl);
echo smarty_modifier_strip_semicolon($_smarty_tpl->tpl_vars['label']->value);?>
:

<?php $_block_repeat=false;
echo smarty_block_minify(array(), ob_get_clean(), $_smarty_tpl, $_block_repeat);
}
array_pop($_smarty_tpl->smarty->_cache['_tag_stack']);?>
</div>

<div class="col-xs-12 col-sm-8 edit-view-field " type="varchar" field="address_state"  >
<?php echo smarty_function_counter(array('name'=>"panelFieldCount",'print'=>false),$_smarty_tpl);?>


<?php if (strlen($_smarty_tpl->tpl_vars['fields']->value['address_state']['value']) <= 0) {
$_smarty_tpl->_assignInScope('value', $_smarty_tpl->tpl_vars['fields']->value['address_state']['default_value']);
} else {
$_smarty_tpl->_assignInScope('value', $_smarty_tpl->tpl_vars['fields']->value['address_state']['value']);
}?>
<input type='text' name='<?php echo $_smarty_tpl->tpl_vars['fields']->value['address_state']['name'];?>
'
id='<?php echo $_smarty_tpl->tpl_vars['fields']->value['address_state']['name'];?>
' size='30'
maxlength='100'        value='<?php echo $_smarty_tpl->tpl_vars['value']->value;?>
' title=''      >
</div>
<div class="edit-dotted-border"></div>

<!-- [/hide] -->
</div>


<div class="col-xs-12 col-sm-6 edit-view-row-item edit-view-bordered" data-field="address_postalcode">


<div class="col-xs-12 col-sm-4 label" data-label="LBL_ADDRESS_POSTALCODE">

<?php $_smarty_tpl->smarty->_cache['_tag_stack'][] = array('minify', array());
$_block_repeat=true;
echo smarty_block_minify(array(), null, $_smarty_tpl, $_block_repeat);
while ($_block_repeat) {
ob_start();
$_smarty_tpl->smarty->ext->_capture->open($_smarty_tpl, "label", "label", null);
echo smarty_function_sugar_translate(array('label'=>'LBL_ADDRESS_POSTALCODE','module'=>'Users'),$_smarty_tpl);
$_smarty_tpl->smarty->ext->_capture->close($_smarty_tpl);
echo smarty_modifier_strip_semicolon($_smarty_tpl->tpl_vars['label']->value);?>
:

<?php $_block_repeat=false;
echo smarty_block_minify(array(), ob_get_clean(), $_smarty_tpl, $_block_repeat);
}
array_pop($_smarty_tpl->smarty->_cache['_tag_stack']);?>
</div>

<div class="col-xs-12 col-sm-8 edit-view-field " type="varchar" field="address_postalcode"  >
<?php echo smarty_function_counter(array('name'=>"panelFieldCount",'print'=>false),$_smarty_tpl);?>


<?php if (strlen($_smarty_tpl->tpl_vars['fields']->value['address_postalcode']['value']) <= 0) {
$_smarty_tpl->_assignInScope('value', $_smarty_tpl->tpl_vars['fields']->value['address_postalcode']['default_value']);
} else {
$_smarty_tpl->_assignInScope('value', $_smarty_tpl->tpl_vars['fields']->value['address_postalcode']['value']);
}?>
<input type='text' name='<?php echo $_smarty_tpl->tpl_vars['fields']->value['address_postalcode']['name'];?>
'
id='<?php echo $_smarty_tpl->tpl_vars['fields']->value['address_postalcode']['name'];?>
' size='30'
maxlength='20'        value='<?php echo $_smarty_tpl->tpl_vars['value']->value;?>
' title=''      >
</div>
<div class="edit-dotted-border"></div>

<!-- [/hide] -->
</div>
<div class="clear"></div>
<div class="clear"></div>
</div>
<div class="row edit-view-row">



<div class="col-xs-12 col-sm-12 edit-view-row-item" data-field="address_country">


<div class="col-xs-12 col-sm-2 label" data-label="LBL_ADDRESS_COUNTRY">

<?php $_smarty_tpl->smarty->_cache['_tag_stack'][] = array('minify', array());
$_block_repeat=true;
echo smarty_block_minify(array(), null, $_smarty_tpl, $_block_repeat);
while ($_block_repeat) {
ob_start();
$_smarty_tpl->smarty->ext->_capture->open($_smarty_tpl, "label", "label", null);
echo smarty_function_sugar_translate(array('label'=>'LBL_ADDRESS_COUNTRY','module'=>'Users'),$_smarty_tpl);
$_smarty_tpl->smarty->ext->_capture->close($_smarty_tpl);
echo smarty_modifier_strip_semicolon($_smarty_tpl->tpl_vars['label']->value);?>
:

<?php $_block_repeat=false;
echo smarty_block_minify(array(), ob_get_clean(), $_smarty_tpl, $_block_repeat);
}
array_pop($_smarty_tpl->smarty->_cache['_tag_stack']);?>
</div>

<div class="col-xs-12 col-sm-8 edit-view-field " type="varchar" field="address_country" colspan='3' >
<?php echo smarty_function_counter(array('name'=>"panelFieldCount",'print'=>false),$_smarty_tpl);?>


<?php if (strlen($_smarty_tpl->tpl_vars['fields']->value['address_country']['value']) <= 0) {
$_smarty_tpl->_assignInScope('value', $_smarty_tpl->tpl_vars['fields']->value['address_country']['default_value']);
} else {
$_smarty_tpl->_assignInScope('value', $_smarty_tpl->tpl_vars['fields']->value['address_country']['value']);
}?>
<input type='text' name='<?php echo $_smarty_tpl->tpl_vars['fields']->value['address_country']['name'];?>
'
id='<?php echo $_smarty_tpl->tpl_vars['fields']->value['address_country']['name'];?>
' size='30'
maxlength='100'        value='<?php echo $_smarty_tpl->tpl_vars['value']->value;?>
' title=''      >
</div>
<div class="edit-dotted-border"></div>

<!-- [/hide] -->
</div>
<div class="clear"></div>
</div>
<div class="row edit-view-row">



<div class="col-xs-12 col-sm-12 edit-view-row-item" data-field="description">


<div class="col-xs-12 col-sm-2 label" data-label="LBL_DESCRIPTION">

<?php $_smarty_tpl->smarty->_cache['_tag_stack'][] = array('minify', array());
$_block_repeat=true;
echo smarty_block_minify(array(), null, $_smarty_tpl, $_block_repeat);
while ($_block_repeat) {
ob_start();
$_smarty_tpl->smarty->ext->_capture->open($_smarty_tpl, "label", "label", null);
echo smarty_function_sugar_translate(array('label'=>'LBL_DESCRIPTION','module'=>'Users'),$_smarty_tpl);
$_smarty_tpl->smarty->ext->_capture->close($_smarty_tpl);
echo smarty_modifier_strip_semicolon($_smarty_tpl->tpl_vars['label']->value);?>
:

<?php $_block_repeat=false;
echo smarty_block_minify(array(), ob_get_clean(), $_smarty_tpl, $_block_repeat);
}
array_pop($_smarty_tpl->smarty->_cache['_tag_stack']);?>
</div>

<div class="col-xs-12 col-sm-8 edit-view-field " type="text" field="description" colspan='3' >
<?php echo smarty_function_counter(array('name'=>"panelFieldCount",'print'=>false),$_smarty_tpl);?>


<?php if (empty($_smarty_tpl->tpl_vars['fields']->value['description']['value'])) {
$_smarty_tpl->_assignInScope('value', $_smarty_tpl->tpl_vars['fields']->value['description']['default_value']);
} else {
$_smarty_tpl->_assignInScope('value', $_smarty_tpl->tpl_vars['fields']->value['description']['value']);
}?>
<textarea  id='<?php echo $_smarty_tpl->tpl_vars['fields']->value['description']['name'];?>
' name='<?php echo $_smarty_tpl->tpl_vars['fields']->value['description']['name'];?>
'
    rows="4"
    cols="60"
    title='' tabindex="0" 
     ><?php echo $_smarty_tpl->tpl_vars['value']->value;?>
</textarea>

</div>
<div class="edit-dotted-border"></div>

<!-- [/hide] -->
</div>
<div class="clear"></div>
</div>
</div>
</div>
</div>
</div>
</div>

<!-- END METADATA GENERATED CONTENT -->
<div id="email_options" class="userprofile-email">
<table width="100%" border="0" cellspacing="1" cellpadding="0" class="edit view">
<tr>
<th align="left" scope="row" colspan="4">
<h4><?php echo $_smarty_tpl->tpl_vars['MOD']->value['LBL_MAIL_OPTIONS_TITLE'];?>
</h4>
</th>
</tr>
<tr>
<td scope="row" width="17%">
<?php echo $_smarty_tpl->tpl_vars['MOD']->value['LBL_EMAIL'];?>
 <?php if ($_smarty_tpl->tpl_vars['REQUIRED_EMAIL_ADDRESS']->value) {?><span class="required"
id="mandatory_email"><?php echo $_smarty_tpl->tpl_vars['APP']->value['LBL_REQUIRED_SYMBOL'];?>
</span> <?php }?>
</td>
<td width="83%">
<?php echo $_smarty_tpl->tpl_vars['NEW_EMAIL']->value;?>

</td>
</tr>
<tr id="email_options_link_type" style='display:<?php echo $_smarty_tpl->tpl_vars['HIDE_FOR_GROUP_AND_PORTAL']->value;?>
'>
<td scope="row" width="17%">
<?php echo $_smarty_tpl->tpl_vars['MOD']->value['LBL_EMAIL_LINK_TYPE'];?>
:&nbsp;<?php echo smarty_function_sugar_help(array('text'=>$_smarty_tpl->tpl_vars['MOD']->value['LBL_EMAIL_LINK_TYPE_HELP'],'WIDTH'=>450),$_smarty_tpl);?>

</td>
<td>
<select id="email_link_type" name="email_link_type" tabindex='410'>
<?php echo $_smarty_tpl->tpl_vars['EMAIL_LINK_TYPE']->value;?>

</select>
</td>
</tr>
<tr>
<td scope="row" width="17%"><?php echo $_smarty_tpl->tpl_vars['MOD']->value['LBL_EDITOR_TYPE'];?>
</td>
<td width="83%">
<select id="editor_type" name="editor_type" tabindex='410'>
<?php echo $_smarty_tpl->tpl_vars['EDITOR_TYPE']->value;?>

</select>
</td>
</tr>
</table>
<?php if ($_smarty_tpl->tpl_vars['ID']->value) {?>
<button class="button" id="settingsButton"
onclick="SUGAR.email2.settings.showSettings(getUserEditViewUserId()); return false;"><img
src="themes/default/images/icon_email_settings.gif" align="absmiddle"
border="0"> <?php echo $_smarty_tpl->tpl_vars['APP']->value['LBL_EMAIL_SETTINGS'];?>
</button>
<?php }?>
</div>
</div>
<div class="user-tab-content">
<?php if (($_smarty_tpl->tpl_vars['CHANGE_PWD']->value) == '1') {?>
<div id="generate_password">
<table width="100%" border="0" cellspacing="0" cellpadding="0" class="edit view">
<tr>
<td width='100%'>
<table width='100%' cellspacing='0' cellpadding='0' border='0'>
<tr>
<th align="left" scope="row" colspan="4">
<h4><?php echo $_smarty_tpl->tpl_vars['MOD']->value['LBL_CHANGE_PASSWORD_TITLE'];?>
</h4><br>
<?php echo $_smarty_tpl->tpl_vars['ERROR_PASSWORD']->value;?>

</th>
</tr>
</table>
<!-- hide field if user is admin that is not editing themselves -->
<div id='generate_password_old_password' <?php if (($_smarty_tpl->tpl_vars['IS_ADMIN']->value && !$_smarty_tpl->tpl_vars['ADMIN_EDIT_SELF']->value)) {?>
style='display:none' <?php }?>>
<div class="old-password">
<div class="label-txt">
<?php echo $_smarty_tpl->tpl_vars['MOD']->value['LBL_OLD_PASSWORD'];?>

</div>
<div>
<input name='old_password' id='old_password' type='password' tabindex='2'
onkeyup="password_confirmation();" autocomplete="new-password">
</div>
<div class="edit-dotted-border"></div>
</div>
</div>
<div class="password-row">
<!--left-col-->
<div class="left-col label-txt">
<div>
<?php echo $_smarty_tpl->tpl_vars['MOD']->value['LBL_NEW_PASSWORD'];?>

<span class="required"
id="mandatory_pwd"><?php if (($_smarty_tpl->tpl_vars['REQUIRED_PASSWORD']->value)) {
echo $_smarty_tpl->tpl_vars['APP']->value['LBL_REQUIRED_SYMBOL'];
}?></span>
</div>
<div class='dataField'>
<input name='new_password' id="new_password" type='password' tabindex='2'
onkeyup="password_confirmation();newrules('<?php echo $_smarty_tpl->tpl_vars['PWDSETTINGS']->value['minpwdlength'];?>
','<?php echo $_smarty_tpl->tpl_vars['PWDSETTINGS']->value['maxpwdlength'];?>
','<?php echo $_smarty_tpl->tpl_vars['REGEX']->value;?>
');"/>
</div>
<div class="edit-dotted-border"></div>
</div>
<!-- right col -->
<div class="right-col label-txt">
<div><?php echo $_smarty_tpl->tpl_vars['MOD']->value['LBL_CONFIRM_PASSWORD'];?>
</div>
<div>
<input name='confirm_new_password' id='confirm_pwd' style='' type='password'
tabindex='2' onkeyup="password_confirmation();">
</div>
<div>
<div id="comfirm_pwd_match" class="error"
style="display: none;"><?php echo $_smarty_tpl->tpl_vars['MOD']->value['ERR_PASSWORD_MISMATCH'];?>
</div>

</div>
<div class="edit-dotted-border"></div>
</div>
<!--extra div -->
<div>
<div class="dataLabel"></div>
<div class="dataLabel"></div>
</div>
</div>
<table width='17%' cellspacing='0' cellpadding='1' border='0'>
<tr>
<td width='50%'>
<input title="<?php echo $_smarty_tpl->tpl_vars['APP']->value['LBL_SAVE_BUTTON_TITLE'];?>
" accessKey='<?php echo $_smarty_tpl->tpl_vars['APP']->value['LBL_SAVE_BUTTON_KEY'];?>
'
class='button' id='save_new_pwd_button' LANGUAGE=javascript
onclick='if (set_password(this.form)) window.close(); else return false;'
type='submit' name='button' style='display:none;'
value='<?php echo $_smarty_tpl->tpl_vars['APP']->value['LBL_SAVE_BUTTON_LABEL'];?>
'>
</td>
<td width='50%'>
</td>
</tr>
</table>
</td>
<td width='60%' style="vertical-align:middle;">
</td>
</tr>
</table>
</div>
<?php } else { ?>
<div id="generate_password">
<input name='old_password' id='old_password' type='hidden'>
<input name='new_password' id="new_password" type='hidden'>
<input name='confirm_new_password' id='confirm_pwd' type='hidden'>
</div>
<?php }?>
</div>
<?php if ($_smarty_tpl->tpl_vars['SHOW_THEMES']->value) {?>
<div class="user-tab-content">
<div id="themepicker" style="display:<?php echo $_smarty_tpl->tpl_vars['HIDE_FOR_GROUP_AND_PORTAL']->value;?>
">
<table class="edit view" border="0" cellpadding="0" cellspacing="0" width="100%">
<tbody>
<tr>
<td scope="row" colspan="4"><h4><?php echo $_smarty_tpl->tpl_vars['MOD']->value['LBL_THEME'];?>
</h4></td>
</tr>
<tr>
<td width="17%">
<select name="user_theme" tabindex='366' size="20" id="user_theme_picker" style="width: 100%">
<?php echo $_smarty_tpl->tpl_vars['THEMES']->value;?>

</select>
</td>
<td width="33%">
<img id="themePreview" src="<?php echo smarty_function_sugar_getimagepath(array('file'=>'themePreview.png'),$_smarty_tpl);?>
" border="1"/>
</td>
<td width="17%">&nbsp;</td>
<td width="33%">&nbsp;</td>
</tr>
</tbody>
</table>
</div>
</div>
<?php }?>
<div class="user-tab-content">
<!-- User Settings -->
<div id="settings" style="display:<?php echo $_smarty_tpl->tpl_vars['HIDE_FOR_GROUP_AND_PORTAL']->value;?>
">
<!--Heading-->
<div>
<h4>
<slot><?php echo $_smarty_tpl->tpl_vars['MOD']->value['LBL_USER_SETTINGS'];?>
</slot>
</h4>
</div>
<!--Main Content -->
<div class="row-user">
<!--First row-->
<div class="row-container">
<div class="left-col d-flex flex-column">
<div class="row-label">
<slot><?php echo $_smarty_tpl->tpl_vars['MOD']->value['LBL_EXPORT_DELIMITER'];?>
:</slot>&nbsp;<?php echo smarty_function_sugar_help(array('text'=>$_smarty_tpl->tpl_vars['MOD']->value['LBL_EXPORT_DELIMITER_DESC']),$_smarty_tpl);?>

</div>
<div class="row-bottom flex-grow-1">
<slot><input style="line-height:21.5px;" type="text" tabindex='12' name="export_delimiter"
value="<?php echo $_smarty_tpl->tpl_vars['EXPORT_DELIMITER']->value;?>
" size="5">
</slot>
</div>
<div class="bottom-dotted-border"></div>
</div>
<div class="right-col d-flex flex-column">
<div class="row-label">
<slot><?php echo $_smarty_tpl->tpl_vars['MOD']->value['LBL_RECEIVE_NOTIFICATIONS'];?>
:</slot>&nbsp;<?php echo smarty_function_sugar_help(array('text'=>$_smarty_tpl->tpl_vars['MOD']->value['LBL_RECEIVE_NOTIFICATIONS_TEXT']),$_smarty_tpl);?>

</div>
<div class="row-bottom flex-grow-1">
<slot style="line-height: 2.3">
<input name='receive_notifications' class="checkbox" tabindex='12' type="checkbox"
value="12" <?php echo $_smarty_tpl->tpl_vars['RECEIVE_NOTIFICATIONS']->value;?>
 style="margin-top: -1em;">
</slot>
</div>
<div class="bottom-dotted-border"></div>
</div>
</div>
<!--First row ends here-->
<!--Second row-->
<div class="row-container">
<div class="left-col d-flex flex-column">
<div class="row-label"><slot><?php echo $_smarty_tpl->tpl_vars['MOD']->value['LBL_EXPORT_CHARSET'];?>
:</slot>&nbsp;<?php echo smarty_function_sugar_help(array('text'=>$_smarty_tpl->tpl_vars['MOD']->value['LBL_EXPORT_CHARSET_DESC']),$_smarty_tpl);?>
</div>
<div class="row-bottom flex-grow-1"><slot><select tabindex='12' name="default_export_charset"><?php echo $_smarty_tpl->tpl_vars['EXPORT_CHARSET']->value;?>
</select></slot></div>
<div class="bottom-dotted-border"></div>
</div>
<div class="right-col d-flex flex-column">
<div class="row-label"><slot><?php echo $_smarty_tpl->tpl_vars['MOD']->value['LBL_REMINDER'];?>
:</slot>&nbsp;<?php echo smarty_function_sugar_help(array('text'=>$_smarty_tpl->tpl_vars['MOD']->value['LBL_REMINDER_TEXT']),$_smarty_tpl);?>
</div>
<div class="row-bottom"><slot><?php $_smarty_tpl->_subTemplateRender("file:modules/Reminders/tpls/remindersDefaults.tpl", $_smarty_tpl->cache_id, $_smarty_tpl->compile_id, 0, $_smarty_tpl->cache_lifetime, array(), 0, false);
?></slot></div>
<div class="bottom-dotted-border"></div>
</div>
</div>
<div class="row-container" >
<div class="left-col d-flex flex-column">
<div class="row-label"><slot><?php echo $_smarty_tpl->tpl_vars['MOD']->value['LBL_DESKTOP_NOTIFICATIONS'];?>
:</slot></div>
<div class="row-bottom flex-grow-1">
<slot>
<button type="button" class="btn btn-primary btn-sm" onClick="Alerts.prototype.enable()">
<?php echo $_smarty_tpl->tpl_vars['MOD']->value['LBL_ENABLE_NOTIFICATIONS'];?>

</button>
</slot>
</div>
<div class="bottom-dotted-border"></div>
</div>
<div class="right-col d-flex flex-column" >
<div class="row-label"><slot><?php echo $_smarty_tpl->tpl_vars['MOD']->value['LBL_SNOOZE_TIMER'];?>
:</slot></div>
<div class="row-bottom flex-grow-1"><select tabindex='12' name="snooze_alert_timer"><?php echo $_smarty_tpl->tpl_vars['SNOOZE_ALERT_TIMER']->value;?>
</select></div>
<div class="bottom-dotted-border"></div>
</div>
</div>
<!--Second row ends here-->
<div class="row-container">
<div class="left-col d-flex flex-column">
<div class="row-label"><slot><?php echo $_smarty_tpl->tpl_vars['MOD']->value['LBL_USE_REAL_NAMES'];?>
:</slot>&nbsp;<?php echo smarty_function_sugar_help(array('text'=>$_smarty_tpl->tpl_vars['MOD']->value['LBL_USE_REAL_NAMES_DESC']),$_smarty_tpl);?>
</div>
<div class="row-bottom flex-grow-1"><slot style="line-height: 2.3"><input style="margin-top: -1em;" tabindex='12' type="checkbox" name="use_real_names" <?php echo $_smarty_tpl->tpl_vars['USE_REAL_NAMES']->value;?>
></slot></div>
<div class="bottom-dotted-border"></div>
</div>
<div class="right-col d-flex flex-column">
<div class="row-label"><slot><?php echo $_smarty_tpl->tpl_vars['MOD']->value['LBL_MAILMERGE'];?>
:</slot>&nbsp;<?php echo smarty_function_sugar_help(array('text'=>$_smarty_tpl->tpl_vars['MOD']->value['LBL_MAILMERGE_TEXT']),$_smarty_tpl);?>
</div>
<div class="row-bottom flex-grow-1">
<slot style="line-height: 1"><input style="margin-top: -1em;" tabindex='12' name='mailmerge_on' class="checkbox" type="checkbox" <?php echo $_smarty_tpl->tpl_vars['MAILMERGE_ON']->value;?>
>
</slot>
</div>
<div class="bottom-dotted-border"></div>
</div>
</div>
<!--<?php if (!empty($_smarty_tpl->tpl_vars['EXTERNAL_AUTH_CLASS']->value) && !empty($_smarty_tpl->tpl_vars['IS_ADMIN']->value)) {?>-->
<div class="row-container">
<div><?php $_smarty_tpl->smarty->ext->_capture->open($_smarty_tpl, 'SMARTY_LBL_EXTERNAL_AUTH_ONLY', null, null);?>&nbsp;<?php echo $_smarty_tpl->tpl_vars['MOD']->value['LBL_EXTERNAL_AUTH_ONLY'];?>
 <?php echo $_smarty_tpl->tpl_vars['EXTERNAL_AUTH_CLASS_1']->value;
$_smarty_tpl->smarty->ext->_capture->close($_smarty_tpl);?></div>
<div class="left-col d-flex flex-column">
<div class="row-label"><slot><?php echo $_smarty_tpl->tpl_vars['EXTERNAL_AUTH_CLASS']->value;?>
 <?php echo $_smarty_tpl->tpl_vars['MOD']->value['LBL_ONLY'];?>
:
</slot>&nbsp;<?php echo smarty_function_sugar_help(array('text'=>$_smarty_tpl->smarty->ext->_capture->getBuffer($_smarty_tpl, 'SMARTY_LBL_EXTERNAL_AUTH_ONLY')),$_smarty_tpl);?>
</div>
<div class="row-bottom"> <input type='hidden' value='0' name='external_auth_only'><input type='checkbox' value='1'
name='external_auth_only' <?php echo $_smarty_tpl->tpl_vars['EXTERNAL_AUTH_ONLY_CHECKED']->value;?>
></div>
<div class="bottom-dotted-border"></div>
</div>
</div>
<!--<?php }?>-->
</div><!--row user-->
</div>
<!-- User Settings Ends here -->
<div id="locale" style="display:<?php echo $_smarty_tpl->tpl_vars['HIDE_FOR_GROUP_AND_PORTAL']->value;?>
">
<div>
<h4>
<slot><?php echo $_smarty_tpl->tpl_vars['MOD']->value['LBL_USER_LOCALE'];?>
</slot>
</h4>
</div>
<div class="row-user">
<div class="row-container">
<div class="left-col">
<div class="row-label">
<slot><?php echo $_smarty_tpl->tpl_vars['MOD']->value['LBL_DATE_FORMAT'];?>
:</slot>&nbsp;<?php echo smarty_function_sugar_help(array('text'=>$_smarty_tpl->tpl_vars['MOD']->value['LBL_DATE_FORMAT_TEXT']),$_smarty_tpl);?>
</div>
<div class="row-bottom">
<slot><select tabindex='14' name='dateformat'><?php echo $_smarty_tpl->tpl_vars['DATEOPTIONS']->value;?>
</select></slot>
</div>
<div class="bottom-dotted-border"></div>
</div>
<div class="right-col">
<div class="row-label">
<slot><?php echo $_smarty_tpl->tpl_vars['MOD']->value['LBL_CURRENCY'];?>
:</slot>&nbsp;<?php echo smarty_function_sugar_help(array('text'=>$_smarty_tpl->tpl_vars['MOD']->value['LBL_CURRENCY_TEXT']),$_smarty_tpl);?>
</div>
<div class="row-bottom">
<slot>
<select tabindex='14' id='currency_select' name='currency'
onchange='setSymbolValue(this.options[this.selectedIndex].value);setSigDigits();'><?php echo $_smarty_tpl->tpl_vars['CURRENCY']->value;?>
</select>
<input type="hidden" id="symbol" value="">
</slot>
</div>
<div class="bottom-dotted-border"></div>
</div>
</div>
<div class="row-container">
<div class="left-col">
<div class="row-label">
<slot><?php echo $_smarty_tpl->tpl_vars['MOD']->value['LBL_TIME_FORMAT'];?>
:</slot>&nbsp;<?php echo smarty_function_sugar_help(array('text'=>$_smarty_tpl->tpl_vars['MOD']->value['LBL_TIME_FORMAT_TEXT']),$_smarty_tpl);?>
</div>
<div class="row-bottom">
<slot><select tabindex='14' name='timeformat'><?php echo $_smarty_tpl->tpl_vars['TIMEOPTIONS']->value;?>
</select></slot>
</div>
<div class="bottom-dotted-border"></div>
</div>
<div class="right-col">
<div class="row-label">
<slot><?php echo $_smarty_tpl->tpl_vars['MOD']->value['LBL_CURRENCY_SIG_DIGITS'];?>
:</slot>
</div>
<div class="row-bottom">
<slot>
<select id='sigDigits' onchange='setSigDigits(this.value);'
name='default_currency_significant_digits'><?php echo $_smarty_tpl->tpl_vars['sigDigits']->value;?>
</select>
</slot>
</div>
<div class="bottom-dotted-border"></div>
</div>
</div>
<div class="row-container">
<div class="left-col">
<div class="row-label">
<slot><?php echo $_smarty_tpl->tpl_vars['MOD']->value['LBL_TIMEZONE'];?>
:</slot>&nbsp;<?php echo smarty_function_sugar_help(array('text'=>$_smarty_tpl->tpl_vars['MOD']->value['LBL_TIMEZONE_TEXT']),$_smarty_tpl);?>
</div>
<div class="row-bottom">
<slot><select tabindex='14'
name='timezone'><?php echo smarty_function_html_options(array('options'=>$_smarty_tpl->tpl_vars['TIMEZONEOPTIONS']->value,'selected'=>$_smarty_tpl->tpl_vars['TIMEZONE_CURRENT']->value),$_smarty_tpl);?>
</select>
</slot>
</div>
<div class="bottom-dotted-border"></div>
</div>
<div class="right-col">
<div class="row-label">
<slot>
<?php echo $_smarty_tpl->tpl_vars['MOD']->value['LBL_LOCALE_EXAMPLE_NAME_FORMAT'];?>
:
</slot>
</div>
<div class="row-bottom">
<slot>
<input type="text" disabled id="sigDigitsExample" name="sigDigitsExample">
</slot>
</div>
<div class="bottom-dotted-border"></div>
</div>
</div>
<div class="row-container">
<div class="left-col">
<?php if (($_smarty_tpl->tpl_vars['IS_ADMIN']->value)) {?>
<div class="row-label">
<slot><?php echo $_smarty_tpl->tpl_vars['MOD']->value['LBL_PROMPT_TIMEZONE'];?>
:</slot>&nbsp;<?php echo smarty_function_sugar_help(array('text'=>$_smarty_tpl->tpl_vars['MOD']->value['LBL_PROMPT_TIMEZONE_TEXT']),$_smarty_tpl);?>

</div>
<div class="row-bottom">
<slot><input type="checkbox" tabindex='14' class="checkbox" name="ut" value="0" <?php echo $_smarty_tpl->tpl_vars['PROMPTTZ']->value;?>
>
</div>
<?php } else { ?>
<div>
<slot></slot>
</div>
</div>
<slot></slot>
</div>
<?php }?>
<div class="bottom-dotted-border"></div>
</div>
<div class="right-col">
<div class="row-label">
<slot><?php echo $_smarty_tpl->tpl_vars['MOD']->value['LBL_NUMBER_GROUPING_SEP'];?>
:
</slot>&nbsp;<?php echo smarty_function_sugar_help(array('text'=>$_smarty_tpl->tpl_vars['MOD']->value['LBL_NUMBER_GROUPING_SEP_TEXT']),$_smarty_tpl);?>
</div>
<div class="row-bottom">
<slot>
<input tabindex='14' name='num_grp_sep' id='default_number_grouping_seperator'
type='text' maxlength='1' size='1' value='<?php echo $_smarty_tpl->tpl_vars['NUM_GRP_SEP']->value;?>
'
onkeydown='setSigDigits();' onkeyup='setSigDigits();'>
</slot>
</div>
<div class="bottom-dotted-border"></div>
</div>
</div>
<?php $_smarty_tpl->smarty->ext->_capture->open($_smarty_tpl, 'SMARTY_LOCALE_NAME_FORMAT_DESC', null, null);?>&nbsp;<?php echo $_smarty_tpl->tpl_vars['MOD']->value['LBL_LOCALE_NAME_FORMAT_DESC'];
$_smarty_tpl->smarty->ext->_capture->close($_smarty_tpl);?>
<div class="row-container">
<div class="left-col">
<div class="row-label"> <?php echo $_smarty_tpl->tpl_vars['MOD']->value['LBL_LOCALE_DEFAULT_NAME_FORMAT'];?>

:&nbsp;<?php echo smarty_function_sugar_help(array('text'=>$_smarty_tpl->smarty->ext->_capture->getBuffer($_smarty_tpl, 'SMARTY_LOCALE_NAME_FORMAT_DESC')),$_smarty_tpl);?>
</div>
<div class="row-bottom">
<slot><select tabindex='14' id="default_locale_name_format" name="default_locale_name_format"
selected="<?php echo $_smarty_tpl->tpl_vars['default_locale_name_format']->value;?>
"><?php echo $_smarty_tpl->tpl_vars['NAMEOPTIONS']->value;?>
</select></slot>
</div>
<div class="bottom-dotted-border"></div>
</div>
<div class="right-col">
<div class="row-label">
<slot><?php echo $_smarty_tpl->tpl_vars['MOD']->value['LBL_DECIMAL_SEP'];?>
:</slot>&nbsp;<?php echo smarty_function_sugar_help(array('text'=>$_smarty_tpl->tpl_vars['MOD']->value['LBL_DECIMAL_SEP_TEXT']),$_smarty_tpl);?>

</div>
<div class="row-bottom">
<slot>
<input tabindex='14' name='dec_sep' id='default_decimal_seperator'
type='text' maxlength='1' size='1' value='<?php echo $_smarty_tpl->tpl_vars['DEC_SEP']->value;?>
'
onkeydown='setSigDigits();' onkeyup='setSigDigits();'>
</slot>
</div>
<div class="bottom-dotted-border"></div>
</div>
</div>
</div>
</div>
<div id="calendar_options" style="display:<?php echo $_smarty_tpl->tpl_vars['HIDE_FOR_GROUP_AND_PORTAL']->value;?>
">
<div>
<h4>
<slot><?php echo $_smarty_tpl->tpl_vars['MOD']->value['LBL_CALENDAR_OPTIONS'];?>
</slot>
</h4>
</div>
<div class="row-user">
<div class="row-container">
<div style="width:100%;" class="row-left">
<div class="row-label">
<slot><?php echo $_smarty_tpl->tpl_vars['MOD']->value['LBL_PUBLISH_KEY'];?>
:</slot>&nbsp;<?php echo smarty_function_sugar_help(array('text'=>$_smarty_tpl->tpl_vars['MOD']->value['LBL_CHOOSE_A_KEY']),$_smarty_tpl);?>
</div>
<div class="row-bottom">
<slot><input id='calendar_publish_key' name='calendar_publish_key' tabindex='17' size='25'
maxlength='36' type="text" value="<?php echo $_smarty_tpl->tpl_vars['CALENDAR_PUBLISH_KEY']->value;?>
"></slot>
</div>
<div class="bottom-dotted-border"></div>
</div>
</div>
<div class="row-container">
<div style="width:100%;" class="row-left">
<div class="row-label">
<slot>
<nobr><?php echo smarty_modifier_strip_semicolon($_smarty_tpl->tpl_vars['MOD']->value['LBL_YOUR_PUBLISH_URL']);?>
:</nobr>
</slot>
</div>
<div class="row-bottom">
<span class="calendar_publish_ok"><?php echo $_smarty_tpl->tpl_vars['CALENDAR_PUBLISH_URL']->value;?>
</span>
<span class="calendar_publish_none" style="display: none"><?php echo $_smarty_tpl->tpl_vars['MOD']->value['LBL_NO_KEY'];?>
</span>
</div>
<div class="bottom-dotted-border"></div>
</div>
</div>
<div class="row-container">
<div style="width:100%;" class="row-left">
<div class="row-label">
<slot><?php echo smarty_modifier_strip_semicolon($_smarty_tpl->tpl_vars['MOD']->value['LBL_SEARCH_URL']);?>
:</slot>
</div>
<div class="row-bottom">
<span class="calendar_publish_ok"><?php echo $_smarty_tpl->tpl_vars['CALENDAR_SEARCH_URL']->value;?>
</span>
<span class="calendar_publish_none" style="display: none"><?php echo $_smarty_tpl->tpl_vars['MOD']->value['LBL_NO_KEY'];?>
</span>
</div>
<div class="bottom-dotted-border"></div>
</div>
</div>
<div class="row-container">
<div style="width:100%;" class="row-left">
<div class="row-label">
<slot><?php echo smarty_modifier_strip_semicolon($_smarty_tpl->tpl_vars['MOD']->value['LBL_ICAL_PUB_URL']);?>
: <?php echo smarty_function_sugar_help(array('text'=>$_smarty_tpl->tpl_vars['MOD']->value['LBL_ICAL_PUB_URL_HELP']),$_smarty_tpl);?>
</slot>
</div>
<div class="row-bottom">
<span class="calendar_publish_ok"><?php echo $_smarty_tpl->tpl_vars['CALENDAR_ICAL_URL']->value;?>
</span>
<span class="calendar_publish_none" style="display: none"><?php echo $_smarty_tpl->tpl_vars['MOD']->value['LBL_NO_KEY'];?>
</span>
</div>
<div class="bottom-dotted-border"></div>
</div>
</div>
<div class="row-container">
<div style="width:100%;" class="row-left">
<div class="row-label">
<slot><?php echo $_smarty_tpl->tpl_vars['MOD']->value['LBL_FDOW'];?>
:</slot>&nbsp;<?php echo smarty_function_sugar_help(array('text'=>$_smarty_tpl->tpl_vars['MOD']->value['LBL_FDOW_TEXT']),$_smarty_tpl);?>

</div>
<div class="row-bottom">
<slot>
<select tabindex='14'
name='fdow'><?php echo smarty_function_html_options(array('options'=>$_smarty_tpl->tpl_vars['FDOWOPTIONS']->value,'selected'=>$_smarty_tpl->tpl_vars['FDOWCURRENT']->value),$_smarty_tpl);?>
</select>
</slot>
</div>
<div class="bottom-dotted-border" style="margin-bottom: 1em;"></div>
</div>
</div>
</div>
</div>
<div id="google_options" style="display:<?php echo $_smarty_tpl->tpl_vars['HIDE_IF_GAUTH_UNCONFIGURED']->value;?>
">
<table width="100%" border="0" cellspacing="1" cellpadding="0" class="edit view">
<tr>
<th align="left" scope="row" colspan="4"><h4><?php echo $_smarty_tpl->tpl_vars['MOD']->value['LBL_GOOGLE_API_SETTINGS'];?>
</h4></th>
</tr>
<tr>
<td width="17%" scope="row">
<slot><?php echo $_smarty_tpl->tpl_vars['MOD']->value['LBL_GOOGLE_API_TOKEN'];?>
:</slot>&nbsp;<?php echo smarty_function_sugar_help(array('text'=>$_smarty_tpl->tpl_vars['MOD']->value['LBL_GOOGLE_API_TOKEN_HELP']),$_smarty_tpl);?>

</td>
<td width="20%">
<slot>Current API Token is: <span style="color:<?php echo $_smarty_tpl->tpl_vars['GOOGLE_API_TOKEN_COLOR']->value;?>
"><?php echo $_smarty_tpl->tpl_vars['GOOGLE_API_TOKEN']->value;?>
</span>
&nbsp;&nbsp;<input style="display:<?php echo $_smarty_tpl->tpl_vars['GOOGLE_API_TOKEN_ENABLE_NEW']->value;?>
" class="btn btn-primary btn-sm"
id="google_gettoken" type="button" value="<?php echo $_smarty_tpl->tpl_vars['GOOGLE_API_TOKEN_BTN']->value;?>
"
onclick="window.open('<?php echo $_smarty_tpl->tpl_vars['GOOGLE_API_TOKEN_NEW_URL']->value;?>
', '_blank')"/></slot>
</td>
<td width="63%">
<slot>&nbsp;</slot>
</td>
</tr>
<tr>
<td width="17%" scope="row">
<slot><?php echo $_smarty_tpl->tpl_vars['MOD']->value['LBL_GSYNC_CAL'];?>
:</slot>
</td>
<td>
<slot><input tabindex='12' name='gsync_cal' class="checkbox" type="checkbox" <?php echo $_smarty_tpl->tpl_vars['GSYNC_CAL']->value;?>
></slot>
</td>
</tr>
</table>
</div>
</div>
<?php if ($_smarty_tpl->tpl_vars['ID']->value) {?>
<div id="eapm_area" style='display:<?php echo $_smarty_tpl->tpl_vars['HIDE_FOR_GROUP_AND_PORTAL']->value;?>
;' class="user-tab-content">
<div style="text-align:center; width: 100%"><?php echo smarty_function_sugar_getimage(array('name'=>"loading"),$_smarty_tpl);?>
</div>
</div>
<?php }?>
<div class="user-tab-content">
<div id="subthemes" style="display:<?php echo $_smarty_tpl->tpl_vars['HIDE_FOR_GROUP_AND_PORTAL']->value;?>
">
<div>
<h4>
<slot><?php echo $_smarty_tpl->tpl_vars['MOD']->value['LBL_LAYOUT_OPTIONS'];?>
</slot>
</h4>
</div>
<?php if ($_smarty_tpl->tpl_vars['SUBTHEMES']->value) {?>
<div class="row-user layout">
<div class="row-container">
<div class="full-row">
<div class="row-label"><?php echo $_smarty_tpl->tpl_vars['MOD']->value['LBL_SUBTHEME'];?>
:</div>
<div class="row-bottom"> <?php echo smarty_function_html_options(array('name'=>'subtheme','options'=>$_smarty_tpl->tpl_vars['SUBTHEMES']->value,'selected'=>$_smarty_tpl->tpl_vars['SUBTHEME']->value),$_smarty_tpl);?>
</div>
<div class="bottom-dotted-border"></div>
</div>
</div>
</div>
<?php }?>
<div class="row-user layout">
<div class="row-container">
<div class="full-row" id="use_group_tabs_row" style="display: <?php echo $_smarty_tpl->tpl_vars['DISPLAY_GROUP_TAB']->value;?>
;">
<div class="row-label"><?php echo $_smarty_tpl->tpl_vars['MOD']->value['LBL_USE_GROUP_TABS'];?>

<?php echo smarty_function_sugar_help(array('text'=>$_smarty_tpl->tpl_vars['MOD']->value['LBL_NAVIGATION_PARADIGM_DESCRIPTION']),$_smarty_tpl);?>
</div>
<div class="row-bottom"><input name="use_group_tabs" type="hidden" value="m"><input
id="use_group_tabs"
type="checkbox"
name="use_group_tabs" <?php echo $_smarty_tpl->tpl_vars['USE_GROUP_TABS']->value;?>

tabindex='12' value="gm"></div>
<div class="bottom-dotted-border"></div>
</div>
</div>
</div>
<div class="row-user">
<div class="row-container" style="display: block;">
<div><?php echo $_smarty_tpl->tpl_vars['TAB_CHOOSER']->value;?>
</div>
</div>
<div class="row-container">
<div class="left-col" style="margin-right: 0;">
<div class="row-label">
<?php echo $_smarty_tpl->tpl_vars['MOD']->value['LBL_SORT_MODULES'];?>

<?php echo smarty_function_sugar_help(array('text'=>$_smarty_tpl->tpl_vars['MOD']->value['LBL_SORT_MODULES_DESCRIPTION']),$_smarty_tpl);?>

</div>
<div class="row-bottom"><input class="subthemelayout_options_checkbox" type="checkbox"
name="sort_modules_by_name" <?php echo $_smarty_tpl->tpl_vars['SORT_MODULES_BY_NAME']->value;?>
 tabindex='13'>
</div>
<div class="bottom-dotted-border"></div>
</div>
<div class="right-col" style="padding-left: 1em;">
<div class="row-label">
<?php echo $_smarty_tpl->tpl_vars['MOD']->value['LBL_SUBPANEL_TABS'];?>

<?php echo smarty_function_sugar_help(array('text'=>$_smarty_tpl->tpl_vars['MOD']->value['LBL_SUBPANEL_TABS_DESCRIPTION']),$_smarty_tpl);?>

</div>
<div class="row-bottom"><input class="subthemelayout_options_checkbox" type="checkbox"
name="user_subpanel_tabs" <?php echo $_smarty_tpl->tpl_vars['SUBPANEL_TABS']->value;?>

tabindex='13'></div>
<div class="bottom-dotted-border"></div>
</div>
</div>
<div class="row-container">
<div class="left-col">
<div class="row-label"><?php echo $_smarty_tpl->tpl_vars['MOD']->value['LBL_COUNT_COLLAPSED_SUBPANELS'];?>

<?php echo smarty_function_sugar_help(array('text'=>$_smarty_tpl->tpl_vars['MOD']->value['LBL_COUNT_COLLAPSED_SUBPANELS_DESCRIPTION']),$_smarty_tpl);?>

</div>
<div class="row-bottom"><input class="subthemelayout_options_checkbox" type="checkbox"
name="user_count_collapsed_subpanels" <?php echo $_smarty_tpl->tpl_vars['COUNT_COLLAPSED_SUBPANELS']->value;?>

tabindex='13'></div>
<div class="bottom-dotted-border"></div>
</div>
</div>
<div class="row-container load-more">
<div class="left-col">
<div class="row-label"><?php echo $_smarty_tpl->tpl_vars['MOD']->value['LBL_SET_SUBPANEL_PAGINATION_TYPE'];?>
: </div>
<div>
<select name="subpanel_pagination_type"><?php echo $_smarty_tpl->tpl_vars['subpanel_pagination_type']->value;?>
</select>
</div>
<div class="row-label"><?php echo $_smarty_tpl->tpl_vars['MOD']->value['LBL_SET_LISTVIEW_PAGINATION_TYPE'];?>
: </div>
<div>
<select name="listview_pagination_type"><?php echo $_smarty_tpl->tpl_vars['listview_pagination_type']->value;?>
</select>
</div>
<div class="row-label"><?php echo $_smarty_tpl->tpl_vars['MOD']->value['LBL_SET_RECORD_MODAL_PAGINATION_TYPE'];?>
: </div>
<div>
<select name="record_modal_pagination_type"><?php echo $_smarty_tpl->tpl_vars['record_modal_pagination_type']->value;?>
</select>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
<?php echo '<script'; ?>
 type="text/javascript">

    var mail_smtpport = '<?php echo $_smarty_tpl->tpl_vars['MAIL_SMTPPORT']->value;?>
';
    var mail_smtpssl = '<?php echo $_smarty_tpl->tpl_vars['MAIL_SMTPSSL']->value;?>
';
    
    EmailMan = {};

    function Admin_check() {
        if (('<?php echo $_smarty_tpl->tpl_vars['IS_FOCUS_ADMIN']->value;?>
') && document.getElementById('is_admin').value == '0') {
            r = confirm('<?php echo $_smarty_tpl->tpl_vars['MOD']->value['LBL_CONFIRM_REGULAR_USER'];?>
');
            return r;
        } else {
            return true;
        }
    }


    $(document).ready(function() {
        var checkKey = function(key) {
            if (key != '') {
                $(".calendar_publish_ok").css('display', 'inline');
                $(".calendar_publish_none").css('display', 'none');
                $('#cal_pub_key_span').html(key);
                $('#ical_pub_key_span').html(key);
                $('#search_pub_key_span').html(key);
            } else {
                $(".calendar_publish_ok").css('display', 'none');
                $(".calendar_publish_none").css('display', 'inline');
            }
        };
        $('#calendar_publish_key').keyup(function() {
            checkKey($(this).val());
        });
        $('#calendar_publish_key').change(function() {
            checkKey($(this).val());
        });
        checkKey($('#calendar_publish_key').val());
    });
    
<?php echo '</script'; ?>
>
<?php echo $_smarty_tpl->tpl_vars['JAVASCRIPT']->value;?>


<?php echo '<script'; ?>
 type="text/javascript" language="Javascript">
    
    <?php echo $_smarty_tpl->tpl_vars['getNameJs']->value;?>

    <?php echo $_smarty_tpl->tpl_vars['getNumberJs']->value;?>

    currencies = <?php echo $_smarty_tpl->tpl_vars['currencySymbolJSON']->value;?>
;
    themeGroupList = <?php echo $_smarty_tpl->tpl_vars['themeGroupListJSON']->value;?>
;

    onUserEditView();


<?php echo '</script'; ?>
>
</form>
<div id="testOutboundDialog" class="yui-hidden">
<div id="testOutbound">
<form>
<table width="100%" border="0" cellspacing="0" cellpadding="0" class="edit view">
<tr>
<td scope="row">
<?php echo $_smarty_tpl->tpl_vars['APP']->value['LBL_EMAIL_SETTINGS_FROM_TO_EMAIL_ADDR'];?>

<span class="required">
<?php echo $_smarty_tpl->tpl_vars['APP']->value['LBL_REQUIRED_SYMBOL'];?>

</span>
</td>
<td>
<input type="text" id="outboundtest_from_address" name="outboundtest_from_address" size="35"
maxlength="64" value="<?php echo $_smarty_tpl->tpl_vars['TEST_EMAIL_ADDRESS']->value;?>
">
</td>
</tr>
<tr>
<td scope="row" colspan="2">
<input type="button" class="button" value="   <?php echo $_smarty_tpl->tpl_vars['APP']->value['LBL_EMAIL_SEND'];?>
   "
onclick="sendTestEmail();">&nbsp;
<input type="button" class="button" value="   <?php echo $_smarty_tpl->tpl_vars['APP']->value['LBL_CANCEL_BUTTON_LABEL'];?>
   "
onclick="EmailMan.testOutboundDialog.hide();">&nbsp;
</td>
</tr>
</table>
</form>
</div>
</div>

<style>
.actionsContainer.footer td {
height: 120px;
vertical-align: top;
}
</style>

<table width="100%" cellpadding="0" cellspacing="0" border="0" class="actionsContainer footer">
<tr>
<td class="actionbutton-footer">
<?php echo smarty_function_sugar_action_menu(array('id'=>"userEditActions",'class'=>"clickMenu fancymenu",'buttons'=>$_smarty_tpl->tpl_vars['ACTION_BUTTON_FOOTER']->value,'flat'=>true),$_smarty_tpl);?>

</td>
<td align="right" nowrap>
<span class="required"><?php echo $_smarty_tpl->tpl_vars['APP']->value['LBL_REQUIRED_SYMBOL'];?>
</span> <?php echo $_smarty_tpl->tpl_vars['APP']->value['NTC_REQUIRED'];?>

</td>
</tr>
</table>
<?php if ($_smarty_tpl->tpl_vars['showEmailSettingsPopup']->value) {
echo '<script'; ?>
>
    
    $(function() {
        SUGAR.email2.settings.showSettings();
    });
    
<?php echo '</script'; ?>
>
<?php }
echo '<script'; ?>
 type="text/javascript">
YAHOO.util.Event.onContentReady("EditView",
    function () { initEditView(document.forms.EditView) });
//window.setTimeout(, 100);
window.onbeforeunload = function () { return disableOnUnloadEditView(); };
// bug 55468 -- IE is too aggressive with onUnload event
if ($.browser.msie) {
$(document).ready(function() {
    $(".collapseLink,.expandLink").click(function (e) { e.preventDefault(); });
  });
}
<?php echo '</script'; ?>
>

<?php echo '<script'; ?>
 type="text/javascript">

    var selectTab = function(tab) {
        $('#EditView_tabs div.tab-content div.tab-pane-NOBOOTSTRAPTOGGLER').hide();
        $('#EditView_tabs div.tab-content div.tab-pane-NOBOOTSTRAPTOGGLER').eq(tab).show().addClass('active').addClass('in');
        $('#EditView_tabs div.panel-content div.panel').hide();
        $('#EditView_tabs div.panel-content div.panel.tab-panel-' + tab).show()
    };

    var selectTabOnError = function(tab) {
        selectTab(tab);
        $('#EditView_tabs ul.nav.nav-tabs li').removeClass('active');
        $('#EditView_tabs ul.nav.nav-tabs li a').css('color', '');

        $('#EditView_tabs ul.nav.nav-tabs li').eq(tab).find('a').first().css('color', 'red');
        $('#EditView_tabs ul.nav.nav-tabs li').eq(tab).addClass('active');

    };

    var selectTabOnErrorInputHandle = function(inputHandle) {
        var tab = $(inputHandle).closest('.tab-pane-NOBOOTSTRAPTOGGLER').attr('id').match(/^tab-content-(.*)$/)[1];
        selectTabOnError(tab);
    };


    $(function(){
        $('#EditView_tabs ul.nav.nav-tabs li > a[data-toggle="tab"]').click(function(e){
            if(typeof $(this).parent().find('a').first().attr('id') != 'undefined') {
                var tab = parseInt($(this).parent().find('a').first().attr('id').match(/^tab(?<number>(.)*)$/)[1]);
                selectTab(tab);
            }
        });

        $('a[data-toggle="collapse-edit"]').click(function(e){
            if($(this).hasClass('collapsed')) {
              // Expand panel
                // Change style of .panel-header
                $(this).removeClass('collapsed');
                // Expand .panel-body
                $(this).parents('.panel').find('.panel-body').removeClass('in').addClass('in');
            } else {
              // Collapse panel
                // Change style of .panel-header
                $(this).addClass('collapsed');
                // Collapse .panel-body
                $(this).parents('.panel').find('.panel-body').removeClass('in').removeClass('in');
            }
        });
    });

    <?php echo '</script'; ?>
>

<?php echo '<script'; ?>
 type="text/javascript">
addForm('EditView');addToValidate('EditView', 'user_name', 'user_name', true,'<?php echo smarty_function_sugar_translate(array('label'=>'LBL_USER_NAME','module'=>'Users','for_js'=>true),$_smarty_tpl);?>
' );
addToValidate('EditView', 'user_hash', 'varchar', false,'<?php echo smarty_function_sugar_translate(array('label'=>'LBL_USER_HASH','module'=>'Users','for_js'=>true),$_smarty_tpl);?>
' );
addToValidate('EditView', 'system_generated_password', 'bool', true,'<?php echo smarty_function_sugar_translate(array('label'=>'LBL_SYSTEM_GENERATED_PASSWORD','module'=>'Users','for_js'=>true),$_smarty_tpl);?>
' );
addToValidate('EditView', 'pwd_last_changed_date', 'date', false,'Password Last Changed' );
addToValidate('EditView', 'authenticate_id', 'varchar', false,'<?php echo smarty_function_sugar_translate(array('label'=>'LBL_AUTHENTICATE_ID','module'=>'Users','for_js'=>true),$_smarty_tpl);?>
' );
addToValidate('EditView', 'sugar_login', 'bool', false,'<?php echo smarty_function_sugar_translate(array('label'=>'LBL_SUITE_LOGIN','module'=>'Users','for_js'=>true),$_smarty_tpl);?>
' );
addToValidate('EditView', 'first_name', 'name', false,'<?php echo smarty_function_sugar_translate(array('label'=>'LBL_FIRST_NAME','module'=>'Users','for_js'=>true),$_smarty_tpl);?>
' );
addToValidate('EditView', 'last_name', 'name', true,'<?php echo smarty_function_sugar_translate(array('label'=>'LBL_LAST_NAME','module'=>'Users','for_js'=>true),$_smarty_tpl);?>
' );
addToValidate('EditView', 'full_name', 'name', false,'<?php echo smarty_function_sugar_translate(array('label'=>'LBL_NAME','module'=>'Users','for_js'=>true),$_smarty_tpl);?>
' );
addToValidate('EditView', 'name', 'varchar', false,'<?php echo smarty_function_sugar_translate(array('label'=>'LBL_NAME','module'=>'Users','for_js'=>true),$_smarty_tpl);?>
' );
addToValidate('EditView', 'is_admin', 'bool', false,'<?php echo smarty_function_sugar_translate(array('label'=>'LBL_IS_ADMIN','module'=>'Users','for_js'=>true),$_smarty_tpl);?>
' );
addToValidate('EditView', 'external_auth_only', 'bool', false,'<?php echo smarty_function_sugar_translate(array('label'=>'LBL_EXT_AUTHENTICATE','module'=>'Users','for_js'=>true),$_smarty_tpl);?>
' );
addToValidate('EditView', 'receive_notifications', 'bool', false,'<?php echo smarty_function_sugar_translate(array('label'=>'LBL_RECEIVE_NOTIFICATIONS','module'=>'Users','for_js'=>true),$_smarty_tpl);?>
' );
addToValidate('EditView', 'description', 'text', false,'<?php echo smarty_function_sugar_translate(array('label'=>'LBL_DESCRIPTION','module'=>'Users','for_js'=>true),$_smarty_tpl);?>
' );
addToValidate('EditView', 'date_entered_date', 'date', true,'Date Entered' );
addToValidate('EditView', 'date_modified_date', 'date', true,'Date Modified' );
addToValidate('EditView', 'modified_user_id', 'assigned_user_name', false,'<?php echo smarty_function_sugar_translate(array('label'=>'LBL_MODIFIED_BY_ID','module'=>'Users','for_js'=>true),$_smarty_tpl);?>
' );
addToValidate('EditView', 'modified_by_name', 'varchar', false,'<?php echo smarty_function_sugar_translate(array('label'=>'LBL_MODIFIED_BY','module'=>'Users','for_js'=>true),$_smarty_tpl);?>
' );
addToValidate('EditView', 'created_by', 'assigned_user_name', false,'<?php echo smarty_function_sugar_translate(array('label'=>'LBL_ASSIGNED_TO','module'=>'Users','for_js'=>true),$_smarty_tpl);?>
' );
addToValidate('EditView', 'created_by_name', 'varchar', false,'<?php echo smarty_function_sugar_translate(array('label'=>'LBL_CREATED_BY_NAME','module'=>'Users','for_js'=>true),$_smarty_tpl);?>
' );
addToValidate('EditView', 'title', 'varchar', false,'<?php echo smarty_function_sugar_translate(array('label'=>'LBL_TITLE','module'=>'Users','for_js'=>true),$_smarty_tpl);?>
' );
addToValidate('EditView', 'photo', 'image', false,'<?php echo smarty_function_sugar_translate(array('label'=>'LBL_PHOTO','module'=>'Users','for_js'=>true),$_smarty_tpl);?>
' );
addToValidate('EditView', 'department', 'varchar', false,'<?php echo smarty_function_sugar_translate(array('label'=>'LBL_DEPARTMENT','module'=>'Users','for_js'=>true),$_smarty_tpl);?>
' );
addToValidate('EditView', 'phone_home', 'phone', false,'<?php echo smarty_function_sugar_translate(array('label'=>'LBL_HOME_PHONE','module'=>'Users','for_js'=>true),$_smarty_tpl);?>
' );
addToValidate('EditView', 'phone_mobile', 'phone', false,'<?php echo smarty_function_sugar_translate(array('label'=>'LBL_MOBILE_PHONE','module'=>'Users','for_js'=>true),$_smarty_tpl);?>
' );
addToValidate('EditView', 'phone_work', 'phone', false,'<?php echo smarty_function_sugar_translate(array('label'=>'LBL_WORK_PHONE','module'=>'Users','for_js'=>true),$_smarty_tpl);?>
' );
addToValidate('EditView', 'phone_other', 'phone', false,'<?php echo smarty_function_sugar_translate(array('label'=>'LBL_OTHER_PHONE','module'=>'Users','for_js'=>true),$_smarty_tpl);?>
' );
addToValidate('EditView', 'phone_fax', 'phone', false,'<?php echo smarty_function_sugar_translate(array('label'=>'LBL_FAX_PHONE','module'=>'Users','for_js'=>true),$_smarty_tpl);?>
' );
addToValidate('EditView', 'status', 'enum', true,'<?php echo smarty_function_sugar_translate(array('label'=>'LBL_STATUS','module'=>'Users','for_js'=>true),$_smarty_tpl);?>
' );
addToValidate('EditView', 'address_street', 'varchar', false,'<?php echo smarty_function_sugar_translate(array('label'=>'LBL_ADDRESS_STREET','module'=>'Users','for_js'=>true),$_smarty_tpl);?>
' );
addToValidate('EditView', 'address_city', 'varchar', false,'<?php echo smarty_function_sugar_translate(array('label'=>'LBL_ADDRESS_CITY','module'=>'Users','for_js'=>true),$_smarty_tpl);?>
' );
addToValidate('EditView', 'address_state', 'varchar', false,'<?php echo smarty_function_sugar_translate(array('label'=>'LBL_ADDRESS_STATE','module'=>'Users','for_js'=>true),$_smarty_tpl);?>
' );
addToValidate('EditView', 'address_country', 'varchar', false,'<?php echo smarty_function_sugar_translate(array('label'=>'LBL_ADDRESS_COUNTRY','module'=>'Users','for_js'=>true),$_smarty_tpl);?>
' );
addToValidate('EditView', 'address_postalcode', 'varchar', false,'<?php echo smarty_function_sugar_translate(array('label'=>'LBL_ADDRESS_POSTALCODE','module'=>'Users','for_js'=>true),$_smarty_tpl);?>
' );
addToValidate('EditView', 'UserType', 'enum', false,'<?php echo smarty_function_sugar_translate(array('label'=>'LBL_USER_TYPE','module'=>'Users','for_js'=>true),$_smarty_tpl);?>
' );
addToValidate('EditView', 'deleted', 'bool', false,'<?php echo smarty_function_sugar_translate(array('label'=>'LBL_DELETED','module'=>'Users','for_js'=>true),$_smarty_tpl);?>
' );
addToValidate('EditView', 'portal_only', 'bool', false,'<?php echo smarty_function_sugar_translate(array('label'=>'LBL_PORTAL_ONLY_USER','module'=>'Users','for_js'=>true),$_smarty_tpl);?>
' );
addToValidate('EditView', 'show_on_employees', 'bool', false,'<?php echo smarty_function_sugar_translate(array('label'=>'LBL_SHOW_ON_EMPLOYEES','module'=>'Users','for_js'=>true),$_smarty_tpl);?>
' );
addToValidate('EditView', 'employee_status', 'varchar', false,'<?php echo smarty_function_sugar_translate(array('label'=>'LBL_EMPLOYEE_STATUS','module'=>'Users','for_js'=>true),$_smarty_tpl);?>
' );
addToValidate('EditView', 'messenger_id', 'varchar', false,'<?php echo smarty_function_sugar_translate(array('label'=>'LBL_MESSENGER_ID','module'=>'Users','for_js'=>true),$_smarty_tpl);?>
' );
addToValidate('EditView', 'messenger_type', 'enum', false,'<?php echo smarty_function_sugar_translate(array('label'=>'LBL_MESSENGER_TYPE','module'=>'Users','for_js'=>true),$_smarty_tpl);?>
' );
addToValidate('EditView', 'reports_to_id', 'id', false,'<?php echo smarty_function_sugar_translate(array('label'=>'LBL_REPORTS_TO_ID','module'=>'Users','for_js'=>true),$_smarty_tpl);?>
' );
addToValidate('EditView', 'reports_to_name', 'relate', false,'<?php echo smarty_function_sugar_translate(array('label'=>'LBL_REPORTS_TO_NAME','module'=>'Users','for_js'=>true),$_smarty_tpl);?>
' );
addToValidate('EditView', 'email1', 'varchar', true,'<?php echo smarty_function_sugar_translate(array('label'=>'LBL_EMAIL','module'=>'Users','for_js'=>true),$_smarty_tpl);?>
' );
addToValidate('EditView', 'email_link_type', 'enum', false,'<?php echo smarty_function_sugar_translate(array('label'=>'LBL_EMAIL_LINK_TYPE','module'=>'Users','for_js'=>true),$_smarty_tpl);?>
' );
addToValidate('EditView', 'editor_type', 'enum', false,'<?php echo smarty_function_sugar_translate(array('label'=>'LBL_EDITOR_TYPE','module'=>'Users','for_js'=>true),$_smarty_tpl);?>
' );
addToValidate('EditView', 'is_group', 'bool', false,'<?php echo smarty_function_sugar_translate(array('label'=>'LBL_GROUP_USER','module'=>'Users','for_js'=>true),$_smarty_tpl);?>
' );
addToValidate('EditView', 'c_accept_status_fields', 'relate', false,'<?php echo smarty_function_sugar_translate(array('label'=>'LBL_LIST_ACCEPT_STATUS','module'=>'Users','for_js'=>true),$_smarty_tpl);?>
' );
addToValidate('EditView', 'm_accept_status_fields', 'relate', false,'<?php echo smarty_function_sugar_translate(array('label'=>'LBL_LIST_ACCEPT_STATUS','module'=>'Users','for_js'=>true),$_smarty_tpl);?>
' );
addToValidate('EditView', 'accept_status_id', 'varchar', false,'<?php echo smarty_function_sugar_translate(array('label'=>'LBL_LIST_ACCEPT_STATUS','module'=>'Users','for_js'=>true),$_smarty_tpl);?>
' );
addToValidate('EditView', 'accept_status_name', 'enum', false,'<?php echo smarty_function_sugar_translate(array('label'=>'LBL_LIST_ACCEPT_STATUS','module'=>'Users','for_js'=>true),$_smarty_tpl);?>
' );
addToValidate('EditView', 'securitygroup_noninher_fields', 'relate', false,'<?php echo smarty_function_sugar_translate(array('label'=>'LBL_USER_NAME','module'=>'Users','for_js'=>true),$_smarty_tpl);?>
' );
addToValidate('EditView', 'securitygroup_noninherit_id', 'varchar', false,'<?php echo smarty_function_sugar_translate(array('label'=>'LBL_securitygroup_noninherit_id','module'=>'Users','for_js'=>true),$_smarty_tpl);?>
' );
addToValidate('EditView', 'securitygroup_noninheritable', 'bool', false,'<?php echo smarty_function_sugar_translate(array('label'=>'LBL_SECURITYGROUP_NONINHERITABLE','module'=>'Users','for_js'=>true),$_smarty_tpl);?>
' );
addToValidate('EditView', 'securitygroup_primary_group', 'bool', false,'<?php echo smarty_function_sugar_translate(array('label'=>'LBL_PRIMARY_GROUP','module'=>'Users','for_js'=>true),$_smarty_tpl);?>
' );
addToValidate('EditView', 'factor_auth', 'bool', false,'<?php echo smarty_function_sugar_translate(array('label'=>'LBL_FACTOR_AUTH','module'=>'Users','for_js'=>true),$_smarty_tpl);?>
' );
addToValidate('EditView', 'factor_auth_interface', 'enum', false,'<?php echo smarty_function_sugar_translate(array('label'=>'LBL_FACTOR_AUTH_INTERFACE','module'=>'Users','for_js'=>true),$_smarty_tpl);?>
' );
addToValidateBinaryDependency('EditView', 'assigned_user_name', 'alpha', false,'<?php echo smarty_function_sugar_translate(array('label'=>'ERR_SQS_NO_MATCH_FIELD','module'=>'Users','for_js'=>true),$_smarty_tpl);?>
: <?php echo smarty_function_sugar_translate(array('label'=>'LBL_ASSIGNED_TO','module'=>'Users','for_js'=>true),$_smarty_tpl);?>
', 'assigned_user_id' );
addToValidateBinaryDependency('EditView', 'reports_to_name', 'alpha', false,'<?php echo smarty_function_sugar_translate(array('label'=>'ERR_SQS_NO_MATCH_FIELD','module'=>'Users','for_js'=>true),$_smarty_tpl);?>
: <?php echo smarty_function_sugar_translate(array('label'=>'LBL_REPORTS_TO_NAME','module'=>'Users','for_js'=>true),$_smarty_tpl);?>
', 'reports_to_id' );
<?php echo '</script'; ?>
><?php echo '<script'; ?>
 language="javascript">if(typeof sqs_objects == 'undefined'){var sqs_objects = new Array;}sqs_objects['EditView_reports_to_name']={"form":"EditView","method":"get_user_array","field_list":["user_name","id"],"populate_list":["reports_to_name","reports_to_id"],"required_list":["reports_to_id"],"conditions":[{"name":"user_name","op":"like_custom","end":"%","value":""}],"limit":"30","no_match_text":"No Match"};<?php echo '</script'; ?>
>
<?php }
}
