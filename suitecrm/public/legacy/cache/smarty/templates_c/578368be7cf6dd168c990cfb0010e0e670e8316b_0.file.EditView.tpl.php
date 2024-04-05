<?php
/* Smarty version 4.3.2, created on 2024-03-13 03:09:43
  from '/suitecrm/public/legacy/include/SugarFields/Fields/Image/EditView.tpl' */

/* @var Smarty_Internal_Template $_smarty_tpl */
if ($_smarty_tpl->_decodeProperties($_smarty_tpl, array (
  'version' => '4.3.2',
  'unifunc' => 'content_65f118f72ccc40_56796590',
  'has_nocache_code' => false,
  'file_dependency' => 
  array (
    '578368be7cf6dd168c990cfb0010e0e670e8316b' => 
    array (
      0 => '/suitecrm/public/legacy/include/SugarFields/Fields/Image/EditView.tpl',
      1 => 1710132774,
      2 => 'file',
    ),
  ),
  'includes' => 
  array (
  ),
),false)) {
function content_65f118f72ccc40_56796590 (Smarty_Internal_Template $_smarty_tpl) {
$_smarty_tpl->_checkPlugins(array(0=>array('file'=>'/suitecrm/public/legacy/include/Smarty/plugins/function.sugar_getjspath.php','function'=>'smarty_function_sugar_getjspath',),1=>array('file'=>'/suitecrm/public/legacy/include/Smarty/plugins/function.sugarvar.php','function'=>'smarty_function_sugarvar',),));
?>
{*
/**
 *
 * SugarCRM Community Edition is a customer relationship management program developed by
 * SugarCRM, Inc. Copyright (C) 2004-2013 SugarCRM Inc.
 *
 * SuiteCRM is an extension to SugarCRM Community Edition developed by SalesAgility Ltd.
 * Copyright (C) 2011 - 2018 SalesAgility Ltd.
 *
 * This program is free software; you can redistribute it and/or modify it under
 * the terms of the GNU Affero General Public License version 3 as published by the
 * Free Software Foundation with the addition of the following permission added
 * to Section 15 as permitted in Section 7(a): FOR ANY PART OF THE COVERED WORK
 * IN WHICH THE COPYRIGHT IS OWNED BY SUGARCRM, SUGARCRM DISCLAIMS THE WARRANTY
 * OF NON INFRINGEMENT OF THIRD PARTY RIGHTS.
 *
 * This program is distributed in the hope that it will be useful, but WITHOUT
 * ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS
 * FOR A PARTICULAR PURPOSE. See the GNU Affero General Public License for more
 * details.
 *
 * You should have received a copy of the GNU Affero General Public License along with
 * this program; if not, see http://www.gnu.org/licenses or write to the Free
 * Software Foundation, Inc., 51 Franklin Street, Fifth Floor, Boston, MA
 * 02110-1301 USA.
 *
 * You can contact SugarCRM, Inc. headquarters at 10050 North Wolfe Road,
 * SW2-130, Cupertino, CA 95014, USA. or at email address contact@sugarcrm.com.
 *
 * The interactive user interfaces in modified source and object code versions
 * of this program must display Appropriate Legal Notices, as required under
 * Section 5 of the GNU Affero General Public License version 3.
 *
 * In accordance with Section 7(b) of the GNU Affero General Public License version 3,
 * these Appropriate Legal Notices must retain the display of the "Powered by
 * SugarCRM" logo and "Supercharged by SuiteCRM" logo. If the display of the logos is not
 * reasonably feasible for technical reasons, the Appropriate Legal Notices must
 * display the words "Powered by SugarCRM" and "Supercharged by SuiteCRM".
 */
*}

<?php if ((isset($_smarty_tpl->tpl_vars['vardef']->value['allowEapm'])) && $_smarty_tpl->tpl_vars['vardef']->value['allowEapm']) {
echo '<script'; ?>
 type="text/javascript" src='<?php echo smarty_function_sugar_getjspath(array('file'=>"cache/include/externalAPI.cache.js"),$_smarty_tpl);?>
'><?php echo '</script'; ?>
>
<?php }?>

<?php echo '<script'; ?>
 type="text/javascript">
    {literal}
        $( document ).ready(function() {
        $( "form#EditView" )
        .attr( "enctype", "multipart/form-data" )
        .attr( "encoding", "multipart/form-data" );
    });
{/literal}
<?php echo '</script'; ?>
>
<?php echo '<script'; ?>
 type="text/javascript" src='<?php echo smarty_function_sugar_getjspath(array('file'=>"include/SugarFields/Fields/Image/SugarFieldFile.js"),$_smarty_tpl);?>
'><?php echo '</script'; ?>
>
<?php $_smarty_tpl->smarty->ext->_capture->open($_smarty_tpl, 'idName', 'idName', null);
echo smarty_function_sugarvar(array('key'=>'name'),$_smarty_tpl);
$_smarty_tpl->smarty->ext->_capture->close($_smarty_tpl);
if (!empty($_smarty_tpl->tpl_vars['displayParams']->value['idName'])) {
$_smarty_tpl->_assignInScope('idName', $_smarty_tpl->tpl_vars['displayParams']->value['idName']);
}?>

<?php if (!(isset($_smarty_tpl->tpl_vars['vardef']->value['noRemove'])) || !$_smarty_tpl->tpl_vars['vardef']->value['noRemove']) {?>
{if !empty(<?php echo smarty_function_sugarvar(array('key'=>'value','stringFormat'=>true),$_smarty_tpl);?>
) }
    {assign var=showRemove value=true}
{else}
    {assign var=showRemove value=false}
{/if}
<?php } else { ?>
{assign var=showRemove value=false}
<?php }?>

<?php if ((isset($_smarty_tpl->tpl_vars['vardef']->value['noChange'])) && $_smarty_tpl->tpl_vars['vardef']->value['noChange']) {?>
{if !empty(<?php echo smarty_function_sugarvar(array('key'=>'value','stringFormat'=>true),$_smarty_tpl);?>
) }
    {assign var=showRemove value=true}
    {assign var=noChange value=true}
{else}
    {assign var=noChange value=false}
{/if}
<?php } else { ?>
{assign var=noChange value=false}
<?php }?>

<input type="hidden" name="deleteAttachment" value="0">
<input type="hidden" name="<?php echo $_smarty_tpl->tpl_vars['idName']->value;?>
" id="<?php echo $_smarty_tpl->tpl_vars['idName']->value;?>
" value="<?php echo smarty_function_sugarvar(array('key'=>'value'),$_smarty_tpl);?>
">
<input type="hidden" name="<?php echo $_smarty_tpl->tpl_vars['idName']->value;?>
_record_id" id="<?php echo $_smarty_tpl->tpl_vars['idName']->value;?>
_record_id" value="{$fields.<?php echo $_smarty_tpl->tpl_vars['vardef']->value['fileId'];?>
.value}">
<?php if ((isset($_smarty_tpl->tpl_vars['vardef']->value['allowEapm'])) && $_smarty_tpl->tpl_vars['vardef']->value['allowEapm']) {?>
<input type="hidden" name="<?php echo $_smarty_tpl->tpl_vars['vardef']->value['docId'];?>
" id="<?php echo $_smarty_tpl->tpl_vars['vardef']->value['docId'];?>
" value="{$fields.<?php echo $_smarty_tpl->tpl_vars['vardef']->value['docId'];?>
.value}">
<input type="hidden" name="<?php echo $_smarty_tpl->tpl_vars['vardef']->value['docUrl'];?>
" id="<?php echo $_smarty_tpl->tpl_vars['vardef']->value['docUrl'];?>
" value="{$fields.<?php echo $_smarty_tpl->tpl_vars['vardef']->value['docUrl'];?>
.value}">
<input type="hidden" name="<?php echo $_smarty_tpl->tpl_vars['idName']->value;?>
_old_doctype" id="<?php echo $_smarty_tpl->tpl_vars['idName']->value;?>
_old_doctype" value="{$fields.<?php echo $_smarty_tpl->tpl_vars['vardef']->value['docType'];?>
.value}">

<?php }?>
<span id="<?php echo $_smarty_tpl->tpl_vars['idName']->value;?>
_old" style="display:{if !$showRemove}none;{/if}">
  <a href="index.php?entryPoint=download&id={$fields.<?php echo $_smarty_tpl->tpl_vars['vardef']->value['fileId'];?>
.value}_<?php if (empty($_smarty_tpl->tpl_vars['displayParams']->value['idName'])) {
echo smarty_function_sugarvar(array('key'=>'name'),$_smarty_tpl);
} else {
echo $_smarty_tpl->tpl_vars['displayParams']->value['idName'];
}?>&type=<?php echo $_smarty_tpl->tpl_vars['vardef']->value['linkModule'];?>
&time={$fields.date_modified.value}" class="tabDetailViewDFLink"><?php echo smarty_function_sugarvar(array('key'=>'value'),$_smarty_tpl);?>
</a>

    <?php if ((isset($_smarty_tpl->tpl_vars['vardef']->value['allowEapm'])) && $_smarty_tpl->tpl_vars['vardef']->value['allowEapm']) {?>
    {if isset($fields.<?php echo $_smarty_tpl->tpl_vars['vardef']->value['docType'];?>
) && !empty($fields.<?php echo $_smarty_tpl->tpl_vars['vardef']->value['docType'];?>
.value) && $fields.<?php echo $_smarty_tpl->tpl_vars['vardef']->value['docType'];?>
.value != 'Sugar' && !empty($fields.<?php echo $_smarty_tpl->tpl_vars['vardef']->value['docUrl'];?>
.value) }
        {capture name=imageNameCapture assign=imageName}
            {$fields.<?php echo $_smarty_tpl->tpl_vars['vardef']->value['docType'];?>
.value}_image_inline.png
        {/capture}
        <a href="{$fields.<?php echo $_smarty_tpl->tpl_vars['vardef']->value['docUrl'];?>
.value}" class="tabDetailViewDFLink" target="_blank">{sugar_getimage name=$imageName alt=$imageName other_attributes='border="0" '}</a>
    {/if}
    <?php }?>
    {if !$noChange}
        <input type='button' class='button' id='remove_button' value='{$APP.LBL_REMOVE}' onclick='SUGAR.field.file.deleteAttachment("<?php echo $_smarty_tpl->tpl_vars['idName']->value;?>
","<?php echo $_smarty_tpl->tpl_vars['vardef']->value['docType'];?>
",this);'>
    {/if}
</span>
{if !$noChange}
<span id="<?php echo $_smarty_tpl->tpl_vars['idName']->value;?>
_new" style="display:{if $showRemove}none;{/if}">
<input type="hidden" name="<?php echo $_smarty_tpl->tpl_vars['idName']->value;?>
_escaped">
<input id="<?php echo $_smarty_tpl->tpl_vars['idName']->value;?>
_file" name="<?php echo $_smarty_tpl->tpl_vars['idName']->value;?>
_file"
       type="file" title='<?php echo $_smarty_tpl->tpl_vars['vardef']->value['help'];?>
' size="<?php echo (($tmp = $_smarty_tpl->tpl_vars['displayParams']->value['size'] ?? null)===null||$tmp==='' ? 30 ?? null : $tmp);?>
"
        <?php if (!empty($_smarty_tpl->tpl_vars['displayParams']->value['accesskey'])) {?> accesskey='<?php echo $_smarty_tpl->tpl_vars['displayParams']->value['accesskey'];?>
' <?php }?>
        <?php if (!empty($_smarty_tpl->tpl_vars['vardef']->value['len'])) {?>
       maxlength='<?php echo $_smarty_tpl->tpl_vars['vardef']->value['len'];?>
'
        <?php } elseif (!empty($_smarty_tpl->tpl_vars['displayParams']->value['maxlength'])) {?>
       maxlength="<?php echo $_smarty_tpl->tpl_vars['displayParams']->value['maxlength'];?>
"
        <?php } else { ?>
       maxlength="255"
        <?php }?>
        <?php echo $_smarty_tpl->tpl_vars['displayParams']->value['field'];?>
>

    <?php if ((isset($_smarty_tpl->tpl_vars['vardef']->value['allowEapm'])) && $_smarty_tpl->tpl_vars['vardef']->value['allowEapm']) {?>
    <span id="<?php echo $_smarty_tpl->tpl_vars['idName']->value;?>
_externalApiSelector" style="display:none;">
<br><h4 id="<?php echo $_smarty_tpl->tpl_vars['idName']->value;?>
_externalApiLabel">
            <span id="<?php echo $_smarty_tpl->tpl_vars['idName']->value;?>
_more">{sugar_image name="advanced_search" width="8px" height="8px"}</span>
            <span id="<?php echo $_smarty_tpl->tpl_vars['idName']->value;?>
_less" style="display: none;">{sugar_image name="basic_search" width="8px" height="8px"}</span>
            {$APP.LBL_SEARCH_EXTERNAL_API}</h4>
<span id="<?php echo $_smarty_tpl->tpl_vars['idName']->value;?>
_remoteNameSpan" style="display: none;">
<input type="text" class="sqsEnabled" name="<?php echo $_smarty_tpl->tpl_vars['idName']->value;?>
_remoteName" id="<?php echo $_smarty_tpl->tpl_vars['idName']->value;?>
_remoteName" size="<?php echo (($tmp = $_smarty_tpl->tpl_vars['displayParams']->value['size'] ?? null)===null||$tmp==='' ? 30 ?? null : $tmp);?>
"
        <?php if (!empty($_smarty_tpl->tpl_vars['displayParams']->value['accesskey'])) {?> accesskey='<?php echo $_smarty_tpl->tpl_vars['displayParams']->value['accesskey'];?>
' <?php }?>
        <?php if (!empty($_smarty_tpl->tpl_vars['vardef']->value['len'])) {?>
       maxlength='<?php echo $_smarty_tpl->tpl_vars['vardef']->value['len'];?>
'
        <?php } elseif (!empty($_smarty_tpl->tpl_vars['displayParams']->value['maxlength'])) {?>
       maxlength="<?php echo $_smarty_tpl->tpl_vars['displayParams']->value['maxlength'];?>
"
        <?php } else { ?>
       maxlength="255"
        <?php }?> autocomplete="off" value="{if !empty($fields[<?php echo $_smarty_tpl->tpl_vars['vardef']->value['docId'];?>
].value)}<?php echo smarty_function_sugarvar(array('key'=>'name'),$_smarty_tpl);?>
{/if}">

    <?php if (empty($_smarty_tpl->tpl_vars['displayParams']->value['hideButtons'])) {?>
    <span class="id-ff multiple">
<button type="button" name="<?php echo $_smarty_tpl->tpl_vars['idName']->value;?>
_remoteSelectBtn" id="<?php echo $_smarty_tpl->tpl_vars['idName']->value;?>
_remoteSelectBtn" tabindex="<?php echo $_smarty_tpl->tpl_vars['tabindex']->value;?>
" title="{sugar_translate label="<?php echo $_smarty_tpl->tpl_vars['displayParams']->value['accessKeySelectTitle'];?>
"}" class="button firstChild" value="{sugar_translate label="<?php echo $_smarty_tpl->tpl_vars['displayParams']->value['accessKeySelectLabel'];?>
"}"
onclick="SUGAR.field.file.openPopup('<?php echo $_smarty_tpl->tpl_vars['idName']->value;?>
'); return false;">
<span class="suitepicon suitepicon-action-select"></span></button>
<button type="button" name="<?php echo $_smarty_tpl->tpl_vars['idName']->value;?>
_remoteClearBtn" id="<?php echo $_smarty_tpl->tpl_vars['idName']->value;?>
_remoteClearBtn" tabindex="<?php echo $_smarty_tpl->tpl_vars['tabindex']->value;?>
" title="{$APP.LBL_CLEAR_BUTTON_TITLE}" class="button lastChild" value="{$APP.LBL_CLEAR_BUTTON_LABEL}" onclick="SUGAR.field.file.clearRemote('<?php echo $_smarty_tpl->tpl_vars['idName']->value;?>
'); return false;">
<span class="suitepicon suitepicon-action-clear"></span>
</button>
</span>
<?php }?>
</span>

<div style="display: none;" id="<?php echo $_smarty_tpl->tpl_vars['idName']->value;?>
_securityLevelBox">
  <b>{$APP.LBL_EXTERNAL_SECURITY_LEVEL}: </b>
<select name="<?php echo $_smarty_tpl->tpl_vars['idName']->value;?>
_securityLevel" id="<?php echo $_smarty_tpl->tpl_vars['idName']->value;?>
_securityLevel">
</select>
</div>
<?php echo '<script'; ?>
 type="text/javascript">
YAHOO.util.Event.onDOMReady(function() {ldelim}
SUGAR.field.file.setupEapiShowHide("<?php echo $_smarty_tpl->tpl_vars['idName']->value;?>
","<?php echo $_smarty_tpl->tpl_vars['vardef']->value['docType'];?>
","{$form_name}");
{rdelim});

if ( typeof(sqs_objects) == 'undefined' ) {ldelim}
sqs_objects = new Array;
{rdelim}

sqs_objects["{$form_name}_<?php echo $_smarty_tpl->tpl_vars['idName']->value;?>
_remoteName"] = {ldelim}
"form":"{$form_name}",
"method":"externalApi",
"api":"",
"modules":["EAPM"],
"field_list":["name", "id", "url", "id"],
"populate_list":["<?php echo $_smarty_tpl->tpl_vars['idName']->value;?>
_remoteName", "<?php echo $_smarty_tpl->tpl_vars['vardef']->value['docId'];?>
", "<?php echo $_smarty_tpl->tpl_vars['vardef']->value['docUrl'];?>
", "<?php echo $_smarty_tpl->tpl_vars['idName']->value;?>
"],
"required_list":["name"],
"conditions":[],
"no_match_text":"No Match"
{rdelim};

if(typeof QSProcessedFieldsArray != 'undefined') {ldelim}
QSProcessedFieldsArray["{$form_name}_<?php echo $_smarty_tpl->tpl_vars['idName']->value;?>
_remoteName"] = false;
{rdelim}
{if $showRemove && strlen("<?php echo $_smarty_tpl->tpl_vars['vardef']->value['docType'];?>
") > 0 }
document.getElementById("<?php echo $_smarty_tpl->tpl_vars['vardef']->value['docType'];?>
").disabled = true;
{/if}
enableQS(false);
<?php echo '</script'; ?>
>
<?php }?>
{else}
{* No change possible *}

<?php if ((isset($_smarty_tpl->tpl_vars['vardef']->value['allowEapm'])) && $_smarty_tpl->tpl_vars['vardef']->value['allowEapm']) {
echo '<script'; ?>
 type="text/javascript">
YAHOO.util.Event.onDOMReady(function()
{ldelim}
document.getElementById("<?php echo $_smarty_tpl->tpl_vars['vardef']->value['docType'];?>
").disabled = true;
{rdelim});
<?php echo '</script'; ?>
>
<?php }?>

{/if}

<?php echo '<script'; ?>
 type="text/javascript">
$( "#<?php echo $_smarty_tpl->tpl_vars['idName']->value;?>
_file{literal} " ).change(function() {
        $("#{/literal}<?php echo $_smarty_tpl->tpl_vars['idName']->value;?>
{literal}").val($("#{/literal}<?php echo $_smarty_tpl->tpl_vars['idName']->value;?>
_file{literal}").val());
});{/literal}
        <?php echo '</script'; ?>
>

<?php if (!empty($_smarty_tpl->tpl_vars['displayParams']->value['onchangeSetFileNameTo'])) {
echo '<script'; ?>
 type="text/javascript">

var <?php echo $_smarty_tpl->tpl_vars['idName']->value;?>
_setFileName = function()
{literal}
{
    var dom = YAHOO.util.Dom;
{/literal}
sourceElement = "<?php echo $_smarty_tpl->tpl_vars['idName']->value;?>
_file";
    targetElement = "<?php echo $_smarty_tpl->tpl_vars['displayParams']->value['onchangeSetFileNameTo'];?>
";
	src = new String(dom.get(sourceElement).value);
	target = new String(dom.get(targetElement).value);
{literal}
	if (target.length == 0) 
	{
		lastindex=src.lastIndexOf("/");
		if (lastindex == -1) {
			lastindex=src.lastIndexOf("\\");
		} 
		if (lastindex == -1) {
			dom.get(targetElement).value=src;
		} else {
			dom.get(targetElement).value=src.substr(++lastindex, src.length);
		}	
	}	
}
{/literal}

YAHOO.util.Event.onDOMReady(function()
{ldelim}
if(document.getElementById("<?php echo $_smarty_tpl->tpl_vars['displayParams']->value['onchangeSetFileNameTo'];?>
"))
{ldelim}
YAHOO.util.Event.addListener('<?php echo $_smarty_tpl->tpl_vars['idName']->value;?>
_file', 'change', <?php echo $_smarty_tpl->tpl_vars['idName']->value;?>
_setFileName);
YAHOO.util.Event.addListener(['<?php echo $_smarty_tpl->tpl_vars['idName']->value;?>
_file', '<?php echo $_smarty_tpl->tpl_vars['vardef']->value['docType'];?>
'], 'change', SUGAR.field.file.checkFileExtension,{ldelim} fileEl: '<?php echo $_smarty_tpl->tpl_vars['idName']->value;?>
_file', targEl: '<?php echo $_smarty_tpl->tpl_vars['displayParams']->value['onchangeSetFileNameTo'];?>
'{rdelim});
{rdelim}
{rdelim});
<?php echo '</script'; ?>
>
<?php }?>

</span><?php }
}
