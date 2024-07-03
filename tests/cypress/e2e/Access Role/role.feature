Feature: Create new role

Scenario:
  Given user navigate to Role Management Screen
  and click 'create new role'
  and fill the inputs: Role Name, Role Description
  When user click save
  Then New role is created

Feature: Update existing role

Background:
  Given user navigate to the Role Management Screen
  and choose an existing role

Scenario: Update Role Name
  Given user click edit button
  and user update new input for roleName field
  When user click save
  Then user can view the Communication Creating Screen

Scenario: Update Role Description
  Given user click edit button
  and user update new input for role description field
  When user click save
  Then Description field accepts new input
  and role is saved with new Description

Scenario: Update Role Permission
  Given user click edit button
  and user choose an item on permission matrix
  and user change permission from permission dropdown
  When user click save
  Then role permission is saved with new permission