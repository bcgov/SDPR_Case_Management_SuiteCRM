<?php
// created: 2024-06-19 17:18:57
$subpanel_layout['list_fields'] = array (
  'name' =>
  array (
    'width' => '23%',
    'vname' => 'LBL_LIST_NAME',
    'default' => true,
    'widget_class' => 'SubPanelDetailViewLink',
  ),
  'advocase_contact_type_c' =>
  array (
    'type' => 'enum',
    'default' => true,
    'studio' => 'visible',
    'vname' => 'LBL_ADVOCASE_CONTACT_TYPE',
    'width' => '10%',
  ),
  'advocase_contact_region_c' =>
  array (
    'type' => 'enum',
    'default' => true,
    'studio' => 'visible',
    'vname' => 'LBL_LIST_ADVOCASE_CONTACT_REGION',
    'width' => '10%',
  ),
  'advocase_contact_city_c' =>
  array (
    'type' => 'varchar',
    'default' => true,
    'vname' => 'LBL_ADVOCASE_CONTACT_CITY',
    'width' => '10%',
  ),
  'advocase_phone_numbe_c' =>
  array (
    'type' => 'phone',
    'default' => true,
    'vname' => 'LBL_ADVOCASE_PHONE_NUMBE',
    'width' => '10%',
  ),
  'advocase_email_c' =>
  array (
    'type' => 'varchar',
    'default' => true,
    'vname' => 'LBL_ADVOCASE_EMAIL',
    'width' => '10%',
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
);
