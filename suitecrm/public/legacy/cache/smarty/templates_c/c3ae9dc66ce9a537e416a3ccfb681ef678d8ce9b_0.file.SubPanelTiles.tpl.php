<?php
/* Smarty version 4.3.2, created on 2024-03-13 03:10:20
  from '/suitecrm/public/legacy/themes/suite8/include/SubPanel/tpls/SubPanelTiles.tpl' */

/* @var Smarty_Internal_Template $_smarty_tpl */
if ($_smarty_tpl->_decodeProperties($_smarty_tpl, array (
  'version' => '4.3.2',
  'unifunc' => 'content_65f1191cbba973_20776387',
  'has_nocache_code' => false,
  'file_dependency' => 
  array (
    'c3ae9dc66ce9a537e416a3ccfb681ef678d8ce9b' => 
    array (
      0 => '/suitecrm/public/legacy/themes/suite8/include/SubPanel/tpls/SubPanelTiles.tpl',
      1 => 1710133121,
      2 => 'file',
    ),
  ),
  'includes' => 
  array (
  ),
),false)) {
function content_65f1191cbba973_20776387 (Smarty_Internal_Template $_smarty_tpl) {
$_smarty_tpl->_checkPlugins(array(0=>array('file'=>'/suitecrm/public/legacy/include/Smarty/plugins/function.sugar_getjspath.php','function'=>'smarty_function_sugar_getjspath',),1=>array('file'=>'/suitecrm/public/legacy/include/Smarty/plugins/modifier.replace.php','function'=>'smarty_modifier_replace',),));
?>
<br>

<?php echo '<script'; ?>
 type="text/javascript" src="<?php echo smarty_function_sugar_getjspath(array('file'=>'include/SubPanel/SubPanelTiles.js'),$_smarty_tpl);?>
"><?php echo '</script'; ?>
>

<ul class="noBullet" id="subpanel_list">
<?php
$_from = $_smarty_tpl->smarty->ext->_foreach->init($_smarty_tpl, $_smarty_tpl->tpl_vars['subpanel_tabs']->value, 'subpanel_tab', false, 'i');
$_smarty_tpl->tpl_vars['subpanel_tab']->do_else = true;
if ($_from !== null) foreach ($_from as $_smarty_tpl->tpl_vars['i']->value => $_smarty_tpl->tpl_vars['subpanel_tab']->value) {
$_smarty_tpl->tpl_vars['subpanel_tab']->do_else = false;
?>
    <li class="noBullet useFooTable" id="whole_subpanel_<?php echo $_smarty_tpl->tpl_vars['subpanel_tab']->value;?>
">
        <?php echo $_smarty_tpl->tpl_vars['subpanel_tabs_properties']->value[$_smarty_tpl->tpl_vars['i']->value]['collapse_subpanels'];?>

        <div class="panel panel-default sub-panel">
            <div class="panel-heading panel-heading-collapse">

            <?php if ($_smarty_tpl->tpl_vars['subpanel_tabs_properties']->value[$_smarty_tpl->tpl_vars['i']->value]['expanded_subpanels'] == true) {?>
                <a id="subpanel_title_<?php echo $_smarty_tpl->tpl_vars['subpanel_tab']->value;?>
" class="in" role="button" data-toggle="collapse" href="#subpanel_<?php echo $_smarty_tpl->tpl_vars['subpanel_tab']->value;?>
" aria-expanded="false"
                   onclick="toggleSubpanelCookie('<?php echo $_smarty_tpl->tpl_vars['subpanel_tab']->value;?>
');">
            <?php } else { ?>
                    <a id="subpanel_title_<?php echo $_smarty_tpl->tpl_vars['subpanel_tab']->value;?>
"
                       class="collapsed<?php if ((isset($_smarty_tpl->tpl_vars['subpanel_tabs_properties']->value[$_smarty_tpl->tpl_vars['i']->value]['collapsed_override']))) {?> collapsed-override<?php }?>"
                       role="button" data-toggle="collapse"
                       href="#subpanel_<?php echo $_smarty_tpl->tpl_vars['subpanel_tab']->value;?>
" aria-expanded="false"
                       onclick="showSubPanel('<?php echo $_smarty_tpl->tpl_vars['subpanel_tab']->value;?>
'); toggleSubpanelCookie('<?php echo $_smarty_tpl->tpl_vars['subpanel_tab']->value;?>
');">
            <?php }?>
                    <div class="col-xs-10 col-sm-11 col-md-11">
                        <div style="display: inline;">
                            <span class="suitepicon suitepicon-module-<?php echo smarty_modifier_replace(mb_strtolower((string) $_smarty_tpl->tpl_vars['subpanel_tabs_properties']->value[$_smarty_tpl->tpl_vars['i']->value]['module_name'], 'UTF-8'),'_','-');?>
 subpanel-icon"></span>
                            <?php echo $_smarty_tpl->tpl_vars['subpanel_tabs_properties']->value[$_smarty_tpl->tpl_vars['i']->value]['title'];?>

                        </div>
                    </div>
                </a>

            </div>

            <?php if ($_smarty_tpl->tpl_vars['subpanel_tabs_properties']->value[$_smarty_tpl->tpl_vars['i']->value]['expanded_subpanels'] == true) {?>
                <div class="panel-body panel-collapse collapse in" id="subpanel_<?php echo $_smarty_tpl->tpl_vars['subpanel_tab']->value;?>
">
            <?php } else { ?>
                <div class="panel-body panel-collapse collapse" id="subpanel_<?php echo $_smarty_tpl->tpl_vars['subpanel_tab']->value;?>
">
            <?php }?>
                    <div class="tab-content">
                        <div id="list_subpanel_<?php echo $_smarty_tpl->tpl_vars['subpanel_tab']->value;?>
">
                            <?php echo $_smarty_tpl->tpl_vars['subpanel_tabs_properties']->value[$_smarty_tpl->tpl_vars['i']->value]['subpanel_body'];?>

                        </div>
                    </div>
            </div>
        </div>
    </li>
<?php
}
$_smarty_tpl->smarty->ext->_foreach->restore($_smarty_tpl, 1);?>
</ul>
<?php if (empty($_smarty_tpl->tpl_vars['sugar_config']->value['lock_subpanels']) || $_smarty_tpl->tpl_vars['sugar_config']->value['lock_subpanels'] == false) {?>
        <?php echo '<script'; ?>
>
        
        var SubpanelInit = function() {
            SubpanelInitTabNames(<?php echo $_smarty_tpl->tpl_vars['tab_names']->value;?>
);
          $('.sub-panel .table-responsive').footable();
          // collapse subpanels when device is mobile / tablet
          if($(window).width() <= SUGAR.measurements.breakpoints.large) {
            $('[id^=subpanel] .panel-collapse').removeClass('in');
            $('.panel-heading-collapse a').removeClass('in');
            $('.panel-heading-collapse a').addClass('collapsed');
          }
        }
        var SubpanelInitTabNames = function(tabNames) {
            subpanel_dd = new Array();
            j = 0;
            for(i in tabNames) {
                subpanel_dd[j] = new ygDDList('whole_subpanel_' + tabNames[i]);
                subpanel_dd[j].setHandleElId('subpanel_title_' + tabNames[i]);
                subpanel_dd[j].onMouseDown = SUGAR.subpanelUtils.onDrag;
                subpanel_dd[j].afterEndDrag = SUGAR.subpanelUtils.onDrop;
                j++;
            }
            YAHOO.util.DDM.mode = 1;
        }
        currentModule = '<?php echo $_smarty_tpl->tpl_vars['module']->value;?>
';
        SUGAR.util.doWhen(
                "typeof(SUGAR.subpanelUtils) == 'object' && typeof(SUGAR.subpanelUtils.onDrag) == 'function'" +
                " && document.getElementById('subpanel_list')",
                SubpanelInit
        );
        
    <?php echo '</script'; ?>
>
<?php }
echo '<script'; ?>
>
    var ModuleSubPanels = <?php echo $_smarty_tpl->tpl_vars['module_sub_panels']->value;?>
;
    
    setTimeout(function() {
        if(typeof SUGAR.subpanelUtils.currentSubpanelGroup !== "undefined") {
            SUGAR.subpanelUtils.loadSubpanelGroup(SUGAR.subpanelUtils.currentSubpanelGroup);
        }
    }, 500);
    
<?php echo '</script'; ?>
>


<?php }
}
