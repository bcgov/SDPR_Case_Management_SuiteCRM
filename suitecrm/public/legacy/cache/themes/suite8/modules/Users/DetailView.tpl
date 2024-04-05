

<script language="javascript">
    {literal}
    SUGAR.util.doWhen(function () {
        return $("#contentTable").length == 0;
    }, SUGAR.themes.actionMenu);
    {/literal}
</script>
<table cellpadding="0" cellspacing="0" border="0" width="100%" id="">
<tr>
<td class="buttons" align="left" NOWRAP width="80%">
<div class="actionsContainer">
<form action="index.php" method="post" name="DetailView" id="formDetailView">
<input type="hidden" name="module" value="{$module}">
<input type="hidden" name="record" value="{$fields.id.value}">
<input type="hidden" name="return_action">
<input type="hidden" name="return_module">
<input type="hidden" name="return_id">
<input type="hidden" name="module_tab">
<input type="hidden" name="isDuplicate" value="false">
<input type="hidden" name="offset" value="{$offset}">
<input type="hidden" name="action" value="EditView">
<input type="hidden" name="sugar_body_only">
{if !$config.enable_action_menu}
<div class="buttons">
{if $bean->aclAccess("edit")}
<input title="{$APP.LBL_EDIT_BUTTON_TITLE}"
accessKey="{$APP.LBL_EDIT_BUTTON_KEY}"
name="Edit"
id="edit_button"
class="button primary"
type="button"
value="{$APP.LBL_EDIT_BUTTON_LABEL}"
onclick="window.location.href='index.php?module=Users&action=EditView&record={$id}&return_module=Users&return_action=DetailView&return_id={$id}'"/>
{/if}
<input id="duplicate_button" title="Duplicate" accessKey="u" class="button" onclick="var _form = document.getElementById('formDetailView');_form.return_module.value='Users'; _form.return_action.value='DetailView'; _form.isDuplicate.value=true; _form.action.value='EditView';window.location.href='index.php?' + (new URLSearchParams(new FormData(_form)).toString());" type="button" name="Duplicate" value="Duplicate"/>
<input name="delete" id="delete_button" title="Delete" type="button" class="button" onclick="confirmDelete();" value="Delete"/>
<input title="Reset User Preferences" class="button" LANGUAGE="javascript" onclick="if(confirm('Are you sure you want reset all of the preferences for this user?')) window.location='index.php?module=Users&action=resetPreferences&reset_preferences=true&record={$fields.id.value}';" type="button" name="password" value="Reset User Preferences"/>
<input title="Reset Homepage" class="button" LANGUAGE="javascript" onclick="if(confirm('Are you sure you want reset your Homepage?')) window.location='index.php?module=Users&action=DetailView&reset_homepage=true&record={$fields.id.value}';" type="button" name="password" value="Reset Homepage"/>
{if $bean->aclAccess("detail")}{if !empty($fields.id.value) && $isAuditEnabled}<input id="btn_view_change_log" title="{$APP.LNK_VIEW_CHANGE_LOG}" class="button" onclick='open_popup("Audit", "600", "400", "&record={$fields.id.value}&module_name=Users", true, false,  {ldelim} "call_back_function":"set_return","form_name":"EditView","field_to_name_array":[] {rdelim} ); return false;' type="button" value="{$APP.LNK_VIEW_CHANGE_LOG}">{/if}{/if}
</div>
{/if}
</form>
</div>
</td>
<td align="right" width="20%" class="buttons">{$ADMIN_EDIT}
</td>
</tr>
</table>
{sugar_include include=$includes}
<form action="index.php" method="post" name="DetailView" id="formDetailView">
<input type="hidden" name="module" value="{$module}">
<input type="hidden" name="record" value="{$fields.id.value}">
<input type="hidden" name="current_user_id" value="{$CURRENT_USER_ID}">
<input type="hidden" name="return_action">
<input type="hidden" name="return_module">
<input type="hidden" name="return_id">
<input type="hidden" name="module_tab">
<input type="hidden" name="isDuplicate" value="false">
<input type="hidden" name="offset" value="{$offset}">
<input type="hidden" name="action" value="EditView">
<input type="hidden" name="sugar_body_only">
</form>
<div class="detail-view">

<ul class="nav nav-tabs">


<li role="presentation" class="active">
<a id="tab0" data-toggle="tab" class="hidden-xs">
{sugar_translate label='LBL_USER_INFORMATION' module='Users'}
</a>
<a id="xstab0" href="#" class="visible-xs first-tab-xs dropdown-toggle" data-toggle="dropdown">
{sugar_translate label='LBL_USER_INFORMATION' module='Users'}
</a>
<ul id="first-tab-menu-xs" class="dropdown-menu">
<li role="presentation">
<a id="tab0" data-toggle="tab" onclick="changeFirstTab(this, 'tab-content-0');">
{sugar_translate label='LBL_USER_INFORMATION' module='Users'}
</a>
</li>
<li role="presentation">
<a id="tab1" data-toggle="tab" onclick="changeFirstTab(this, 'tab-content-1');">
{sugar_translate label='LBL_EMPLOYEE_INFORMATION' module='Users'}
</a>
</li>
<li role="presentation">
<a data-toggle="tab" id="tab0" href="#">Advanced</a>
</li>
{if $SHOW_ROLES == true}
<li role="presentation">
<a data-toggle="tab" id="tab0" href="#">Access</a>
</li>
{/if}
</ul>
</li>


<li role="presentation" class="hidden-xs ">
<a data-toggle="tab" id="tab1" href="#">Advanced</a>
</li>
{if $SHOW_ROLES}
<li role="presentation" class="hidden-xs ">
<a data-toggle="tab" id="tab2" href="#">Access</a>
</li>
{/if}
{if $config.enable_action_menu}
<li id="tab-actions" class="dropdown">
<a class="dropdown-toggle" data-toggle="dropdown" href="#">ACTIONS<span class="suitepicon suitepicon-action-caret"></span></a>
<ul class="dropdown-menu">
<li>{if $bean->aclAccess("edit")}
<input title="{$APP.LBL_EDIT_BUTTON_TITLE}"
accessKey="{$APP.LBL_EDIT_BUTTON_KEY}"
name="Edit"
id="edit_button"
class="button primary"
type="button"
value="{$APP.LBL_EDIT_BUTTON_LABEL}"
onclick="window.location.href='index.php?module=Users&action=EditView&record={$id}&return_module=Users&return_action=DetailView&return_id={$id}'"/>
{/if}</li>
<li><input id="duplicate_button" title="Duplicate" accessKey="u" class="button" onclick="var _form = document.getElementById('formDetailView');_form.return_module.value='Users'; _form.return_action.value='DetailView'; _form.isDuplicate.value=true; _form.action.value='EditView';window.location.href='index.php?' + (new URLSearchParams(new FormData(_form)).toString());" type="button" name="Duplicate" value="Duplicate"/></li>
<li><input name="delete" id="delete_button" title="Delete" type="button" class="button" onclick="confirmDelete();" value="Delete"/></li>
<li><input title="Reset User Preferences" class="button" LANGUAGE="javascript" onclick="if(confirm('Are you sure you want reset all of the preferences for this user?')) window.location='index.php?module=Users&action=resetPreferences&reset_preferences=true&record={$fields.id.value}';" type="button" name="password" value="Reset User Preferences"/></li>
<li><input title="Reset Homepage" class="button" LANGUAGE="javascript" onclick="if(confirm('Are you sure you want reset your Homepage?')) window.location='index.php?module=Users&action=DetailView&reset_homepage=true&record={$fields.id.value}';" type="button" name="password" value="Reset Homepage"/></li>
<li>{if $bean->aclAccess("detail")}{if !empty($fields.id.value) && $isAuditEnabled}<input id="btn_view_change_log" title="{$APP.LNK_VIEW_CHANGE_LOG}" class="button" onclick='open_popup("Audit", "600", "400", "&record={$fields.id.value}&module_name=Users", true, false,  {ldelim} "call_back_function":"set_return","form_name":"EditView","field_to_name_array":[] {rdelim} ); return false;' type="button" value="{$APP.LNK_VIEW_CHANGE_LOG}">{/if}{/if}</li>
</ul>
</li>
{/if}
</ul>
<div class="clearfix"></div>
<!-- TAB CONTENT USE TABS -->
<div class="tab-content">

<div class="tab-pane-NOBOOTSTRAPTOGGLER active fade in" id='tab-content-0'>





<div class="row detail-view-row">



<div class="col-xs-12 col-sm-6 detail-view-row-item detail-view-bordered" data-field="full_name">


<div class="col-xs-12 col-sm-4 label col-1-label">


{capture name="label" assign="label"}{sugar_translate label='LBL_NAME' module='Users'}{/capture}
{$label|strip_semicolon}:
</div>


<div class="col-xs-12 col-sm-8 detail-view-field d-flex inlineEdit" type="name" field="full_name" >

{if !$fields.full_name.hidden}
{counter name="panelFieldCount" print=false}

{if strlen($fields.full_name.value) <= 0}
{assign var="value" value=$fields.full_name.default_value }
{else}
{assign var="value" value=$fields.full_name.value }
{/if} 
<span class="sugar_field" id="{$fields.full_name.name}">{$fields.full_name.value}</span>
{/if}

<div class="inlineEditIcon col-xs-hidden">
{sugar_getimage name="pencil"}
</div>
</div>
<div class="dotted-border"></div>


</div>




<div class="col-xs-12 col-sm-6 detail-view-row-item detail-view-bordered" data-field="user_name">


<div class="col-xs-12 col-sm-4 label col-2-label">


{capture name="label" assign="label"}{sugar_translate label='LBL_USER_NAME' module='Users'}{/capture}
{$label|strip_semicolon}:
</div>


<div class="col-xs-12 col-sm-8 detail-view-field d-flex inlineEdit" type="user_name" field="user_name" >

{if !$fields.user_name.hidden}
{counter name="panelFieldCount" print=false}

{if strlen($fields.user_name.value) <= 0}
{assign var="value" value=$fields.user_name.default_value }
{else}
{assign var="value" value=$fields.user_name.value }
{/if} 
<span class="sugar_field" id="{$fields.user_name.name}">{$fields.user_name.value}</span>
{/if}

<div class="inlineEditIcon col-xs-hidden">
{sugar_getimage name="pencil"}
</div>
</div>
<div class="dotted-border"></div>


</div>

</div>


<div class="row detail-view-row">



<div class="col-xs-12 col-sm-6 detail-view-row-item detail-view-bordered" data-field="status">


<div class="col-xs-12 col-sm-4 label col-1-label">


{capture name="label" assign="label"}{sugar_translate label='LBL_STATUS' module='Users'}{/capture}
{$label|strip_semicolon}:
</div>


<div class="col-xs-12 col-sm-8 detail-view-field d-flex inlineEdit" type="enum" field="status" >

{if !$fields.status.hidden}
{counter name="panelFieldCount" print=false}


{if is_string($fields.status.options)}
<input type="hidden" class="sugar_field" id="{$fields.status.name}" value="{ $fields.status.options }">
{ $fields.status.options }
{else}
<input type="hidden" class="sugar_field" id="{$fields.status.name}" value="{ $fields.status.value }">
{ $fields.status.options[$fields.status.value]}
{/if}
{/if}

<div class="inlineEditIcon col-xs-hidden">
{sugar_getimage name="pencil"}
</div>
</div>
<div class="dotted-border"></div>


</div>




<div class="col-xs-12 col-sm-6 detail-view-row-item detail-view-bordered" data-field="UserType">


<div class="col-xs-12 col-sm-4 label col-2-label">


{capture name="label" assign="label"}{sugar_translate label='LBL_USER_TYPE' module='Users'}{/capture}
{$label|strip_semicolon}:
</div>


<div class="col-xs-12 col-sm-8 detail-view-field d-flex inlineEdit" type="enum" field="UserType" >

{if !$fields.UserType.hidden}
{counter name="panelFieldCount" print=false}
<span id="UserType" class="sugar_field">{if isset($USER_TYPE_READONLY)}{$USER_TYPE_READONLY}{/if}</span>
{/if}

<div class="inlineEditIcon col-xs-hidden">
{sugar_getimage name="pencil"}
</div>
</div>
<div class="dotted-border"></div>


</div>

</div>


<div class="row detail-view-row">



<div class="col-xs-12 col-sm-12 detail-view-row-item" data-field="photo">


<div class="col-xs-12 col-sm-2 label col-1-label">


{capture name="label" assign="label"}{sugar_translate label='LBL_PHOTO' module='Users'}{/capture}
{$label|strip_semicolon}:
</div>


<div class="col-xs-12 col-sm-10 detail-view-field d-flex inlineEdit" type="image" field="photo" colspan='3'>

{if !$fields.photo.hidden}
{counter name="panelFieldCount" print=false}

<span class="sugar_field" id="{$fields.photo.name}">
{if strlen($fields.photo.value) <= 0}
<img src="" style="max-width: {if !$vardef.width}160{else}200{/if}px;" height="{if !$vardef.height}160{else}50{/if}">
{else}
<img src="index.php?entryPoint=download&id={$fields.id.value}_{$fields.photo.name}{$fields.width.value}&type={$module}" style="max-width: {if !$vardef.width}160{else}200{/if}px;" height="{if !$vardef.height}160{else}50{/if}">
{/if}
</span>
{/if}

<div class="inlineEditIcon col-xs-hidden">
{sugar_getimage name="pencil"}
</div>
</div>
<div class="dotted-border"></div>


</div>

</div>

</div>

<div class="tab-pane-NOBOOTSTRAPTOGGLER fade" id='tab-content-2' >


<div id="settings_suitep" class="users-advanced-settings">
<div class="row detail-view-row">
<h4>{$MOD.LBL_USER_SETTINGS}</h4>
</div>
<div class="row detail-view-row">
<div class="col-xs-12 col-sm-6 detail-view-row-item border-line">
<!-- [hide!!] -->
<!-- DIV inside - colspan != 3 -->
<div class="col-xs-12 col-sm-4 label col-1-label">
<!-- LABEL -->
{$MOD.LBL_RECEIVE_NOTIFICATIONS}
</div>
<!-- /DIV inside  -->
<!-- phone (version 1) -->
<div class="col-xs-12 col-sm-8 detail-view-field">
<!-- simple hidden start -->
<input name='receive_notifications' class="checkbox" tabindex='12' type="checkbox" value="12" {$RECEIVE_NOTIFICATIONS} disabled>
<!-- simple hidden finish -->
</div>
<div class="edit-dotted-border"></div>
</div>
<div class="col-xs-12 col-sm-6 detail-view-row-item">
<!-- [hide!!] -->
<!-- DIV inside - colspan != 3 -->
<div class="col-xs-12 col-sm-4 label col-1-label">
<!-- LABEL -->
{$MOD.LBL_MAILMERGE|strip_semicolon}
</div>
<!-- /DIV inside  -->
<!-- phone (version 1) -->
<div class="col-xs-12 col-sm-8 detail-view-field " type="name" field="name">
<!-- simple hidden start -->
<input tabindex='3' name='mailmerge_on' disabled class="checkbox" type="checkbox" {$MAILMERGE_ON} disabled>
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
{$MOD.LBL_SETTINGS_URL|strip_semicolon}
</div>
<!-- /DIV inside  -->
<!-- phone (version 1) -->
<div class="col-xs-12 col-sm-10 detail-view-field ">
<!-- simple hidden start -->
{$SETTINGS_URL}
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
{$MOD.LBL_EXPORT_DELIMITER|strip_semicolon}
</div>
<!-- /DIV inside  -->
<!-- phone (version 1) -->
<div class="col-xs-12 col-sm-8 detail-view-field " type="name" field="name">
<!-- simple hidden start -->
{$EXPORT_DELIMITER}
<!-- simple hidden finish -->
</div>
<div class="edit-dotted-border"></div>
</div>
<div class="col-xs-12 col-sm-6 detail-view-row-item">
<!-- [hide!!] -->
<!-- DIV inside - colspan != 3 -->
<div class="col-xs-12 col-sm-4 label col-1-label">
<!-- LABEL -->
{$MOD.LBL_EXPORT_CHARSET|strip_semicolon}
</div>
<!-- /DIV inside  -->
<!-- phone (version 1) -->
<div class="col-xs-12 col-sm-8 detail-view-field " type="name" field="name">
<!-- simple hidden start -->
{$EXPORT_CHARSET_DISPLAY}
<!-- simple hidden finish -->
</div>
<div class="edit-dotted-border"></div>
</div>
</div>
{if $DISPLAY_EXTERNAL_AUTH}
<div class="row detail-view-row">
<div class="col-xs-12 col-sm-12 detail-view-row-item border-line">
<!-- [hide!!] -->
<!-- DIV inside - colspan != 3 -->
<div class="col-xs-12 col-sm-2 label col-1-label">
<!-- LABEL -->
{$EXTERNAL_AUTH_CLASS|strip_semicolon}
</div>
<!-- /DIV inside  -->
<!-- phone (version 1) -->
<div class="col-xs-12 col-sm-10 detail-view-field" type="name" field="name">
<!-- simple hidden start -->
<input id="external_auth_only" name="external_auth_only" type="checkbox" class="checkbox" {$EXTERNAL_AUTH_ONLY_CHECKED} disabled>
<!-- simple hidden finish -->
</div>
<div class="edit-dotted-border"></div>
</div>
</div>
{/if}
<div class="row detail-view-row">
<div class="col-xs-12 col-sm-6 detail-view-row-item border-line">
<!-- [hide!!] -->
<!-- DIV inside - colspan != 3 -->
<div class="col-xs-12 col-sm-4 label col-1-label">
<!-- LABEL -->
{$MOD.LBL_REMINDER|strip_semicolon}
</div>
<!-- /DIV inside  -->
<!-- phone (version 1) -->
<div class="col-xs-12 col-sm-8 detail-view-field ">
<!-- simple hidden start -->
{include file="modules/Reminders/tpls/remindersDefaults.tpl"}
<!-- simple hidden finish -->
</div>
</div>
<div class="col-xs-12 col-sm-6 detail-view-row-item">
<!-- [hide!!] -->
<!-- DIV inside - colspan != 3 -->
<div class="col-xs-12 col-sm-4 label col-1-label">
<!-- LABEL -->
{$MOD.LBL_USE_REAL_NAMES|strip_semicolon}
</div>
<!-- /DIV inside  -->
<!-- phone (version 1) -->
<div class="col-xs-12 col-sm-8 detail-view-field " type="name" field="name">
<!-- simple hidden start -->
<input tabindex='3' name='use_real_names' disabled class="checkbox" type="checkbox" {$USE_REAL_NAMES} disabled>
<!-- simple hidden finish -->
</div>
<div class="edit-dotted-border"></div>
</div>
</div>
</div>
<div id='locale_suitep' class="users-locale-settings">
<div class="row detail-view-row">
<h4>{$MOD.LBL_USER_LOCALE}</h4>
</div>
<div class="row detail-view-row">
<div class="col-xs-12 col-sm-6 detail-view-row-item border-line">
<!-- [hide!!] -->
<!-- DIV inside - colspan != 3 -->
<div class="col-xs-12 col-sm-4 label col-1-label">
<!-- LABEL -->
{$MOD.LBL_DATE_FORMAT|strip_semicolon}
</div>
<!-- /DIV inside  -->
<!-- phone (version 1) -->
<div class="col-xs-12 col-sm-8 detail-view-field ">
<!-- simple hidden start -->
{$DATEFORMAT}
<!-- simple hidden finish -->
</div>
<div class="edit-dotted-border"></div>
</div>
<div class="col-xs-12 col-sm-6 detail-view-row-item">
<!-- [hide!!] -->
<!-- DIV inside - colspan != 3 -->
<div class="col-xs-12 col-sm-4 label col-1-label">
<!-- LABEL -->
{$MOD.LBL_TIME_FORMAT|strip_semicolon}
</div>
<!-- /DIV inside  -->
<!-- phone (version 1) -->
<div class="col-xs-12 col-sm-8 detail-view-field " type="name" field="name">
<!-- simple hidden start -->
{$TIMEFORMAT}
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
{$MOD.LBL_TIMEZONE|strip_semicolon}
</div>
<!-- /DIV inside  -->
<!-- phone (version 1) -->
<div class="col-xs-12 col-sm-8 detail-view-field ">
<!-- simple hidden start -->
{$TIMEZONE}
<!-- simple hidden finish -->
</div>
<div class="edit-dotted-border"></div>
</div>
<div class="col-xs-12 col-sm-6 detail-view-row-item">
<!-- [hide!!] -->
<!-- DIV inside - colspan != 3 -->
<div class="col-xs-12 col-sm-4 label col-1-label">
<!-- LABEL -->
{$MOD.LBL_CURRENCY|strip_semicolon}
</div>
<!-- /DIV inside  -->
<!-- phone (version 1) -->
<div class="col-xs-12 col-sm-8 detail-view-field " type="name" field="name">
<!-- simple hidden start -->
{$CURRENCY_DISPLAY}
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
{$MOD.LBL_CURRENCY_SIG_DIGITS|strip_semicolon}
</div>
<!-- /DIV inside  -->
<!-- phone (version 1) -->
<div class="col-xs-12 col-sm-8 detail-view-field ">
<!-- simple hidden start -->
{$CURRENCY_SIG_DIGITS}
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
{$MOD.LBL_NUMBER_GROUPING_SEP|strip_semicolon}
</div>
<!-- /DIV inside  -->
<!-- phone (version 1) -->
<div class="col-xs-12 col-sm-8 detail-view-field ">
<!-- simple hidden start -->
{$NUM_GRP_SEP}
<!-- simple hidden finish -->
</div>
<div class="edit-dotted-border"></div>
</div>
<div class="col-xs-12 col-sm-6 detail-view-row-item">
<!-- [hide!!] -->
<!-- DIV inside - colspan != 3 -->
<div class="col-xs-12 col-sm-4 label col-1-label">
<!-- LABEL -->
{$MOD.LBL_DECIMAL_SEP|strip_semicolon}
</div>
<!-- /DIV inside  -->
<!-- phone (version 1) -->
<div class="col-xs-12 col-sm-8 detail-view-field " type="name" field="name">
<!-- simple hidden start -->
{$DEC_SEP}
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
{$MOD.LBL_LOCALE_DEFAULT_NAME_FORMAT|strip_semicolon}
</div>
<!-- /DIV inside  -->
<!-- phone (version 1) -->
<div class="col-xs-12 col-sm-10 detail-view-field ">
<!-- simple hidden start -->
{$NAME_FORMAT}
<!-- simple hidden finish -->
</div>
<div class="edit-dotted-border"></div>
</div>
</div>
</div>
<div id='calendar_options_suitep'>
<div class="row detail-view-row">
<h4>{$MOD.LBL_CALENDAR_OPTIONS}</h4>
</div>
<div class="row detail-view-row">
<div class="col-xs-12 col-sm-12 detail-view-row-item">
<!-- [hide!!] -->
<!-- DIV inside - colspan != 3 -->
<div class="col-xs-12 col-sm-2 label col-1-label">
<!-- LABEL -->
{$MOD.LBL_PUBLISH_KEY|strip_semicolon}
</div>
<!-- /DIV inside  -->
<!-- phone (version 1) -->
<div class="col-xs-12 col-sm-10 detail-view-field ">
<!-- simple hidden start -->
{$CALENDAR_PUBLISH_KEY}
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
{$MOD.LBL_YOUR_PUBLISH_URL|strip_semicolon}
</div>
<!-- /DIV inside  -->
<!-- phone (version 1) -->
<div class="col-xs-12 col-sm-10 detail-view-field wrap-text" type="name" field="name">
<!-- simple hidden start -->
{if $CALENDAR_PUBLISH_KEY}{$CALENDAR_PUBLISH_URL}{else}{$MOD.LBL_NO_KEY}{/if}
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
{$MOD.LBL_SEARCH_URL|strip_semicolon}
</div>
<!-- /DIV inside  -->
<!-- phone (version 1) -->
<div class="col-xs-12 col-sm-10 detail-view-field wrap-text">
<!-- simple hidden start -->
{if $CALENDAR_PUBLISH_KEY}{$CALENDAR_SEARCH_URL}{else}{$MOD.LBL_NO_KEY}{/if}
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
{$MOD.LBL_ICAL_PUB_URL|strip_semicolon}
</div>
<!-- /DIV inside  -->
<!-- phone (version 1) -->
<div class="col-xs-12 col-sm-10 detail-view-field wrap-text" type="name" field="name">
<!-- simple hidden start -->
{if $CALENDAR_PUBLISH_KEY}{$CALENDAR_ICAL_URL}{else}{$MOD.LBL_NO_KEY}{/if}
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
{$MOD.LBL_FDOW|strip_semicolon}
</div>
<!-- /DIV inside  -->
<!-- phone (version 1) -->
<div class="col-xs-12 col-sm-10 detail-view-field " type="name" field="name">
<!-- simple hidden start -->
{$FDOWDISPLAY}
<!-- simple hidden finish -->
</div>
<div class="edit-dotted-border"></div>
</div>
</div>
</div>
<div id='google_options_suitep' style="display:{$HIDE_IF_GAUTH_UNCONFIGURED}"'>
<div class="row detail-view-row">
<h4>{$MOD.LBL_GOOGLE_API_SETTINGS}</h4>
</div>
<div class="row detail-view-row">
<div class="col-xs-12 col-sm-12 detail-view-row-item">
<!-- [hide!!] -->
<!-- DIV inside - colspan != 3 -->
<div class="col-xs-12 col-sm-2 label col-1-label">
<!-- LABEL -->
{$MOD.LBL_GOOGLE_API_TOKEN}
</div>
<!-- /DIV inside  -->
<!-- phone (version 1) -->
<div class="col-xs-12 col-sm-10 detail-view-field ">
<!-- simple hidden start -->
Current API Token is: <span style="color:{$GOOGLE_API_TOKEN_COLOR}">{$GOOGLE_API_TOKEN}</span>
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
{$MOD.LBL_GSYNC_CAL}
</div>
<!-- /DIV inside  -->
<!-- phone (version 1) -->
<div class="col-xs-12 col-sm-10 detail-view-field ">
<!-- simple hidden start -->
<input class="checkbox" type="checkbox" disabled {$GSYNC_CAL}>
<!-- simple hidden finish -->
</div>
<div class="edit-dotted-border"></div>
</div>
</div>
</div>
<div id="layout_suitep" class="user-layout-settings">
<div class="row detail-view-row">
<h4>{$MOD.LBL_LAYOUT_OPTIONS}</h4>
</div>
<div class="row detail-view-row">
<div class="col-xs-12 col-sm-6 detail-view-row-item border-line">
<!-- [hide!!] -->
<!-- DIV inside - colspan != 3 -->
<div class="col-xs-12 col-sm-4 label col-1-label">
<!-- LABEL -->
{$MOD.LBL_USE_GROUP_TABS}
</div>
<!-- /DIV inside  -->
<!-- phone (version 1) -->
<div class="col-xs-12 col-sm-8 detail-view-field ">
<!-- simple hidden start -->
<input name="use_group_tabs" type="hidden" value="m"><input id="use_group_tabs" type="checkbox" name="use_group_tabs" {$USE_GROUP_TABS} tabindex='12' value="gm" disabled>
<!-- simple hidden finish -->
</div>
<div class="edit-dotted-border"></div>
</div>
<div class="col-xs-12 col-sm-6 detail-view-row-item">
<!-- [hide!!] -->
<!-- DIV inside - colspan != 3 -->
<div class="col-xs-12 col-sm-4 label col-1-label">
<!-- LABEL -->
{$MOD.LBL_MAILMERGE|strip_semicolon}
</div>
<!-- /DIV inside  -->
<!-- phone (version 1) -->
<div class="col-xs-12 col-sm-8 detail-view-field " type="name" field="name">
<!-- simple hidden start -->
<input tabindex='3' name='mailmerge_on' disabled class="checkbox" type="checkbox" {$MAILMERGE_ON} disabled>
<!-- simple hidden finish -->
</div>
<div class="edit-dotted-border"></div>
</div>
</div>
</div>
</div>
{if $SHOW_ROLES}

<div class="tab-pane-NOBOOTSTRAPTOGGLER fade" id='tab-content-3'>
<div class="row detail-view-row">
{$ROLE_HTML}
</div>
</div>
{/if}
</div>

<div class="panel-content">
<div>&nbsp;</div>






<div class="panel panel-default">
<div class="panel-heading panel-heading-collapse">
<a class="collapsed" role="button" data-toggle="collapse" href="#top-panel-0" aria-expanded="false">
<div class="col-xs-10 col-sm-11 col-md-11">
{sugar_translate label='LBL_EMPLOYEE_INFORMATION' module='Users'}
</div>
</a>
</div>
<div class="panel-body panel-collapse collapse" id="top-panel-0">
<div class="tab-content">
<!-- TAB CONTENT -->





<div class="row detail-view-row">



<div class="col-xs-12 col-sm-6 detail-view-row-item detail-view-bordered" data-field="employee_status">


<div class="col-xs-12 col-sm-4 label col-1-label">


{capture name="label" assign="label"}{sugar_translate label='LBL_EMPLOYEE_STATUS' module='Users'}{/capture}
{$label|strip_semicolon}:
</div>


<div class="col-xs-12 col-sm-8 detail-view-field d-flex inlineEdit" type="varchar" field="employee_status" >

{if !$fields.employee_status.hidden}
{counter name="panelFieldCount" print=false}
<span id='employee_status_span'>
{$fields.employee_status.value}
</span>
{/if}

<div class="inlineEditIcon col-xs-hidden">
{sugar_getimage name="pencil"}
</div>
</div>
<div class="dotted-border"></div>


</div>




<div class="col-xs-12 col-sm-6 detail-view-row-item detail-view-bordered" data-field="show_on_employees">


<div class="col-xs-12 col-sm-4 label col-2-label">


{capture name="label" assign="label"}{sugar_translate label='LBL_SHOW_ON_EMPLOYEES' module='Users'}{/capture}
{$label|strip_semicolon}:
</div>


<div class="col-xs-12 col-sm-8 detail-view-field d-flex inlineEdit" type="bool" field="show_on_employees" >

{if !$fields.show_on_employees.hidden}
{counter name="panelFieldCount" print=false}

{if strval($fields.show_on_employees.value) == "1" || strval($fields.show_on_employees.value) == "yes" || strval($fields.show_on_employees.value) == "on"} 
{assign var="checked" value='checked="checked"'}
{else}
{assign var="checked" value=""}
{/if}
<input type="checkbox" class="checkbox" name="{$fields.show_on_employees.name}" id="{$fields.show_on_employees.name}" value="$fields.show_on_employees.value" disabled="true" {$checked}>
{/if}

<div class="inlineEditIcon col-xs-hidden">
{sugar_getimage name="pencil"}
</div>
</div>
<div class="dotted-border"></div>


</div>

</div>


<div class="row detail-view-row">



<div class="col-xs-12 col-sm-6 detail-view-row-item detail-view-bordered" data-field="title">


<div class="col-xs-12 col-sm-4 label col-1-label">


{capture name="label" assign="label"}{sugar_translate label='LBL_TITLE' module='Users'}{/capture}
{$label|strip_semicolon}:
</div>


<div class="col-xs-12 col-sm-8 detail-view-field d-flex inlineEdit" type="varchar" field="title" >

{if !$fields.title.hidden}
{counter name="panelFieldCount" print=false}

{if strlen($fields.title.value) <= 0}
{assign var="value" value=$fields.title.default_value }
{else}
{assign var="value" value=$fields.title.value }
{/if} 
<span class="sugar_field" id="{$fields.title.name}">{$fields.title.value}</span>
{/if}

<div class="inlineEditIcon col-xs-hidden">
{sugar_getimage name="pencil"}
</div>
</div>
<div class="dotted-border"></div>


</div>




<div class="col-xs-12 col-sm-6 detail-view-row-item detail-view-bordered" data-field="phone_work">


<div class="col-xs-12 col-sm-4 label col-2-label">


{capture name="label" assign="label"}{sugar_translate label='LBL_WORK_PHONE' module='Users'}{/capture}
{$label|strip_semicolon}:
</div>


<div class="col-xs-12 col-sm-8 detail-view-field d-flex inlineEdit phone" type="phone" field="phone_work" >

{if !$fields.phone_work.hidden}
{counter name="panelFieldCount" print=false}

{if !empty($fields.phone_work.value)}
{assign var="phone_value" value=$fields.phone_work.value }
{sugar_phone value=$phone_value usa_format="0"}
{/if}
{/if}

<div class="inlineEditIcon col-xs-hidden">
{sugar_getimage name="pencil"}
</div>
</div>
<div class="dotted-border"></div>


</div>

</div>


<div class="row detail-view-row">



<div class="col-xs-12 col-sm-6 detail-view-row-item detail-view-bordered" data-field="department">


<div class="col-xs-12 col-sm-4 label col-1-label">


{capture name="label" assign="label"}{sugar_translate label='LBL_DEPARTMENT' module='Users'}{/capture}
{$label|strip_semicolon}:
</div>


<div class="col-xs-12 col-sm-8 detail-view-field d-flex inlineEdit" type="varchar" field="department" >

{if !$fields.department.hidden}
{counter name="panelFieldCount" print=false}

{if strlen($fields.department.value) <= 0}
{assign var="value" value=$fields.department.default_value }
{else}
{assign var="value" value=$fields.department.value }
{/if} 
<span class="sugar_field" id="{$fields.department.name}">{$fields.department.value}</span>
{/if}

<div class="inlineEditIcon col-xs-hidden">
{sugar_getimage name="pencil"}
</div>
</div>
<div class="dotted-border"></div>


</div>




<div class="col-xs-12 col-sm-6 detail-view-row-item detail-view-bordered" data-field="phone_mobile">


<div class="col-xs-12 col-sm-4 label col-2-label">


{capture name="label" assign="label"}{sugar_translate label='LBL_MOBILE_PHONE' module='Users'}{/capture}
{$label|strip_semicolon}:
</div>


<div class="col-xs-12 col-sm-8 detail-view-field d-flex inlineEdit phone" type="phone" field="phone_mobile" >

{if !$fields.phone_mobile.hidden}
{counter name="panelFieldCount" print=false}

{if !empty($fields.phone_mobile.value)}
{assign var="phone_value" value=$fields.phone_mobile.value }
{sugar_phone value=$phone_value usa_format="0"}
{/if}
{/if}

<div class="inlineEditIcon col-xs-hidden">
{sugar_getimage name="pencil"}
</div>
</div>
<div class="dotted-border"></div>


</div>

</div>


<div class="row detail-view-row">



<div class="col-xs-12 col-sm-6 detail-view-row-item detail-view-bordered" data-field="reports_to_name">


<div class="col-xs-12 col-sm-4 label col-1-label">


{capture name="label" assign="label"}{sugar_translate label='LBL_REPORTS_TO_NAME' module='Users'}{/capture}
{$label|strip_semicolon}:
</div>


<div class="col-xs-12 col-sm-8 detail-view-field d-flex inlineEdit" type="relate" field="reports_to_name" >

{if !$fields.reports_to_name.hidden}
{counter name="panelFieldCount" print=false}

<span id="reports_to_id" class="sugar_field" data-id-value="{$fields.reports_to_id.value}">{$fields.reports_to_name.value}</span>
{/if}

<div class="inlineEditIcon col-xs-hidden">
{sugar_getimage name="pencil"}
</div>
</div>
<div class="dotted-border"></div>


</div>




<div class="col-xs-12 col-sm-6 detail-view-row-item detail-view-bordered" data-field="phone_other">


<div class="col-xs-12 col-sm-4 label col-2-label">


{capture name="label" assign="label"}{sugar_translate label='LBL_OTHER_PHONE' module='Users'}{/capture}
{$label|strip_semicolon}:
</div>


<div class="col-xs-12 col-sm-8 detail-view-field d-flex inlineEdit phone" type="phone" field="phone_other" >

{if !$fields.phone_other.hidden}
{counter name="panelFieldCount" print=false}

{if !empty($fields.phone_other.value)}
{assign var="phone_value" value=$fields.phone_other.value }
{sugar_phone value=$phone_value usa_format="0"}
{/if}
{/if}

<div class="inlineEditIcon col-xs-hidden">
{sugar_getimage name="pencil"}
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


{capture name="label" assign="label"}{sugar_translate label='LBL_FAX_PHONE' module='Users'}{/capture}
{$label|strip_semicolon}:
</div>


<div class="col-xs-12 col-sm-8 detail-view-field d-flex inlineEdit phone" type="phone" field="phone_fax" >

{if !$fields.phone_fax.hidden}
{counter name="panelFieldCount" print=false}

{if !empty($fields.phone_fax.value)}
{assign var="phone_value" value=$fields.phone_fax.value }
{sugar_phone value=$phone_value usa_format="0"}
{/if}
{/if}

<div class="inlineEditIcon col-xs-hidden">
{sugar_getimage name="pencil"}
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


{capture name="label" assign="label"}{sugar_translate label='LBL_HOME_PHONE' module='Users'}{/capture}
{$label|strip_semicolon}:
</div>


<div class="col-xs-12 col-sm-8 detail-view-field d-flex inlineEdit phone" type="phone" field="phone_home" >

{if !$fields.phone_home.hidden}
{counter name="panelFieldCount" print=false}

{if !empty($fields.phone_home.value)}
{assign var="phone_value" value=$fields.phone_home.value }
{sugar_phone value=$phone_value usa_format="0"}
{/if}
{/if}

<div class="inlineEditIcon col-xs-hidden">
{sugar_getimage name="pencil"}
</div>
</div>
<div class="dotted-border"></div>


</div>

</div>


<div class="row detail-view-row">



<div class="col-xs-12 col-sm-6 detail-view-row-item detail-view-bordered" data-field="messenger_type">


<div class="col-xs-12 col-sm-4 label col-1-label">


{capture name="label" assign="label"}{sugar_translate label='LBL_MESSENGER_TYPE' module='Users'}{/capture}
{$label|strip_semicolon}:
</div>


<div class="col-xs-12 col-sm-8 detail-view-field d-flex inlineEdit" type="enum" field="messenger_type" >

{if !$fields.messenger_type.hidden}
{counter name="panelFieldCount" print=false}


{if is_string($fields.messenger_type.options)}
<input type="hidden" class="sugar_field" id="{$fields.messenger_type.name}" value="{ $fields.messenger_type.options }">
{ $fields.messenger_type.options }
{else}
<input type="hidden" class="sugar_field" id="{$fields.messenger_type.name}" value="{ $fields.messenger_type.value }">
{ $fields.messenger_type.options[$fields.messenger_type.value]}
{/if}
{/if}

<div class="inlineEditIcon col-xs-hidden">
{sugar_getimage name="pencil"}
</div>
</div>
<div class="dotted-border"></div>


</div>




<div class="col-xs-12 col-sm-6 detail-view-row-item detail-view-bordered" data-field="messenger_id">


<div class="col-xs-12 col-sm-4 label col-2-label">


{capture name="label" assign="label"}{sugar_translate label='LBL_MESSENGER_ID' module='Users'}{/capture}
{$label|strip_semicolon}:
</div>


<div class="col-xs-12 col-sm-8 detail-view-field d-flex inlineEdit" type="varchar" field="messenger_id" >

{if !$fields.messenger_id.hidden}
{counter name="panelFieldCount" print=false}

{if strlen($fields.messenger_id.value) <= 0}
{assign var="value" value=$fields.messenger_id.default_value }
{else}
{assign var="value" value=$fields.messenger_id.value }
{/if} 
<span class="sugar_field" id="{$fields.messenger_id.name}">{$fields.messenger_id.value}</span>
{/if}

<div class="inlineEditIcon col-xs-hidden">
{sugar_getimage name="pencil"}
</div>
</div>
<div class="dotted-border"></div>


</div>

</div>


<div class="row detail-view-row">



<div class="col-xs-12 col-sm-6 detail-view-row-item detail-view-bordered" data-field="address_street">


<div class="col-xs-12 col-sm-4 label col-1-label">


{capture name="label" assign="label"}{sugar_translate label='LBL_ADDRESS_STREET' module='Users'}{/capture}
{$label|strip_semicolon}:
</div>


<div class="col-xs-12 col-sm-8 detail-view-field d-flex inlineEdit" type="varchar" field="address_street" >

{if !$fields.address_street.hidden}
{counter name="panelFieldCount" print=false}

{if strlen($fields.address_street.value) <= 0}
{assign var="value" value=$fields.address_street.default_value }
{else}
{assign var="value" value=$fields.address_street.value }
{/if} 
<span class="sugar_field" id="{$fields.address_street.name}">{$fields.address_street.value}</span>
{/if}

<div class="inlineEditIcon col-xs-hidden">
{sugar_getimage name="pencil"}
</div>
</div>
<div class="dotted-border"></div>


</div>




<div class="col-xs-12 col-sm-6 detail-view-row-item detail-view-bordered" data-field="address_city">


<div class="col-xs-12 col-sm-4 label col-2-label">


{capture name="label" assign="label"}{sugar_translate label='LBL_ADDRESS_CITY' module='Users'}{/capture}
{$label|strip_semicolon}:
</div>


<div class="col-xs-12 col-sm-8 detail-view-field d-flex inlineEdit" type="varchar" field="address_city" >

{if !$fields.address_city.hidden}
{counter name="panelFieldCount" print=false}

{if strlen($fields.address_city.value) <= 0}
{assign var="value" value=$fields.address_city.default_value }
{else}
{assign var="value" value=$fields.address_city.value }
{/if} 
<span class="sugar_field" id="{$fields.address_city.name}">{$fields.address_city.value}</span>
{/if}

<div class="inlineEditIcon col-xs-hidden">
{sugar_getimage name="pencil"}
</div>
</div>
<div class="dotted-border"></div>


</div>

</div>


<div class="row detail-view-row">



<div class="col-xs-12 col-sm-6 detail-view-row-item detail-view-bordered" data-field="address_state">


<div class="col-xs-12 col-sm-4 label col-1-label">


{capture name="label" assign="label"}{sugar_translate label='LBL_ADDRESS_STATE' module='Users'}{/capture}
{$label|strip_semicolon}:
</div>


<div class="col-xs-12 col-sm-8 detail-view-field d-flex inlineEdit" type="varchar" field="address_state" >

{if !$fields.address_state.hidden}
{counter name="panelFieldCount" print=false}

{if strlen($fields.address_state.value) <= 0}
{assign var="value" value=$fields.address_state.default_value }
{else}
{assign var="value" value=$fields.address_state.value }
{/if} 
<span class="sugar_field" id="{$fields.address_state.name}">{$fields.address_state.value}</span>
{/if}

<div class="inlineEditIcon col-xs-hidden">
{sugar_getimage name="pencil"}
</div>
</div>
<div class="dotted-border"></div>


</div>




<div class="col-xs-12 col-sm-6 detail-view-row-item detail-view-bordered" data-field="address_postalcode">


<div class="col-xs-12 col-sm-4 label col-2-label">


{capture name="label" assign="label"}{sugar_translate label='LBL_ADDRESS_POSTALCODE' module='Users'}{/capture}
{$label|strip_semicolon}:
</div>


<div class="col-xs-12 col-sm-8 detail-view-field d-flex inlineEdit" type="varchar" field="address_postalcode" >

{if !$fields.address_postalcode.hidden}
{counter name="panelFieldCount" print=false}

{if strlen($fields.address_postalcode.value) <= 0}
{assign var="value" value=$fields.address_postalcode.default_value }
{else}
{assign var="value" value=$fields.address_postalcode.value }
{/if} 
<span class="sugar_field" id="{$fields.address_postalcode.name}">{$fields.address_postalcode.value}</span>
{/if}

<div class="inlineEditIcon col-xs-hidden">
{sugar_getimage name="pencil"}
</div>
</div>
<div class="dotted-border"></div>


</div>

</div>


<div class="row detail-view-row">



<div class="col-xs-12 col-sm-12 detail-view-row-item" data-field="address_country">


<div class="col-xs-12 col-sm-2 label col-1-label">


{capture name="label" assign="label"}{sugar_translate label='LBL_ADDRESS_COUNTRY' module='Users'}{/capture}
{$label|strip_semicolon}:
</div>


<div class="col-xs-12 col-sm-10 detail-view-field d-flex inlineEdit" type="varchar" field="address_country" colspan='3'>

{if !$fields.address_country.hidden}
{counter name="panelFieldCount" print=false}

{if strlen($fields.address_country.value) <= 0}
{assign var="value" value=$fields.address_country.default_value }
{else}
{assign var="value" value=$fields.address_country.value }
{/if} 
<span class="sugar_field" id="{$fields.address_country.name}">{$fields.address_country.value}</span>
{/if}

<div class="inlineEditIcon col-xs-hidden">
{sugar_getimage name="pencil"}
</div>
</div>
<div class="dotted-border"></div>


</div>

</div>


<div class="row detail-view-row">



<div class="col-xs-12 col-sm-12 detail-view-row-item" data-field="description">


<div class="col-xs-12 col-sm-2 label col-1-label">


{capture name="label" assign="label"}{sugar_translate label='LBL_DESCRIPTION' module='Users'}{/capture}
{$label|strip_semicolon}:
</div>


<div class="col-xs-12 col-sm-10 detail-view-field d-flex inlineEdit" type="text" field="description" colspan='3'>

{if !$fields.description.hidden}
{counter name="panelFieldCount" print=false}

<span class="sugar_field" id="{$fields.description.name|escape:'html'|url2html|nl2br}">{$fields.description.value|escape:'html'|escape:'html_entity_decode'|url2html|nl2br}</span>
{/if}

<div class="inlineEditIcon col-xs-hidden">
{sugar_getimage name="pencil"}
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
<script>SUGAR.util.doWhen("document.getElementById('form') != null",
        function(){ldelim}SUGAR.util.buildAccessKeyLabels();{rdelim});
</script>            
{*<script type='text/javascript' src='{sugar_getjspath file='include/javascript/popup_helper.js'}'></script>*}
{*<script type="text/javascript" src="{sugar_getjspath file='cache/include/javascript/sugar_grp_yui_widgets.js'}"></script>*}

            
            
            

<script type="text/javascript" src="include/InlineEditing/inlineEditing.js"></script>
<script type="text/javascript" src="modules/Favorites/favorites.js"></script>
<script type='text/javascript' src='{sugar_getjspath file='modules/Users/DetailView.js'}'></script>
{literal}
<script type="text/javascript">

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
                </script>
{/literal}