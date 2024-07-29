<?php
$viewdefs ['AOR_Reports'] = 
array (
  'EditView' => 
  array (
    'templateMeta' => 
    array (
      'maxColumns' => '2',
      'widths' => 
      array (
        0 => 
        array (
          'label' => '10',
          'field' => '30',
        ),
        1 => 
        array (
          'label' => '10',
          'field' => '30',
        ),
      ),
      'useTabs' => false,
      'form' => 
      array (
        'headerTpl' => 'modules/AOR_Reports/tpls/EditViewHeader.tpl',
        'footerTpl' => 'modules/AOR_Reports/tpls/EditViewFooter.tpl',
      ),
      'tabDefs' => 
      array (
        'DEFAULT' => 
        array (
          'newTab' => false,
          'panelDefault' => 'expanded',
        ),
      ),
      'syncDetailEditViews' => true,
    ),
    'panels' => 
    array (
      'default' => 
      array (
        0 => 
        array (
          0 => 'name',
          1 => 'assigned_user_name',
        ),
        1 => 
        array (
          0 => 
          array (
            'name' => 'report_module',
            'studio' => 'visible',
            'label' => 'LBL_REPORT_MODULE',
          ),
          1 => 
          array (
            'name' => 'graphs_per_row',
            'label' => 'LBL_GRAPHS_PER_ROW',
          ),
        ),
        2 => 
        array (
          0 => 'description',
          1 => '',
        ),
      ),
    ),
  ),
);
;
?>
