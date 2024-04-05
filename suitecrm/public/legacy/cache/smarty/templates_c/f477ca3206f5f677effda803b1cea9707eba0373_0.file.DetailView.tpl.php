<?php
/* Smarty version 4.3.2, created on 2024-03-13 03:10:20
  from '/suitecrm/public/legacy/themes/suite8/modules/Users/tpls/DetailView.tpl' */

/* @var Smarty_Internal_Template $_smarty_tpl */
if ($_smarty_tpl->_decodeProperties($_smarty_tpl, array (
  'version' => '4.3.2',
  'unifunc' => 'content_65f1191ca2d0d4_60163036',
  'has_nocache_code' => false,
  'file_dependency' => 
  array (
    'f477ca3206f5f677effda803b1cea9707eba0373' => 
    array (
      0 => '/suitecrm/public/legacy/themes/suite8/modules/Users/tpls/DetailView.tpl',
      1 => 1710133122,
      2 => 'file',
    ),
  ),
  'includes' => 
  array (
    'file:themes/suite8/include/DetailView/actions_menu.tpl' => 1,
    'file:themes/suite8/include/DetailView/tab_panel_content.tpl' => 3,
    'file:themes/suite8/modules/Users/tpls/DetailView-advanced-tab-content.tpl' => 1,
  ),
),false)) {
function content_65f1191ca2d0d4_60163036 (Smarty_Internal_Template $_smarty_tpl) {
$_smarty_tpl->_checkPlugins(array(0=>array('file'=>'/suitecrm/public/legacy/include/Smarty/plugins/function.sugar_include.php','function'=>'smarty_function_sugar_include',),1=>array('file'=>'/suitecrm/public/legacy/include/Smarty/plugins/function.counter.php','function'=>'smarty_function_counter',),));
?>
{*
/**
 *
 * SugarCRM Community Edition is a customer relationship management program developed by
 * SugarCRM, Inc. Copyright (C) 2004-2013 SugarCRM Inc.
 *
 * SuiteCRM is an extension to SugarCRM Community Edition developed by SalesAgility Ltd.
 * Copyright (C) 2011 - 2023 SalesAgility Ltd.
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

<?php echo smarty_function_sugar_include(array('type'=>"smarty",'file'=>$_smarty_tpl->tpl_vars['headerTpl']->value),$_smarty_tpl);?>

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
    {*display tabs*}
    <?php echo smarty_function_counter(array('name'=>"tabCount",'start'=>-1,'print'=>false,'assign'=>"tabCount"),$_smarty_tpl);?>

    <ul class="nav nav-tabs">
        <?php if ($_smarty_tpl->tpl_vars['useTabs']->value) {?>
            <?php
$_from = $_smarty_tpl->smarty->ext->_foreach->init($_smarty_tpl, $_smarty_tpl->tpl_vars['sectionPanels']->value, 'panel', false, 'label', 'section', array (
));
$_smarty_tpl->tpl_vars['panel']->do_else = true;
if ($_from !== null) foreach ($_from as $_smarty_tpl->tpl_vars['label']->value => $_smarty_tpl->tpl_vars['panel']->value) {
$_smarty_tpl->tpl_vars['panel']->do_else = false;
?>
                <?php $_smarty_tpl->smarty->ext->_capture->open($_smarty_tpl, 'label_upper', 'label_upper', null);
echo mb_strtoupper((string) $_smarty_tpl->tpl_vars['label']->value ?? '', 'UTF-8');
$_smarty_tpl->smarty->ext->_capture->close($_smarty_tpl);?>
                {* if tab *}
                <?php if (((isset($_smarty_tpl->tpl_vars['tabDefs']->value[$_smarty_tpl->tpl_vars['label_upper']->value]['newTab'])) && $_smarty_tpl->tpl_vars['tabDefs']->value[$_smarty_tpl->tpl_vars['label_upper']->value]['newTab'] == true)) {?>
                    {*if tab display*}
                    <?php echo smarty_function_counter(array('name'=>"tabCount",'print'=>false),$_smarty_tpl);?>

                    <?php if ($_smarty_tpl->tpl_vars['tabCount']->value == '0') {?>
                        <li role="presentation" class="active">
                            <a id="tab<?php echo $_smarty_tpl->tpl_vars['tabCount']->value;?>
" data-toggle="tab" class="hidden-xs">
                                {sugar_translate label='<?php echo $_smarty_tpl->tpl_vars['label']->value;?>
' module='<?php echo $_smarty_tpl->tpl_vars['module']->value;?>
'}
                            </a>
                            <a id="xstab<?php echo $_smarty_tpl->tpl_vars['tabCount']->value;?>
" href="#" class="visible-xs first-tab-xs dropdown-toggle" data-toggle="dropdown">
                                {sugar_translate label='<?php echo $_smarty_tpl->tpl_vars['label']->value;?>
' module='<?php echo $_smarty_tpl->tpl_vars['module']->value;?>
'}
                            </a>
                            <ul id="first-tab-menu-xs" class="dropdown-menu">
                        <?php echo smarty_function_counter(array('name'=>"tabCountXS",'start'=>-1,'print'=>false,'assign'=>"tabCountXS"),$_smarty_tpl);?>

                        <?php
$_from = $_smarty_tpl->smarty->ext->_foreach->init($_smarty_tpl, $_smarty_tpl->tpl_vars['sectionPanels']->value, 'panelXS', false, 'label', 'sectionXS', array (
));
$_smarty_tpl->tpl_vars['panelXS']->do_else = true;
if ($_from !== null) foreach ($_from as $_smarty_tpl->tpl_vars['label']->value => $_smarty_tpl->tpl_vars['panelXS']->value) {
$_smarty_tpl->tpl_vars['panelXS']->do_else = false;
?>
                            <?php echo smarty_function_counter(array('name'=>"tabCountXS",'print'=>false),$_smarty_tpl);?>

                            <li role="presentation">
                                <a id="tab<?php echo $_smarty_tpl->tpl_vars['tabCountXS']->value;?>
" data-toggle="tab" onclick="changeFirstTab(this, 'tab-content-<?php echo $_smarty_tpl->tpl_vars['tabCountXS']->value;?>
');">
                                    {sugar_translate label='<?php echo $_smarty_tpl->tpl_vars['label']->value;?>
' module='<?php echo $_smarty_tpl->tpl_vars['module']->value;?>
'}
                                </a>
                            </li>
                        <?php
}
$_smarty_tpl->smarty->ext->_foreach->restore($_smarty_tpl, 1);?>
                        <?php echo smarty_function_counter(array('name'=>"tabCountXS",'print'=>false),$_smarty_tpl);?>

                        <li role="presentation">
                            <a data-toggle="tab" id="tab<?php echo $_smarty_tpl->tpl_vars['tabCount']->value;?>
" href="#"><?php echo $_smarty_tpl->tpl_vars['MOD']->value['LBL_ADVANCED'];?>
</a>
                        </li>
                        {if $SHOW_ROLES == true}
                            <?php echo smarty_function_counter(array('name'=>"tabCountXS",'print'=>false),$_smarty_tpl);?>

                            <li role="presentation">
                                <a data-toggle="tab" id="tab<?php echo $_smarty_tpl->tpl_vars['tabCount']->value;?>
" href="#"><?php echo $_smarty_tpl->tpl_vars['MOD']->value['LBL_USER_ACCESS'];?>
</a>
                            </li>
                        {/if}
                        </ul>
                    </li>
                    <?php } else { ?>
                    <li role="presentation" class="hidden-xs">
                        <a id="tab<?php echo $_smarty_tpl->tpl_vars['tabCount']->value;?>
" data-toggle="tab">
                            {sugar_translate label='<?php echo $_smarty_tpl->tpl_vars['label']->value;?>
' module='<?php echo $_smarty_tpl->tpl_vars['module']->value;?>
'}
                        </a>
                    </li>
                    <?php }?>
                <?php } else { ?>
                    {* if panel skip*}
                <?php }?>
            <?php
}
$_smarty_tpl->smarty->ext->_foreach->restore($_smarty_tpl, 1);?>
        <?php }?>
        <?php echo smarty_function_counter(array('name'=>"tabCount",'print'=>false),$_smarty_tpl);?>

        <li role="presentation" class="hidden-xs ">
            <a data-toggle="tab" id="tab<?php echo $_smarty_tpl->tpl_vars['tabCount']->value;?>
" href="#"><?php echo $_smarty_tpl->tpl_vars['MOD']->value['LBL_ADVANCED'];?>
</a>
        </li>
        {if $SHOW_ROLES}
            <?php echo smarty_function_counter(array('name'=>"tabCount",'print'=>false),$_smarty_tpl);?>

            <li role="presentation" class="hidden-xs ">
                <a data-toggle="tab" id="tab<?php echo $_smarty_tpl->tpl_vars['tabCount']->value;?>
" href="#"><?php echo $_smarty_tpl->tpl_vars['MOD']->value['LBL_USER_ACCESS'];?>
</a>
            </li>
        {/if}
        {if $config.enable_action_menu}
            <li id="tab-actions" class="dropdown">
                <a class="dropdown-toggle" data-toggle="dropdown" href="#"><?php echo $_smarty_tpl->tpl_vars['APP']->value['LBL_LINK_ACTIONS'];?>
<span class="suitepicon suitepicon-action-caret"></span></a>
                <?php $_smarty_tpl->_subTemplateRender("file:themes/suite8/include/DetailView/actions_menu.tpl", $_smarty_tpl->cache_id, $_smarty_tpl->compile_id, 0, $_smarty_tpl->cache_lifetime, array(), 0, false);
?>
            </li>
        {/if}
    </ul>

    <div class="clearfix"></div>
    <?php if ($_smarty_tpl->tpl_vars['useTabs']->value) {?>
        <!-- TAB CONTENT USE TABS -->
        <div class="tab-content">
    <?php } else { ?>
        <!-- TAB CONTENT DOESN'T USE TABS -->
        <div class="tab-content" style="padding: 0; border: 0;">
         <?php }?>
            {* Loop through all top level panels first *}
            <?php echo smarty_function_counter(array('name'=>"tabCount",'start'=>0,'print'=>false,'assign'=>"tabCount"),$_smarty_tpl);?>

            <?php if ($_smarty_tpl->tpl_vars['useTabs']->value) {?>
                <?php
$_from = $_smarty_tpl->smarty->ext->_foreach->init($_smarty_tpl, $_smarty_tpl->tpl_vars['sectionPanels']->value, 'panel', false, 'label', 'section', array (
));
$_smarty_tpl->tpl_vars['panel']->do_else = true;
if ($_from !== null) foreach ($_from as $_smarty_tpl->tpl_vars['label']->value => $_smarty_tpl->tpl_vars['panel']->value) {
$_smarty_tpl->tpl_vars['panel']->do_else = false;
?>
                    <?php $_smarty_tpl->smarty->ext->_capture->open($_smarty_tpl, 'label_upper', 'label_upper', null);
echo mb_strtoupper((string) $_smarty_tpl->tpl_vars['label']->value ?? '', 'UTF-8');
$_smarty_tpl->smarty->ext->_capture->close($_smarty_tpl);?>
                    <?php if ((isset($_smarty_tpl->tpl_vars['tabDefs']->value[$_smarty_tpl->tpl_vars['label_upper']->value]['newTab'])) && $_smarty_tpl->tpl_vars['tabDefs']->value[$_smarty_tpl->tpl_vars['label_upper']->value]['newTab'] == true) {?>
                        <?php if ($_smarty_tpl->tpl_vars['tabCount']->value == '0') {?>
                            <div class="tab-pane-NOBOOTSTRAPTOGGLER active fade in" id='tab-content-<?php echo $_smarty_tpl->tpl_vars['tabCount']->value;?>
'>
                                <?php $_smarty_tpl->_subTemplateRender('file:themes/suite8/include/DetailView/tab_panel_content.tpl', $_smarty_tpl->cache_id, $_smarty_tpl->compile_id, 0, $_smarty_tpl->cache_lifetime, array(), 0, true);
?>
                            </div>
                        <?php } else { ?>
                            <div class="tab-pane-NOBOOTSTRAPTOGGLER fade" id='tab-content-<?php echo $_smarty_tpl->tpl_vars['tabCount']->value;?>
'>
                                <?php $_smarty_tpl->_subTemplateRender('file:themes/suite8/include/DetailView/tab_panel_content.tpl', $_smarty_tpl->cache_id, $_smarty_tpl->compile_id, 0, $_smarty_tpl->cache_lifetime, array(), 0, true);
?>
                            </div>
                        <?php }?>
                    <?php }?>
                    <?php echo smarty_function_counter(array('name'=>"tabCount",'print'=>false),$_smarty_tpl);?>

                <?php
}
$_smarty_tpl->smarty->ext->_foreach->restore($_smarty_tpl, 1);?>
                {* advanced users tab *}
                <div class="tab-pane-NOBOOTSTRAPTOGGLER fade" id='tab-content-<?php echo $_smarty_tpl->tpl_vars['tabCount']->value;?>
' >
                    <?php $_smarty_tpl->_subTemplateRender('file:themes/suite8/modules/Users/tpls/DetailView-advanced-tab-content.tpl', $_smarty_tpl->cache_id, $_smarty_tpl->compile_id, 0, $_smarty_tpl->cache_lifetime, array(), 0, false);
?>
                </div>
                {if $SHOW_ROLES}
                    <?php echo smarty_function_counter(array('name'=>"tabCount",'print'=>false),$_smarty_tpl);?>

                    {* access users tab (ACL ROLE matrix) *}
                    <div class="tab-pane-NOBOOTSTRAPTOGGLER fade" id='tab-content-<?php echo $_smarty_tpl->tpl_vars['tabCount']->value;?>
'>
                        <div class="row detail-view-row">
                            {$ROLE_HTML}
                        </div>
                    </div>
                {/if}
            <?php } else { ?>
                <div class="tab-pane-NOBOOTSTRAPTOGGLER panel-collapse"></div>
            <?php }?>
            </div>
                {*display panels*}
            <div class="panel-content">
                <div>&nbsp;</div>
                <?php echo smarty_function_counter(array('name'=>"panelCount",'start'=>-1,'print'=>false,'assign'=>"panelCount"),$_smarty_tpl);?>

                <?php
$_from = $_smarty_tpl->smarty->ext->_foreach->init($_smarty_tpl, $_smarty_tpl->tpl_vars['sectionPanels']->value, 'panel', false, 'label', 'section', array (
));
$_smarty_tpl->tpl_vars['panel']->do_else = true;
if ($_from !== null) foreach ($_from as $_smarty_tpl->tpl_vars['label']->value => $_smarty_tpl->tpl_vars['panel']->value) {
$_smarty_tpl->tpl_vars['panel']->do_else = false;
?>
                    <?php $_smarty_tpl->smarty->ext->_capture->open($_smarty_tpl, 'label_upper', 'label_upper', null);
echo mb_strtoupper((string) $_smarty_tpl->tpl_vars['label']->value ?? '', 'UTF-8');
$_smarty_tpl->smarty->ext->_capture->close($_smarty_tpl);?>
                    {* if tab *}
                    <?php if (((isset($_smarty_tpl->tpl_vars['tabDefs']->value[$_smarty_tpl->tpl_vars['label_upper']->value]['newTab'])) && $_smarty_tpl->tpl_vars['tabDefs']->value[$_smarty_tpl->tpl_vars['label_upper']->value]['newTab'] == true && $_smarty_tpl->tpl_vars['useTabs']->value)) {?>
                        {*if tab skip*}
                    <?php } else { ?>
                        {* if panel display*}
                        {*if panel collasped*}
                        <?php if (((isset($_smarty_tpl->tpl_vars['tabDefs']->value[$_smarty_tpl->tpl_vars['label_upper']->value]['panelDefault'])) && $_smarty_tpl->tpl_vars['tabDefs']->value[$_smarty_tpl->tpl_vars['label_upper']->value]['panelDefault'] == "collapsed")) {?>
                            {*collapse panel*}
                            <?php $_smarty_tpl->_assignInScope('collapse', "panel-collapse collapse");?>
                            <?php $_smarty_tpl->_assignInScope('collapsed', "collapsed");?>
                            <?php $_smarty_tpl->_assignInScope('collapseIcon', "glyphicon glyphicon-plus");?>
                            <?php $_smarty_tpl->_assignInScope('panelHeadingCollapse', "panel-heading-collapse");?>
                        <?php } else { ?>
                            {*expand panel*}
                            <?php $_smarty_tpl->_assignInScope('collapse', "panel-collapse collapse in");?>
                            <?php $_smarty_tpl->_assignInScope('collapseIcon', "glyphicon glyphicon-minus");?>
                            <?php $_smarty_tpl->_assignInScope('panelHeadingCollapse', '');?>
                        <?php }?>
                        <?php if ($_smarty_tpl->tpl_vars['label']->value != "LBL_AOP_CASE_UPDATES") {?>
                            <?php $_smarty_tpl->_assignInScope('panelId', "top-panel-".((string)$_smarty_tpl->tpl_vars['panelCount']->value));?>
                        <?php } else { ?>
                            <?php $_smarty_tpl->_assignInScope('panelId', "LBL_AOP_CASE_UPDATES");?>
                        <?php }?>
                        <div class="panel panel-default">
                        <div class="panel-heading <?php echo $_smarty_tpl->tpl_vars['panelHeadingCollapse']->value;?>
">
                            <a class="<?php echo $_smarty_tpl->tpl_vars['collapsed']->value;?>
" role="button" data-toggle="collapse" href="#<?php echo $_smarty_tpl->tpl_vars['panelId']->value;?>
" aria-expanded="false">
                                <div class="col-xs-10 col-sm-11 col-md-11">
                                    {sugar_translate label='<?php echo $_smarty_tpl->tpl_vars['label']->value;?>
' module='<?php echo $_smarty_tpl->tpl_vars['module']->value;?>
'}
                                </div>
                            </a>

                        </div>
                        <div class="panel-body <?php echo $_smarty_tpl->tpl_vars['collapse']->value;?>
" id="<?php echo $_smarty_tpl->tpl_vars['panelId']->value;?>
">
                            <div class="tab-content">
                                <!-- TAB CONTENT -->
                                <?php $_smarty_tpl->_subTemplateRender('file:themes/suite8/include/DetailView/tab_panel_content.tpl', $_smarty_tpl->cache_id, $_smarty_tpl->compile_id, 0, $_smarty_tpl->cache_lifetime, array(), 0, true);
?>
                            </div>
                        </div>
                    </div>

                    <?php }?>
                    <?php echo smarty_function_counter(array('name'=>"panelCount",'print'=>false),$_smarty_tpl);?>

                <?php
}
$_smarty_tpl->smarty->ext->_foreach->restore($_smarty_tpl, 1);?>
                </div>
            </div>

            <?php $_smarty_tpl->_subTemplateRender($_smarty_tpl->tpl_vars['footerTpl']->value, $_smarty_tpl->cache_id, $_smarty_tpl->compile_id, 0, $_smarty_tpl->cache_lifetime, array(), 0, true);
?>
            {*<?php if ($_smarty_tpl->tpl_vars['useTabs']->value) {?>*}
            {*<?php echo '<script'; ?>
 type='text/javascript' src='{sugar_getjspath file='include/javascript/popup_helper.js'}'><?php echo '</script'; ?>
>*}
            {*<?php echo '<script'; ?>
 type="text/javascript" src="{sugar_getjspath file='cache/include/javascript/sugar_grp_yui_widgets.js'}"><?php echo '</script'; ?>
>*}
            {*<?php echo '<script'; ?>
 type="text/javascript">*}
            {*var <?php echo $_smarty_tpl->tpl_vars['module']->value;?>
_detailview_tabs = new YAHOO.widget.TabView("<?php echo $_smarty_tpl->tpl_vars['module']->value;?>
_detailview_tabs");*}
            {*<?php echo $_smarty_tpl->tpl_vars['module']->value;?>
_detailview_tabs.selectTab(0);*}
            {*<?php echo '</script'; ?>
>*}
            {*<?php }?>*}
            <?php echo '<script'; ?>
 type="text/javascript" src="include/InlineEditing/inlineEditing.js"><?php echo '</script'; ?>
>
            <?php echo '<script'; ?>
 type="text/javascript" src="modules/Favorites/favorites.js"><?php echo '</script'; ?>
>
            <?php echo '<script'; ?>
 type='text/javascript' src='{sugar_getjspath file='modules/Users/DetailView.js'}'><?php echo '</script'; ?>
>
            {literal}

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
            {/literal}
<?php }
}
