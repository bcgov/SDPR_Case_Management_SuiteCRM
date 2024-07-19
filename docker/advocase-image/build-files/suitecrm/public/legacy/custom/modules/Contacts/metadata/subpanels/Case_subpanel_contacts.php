<?php
// created: 2024-06-19 17:18:57
$subpanel_layout['list_fields'] = array (
 array (
  'DATE_ENTERED' => 
  array (
    'width' => '10%',
    'label' => 'LBL_DATE_ENTERED',
    'default' => true,
  ),
  'NAME' => 
  array (
    'width' => '50%',
    'label' => 'LBL_LIST_SUBJECT',
    'link' => true,
    'default' => true,
  ),
  'ADVOCASE_CASE_CITY_C' => 
  array (
    'type' => 'varchar',
    'default' => true,
    'label' => 'LBL_ADVOCASE_CASE_CITY',
    'width' => '10%',
  ),
  'ADVOCASE_CASE_REGION_C' => 
  array (
    'type' => 'enum',
    'default' => true,
    'studio' => 'visible',
    'label' => 'LBL_ADVOCASE_CASE_REGION',
    'width' => '10%',
  ),
  'ASSIGNED_USER_NAME' => 
  array (
    'width' => '10%',
    'label' => 'LBL_ASSIGNED_TO_NAME',
    'module' => 'Employees',
    'id' => 'ASSIGNED_USER_ID',
    'default' => true,
  ),
  'STATE' => 
  array (
    'width' => '10%',
    'label' => 'LBL_LIST_STATE',
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