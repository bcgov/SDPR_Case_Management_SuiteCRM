<?php
/* Smarty version 4.3.2, created on 2024-03-11 17:05:17
  from '/suitecrm/public/legacy/themes/suite8/tpls/login.tpl' */

/* @var Smarty_Internal_Template $_smarty_tpl */
if ($_smarty_tpl->_decodeProperties($_smarty_tpl, array (
  'version' => '4.3.2',
  'unifunc' => 'content_65ef39cd4f6981_94529810',
  'has_nocache_code' => false,
  'file_dependency' => 
  array (
    '6c722e91866b0573214c978755c55b901f6cbf79' => 
    array (
      0 => '/suitecrm/public/legacy/themes/suite8/tpls/login.tpl',
      1 => 1710133122,
      2 => 'file',
    ),
  ),
  'includes' => 
  array (
  ),
),false)) {
function content_65ef39cd4f6981_94529810 (Smarty_Internal_Template $_smarty_tpl) {
$_smarty_tpl->_checkPlugins(array(0=>array('file'=>'/suitecrm/public/legacy/include/Smarty/plugins/function.sugar_translate.php','function'=>'smarty_function_sugar_translate',),));
echo '<script'; ?>
 type='text/javascript'>
    var LBL_LOGIN_SUBMIT = '<?php echo smarty_function_sugar_translate(array('module'=>"Users",'label'=>"LBL_LOGIN_SUBMIT"),$_smarty_tpl);?>
';
    var LBL_REQUEST_SUBMIT = '<?php echo smarty_function_sugar_translate(array('module'=>"Users",'label'=>"LBL_REQUEST_SUBMIT"),$_smarty_tpl);?>
';
    var LBL_SHOWOPTIONS = '<?php echo smarty_function_sugar_translate(array('module'=>"Users",'label'=>"LBL_SHOWOPTIONS"),$_smarty_tpl);?>
';
    var LBL_HIDEOPTIONS = '<?php echo smarty_function_sugar_translate(array('module'=>"Users",'label'=>"LBL_HIDEOPTIONS"),$_smarty_tpl);?>
';
<?php echo '</script'; ?>
>

<!-- Start login container -->

<div class="p_login">

	<div class="p_login_top">
		
		<a title="SuiteCRM" href="https://www.suitecrm.com">SuiteCRM</a>
		
	</div>
    
    <div class="p_login_middle">
        <?php if ($_smarty_tpl->tpl_vars['LOGIN_ERROR_MESSAGE']->value) {?>
            <p align='center' class='error'><?php echo $_smarty_tpl->tpl_vars['LOGIN_ERROR_MESSAGE']->value;?>
</p>
        <?php }?>


    <div id="loginform">
        
        <form class="form-signin" role="form" action="index.php" method="post" name="DetailView" id="form"
              onsubmit="return document.getElementById('cant_login').value == ''" autocomplete="off">
            <div class="companylogo"><?php echo $_smarty_tpl->tpl_vars['LOGIN_IMAGE']->value;?>
</div>
        <span class="error" id="browser_warning" style="display:none">
            <?php echo smarty_function_sugar_translate(array('label'=>"WARN_BROWSER_VERSION_WARNING"),$_smarty_tpl);?>

        </span>
		<span class="error" id="ie_compatibility_mode_warning" style="display:none">
		<?php echo smarty_function_sugar_translate(array('label'=>"WARN_BROWSER_IE_COMPATIBILITY_MODE_WARNING"),$_smarty_tpl);?>

		</span>
            <?php if ($_smarty_tpl->tpl_vars['LOGIN_ERROR']->value != '') {?>
                <span class="error"><?php echo $_smarty_tpl->tpl_vars['LOGIN_ERROR']->value;?>
</span>
                <?php if ($_smarty_tpl->tpl_vars['WAITING_ERROR']->value != '') {?>
                    <span class="error"><?php echo $_smarty_tpl->tpl_vars['WAITING_ERROR']->value;?>
</span>
                <?php }?>
            <?php } else { ?>
                <span id='post_error' class="error"></span>
            <?php }?>
            <input type="hidden" name="module" value="Users">
            <input type="hidden" name="action" value="Authenticate">
            <input type="hidden" name="return_module" value="Users">
            <input type="hidden" name="return_action" value="Login">
            <input type="hidden" id="cant_login" name="cant_login" value="">
            <?php
$_from = $_smarty_tpl->smarty->ext->_foreach->init($_smarty_tpl, $_smarty_tpl->tpl_vars['LOGIN_VARS']->value, 'var', false, 'key');
$_smarty_tpl->tpl_vars['var']->do_else = true;
if ($_from !== null) foreach ($_from as $_smarty_tpl->tpl_vars['key']->value => $_smarty_tpl->tpl_vars['var']->value) {
$_smarty_tpl->tpl_vars['var']->do_else = false;
?>
                <input type="hidden" name="<?php echo $_smarty_tpl->tpl_vars['key']->value;?>
" value="<?php echo $_smarty_tpl->tpl_vars['var']->value;?>
">
            <?php
}
$_smarty_tpl->smarty->ext->_foreach->restore($_smarty_tpl, 1);?>
            <?php if (!empty($_smarty_tpl->tpl_vars['SELECT_LANGUAGE']->value)) {?>
                <div class="login-language-chooser" >
                    <?php echo smarty_function_sugar_translate(array('module'=>"Users",'label'=>"LBL_LANGUAGE"),$_smarty_tpl);?>
:
                    <select name='login_language' onchange="switchLanguage(this.value)"><?php echo $_smarty_tpl->tpl_vars['SELECT_LANGUAGE']->value;?>
</select>
                </div>
            <?php }?>
            <br>
            <div class="input-group">
                <input type="text" class="form-control"
                       placeholder="<?php echo smarty_function_sugar_translate(array('module'=>"Users",'label'=>"LBL_USER_NAME"),$_smarty_tpl);?>
" required autofocus
                       tabindex="1" id="user_name" name="user_name" value='<?php echo $_smarty_tpl->tpl_vars['LOGIN_USER_NAME']->value;?>
' autocomplete="off">
            </div>
            <br>
            <div class="input-group">
                <input type="password" class="form-control"
                       placeholder="<?php echo smarty_function_sugar_translate(array('module'=>"Users",'label'=>"LBL_PASSWORD"),$_smarty_tpl);?>
" tabindex="2"
                       id="username_password" name="username_password" value='<?php echo $_smarty_tpl->tpl_vars['LOGIN_PASSWORD']->value;?>
' autocomplete="off">
            </div>
            <br>
            <input id="bigbutton" class="btn btn-lg btn-primary btn-block" type="submit"
                   title="<?php echo smarty_function_sugar_translate(array('module'=>"Users",'label'=>"LBL_LOGIN_BUTTON_TITLE"),$_smarty_tpl);?>
" tabindex="3" name="Login"
                   value="<?php echo smarty_function_sugar_translate(array('module'=>"Users",'label'=>"LBL_LOGIN_BUTTON_LABEL"),$_smarty_tpl);?>
">
            <div id="forgotpasslink" style="cursor: pointer; display:<?php echo $_smarty_tpl->tpl_vars['DISPLAY_FORGOT_PASSWORD_FEATURE']->value;?>
;"
                 onclick='toggleDisplay("forgot_password_dialog");'>
                <a href='javascript:void(0)'><?php echo smarty_function_sugar_translate(array('module'=>"Users",'label'=>"LBL_LOGIN_FORGOT_PASSWORD"),$_smarty_tpl);?>
</a>
            </div>
        </form>
        
        <form class="form-signin passform" role="form" action="index.php" method="post" name="DetailView" id="form" name="fp_form" id="fp_form" autocomplete="off">
            <div id="forgot_password_dialog" style="display:none">
                <input type="hidden" name="entryPoint" value="GeneratePassword">
                <div id="generate_success" class='error' style="display:inline;"></div>
                <br>
                <div class="input-group">
                                        <input type="text" class="form-control" size='26' id="fp_user_name" name="fp_user_name"
                           value='<?php echo $_smarty_tpl->tpl_vars['LOGIN_USER_NAME']->value;?>
'
                           placeholder="<?php echo smarty_function_sugar_translate(array('module'=>"Users",'label'=>"LBL_USER_NAME"),$_smarty_tpl);?>
" autocomplete="off">
                </div>
                <br>
                <div class="input-group">
                                        <input type="text" class="form-control" size='26' id="fp_user_mail" name="fp_user_mail" value=''
                           placeholder="<?php echo smarty_function_sugar_translate(array('module'=>"Users",'label'=>"LBL_EMAIL"),$_smarty_tpl);?>
" autocomplete="off">
                </div>
                <br>
                <?php echo $_smarty_tpl->tpl_vars['CAPTCHA']->value;?>

                <div id='wait_pwd_generation'></div>
                <input title="Email Temp Password" class="button  btn-block" type="button" style="display:inline"
                       onclick="validateAndSubmit(); return document.getElementById('cant_login').value == ''"
                       id="generate_pwd_button" name="fp_login"
                       value="<?php echo smarty_function_sugar_translate(array('module'=>"Users",'label'=>"LBL_LOGIN_SUBMIT"),$_smarty_tpl);?>
" autocomplete="off">
            </div>
        </form>
        
    </div>
    </div>
    
    <div class="p_login_bottom">

    		<a id="admin_options">&copy; Supercharged by SuiteCRM</a>
            <a id="powered_by">&copy; Powered By SugarCRM</a>
    	
	</div>
    
</div>
<!-- End login container -->



<?php }
}
