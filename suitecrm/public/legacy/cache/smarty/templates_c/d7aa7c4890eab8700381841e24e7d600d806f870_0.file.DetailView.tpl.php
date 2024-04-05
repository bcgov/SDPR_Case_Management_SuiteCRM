<?php
/* Smarty version 4.3.2, created on 2024-03-13 03:10:20
  from '/suitecrm/public/legacy/cache/themes/suite8/modules/Users/DetailView.tpl' */

/* @var Smarty_Internal_Template $_smarty_tpl */
if ($_smarty_tpl->_decodeProperties($_smarty_tpl, array (
  'version' => '4.3.2',
  'unifunc' => 'content_65f1191cb669e6_29441031',
  'has_nocache_code' => false,
  'file_dependency' => 
  array (
    'd7aa7c4890eab8700381841e24e7d600d806f870' => 
    array (
      0 => '/suitecrm/public/legacy/cache/themes/suite8/modules/Users/DetailView.tpl',
      1 => 1710299420,
      2 => 'file',
    ),
  ),
  'includes' => 
  array (
    'file:modules/Reminders/tpls/remindersDefaults.tpl' => 1,
  ),
),false)) {
function content_65f1191cb669e6_29441031 (Smarty_Internal_Template $_smarty_tpl) {
$_smarty_tpl->_checkPlugins(array(0=>array('file'=>'/suitecrm/public/legacy/include/Smarty/plugins/function.sugar_include.php','function'=>'smarty_function_sugar_include',),1=>array('file'=>'/suitecrm/public/legacy/include/Smarty/plugins/function.sugar_translate.php','function'=>'smarty_function_sugar_translate',),2=>array('file'=>'/suitecrm/public/legacy/include/Smarty/plugins/modifier.strip_semicolon.php','function'=>'smarty_modifier_strip_semicolon',),3=>array('file'=>'/suitecrm/public/legacy/include/Smarty/plugins/function.counter.php','function'=>'smarty_function_counter',),4=>array('file'=>'/suitecrm/public/legacy/include/Smarty/plugins/function.sugar_getimage.php','function'=>'smarty_function_sugar_getimage',),5=>array('file'=>'/suitecrm/public/legacy/include/Smarty/plugins/function.sugar_phone.php','function'=>'smarty_function_sugar_phone',),6=>array('file'=>'/suitecrm/public/legacy/include/Smarty/plugins/modifier.escape.php','function'=>'smarty_modifier_escape',),7=>array('file'=>'/suitecrm/public/legacy/include/Smarty/plugins/function.sugar_getjspath.php','function'=>'smarty_function_sugar_getjspath',),));
?>


<?php echo '<script'; ?>
 language="javascript">
    
    SUGAR.util.doWhen(function () {
        return $("#contentTable").length == 0;
    }, SUGAR.themes.actionMenu);
    
<?php echo '</script'; ?>
>
<table cellpadding="0" cellspacing="0" border="0" width="100%" id="">
<tr>
<td class="buttons" align="left" NOWRAP width="80%">
<div class="actionsContainer">
<form action="index.php" method="post" name="DetailView" id="formDetailView">
<input type="hidden" name="module" value="<?php echo $_smarty_tpl->tpl_vars['module']->value;?>
">
<input type="hidden" name="record" value="<?php echo $_smarty_tpl->tpl_vars['fields']->value['id']['value'];?>
">
<input type="hidden" name="return_action">
<input type="hidden" name="return_module">
<input type="hidden" name="return_id">
<input type="hidden" name="module_tab">
<input type="hidden" name="isDuplicate" value="false">
<input type="hidden" name="offset" value="<?php echo $_smarty_tpl->tpl_vars['offset']->value;?>
">
<input type="hidden" name="action" value="EditView">
<input type="hidden" name="sugar_body_only">
<?php if (!$_smarty_tpl->tpl_vars['config']->value['enable_action_menu']) {?>
<div class="buttons">
<?php if ($_smarty_tpl->tpl_vars['bean']->value->aclAccess("edit")) {?>
<input title="<?php echo $_smarty_tpl->tpl_vars['APP']->value['LBL_EDIT_BUTTON_TITLE'];?>
"
accessKey="<?php echo $_smarty_tpl->tpl_vars['APP']->value['LBL_EDIT_BUTTON_KEY'];?>
"
name="Edit"
id="edit_button"
class="button primary"
type="button"
value="<?php echo $_smarty_tpl->tpl_vars['APP']->value['LBL_EDIT_BUTTON_LABEL'];?>
"
onclick="window.location.href='index.php?module=Users&action=EditView&record=<?php echo $_smarty_tpl->tpl_vars['id']->value;?>
&return_module=Users&return_action=DetailView&return_id=<?php echo $_smarty_tpl->tpl_vars['id']->value;?>
'"/>
<?php }?>
<input id="duplicate_button" title="Duplicate" accessKey="u" class="button" onclick="var _form = document.getElementById('formDetailView');_form.return_module.value='Users'; _form.return_action.value='DetailView'; _form.isDuplicate.value=true; _form.action.value='EditView';window.location.href='index.php?' + (new URLSearchParams(new FormData(_form)).toString());" type="button" name="Duplicate" value="Duplicate"/>
<input name="delete" id="delete_button" title="Delete" type="button" class="button" onclick="confirmDelete();" value="Delete"/>
<input title="Reset User Preferences" class="button" LANGUAGE="javascript" onclick="if(confirm('Are you sure you want reset all of the preferences for this user?')) window.location='index.php?module=Users&action=resetPreferences&reset_preferences=true&record=<?php echo $_smarty_tpl->tpl_vars['fields']->value['id']['value'];?>
';" type="button" name="password" value="Reset User Preferences"/>
<input title="Reset Homepage" class="button" LANGUAGE="javascript" onclick="if(confirm('Are you sure you want reset your Homepage?')) window.location='index.php?module=Users&action=DetailView&reset_homepage=true&record=<?php echo $_smarty_tpl->tpl_vars['fields']->value['id']['value'];?>
';" type="button" name="password" value="Reset Homepage"/>
<?php if ($_smarty_tpl->tpl_vars['bean']->value->aclAccess("detail")) {
if (!empty($_smarty_tpl->tpl_vars['fields']->value['id']['value']) && $_smarty_tpl->tpl_vars['isAuditEnabled']->value) {?><input id="btn_view_change_log" title="<?php echo $_smarty_tpl->tpl_vars['APP']->value['LNK_VIEW_CHANGE_LOG'];?>
" class="button" onclick='open_popup("Audit", "600", "400", "&record=<?php echo $_smarty_tpl->tpl_vars['fields']->value['id']['value'];?>
&module_name=Users", true, false,  { "call_back_function":"set_return","form_name":"EditView","field_to_name_array":[] } ); return false;' type="button" value="<?php echo $_smarty_tpl->tpl_vars['APP']->value['LNK_VIEW_CHANGE_LOG'];?>
"><?php }
}?>
</div>
<?php }?>
</form>
</div>
</td>
<td align="right" width="20%" class="buttons"><?php echo $_smarty_tpl->tpl_vars['ADMIN_EDIT']->value;?>

</td>
</tr>
</table>
<?php echo smarty_function_sugar_include(array('include'=>$_smarty_tpl->tpl_vars['includes']->value),$_smarty_tpl);?>

<form action="index.php" method="post" name="DetailView" id="formDetailView">
<input type="hidden" name="module" value="<?php echo $_smarty_tpl->tpl_vars['module']->value;?>
">
<input type="hidden" name="record" value="<?php echo $_smarty_tpl->tpl_vars['fields']->value['id']['value'];?>
">
<input type="hidden" name="current_user_id" value="<?php echo $_smarty_tpl->tpl_vars['CURRENT_USER_ID']->value;?>
">
<input type="hidden" name="return_action">
<input type="hidden" name="return_module">
<input type="hidden" name="return_id">
<input type="hidden" name="module_tab">
<input type="hidden" name="isDuplicate" value="false">
<input type="hidden" name="offset" value="<?php echo $_smarty_tpl->tpl_vars['offset']->value;?>
">
<input type="hidden" name="action" value="EditView">
<input type="hidden" name="sugar_body_only">
</form>
<div class="detail-view">

<ul class="nav nav-tabs">


<li role="presentation" class="active">
<a id="tab0" data-toggle="tab" class="hidden-xs">
<?php echo smarty_function_sugar_translate(array('label'=>'LBL_USER_INFORMATION','module'=>'Users'),$_smarty_tpl);?>

</a>
<a id="xstab0" href="#" class="visible-xs first-tab-xs dropdown-toggle" data-toggle="dropdown">
<?php echo smarty_function_sugar_translate(array('label'=>'LBL_USER_INFORMATION','module'=>'Users'),$_smarty_tpl);?>

</a>
<ul id="first-tab-menu-xs" class="dropdown-menu">
<li role="presentation">
<a id="tab0" data-toggle="tab" onclick="changeFirstTab(this, 'tab-content-0');">
<?php echo smarty_function_sugar_translate(array('label'=>'LBL_USER_INFORMATION','module'=>'Users'),$_smarty_tpl);?>

</a>
</li>
<li role="presentation">
<a id="tab1" data-toggle="tab" onclick="changeFirstTab(this, 'tab-content-1');">
<?php echo smarty_function_sugar_translate(array('label'=>'LBL_EMPLOYEE_INFORMATION','module'=>'Users'),$_smarty_tpl);?>

</a>
</li>
<li role="presentation">
<a data-toggle="tab" id="tab0" href="#">Advanced</a>
</li>
<?php if ($_smarty_tpl->tpl_vars['SHOW_ROLES']->value == true) {?>
<li role="presentation">
<a data-toggle="tab" id="tab0" href="#">Access</a>
</li>
<?php }?>
</ul>
</li>


<li role="presentation" class="hidden-xs ">
<a data-toggle="tab" id="tab1" href="#">Advanced</a>
</li>
<?php if ($_smarty_tpl->tpl_vars['SHOW_ROLES']->value) {?>
<li role="presentation" class="hidden-xs ">
<a data-toggle="tab" id="tab2" href="#">Access</a>
</li>
<?php }
if ($_smarty_tpl->tpl_vars['config']->value['enable_action_menu']) {?>
<li id="tab-actions" class="dropdown">
<a class="dropdown-toggle" data-toggle="dropdown" href="#">ACTIONS<span class="suitepicon suitepicon-action-caret"></span></a>
<ul class="dropdown-menu">
<li><?php if ($_smarty_tpl->tpl_vars['bean']->value->aclAccess("edit")) {?>
<input title="<?php echo $_smarty_tpl->tpl_vars['APP']->value['LBL_EDIT_BUTTON_TITLE'];?>
"
accessKey="<?php echo $_smarty_tpl->tpl_vars['APP']->value['LBL_EDIT_BUTTON_KEY'];?>
"
name="Edit"
id="edit_button"
class="button primary"
type="button"
value="<?php echo $_smarty_tpl->tpl_vars['APP']->value['LBL_EDIT_BUTTON_LABEL'];?>
"
onclick="window.location.href='index.php?module=Users&action=EditView&record=<?php echo $_smarty_tpl->tpl_vars['id']->value;?>
&return_module=Users&return_action=DetailView&return_id=<?php echo $_smarty_tpl->tpl_vars['id']->value;?>
'"/>
<?php }?></li>
<li><input id="duplicate_button" title="Duplicate" accessKey="u" class="button" onclick="var _form = document.getElementById('formDetailView');_form.return_module.value='Users'; _form.return_action.value='DetailView'; _form.isDuplicate.value=true; _form.action.value='EditView';window.location.href='index.php?' + (new URLSearchParams(new FormData(_form)).toString());" type="button" name="Duplicate" value="Duplicate"/></li>
<li><input name="delete" id="delete_button" title="Delete" type="button" class="button" onclick="confirmDelete();" value="Delete"/></li>
<li><input title="Reset User Preferences" class="button" LANGUAGE="javascript" onclick="if(confirm('Are you sure you want reset all of the preferences for this user?')) window.location='index.php?module=Users&action=resetPreferences&reset_preferences=true&record=<?php echo $_smarty_tpl->tpl_vars['fields']->value['id']['value'];?>
';" type="button" name="password" value="Reset User Preferences"/></li>
<li><input title="Reset Homepage" class="button" LANGUAGE="javascript" onclick="if(confirm('Are you sure you want reset your Homepage?')) window.location='index.php?module=Users&action=DetailView&reset_homepage=true&record=<?php echo $_smarty_tpl->tpl_vars['fields']->value['id']['value'];?>
';" type="button" name="password" value="Reset Homepage"/></li>
<li><?php if ($_smarty_tpl->tpl_vars['bean']->value->aclAccess("detail")) {
if (!empty($_smarty_tpl->tpl_vars['fields']->value['id']['value']) && $_smarty_tpl->tpl_vars['isAuditEnabled']->value) {?><input id="btn_view_change_log" title="<?php echo $_smarty_tpl->tpl_vars['APP']->value['LNK_VIEW_CHANGE_LOG'];?>
" class="button" onclick='open_popup("Audit", "600", "400", "&record=<?php echo $_smarty_tpl->tpl_vars['fields']->value['id']['value'];?>
&module_name=Users", true, false,  { "call_back_function":"set_return","form_name":"EditView","field_to_name_array":[] } ); return false;' type="button" value="<?php echo $_smarty_tpl->tpl_vars['APP']->value['LNK_VIEW_CHANGE_LOG'];?>
"><?php }
}?></li>
</ul>
</li>
<?php }?>
</ul>
<div class="clearfix"></div>
<!-- TAB CONTENT USE TABS -->
<div class="tab-content">

<div class="tab-pane-NOBOOTSTRAPTOGGLER active fade in" id='tab-content-0'>





<div class="row detail-view-row">



<div class="col-xs-12 col-sm-6 detail-view-row-item detail-view-bordered" data-field="full_name">


<div class="col-xs-12 col-sm-4 label col-1-label">


<?php $_smarty_tpl->smarty->ext->_capture->open($_smarty_tpl, "label", "label", null);
echo smarty_function_sugar_translate(array('label'=>'LBL_NAME','module'=>'Users'),$_smarty_tpl);
$_smarty_tpl->smarty->ext->_capture->close($_smarty_tpl);
echo smarty_modifier_strip_semicolon($_smarty_tpl->tpl_vars['label']->value);?>
:
</div>


<div class="col-xs-12 col-sm-8 detail-view-field d-flex inlineEdit" type="name" field="full_name" >

<?php if (!$_smarty_tpl->tpl_vars['fields']->value['full_name']['hidden']) {
echo smarty_function_counter(array('name'=>"panelFieldCount",'print'=>false),$_smarty_tpl);?>


<?php if (strlen($_smarty_tpl->tpl_vars['fields']->value['full_name']['value']) <= 0) {
$_smarty_tpl->_assignInScope('value', $_smarty_tpl->tpl_vars['fields']->value['full_name']['default_value']);
} else {
$_smarty_tpl->_assignInScope('value', $_smarty_tpl->tpl_vars['fields']->value['full_name']['value']);
}?> 
<span class="sugar_field" id="<?php echo $_smarty_tpl->tpl_vars['fields']->value['full_name']['name'];?>
"><?php echo $_smarty_tpl->tpl_vars['fields']->value['full_name']['value'];?>
</span>
<?php }?>

<div class="inlineEditIcon col-xs-hidden">
<?php echo smarty_function_sugar_getimage(array('name'=>"pencil"),$_smarty_tpl);?>

</div>
</div>
<div class="dotted-border"></div>


</div>




<div class="col-xs-12 col-sm-6 detail-view-row-item detail-view-bordered" data-field="user_name">


<div class="col-xs-12 col-sm-4 label col-2-label">


<?php $_smarty_tpl->smarty->ext->_capture->open($_smarty_tpl, "label", "label", null);
echo smarty_function_sugar_translate(array('label'=>'LBL_USER_NAME','module'=>'Users'),$_smarty_tpl);
$_smarty_tpl->smarty->ext->_capture->close($_smarty_tpl);
echo smarty_modifier_strip_semicolon($_smarty_tpl->tpl_vars['label']->value);?>
:
</div>


<div class="col-xs-12 col-sm-8 detail-view-field d-flex inlineEdit" type="user_name" field="user_name" >

<?php if (!$_smarty_tpl->tpl_vars['fields']->value['user_name']['hidden']) {
echo smarty_function_counter(array('name'=>"panelFieldCount",'print'=>false),$_smarty_tpl);?>


<?php if (strlen($_smarty_tpl->tpl_vars['fields']->value['user_name']['value']) <= 0) {
$_smarty_tpl->_assignInScope('value', $_smarty_tpl->tpl_vars['fields']->value['user_name']['default_value']);
} else {
$_smarty_tpl->_assignInScope('value', $_smarty_tpl->tpl_vars['fields']->value['user_name']['value']);
}?> 
<span class="sugar_field" id="<?php echo $_smarty_tpl->tpl_vars['fields']->value['user_name']['name'];?>
"><?php echo $_smarty_tpl->tpl_vars['fields']->value['user_name']['value'];?>
</span>
<?php }?>

<div class="inlineEditIcon col-xs-hidden">
<?php echo smarty_function_sugar_getimage(array('name'=>"pencil"),$_smarty_tpl);?>

</div>
</div>
<div class="dotted-border"></div>


</div>

</div>


<div class="row detail-view-row">



<div class="col-xs-12 col-sm-6 detail-view-row-item detail-view-bordered" data-field="status">


<div class="col-xs-12 col-sm-4 label col-1-label">


<?php $_smarty_tpl->smarty->ext->_capture->open($_smarty_tpl, "label", "label", null);
echo smarty_function_sugar_translate(array('label'=>'LBL_STATUS','module'=>'Users'),$_smarty_tpl);
$_smarty_tpl->smarty->ext->_capture->close($_smarty_tpl);
echo smarty_modifier_strip_semicolon($_smarty_tpl->tpl_vars['label']->value);?>
:
</div>


<div class="col-xs-12 col-sm-8 detail-view-field d-flex inlineEdit" type="enum" field="status" >

<?php if (!$_smarty_tpl->tpl_vars['fields']->value['status']['hidden']) {
echo smarty_function_counter(array('name'=>"panelFieldCount",'print'=>false),$_smarty_tpl);?>



<?php if (is_string($_smarty_tpl->tpl_vars['fields']->value['status']['options'])) {?>
<input type="hidden" class="sugar_field" id="<?php echo $_smarty_tpl->tpl_vars['fields']->value['status']['name'];?>
" value="<?php echo $_smarty_tpl->tpl_vars['fields']->value['status']['options'];?>
">
<?php echo $_smarty_tpl->tpl_vars['fields']->value['status']['options'];?>

<?php } else { ?>
<input type="hidden" class="sugar_field" id="<?php echo $_smarty_tpl->tpl_vars['fields']->value['status']['name'];?>
" value="<?php echo $_smarty_tpl->tpl_vars['fields']->value['status']['value'];?>
">
<?php echo $_smarty_tpl->tpl_vars['fields']->value['status']['options'][$_smarty_tpl->tpl_vars['fields']->value['status']['value']];?>

<?php }
}?>

<div class="inlineEditIcon col-xs-hidden">
<?php echo smarty_function_sugar_getimage(array('name'=>"pencil"),$_smarty_tpl);?>

</div>
</div>
<div class="dotted-border"></div>


</div>




<div class="col-xs-12 col-sm-6 detail-view-row-item detail-view-bordered" data-field="UserType">


<div class="col-xs-12 col-sm-4 label col-2-label">


<?php $_smarty_tpl->smarty->ext->_capture->open($_smarty_tpl, "label", "label", null);
echo smarty_function_sugar_translate(array('label'=>'LBL_USER_TYPE','module'=>'Users'),$_smarty_tpl);
$_smarty_tpl->smarty->ext->_capture->close($_smarty_tpl);
echo smarty_modifier_strip_semicolon($_smarty_tpl->tpl_vars['label']->value);?>
:
</div>


<div class="col-xs-12 col-sm-8 detail-view-field d-flex inlineEdit" type="enum" field="UserType" >

<?php if (!$_smarty_tpl->tpl_vars['fields']->value['UserType']['hidden']) {
echo smarty_function_counter(array('name'=>"panelFieldCount",'print'=>false),$_smarty_tpl);?>

<span id="UserType" class="sugar_field"><?php if ((isset($_smarty_tpl->tpl_vars['USER_TYPE_READONLY']->value))) {
echo $_smarty_tpl->tpl_vars['USER_TYPE_READONLY']->value;
}?></span>
<?php }?>

<div class="inlineEditIcon col-xs-hidden">
<?php echo smarty_function_sugar_getimage(array('name'=>"pencil"),$_smarty_tpl);?>

</div>
</div>
<div class="dotted-border"></div>


</div>

</div>


<div class="row detail-view-row">



<div class="col-xs-12 col-sm-12 detail-view-row-item" data-field="photo">


<div class="col-xs-12 col-sm-2 label col-1-label">


<?php $_smarty_tpl->smarty->ext->_capture->open($_smarty_tpl, "label", "label", null);
echo smarty_function_sugar_translate(array('label'=>'LBL_PHOTO','module'=>'Users'),$_smarty_tpl);
$_smarty_tpl->smarty->ext->_capture->close($_smarty_tpl);
echo smarty_modifier_strip_semicolon($_smarty_tpl->tpl_vars['label']->value);?>
:
</div>


<div class="col-xs-12 col-sm-10 detail-view-field d-flex inlineEdit" type="image" field="photo" colspan='3'>

<?php if (!$_smarty_tpl->tpl_vars['fields']->value['photo']['hidden']) {
echo smarty_function_counter(array('name'=>"panelFieldCount",'print'=>false),$_smarty_tpl);?>


<span class="sugar_field" id="<?php echo $_smarty_tpl->tpl_vars['fields']->value['photo']['name'];?>
">
<?php if (strlen($_smarty_tpl->tpl_vars['fields']->value['photo']['value']) <= 0) {?>
<img src="" style="max-width: <?php if (!$_smarty_tpl->tpl_vars['vardef']->value['width']) {?>160<?php } else { ?>200<?php }?>px;" height="<?php if (!$_smarty_tpl->tpl_vars['vardef']->value['height']) {?>160<?php } else { ?>50<?php }?>">
<?php } else { ?>
<img src="index.php?entryPoint=download&id=<?php echo $_smarty_tpl->tpl_vars['fields']->value['id']['value'];?>
_<?php echo $_smarty_tpl->tpl_vars['fields']->value['photo']['name'];
echo $_smarty_tpl->tpl_vars['fields']->value['width']['value'];?>
&type=<?php echo $_smarty_tpl->tpl_vars['module']->value;?>
" style="max-width: <?php if (!$_smarty_tpl->tpl_vars['vardef']->value['width']) {?>160<?php } else { ?>200<?php }?>px;" height="<?php if (!$_smarty_tpl->tpl_vars['vardef']->value['height']) {?>160<?php } else { ?>50<?php }?>">
<?php }?>
</span>
<?php }?>

<div class="inlineEditIcon col-xs-hidden">
<?php echo smarty_function_sugar_getimage(array('name'=>"pencil"),$_smarty_tpl);?>

</div>
</div>
<div class="dotted-border"></div>


</div>

</div>

</div>

<div class="tab-pane-NOBOOTSTRAPTOGGLER fade" id='tab-content-2' >


<div id="settings_suitep" class="users-advanced-settings">
<div class="row detail-view-row">
<h4><?php echo $_smarty_tpl->tpl_vars['MOD']->value['LBL_USER_SETTINGS'];?>
</h4>
</div>
<div class="row detail-view-row">
<div class="col-xs-12 col-sm-6 detail-view-row-item border-line">
<!-- [hide!!] -->
<!-- DIV inside - colspan != 3 -->
<div class="col-xs-12 col-sm-4 label col-1-label">
<!-- LABEL -->
<?php echo $_smarty_tpl->tpl_vars['MOD']->value['LBL_RECEIVE_NOTIFICATIONS'];?>

</div>
<!-- /DIV inside  -->
<!-- phone (version 1) -->
<div class="col-xs-12 col-sm-8 detail-view-field">
<!-- simple hidden start -->
<input name='receive_notifications' class="checkbox" tabindex='12' type="checkbox" value="12" <?php echo $_smarty_tpl->tpl_vars['RECEIVE_NOTIFICATIONS']->value;?>
 disabled>
<!-- simple hidden finish -->
</div>
<div class="edit-dotted-border"></div>
</div>
<div class="col-xs-12 col-sm-6 detail-view-row-item">
<!-- [hide!!] -->
<!-- DIV inside - colspan != 3 -->
<div class="col-xs-12 col-sm-4 label col-1-label">
<!-- LABEL -->
<?php echo smarty_modifier_strip_semicolon($_smarty_tpl->tpl_vars['MOD']->value['LBL_MAILMERGE']);?>

</div>
<!-- /DIV inside  -->
<!-- phone (version 1) -->
<div class="col-xs-12 col-sm-8 detail-view-field " type="name" field="name">
<!-- simple hidden start -->
<input tabindex='3' name='mailmerge_on' disabled class="checkbox" type="checkbox" <?php echo $_smarty_tpl->tpl_vars['MAILMERGE_ON']->value;?>
 disabled>
<!-- simple hidden finish -->
</div>
<div class="edit-dotted-border"></div>
</div>
</div>
<div class="row detail-view-row">
<div class="col-xs-12 col-sm-12 detail-view-row-item border-line" style="width: 50%;">
<!-- [hide!!] -->
<!-- DIV inside - colspan != 3 -->
<div class="col-xs-12 col-sm-2 label col-1-label">
<!-- LABEL -->
<?php echo smarty_modifier_strip_semicolon($_smarty_tpl->tpl_vars['MOD']->value['LBL_SETTINGS_URL']);?>

</div>
<!-- /DIV inside  -->
<!-- phone (version 1) -->
<div class="col-xs-12 col-sm-10 detail-view-field ">
<!-- simple hidden start -->
<?php echo $_smarty_tpl->tpl_vars['SETTINGS_URL']->value;?>

<!-- simple hidden finish -->
</div>
<div class="edit-dotted-border"></div>
</div>
</div>
<div class="row detail-view-row">
<div class="col-xs-12 col-sm-6 detail-view-row-item border-line">
<!-- [hide!!] -->
<!-- DIV inside - colspan != 3 -->
<div class="col-xs-12 col-sm-4 label col-1-label">
<!-- LABEL -->
<?php echo smarty_modifier_strip_semicolon($_smarty_tpl->tpl_vars['MOD']->value['LBL_EXPORT_DELIMITER']);?>

</div>
<!-- /DIV inside  -->
<!-- phone (version 1) -->
<div class="col-xs-12 col-sm-8 detail-view-field " type="name" field="name">
<!-- simple hidden start -->
<?php echo $_smarty_tpl->tpl_vars['EXPORT_DELIMITER']->value;?>

<!-- simple hidden finish -->
</div>
<div class="edit-dotted-border"></div>
</div>
<div class="col-xs-12 col-sm-6 detail-view-row-item">
<!-- [hide!!] -->
<!-- DIV inside - colspan != 3 -->
<div class="col-xs-12 col-sm-4 label col-1-label">
<!-- LABEL -->
<?php echo smarty_modifier_strip_semicolon($_smarty_tpl->tpl_vars['MOD']->value['LBL_EXPORT_CHARSET']);?>

</div>
<!-- /DIV inside  -->
<!-- phone (version 1) -->
<div class="col-xs-12 col-sm-8 detail-view-field " type="name" field="name">
<!-- simple hidden start -->
<?php echo $_smarty_tpl->tpl_vars['EXPORT_CHARSET_DISPLAY']->value;?>

<!-- simple hidden finish -->
</div>
<div class="edit-dotted-border"></div>
</div>
</div>
<?php if ($_smarty_tpl->tpl_vars['DISPLAY_EXTERNAL_AUTH']->value) {?>
<div class="row detail-view-row">
<div class="col-xs-12 col-sm-12 detail-view-row-item border-line">
<!-- [hide!!] -->
<!-- DIV inside - colspan != 3 -->
<div class="col-xs-12 col-sm-2 label col-1-label">
<!-- LABEL -->
<?php echo smarty_modifier_strip_semicolon($_smarty_tpl->tpl_vars['EXTERNAL_AUTH_CLASS']->value);?>

</div>
<!-- /DIV inside  -->
<!-- phone (version 1) -->
<div class="col-xs-12 col-sm-10 detail-view-field" type="name" field="name">
<!-- simple hidden start -->
<input id="external_auth_only" name="external_auth_only" type="checkbox" class="checkbox" <?php echo $_smarty_tpl->tpl_vars['EXTERNAL_AUTH_ONLY_CHECKED']->value;?>
 disabled>
<!-- simple hidden finish -->
</div>
<div class="edit-dotted-border"></div>
</div>
</div>
<?php }?>
<div class="row detail-view-row">
<div class="col-xs-12 col-sm-6 detail-view-row-item border-line">
<!-- [hide!!] -->
<!-- DIV inside - colspan != 3 -->
<div class="col-xs-12 col-sm-4 label col-1-label">
<!-- LABEL -->
<?php echo smarty_modifier_strip_semicolon($_smarty_tpl->tpl_vars['MOD']->value['LBL_REMINDER']);?>

</div>
<!-- /DIV inside  -->
<!-- phone (version 1) -->
<div class="col-xs-12 col-sm-8 detail-view-field ">
<!-- simple hidden start -->
<?php $_smarty_tpl->_subTemplateRender("file:modules/Reminders/tpls/remindersDefaults.tpl", $_smarty_tpl->cache_id, $_smarty_tpl->compile_id, 0, $_smarty_tpl->cache_lifetime, array(), 0, false);
?>
<!-- simple hidden finish -->
</div>
</div>
<div class="col-xs-12 col-sm-6 detail-view-row-item">
<!-- [hide!!] -->
<!-- DIV inside - colspan != 3 -->
<div class="col-xs-12 col-sm-4 label col-1-label">
<!-- LABEL -->
<?php echo smarty_modifier_strip_semicolon($_smarty_tpl->tpl_vars['MOD']->value['LBL_USE_REAL_NAMES']);?>

</div>
<!-- /DIV inside  -->
<!-- phone (version 1) -->
<div class="col-xs-12 col-sm-8 detail-view-field " type="name" field="name">
<!-- simple hidden start -->
<input tabindex='3' name='use_real_names' disabled class="checkbox" type="checkbox" <?php echo $_smarty_tpl->tpl_vars['USE_REAL_NAMES']->value;?>
 disabled>
<!-- simple hidden finish -->
</div>
<div class="edit-dotted-border"></div>
</div>
</div>
</div>
<div id='locale_suitep' class="users-locale-settings">
<div class="row detail-view-row">
<h4><?php echo $_smarty_tpl->tpl_vars['MOD']->value['LBL_USER_LOCALE'];?>
</h4>
</div>
<div class="row detail-view-row">
<div class="col-xs-12 col-sm-6 detail-view-row-item border-line">
<!-- [hide!!] -->
<!-- DIV inside - colspan != 3 -->
<div class="col-xs-12 col-sm-4 label col-1-label">
<!-- LABEL -->
<?php echo smarty_modifier_strip_semicolon($_smarty_tpl->tpl_vars['MOD']->value['LBL_DATE_FORMAT']);?>

</div>
<!-- /DIV inside  -->
<!-- phone (version 1) -->
<div class="col-xs-12 col-sm-8 detail-view-field ">
<!-- simple hidden start -->
<?php echo $_smarty_tpl->tpl_vars['DATEFORMAT']->value;?>

<!-- simple hidden finish -->
</div>
<div class="edit-dotted-border"></div>
</div>
<div class="col-xs-12 col-sm-6 detail-view-row-item">
<!-- [hide!!] -->
<!-- DIV inside - colspan != 3 -->
<div class="col-xs-12 col-sm-4 label col-1-label">
<!-- LABEL -->
<?php echo smarty_modifier_strip_semicolon($_smarty_tpl->tpl_vars['MOD']->value['LBL_TIME_FORMAT']);?>

</div>
<!-- /DIV inside  -->
<!-- phone (version 1) -->
<div class="col-xs-12 col-sm-8 detail-view-field " type="name" field="name">
<!-- simple hidden start -->
<?php echo $_smarty_tpl->tpl_vars['TIMEFORMAT']->value;?>

<!-- simple hidden finish -->
</div>
<div class="edit-dotted-border"></div>
</div>
</div>
<div class="row detail-view-row">
<div class="col-xs-12 col-sm-6 detail-view-row-item border-line">
<!-- [hide!!] -->
<!-- DIV inside - colspan != 3 -->
<div class="col-xs-12 col-sm-4 label col-1-label">
<!-- LABEL -->
<?php echo smarty_modifier_strip_semicolon($_smarty_tpl->tpl_vars['MOD']->value['LBL_TIMEZONE']);?>

</div>
<!-- /DIV inside  -->
<!-- phone (version 1) -->
<div class="col-xs-12 col-sm-8 detail-view-field ">
<!-- simple hidden start -->
<?php echo $_smarty_tpl->tpl_vars['TIMEZONE']->value;?>

<!-- simple hidden finish -->
</div>
<div class="edit-dotted-border"></div>
</div>
<div class="col-xs-12 col-sm-6 detail-view-row-item">
<!-- [hide!!] -->
<!-- DIV inside - colspan != 3 -->
<div class="col-xs-12 col-sm-4 label col-1-label">
<!-- LABEL -->
<?php echo smarty_modifier_strip_semicolon($_smarty_tpl->tpl_vars['MOD']->value['LBL_CURRENCY']);?>

</div>
<!-- /DIV inside  -->
<!-- phone (version 1) -->
<div class="col-xs-12 col-sm-8 detail-view-field " type="name" field="name">
<!-- simple hidden start -->
<?php echo $_smarty_tpl->tpl_vars['CURRENCY_DISPLAY']->value;?>

<!-- simple hidden finish -->
</div>
<div class="edit-dotted-border"></div>
</div>
</div>
<div class="row detail-view-row">
<div class="col-xs-12 col-sm-6 detail-view-row-item border-line">
<!-- [hide!!] -->
<!-- DIV inside - colspan != 3 -->
<div class="col-xs-12 col-sm-4 label col-1-label">
<!-- LABEL -->
<?php echo smarty_modifier_strip_semicolon($_smarty_tpl->tpl_vars['MOD']->value['LBL_CURRENCY_SIG_DIGITS']);?>

</div>
<!-- /DIV inside  -->
<!-- phone (version 1) -->
<div class="col-xs-12 col-sm-8 detail-view-field ">
<!-- simple hidden start -->
<?php echo $_smarty_tpl->tpl_vars['CURRENCY_SIG_DIGITS']->value;?>

<!-- simple hidden finish -->
</div>
<div class="edit-dotted-border"></div>
</div>
</div>
<div class="row detail-view-row">
<div class="col-xs-12 col-sm-6 detail-view-row-item border-line">
<!-- [hide!!] -->
<!-- DIV inside - colspan != 3 -->
<div class="col-xs-12 col-sm-4 label col-1-label">
<!-- LABEL -->
<?php echo smarty_modifier_strip_semicolon($_smarty_tpl->tpl_vars['MOD']->value['LBL_NUMBER_GROUPING_SEP']);?>

</div>
<!-- /DIV inside  -->
<!-- phone (version 1) -->
<div class="col-xs-12 col-sm-8 detail-view-field ">
<!-- simple hidden start -->
<?php echo $_smarty_tpl->tpl_vars['NUM_GRP_SEP']->value;?>

<!-- simple hidden finish -->
</div>
<div class="edit-dotted-border"></div>
</div>
<div class="col-xs-12 col-sm-6 detail-view-row-item">
<!-- [hide!!] -->
<!-- DIV inside - colspan != 3 -->
<div class="col-xs-12 col-sm-4 label col-1-label">
<!-- LABEL -->
<?php echo smarty_modifier_strip_semicolon($_smarty_tpl->tpl_vars['MOD']->value['LBL_DECIMAL_SEP']);?>

</div>
<!-- /DIV inside  -->
<!-- phone (version 1) -->
<div class="col-xs-12 col-sm-8 detail-view-field " type="name" field="name">
<!-- simple hidden start -->
<?php echo $_smarty_tpl->tpl_vars['DEC_SEP']->value;?>

<!-- simple hidden finish -->
</div>
<div class="edit-dotted-border"></div>
</div>
</div>
<div class="row detail-view-row">
<div class="col-xs-12 col-sm-12 detail-view-row-item border-line" style="width: 50%;">
<!-- [hide!!] -->
<!-- DIV inside - colspan != 3 -->
<div class="col-xs-12 col-sm-2 label col-1-label">
<!-- LABEL -->
<?php echo smarty_modifier_strip_semicolon($_smarty_tpl->tpl_vars['MOD']->value['LBL_LOCALE_DEFAULT_NAME_FORMAT']);?>

</div>
<!-- /DIV inside  -->
<!-- phone (version 1) -->
<div class="col-xs-12 col-sm-10 detail-view-field ">
<!-- simple hidden start -->
<?php echo $_smarty_tpl->tpl_vars['NAME_FORMAT']->value;?>

<!-- simple hidden finish -->
</div>
<div class="edit-dotted-border"></div>
</div>
</div>
</div>
<div id='calendar_options_suitep'>
<div class="row detail-view-row">
<h4><?php echo $_smarty_tpl->tpl_vars['MOD']->value['LBL_CALENDAR_OPTIONS'];?>
</h4>
</div>
<div class="row detail-view-row">
<div class="col-xs-12 col-sm-12 detail-view-row-item">
<!-- [hide!!] -->
<!-- DIV inside - colspan != 3 -->
<div class="col-xs-12 col-sm-2 label col-1-label">
<!-- LABEL -->
<?php echo smarty_modifier_strip_semicolon($_smarty_tpl->tpl_vars['MOD']->value['LBL_PUBLISH_KEY']);?>

</div>
<!-- /DIV inside  -->
<!-- phone (version 1) -->
<div class="col-xs-12 col-sm-10 detail-view-field ">
<!-- simple hidden start -->
<?php echo $_smarty_tpl->tpl_vars['CALENDAR_PUBLISH_KEY']->value;?>

<!-- simple hidden finish -->
</div>
</div>
<div class="edit-dotted-border"></div>
</div>
<div class="row detail-view-row">
<div class="col-xs-12 col-sm-12 detail-view-row-item">
<!-- [hide!!] -->
<!-- DIV inside - colspan != 3 -->
<div class="col-xs-12 col-sm-2 label col-1-label">
<!-- LABEL -->
<?php echo smarty_modifier_strip_semicolon($_smarty_tpl->tpl_vars['MOD']->value['LBL_YOUR_PUBLISH_URL']);?>

</div>
<!-- /DIV inside  -->
<!-- phone (version 1) -->
<div class="col-xs-12 col-sm-10 detail-view-field wrap-text" type="name" field="name">
<!-- simple hidden start -->
<?php if ($_smarty_tpl->tpl_vars['CALENDAR_PUBLISH_KEY']->value) {
echo $_smarty_tpl->tpl_vars['CALENDAR_PUBLISH_URL']->value;
} else {
echo $_smarty_tpl->tpl_vars['MOD']->value['LBL_NO_KEY'];
}?>
<!-- simple hidden finish -->
</div>
<div class="edit-dotted-border"></div>
</div>
</div>
<div class="row detail-view-row">
<div class="col-xs-12 col-sm-12 detail-view-row-item">
<!-- [hide!!] -->
<!-- DIV inside - colspan != 3 -->
<div class="col-xs-12 col-sm-2 label col-1-label">
<!-- LABEL -->
<?php echo smarty_modifier_strip_semicolon($_smarty_tpl->tpl_vars['MOD']->value['LBL_SEARCH_URL']);?>

</div>
<!-- /DIV inside  -->
<!-- phone (version 1) -->
<div class="col-xs-12 col-sm-10 detail-view-field wrap-text">
<!-- simple hidden start -->
<?php if ($_smarty_tpl->tpl_vars['CALENDAR_PUBLISH_KEY']->value) {
echo $_smarty_tpl->tpl_vars['CALENDAR_SEARCH_URL']->value;
} else {
echo $_smarty_tpl->tpl_vars['MOD']->value['LBL_NO_KEY'];
}?>
<!-- simple hidden finish -->
</div>
<div class="edit-dotted-border"></div>
</div>
</div>
<div class="row detail-view-row">
<div class="col-xs-12 col-sm-12 detail-view-row-item">
<!-- [hide!!] -->
<!-- DIV inside - colspan != 3 -->
<div class="col-xs-12 col-sm-2 label col-1-label">
<!-- LABEL -->
<?php echo smarty_modifier_strip_semicolon($_smarty_tpl->tpl_vars['MOD']->value['LBL_ICAL_PUB_URL']);?>

</div>
<!-- /DIV inside  -->
<!-- phone (version 1) -->
<div class="col-xs-12 col-sm-10 detail-view-field wrap-text" type="name" field="name">
<!-- simple hidden start -->
<?php if ($_smarty_tpl->tpl_vars['CALENDAR_PUBLISH_KEY']->value) {
echo $_smarty_tpl->tpl_vars['CALENDAR_ICAL_URL']->value;
} else {
echo $_smarty_tpl->tpl_vars['MOD']->value['LBL_NO_KEY'];
}?>
<!-- simple hidden finish -->
</div>
<div class="edit-dotted-border"></div>
</div>
</div>
<div class="row detail-view-row">
<div class="col-xs-12 col-sm-12 detail-view-row-item">
<!-- [hide!!] -->
<!-- DIV inside - colspan != 3 -->
<div class="col-xs-12 col-sm-2 label col-1-label">
<!-- LABEL -->
<?php echo smarty_modifier_strip_semicolon($_smarty_tpl->tpl_vars['MOD']->value['LBL_FDOW']);?>

</div>
<!-- /DIV inside  -->
<!-- phone (version 1) -->
<div class="col-xs-12 col-sm-10 detail-view-field " type="name" field="name">
<!-- simple hidden start -->
<?php echo $_smarty_tpl->tpl_vars['FDOWDISPLAY']->value;?>

<!-- simple hidden finish -->
</div>
<div class="edit-dotted-border"></div>
</div>
</div>
</div>
<div id='google_options_suitep' style="display:<?php echo $_smarty_tpl->tpl_vars['HIDE_IF_GAUTH_UNCONFIGURED']->value;?>
"'>
<div class="row detail-view-row">
<h4><?php echo $_smarty_tpl->tpl_vars['MOD']->value['LBL_GOOGLE_API_SETTINGS'];?>
</h4>
</div>
<div class="row detail-view-row">
<div class="col-xs-12 col-sm-12 detail-view-row-item">
<!-- [hide!!] -->
<!-- DIV inside - colspan != 3 -->
<div class="col-xs-12 col-sm-2 label col-1-label">
<!-- LABEL -->
<?php echo $_smarty_tpl->tpl_vars['MOD']->value['LBL_GOOGLE_API_TOKEN'];?>

</div>
<!-- /DIV inside  -->
<!-- phone (version 1) -->
<div class="col-xs-12 col-sm-10 detail-view-field ">
<!-- simple hidden start -->
Current API Token is: <span style="color:<?php echo $_smarty_tpl->tpl_vars['GOOGLE_API_TOKEN_COLOR']->value;?>
"><?php echo $_smarty_tpl->tpl_vars['GOOGLE_API_TOKEN']->value;?>
</span>
<!-- simple hidden finish -->
</div>
<div class="edit-dotted-border"></div>
</div>
</div>
<div class="row detail-view-row">
<div class="col-xs-12 col-sm-12 detail-view-row-item">
<!-- [hide!!] -->
<!-- DIV inside - colspan != 3 -->
<div class="col-xs-12 col-sm-2 label col-1-label">
<!-- LABEL -->
<?php echo $_smarty_tpl->tpl_vars['MOD']->value['LBL_GSYNC_CAL'];?>

</div>
<!-- /DIV inside  -->
<!-- phone (version 1) -->
<div class="col-xs-12 col-sm-10 detail-view-field ">
<!-- simple hidden start -->
<input class="checkbox" type="checkbox" disabled <?php echo $_smarty_tpl->tpl_vars['GSYNC_CAL']->value;?>
>
<!-- simple hidden finish -->
</div>
<div class="edit-dotted-border"></div>
</div>
</div>
</div>
<div id="layout_suitep" class="user-layout-settings">
<div class="row detail-view-row">
<h4><?php echo $_smarty_tpl->tpl_vars['MOD']->value['LBL_LAYOUT_OPTIONS'];?>
</h4>
</div>
<div class="row detail-view-row">
<div class="col-xs-12 col-sm-6 detail-view-row-item border-line">
<!-- [hide!!] -->
<!-- DIV inside - colspan != 3 -->
<div class="col-xs-12 col-sm-4 label col-1-label">
<!-- LABEL -->
<?php echo $_smarty_tpl->tpl_vars['MOD']->value['LBL_USE_GROUP_TABS'];?>

</div>
<!-- /DIV inside  -->
<!-- phone (version 1) -->
<div class="col-xs-12 col-sm-8 detail-view-field ">
<!-- simple hidden start -->
<input name="use_group_tabs" type="hidden" value="m"><input id="use_group_tabs" type="checkbox" name="use_group_tabs" <?php echo $_smarty_tpl->tpl_vars['USE_GROUP_TABS']->value;?>
 tabindex='12' value="gm" disabled>
<!-- simple hidden finish -->
</div>
<div class="edit-dotted-border"></div>
</div>
<div class="col-xs-12 col-sm-6 detail-view-row-item">
<!-- [hide!!] -->
<!-- DIV inside - colspan != 3 -->
<div class="col-xs-12 col-sm-4 label col-1-label">
<!-- LABEL -->
<?php echo smarty_modifier_strip_semicolon($_smarty_tpl->tpl_vars['MOD']->value['LBL_MAILMERGE']);?>

</div>
<!-- /DIV inside  -->
<!-- phone (version 1) -->
<div class="col-xs-12 col-sm-8 detail-view-field " type="name" field="name">
<!-- simple hidden start -->
<input tabindex='3' name='mailmerge_on' disabled class="checkbox" type="checkbox" <?php echo $_smarty_tpl->tpl_vars['MAILMERGE_ON']->value;?>
 disabled>
<!-- simple hidden finish -->
</div>
<div class="edit-dotted-border"></div>
</div>
</div>
</div>
</div>
<?php if ($_smarty_tpl->tpl_vars['SHOW_ROLES']->value) {?>

<div class="tab-pane-NOBOOTSTRAPTOGGLER fade" id='tab-content-3'>
<div class="row detail-view-row">
<?php echo $_smarty_tpl->tpl_vars['ROLE_HTML']->value;?>

</div>
</div>
<?php }?>
</div>

<div class="panel-content">
<div>&nbsp;</div>






<div class="panel panel-default">
<div class="panel-heading panel-heading-collapse">
<a class="collapsed" role="button" data-toggle="collapse" href="#top-panel-0" aria-expanded="false">
<div class="col-xs-10 col-sm-11 col-md-11">
<?php echo smarty_function_sugar_translate(array('label'=>'LBL_EMPLOYEE_INFORMATION','module'=>'Users'),$_smarty_tpl);?>

</div>
</a>
</div>
<div class="panel-body panel-collapse collapse" id="top-panel-0">
<div class="tab-content">
<!-- TAB CONTENT -->





<div class="row detail-view-row">



<div class="col-xs-12 col-sm-6 detail-view-row-item detail-view-bordered" data-field="employee_status">


<div class="col-xs-12 col-sm-4 label col-1-label">


<?php $_smarty_tpl->smarty->ext->_capture->open($_smarty_tpl, "label", "label", null);
echo smarty_function_sugar_translate(array('label'=>'LBL_EMPLOYEE_STATUS','module'=>'Users'),$_smarty_tpl);
$_smarty_tpl->smarty->ext->_capture->close($_smarty_tpl);
echo smarty_modifier_strip_semicolon($_smarty_tpl->tpl_vars['label']->value);?>
:
</div>


<div class="col-xs-12 col-sm-8 detail-view-field d-flex inlineEdit" type="varchar" field="employee_status" >

<?php if (!$_smarty_tpl->tpl_vars['fields']->value['employee_status']['hidden']) {
echo smarty_function_counter(array('name'=>"panelFieldCount",'print'=>false),$_smarty_tpl);?>

<span id='employee_status_span'>
<?php echo $_smarty_tpl->tpl_vars['fields']->value['employee_status']['value'];?>

</span>
<?php }?>

<div class="inlineEditIcon col-xs-hidden">
<?php echo smarty_function_sugar_getimage(array('name'=>"pencil"),$_smarty_tpl);?>

</div>
</div>
<div class="dotted-border"></div>


</div>




<div class="col-xs-12 col-sm-6 detail-view-row-item detail-view-bordered" data-field="show_on_employees">


<div class="col-xs-12 col-sm-4 label col-2-label">


<?php $_smarty_tpl->smarty->ext->_capture->open($_smarty_tpl, "label", "label", null);
echo smarty_function_sugar_translate(array('label'=>'LBL_SHOW_ON_EMPLOYEES','module'=>'Users'),$_smarty_tpl);
$_smarty_tpl->smarty->ext->_capture->close($_smarty_tpl);
echo smarty_modifier_strip_semicolon($_smarty_tpl->tpl_vars['label']->value);?>
:
</div>


<div class="col-xs-12 col-sm-8 detail-view-field d-flex inlineEdit" type="bool" field="show_on_employees" >

<?php if (!$_smarty_tpl->tpl_vars['fields']->value['show_on_employees']['hidden']) {
echo smarty_function_counter(array('name'=>"panelFieldCount",'print'=>false),$_smarty_tpl);?>


<?php if (strval($_smarty_tpl->tpl_vars['fields']->value['show_on_employees']['value']) == "1" || strval($_smarty_tpl->tpl_vars['fields']->value['show_on_employees']['value']) == "yes" || strval($_smarty_tpl->tpl_vars['fields']->value['show_on_employees']['value']) == "on") {?> 
<?php $_smarty_tpl->_assignInScope('checked', 'checked="checked"');
} else {
$_smarty_tpl->_assignInScope('checked', '');
}?>
<input type="checkbox" class="checkbox" name="<?php echo $_smarty_tpl->tpl_vars['fields']->value['show_on_employees']['name'];?>
" id="<?php echo $_smarty_tpl->tpl_vars['fields']->value['show_on_employees']['name'];?>
" value="$fields.show_on_employees.value" disabled="true" <?php echo $_smarty_tpl->tpl_vars['checked']->value;?>
>
<?php }?>

<div class="inlineEditIcon col-xs-hidden">
<?php echo smarty_function_sugar_getimage(array('name'=>"pencil"),$_smarty_tpl);?>

</div>
</div>
<div class="dotted-border"></div>


</div>

</div>


<div class="row detail-view-row">



<div class="col-xs-12 col-sm-6 detail-view-row-item detail-view-bordered" data-field="title">


<div class="col-xs-12 col-sm-4 label col-1-label">


<?php $_smarty_tpl->smarty->ext->_capture->open($_smarty_tpl, "label", "label", null);
echo smarty_function_sugar_translate(array('label'=>'LBL_TITLE','module'=>'Users'),$_smarty_tpl);
$_smarty_tpl->smarty->ext->_capture->close($_smarty_tpl);
echo smarty_modifier_strip_semicolon($_smarty_tpl->tpl_vars['label']->value);?>
:
</div>


<div class="col-xs-12 col-sm-8 detail-view-field d-flex inlineEdit" type="varchar" field="title" >

<?php if (!$_smarty_tpl->tpl_vars['fields']->value['title']['hidden']) {
echo smarty_function_counter(array('name'=>"panelFieldCount",'print'=>false),$_smarty_tpl);?>


<?php if (strlen($_smarty_tpl->tpl_vars['fields']->value['title']['value']) <= 0) {
$_smarty_tpl->_assignInScope('value', $_smarty_tpl->tpl_vars['fields']->value['title']['default_value']);
} else {
$_smarty_tpl->_assignInScope('value', $_smarty_tpl->tpl_vars['fields']->value['title']['value']);
}?> 
<span class="sugar_field" id="<?php echo $_smarty_tpl->tpl_vars['fields']->value['title']['name'];?>
"><?php echo $_smarty_tpl->tpl_vars['fields']->value['title']['value'];?>
</span>
<?php }?>

<div class="inlineEditIcon col-xs-hidden">
<?php echo smarty_function_sugar_getimage(array('name'=>"pencil"),$_smarty_tpl);?>

</div>
</div>
<div class="dotted-border"></div>


</div>




<div class="col-xs-12 col-sm-6 detail-view-row-item detail-view-bordered" data-field="phone_work">


<div class="col-xs-12 col-sm-4 label col-2-label">


<?php $_smarty_tpl->smarty->ext->_capture->open($_smarty_tpl, "label", "label", null);
echo smarty_function_sugar_translate(array('label'=>'LBL_WORK_PHONE','module'=>'Users'),$_smarty_tpl);
$_smarty_tpl->smarty->ext->_capture->close($_smarty_tpl);
echo smarty_modifier_strip_semicolon($_smarty_tpl->tpl_vars['label']->value);?>
:
</div>


<div class="col-xs-12 col-sm-8 detail-view-field d-flex inlineEdit phone" type="phone" field="phone_work" >

<?php if (!$_smarty_tpl->tpl_vars['fields']->value['phone_work']['hidden']) {
echo smarty_function_counter(array('name'=>"panelFieldCount",'print'=>false),$_smarty_tpl);?>


<?php if (!empty($_smarty_tpl->tpl_vars['fields']->value['phone_work']['value'])) {
$_smarty_tpl->_assignInScope('phone_value', $_smarty_tpl->tpl_vars['fields']->value['phone_work']['value']);
echo smarty_function_sugar_phone(array('value'=>$_smarty_tpl->tpl_vars['phone_value']->value,'usa_format'=>"0"),$_smarty_tpl);?>

<?php }
}?>

<div class="inlineEditIcon col-xs-hidden">
<?php echo smarty_function_sugar_getimage(array('name'=>"pencil"),$_smarty_tpl);?>

</div>
</div>
<div class="dotted-border"></div>


</div>

</div>


<div class="row detail-view-row">



<div class="col-xs-12 col-sm-6 detail-view-row-item detail-view-bordered" data-field="department">


<div class="col-xs-12 col-sm-4 label col-1-label">


<?php $_smarty_tpl->smarty->ext->_capture->open($_smarty_tpl, "label", "label", null);
echo smarty_function_sugar_translate(array('label'=>'LBL_DEPARTMENT','module'=>'Users'),$_smarty_tpl);
$_smarty_tpl->smarty->ext->_capture->close($_smarty_tpl);
echo smarty_modifier_strip_semicolon($_smarty_tpl->tpl_vars['label']->value);?>
:
</div>


<div class="col-xs-12 col-sm-8 detail-view-field d-flex inlineEdit" type="varchar" field="department" >

<?php if (!$_smarty_tpl->tpl_vars['fields']->value['department']['hidden']) {
echo smarty_function_counter(array('name'=>"panelFieldCount",'print'=>false),$_smarty_tpl);?>


<?php if (strlen($_smarty_tpl->tpl_vars['fields']->value['department']['value']) <= 0) {
$_smarty_tpl->_assignInScope('value', $_smarty_tpl->tpl_vars['fields']->value['department']['default_value']);
} else {
$_smarty_tpl->_assignInScope('value', $_smarty_tpl->tpl_vars['fields']->value['department']['value']);
}?> 
<span class="sugar_field" id="<?php echo $_smarty_tpl->tpl_vars['fields']->value['department']['name'];?>
"><?php echo $_smarty_tpl->tpl_vars['fields']->value['department']['value'];?>
</span>
<?php }?>

<div class="inlineEditIcon col-xs-hidden">
<?php echo smarty_function_sugar_getimage(array('name'=>"pencil"),$_smarty_tpl);?>

</div>
</div>
<div class="dotted-border"></div>


</div>




<div class="col-xs-12 col-sm-6 detail-view-row-item detail-view-bordered" data-field="phone_mobile">


<div class="col-xs-12 col-sm-4 label col-2-label">


<?php $_smarty_tpl->smarty->ext->_capture->open($_smarty_tpl, "label", "label", null);
echo smarty_function_sugar_translate(array('label'=>'LBL_MOBILE_PHONE','module'=>'Users'),$_smarty_tpl);
$_smarty_tpl->smarty->ext->_capture->close($_smarty_tpl);
echo smarty_modifier_strip_semicolon($_smarty_tpl->tpl_vars['label']->value);?>
:
</div>


<div class="col-xs-12 col-sm-8 detail-view-field d-flex inlineEdit phone" type="phone" field="phone_mobile" >

<?php if (!$_smarty_tpl->tpl_vars['fields']->value['phone_mobile']['hidden']) {
echo smarty_function_counter(array('name'=>"panelFieldCount",'print'=>false),$_smarty_tpl);?>


<?php if (!empty($_smarty_tpl->tpl_vars['fields']->value['phone_mobile']['value'])) {
$_smarty_tpl->_assignInScope('phone_value', $_smarty_tpl->tpl_vars['fields']->value['phone_mobile']['value']);
echo smarty_function_sugar_phone(array('value'=>$_smarty_tpl->tpl_vars['phone_value']->value,'usa_format'=>"0"),$_smarty_tpl);?>

<?php }
}?>

<div class="inlineEditIcon col-xs-hidden">
<?php echo smarty_function_sugar_getimage(array('name'=>"pencil"),$_smarty_tpl);?>

</div>
</div>
<div class="dotted-border"></div>


</div>

</div>


<div class="row detail-view-row">



<div class="col-xs-12 col-sm-6 detail-view-row-item detail-view-bordered" data-field="reports_to_name">


<div class="col-xs-12 col-sm-4 label col-1-label">


<?php $_smarty_tpl->smarty->ext->_capture->open($_smarty_tpl, "label", "label", null);
echo smarty_function_sugar_translate(array('label'=>'LBL_REPORTS_TO_NAME','module'=>'Users'),$_smarty_tpl);
$_smarty_tpl->smarty->ext->_capture->close($_smarty_tpl);
echo smarty_modifier_strip_semicolon($_smarty_tpl->tpl_vars['label']->value);?>
:
</div>


<div class="col-xs-12 col-sm-8 detail-view-field d-flex inlineEdit" type="relate" field="reports_to_name" >

<?php if (!$_smarty_tpl->tpl_vars['fields']->value['reports_to_name']['hidden']) {
echo smarty_function_counter(array('name'=>"panelFieldCount",'print'=>false),$_smarty_tpl);?>


<span id="reports_to_id" class="sugar_field" data-id-value="<?php echo $_smarty_tpl->tpl_vars['fields']->value['reports_to_id']['value'];?>
"><?php echo $_smarty_tpl->tpl_vars['fields']->value['reports_to_name']['value'];?>
</span>
<?php }?>

<div class="inlineEditIcon col-xs-hidden">
<?php echo smarty_function_sugar_getimage(array('name'=>"pencil"),$_smarty_tpl);?>

</div>
</div>
<div class="dotted-border"></div>


</div>




<div class="col-xs-12 col-sm-6 detail-view-row-item detail-view-bordered" data-field="phone_other">


<div class="col-xs-12 col-sm-4 label col-2-label">


<?php $_smarty_tpl->smarty->ext->_capture->open($_smarty_tpl, "label", "label", null);
echo smarty_function_sugar_translate(array('label'=>'LBL_OTHER_PHONE','module'=>'Users'),$_smarty_tpl);
$_smarty_tpl->smarty->ext->_capture->close($_smarty_tpl);
echo smarty_modifier_strip_semicolon($_smarty_tpl->tpl_vars['label']->value);?>
:
</div>


<div class="col-xs-12 col-sm-8 detail-view-field d-flex inlineEdit phone" type="phone" field="phone_other" >

<?php if (!$_smarty_tpl->tpl_vars['fields']->value['phone_other']['hidden']) {
echo smarty_function_counter(array('name'=>"panelFieldCount",'print'=>false),$_smarty_tpl);?>


<?php if (!empty($_smarty_tpl->tpl_vars['fields']->value['phone_other']['value'])) {
$_smarty_tpl->_assignInScope('phone_value', $_smarty_tpl->tpl_vars['fields']->value['phone_other']['value']);
echo smarty_function_sugar_phone(array('value'=>$_smarty_tpl->tpl_vars['phone_value']->value,'usa_format'=>"0"),$_smarty_tpl);?>

<?php }
}?>

<div class="inlineEditIcon col-xs-hidden">
<?php echo smarty_function_sugar_getimage(array('name'=>"pencil"),$_smarty_tpl);?>

</div>
</div>
<div class="dotted-border"></div>


</div>

</div>


<div class="row detail-view-row">



<div class="col-xs-12 col-sm-6 detail-view-row-item detail-view-bordered" data-field="">
</div>




<div class="col-xs-12 col-sm-6 detail-view-row-item detail-view-bordered" data-field="phone_fax">


<div class="col-xs-12 col-sm-4 label col-2-label">


<?php $_smarty_tpl->smarty->ext->_capture->open($_smarty_tpl, "label", "label", null);
echo smarty_function_sugar_translate(array('label'=>'LBL_FAX_PHONE','module'=>'Users'),$_smarty_tpl);
$_smarty_tpl->smarty->ext->_capture->close($_smarty_tpl);
echo smarty_modifier_strip_semicolon($_smarty_tpl->tpl_vars['label']->value);?>
:
</div>


<div class="col-xs-12 col-sm-8 detail-view-field d-flex inlineEdit phone" type="phone" field="phone_fax" >

<?php if (!$_smarty_tpl->tpl_vars['fields']->value['phone_fax']['hidden']) {
echo smarty_function_counter(array('name'=>"panelFieldCount",'print'=>false),$_smarty_tpl);?>


<?php if (!empty($_smarty_tpl->tpl_vars['fields']->value['phone_fax']['value'])) {
$_smarty_tpl->_assignInScope('phone_value', $_smarty_tpl->tpl_vars['fields']->value['phone_fax']['value']);
echo smarty_function_sugar_phone(array('value'=>$_smarty_tpl->tpl_vars['phone_value']->value,'usa_format'=>"0"),$_smarty_tpl);?>

<?php }
}?>

<div class="inlineEditIcon col-xs-hidden">
<?php echo smarty_function_sugar_getimage(array('name'=>"pencil"),$_smarty_tpl);?>

</div>
</div>
<div class="dotted-border"></div>


</div>

</div>


<div class="row detail-view-row">



<div class="col-xs-12 col-sm-6 detail-view-row-item detail-view-bordered" data-field="">
</div>




<div class="col-xs-12 col-sm-6 detail-view-row-item detail-view-bordered" data-field="phone_home">


<div class="col-xs-12 col-sm-4 label col-2-label">


<?php $_smarty_tpl->smarty->ext->_capture->open($_smarty_tpl, "label", "label", null);
echo smarty_function_sugar_translate(array('label'=>'LBL_HOME_PHONE','module'=>'Users'),$_smarty_tpl);
$_smarty_tpl->smarty->ext->_capture->close($_smarty_tpl);
echo smarty_modifier_strip_semicolon($_smarty_tpl->tpl_vars['label']->value);?>
:
</div>


<div class="col-xs-12 col-sm-8 detail-view-field d-flex inlineEdit phone" type="phone" field="phone_home" >

<?php if (!$_smarty_tpl->tpl_vars['fields']->value['phone_home']['hidden']) {
echo smarty_function_counter(array('name'=>"panelFieldCount",'print'=>false),$_smarty_tpl);?>


<?php if (!empty($_smarty_tpl->tpl_vars['fields']->value['phone_home']['value'])) {
$_smarty_tpl->_assignInScope('phone_value', $_smarty_tpl->tpl_vars['fields']->value['phone_home']['value']);
echo smarty_function_sugar_phone(array('value'=>$_smarty_tpl->tpl_vars['phone_value']->value,'usa_format'=>"0"),$_smarty_tpl);?>

<?php }
}?>

<div class="inlineEditIcon col-xs-hidden">
<?php echo smarty_function_sugar_getimage(array('name'=>"pencil"),$_smarty_tpl);?>

</div>
</div>
<div class="dotted-border"></div>


</div>

</div>


<div class="row detail-view-row">



<div class="col-xs-12 col-sm-6 detail-view-row-item detail-view-bordered" data-field="messenger_type">


<div class="col-xs-12 col-sm-4 label col-1-label">


<?php $_smarty_tpl->smarty->ext->_capture->open($_smarty_tpl, "label", "label", null);
echo smarty_function_sugar_translate(array('label'=>'LBL_MESSENGER_TYPE','module'=>'Users'),$_smarty_tpl);
$_smarty_tpl->smarty->ext->_capture->close($_smarty_tpl);
echo smarty_modifier_strip_semicolon($_smarty_tpl->tpl_vars['label']->value);?>
:
</div>


<div class="col-xs-12 col-sm-8 detail-view-field d-flex inlineEdit" type="enum" field="messenger_type" >

<?php if (!$_smarty_tpl->tpl_vars['fields']->value['messenger_type']['hidden']) {
echo smarty_function_counter(array('name'=>"panelFieldCount",'print'=>false),$_smarty_tpl);?>



<?php if (is_string($_smarty_tpl->tpl_vars['fields']->value['messenger_type']['options'])) {?>
<input type="hidden" class="sugar_field" id="<?php echo $_smarty_tpl->tpl_vars['fields']->value['messenger_type']['name'];?>
" value="<?php echo $_smarty_tpl->tpl_vars['fields']->value['messenger_type']['options'];?>
">
<?php echo $_smarty_tpl->tpl_vars['fields']->value['messenger_type']['options'];?>

<?php } else { ?>
<input type="hidden" class="sugar_field" id="<?php echo $_smarty_tpl->tpl_vars['fields']->value['messenger_type']['name'];?>
" value="<?php echo $_smarty_tpl->tpl_vars['fields']->value['messenger_type']['value'];?>
">
<?php echo $_smarty_tpl->tpl_vars['fields']->value['messenger_type']['options'][$_smarty_tpl->tpl_vars['fields']->value['messenger_type']['value']];?>

<?php }
}?>

<div class="inlineEditIcon col-xs-hidden">
<?php echo smarty_function_sugar_getimage(array('name'=>"pencil"),$_smarty_tpl);?>

</div>
</div>
<div class="dotted-border"></div>


</div>




<div class="col-xs-12 col-sm-6 detail-view-row-item detail-view-bordered" data-field="messenger_id">


<div class="col-xs-12 col-sm-4 label col-2-label">


<?php $_smarty_tpl->smarty->ext->_capture->open($_smarty_tpl, "label", "label", null);
echo smarty_function_sugar_translate(array('label'=>'LBL_MESSENGER_ID','module'=>'Users'),$_smarty_tpl);
$_smarty_tpl->smarty->ext->_capture->close($_smarty_tpl);
echo smarty_modifier_strip_semicolon($_smarty_tpl->tpl_vars['label']->value);?>
:
</div>


<div class="col-xs-12 col-sm-8 detail-view-field d-flex inlineEdit" type="varchar" field="messenger_id" >

<?php if (!$_smarty_tpl->tpl_vars['fields']->value['messenger_id']['hidden']) {
echo smarty_function_counter(array('name'=>"panelFieldCount",'print'=>false),$_smarty_tpl);?>


<?php if (strlen($_smarty_tpl->tpl_vars['fields']->value['messenger_id']['value']) <= 0) {
$_smarty_tpl->_assignInScope('value', $_smarty_tpl->tpl_vars['fields']->value['messenger_id']['default_value']);
} else {
$_smarty_tpl->_assignInScope('value', $_smarty_tpl->tpl_vars['fields']->value['messenger_id']['value']);
}?> 
<span class="sugar_field" id="<?php echo $_smarty_tpl->tpl_vars['fields']->value['messenger_id']['name'];?>
"><?php echo $_smarty_tpl->tpl_vars['fields']->value['messenger_id']['value'];?>
</span>
<?php }?>

<div class="inlineEditIcon col-xs-hidden">
<?php echo smarty_function_sugar_getimage(array('name'=>"pencil"),$_smarty_tpl);?>

</div>
</div>
<div class="dotted-border"></div>


</div>

</div>


<div class="row detail-view-row">



<div class="col-xs-12 col-sm-6 detail-view-row-item detail-view-bordered" data-field="address_street">


<div class="col-xs-12 col-sm-4 label col-1-label">


<?php $_smarty_tpl->smarty->ext->_capture->open($_smarty_tpl, "label", "label", null);
echo smarty_function_sugar_translate(array('label'=>'LBL_ADDRESS_STREET','module'=>'Users'),$_smarty_tpl);
$_smarty_tpl->smarty->ext->_capture->close($_smarty_tpl);
echo smarty_modifier_strip_semicolon($_smarty_tpl->tpl_vars['label']->value);?>
:
</div>


<div class="col-xs-12 col-sm-8 detail-view-field d-flex inlineEdit" type="varchar" field="address_street" >

<?php if (!$_smarty_tpl->tpl_vars['fields']->value['address_street']['hidden']) {
echo smarty_function_counter(array('name'=>"panelFieldCount",'print'=>false),$_smarty_tpl);?>


<?php if (strlen($_smarty_tpl->tpl_vars['fields']->value['address_street']['value']) <= 0) {
$_smarty_tpl->_assignInScope('value', $_smarty_tpl->tpl_vars['fields']->value['address_street']['default_value']);
} else {
$_smarty_tpl->_assignInScope('value', $_smarty_tpl->tpl_vars['fields']->value['address_street']['value']);
}?> 
<span class="sugar_field" id="<?php echo $_smarty_tpl->tpl_vars['fields']->value['address_street']['name'];?>
"><?php echo $_smarty_tpl->tpl_vars['fields']->value['address_street']['value'];?>
</span>
<?php }?>

<div class="inlineEditIcon col-xs-hidden">
<?php echo smarty_function_sugar_getimage(array('name'=>"pencil"),$_smarty_tpl);?>

</div>
</div>
<div class="dotted-border"></div>


</div>




<div class="col-xs-12 col-sm-6 detail-view-row-item detail-view-bordered" data-field="address_city">


<div class="col-xs-12 col-sm-4 label col-2-label">


<?php $_smarty_tpl->smarty->ext->_capture->open($_smarty_tpl, "label", "label", null);
echo smarty_function_sugar_translate(array('label'=>'LBL_ADDRESS_CITY','module'=>'Users'),$_smarty_tpl);
$_smarty_tpl->smarty->ext->_capture->close($_smarty_tpl);
echo smarty_modifier_strip_semicolon($_smarty_tpl->tpl_vars['label']->value);?>
:
</div>


<div class="col-xs-12 col-sm-8 detail-view-field d-flex inlineEdit" type="varchar" field="address_city" >

<?php if (!$_smarty_tpl->tpl_vars['fields']->value['address_city']['hidden']) {
echo smarty_function_counter(array('name'=>"panelFieldCount",'print'=>false),$_smarty_tpl);?>


<?php if (strlen($_smarty_tpl->tpl_vars['fields']->value['address_city']['value']) <= 0) {
$_smarty_tpl->_assignInScope('value', $_smarty_tpl->tpl_vars['fields']->value['address_city']['default_value']);
} else {
$_smarty_tpl->_assignInScope('value', $_smarty_tpl->tpl_vars['fields']->value['address_city']['value']);
}?> 
<span class="sugar_field" id="<?php echo $_smarty_tpl->tpl_vars['fields']->value['address_city']['name'];?>
"><?php echo $_smarty_tpl->tpl_vars['fields']->value['address_city']['value'];?>
</span>
<?php }?>

<div class="inlineEditIcon col-xs-hidden">
<?php echo smarty_function_sugar_getimage(array('name'=>"pencil"),$_smarty_tpl);?>

</div>
</div>
<div class="dotted-border"></div>


</div>

</div>


<div class="row detail-view-row">



<div class="col-xs-12 col-sm-6 detail-view-row-item detail-view-bordered" data-field="address_state">


<div class="col-xs-12 col-sm-4 label col-1-label">


<?php $_smarty_tpl->smarty->ext->_capture->open($_smarty_tpl, "label", "label", null);
echo smarty_function_sugar_translate(array('label'=>'LBL_ADDRESS_STATE','module'=>'Users'),$_smarty_tpl);
$_smarty_tpl->smarty->ext->_capture->close($_smarty_tpl);
echo smarty_modifier_strip_semicolon($_smarty_tpl->tpl_vars['label']->value);?>
:
</div>


<div class="col-xs-12 col-sm-8 detail-view-field d-flex inlineEdit" type="varchar" field="address_state" >

<?php if (!$_smarty_tpl->tpl_vars['fields']->value['address_state']['hidden']) {
echo smarty_function_counter(array('name'=>"panelFieldCount",'print'=>false),$_smarty_tpl);?>


<?php if (strlen($_smarty_tpl->tpl_vars['fields']->value['address_state']['value']) <= 0) {
$_smarty_tpl->_assignInScope('value', $_smarty_tpl->tpl_vars['fields']->value['address_state']['default_value']);
} else {
$_smarty_tpl->_assignInScope('value', $_smarty_tpl->tpl_vars['fields']->value['address_state']['value']);
}?> 
<span class="sugar_field" id="<?php echo $_smarty_tpl->tpl_vars['fields']->value['address_state']['name'];?>
"><?php echo $_smarty_tpl->tpl_vars['fields']->value['address_state']['value'];?>
</span>
<?php }?>

<div class="inlineEditIcon col-xs-hidden">
<?php echo smarty_function_sugar_getimage(array('name'=>"pencil"),$_smarty_tpl);?>

</div>
</div>
<div class="dotted-border"></div>


</div>




<div class="col-xs-12 col-sm-6 detail-view-row-item detail-view-bordered" data-field="address_postalcode">


<div class="col-xs-12 col-sm-4 label col-2-label">


<?php $_smarty_tpl->smarty->ext->_capture->open($_smarty_tpl, "label", "label", null);
echo smarty_function_sugar_translate(array('label'=>'LBL_ADDRESS_POSTALCODE','module'=>'Users'),$_smarty_tpl);
$_smarty_tpl->smarty->ext->_capture->close($_smarty_tpl);
echo smarty_modifier_strip_semicolon($_smarty_tpl->tpl_vars['label']->value);?>
:
</div>


<div class="col-xs-12 col-sm-8 detail-view-field d-flex inlineEdit" type="varchar" field="address_postalcode" >

<?php if (!$_smarty_tpl->tpl_vars['fields']->value['address_postalcode']['hidden']) {
echo smarty_function_counter(array('name'=>"panelFieldCount",'print'=>false),$_smarty_tpl);?>


<?php if (strlen($_smarty_tpl->tpl_vars['fields']->value['address_postalcode']['value']) <= 0) {
$_smarty_tpl->_assignInScope('value', $_smarty_tpl->tpl_vars['fields']->value['address_postalcode']['default_value']);
} else {
$_smarty_tpl->_assignInScope('value', $_smarty_tpl->tpl_vars['fields']->value['address_postalcode']['value']);
}?> 
<span class="sugar_field" id="<?php echo $_smarty_tpl->tpl_vars['fields']->value['address_postalcode']['name'];?>
"><?php echo $_smarty_tpl->tpl_vars['fields']->value['address_postalcode']['value'];?>
</span>
<?php }?>

<div class="inlineEditIcon col-xs-hidden">
<?php echo smarty_function_sugar_getimage(array('name'=>"pencil"),$_smarty_tpl);?>

</div>
</div>
<div class="dotted-border"></div>


</div>

</div>


<div class="row detail-view-row">



<div class="col-xs-12 col-sm-12 detail-view-row-item" data-field="address_country">


<div class="col-xs-12 col-sm-2 label col-1-label">


<?php $_smarty_tpl->smarty->ext->_capture->open($_smarty_tpl, "label", "label", null);
echo smarty_function_sugar_translate(array('label'=>'LBL_ADDRESS_COUNTRY','module'=>'Users'),$_smarty_tpl);
$_smarty_tpl->smarty->ext->_capture->close($_smarty_tpl);
echo smarty_modifier_strip_semicolon($_smarty_tpl->tpl_vars['label']->value);?>
:
</div>


<div class="col-xs-12 col-sm-10 detail-view-field d-flex inlineEdit" type="varchar" field="address_country" colspan='3'>

<?php if (!$_smarty_tpl->tpl_vars['fields']->value['address_country']['hidden']) {
echo smarty_function_counter(array('name'=>"panelFieldCount",'print'=>false),$_smarty_tpl);?>


<?php if (strlen($_smarty_tpl->tpl_vars['fields']->value['address_country']['value']) <= 0) {
$_smarty_tpl->_assignInScope('value', $_smarty_tpl->tpl_vars['fields']->value['address_country']['default_value']);
} else {
$_smarty_tpl->_assignInScope('value', $_smarty_tpl->tpl_vars['fields']->value['address_country']['value']);
}?> 
<span class="sugar_field" id="<?php echo $_smarty_tpl->tpl_vars['fields']->value['address_country']['name'];?>
"><?php echo $_smarty_tpl->tpl_vars['fields']->value['address_country']['value'];?>
</span>
<?php }?>

<div class="inlineEditIcon col-xs-hidden">
<?php echo smarty_function_sugar_getimage(array('name'=>"pencil"),$_smarty_tpl);?>

</div>
</div>
<div class="dotted-border"></div>


</div>

</div>


<div class="row detail-view-row">



<div class="col-xs-12 col-sm-12 detail-view-row-item" data-field="description">


<div class="col-xs-12 col-sm-2 label col-1-label">


<?php $_smarty_tpl->smarty->ext->_capture->open($_smarty_tpl, "label", "label", null);
echo smarty_function_sugar_translate(array('label'=>'LBL_DESCRIPTION','module'=>'Users'),$_smarty_tpl);
$_smarty_tpl->smarty->ext->_capture->close($_smarty_tpl);
echo smarty_modifier_strip_semicolon($_smarty_tpl->tpl_vars['label']->value);?>
:
</div>


<div class="col-xs-12 col-sm-10 detail-view-field d-flex inlineEdit" type="text" field="description" colspan='3'>

<?php if (!$_smarty_tpl->tpl_vars['fields']->value['description']['hidden']) {
echo smarty_function_counter(array('name'=>"panelFieldCount",'print'=>false),$_smarty_tpl);?>


<span class="sugar_field" id="<?php echo nl2br((string) url2html(smarty_modifier_escape($_smarty_tpl->tpl_vars['fields']->value['description']['name'],'html')), (bool) 1);?>
"><?php echo nl2br((string) url2html(smarty_modifier_escape(smarty_modifier_escape($_smarty_tpl->tpl_vars['fields']->value['description']['value'],'html'),'html_entity_decode')), (bool) 1);?>
</span>
<?php }?>

<div class="inlineEditIcon col-xs-hidden">
<?php echo smarty_function_sugar_getimage(array('name'=>"pencil"),$_smarty_tpl);?>

</div>
</div>
<div class="dotted-border"></div>


</div>

</div>

</div>
</div>
</div>
</div>
</div>

</form>
<?php echo '<script'; ?>
>SUGAR.util.doWhen("document.getElementById('form') != null",
        function(){SUGAR.util.buildAccessKeyLabels();});
<?php echo '</script'; ?>
>            

            
            
            

<?php echo '<script'; ?>
 type="text/javascript" src="include/InlineEditing/inlineEditing.js"><?php echo '</script'; ?>
>
<?php echo '<script'; ?>
 type="text/javascript" src="modules/Favorites/favorites.js"><?php echo '</script'; ?>
>
<?php echo '<script'; ?>
 type='text/javascript' src='<?php echo smarty_function_sugar_getjspath(array('file'=>'modules/Users/DetailView.js'),$_smarty_tpl);?>
'><?php echo '</script'; ?>
>

<?php echo '<script'; ?>
 type="text/javascript">

                    var selectTab = function(tab) {
                        $('#content div.tab-content div.tab-pane-NOBOOTSTRAPTOGGLER').hide();
                        $('#content div.tab-content div.tab-pane-NOBOOTSTRAPTOGGLER').eq(tab).show().addClass('active').addClass('in');
                    };

                    var selectTabOnError = function(tab) {
                        selectTab(tab);
                        $('#content ul.nav.nav-tabs li').removeClass('active');
                        $('#content ul.nav.nav-tabs li a').css('color', '');

                        $('#content ul.nav.nav-tabs li').eq(tab).find('a').first().css('color', 'red');
                        $('#content ul.nav.nav-tabs li').eq(tab).addClass('active');

                    };

                    var selectTabOnErrorInputHandle = function(inputHandle) {
                        var tab = $(inputHandle).closest('.tab-pane-NOBOOTSTRAPTOGGLER').attr('id').match(/^detailpanel_(.*)$/)[1];
                        selectTabOnError(tab);
                    };


                    $(function(){
                        $('#content ul.nav.nav-tabs li').click(function(e){
                            if(typeof $(this).find('a').first().attr('id') != 'undefined') {
                                var tab = parseInt($(this).find('a').first().attr('id').match(/^tab(.)*$/)[1]);
                                selectTab(tab);
                            }
                        });
                        $('#content ul.nav.nav-tabs li.active').each(function(e){
                            if(typeof $(this).find('a').first().attr('id') != 'undefined') {
                                var tab = parseInt($(this).find('a').first().attr('id').match(/^tab(.)*$/)[1]);
                                selectTab(tab);
                            }
                        });
                    });

                    var $record =  $("#formDetailView [name='record']").val();
                    var $currentUser =  $("#formDetailView [name='current_user_id']").val();
                    var $deleteButton = $("#delete_button");

                    if ($currentUser === $record) {
                        $deleteButton.closest('li').remove();
                        $deleteButton.remove();
                    }
                <?php echo '</script'; ?>
>
<?php }
}
