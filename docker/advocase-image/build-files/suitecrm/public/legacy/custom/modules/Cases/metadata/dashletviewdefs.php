<?php
$dashletData['CasesDashlet']['searchFields'] = array (
  'date_entered' => 
  array (
    'default' => '',
  ),
  'priority' => 
  array (
    'default' => '',
  ),
  'status' => 
  array (
    'default' => 
    array (
      0 => 'Open_Assigned',
      1 => 'Open_New',
      2 => 'Open_Pending Input',
    ),
  ),
  'name' => 
  array (
    'default' => '',
  ),
  'type' => 
  array (
    'default' => '',
  ),
  'assigned_user_id' => 
  array (
    'type' => 'assigned_user_name',
    'label' => 'LBL_ASSIGNED_TO',
    'default' => 'Administrator',
  ),
);

$dashletData['CasesDashlet']['columns'] = array (
  'case_number' => 
  array (
    'width' => '6%',
    'label' => 'LBL_NUMBER',
    'default' => true,
    'name' => 'case_number',
  ),
  'name' => 
  array (
    'width' => '40%',
    'label' => 'LBL_LIST_SUBJECT',
    'link' => true,
    'default' => true,
    'name' => 'name',
  ),
  'priority' => 
  array (
    'width' => '15%',
    'label' => 'LBL_PRIORITY',
    'default' => true,
    'name' => 'priority',
  ),
  'status' => 
  array (
    'width' => '8%',
    'label' => 'LBL_STATUS',
    'default' => true,
    'name' => 'status',
  ),
  'account_name' => 
  array (
    'width' => '29%',
    'link' => true,
    'module' => 'Accounts',
    'id' => 'ACCOUNT_ID',
    'ACLTag' => 'ACCOUNT',
    'label' => 'LBL_ACCOUNT_NAME',
    'related_fields' => 
    array (
      0 => 'account_id',
    ),
    'name' => 'account_name',
    'default' => false,
  ),
  'resolution' => 
  array (
    'width' => '8%',
    'label' => 'LBL_RESOLUTION',
    'name' => 'resolution',
    'default' => false,
  ),
  'date_entered' => 
  array (
    'width' => '15%',
    'label' => 'LBL_DATE_ENTERED',
    'name' => 'date_entered',
    'default' => false,
  ),
  'date_modified' => 
  array (
    'width' => '15%',
    'label' => 'LBL_DATE_MODIFIED',
    'name' => 'date_modified',
    'default' => false,
  ),
  'created_by' => 
  array (
    'width' => '8%',
    'label' => 'LBL_CREATED',
    'name' => 'created_by',
    'default' => false,
  ),
  'assigned_user_name' => 
  array (
    'width' => '8%',
    'label' => 'LBL_LIST_ASSIGNED_USER',
    'name' => 'assigned_user_name',
    'default' => false,
  ),
  'advocase_case_region_c' => 
  array (
    'type' => 'enum',
    'default' => false,
    'studio' => 'visible',
    'label' => 'LBL_ADVOCASE_CASE_REGION',
    'width' => '10%',
  ),
  'advocase_case_city_c' => 
  array (
    'type' => 'enum',
    'default' => false,
    'studio' => 'visible',
    'label' => 'LBL_ADVOCASE_CASE_CITY_C',
    'width' => '10%',
  ),
);