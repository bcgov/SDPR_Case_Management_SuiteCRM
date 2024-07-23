<?php
// created: 2024-07-22 17:18:57
$subpanel_layout['list_fields'] = array (
  array (
  'date_entered' => 
  array (
    'width' => '10%',
    'vname' => 'LBL_DATE_ENTERED',
    'default' => true,
  ),
  'name' => 
  array (
    'width' => '50%',
    'vname' => 'LBL_LIST_SUBJECT',
    'link' => true,
    'default' => true,
  ),
  'advocase_case_city_c' => 
  array (
    'type' => 'varchar',
    'default' => true,
    'vname' => 'LBL_ADVOCASE_CASE_CITY',
    'width' => '10%',
  ),
  'advocase_case_region_c' => 
  array (
    'type' => 'varchar',
    'default' => true,
    'vname' => 'LBL_ADVOCASE_CASE_REGION',
    'width' => '10%',
  ),
  'assigned_user_name' => 
  array (
    'width' => '10%',
    'vname' => 'LBL_ASSIGNED_TO_NAME',
    'module' => 'Employees',
    'id' => 'ASSIGNED_USER_ID',
    'default' => true,
  ),
  'state' => 
  array (
    'width' => '10%',
    'vname' => 'LBL_LIST_STATE',
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
  'first_name' =>
  array (
    'name' => 'first_name',
    'usage' => 'query_only',
  ),
  'last_name' =>
  array (
    'name' => 'last_name',
    'usage' => 'query_only',
  ),
  'salutation' =>
  array (
    'name' => 'salutation',
    'usage' => 'query_only',
  ),
  'account_id' =>
  array (
    'usage' => 'query_only',
  ),
)
);
?>