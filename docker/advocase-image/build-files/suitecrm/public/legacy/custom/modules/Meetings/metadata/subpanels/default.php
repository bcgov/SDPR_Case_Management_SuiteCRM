<?php

$subpanel_layout['list_fields'] = array(
  'date_entered' => 
  array (
    'type' => 'date',
    'vname' => 'LBL_DATE_ENTERED',
    'width' => '10%',
    'default' => true,
  ),
  'name'=>
  array (
    'name' => 'name',
    'vname' => 'LBL_LIST_SUBJECT',
    'widget_class' => 'SubPanelDetailViewLink',
    'width' => '50%',
  ),
  'contact_name'=>
  array (
    'widget_class' => 'SubPanelDetailViewLink',
    'vname' => 'LBL_LIST_CONTACT',
    'width' => '25%',
    'target_record_key' => 'contact_id',
    'target_module' => 'Contacts',
    'module'=> 'Contacts'
  ),
  'assigned_user_name'=>
  array (
    'name' => 'assigned_user_name',
    'vname' => 'LBL_ASSIGNED_TO_NAME',
    'width' => '25%',
  ),
);