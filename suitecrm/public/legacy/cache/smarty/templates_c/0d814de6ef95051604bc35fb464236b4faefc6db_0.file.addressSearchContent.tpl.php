<?php
/* Smarty version 4.3.2, created on 2024-03-13 03:09:43
  from '/suitecrm/public/legacy/modules/Emails/templates/addressSearchContent.tpl' */

/* @var Smarty_Internal_Template $_smarty_tpl */
if ($_smarty_tpl->_decodeProperties($_smarty_tpl, array (
  'version' => '4.3.2',
  'unifunc' => 'content_65f118f71d6685_15505634',
  'has_nocache_code' => false,
  'file_dependency' => 
  array (
    '0d814de6ef95051604bc35fb464236b4faefc6db' => 
    array (
      0 => '/suitecrm/public/legacy/modules/Emails/templates/addressSearchContent.tpl',
      1 => 1710132961,
      2 => 'file',
    ),
  ),
  'includes' => 
  array (
    'file:modules/Emails/templates/addressSearch.tpl' => 1,
  ),
),false)) {
function content_65f118f71d6685_15505634 (Smarty_Internal_Template $_smarty_tpl) {
$_smarty_tpl->_checkPlugins(array(0=>array('file'=>'/suitecrm/public/legacy/include/Smarty/plugins/function.sugar_translate.php','function'=>'smarty_function_sugar_translate',),));
?>
<div id="contactsDialogue"></div>
<div id="contactsDialogueHTML" class="yui-hidden">
	<div id="contactsDialogueBody">
		<div id='addressBookTabsDiv'></div>
		<div id='contactsSearchTabs'>
		  <?php $_smarty_tpl->_subTemplateRender("file:modules/Emails/templates/addressSearch.tpl", $_smarty_tpl->cache_id, $_smarty_tpl->compile_id, 0, $_smarty_tpl->cache_lifetime, array(), 0, false);
?>
		</div>
		
        <table >
        <tr>
            <td >
                <div id="addrSearchGrid" ></div>
	           <div id='dt-pag-nav-addressbook'></div>
	        </td>
	        <td >
	           <span style="position:relative; top:1px;">&nbsp;
	               <div style="overflow: visible; height: 0; position: absolute; width: 0; right:-2em; top:-166px;">
	                   <h3 style=""><?php echo smarty_function_sugar_translate(array('label'=>"LBL_SELECTED_ADDR",'module'=>"Emails"),$_smarty_tpl);?>
:</h3>
	               </div>
	           </span>
	        </td>
	        <td valign="top">
	           <div id="addrSearchResultGrid"></div>
	           <div class="yui-pg-container">&nbsp;</div>
	         </td>
        </tr>
        </table>
	    
    </div>
</div><?php }
}
