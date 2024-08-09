<?php
$viewdefs ['Cases'] = 
array (
  'DetailView' => 
  array (
    'templateMeta' => 
    array (
      'form' => 
      array (
        'buttons' => 
        array (
          0 => 'EDIT',
          1 => 'DUPLICATE',
          2 => 'DELETE',
          3 => 'FIND_DUPLICATES',
        ),
      ),
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
      'useTabs' => false,
      'tabDefs' => 
      array (
        'LBL_CASE_INFORMATION' => 
        array (
          'newTab' => false,
          'panelDefault' => 'expanded',
        ),
      ),
      'syncDetailEditViews' => true,
    ),
    'topWidget' => 
    array (
      'type' => 'statistics',
      'options' => 
      array (
        'statistics' => 
        array (
          0 => 
          array (
            'labelKey' => '',
            'type' => 'case-days-open',
            'endLabelKey' => 'LBL_STAT_DAYS',
            'hideValueIfEmpty' => true,
          ),
        ),
      ),
    ),
    'sidebarWidgets' => 
    array (
      0 => 
      array (
        'type' => 'record-thread',
        'labelKey' => 'LBL_CASE_UPDATES',
        'options' => 
        array (
          'recordThread' => 
          array (
            'module' => 'case-updates',
            'class' => 'case-updates',
            'filters' => 
            array (
              'parentFilters' => 
              array (
                'id' => 'case_id',
              ),
              'orderBy' => 'date_entered',
              'sortOrder' => 'DESC',
            ),
            'item' => 
            array (
              'itemClass' => 'case-updates-item pt-2 pb-2',
              'collapsible' => true,
              'dynamicClass' => 
              array (
                0 => 'source',
                1 => 'internal',
              ),
              'layout' => 
              array (
                'header' => 
                array (
                  'rows' => 
                  array (
                  ),
                ),
                'body' => 
                array (
                  'rows' => 
                  array (
                    0 => 
                    array (
                      'align' => 'end',
                      'justify' => 'between',
                      'cols' => 
                      array (
                        0 => 
                        array (
                          'field' => 'author',
                          'labelDisplay' => 'none',
                          'hideIfEmpty' => true,
                          'class' => 'font-weight-bold item-title',
                        ),
                        1 => 
                        array (
                          'field' => 'internal',
                          'labelDisplay' => 'inline',
                          'labelClass' => 'm-0',
                          'display' => 'none',
                          'hideIfEmpty' => true,
                          'class' => 'small ml-auto font-weight-light',
                        ),
                      ),
                    ),
                    1 => 
                    array (
                      'align' => 'start',
                      'justify' => 'start',
                      'class' => 'flex-grow-1 item-content',
                      'cols' => 
                      array (
                        0 => 
                        array (
                          'field' => 
                          array (
                            'name' => 'description',
                            'type' => 'html',
                          ),
                          'labelDisplay' => 'none',
                        ),
                      ),
                    ),
                    2 => 
                    array (
                      'justify' => 'left',
                      'class' => 'flex-grow-1 item-content-extra',
                      'cols' => 
                      array (
                        0 => 
                        array (
                          'field' => 
                          array (
                            'name' => 'notes',
                            'type' => 'line-items',
                            'lineItems' => 
                            array (
                              'labelOnFirstLine' => true,
                              'definition' => 
                              array (
                                'name' => 'notes_fields',
                                'vname' => 'LBL_FILENAME',
                                'type' => 'composite',
                                'layout' => 
                                array (
                                  0 => 'filename',
                                ),
                                'display' => 'inline',
                                'attributeFields' => 
                                array (
                                  'filename' => 
                                  array (
                                    'name' => 'filename',
                                    'type' => 'file',
                                    'vname' => 'LBL_FILENAME',
                                    'labelKey' => 'LBL_FILENAME',
                                    'required' => true,
                                    'valueParent' => 'record',
                                    'showLabel' => 
                                    array (
                                      0 => '*',
                                    ),
                                  ),
                                ),
                              ),
                            ),
                          ),
                          'labelDisplay' => 'none',
                          'hideIfEmpty' => false,
                          'class' => 'small ml-auto font-weight-light',
                        ),
                      ),
                    ),
                    3 => 
                    array (
                      'justify' => 'end',
                      'class' => 'flex-grow-1',
                      'cols' => 
                      array (
                        0 => 
                        array (
                          'field' => 'date_entered',
                          'labelDisplay' => 'none',
                          'hideIfEmpty' => true,
                          'class' => 'small ml-auto font-weight-light',
                        ),
                      ),
                    ),
                  ),
                ),
              ),
            ),
            'create' => 
            array (
              'presetFields' => 
              array (
                'parentValues' => 
                array (
                  'id' => 'case_id',
                ),
              ),
              'layout' => 
              array (
                'header' => 
                array (
                  'rows' => 
                  array (
                  ),
                ),
                'body' => 
                array (
                  'rows' => 
                  array (
                    0 => 
                    array (
                      'justify' => 'start',
                      'class' => 'flex-grow-1',
                      'cols' => 
                      array (
                        0 => 
                        array (
                          'field' => 
                          array (
                            'name' => 'description',
                            'metadata' => 
                            array (
                              'rows' => 3,
                            ),
                          ),
                          'labelDisplay' => 'top',
                          'class' => 'flex-grow-1',
                        ),
                      ),
                    ),
                    1 => 
                    array (
                      'align' => 'end',
                      'justify' => 'start',
                      'class' => 'flex-grow-1',
                      'cols' => 
                      array (
                        0 => 
                        array (
                          'field' => 'internal',
                          'labelDisplay' => 'inline',
                        ),
                      ),
                    ),
                  ),
                ),
              ),
            ),
          ),
        ),
        'acls' => 
        array (
          'Cases' => 
          array (
            0 => 'view',
            1 => 'list',
          ),
        ),
      ),
      1 => 
      array (
        'type' => 'statistics',
        'labelKey' => 'LBL_NUMBER_OF_CASES_PER_ACCOUNT',
        'options' => 
        array (
          'sidebarStatistic' => 
          array (
            'rows' => 
            array (
              0 => 
              array (
                'align' => 'start',
                'cols' => 
                array (
                  0 => 
                  array (
                    'labelKey' => 'LBL_TOTAL_CASES_FOR_THIS_ACCOUNT',
                    'size' => 'medium',
                  ),
                ),
              ),
              1 => 
              array (
                'align' => 'start',
                'cols' => 
                array (
                  0 => 
                  array (
                    'statistic' => 'cases-per-account',
                    'size' => 'xx-large',
                    'bold' => true,
                    'color' => 'green',
                  ),
                ),
              ),
              2 => 
              array (
                'align' => 'start',
                'cols' => 
                array (
                  0 => 
                  array (
                    'labelKey' => 'LBL_SINCE',
                    'size' => 'regular',
                  ),
                  1 => 
                  array (
                    'statistic' => 'get-account-date-entered',
                    'size' => 'regular',
                  ),
                ),
              ),
            ),
          ),
        ),
        'acls' => 
        array (
          'Cases' => 
          array (
            0 => 'view',
            1 => 'list',
          ),
          'Accounts' => 
          array (
            0 => 'view',
            1 => 'list',
          ),
        ),
      ),
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
            'label' => 'LBL_SUBJECT',
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
          0 => '',
          1 => 
          array (
            'name' => 'adovcase_case_agencies_c',
            'studio' => 'visible',
            'label' => 'LBL_ADOVCASE_CASE_AGENCIES',
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
          1 => 
          array (
            'name' => 'assigned_user_name',
            'label' => 'LBL_ASSIGNED_TO',
          ),
        ),
      ),
    ),
  ),
);
;
?>
