<?php
/* Smarty version 4.3.2, created on 2024-03-11 17:22:50
  from '/suitecrm/public/legacy/modules/AOP_Case_Updates/tpl/caseUpdateForm.tpl' */

/* @var Smarty_Internal_Template $_smarty_tpl */
if ($_smarty_tpl->_decodeProperties($_smarty_tpl, array (
  'version' => '4.3.2',
  'unifunc' => 'content_65ef3deadb5425_40831766',
  'has_nocache_code' => false,
  'file_dependency' => 
  array (
    '7227b244dcfe4709227b442765ef5d6ac1f54d10' => 
    array (
      0 => '/suitecrm/public/legacy/modules/AOP_Case_Updates/tpl/caseUpdateForm.tpl',
      1 => 1710132903,
      2 => 'file',
    ),
  ),
  'includes' => 
  array (
  ),
),false)) {
function content_65ef3deadb5425_40831766 (Smarty_Internal_Template $_smarty_tpl) {
$_smarty_tpl->_checkPlugins(array(0=>array('file'=>'/suitecrm/public/legacy/include/Smarty/plugins/function.sugar_getimage.php','function'=>'smarty_function_sugar_getimage',),));
?>
<button id="addFileButton" class="button primary case-addbutton" type="button"><?php if (!empty($_smarty_tpl->tpl_vars['MOD']->value['LBL_ADD_CASE_FILE'])) {
echo $_smarty_tpl->tpl_vars['MOD']->value['LBL_ADD_CASE_FILE'];
}?></button>

<?php echo '<script'; ?>
>
    $(document).ready(function(){
        var docCount = 0;
        $(document).on('change','.caseDocumentTypeSelect',function(){
            var wrapper = $(this).closest('.caseDocumentWrapper');
            if($(this).val() == 'internal'){
                wrapper.find('#case_update_file\\[\\]').hide();
                wrapper.find('.internalCaseDocumentWrapper').show();
            }else{
                wrapper.find('#case_update_file\\[\\]').show();
                wrapper.find('.internalCaseDocumentWrapper').hide();
            }

        });

        $('#addFileButton').click(function(e){
            var template = $('#updateFileRowTemplate').html();
            template = template.replace(/case_document_name/g, 'case_update_name_'+docCount);
            template = template.replace(/case_document_id/g, 'case_update_id_'+docCount);
            $(e.target).before(template);
            if(typeof sqs_objects == 'undefined'){
                sqs_objects = new Array;
            }
            sqs_objects['EditView_case_document_name_'+docCount]={
                "form":"EditView",
                "method":"query",
                'modules': 'Documents',
                "field_list":["name","id"],
                "populate_list":["case_document_name_"+docCount,"case_document_id_"+docCount],
                "required_list":["case_document_id_"+docCount],
                "conditions":[{"name":"name","op":"like_custom","end":"%","value":""}],
                "limit":"30",
                "no_match_text":"No Match"};
            SUGAR.util.doWhen(
                    "typeof(sqs_objects) != 'undefined' && typeof(sqs_objects['EditView_case_document_name_"+docCount+"']) != 'undefined'",
                    enableQS
            );

            $('.caseDocumentTypeSelect').change();
            docCount++;
        });
        $(document).on('click','.removeFileButton',function(e){
            $(e.target).closest('span').remove();
        });
    });
<?php echo '</script'; ?>
>

<?php echo '<script'; ?>
 id="updateFileRowTemplate"  type="text/template">
    <span class="caseDocumentWrapper">
        <select class="caseDocumentTypeSelect">
            <option value="internal"><?php if (!empty($_smarty_tpl->tpl_vars['MOD']->value['LBL_SELECT_INTERNAL_CASE_DOCUMENT'])) {
echo $_smarty_tpl->tpl_vars['MOD']->value['LBL_SELECT_INTERNAL_CASE_DOCUMENT'];
}?></option>
            <option value="external"><?php if (!empty($_smarty_tpl->tpl_vars['MOD']->value['LBL_SELECT_INTERNAL_CASE_DOCUMENT'])) {
echo $_smarty_tpl->tpl_vars['MOD']->value['LBL_SELECT_INTERNAL_CASE_DOCUMENT'];
}?></option>
        </select>
        <input type="file" id="case_update_file[]" name="case_update_file[]">
        <span class="internalCaseDocumentWrapper">
            <input type="text" name="case_document_name" class="sqsEnabled" tabindex="0" id="case_document_name" size="" value="" title='' autocomplete="off">
            <input type="hidden" name="case_document_id" id="case_document_id" value="">

            <span class="id-ff multiple selectcrossbtn">
                <button type="button" name="btn_case_document_name" id="btn_case_document_name" tabindex="0" title="<?php if (!empty($_smarty_tpl->tpl_vars['MOD']->value['LBL_SELECT_CASE_DOCUMENT'])) {
echo $_smarty_tpl->tpl_vars['MOD']->value['LBL_SELECT_CASE_DOCUMENT'];
}?>" class="firstChild" value="<?php if (!empty($_smarty_tpl->tpl_vars['MOD']->value['LBL_SELECT_CASE_DOCUMENT'])) {
echo $_smarty_tpl->tpl_vars['MOD']->value['LBL_SELECT_CASE_DOCUMENT'];
}?>"
                        
                        onclick='open_popup(
                                "Documents",
                                600,
                                400,
                                "",
                                true,
                                false,
                                {"call_back_function":"set_return","form_name":"EditView","field_to_name_array":{"id":"case_document_id","name":"case_document_name"}},
                                "single",
                                true
                                );' >
                        
                        <?php echo smarty_function_sugar_getimage(array('name'=>"cursor",'attr'=>'border="0"'),$_smarty_tpl);?>

                </button>
                <button type="button" name="btn_clr_case_document_name"
                        id="btn_clr_case_document_name" tabindex="0" title="<?php if (!empty($_smarty_tpl->tpl_vars['MOD']->value['LBL_CLEAR_CASE_DOCUMENT'])) {
echo $_smarty_tpl->tpl_vars['MOD']->value['LBL_CLEAR_CASE_DOCUMENT'];
}?>"  class="lastChild"
                        onclick="SUGAR.clearRelateField(this.form, 'case_document_name', 'case_document_id');"  value="<?php if (!empty($_smarty_tpl->tpl_vars['MOD']->value['LBL_CLEAR_CASE_DOCUMENT'])) {
echo $_smarty_tpl->tpl_vars['MOD']->value['LBL_CLEAR_CASE_DOCUMENT'];
}?>" >
                        <?php echo smarty_function_sugar_getimage(array('name'=>"cross",'attr'=>'border="0"'),$_smarty_tpl);?>

                </button>
            </span>
        </span>

<button class="removeFileButton case-removebutton" type="button"><?php if (!empty($_smarty_tpl->tpl_vars['MOD']->value['LBL_REMOVE_CASE_FILE'])) {
echo $_smarty_tpl->tpl_vars['MOD']->value['LBL_REMOVE_CASE_FILE'];
}?></button><br>
</span>
<?php echo '</script'; ?>
>
<?php }
}
