<?php
/* Smarty version 4.3.2, created on 2024-03-11 17:06:14
  from '/suitecrm/public/legacy/modules/SugarFeed/Dashlets/SugarFeedDashlet/SugarFeedScript.tpl' */

/* @var Smarty_Internal_Template $_smarty_tpl */
if ($_smarty_tpl->_decodeProperties($_smarty_tpl, array (
  'version' => '4.3.2',
  'unifunc' => 'content_65ef3a06027929_50240771',
  'has_nocache_code' => false,
  'file_dependency' => 
  array (
    '8d7deeae9ec3da67a0a2174c4b40766d9f1dacd7' => 
    array (
      0 => '/suitecrm/public/legacy/modules/SugarFeed/Dashlets/SugarFeedDashlet/SugarFeedScript.tpl',
      1 => 1710133005,
      2 => 'file',
    ),
  ),
  'includes' => 
  array (
  ),
),false)) {
function content_65ef3a06027929_50240771 (Smarty_Internal_Template $_smarty_tpl) {
$_smarty_tpl->_checkPlugins(array(0=>array('file'=>'/suitecrm/public/legacy/include/Smarty/plugins/function.sugar_getjspath.php','function'=>'smarty_function_sugar_getjspath',),));
?>



<?php echo '<script'; ?>
 type="text/javascript">
if(typeof SugarFeed == 'undefined') { // since the dashlet can be included multiple times a page, don't redefine these functions
	SugarFeed = function() {
	    return {
	    	/**
	    	 * Called when the textarea is blurred
	    	 */
	        pushUserFeed: function(id) {
	        	ajaxStatus.showStatus('<?php echo $_smarty_tpl->tpl_vars['saving']->value;?>
'); // show that AJAX call is happening
	        	// what data to post to the dashlet
    	    	
    	    	postData = 'to_pdf=1&module=Home&action=CallMethodDashlet&method=pushUserFeed&id=' + id ;
				YAHOO.util.Connect.setForm(document.getElementById('form_' + id));
				var cObj = YAHOO.util.Connect.asyncRequest('POST','index.php', 
								  {success: SugarFeed.saved, failure: SugarFeed.saved, argument: id}, postData);
	        },
		    /**
	    	 * handle the response of the saveText method
	    	 */
	        saved: function(data) {
	        	SUGAR.mySugar.retrieveDashlet(data.argument);
	           	ajaxStatus.flashStatus('<?php echo $_smarty_tpl->tpl_vars['done']->value;?>
');
	        }, 
	        deleteFeed: function(record, id){
				postData = 'to_pdf=1&module=Home&action=CallMethodDashlet&method=deleteUserFeed&id=' + id + '&record=' +  record;
				var cObj = YAHOO.util.Connect.asyncRequest('POST','index.php', 
								  {success: SugarFeed.saved, failure: SugarFeed.saved, argument: id}, postData);	        
	        },
            buildReplyForm: function(record, id, elem) {
               // See if we already have a blockquote
               var myParentElem = elem.parentNode.parentNode.parentNode;
               
               var blockElem = myParentElem.getElementsByTagName('blockquote')[0];
               if ( typeof(blockElem) == 'undefined' || typeof(blockElem[0]) == 'undefined' ) {
                  // Need to create a blockquote element
                  // With a "clear" div in front of it.
                  var divElem = document.createElement('div');
                  divElem.className = 'clear';
                  myParentElem.appendChild(divElem);
                  blockElem = document.createElement('blockquote');
                  myParentElem.appendChild(blockElem);
               } else {
                 // Should only be one child blockquote element, so we'll just grab the first one
                 blockElem = blockElem[0];
               }

               // Move the reply form up over here
               var formElem = document.getElementById('SugarFeedReplyForm_'+id);
               formElem.parentNode.removeChild(formElem);
               blockElem.appendChild(formElem);
               formElem.getElementsByTagName('div')[0].style.display = 'block';
               formElem.parentFeed.value = record;

            },
            replyToFeed: function( id ) {
	        	ajaxStatus.showStatus('<?php echo $_smarty_tpl->tpl_vars['saving']->value;?>
'); // show that AJAX call is happening
	        	// what data to post to the dashlet
    	    	
                var formElem = document.getElementById('SugarFeedReplyForm_' + id);
    	    	postData = 'to_pdf=1&module=Home&action=CallMethodDashlet&method=pushUserFeedReply&id=' + id ;
				YAHOO.util.Connect.setForm(formElem);
				var cObj = YAHOO.util.Connect.asyncRequest('POST','index.php', 
								  {success: SugarFeed.saved, failure: SugarFeed.saved, argument: id}, postData);
               
            },
            loaded: function(id) {
            	var scrollConent;
            	scrollContent = new iScroll('contentScroller' + id);
            }
	    };
	}();
}

if(SUGAR.util.isTouchScreen()) {
	document.addEventListener('DOMContentLoaded', function(){SugarFeed.loaded('<?php echo $_smarty_tpl->tpl_vars['idjs']->value;?>
')}, false);	
}
<?php echo '</script'; ?>
>

<?php echo '<script'; ?>
 type="text/javascript" src="<?php echo smarty_function_sugar_getjspath(array('file'=>"include/javascript/popup_helper.js"),$_smarty_tpl);?>
">
<?php echo '</script'; ?>
><?php }
}
