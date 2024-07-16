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
            'name' => 'type_of_contact_c',
            'studio' => 'visible',
            'label' => 'LBL_TYPE_OF_CONTACT',
          ),
          1 => '',
        ),
        1 =>
        array (
          0 =>
          array (
            'name' => 'first_name',
            'customCode' => '{html_options name="salutation" id="salutation" options=$fields.salutation.options selected=$fields.salutation.value}&nbsp;<input name="first_name"  id="first_name" size="25" maxlength="25" type="text" value="{$fields.first_name.value}">',
          ),
          1 =>
          array (
            'name' => 'birthdate',
            'comment' => 'The birthdate of the contact',
            'label' => 'LBL_BIRTHDATE',
          ),
        ),
        2 =>
        array (
          0 =>
          array (
            'name' => 'last_name',
          ),
          1 => '',
        ),
        3 =>
        array (
          0 =>
          array (
            'name' => 'email_c',
            'label' => 'LBL_EMAIL',
          ),
          1 => '',
        ),
        4 =>
        array (
          0 =>
          array (
            'name' => 'phone_work',
            'comment' => 'Work phone number of the contact',
            'label' => 'LBL_OFFICE_PHONE',
          ),
        ),
        5 =>
        array (
          0 =>
          array (
            'name' => 'phone_other',
            'comment' => 'Other phone number for the contact',
            'label' => 'LBL_OTHER_PHONE',
          ),
        ),
        6 =>
        array (
          0 =>
          array (
            'name' => 'primary_address_city',
            'comment' => 'City for primary address',
            'label' => 'LBL_PRIMARY_ADDRESS_CITY',
          ),
          1 => '',
        ),
        7 =>
        array (
          0 =>
          array (
            'name' => 'advocase_contact_region_c',
            'label' => 'LBL_ADVOCASE_CONTACT_REGION_C',
          ),
        ),
        8 =>
        array (
          0 =>
          array (
            'name' => 'consent_for_asq_action_c',
            'studio' => 'visible',
            'label' => 'LBL_CONSENT_FOR_ASQ_ACTION',
          ),
          1 => '',
        ),
        9 =>
        array (
          0 =>
          array (
            'name' => 'legal_agreement_in_place_c',
            'studio' => 'visible',
            'label' => 'LBL_LEGAL_AGREEMENT_IN_PLACE',
          ),
          1 => '',
        ),
      ),
    ),
  ),
);
;
?>
