<?php

$subpanel_layout['list_fields'] = array (
  'date_entered' => 
  array (
    'type' => 'date',
    'vname' => 'LBL_DATE_ENTERED',
    'width' => '10%',
    'default' => true,
  ),
  'name' => 
  array (
    'name' => 'name',
    'vname' => 'LBL_LIST_NAME',
    'widget_class' => 'SubPanelDetailViewLink',
    'module' => 'Contacts',
    'width' => '23%',
    'default' => true,
  ),
  'advocase_case_city_c' => 
  array (
    'type' => 'varchar',
    'default' => true,
    'vname' => 'LBL_ADVOCASE_CASE_CITY_C',
    'width' => '10%',
  ),
  'advocase_case_region_c' => 
  array (
    'type' => 'enum',
    'default' => true,
    'studio' => 'visible',
    'vname' => 'LBL_ADVOCASE_CASE_REGION',
    'width' => '10%',
  ),
  'assigned_user_name' => 
  array (
    'link' => true,
    'type' => 'relate',
    'vname' => 'LBL_ASSIGNED_TO_NAME',
    'id' => 'ASSIGNED_USER_ID',
    'width' => '10%',
    'default' => true,
    'widget_class' => 'SubPanelDetailViewLink',
    'target_module' => 'Users',
    'target_record_key' => 'assigned_user_id',
  ),
  'status' => 
  array (
    'type' => 'dynamicenum',
    'vname' => 'LBL_STATUS',
    'width' => '10%',
    'default' => true,
  ),
  'edit_button' => 
  array (
    'vname' => 'LBL_EDIT_BUTTON',
    'widget_class' => 'SubPanelEditButton',
    'module' => 'Contacts',
    'width' => '5%',
    'default' => true,
  ),
  'remove_button' => 
  array (
    'vname' => 'LBL_REMOVE',
    'widget_class' => 'SubPanelRemoveButton',
    'module' => 'Contacts',
    'width' => '5%',
    'default' => true,
  ),
  'contact_id' => 
  array (
    'usage' => 'query_only',
  ),
);

$subpanel_layout['insightWidget'] = array(
  'rows' => [
    [
      'justify' => 'start',
      'cols' => [
          [
            'icon' => 'Cases',
          ],
          [
            'labelKey' => '{{title_key}}',
            'class' => 'sub-panel-banner-button-title',
            'bold' => true,
          ]
        ]
    ],
    [
      'align' => 'center',
      'justify' => 'start',
      'class' => 'sub-panel-body',
      'cols' => [
          [
            'descriptionKey' => '{{title_key}}_INSIGHT_DESCRIPTION',
            'class' => 'sub-panel-banner-tooltip',
          ],
          [
            'display' => 'hidden',
            'statistic' => 'cases'
          ],
          [
            'dynamicLabel' => 'LBL_CASES_INSIGHT',
            'class' => 'sub-panel-banner-value',
            'bold' => true,
          ],
          [
            'display' => 'hidden',
            'statistic' => 'default'
          ]
      ]
    ],
  ]
);
