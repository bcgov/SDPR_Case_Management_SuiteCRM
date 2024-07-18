<?php
// suite-crm/public/legacy/custom/Extension/modules/Cases/Ext/Layoutdefs/cases_meetings_subpanel.php
$layout_defs['Contacts']['subpanel_setup']['meetings'] = array (
    'order' => 10,
    'module' => 'Meetings',
    'sort_order' => 'asc',
    'sort_by' => 'name',
    'subpanel_name' => 'default',
    'get_subpanel_data' => 'meetings',
    'title_key' => 'LBL_MEETINGS_SUBPANEL_TITLE',
    'top_buttons' => array (
        array('widget_class' => 'SubPanelTopButtonQuickCreate'),
        array('widget_class' => 'SubPanelTopSelectButton', 'mode' => 'MultiSelect'),
    ),
);
