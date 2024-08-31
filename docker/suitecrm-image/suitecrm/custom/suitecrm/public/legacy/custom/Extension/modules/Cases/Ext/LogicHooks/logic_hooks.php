<?php
$hook_version = 1;
$hook_array = array();
$hook_array['after_save'] = array();

$hook_array['after_save'][] = array(
    1,
    'pushToFeed2',
    'custom/modules/Cases/SugarFeeds/CaseReminderAlerts.php',
    'CaseReminderAlerts',
    'createCaseReminderNotification'
);