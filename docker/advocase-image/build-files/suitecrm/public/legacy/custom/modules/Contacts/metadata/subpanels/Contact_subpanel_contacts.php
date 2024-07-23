<?php
// created: 2024-07-20 14:50:22
$subpanel_layout['list_fields'] = array (
  'name' =>
  array (
    'name' => 'name',
    'vname' => 'LBL_LIST_NAME',
    'widget_class' => 'SubPanelDetailViewLink',
    'module' => 'Contacts',
    'width' => '23%',
    'default' => true,
  ),
  'primary_address_city' =>
  array (
    'type' => 'varchar',
    'vname' => 'LBL_LIST_PRIMARY_ADDRESS_CITY',
    'width' => '10%',
    'default' => true,
  ),
  'advocase_contact_region_c' =>
  array (
    'type' => 'varchar',
    'default' => true,
    'vname' => 'LBL_LIST_ADVOCASE_CONTACT_REGION_C',
    'width' => '10%',
  ),
  'phone_work' =>
  array (
    'name' => 'phone_work',
    'vname' => 'LBL_LIST_PHONE',
    'width' => '15%',
    'default' => true,
  ),
  'advocase_email_c' =>
  array (
    'name' => 'advocase_email_c',
    'vname' => 'LBL_ADVOCASE_EMAIL_C',
    'width' => '15%',
    'sortable' => false,
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
  'contact_id' =>
  array (
    'usage' => 'query_only',
  ),
);
