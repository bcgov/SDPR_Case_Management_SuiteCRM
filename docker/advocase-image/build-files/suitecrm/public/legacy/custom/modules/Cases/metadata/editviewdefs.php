<?php
$viewdefs ['Cases'] = 
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
      'includes' => 
      array (
        0 => 
        array (
          'file' => 'include/javascript/bindWithDelay.js',
        ),
        1 => 
        array (
          'file' => 'modules/AOK_KnowledgeBase/AOK_KnowledgeBase_SuggestionBox.js',
        ),
        2 => 
        array (
          'file' => 'include/javascript/qtip/jquery.qtip.min.js',
        ),
      ),
      'useTabs' => false,
      'tabDefs' => 
      array (
        'LBL_CASE_INFORMATION' => 
        array (
          'newTab' => false,
          'panelDefault' => 'expanded',
        ),
      ),
      'form' => 
      array (
        'enctype' => 'multipart/form-data',
      ),
      'syncDetailEditViews' => true,
    ),
    'panels' => 
    array (
      'lbl_case_information' => 
      array (
        0 => 
        array (
          0 => 
          array (
            'name' => 'name',
          ),
          1 => 
          array (
            'name' => 'advocase_case_issue_1_c',
            'studio' => 'visible',
            'label' => 'LBL_ADVOCASE_CASE_ISSUE_1',
          ),
        ),
        1 => 
        array (
          0 => 
          array (
            'name' => 'advocase_communication_date_c',
            'label' => 'LBL_ADVOCASE_COMMUNICATION_DATE',
          ),
          1 => 
          array (
            'name' => 'advocase_case_issue_2_c',
            'studio' => 'visible',
            'label' => 'LBL_ADVOCASE_CASE_ISSUE_2',
          ),
        ),
        2 => 
        array (
          0 => 
          array (
            'name' => 'advocase_communication_type_c',
            'studio' => 'visible',
            'label' => 'LBL_ADVOCASE_COMMUNICATION_TYPE',
          ),
          1 => 
          array (
            'name' => 'advocase_case_issue_3_c',
            'studio' => 'visible',
            'label' => 'LBL_ADVOCASE_CASE_ISSUE_3',
          ),
        ),
        3 => 
        array (
          0 => 
          array (
            'name' => 'advocase_other_comm_type_c',
            'label' => 'LBL_ADVOCASE_OTHER_COMM_TYPE',
          ),
          1 => 
          array (
            'name' => 'advocase_case_issue_4_c',
            'studio' => 'visible',
            'label' => 'LBL_ADVOCASE_CASE_ISSUE_4',
          ),
        ),
        4 => 
        array (
          0 => 
          array (
            'name' => 'advocase_case_city_c',
            'studio' => 'visible',
            'label' => 'LBL_ADVOCASE_CASE_CITY_C',
          ),
          1 => 
          array (
            'name' => 'advocase_case_issue_5_c',
            'studio' => 'visible',
            'label' => 'LBL_ADVOCASE_CASE_ISSUE_5',
          ),
        ),
        5 => 
        array (
          0 => 
          array (
            'name' => 'advocase_case_region_c',
            'studio' => 'visible',
            'label' => 'LBL_ADVOCASE_CASE_REGION',
          ),
          1 => 
          array (
            'name' => 'advocase_case_other_issue_c',
            'label' => 'LBL_ADVOCASE_CASE_OTHER_ISSUE',
          ),
        ),
        6 => 
        array (
          0 => 
          array (
            'name' => 'advocase_oasq_mandate_c',
            'studio' => 'visible',
            'label' => 'LBL_ADVOCASE_OASQ_MANDATE',
          ),
          1 => 
          array (
            'name' => 'advocase_oasq_awareness_c',
            'studio' => 'visible',
            'label' => 'LBL_ADVOCASE_OASQ_AWARENESS',
          ),
        ),
        7 => 
        array (
          0 => 
          array (
            'name' => 'work_log',
            'label' => 'LBL_WORK_LOG',
          ),
          1 => 
          array (
            'name' => 'advocase_asq_action_c',
            'studio' => 'visible',
            'label' => 'LBL_ADVOCASE_ASQ_ACTION',
          ),
        ),
        8 => 
        array (
          0 => 
          array (
            'name' => 'adovcase_case_agencies_c',
            'studio' => 'visible',
            'label' => 'LBL_ADOVCASE_CASE_AGENCIES',
          ),
          1 =>
          array (
            'name' => 'advocase_case_outcome_c',
            'label' => 'LBL_ADVOCASE_CASE_OUTCOME',
          ),
        ),
        9 => 
        array (
          0 => '',
          1 => 
          array (
            'name' => 'advocase_case_other_none_c',
            'label' => 'LBL_ADVOCASE_CASE_OTHER_NONE',
          ),
        ),
        10 => 
        array (
          0 => '',
          1 => 
          array (
            'name' => 'advocase_case_action_date_c',
            'label' => 'LBL_ADVOCASE_CASE_ACTION_DATE',
          ),
        ),
        11 => 
        array (
          0 => '',
          1 => 
          array (
            'name' => 'state',
            'studio' => 'visible',
            'label' => 'LBL_STATE',
          ),
        ),
        12 => 
        array (
          0 => '',
          1 => 'assigned_user_name',
        ),
      ),
    ),
  ),
);
;
?>
