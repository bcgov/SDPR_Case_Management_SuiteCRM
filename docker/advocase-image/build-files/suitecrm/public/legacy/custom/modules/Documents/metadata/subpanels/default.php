<?php

$subpanel_layout['list_fields'] = array(
  'date_entered' => 
  array (
    'type' => 'date',
    'vname' => 'LBL_DATE_ENTERED',
    'width' => '10%',
    'default' => true,
  ),
  'document_name'=> 
  array (
    'name' => 'document_name',
    'vname' => 'LBL_LIST_DOCUMENT_NAME',
    'widget_class' => 'SubPanelDetailViewLink',
    'width' => '20%',
  ),
  'assigned_user_name'=>
  array (
    'name' => 'assigned_user_name',
    'vname' => 'LBL_ASSIGNED_TO_NAME',
    'width' => '25%',
  ),
);