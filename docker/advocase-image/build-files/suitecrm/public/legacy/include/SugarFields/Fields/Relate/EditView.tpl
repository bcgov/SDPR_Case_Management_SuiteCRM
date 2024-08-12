{{capture name=idname assign=idname}}{{sugarvar key='name'}}{{/capture}}
{{if !empty($displayParams.idName)}}
    {{assign var=idname value=$displayParams.idName}}
{{/if}}

<div class="assignedChipContainer">
    <div class="assignedChip">
        <input type="text"
               name="{{$idname}}"
               class="{{if empty($displayParams.class) }}sqsEnabled{{else}}{{$displayParams.class}}{{/if}}"
               tabindex="{{$tabindex}}"
               id="{{$idname}}"
               size="{{$displayParams.size}}"
               value="{{sugarvar key='value'}}"
               title="{{$vardef.help}}"
               autocomplete="off"
               {{$displayParams.readOnly}}
               {{$displayParams.field}}
               {{if !empty($displayParams.accesskey)}} accesskey="{{$displayParams.accesskey}}"{{/if}}
               readonly
               style="width: auto; display: inline-block;">

        <input type="hidden"
               name="{{if !empty($displayParams.idNameHidden)}}{{$displayParams.idNameHidden}}{{/if}}{{sugarvar key='id_name'}}"
               id="{{if !empty($displayParams.idNameHidden)}}{{$displayParams.idNameHidden}}{{/if}}{{sugarvar key='id_name'}}"
               {{if !empty($vardef.id_name)}} value="{{sugarvar memberName='vardef.id_name' key='value'}}"{{/if}}>

        {{if empty($displayParams.hideButtons)}}
            <span class="id-ff multiple selectcrossbtn">
                {{if empty($displayParams.selectOnly)}}
                    <button type="button"
                            name="btn_clr_{{$idname}}"
                            id="btn_clr_{{$idname}}"
                            tabindex="{{$tabindex}}"
                            title="{sugar_translate label="{{$displayParams.accessKeyClearTitle}}"}"
                            class="lastChild"
                            onclick="SUGAR.clearRelateField(this.form, '{{$idname}}', '{{if !empty($displayParams.idName)}}{{$displayParams.idName}}_{{/if}}{{sugarvar key='id_name'}}');"
                            value="{sugar_translate label="{{$displayParams.accessKeyClearLabel}}"}"
                            {{if isset($displayParams.javascript.btn_clear)}}{{$displayParams.javascript.btn_clear}}{{/if}}>
                        {sugar_getimage name="cross" attr='border="0"'}
                    </button>
                {{/if}}
            </span>
        {{/if}}

        {{if !empty($displayParams.allowNewValue)}}
            <input type="hidden"
                   name="{{$idname}}_allow_new_value"
                   id="{{$idname}}_allow_new_value"
                   value="true">
        {{/if}}
    </div>

    {{if empty($displayParams.hideButtons)}}
        <span class="id-ff multiple selectcrossbtn userselect">
            <button type="button"
                    name="btn_{{$idname}}"
                    id="btn_{{$idname}}"
                    tabindex="{{$tabindex}}"
                    title="{sugar_translate label="{{$displayParams.accessKeySelectTitle}}"}"
                    class="firstChild"
                    value="{sugar_translate label="{{$displayParams.accessKeySelectLabel}}"}"
                    onclick='open_popup(
                        "{{sugarvar key='module'}}",
                        600,
                        400,
                        "{{$displayParams.initial_filter}}",
                        true,
                        false,
                        {{$displayParams.popupData}},
                        "single",
                        true
                    );'
                    {{if isset($displayParams.javascript.btn)}}{{$displayParams.javascript.btn}}{{/if}}>
                {sugar_getimage name="cursor" attr='border="0"'}
            </button>
        </span>
    {{/if}}
</div>

<script type="text/javascript">
    SUGAR.util.doWhen(
        "typeof(sqs_objects) != 'undefined' && typeof(sqs_objects['{$form_name}_{{$idname}}']) != 'undefined'",
        enableQS
    );
</script>

