<?php
/* Smarty version 4.3.2, created on 2024-03-11 17:05:17
  from '/suitecrm/public/legacy/include/utils/recaptcha_disabled.tpl' */

/* @var Smarty_Internal_Template $_smarty_tpl */
if ($_smarty_tpl->_decodeProperties($_smarty_tpl, array (
  'version' => '4.3.2',
  'unifunc' => 'content_65ef39cd4e8044_45478666',
  'has_nocache_code' => false,
  'file_dependency' => 
  array (
    'e20f29a92da10210cbfa9c99dab393ef8dc2b561' => 
    array (
      0 => '/suitecrm/public/legacy/include/utils/recaptcha_disabled.tpl',
      1 => 1710132873,
      2 => 'file',
    ),
  ),
  'includes' => 
  array (
  ),
),false)) {
function content_65ef39cd4e8044_45478666 (Smarty_Internal_Template $_smarty_tpl) {
echo '<script'; ?>
>

  /**
   * Login Screen Validation
   */
  function validateAndSubmit() {
      generatepwd();
    }

  /**
   * Password reset screen validation
   */
  function validateCaptchaAndSubmit() {
      document.getElementById('username_password').value = document.getElementById('new_password').value;
      document.getElementById('ChangePasswordForm').submit();
    }
<?php echo '</script'; ?>
>
<?php }
}
