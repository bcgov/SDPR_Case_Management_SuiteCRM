<?php
/* Smarty version 4.3.2, created on 2024-03-11 17:06:13
  from '/suitecrm/public/legacy/themes/suite8/include/Dashlets/DashletHeader.tpl' */

/* @var Smarty_Internal_Template $_smarty_tpl */
if ($_smarty_tpl->_decodeProperties($_smarty_tpl, array (
  'version' => '4.3.2',
  'unifunc' => 'content_65ef3a05ec40c4_07392478',
  'has_nocache_code' => false,
  'file_dependency' => 
  array (
    '1bc1ba9a738ba6d24bdc8d9284f7ac8982216073' => 
    array (
      0 => '/suitecrm/public/legacy/themes/suite8/include/Dashlets/DashletHeader.tpl',
      1 => 1710133119,
      2 => 'file',
    ),
  ),
  'includes' => 
  array (
  ),
),false)) {
function content_65ef3a05ec40c4_07392478 (Smarty_Internal_Template $_smarty_tpl) {
$_smarty_tpl->_checkPlugins(array(0=>array('file'=>'/suitecrm/public/legacy/include/Smarty/plugins/modifier.replace.php','function'=>'smarty_modifier_replace',),1=>array('file'=>'/suitecrm/public/legacy/include/Smarty/plugins/function.sugar_getimage.php','function'=>'smarty_function_sugar_getimage',),));
?>
<div onmouseover="this.style.cursor = 'move';" id="dashlet_header_<?php echo $_smarty_tpl->tpl_vars['DASHLET_ID']->value;?>
" class="hd dashlet">
    <div class="tl"></div>
    <div class="hd-center">
        <table width="100%" cellpadding="0" cellspacing="0" border="0" class="formHeader h3Row">
            <tr>
                <td class="dashlet-title" colspan="2">
                    <div class="dashboard-title">
                        <span class="suitepicon suitepicon-module-<?php echo smarty_modifier_replace(mb_strtolower((string) $_smarty_tpl->tpl_vars['DASHLET_MODULE']->value, 'UTF-8'),'_','-');?>
"></span>
                       <span><?php echo $_smarty_tpl->tpl_vars['DASHLET_TITLE']->value;?>
</span>
                    </div>
                </td>
                <td style="padding-right: 0px;" nowrap="" width="1%">
                    <div class="dashletToolSet">
                        <a href="javascript:void(0)" title="<?php echo $_smarty_tpl->tpl_vars['DASHLET_BUTTON_ARIA_REFRESH']->value;?>
" aria-label="<?php echo $_smarty_tpl->tpl_vars['DASHLET_BUTTON_ARIA_REFRESH']->value;?>
" onclick="SUGAR.mySugar.retrieveDashlet('<?php echo $_smarty_tpl->tpl_vars['DASHLET_ID']->value;?>
'); return false;">
                            <span class="refresh"><?php echo smarty_function_sugar_getimage(array('name'=>"refresh"),$_smarty_tpl);?>
</span>
                        </a>
                        <a href="javascript:void(0)" title="<?php echo $_smarty_tpl->tpl_vars['DASHLET_BUTTON_ARIA_EDIT']->value;?>
" aria-label="<?php echo $_smarty_tpl->tpl_vars['DASHLET_BUTTON_ARIA_EDIT']->value;?>
" onclick="SUGAR.mySugar.configureDashlet('<?php echo $_smarty_tpl->tpl_vars['DASHLET_ID']->value;?>
'); return false;">
                            <span class="settings"><?php echo smarty_function_sugar_getimage(array('name'=>"settings"),$_smarty_tpl);?>
</span>
                        </a>
                        <a href="javascript:void(0)" title="<?php echo $_smarty_tpl->tpl_vars['DASHLET_BUTTON_ARIA_DELETE']->value;?>
" aria-label="<?php echo $_smarty_tpl->tpl_vars['DASHLET_BUTTON_ARIA_DELETE']->value;?>
" onclick="SUGAR.mySugar.deleteDashlet('<?php echo $_smarty_tpl->tpl_vars['DASHLET_ID']->value;?>
'); return false;">
                            <span class="cross"><?php echo smarty_function_sugar_getimage(array('name'=>"cross"),$_smarty_tpl);?>
</span>
                        </a>
                    </div>
                </td>
            </tr>
        </table>
    </div>
    <div class="tr"></div>
</div>
<div class="bd">
    <div class="ml"></div>
    <div class="bd-center">
<?php }
}
