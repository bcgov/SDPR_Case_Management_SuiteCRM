<?php
/* Smarty version 4.3.2, created on 2024-03-13 03:09:43
  from '/suitecrm/public/legacy/modules/Emails/templates/advancedSearch.tpl' */

/* @var Smarty_Internal_Template $_smarty_tpl */
if ($_smarty_tpl->_decodeProperties($_smarty_tpl, array (
  'version' => '4.3.2',
  'unifunc' => 'content_65f118f71bf609_69485103',
  'has_nocache_code' => false,
  'file_dependency' => 
  array (
    'e34b4018951ccc93b392ec0d2bc26fc6c5fb17f8' => 
    array (
      0 => '/suitecrm/public/legacy/modules/Emails/templates/advancedSearch.tpl',
      1 => 1710132961,
      2 => 'file',
    ),
  ),
  'includes' => 
  array (
  ),
),false)) {
function content_65f118f71bf609_69485103 (Smarty_Internal_Template $_smarty_tpl) {
$_smarty_tpl->_checkPlugins(array(0=>array('file'=>'/suitecrm/public/legacy/include/Smarty/plugins/function.sugar_translate.php','function'=>'smarty_function_sugar_translate',),1=>array('file'=>'/suitecrm/public/legacy/include/Smarty/plugins/function.html_options.php','function'=>'smarty_function_html_options',),2=>array('file'=>'/suitecrm/public/legacy/include/Smarty/plugins/function.sugar_getimagepath.php','function'=>'smarty_function_sugar_getimagepath',),));
?>
<form name="advancedSearchForm" id="advancedSearchForm">
<table cellpadding="4" cellspacing="0" border="0" id='advancedSearchTable'>
	<tr><td>&nbsp;</td></tr>
	<tr>
		<td class="advancedSearchTD">
			<?php echo $_smarty_tpl->tpl_vars['app_strings']->value['LBL_EMAIL_SUBJECT'];?>
:<br/>
			<input type="text" class="input" name="name" id="searchSubject" size="20">
		</td>
	</tr>
	<tr>
		<td class="advancedSearchTD">
			<?php echo $_smarty_tpl->tpl_vars['app_strings']->value['LBL_EMAIL_FROM'];?>
:<br/>
			<input type="text" class="input" name="from_addr" id="searchFrom" size="20">
		</td>
	</tr>
	<tr>
		<td class="advancedSearchTD">
			<?php echo $_smarty_tpl->tpl_vars['app_strings']->value['LBL_EMAIL_TO'];?>
:<br/>
			<input type="text" class="input" name="to_addrs" id="searchTo" size="20">
		</td>
	</tr>
    <tr class="toggleClass visible-search-option">
        <td ><a href="javascript:void(0);" onclick="SE.search.toggleAdvancedOptions();"><?php echo $_smarty_tpl->tpl_vars['mod_strings']->value['LBL_MORE_OPTIONS'];?>
</a></td>
        <td>&nbsp;</td>
    </tr>
	<tr class="toggleClass yui-hidden">
		<td class="advancedSearchTD" style="padding-bottom: 2px">
			<?php echo $_smarty_tpl->tpl_vars['app_strings']->value['LBL_EMAIL_SEARCH_DATE_FROM'];?>
:&nbsp;<i>(<?php echo $_smarty_tpl->tpl_vars['dateFormatExample']->value;?>
)</i><br/>
			<input name='searchDateFrom' id='searchDateFrom' onblur="parseDate(this, '<?php echo $_smarty_tpl->tpl_vars['dateFormat']->value;?>
');" maxlength='10' size='11' value="" type="text">&nbsp;
			<span id="searchDateFrom_trigger" class="suitepicon suitepicon-module-calendar" alt="$app_strings.LBL_ENTER_DATE"></span>
		</td>
	</tr>

	<tr class="toggleClass yui-hidden">
		<td class="advancedSearchTD">
			<?php echo $_smarty_tpl->tpl_vars['app_strings']->value['LBL_EMAIL_SEARCH_DATE_UNTIL'];?>
:&nbsp;<i>(<?php echo $_smarty_tpl->tpl_vars['dateFormatExample']->value;?>
)</i><br/>
			<input name='searchDateTo' id='searchDateTo' onblur="parseDate(this, '<?php echo $_smarty_tpl->tpl_vars['dateFormat']->value;?>
');" maxlength='10' size='11' value="" type="text">&nbsp;
			<span id="searchDateTo_trigger" class="suitepicon suitepicon-module-calendar" alt="$app_strings.LBL_ENTER_DATE"></span>
		</td>
	</tr>

    <tr class="toggleClass yui-hidden">
        <td class="advancedSearchTD">
        <?php echo smarty_function_sugar_translate(array('label'=>"LBL_ASSIGNED_TO"),$_smarty_tpl);?>
: <br/>
        <input name="assigned_user_name" class="sqsEnabled" tabindex="2" id="assigned_user_name" size="" value="<?php echo $_smarty_tpl->tpl_vars['currentUserName']->value;?>
" type="text" >
        <input name="assigned_user_id" id="assigned_user_id" value="<?php echo $_smarty_tpl->tpl_vars['currentUserId']->value;?>
" type="hidden">      
        
        <a href="javascript:void(0);">
			<span class="suitepicon suitepicon-action-select" align="absmiddle" border="0" alt=$mod_strings.LBL_EMAIL_SELECTOR onclick='open_popup("Users", 600, 400, "", true, false, {"call_back_function":"set_return","form_name":"advancedSearchForm","field_to_name_array":{"id":"assigned_user_id","name":"assigned_user_name"}}, "single", true);'></span>
        </a>
        </td>
    </tr>
      <tr class="toggleClass yui-hidden">
        <td class="advancedSearchTD">
        <?php echo $_smarty_tpl->tpl_vars['mod_strings']->value['LBL_HAS_ATTACHMENT'];?>
<br/>
        <?php echo smarty_function_html_options(array('options'=>$_smarty_tpl->tpl_vars['attachmentsSearchOptions']->value,'name'=>'attachmentsSearch','id'=>'attachmentsSearch'),$_smarty_tpl);?>
 
        </td>
    </tr>
    <tr class="toggleClass yui-hidden">
        <td NOWRAP class="advancedSearchTD">
        <?php echo $_smarty_tpl->tpl_vars['mod_strings']->value['LBL_EMAIL_RELATE'];?>
:<br/>
        <?php echo smarty_function_html_options(array('options'=>$_smarty_tpl->tpl_vars['linkBeansOptions']->value,'name'=>'data_parent_type_search','id'=>'data_parent_type_search'),$_smarty_tpl);?>

        <input id="data_parent_id_search" name="data_parent_id_search" type="hidden" value="">
        <br/><br/>
        <input class="sqsEnabled" id="data_parent_name_search" name="data_parent_name_search" type="text" value="">
        <a href="javascript:void(0);"><img src="<?php echo smarty_function_sugar_getimagepath(array('file'=>'id-ff-select.gif'),$_smarty_tpl);?>
" align="absmiddle" border="0" alt=$mod_strings.LBL_EMAIL_SELECTOR onclick="SUGAR.email2.composeLayout.callopenpopupForEmail2('_search',{'form_name':'advancedSearchForm'} );">
         </a>
        </td>
    </tr>
     <tr class="toggleClass yui-hidden">
        <td class="visible-search-option"><a href="javascript:void(0);" onclick="SE.search.toggleAdvancedOptions();"><?php echo $_smarty_tpl->tpl_vars['mod_strings']->value['LBL_LESS_OPTIONS'];?>
</a></td>
        <td>&nbsp;</td>
    </tr>
	<tr>
		<td NOWRAP>
			<br />&nbsp;<br />
			<input type="button" id="advancedSearchButton" class="button" onclick="SUGAR.email2.search.searchAdvanced()" value="   <?php echo $_smarty_tpl->tpl_vars['app_strings']->value['LBL_SEARCH_BUTTON_LABEL'];?>
   ">&nbsp;
			<input type="button" class="button" onclick="SUGAR.email2.search.searchClearAdvanced()" value="   <?php echo $_smarty_tpl->tpl_vars['app_strings']->value['LBL_CLEAR_BUTTON_LABEL'];?>
   ">
		</td>
	</tr>
</table>
</form><?php }
}
