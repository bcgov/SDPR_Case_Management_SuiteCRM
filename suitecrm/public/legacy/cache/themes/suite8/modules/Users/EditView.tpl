
<div class="edit-border-bottom"></div>

{$ROLLOVER}
<script type="text/javascript" src="{sugar_getjspath file='modules/Emails/javascript/vars.js'}"></script>
<script type="text/javascript" src="{sugar_getjspath file='cache/include/javascript/sugar_grp_emails.js'}"></script>
<link rel="stylesheet" type="text/css" href="{sugar_getjspath file='modules/Users/PasswordRequirementBox.css'}">
<script type="text/javascript" src="{sugar_getjspath file='cache/include/javascript/sugar_grp_yui_widgets.js'}"></script>
<script type='text/javascript' src='{sugar_getjspath file='include/SubPanel/SubPanelTiles.js'}'></script>
<script type='text/javascript'>
var ERR_RULES_NOT_MET = '{$MOD.ERR_RULES_NOT_MET}';
var ERR_ENTER_OLD_PASSWORD = '{$MOD.ERR_ENTER_OLD_PASSWORD}';
var ERR_ENTER_NEW_PASSWORD = '{$MOD.ERR_ENTER_NEW_PASSWORD}';
var ERR_ENTER_CONFIRMATION_PASSWORD = '{$MOD.ERR_ENTER_CONFIRMATION_PASSWORD}';
var ERR_REENTER_PASSWORDS = '{$MOD.ERR_REENTER_PASSWORDS}';
</script>
<script type='text/javascript' src='{sugar_getjspath file='modules/Users/User.js'}'></script>
<script type='text/javascript' src='{sugar_getjspath file='modules/Users/UserEditView.js'}'></script>
<script type='text/javascript' src='{sugar_getjspath file='modules/Users/PasswordRequirementBox.js'}'></script>
{$ERROR_STRING}
<!-- This is here for the external API forms -->
<form name="DetailView" id="DetailView" method="POST" action="index.php">
<input type="hidden" name="record" id="record" value="{$ID}">
<input type="hidden" name="module" value="Users">
<input type="hidden" name="return_module" value="Users">
<input type="hidden" name="return_id" value="{$RETURN_ID}">
<input type="hidden" name="return_action" value="EditView">
</form>
<form name="EditView" enctype="multipart/form-data" id="EditView" method="POST" action="index.php" class="userprofile">
<input type="hidden" name="display_tabs_def">
<input type="hidden" name="hide_tabs_def">
<input type="hidden" name="remove_tabs_def">
<input type="hidden" name="module" value="Users">
<input type="hidden" name="record" id="record" value="{$ID}">
<input type="hidden" name="action">
<input type="hidden" name="page" value="EditView">
<input type="hidden" name="return_module" value="{$RETURN_MODULE}">
<input type="hidden" name="return_id" value="{$RETURN_ID}">
<input type="hidden" name="return_action" value="{$RETURN_ACTION}">
<input type="hidden" name="password_change" id="password_change" value="false">
<input type="hidden" name="required_password" id="required_password" value='{$REQUIRED_PASSWORD}' >
<input type="hidden" name="old_user_name" value="{$USER_NAME}">
<input type="hidden" name="type" value="{$REDIRECT_EMAILS_TYPE}">
<input type="hidden" id="is_group" name="is_group" value='{$IS_GROUP}' {$IS_GROUP_DISABLED}>
<input type="hidden" id='portal_only' name='portal_only' value='{$IS_PORTALONLY}' {$IS_PORTAL_ONLY_DISABLED}>
<input type="hidden" name="is_admin" id="is_admin" value='{$IS_FOCUS_ADMIN}' {$IS_ADMIN_DISABLED} >
<input type="hidden" name="is_current_admin" id="is_current_admin" value='{$IS_ADMIN}' >
<input type="hidden" name="edit_self" id="edit_self" value='{$EDIT_SELF}' >
<input type="hidden" name="required_email_address" id="required_email_address" value='{$REQUIRED_EMAIL_ADDRESS}' >
<input type="hidden" name="isDuplicate" id="isDuplicate" value="{$isDuplicate}">
<div id="popup_window"></div>
<script type="text/javascript">
var EditView_tabs = new YAHOO.widget.TabView("EditView_tabs");

{literal}
//Override so we do not force submit, just simulate the 'save button' click
SUGAR.EmailAddressWidget.prototype.forceSubmit = function() { document.getElementById('Save').click();}

EditView_tabs.on('contentReady', function(e){
{/literal}
{if $ID}
{literal}
    var eapmTabIndex = 4;
    {/literal}{if !$SHOW_THEMES}{literal}eapmTabIndex = 3;{/literal}{/if}{literal}
    EditView_tabs.getTab(eapmTabIndex).set('dataSrc','index.php?sugar_body_only=1&module=Users&subpanel=eapm&action=SubPanelViewer&inline=1&record={/literal}{$ID}{literal}&layout_def_key=UserEAPM&inline=1&ajaxSubpanel=true');
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
{/literal}
{/if}

{if $scroll_to_cal}
    {literal}
        //we are coming from the tour welcome page, so we need to simulate a click on the 4th tab
        // and scroll to the calendar_options div after the tabs have rendered
        document.getElementById('tab4').click();
        document.getElementById('calendar_options').scrollIntoView();
    {/literal}
{/if}

});
</script>
<table width="100%" cellpadding="0" cellspacing="0" border="0" class="actionsContainer">
<tr>
<td>
{sugar_action_menu id="userEditActions" class="clickMenu fancymenu" buttons=$ACTION_BUTTON_HEADER flat=true}
</td>
<td align="right" nowrap>
<span class="required">{$APP.LBL_REQUIRED_SYMBOL}</span> {$APP.NTC_REQUIRED}
</td>
</tr>
</table>
<div id="EditView_tabs" class="yui-navset">
<ul class="yui-nav userprofile-nav">
<li class="selected"><a id="tab1" href="#tab1"><em>{$MOD.LBL_USER_INFORMATION}</em></a></li>
<li {if $CHANGE_PWD == 0}style='display:none'{/if}><a id="tab2" href="#tab2"><em>{$MOD.LBL_CHANGE_PASSWORD_TITLE}</em></a></li>
{if $SHOW_THEMES}
<li><a id="tab3" href="#tab3" style='display:{$HIDE_FOR_GROUP_AND_PORTAL};'><em>{$MOD.LBL_THEME}</em></a></li>
{/if}
<li><a id="tab4" href="#tab4" style='display:{$HIDE_FOR_GROUP_AND_PORTAL};'><em>{$MOD.LBL_ADVANCED}</em></a></li>
{if $ID}
<li><a id="tab5" href="#tab5" style='display:{$HIDE_FOR_GROUP_AND_PORTAL};'><em>{$MOD.LBL_EAPM_SUBPANEL_TITLE}</em></a></li>
{/if}
<li><a id="tab6" href="#tab6" style='display:{$HIDE_FOR_GROUP_AND_PORTAL};'><em>{$MOD.LBL_LAYOUT_OPTIONS}</em></a></li>
</ul>
<div class="yui-content user-tab-content">
<div>
<!-- BEGIN METADATA GENERATED CONTENT -->
{sugar_include include=$includes}
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
{sugar_translate label='LBL_USER_INFORMATION' module='Users'}
</div>
</a>
</div>
<div class="panel-body panel-collapse collapse in panelContainer" id="detailpanel_-1" data-id="LBL_USER_INFORMATION">
<div class="tab-content">
<!-- tab_panel_content.tpl -->
<div class="row edit-view-row">



<div class="col-xs-12 col-sm-6 edit-view-row-item edit-view-bordered" data-field="user_name">


<div class="col-xs-12 col-sm-4 label" data-label="LBL_USER_NAME">

{minify}
{capture name="label" assign="label"}{sugar_translate label='LBL_USER_NAME' module='Users'}{/capture}
{$label|strip_semicolon}:

<span class="required">*</span>
{/minify}
</div>

<div class="col-xs-12 col-sm-8 edit-view-field " type="user_name" field="user_name"  >
{counter name="panelFieldCount" print=false}

{if strlen($fields.user_name.value) <= 0}
{assign var="value" value=$fields.user_name.default_value }
{else}
{assign var="value" value=$fields.user_name.value }
{/if}
<input type='text' name='{$fields.user_name.name}'
id='{$fields.user_name.name}' size='30'
maxlength='60'        value='{$value}' title=''      >
</div>
<div class="edit-dotted-border"></div>

<!-- [/hide] -->
</div>


<div class="col-xs-12 col-sm-6 edit-view-row-item edit-view-bordered" data-field="first_name">


<div class="col-xs-12 col-sm-4 label" data-label="LBL_FIRST_NAME">

{minify}
{capture name="label" assign="label"}{sugar_translate label='LBL_FIRST_NAME' module='Users'}{/capture}
{$label|strip_semicolon}:

{/minify}
</div>

<div class="col-xs-12 col-sm-8 edit-view-field " type="name" field="first_name"  >
{counter name="panelFieldCount" print=false}

{if strlen($fields.first_name.value) <= 0}
{assign var="value" value=$fields.first_name.default_value }
{else}
{assign var="value" value=$fields.first_name.value }
{/if}
<input type='text' name='{$fields.first_name.name}'
id='{$fields.first_name.name}' size='30'
maxlength='255'        value='{$value}' title=''      >
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

{minify}
{capture name="label" assign="label"}{sugar_translate label='LBL_STATUS' module='Users'}{/capture}
{$label|strip_semicolon}:

<span class="required">*</span>
{/minify}
</div>

<div class="col-xs-12 col-sm-8 edit-view-field " type="enum" field="status"  >
{counter name="panelFieldCount"  print=false}
{if !empty($IS_ADMIN)}
<select name="{$fields.status.name}"
id="{$fields.status.name}"
title=''              
>
{if isset($fields.status.value)}
{html_options options=$fields.status.options selected=$fields.status.value}
{else}
{html_options options=$fields.status.options selected=$fields.status.default}
{/if}
</select>
{else}{$STATUS_READONLY}{/if}
</div>
<div class="edit-dotted-border"></div>

<!-- [/hide] -->
</div>


<div class="col-xs-12 col-sm-6 edit-view-row-item edit-view-bordered" data-field="last_name">


<div class="col-xs-12 col-sm-4 label" data-label="LBL_LAST_NAME">

{minify}
{capture name="label" assign="label"}{sugar_translate label='LBL_LAST_NAME' module='Users'}{/capture}
{$label|strip_semicolon}:

<span class="required">*</span>
{/minify}
</div>

<div class="col-xs-12 col-sm-8 edit-view-field " type="name" field="last_name"  >
{counter name="panelFieldCount" print=false}

{if strlen($fields.last_name.value) <= 0}
{assign var="value" value=$fields.last_name.default_value }
{else}
{assign var="value" value=$fields.last_name.value }
{/if}
<input type='text' name='{$fields.last_name.name}'
id='{$fields.last_name.name}' size='30'
maxlength='255'        value='{$value}' title=''      >
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

{minify}
{capture name="label" assign="label"}{sugar_translate label='LBL_USER_TYPE' module='Users'}{/capture}
{$label|strip_semicolon}:

{/minify}
</div>

<div class="col-xs-12 col-sm-8 edit-view-field " type="enum" field="UserType" colspan='3' >
{counter name="panelFieldCount"  print=false}
{if $IS_ADMIN}{$USER_TYPE_DROPDOWN}{else}{$USER_TYPE_READONLY}{/if}
</div>
<div class="edit-dotted-border"></div>

<!-- [/hide] -->
</div>
<div class="clear"></div>
</div>
<div class="row edit-view-row">



<div class="col-xs-12 col-sm-12 edit-view-row-item" data-field="photo">


<div class="col-xs-12 col-sm-2 label" data-label="LBL_PHOTO">

{minify}
{capture name="label" assign="label"}{sugar_translate label='LBL_PHOTO' module='Users'}{/capture}
{$label|strip_semicolon}:

{/minify}
</div>

<div class="col-xs-12 col-sm-8 edit-view-field " type="image" field="photo" colspan='3' >
{counter name="panelFieldCount" print=false}

<script type="text/javascript">
    {literal}
        $( document ).ready(function() {
        $( "form#EditView" )
        .attr( "enctype", "multipart/form-data" )
        .attr( "encoding", "multipart/form-data" );
    });
{/literal}
</script>
<script type="text/javascript" src='include/SugarFields/Fields/Image/SugarFieldFile.js?v=MWagh1TdXMJiNr8SpuWIOg'></script>
{if !empty($fields.photo.value) }
{assign var=showRemove value=true}
{else}
{assign var=showRemove value=false}
{/if}
{assign var=noChange value=false}
<input type="hidden" name="deleteAttachment" value="0">
<input type="hidden" name="{$fields.photo.name}" id="{$fields.photo.name}" value="{$fields.photo.value}">
<input type="hidden" name="{$fields.photo.name}_record_id" id="{$fields.photo.name}_record_id" value="{$fields.id.value}">
<span id="{$fields.photo.name}_old" style="display:{if !$showRemove}none;{/if}">
<a href="index.php?entryPoint=download&id={$fields.id.value}_{$fields.photo.name}&type={$module}&time={$fields.date_modified.value}" class="tabDetailViewDFLink">{$fields.photo.value}</a>
{if !$noChange}
<input type='button' class='button' id='remove_button' value='{$APP.LBL_REMOVE}' onclick='SUGAR.field.file.deleteAttachment("{$fields.photo.name}","",this);'>
{/if}
</span>
{if !$noChange}
<span id="{$fields.photo.name}_new" style="display:{if $showRemove}none;{/if}">
<input type="hidden" name="{$fields.photo.name}_escaped">
<input id="{$fields.photo.name}_file" name="{$fields.photo.name}_file"
type="file" title='' size="30"
maxlength='255'
>
{else}

{/if}
<script type="text/javascript">
$( "#{$fields.photo.name}_file{literal} " ).change(function() {
        $("#{/literal}{$fields.photo.name}{literal}").val($("#{/literal}{$fields.photo.name}_file{literal}").val());
});{/literal}
        </script>
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

{minify}
{capture name="label" assign="label"}{sugar_translate label='LBL_FACTOR_AUTH' module='Users'}{/capture}
{$label|strip_semicolon}:

{/minify}
</div>

<div class="col-xs-12 col-sm-8 edit-view-field " type="bool" field="factor_auth" colspan='3' >
{counter name="panelFieldCount" print=false}

{if strval($fields.factor_auth.value) == "1" || strval($fields.factor_auth.value) == "yes" || strval($fields.factor_auth.value) == "on"} 
{assign var="checked" value='checked="checked"'}
{else}
{assign var="checked" value=""}
{/if}
<input type="hidden" name="{$fields.factor_auth.name}" value="0"> 
<input type="checkbox" id="{$fields.factor_auth.name}" 
name="{$fields.factor_auth.name}" 
value="1" title='' tabindex="0" {$checked} >
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
{sugar_translate label='LBL_EMPLOYEE_INFORMATION' module='Users'}
</div>
</a>
</div>
<div class="panel-body panel-collapse collapse in panelContainer" id="detailpanel_0" data-id="LBL_EMPLOYEE_INFORMATION">
<div class="tab-content">
<!-- tab_panel_content.tpl -->
<div class="row edit-view-row">



<div class="col-xs-12 col-sm-6 edit-view-row-item edit-view-bordered" data-field="employee_status">


<div class="col-xs-12 col-sm-4 label" data-label="LBL_EMPLOYEE_STATUS">

{minify}
{capture name="label" assign="label"}{sugar_translate label='LBL_EMPLOYEE_STATUS' module='Users'}{/capture}
{$label|strip_semicolon}:

{/minify}
</div>

<div class="col-xs-12 col-sm-8 edit-view-field " type="varchar" field="employee_status"  >
{counter name="panelFieldCount"  print=false}
{if $IS_ADMIN}<span id='employee_status_span'>
{$fields.employee_status.value}
</span>{else}{$EMPLOYEE_STATUS_READONLY}{/if}
</div>
<div class="edit-dotted-border"></div>

<!-- [/hide] -->
</div>


<div class="col-xs-12 col-sm-6 edit-view-row-item edit-view-bordered" data-field="show_on_employees">


<div class="col-xs-12 col-sm-4 label" data-label="LBL_SHOW_ON_EMPLOYEES">

{minify}
{capture name="label" assign="label"}{sugar_translate label='LBL_SHOW_ON_EMPLOYEES' module='Users'}{/capture}
{$label|strip_semicolon}:

{/minify}
</div>

<div class="col-xs-12 col-sm-8 edit-view-field " type="bool" field="show_on_employees"  >
{counter name="panelFieldCount" print=false}

{if strval($fields.show_on_employees.value) == "1" || strval($fields.show_on_employees.value) == "yes" || strval($fields.show_on_employees.value) == "on"} 
{assign var="checked" value='checked="checked"'}
{else}
{assign var="checked" value=""}
{/if}
<input type="hidden" name="{$fields.show_on_employees.name}" value="0"> 
<input type="checkbox" id="{$fields.show_on_employees.name}" 
name="{$fields.show_on_employees.name}" 
value="1" title='' tabindex="0" {$checked} >
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

{minify}
{capture name="label" assign="label"}{sugar_translate label='LBL_TITLE' module='Users'}{/capture}
{$label|strip_semicolon}:

{/minify}
</div>

<div class="col-xs-12 col-sm-8 edit-view-field " type="varchar" field="title"  >
{counter name="panelFieldCount"  print=false}
{if $IS_ADMIN}
{if strlen($fields.title.value) <= 0}
{assign var="value" value=$fields.title.default_value }
{else}
{assign var="value" value=$fields.title.value }
{/if}
<input type='text' name='{$fields.title.name}'
id='{$fields.title.name}' size='30'
maxlength='50'        value='{$value}' title=''      >
{else}{$TITLE_READONLY}{/if}
</div>
<div class="edit-dotted-border"></div>

<!-- [/hide] -->
</div>


<div class="col-xs-12 col-sm-6 edit-view-row-item edit-view-bordered" data-field="phone_work">


<div class="col-xs-12 col-sm-4 label" data-label="LBL_WORK_PHONE">

{minify}
{capture name="label" assign="label"}{sugar_translate label='LBL_WORK_PHONE' module='Users'}{/capture}
{$label|strip_semicolon}:

{/minify}
</div>

<div class="col-xs-12 col-sm-8 edit-view-field " type="phone" field="phone_work"  class="phone">
{counter name="panelFieldCount" print=false}

{if strlen($fields.phone_work.value) <= 0}
{assign var="value" value=$fields.phone_work.default_value }
{else}
{assign var="value" value=$fields.phone_work.value }
{/if}  
<input type='text' name='{$fields.phone_work.name}' id='{$fields.phone_work.name}' size='30' maxlength='50' value='{$value}' title='' tabindex='0'	  class="phone" >
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

{minify}
{capture name="label" assign="label"}{sugar_translate label='LBL_DEPARTMENT' module='Users'}{/capture}
{$label|strip_semicolon}:

{/minify}
</div>

<div class="col-xs-12 col-sm-8 edit-view-field " type="varchar" field="department"  >
{counter name="panelFieldCount"  print=false}
{if $IS_ADMIN}
{if strlen($fields.department.value) <= 0}
{assign var="value" value=$fields.department.default_value }
{else}
{assign var="value" value=$fields.department.value }
{/if}
<input type='text' name='{$fields.department.name}'
id='{$fields.department.name}' size='30'
maxlength='50'        value='{$value}' title=''      >
{else}{$DEPT_READONLY}{/if}
</div>
<div class="edit-dotted-border"></div>

<!-- [/hide] -->
</div>


<div class="col-xs-12 col-sm-6 edit-view-row-item edit-view-bordered" data-field="phone_mobile">


<div class="col-xs-12 col-sm-4 label" data-label="LBL_MOBILE_PHONE">

{minify}
{capture name="label" assign="label"}{sugar_translate label='LBL_MOBILE_PHONE' module='Users'}{/capture}
{$label|strip_semicolon}:

{/minify}
</div>

<div class="col-xs-12 col-sm-8 edit-view-field " type="phone" field="phone_mobile"  class="phone">
{counter name="panelFieldCount" print=false}

{if strlen($fields.phone_mobile.value) <= 0}
{assign var="value" value=$fields.phone_mobile.default_value }
{else}
{assign var="value" value=$fields.phone_mobile.value }
{/if}  
<input type='text' name='{$fields.phone_mobile.name}' id='{$fields.phone_mobile.name}' size='30' maxlength='50' value='{$value}' title='' tabindex='0'	  class="phone" >
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

{minify}
{capture name="label" assign="label"}{sugar_translate label='LBL_REPORTS_TO_NAME' module='Users'}{/capture}
{$label|strip_semicolon}:

{/minify}
</div>

<div class="col-xs-12 col-sm-8 edit-view-field " type="relate" field="reports_to_name"  >
{counter name="panelFieldCount"  print=false}
{if $IS_ADMIN}
<input type="text" name="{$fields.reports_to_name.name}" class="sqsEnabled" tabindex="0" id="{$fields.reports_to_name.name}" size="" value="{$fields.reports_to_name.value}" title='' autocomplete="off"  	 >
<input type="hidden" name="{$fields.reports_to_name.id_name}" 
id="{$fields.reports_to_name.id_name}" 
value="{$fields.reports_to_id.value}">
<span class="id-ff multiple selectcrossbtn">
<button type="button" name="btn_{$fields.reports_to_name.name}" id="btn_{$fields.reports_to_name.name}" tabindex="0" title="{sugar_translate label="LBL_ACCESSKEY_SELECT_USERS_TITLE"}" class="firstChild" value="{sugar_translate label="LBL_ACCESSKEY_SELECT_USERS_LABEL"}"
onclick='open_popup(
"{$fields.reports_to_name.module}", 
600, 
400, 
"", 
true, 
false, 
{literal}{"call_back_function":"set_return","form_name":"EditView","field_to_name_array":{"id":"reports_to_id","last_name":"reports_to_name"}}{/literal}, 
"single", 
true
);' >
{sugar_getimage name="cursor" attr='border="0"'}
</button>
<button type="button" name="btn_clr_{$fields.reports_to_name.name}" id="btn_clr_{$fields.reports_to_name.name}" tabindex="0" title="{sugar_translate label="LBL_ACCESSKEY_CLEAR_USERS_TITLE"}"  class="lastChild"
onclick="SUGAR.clearRelateField(this.form, '{$fields.reports_to_name.name}', '{$fields.reports_to_name.id_name}');"  value="{sugar_translate label="LBL_ACCESSKEY_CLEAR_USERS_LABEL"}" >
{sugar_getimage name="cross" attr='border="0"'}
</button>
</span>
<script type="text/javascript">
SUGAR.util.doWhen(
		"typeof(sqs_objects) != 'undefined' && typeof(sqs_objects['{$form_name}_{$fields.reports_to_name.name}']) != 'undefined'",
		enableQS
);
</script>
{else}{$REPORTS_TO_READONLY}{/if}
</div>
<div class="edit-dotted-border"></div>

<!-- [/hide] -->
</div>


<div class="col-xs-12 col-sm-6 edit-view-row-item edit-view-bordered" data-field="phone_other">


<div class="col-xs-12 col-sm-4 label" data-label="LBL_OTHER_PHONE">

{minify}
{capture name="label" assign="label"}{sugar_translate label='LBL_OTHER_PHONE' module='Users'}{/capture}
{$label|strip_semicolon}:

{/minify}
</div>

<div class="col-xs-12 col-sm-8 edit-view-field " type="phone" field="phone_other"  class="phone">
{counter name="panelFieldCount" print=false}

{if strlen($fields.phone_other.value) <= 0}
{assign var="value" value=$fields.phone_other.default_value }
{else}
{assign var="value" value=$fields.phone_other.value }
{/if}  
<input type='text' name='{$fields.phone_other.name}' id='{$fields.phone_other.name}' size='30' maxlength='50' value='{$value}' title='' tabindex='0'	  class="phone" >
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

{minify}
{capture name="label" assign="label"}{sugar_translate label='LBL_FAX_PHONE' module='Users'}{/capture}
{$label|strip_semicolon}:

{/minify}
</div>

<div class="col-xs-12 col-sm-8 edit-view-field " type="phone" field="phone_fax"  class="phone">
{counter name="panelFieldCount" print=false}

{if strlen($fields.phone_fax.value) <= 0}
{assign var="value" value=$fields.phone_fax.default_value }
{else}
{assign var="value" value=$fields.phone_fax.value }
{/if}  
<input type='text' name='{$fields.phone_fax.name}' id='{$fields.phone_fax.name}' size='30' maxlength='50' value='{$value}' title='' tabindex='0'	  class="phone" >
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

{minify}
{capture name="label" assign="label"}{sugar_translate label='LBL_HOME_PHONE' module='Users'}{/capture}
{$label|strip_semicolon}:

{/minify}
</div>

<div class="col-xs-12 col-sm-8 edit-view-field " type="phone" field="phone_home"  class="phone">
{counter name="panelFieldCount" print=false}

{if strlen($fields.phone_home.value) <= 0}
{assign var="value" value=$fields.phone_home.default_value }
{else}
{assign var="value" value=$fields.phone_home.value }
{/if}  
<input type='text' name='{$fields.phone_home.name}' id='{$fields.phone_home.name}' size='30' maxlength='50' value='{$value}' title='' tabindex='0'	  class="phone" >
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

{minify}
{capture name="label" assign="label"}{sugar_translate label='LBL_MESSENGER_TYPE' module='Users'}{/capture}
{$label|strip_semicolon}:

{/minify}
</div>

<div class="col-xs-12 col-sm-8 edit-view-field " type="enum" field="messenger_type"  >
{counter name="panelFieldCount" print=false}

<select name="{$fields.messenger_type.name}"
id="{$fields.messenger_type.name}"
title=''              
>
{if isset($fields.messenger_type.value)}
{html_options options=$fields.messenger_type.options selected=$fields.messenger_type.value}
{else}
{html_options options=$fields.messenger_type.options selected=$fields.messenger_type.default}
{/if}
</select>
</div>
<div class="edit-dotted-border"></div>

<!-- [/hide] -->
</div>


<div class="col-xs-12 col-sm-6 edit-view-row-item edit-view-bordered" data-field="messenger_id">


<div class="col-xs-12 col-sm-4 label" data-label="LBL_MESSENGER_ID">

{minify}
{capture name="label" assign="label"}{sugar_translate label='LBL_MESSENGER_ID' module='Users'}{/capture}
{$label|strip_semicolon}:

{/minify}
</div>

<div class="col-xs-12 col-sm-8 edit-view-field " type="varchar" field="messenger_id"  >
{counter name="panelFieldCount" print=false}

{if strlen($fields.messenger_id.value) <= 0}
{assign var="value" value=$fields.messenger_id.default_value }
{else}
{assign var="value" value=$fields.messenger_id.value }
{/if}
<input type='text' name='{$fields.messenger_id.name}'
id='{$fields.messenger_id.name}' size='30'
maxlength='100'        value='{$value}' title=''      >
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

{minify}
{capture name="label" assign="label"}{sugar_translate label='LBL_ADDRESS_STREET' module='Users'}{/capture}
{$label|strip_semicolon}:

{/minify}
</div>

<div class="col-xs-12 col-sm-8 edit-view-field " type="varchar" field="address_street"  >
{counter name="panelFieldCount" print=false}

{if strlen($fields.address_street.value) <= 0}
{assign var="value" value=$fields.address_street.default_value }
{else}
{assign var="value" value=$fields.address_street.value }
{/if}
<input type='text' name='{$fields.address_street.name}'
id='{$fields.address_street.name}' size='30'
maxlength='150'        value='{$value}' title=''      >
</div>
<div class="edit-dotted-border"></div>

<!-- [/hide] -->
</div>


<div class="col-xs-12 col-sm-6 edit-view-row-item edit-view-bordered" data-field="address_city">


<div class="col-xs-12 col-sm-4 label" data-label="LBL_ADDRESS_CITY">

{minify}
{capture name="label" assign="label"}{sugar_translate label='LBL_ADDRESS_CITY' module='Users'}{/capture}
{$label|strip_semicolon}:

{/minify}
</div>

<div class="col-xs-12 col-sm-8 edit-view-field " type="varchar" field="address_city"  >
{counter name="panelFieldCount" print=false}

{if strlen($fields.address_city.value) <= 0}
{assign var="value" value=$fields.address_city.default_value }
{else}
{assign var="value" value=$fields.address_city.value }
{/if}
<input type='text' name='{$fields.address_city.name}'
id='{$fields.address_city.name}' size='30'
maxlength='100'        value='{$value}' title=''      >
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

{minify}
{capture name="label" assign="label"}{sugar_translate label='LBL_ADDRESS_STATE' module='Users'}{/capture}
{$label|strip_semicolon}:

{/minify}
</div>

<div class="col-xs-12 col-sm-8 edit-view-field " type="varchar" field="address_state"  >
{counter name="panelFieldCount" print=false}

{if strlen($fields.address_state.value) <= 0}
{assign var="value" value=$fields.address_state.default_value }
{else}
{assign var="value" value=$fields.address_state.value }
{/if}
<input type='text' name='{$fields.address_state.name}'
id='{$fields.address_state.name}' size='30'
maxlength='100'        value='{$value}' title=''      >
</div>
<div class="edit-dotted-border"></div>

<!-- [/hide] -->
</div>


<div class="col-xs-12 col-sm-6 edit-view-row-item edit-view-bordered" data-field="address_postalcode">


<div class="col-xs-12 col-sm-4 label" data-label="LBL_ADDRESS_POSTALCODE">

{minify}
{capture name="label" assign="label"}{sugar_translate label='LBL_ADDRESS_POSTALCODE' module='Users'}{/capture}
{$label|strip_semicolon}:

{/minify}
</div>

<div class="col-xs-12 col-sm-8 edit-view-field " type="varchar" field="address_postalcode"  >
{counter name="panelFieldCount" print=false}

{if strlen($fields.address_postalcode.value) <= 0}
{assign var="value" value=$fields.address_postalcode.default_value }
{else}
{assign var="value" value=$fields.address_postalcode.value }
{/if}
<input type='text' name='{$fields.address_postalcode.name}'
id='{$fields.address_postalcode.name}' size='30'
maxlength='20'        value='{$value}' title=''      >
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

{minify}
{capture name="label" assign="label"}{sugar_translate label='LBL_ADDRESS_COUNTRY' module='Users'}{/capture}
{$label|strip_semicolon}:

{/minify}
</div>

<div class="col-xs-12 col-sm-8 edit-view-field " type="varchar" field="address_country" colspan='3' >
{counter name="panelFieldCount" print=false}

{if strlen($fields.address_country.value) <= 0}
{assign var="value" value=$fields.address_country.default_value }
{else}
{assign var="value" value=$fields.address_country.value }
{/if}
<input type='text' name='{$fields.address_country.name}'
id='{$fields.address_country.name}' size='30'
maxlength='100'        value='{$value}' title=''      >
</div>
<div class="edit-dotted-border"></div>

<!-- [/hide] -->
</div>
<div class="clear"></div>
</div>
<div class="row edit-view-row">



<div class="col-xs-12 col-sm-12 edit-view-row-item" data-field="description">


<div class="col-xs-12 col-sm-2 label" data-label="LBL_DESCRIPTION">

{minify}
{capture name="label" assign="label"}{sugar_translate label='LBL_DESCRIPTION' module='Users'}{/capture}
{$label|strip_semicolon}:

{/minify}
</div>

<div class="col-xs-12 col-sm-8 edit-view-field " type="text" field="description" colspan='3' >
{counter name="panelFieldCount" print=false}

{if empty($fields.description.value)}
{assign var="value" value=$fields.description.default_value }
{else}
{assign var="value" value=$fields.description.value }
{/if}
<textarea  id='{$fields.description.name}' name='{$fields.description.name}'
    rows="4"
    cols="60"
    title='' tabindex="0" 
     >{$value}</textarea>
{literal}{/literal}
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
<h4>{$MOD.LBL_MAIL_OPTIONS_TITLE}</h4>
</th>
</tr>
<tr>
<td scope="row" width="17%">
{$MOD.LBL_EMAIL} {if $REQUIRED_EMAIL_ADDRESS}<span class="required"
id="mandatory_email">{$APP.LBL_REQUIRED_SYMBOL}</span> {/if}
</td>
<td width="83%">
{$NEW_EMAIL}
</td>
</tr>
<tr id="email_options_link_type" style='display:{$HIDE_FOR_GROUP_AND_PORTAL}'>
<td scope="row" width="17%">
{$MOD.LBL_EMAIL_LINK_TYPE}:&nbsp;{sugar_help text=$MOD.LBL_EMAIL_LINK_TYPE_HELP WIDTH=450}
</td>
<td>
<select id="email_link_type" name="email_link_type" tabindex='410'>
{$EMAIL_LINK_TYPE}
</select>
</td>
</tr>
<tr>
<td scope="row" width="17%">{$MOD.LBL_EDITOR_TYPE}</td>
<td width="83%">
<select id="editor_type" name="editor_type" tabindex='410'>
{$EDITOR_TYPE}
</select>
</td>
</tr>
</table>
{if $ID}
<button class="button" id="settingsButton"
onclick="SUGAR.email2.settings.showSettings(getUserEditViewUserId()); return false;"><img
src="themes/default/images/icon_email_settings.gif" align="absmiddle"
border="0"> {$APP.LBL_EMAIL_SETTINGS}</button>
{/if}
</div>
</div>
<div class="user-tab-content">
{if ($CHANGE_PWD) == '1'}
<div id="generate_password">
<table width="100%" border="0" cellspacing="0" cellpadding="0" class="edit view">
<tr>
<td width='100%'>
<table width='100%' cellspacing='0' cellpadding='0' border='0'>
<tr>
<th align="left" scope="row" colspan="4">
<h4>{$MOD.LBL_CHANGE_PASSWORD_TITLE}</h4><br>
{$ERROR_PASSWORD}
</th>
</tr>
</table>
<!-- hide field if user is admin that is not editing themselves -->
<div id='generate_password_old_password' {if ($IS_ADMIN && !$ADMIN_EDIT_SELF)}
style='display:none' {/if}>
<div class="old-password">
<div class="label-txt">
{$MOD.LBL_OLD_PASSWORD}
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
{$MOD.LBL_NEW_PASSWORD}
<span class="required"
id="mandatory_pwd">{if ($REQUIRED_PASSWORD)}{$APP.LBL_REQUIRED_SYMBOL}{/if}</span>
</div>
<div class='dataField'>
<input name='new_password' id="new_password" type='password' tabindex='2'
onkeyup="password_confirmation();newrules('{$PWDSETTINGS.minpwdlength}','{$PWDSETTINGS.maxpwdlength}','{$REGEX}');"/>
</div>
<div class="edit-dotted-border"></div>
</div>
<!-- right col -->
<div class="right-col label-txt">
<div>{$MOD.LBL_CONFIRM_PASSWORD}</div>
<div>
<input name='confirm_new_password' id='confirm_pwd' style='' type='password'
tabindex='2' onkeyup="password_confirmation();">
</div>
<div>
<div id="comfirm_pwd_match" class="error"
style="display: none;">{$MOD.ERR_PASSWORD_MISMATCH}</div>

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
<input title="{$APP.LBL_SAVE_BUTTON_TITLE}" accessKey='{$APP.LBL_SAVE_BUTTON_KEY}'
class='button' id='save_new_pwd_button' LANGUAGE=javascript
onclick='if (set_password(this.form)) window.close(); else return false;'
type='submit' name='button' style='display:none;'
value='{$APP.LBL_SAVE_BUTTON_LABEL}'>
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
{else}
<div id="generate_password">
<input name='old_password' id='old_password' type='hidden'>
<input name='new_password' id="new_password" type='hidden'>
<input name='confirm_new_password' id='confirm_pwd' type='hidden'>
</div>
{/if}
</div>
{if $SHOW_THEMES}
<div class="user-tab-content">
<div id="themepicker" style="display:{$HIDE_FOR_GROUP_AND_PORTAL}">
<table class="edit view" border="0" cellpadding="0" cellspacing="0" width="100%">
<tbody>
<tr>
<td scope="row" colspan="4"><h4>{$MOD.LBL_THEME}</h4></td>
</tr>
<tr>
<td width="17%">
<select name="user_theme" tabindex='366' size="20" id="user_theme_picker" style="width: 100%">
{$THEMES}
</select>
</td>
<td width="33%">
<img id="themePreview" src="{sugar_getimagepath file='themePreview.png'}" border="1"/>
</td>
<td width="17%">&nbsp;</td>
<td width="33%">&nbsp;</td>
</tr>
</tbody>
</table>
</div>
</div>
{/if}
<div class="user-tab-content">
<!-- User Settings -->
<div id="settings" style="display:{$HIDE_FOR_GROUP_AND_PORTAL}">
<!--Heading-->
<div>
<h4>
<slot>{$MOD.LBL_USER_SETTINGS}</slot>
</h4>
</div>
<!--Main Content -->
<div class="row-user">
<!--First row-->
<div class="row-container">
<div class="left-col d-flex flex-column">
<div class="row-label">
<slot>{$MOD.LBL_EXPORT_DELIMITER}:</slot>&nbsp;{sugar_help text=$MOD.LBL_EXPORT_DELIMITER_DESC }
</div>
<div class="row-bottom flex-grow-1">
<slot><input style="line-height:21.5px;" type="text" tabindex='12' name="export_delimiter"
value="{$EXPORT_DELIMITER}" size="5">
</slot>
</div>
<div class="bottom-dotted-border"></div>
</div>
<div class="right-col d-flex flex-column">
<div class="row-label">
<slot>{$MOD.LBL_RECEIVE_NOTIFICATIONS}:</slot>&nbsp;{sugar_help text=$MOD.LBL_RECEIVE_NOTIFICATIONS_TEXT}
</div>
<div class="row-bottom flex-grow-1">
<slot style="line-height: 2.3">
<input name='receive_notifications' class="checkbox" tabindex='12' type="checkbox"
value="12" {$RECEIVE_NOTIFICATIONS} style="margin-top: -1em;">
</slot>
</div>
<div class="bottom-dotted-border"></div>
</div>
</div>
<!--First row ends here-->
<!--Second row-->
<div class="row-container">
<div class="left-col d-flex flex-column">
<div class="row-label"><slot>{$MOD.LBL_EXPORT_CHARSET}:</slot>&nbsp;{sugar_help text=$MOD.LBL_EXPORT_CHARSET_DESC }</div>
<div class="row-bottom flex-grow-1"><slot><select tabindex='12' name="default_export_charset">{$EXPORT_CHARSET}</select></slot></div>
<div class="bottom-dotted-border"></div>
</div>
<div class="right-col d-flex flex-column">
<div class="row-label"><slot>{$MOD.LBL_REMINDER}:</slot>&nbsp;{sugar_help text=$MOD.LBL_REMINDER_TEXT }</div>
<div class="row-bottom"><slot>{include file="modules/Reminders/tpls/remindersDefaults.tpl"}</slot></div>
<div class="bottom-dotted-border"></div>
</div>
</div>
<div class="row-container" >
<div class="left-col d-flex flex-column">
<div class="row-label"><slot>{$MOD.LBL_DESKTOP_NOTIFICATIONS}:</slot></div>
<div class="row-bottom flex-grow-1">
<slot>
<button type="button" class="btn btn-primary btn-sm" onClick="Alerts.prototype.enable()">
{$MOD.LBL_ENABLE_NOTIFICATIONS}
</button>
</slot>
</div>
<div class="bottom-dotted-border"></div>
</div>
<div class="right-col d-flex flex-column" >
<div class="row-label"><slot>{$MOD.LBL_SNOOZE_TIMER}:</slot></div>
<div class="row-bottom flex-grow-1"><select tabindex='12' name="snooze_alert_timer">{$SNOOZE_ALERT_TIMER}</select></div>
<div class="bottom-dotted-border"></div>
</div>
</div>
<!--Second row ends here-->
<div class="row-container">
<div class="left-col d-flex flex-column">
<div class="row-label"><slot>{$MOD.LBL_USE_REAL_NAMES}:</slot>&nbsp;{sugar_help text=$MOD.LBL_USE_REAL_NAMES_DESC }</div>
<div class="row-bottom flex-grow-1"><slot style="line-height: 2.3"><input style="margin-top: -1em;" tabindex='12' type="checkbox" name="use_real_names" {$USE_REAL_NAMES}></slot></div>
<div class="bottom-dotted-border"></div>
</div>
<div class="right-col d-flex flex-column">
<div class="row-label"><slot>{$MOD.LBL_MAILMERGE}:</slot>&nbsp;{sugar_help text=$MOD.LBL_MAILMERGE_TEXT }</div>
<div class="row-bottom flex-grow-1">
<slot style="line-height: 1"><input style="margin-top: -1em;" tabindex='12' name='mailmerge_on' class="checkbox" type="checkbox" {$MAILMERGE_ON}>
</slot>
</div>
<div class="bottom-dotted-border"></div>
</div>
</div>
<!--{if !empty($EXTERNAL_AUTH_CLASS) && !empty($IS_ADMIN)}-->
<div class="row-container">
<div>{capture name=SMARTY_LBL_EXTERNAL_AUTH_ONLY}&nbsp;{$MOD.LBL_EXTERNAL_AUTH_ONLY} {$EXTERNAL_AUTH_CLASS_1}{/capture}</div>
<div class="left-col d-flex flex-column">
<div class="row-label"><slot>{$EXTERNAL_AUTH_CLASS} {$MOD.LBL_ONLY}:
</slot>&nbsp;{sugar_help text=$smarty.capture.SMARTY_LBL_EXTERNAL_AUTH_ONLY}</div>
<div class="row-bottom"> <input type='hidden' value='0' name='external_auth_only'><input type='checkbox' value='1'
name='external_auth_only' {$EXTERNAL_AUTH_ONLY_CHECKED}></div>
<div class="bottom-dotted-border"></div>
</div>
</div>
<!--{/if}-->
</div><!--row user-->
</div>
<!-- User Settings Ends here -->
<div id="locale" style="display:{$HIDE_FOR_GROUP_AND_PORTAL}">
<div>
<h4>
<slot>{$MOD.LBL_USER_LOCALE}</slot>
</h4>
</div>
<div class="row-user">
<div class="row-container">
<div class="left-col">
<div class="row-label">
<slot>{$MOD.LBL_DATE_FORMAT}:</slot>&nbsp;{sugar_help text=$MOD.LBL_DATE_FORMAT_TEXT }</div>
<div class="row-bottom">
<slot><select tabindex='14' name='dateformat'>{$DATEOPTIONS}</select></slot>
</div>
<div class="bottom-dotted-border"></div>
</div>
<div class="right-col">
<div class="row-label">
<slot>{$MOD.LBL_CURRENCY}:</slot>&nbsp;{sugar_help text=$MOD.LBL_CURRENCY_TEXT }</div>
<div class="row-bottom">
<slot>
<select tabindex='14' id='currency_select' name='currency'
onchange='setSymbolValue(this.options[this.selectedIndex].value);setSigDigits();'>{$CURRENCY}</select>
<input type="hidden" id="symbol" value="">
</slot>
</div>
<div class="bottom-dotted-border"></div>
</div>
</div>
<div class="row-container">
<div class="left-col">
<div class="row-label">
<slot>{$MOD.LBL_TIME_FORMAT}:</slot>&nbsp;{sugar_help text=$MOD.LBL_TIME_FORMAT_TEXT }</div>
<div class="row-bottom">
<slot><select tabindex='14' name='timeformat'>{$TIMEOPTIONS}</select></slot>
</div>
<div class="bottom-dotted-border"></div>
</div>
<div class="right-col">
<div class="row-label">
<slot>{$MOD.LBL_CURRENCY_SIG_DIGITS}:</slot>
</div>
<div class="row-bottom">
<slot>
<select id='sigDigits' onchange='setSigDigits(this.value);'
name='default_currency_significant_digits'>{$sigDigits}</select>
</slot>
</div>
<div class="bottom-dotted-border"></div>
</div>
</div>
<div class="row-container">
<div class="left-col">
<div class="row-label">
<slot>{$MOD.LBL_TIMEZONE}:</slot>&nbsp;{sugar_help text=$MOD.LBL_TIMEZONE_TEXT }</div>
<div class="row-bottom">
<slot><select tabindex='14'
name='timezone'>{html_options options=$TIMEZONEOPTIONS selected=$TIMEZONE_CURRENT}</select>
</slot>
</div>
<div class="bottom-dotted-border"></div>
</div>
<div class="right-col">
<div class="row-label">
<slot>
{$MOD.LBL_LOCALE_EXAMPLE_NAME_FORMAT}:
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
{if ($IS_ADMIN)}
<div class="row-label">
<slot>{$MOD.LBL_PROMPT_TIMEZONE}:</slot>&nbsp;{sugar_help text=$MOD.LBL_PROMPT_TIMEZONE_TEXT }
</div>
<div class="row-bottom">
<slot><input type="checkbox" tabindex='14' class="checkbox" name="ut" value="0" {$PROMPTTZ}>
</div>
{else}
<div>
<slot></slot>
</div>
</div>
<slot></slot>
</div>
{/if}
<div class="bottom-dotted-border"></div>
</div>
<div class="right-col">
<div class="row-label">
<slot>{$MOD.LBL_NUMBER_GROUPING_SEP}:
</slot>&nbsp;{sugar_help text=$MOD.LBL_NUMBER_GROUPING_SEP_TEXT }</div>
<div class="row-bottom">
<slot>
<input tabindex='14' name='num_grp_sep' id='default_number_grouping_seperator'
type='text' maxlength='1' size='1' value='{$NUM_GRP_SEP}'
onkeydown='setSigDigits();' onkeyup='setSigDigits();'>
</slot>
</div>
<div class="bottom-dotted-border"></div>
</div>
</div>
{capture name=SMARTY_LOCALE_NAME_FORMAT_DESC}&nbsp;{$MOD.LBL_LOCALE_NAME_FORMAT_DESC}{/capture}
<div class="row-container">
<div class="left-col">
<div class="row-label"> {$MOD.LBL_LOCALE_DEFAULT_NAME_FORMAT}
:&nbsp;{sugar_help text=$smarty.capture.SMARTY_LOCALE_NAME_FORMAT_DESC }</div>
<div class="row-bottom">
<slot><select tabindex='14' id="default_locale_name_format" name="default_locale_name_format"
selected="{$default_locale_name_format}">{$NAMEOPTIONS}</select></slot>
</div>
<div class="bottom-dotted-border"></div>
</div>
<div class="right-col">
<div class="row-label">
<slot>{$MOD.LBL_DECIMAL_SEP}:</slot>&nbsp;{sugar_help text=$MOD.LBL_DECIMAL_SEP_TEXT }
</div>
<div class="row-bottom">
<slot>
<input tabindex='14' name='dec_sep' id='default_decimal_seperator'
type='text' maxlength='1' size='1' value='{$DEC_SEP}'
onkeydown='setSigDigits();' onkeyup='setSigDigits();'>
</slot>
</div>
<div class="bottom-dotted-border"></div>
</div>
</div>
</div>
</div>
<div id="calendar_options" style="display:{$HIDE_FOR_GROUP_AND_PORTAL}">
<div>
<h4>
<slot>{$MOD.LBL_CALENDAR_OPTIONS}</slot>
</h4>
</div>
<div class="row-user">
<div class="row-container">
<div style="width:100%;" class="row-left">
<div class="row-label">
<slot>{$MOD.LBL_PUBLISH_KEY}:</slot>&nbsp;{sugar_help text=$MOD.LBL_CHOOSE_A_KEY}</div>
<div class="row-bottom">
<slot><input id='calendar_publish_key' name='calendar_publish_key' tabindex='17' size='25'
maxlength='36' type="text" value="{$CALENDAR_PUBLISH_KEY}"></slot>
</div>
<div class="bottom-dotted-border"></div>
</div>
</div>
<div class="row-container">
<div style="width:100%;" class="row-left">
<div class="row-label">
<slot>
<nobr>{$MOD.LBL_YOUR_PUBLISH_URL|strip_semicolon}:</nobr>
</slot>
</div>
<div class="row-bottom">
<span class="calendar_publish_ok">{$CALENDAR_PUBLISH_URL}</span>
<span class="calendar_publish_none" style="display: none">{$MOD.LBL_NO_KEY}</span>
</div>
<div class="bottom-dotted-border"></div>
</div>
</div>
<div class="row-container">
<div style="width:100%;" class="row-left">
<div class="row-label">
<slot>{$MOD.LBL_SEARCH_URL|strip_semicolon}:</slot>
</div>
<div class="row-bottom">
<span class="calendar_publish_ok">{$CALENDAR_SEARCH_URL}</span>
<span class="calendar_publish_none" style="display: none">{$MOD.LBL_NO_KEY}</span>
</div>
<div class="bottom-dotted-border"></div>
</div>
</div>
<div class="row-container">
<div style="width:100%;" class="row-left">
<div class="row-label">
<slot>{$MOD.LBL_ICAL_PUB_URL|strip_semicolon}: {sugar_help text=$MOD.LBL_ICAL_PUB_URL_HELP}</slot>
</div>
<div class="row-bottom">
<span class="calendar_publish_ok">{$CALENDAR_ICAL_URL}</span>
<span class="calendar_publish_none" style="display: none">{$MOD.LBL_NO_KEY}</span>
</div>
<div class="bottom-dotted-border"></div>
</div>
</div>
<div class="row-container">
<div style="width:100%;" class="row-left">
<div class="row-label">
<slot>{$MOD.LBL_FDOW}:</slot>&nbsp;{sugar_help text=$MOD.LBL_FDOW_TEXT}
</div>
<div class="row-bottom">
<slot>
<select tabindex='14'
name='fdow'>{html_options options=$FDOWOPTIONS selected=$FDOWCURRENT}</select>
</slot>
</div>
<div class="bottom-dotted-border" style="margin-bottom: 1em;"></div>
</div>
</div>
</div>
</div>
<div id="google_options" style="display:{$HIDE_IF_GAUTH_UNCONFIGURED}">
<table width="100%" border="0" cellspacing="1" cellpadding="0" class="edit view">
<tr>
<th align="left" scope="row" colspan="4"><h4>{$MOD.LBL_GOOGLE_API_SETTINGS}</h4></th>
</tr>
<tr>
<td width="17%" scope="row">
<slot>{$MOD.LBL_GOOGLE_API_TOKEN}:</slot>&nbsp;{sugar_help text=$MOD.LBL_GOOGLE_API_TOKEN_HELP}
</td>
<td width="20%">
<slot>Current API Token is: <span style="color:{$GOOGLE_API_TOKEN_COLOR}">{$GOOGLE_API_TOKEN}</span>
&nbsp;&nbsp;<input style="display:{$GOOGLE_API_TOKEN_ENABLE_NEW}" class="btn btn-primary btn-sm"
id="google_gettoken" type="button" value="{$GOOGLE_API_TOKEN_BTN}"
onclick="window.open('{$GOOGLE_API_TOKEN_NEW_URL}', '_blank')"/></slot>
</td>
<td width="63%">
<slot>&nbsp;</slot>
</td>
</tr>
<tr>
<td width="17%" scope="row">
<slot>{$MOD.LBL_GSYNC_CAL}:</slot>
</td>
<td>
<slot><input tabindex='12' name='gsync_cal' class="checkbox" type="checkbox" {$GSYNC_CAL}></slot>
</td>
</tr>
</table>
</div>
</div>
{if $ID}
<div id="eapm_area" style='display:{$HIDE_FOR_GROUP_AND_PORTAL};' class="user-tab-content">
<div style="text-align:center; width: 100%">{sugar_getimage name="loading"}</div>
</div>
{/if}
<div class="user-tab-content">
<div id="subthemes" style="display:{$HIDE_FOR_GROUP_AND_PORTAL}">
<div>
<h4>
<slot>{$MOD.LBL_LAYOUT_OPTIONS}</slot>
</h4>
</div>
{if $SUBTHEMES}
<div class="row-user layout">
<div class="row-container">
<div class="full-row">
<div class="row-label">{$MOD.LBL_SUBTHEME}:</div>
<div class="row-bottom"> {html_options name=subtheme options=$SUBTHEMES selected=$SUBTHEME}</div>
<div class="bottom-dotted-border"></div>
</div>
</div>
</div>
{/if}
<div class="row-user layout">
<div class="row-container">
<div class="full-row" id="use_group_tabs_row" style="display: {$DISPLAY_GROUP_TAB};">
<div class="row-label">{$MOD.LBL_USE_GROUP_TABS}
{sugar_help text=$MOD.LBL_NAVIGATION_PARADIGM_DESCRIPTION }</div>
<div class="row-bottom"><input name="use_group_tabs" type="hidden" value="m"><input
id="use_group_tabs"
type="checkbox"
name="use_group_tabs" {$USE_GROUP_TABS}
tabindex='12' value="gm"></div>
<div class="bottom-dotted-border"></div>
</div>
</div>
</div>
<div class="row-user">
<div class="row-container" style="display: block;">
<div>{$TAB_CHOOSER}</div>
</div>
<div class="row-container">
<div class="left-col" style="margin-right: 0;">
<div class="row-label">
{$MOD.LBL_SORT_MODULES}
{sugar_help text=$MOD.LBL_SORT_MODULES_DESCRIPTION }
</div>
<div class="row-bottom"><input class="subthemelayout_options_checkbox" type="checkbox"
name="sort_modules_by_name" {$SORT_MODULES_BY_NAME} tabindex='13'>
</div>
<div class="bottom-dotted-border"></div>
</div>
<div class="right-col" style="padding-left: 1em;">
<div class="row-label">
{$MOD.LBL_SUBPANEL_TABS}
{sugar_help text=$MOD.LBL_SUBPANEL_TABS_DESCRIPTION }
</div>
<div class="row-bottom"><input class="subthemelayout_options_checkbox" type="checkbox"
name="user_subpanel_tabs" {$SUBPANEL_TABS}
tabindex='13'></div>
<div class="bottom-dotted-border"></div>
</div>
</div>
<div class="row-container">
<div class="left-col">
<div class="row-label">{$MOD.LBL_COUNT_COLLAPSED_SUBPANELS}
{sugar_help text=$MOD.LBL_COUNT_COLLAPSED_SUBPANELS_DESCRIPTION }
</div>
<div class="row-bottom"><input class="subthemelayout_options_checkbox" type="checkbox"
name="user_count_collapsed_subpanels" {$COUNT_COLLAPSED_SUBPANELS}
tabindex='13'></div>
<div class="bottom-dotted-border"></div>
</div>
</div>
<div class="row-container load-more">
<div class="left-col">
<div class="row-label">{$MOD.LBL_SET_SUBPANEL_PAGINATION_TYPE}: </div>
<div>
<select name="subpanel_pagination_type">{$subpanel_pagination_type}</select>
</div>
<div class="row-label">{$MOD.LBL_SET_LISTVIEW_PAGINATION_TYPE}: </div>
<div>
<select name="listview_pagination_type">{$listview_pagination_type}</select>
</div>
<div class="row-label">{$MOD.LBL_SET_RECORD_MODAL_PAGINATION_TYPE}: </div>
<div>
<select name="record_modal_pagination_type">{$record_modal_pagination_type}</select>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
<script type="text/javascript">

    var mail_smtpport = '{$MAIL_SMTPPORT}';
    var mail_smtpssl = '{$MAIL_SMTPSSL}';
    {literal}
    EmailMan = {};

    function Admin_check() {
        if (('{/literal}{$IS_FOCUS_ADMIN}{literal}') && document.getElementById('is_admin').value == '0') {
            r = confirm('{/literal}{$MOD.LBL_CONFIRM_REGULAR_USER}{literal}');
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
    {/literal}
</script>
{$JAVASCRIPT}
{literal}
<script type="text/javascript" language="Javascript">
    {/literal}
    {$getNameJs}
    {$getNumberJs}
    currencies = {$currencySymbolJSON};
    themeGroupList = {$themeGroupListJSON};

    onUserEditView();


</script>
</form>
<div id="testOutboundDialog" class="yui-hidden">
<div id="testOutbound">
<form>
<table width="100%" border="0" cellspacing="0" cellpadding="0" class="edit view">
<tr>
<td scope="row">
{$APP.LBL_EMAIL_SETTINGS_FROM_TO_EMAIL_ADDR}
<span class="required">
{$APP.LBL_REQUIRED_SYMBOL}
</span>
</td>
<td>
<input type="text" id="outboundtest_from_address" name="outboundtest_from_address" size="35"
maxlength="64" value="{$TEST_EMAIL_ADDRESS}">
</td>
</tr>
<tr>
<td scope="row" colspan="2">
<input type="button" class="button" value="   {$APP.LBL_EMAIL_SEND}   "
onclick="sendTestEmail();">&nbsp;
<input type="button" class="button" value="   {$APP.LBL_CANCEL_BUTTON_LABEL}   "
onclick="EmailMan.testOutboundDialog.hide();">&nbsp;
</td>
</tr>
</table>
</form>
</div>
</div>
{literal}
<style>
.actionsContainer.footer td {
height: 120px;
vertical-align: top;
}
</style>
{/literal}
<table width="100%" cellpadding="0" cellspacing="0" border="0" class="actionsContainer footer">
<tr>
<td class="actionbutton-footer">
{sugar_action_menu id="userEditActions" class="clickMenu fancymenu" buttons=$ACTION_BUTTON_FOOTER flat=true}
</td>
<td align="right" nowrap>
<span class="required">{$APP.LBL_REQUIRED_SYMBOL}</span> {$APP.NTC_REQUIRED}
</td>
</tr>
</table>
{if $showEmailSettingsPopup}
<script>
    {literal}
    $(function() {
        SUGAR.email2.settings.showSettings();
    });
    {/literal}
</script>
{/if}
<script type="text/javascript">
YAHOO.util.Event.onContentReady("EditView",
    function () {ldelim} initEditView(document.forms.EditView) {rdelim});
//window.setTimeout(, 100);
window.onbeforeunload = function () {ldelim} return disableOnUnloadEditView(); {rdelim};
// bug 55468 -- IE is too aggressive with onUnload event
if ($.browser.msie) {ldelim}
$(document).ready(function() {ldelim}
    $(".collapseLink,.expandLink").click(function (e) {ldelim} e.preventDefault(); {rdelim});
  {rdelim});
{rdelim}
</script>
{literal}
<script type="text/javascript">

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

    </script>
{/literal}{literal}
<script type="text/javascript">
addForm('EditView');addToValidate('EditView', 'user_name', 'user_name', true,'{/literal}{sugar_translate label='LBL_USER_NAME' module='Users' for_js=true}{literal}' );
addToValidate('EditView', 'user_hash', 'varchar', false,'{/literal}{sugar_translate label='LBL_USER_HASH' module='Users' for_js=true}{literal}' );
addToValidate('EditView', 'system_generated_password', 'bool', true,'{/literal}{sugar_translate label='LBL_SYSTEM_GENERATED_PASSWORD' module='Users' for_js=true}{literal}' );
addToValidate('EditView', 'pwd_last_changed_date', 'date', false,'Password Last Changed' );
addToValidate('EditView', 'authenticate_id', 'varchar', false,'{/literal}{sugar_translate label='LBL_AUTHENTICATE_ID' module='Users' for_js=true}{literal}' );
addToValidate('EditView', 'sugar_login', 'bool', false,'{/literal}{sugar_translate label='LBL_SUITE_LOGIN' module='Users' for_js=true}{literal}' );
addToValidate('EditView', 'first_name', 'name', false,'{/literal}{sugar_translate label='LBL_FIRST_NAME' module='Users' for_js=true}{literal}' );
addToValidate('EditView', 'last_name', 'name', true,'{/literal}{sugar_translate label='LBL_LAST_NAME' module='Users' for_js=true}{literal}' );
addToValidate('EditView', 'full_name', 'name', false,'{/literal}{sugar_translate label='LBL_NAME' module='Users' for_js=true}{literal}' );
addToValidate('EditView', 'name', 'varchar', false,'{/literal}{sugar_translate label='LBL_NAME' module='Users' for_js=true}{literal}' );
addToValidate('EditView', 'is_admin', 'bool', false,'{/literal}{sugar_translate label='LBL_IS_ADMIN' module='Users' for_js=true}{literal}' );
addToValidate('EditView', 'external_auth_only', 'bool', false,'{/literal}{sugar_translate label='LBL_EXT_AUTHENTICATE' module='Users' for_js=true}{literal}' );
addToValidate('EditView', 'receive_notifications', 'bool', false,'{/literal}{sugar_translate label='LBL_RECEIVE_NOTIFICATIONS' module='Users' for_js=true}{literal}' );
addToValidate('EditView', 'description', 'text', false,'{/literal}{sugar_translate label='LBL_DESCRIPTION' module='Users' for_js=true}{literal}' );
addToValidate('EditView', 'date_entered_date', 'date', true,'Date Entered' );
addToValidate('EditView', 'date_modified_date', 'date', true,'Date Modified' );
addToValidate('EditView', 'modified_user_id', 'assigned_user_name', false,'{/literal}{sugar_translate label='LBL_MODIFIED_BY_ID' module='Users' for_js=true}{literal}' );
addToValidate('EditView', 'modified_by_name', 'varchar', false,'{/literal}{sugar_translate label='LBL_MODIFIED_BY' module='Users' for_js=true}{literal}' );
addToValidate('EditView', 'created_by', 'assigned_user_name', false,'{/literal}{sugar_translate label='LBL_ASSIGNED_TO' module='Users' for_js=true}{literal}' );
addToValidate('EditView', 'created_by_name', 'varchar', false,'{/literal}{sugar_translate label='LBL_CREATED_BY_NAME' module='Users' for_js=true}{literal}' );
addToValidate('EditView', 'title', 'varchar', false,'{/literal}{sugar_translate label='LBL_TITLE' module='Users' for_js=true}{literal}' );
addToValidate('EditView', 'photo', 'image', false,'{/literal}{sugar_translate label='LBL_PHOTO' module='Users' for_js=true}{literal}' );
addToValidate('EditView', 'department', 'varchar', false,'{/literal}{sugar_translate label='LBL_DEPARTMENT' module='Users' for_js=true}{literal}' );
addToValidate('EditView', 'phone_home', 'phone', false,'{/literal}{sugar_translate label='LBL_HOME_PHONE' module='Users' for_js=true}{literal}' );
addToValidate('EditView', 'phone_mobile', 'phone', false,'{/literal}{sugar_translate label='LBL_MOBILE_PHONE' module='Users' for_js=true}{literal}' );
addToValidate('EditView', 'phone_work', 'phone', false,'{/literal}{sugar_translate label='LBL_WORK_PHONE' module='Users' for_js=true}{literal}' );
addToValidate('EditView', 'phone_other', 'phone', false,'{/literal}{sugar_translate label='LBL_OTHER_PHONE' module='Users' for_js=true}{literal}' );
addToValidate('EditView', 'phone_fax', 'phone', false,'{/literal}{sugar_translate label='LBL_FAX_PHONE' module='Users' for_js=true}{literal}' );
addToValidate('EditView', 'status', 'enum', true,'{/literal}{sugar_translate label='LBL_STATUS' module='Users' for_js=true}{literal}' );
addToValidate('EditView', 'address_street', 'varchar', false,'{/literal}{sugar_translate label='LBL_ADDRESS_STREET' module='Users' for_js=true}{literal}' );
addToValidate('EditView', 'address_city', 'varchar', false,'{/literal}{sugar_translate label='LBL_ADDRESS_CITY' module='Users' for_js=true}{literal}' );
addToValidate('EditView', 'address_state', 'varchar', false,'{/literal}{sugar_translate label='LBL_ADDRESS_STATE' module='Users' for_js=true}{literal}' );
addToValidate('EditView', 'address_country', 'varchar', false,'{/literal}{sugar_translate label='LBL_ADDRESS_COUNTRY' module='Users' for_js=true}{literal}' );
addToValidate('EditView', 'address_postalcode', 'varchar', false,'{/literal}{sugar_translate label='LBL_ADDRESS_POSTALCODE' module='Users' for_js=true}{literal}' );
addToValidate('EditView', 'UserType', 'enum', false,'{/literal}{sugar_translate label='LBL_USER_TYPE' module='Users' for_js=true}{literal}' );
addToValidate('EditView', 'deleted', 'bool', false,'{/literal}{sugar_translate label='LBL_DELETED' module='Users' for_js=true}{literal}' );
addToValidate('EditView', 'portal_only', 'bool', false,'{/literal}{sugar_translate label='LBL_PORTAL_ONLY_USER' module='Users' for_js=true}{literal}' );
addToValidate('EditView', 'show_on_employees', 'bool', false,'{/literal}{sugar_translate label='LBL_SHOW_ON_EMPLOYEES' module='Users' for_js=true}{literal}' );
addToValidate('EditView', 'employee_status', 'varchar', false,'{/literal}{sugar_translate label='LBL_EMPLOYEE_STATUS' module='Users' for_js=true}{literal}' );
addToValidate('EditView', 'messenger_id', 'varchar', false,'{/literal}{sugar_translate label='LBL_MESSENGER_ID' module='Users' for_js=true}{literal}' );
addToValidate('EditView', 'messenger_type', 'enum', false,'{/literal}{sugar_translate label='LBL_MESSENGER_TYPE' module='Users' for_js=true}{literal}' );
addToValidate('EditView', 'reports_to_id', 'id', false,'{/literal}{sugar_translate label='LBL_REPORTS_TO_ID' module='Users' for_js=true}{literal}' );
addToValidate('EditView', 'reports_to_name', 'relate', false,'{/literal}{sugar_translate label='LBL_REPORTS_TO_NAME' module='Users' for_js=true}{literal}' );
addToValidate('EditView', 'email1', 'varchar', true,'{/literal}{sugar_translate label='LBL_EMAIL' module='Users' for_js=true}{literal}' );
addToValidate('EditView', 'email_link_type', 'enum', false,'{/literal}{sugar_translate label='LBL_EMAIL_LINK_TYPE' module='Users' for_js=true}{literal}' );
addToValidate('EditView', 'editor_type', 'enum', false,'{/literal}{sugar_translate label='LBL_EDITOR_TYPE' module='Users' for_js=true}{literal}' );
addToValidate('EditView', 'is_group', 'bool', false,'{/literal}{sugar_translate label='LBL_GROUP_USER' module='Users' for_js=true}{literal}' );
addToValidate('EditView', 'c_accept_status_fields', 'relate', false,'{/literal}{sugar_translate label='LBL_LIST_ACCEPT_STATUS' module='Users' for_js=true}{literal}' );
addToValidate('EditView', 'm_accept_status_fields', 'relate', false,'{/literal}{sugar_translate label='LBL_LIST_ACCEPT_STATUS' module='Users' for_js=true}{literal}' );
addToValidate('EditView', 'accept_status_id', 'varchar', false,'{/literal}{sugar_translate label='LBL_LIST_ACCEPT_STATUS' module='Users' for_js=true}{literal}' );
addToValidate('EditView', 'accept_status_name', 'enum', false,'{/literal}{sugar_translate label='LBL_LIST_ACCEPT_STATUS' module='Users' for_js=true}{literal}' );
addToValidate('EditView', 'securitygroup_noninher_fields', 'relate', false,'{/literal}{sugar_translate label='LBL_USER_NAME' module='Users' for_js=true}{literal}' );
addToValidate('EditView', 'securitygroup_noninherit_id', 'varchar', false,'{/literal}{sugar_translate label='LBL_securitygroup_noninherit_id' module='Users' for_js=true}{literal}' );
addToValidate('EditView', 'securitygroup_noninheritable', 'bool', false,'{/literal}{sugar_translate label='LBL_SECURITYGROUP_NONINHERITABLE' module='Users' for_js=true}{literal}' );
addToValidate('EditView', 'securitygroup_primary_group', 'bool', false,'{/literal}{sugar_translate label='LBL_PRIMARY_GROUP' module='Users' for_js=true}{literal}' );
addToValidate('EditView', 'factor_auth', 'bool', false,'{/literal}{sugar_translate label='LBL_FACTOR_AUTH' module='Users' for_js=true}{literal}' );
addToValidate('EditView', 'factor_auth_interface', 'enum', false,'{/literal}{sugar_translate label='LBL_FACTOR_AUTH_INTERFACE' module='Users' for_js=true}{literal}' );
addToValidateBinaryDependency('EditView', 'assigned_user_name', 'alpha', false,'{/literal}{sugar_translate label='ERR_SQS_NO_MATCH_FIELD' module='Users' for_js=true}{literal}: {/literal}{sugar_translate label='LBL_ASSIGNED_TO' module='Users' for_js=true}{literal}', 'assigned_user_id' );
addToValidateBinaryDependency('EditView', 'reports_to_name', 'alpha', false,'{/literal}{sugar_translate label='ERR_SQS_NO_MATCH_FIELD' module='Users' for_js=true}{literal}: {/literal}{sugar_translate label='LBL_REPORTS_TO_NAME' module='Users' for_js=true}{literal}', 'reports_to_id' );
</script><script language="javascript">if(typeof sqs_objects == 'undefined'){var sqs_objects = new Array;}sqs_objects['EditView_reports_to_name']={"form":"EditView","method":"get_user_array","field_list":["user_name","id"],"populate_list":["reports_to_name","reports_to_id"],"required_list":["reports_to_id"],"conditions":[{"name":"user_name","op":"like_custom","end":"%","value":""}],"limit":"30","no_match_text":"No Match"};</script>{/literal}
