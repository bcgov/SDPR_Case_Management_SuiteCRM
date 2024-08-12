<?php
$listViewDefs ['Cases'] = 
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
    'label' => 'LBL_ADVOCASE_CASE_CITY_C',
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
);
;
?>
