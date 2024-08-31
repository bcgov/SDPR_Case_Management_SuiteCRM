<?php
$job_strings[] = 'openCaseReminderScheduler';

function openCaseReminderScheduler()
{
  global $db;

  $cutOff = new DateTime('now - 14 days');
  $cutOff = $cutOff->format('Y-m-d');

  $usersBean = BeanFactory::getBean('Users');
  $users = $usersBean->get_full_list();
  
  foreach($users as $user) {
    $queryCount = "SELECT COUNT(*) as total FROM cases WHERE cases.date_modified < '$cutOff' AND cases.state = 'Open' AND cases.assigned_user_id = '$user->id'";
    $count = $db->query($queryCount);
    $row = $db->fetchByAssoc($count);
    $total = (int) $row['total'];

    if ($total > 0) {
      $alert = BeanFactory::newBean('Alerts');
      $alert->name = 'Reminder: You have ' . $total . ' case(s) that have not been updated in the last 14 days';
      $alert->description = 'You have ' . $total . ' case(s) that have not been updated in the last 14 days';
      $alert->assigned_user_id = $user->id;
      $alert->is_read = 0;
      $alert->type = 'info';
      $alert->target_module = 'Cases';
      $alert->url_redirect = 'index.php?module=Cases&action=index';
      $alert->save();
    }
  }

  return true;
}