<?php

$hook_version = 1;
$hook_array = array();
$hook_array['after_login'] = array();
$hook_array['after_login'][] = array(
    1,
    'caseReminderAlerts',
    'custom/modules/Cases/SugarFeeds/CaseReminderAlerts.php',
    'CaseReminderAlerts',
    'createCaseReminderNotification'
);
