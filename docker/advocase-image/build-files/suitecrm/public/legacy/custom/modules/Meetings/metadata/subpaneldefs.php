<?php

$layout_defs['Meetings'] = array(
    // list of what Subpanels to show in the DetailView
    'subpanel_setup' => array(
        'contacts' => array(
            'top_buttons' => array(),
            'order' => 10,
            'module' => 'Contacts',
            'sort_order' => 'asc',
            'sort_by' => 'last_name, first_name',
            'subpanel_name' => 'default',
            'get_subpanel_data' => 'contacts',
            'title_key' => 'LBL_CONTACTS_SUBPANEL_TITLE',
        ),
    ),
);