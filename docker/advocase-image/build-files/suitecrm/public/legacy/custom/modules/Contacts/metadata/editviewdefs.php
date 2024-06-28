<?php
$viewdefs ['Contacts'] = 
array (
  'EditView' => 
  array (
    'templateMeta' => 
    array (
      'form' => 
      array (
        'hidden' => 
        array (
          0 => '<input type="hidden" name="opportunity_id" value="{$smarty.request.opportunity_id}">',
          1 => '<input type="hidden" name="case_id" value="{$smarty.request.case_id}">',
          2 => '<input type="hidden" name="bug_id" value="{$smarty.request.bug_id}">',
          3 => '<input type="hidden" name="email_id" value="{$smarty.request.email_id}">',
          4 => '<input type="hidden" name="inbound_email_id" value="{$smarty.request.inbound_email_id}">',
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
        'LBL_CONTACT_INFORMATION' => 
        array (
          'newTab' => false,
          'panelDefault' => 'expanded',
        ),
      ),
      'syncDetailEditViews' => true,
    ),
    'panels' => 
    array (
      'lbl_contact_information' => 
      array (
        0 => 
        array (
          0 => 
          array (
            'name' => 'advocase_contact_type_c',
            'studio' => 'visible',
            'label' => 'LBL_ADVOCASE_CONTACT_TYPE',
          ),
        ),
        1 => 
        array (
          0 => 
          array (
            'name' => 'advocase_other_contact_type_c',
            'label' => 'LBL_ADVOCASE_OTHER_CONTACT_TYPE',
          ),
        ),
        2 => 
        array (
          0 => 
          array (
            'name' => 'last_name',
          ),
        ),
        3 => 
        array (
          0 => 
          array (
            'name' => 'first_name',
            'customCode' => '{html_options name="salutation" id="salutation" options=$fields.salutation.options selected=$fields.salutation.value}&nbsp;<input name="first_name"  id="first_name" size="25" maxlength="25" type="text" value="{$fields.first_name.value}">',
          ),
        ),
        4 => 
        array (
          0 => 
          array (
            'name' => 'advocase_email_c',
            'label' => 'LBL_ADVOCASE_EMAIL',
          ),
        ),
        5 => 
        array (
          0 => 
          array (
            'name' => 'advocase_phone_numbe_c',
            'label' => 'LBL_ADVOCASE_PHONE_NUMBE',
          ),
        ),
        6 => 
        array (
          0 => 
          array (
            'name' => 'advocase_sec_phone_number_c',
            'label' => 'LBL_ADVOCASE_SEC_PHONE_NUMBER',
          ),
        ),
        7 => 
        array (
          0 => 
          array (
            'name' => 'advocase_asq_consent_c',
            'label' => 'LBL_ADVOCASE_ASQ_CONSENT',
          ),
        ),
        8 => 
        array (
          0 => 
          array (
            'name' => 'advocase_legal_agreement_c',
            'studio' => 'visible',
            'label' => 'LBL_ADVOCASE_LEGAL_AGREEMENT',
          ),
        ),
        9 => 
        array (
          0 => 
          array (
            'name' => 'advocase_contact_city_c',
            'label' => 'LBL_ADVOCASE_CONTACT_CITY',
          ),
        ),
        10 => 
        array (
          0 => 
          array (
            'name' => 'advocase_contact_region_c',
            'studio' => 'visible',
            'label' => 'LBL_ADVOCASE_CONTACT_REGION',
          ),
        ),
        11 => 
        array (
          0 => 
          array (
            'name' => 'advocase_notes_c',
            'studio' => 'visible',
            'label' => 'LBL_ADVOCASE_NOTES',
          ),
        ),
        12 => 
        array (
          0 => 
          array (
            'name' => 'assigned_user_name',
            'label' => 'LBL_ASSIGNED_TO_NAME',
          ),
        ),
        13 => 
        array (
          0 => 
          array (
            'name' => 'advocase_birth_date_c',
            'label' => 'LBL_ADVOCASE_BIRTH_DATE',
          ),
        ),
        14 => 
        array (
          0 => 
          array (
            'name' => 'advocase_individual_age_c',
            'studio' => 'visible',
            'label' => 'LBL_ADVOCASE_INDIVIDUAL_AGE',
          ),
        ),
        15 => 
        array (
          0 => 
          array (
            'name' => 'advocase_clbl_eligible_c',
            'studio' => 'visible',
            'label' => 'LBL_ADVOCASE_CLBL_ELIGIBLE',
          ),
        ),
        16 => 
        array (
          0 => 
          array (
            'name' => 'advocase_gsa_level_c',
            'studio' => 'visible',
            'label' => 'LBL_ADVOCASE_GSA_LEVEL',
          ),
        ),
      ),
    ),
  ),
);
;
?>