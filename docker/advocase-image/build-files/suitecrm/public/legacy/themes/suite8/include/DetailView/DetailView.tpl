{*
/**
 *
 * SugarCRM Community Edition is a customer relationship management program developed by
 * SugarCRM, Inc. Copyright (C) 2004-2013 SugarCRM Inc.
 *
 * SuiteCRM is an extension to SugarCRM Community Edition developed by SalesAgility Ltd.
 * Copyright (C) 2011 - 2018 SalesAgility Ltd.
 *
 * This program is free software; you can redistribute it and/or modify it under
 * the terms of the GNU Affero General Public License version 3 as published by the
 * Free Software Foundation with the addition of the following permission added
 * to Section 15 as permitted in Section 7(a): FOR ANY PART OF THE COVERED WORK
 * IN WHICH THE COPYRIGHT IS OWNED BY SUGARCRM, SUGARCRM DISCLAIMS THE WARRANTY
 * OF NON INFRINGEMENT OF THIRD PARTY RIGHTS.
 *
 * This program is distributed in the hope that it will be useful, but WITHOUT
 * ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS
 * FOR A PARTICULAR PURPOSE. See the GNU Affero General Public License for more
 * details.
 *
 * You should have received a copy of the GNU Affero General Public License along with
 * this program; if not, see http://www.gnu.org/licenses or write to the Free
 * Software Foundation, Inc., 51 Franklin Street, Fifth Floor, Boston, MA
 * 02110-1301 USA.
 *
 * You can contact SugarCRM, Inc. headquarters at 10050 North Wolfe Road,
 * SW2-130, Cupertino, CA 95014, USA. or at email address contact@sugarcrm.com.
 *
 * The interactive user interfaces in modified source and object code versions
 * of this program must display Appropriate Legal Notices, as required under
 * Section 5 of the GNU Affero General Public License version 3.
 *
 * In accordance with Section 7(b) of the GNU Affero General Public License version 3,
 * these Appropriate Legal Notices must retain the display of the "Powered by
 * SugarCRM" logo and "Supercharged by SuiteCRM" logo. If the display of the logos is not
 * reasonably feasible for technical reasons, the Appropriate Legal Notices must
 * display the words "Powered by SugarCRM" and "Supercharged by SuiteCRM".
 */
*}

<div class="detail-border-bottom"></div>
{{sugar_include type="smarty" file=$headerTpl}}
{sugar_include include=$includes}
<div class="detail-view">
    <div class="mobile-pagination">{$PAGINATION}</div>
    {{counter name="tabCount" start=-1 print=false assign="tabCount"}}
    <ul class="nav nav-tabs">
        {{if $useTabs}}
        {{counter name="isection" start=0 print=false assign="isection"}}
        {{foreach name=section from=$sectionPanels key=label item=panel}}
        {{capture name=label_upper assign=label_upper}}{{$label|upper}}{{/capture}}
        {{if (isset($tabDefs[$label_upper].newTab) && $tabDefs[$label_upper].newTab == true)}}
        {{counter name="tabCount" print=false}}
        <li role="presentation" {{if $tabCount == '0'}}class="active"{{/if}}>
            <a id="tab{{$tabCount}}" data-toggle="tab" class="hidden-xs">
                {sugar_translate label='{{$label}}' module='{{$module}}'}
            </a>
        </li>
        {{/if}}
        {{counter name="tabCount" print=false}}
        {{/foreach}}
        {{/if}}
        {{if $config.enable_action_menu and $config.enable_action_menu != false}}
        <li id="tab-actions" class="dropdown">
            <a class="dropdown-toggle" data-toggle="dropdown" href="#">{{$APP.LBL_LINK_ACTIONS}}<span class="suitepicon suitepicon-action-caret"></span></a>
            {{include file="themes/suite8/include/DetailView/actions_menu.tpl"}}
             <li class="dropdown-edit">{{sugar_button module="$module" id="EDIT" view="$view" form_id="formDetailView"}}</li>
        </li>
        {{/if}}
    </ul>

    <div class="clearfix"></div>
    {{if $useTabs}}
    <div class="tab-content">
        {{foreach name=section from=$sectionPanels key=label item=panel}}
        {{capture name=label_upper assign=label_upper}}{{$label|upper}}{{/capture}}
        {{if isset($tabDefs[$label_upper].newTab) && $tabDefs[$label_upper].newTab == true}}
        <div class="tab-pane-NOBOOTSTRAPTOGGLER {{if $tabCount == 0}}active fade in{{else}}fade{{/if}}" id='tab-content-{{$tabCount}}'>
            {{include file='themes/suite8/include/DetailView/tab_panel_content.tpl'}}
        </div>
        {{/if}}
        {{counter name="tabCount" print=false}}
        {{/foreach}}
    </div>
    {{/if}}

    <div class="panel-content">
        {{counter name="tabCount" start=-1 print=false assign="tabCount"}}
        {{counter name="panelCount" start=-1 print=false assign="panelCount"}}
        {{foreach name=section from=$sectionPanels key=label item=panel}}
        {{capture name=label_upper assign=label_upper}}{{$label|upper}}{{/capture}}
        {{if isset($tabDefs[$label_upper].newTab) && $tabDefs[$label_upper].newTab == true && $useTabs}}
        {{counter name="tabCount" print=false}}
        {{else}}
        <div class="panel panel-default">
            <div class="panel-heading {{if (isset($tabDefs[$label_upper].panelDefault) && $tabDefs[$label_upper].panelDefault == 'collapsed') }}collapsed panel-heading-collapse{{/if}}">
                <a role="button" data-toggle="collapse" href="#panel-{{$panelCount}}" aria-expanded="{{if (isset($tabDefs[$label_upper].panelDefault) && $tabDefs[$label_upper].panelDefault == 'collapsed') }}false{{else}}true{{/if}}">
                    <div class="col-xs-10 col-sm-11 col-md-11">
                        {sugar_translate label='{{$label}}' module='{{$module}}'}
                    </div>
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9.28125 13.2188L5.28125 9.21875C5 8.9375 4.90625 8.5 5.0625 8.125C5.21875 7.75 5.59375 7.5 6 7.5H14C14.4062 7.5 14.75 7.75 14.9062 8.125C15.0625 8.5 14.9688 8.9375 14.6875 9.21875L10.6875 13.2188C10.3125 13.625 9.65625 13.625 9.28125 13.2188Z" fill="white"/>
                    </svg>
                </a>
            </div>
            <div class="panel-body panel-collapse {{if (isset($tabDefs[$label_upper].panelDefault) && $tabDefs[$label_upper].panelDefault == 'collapsed') }}collapse{{else}}collapse in{{/if}}" id="panel-{{$panelCount}}" data-id="{{$label_upper}}">
                <div class="tab-content">
                    {{include file='themes/suite8/include/DetailView/tab_panel_content.tpl'}}
                </div>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10.6875 5.8125L14.6875 9.8125C14.9688 10.0938 15.0625 10.5312 14.9062 10.9062C14.75 11.2812 14.375 11.5312 14 11.5312H6C5.59375 11.5312 5.21875 11.2812 5.0625 10.9062C4.90625 10.5312 5 10.0938 5.28125 9.8125L9.28125 5.8125C9.65625 5.40625 10.3125 5.40625 10.6875 5.8125Z" fill="white"/>
                </svg>
            </div>
        </div>
        {{/if}}
        {{counter name="panelCount" print=false}}
        {{/foreach}}
    </div>
</div>

{{include file=$footerTpl}}
<script type="text/javascript" src="include/InlineEditing/inlineEditing.js"></script>
<script type="text/javascript" src="modules/Favorites/favorites.js"></script>

{literal}

    <script type="text/javascript">

        let selectTabDetailView = function(tab) {
            $('#content div.tab-content div.tab-pane-NOBOOTSTRAPTOGGLER').hide();
            $('#content div.tab-content div.tab-pane-NOBOOTSTRAPTOGGLER').eq(tab).show().addClass('active').addClass('in');
            $('#content div.detail-view div.panel-content div.panel.panel').hide();
            $('#content div.panel-content div.panel.tab-panel-' + tab).show();
        };

        var selectTabOnError = function(tab) {
            selectTabDetailView(tab);
            $('#content ul.nav.nav-tabs > li').removeClass('active');
            $('#content ul.nav.nav-tabs > li a').css('color', '');

            $('#content ul.nav.nav-tabs > li').eq(tab).find('a').first().css('color', 'red');
            $('#content ul.nav.nav-tabs > li').eq(tab).addClass('active');

        };

        var selectTabOnErrorInputHandle = function(inputHandle) {
            var tab = $(inputHandle).closest('.tab-pane-NOBOOTSTRAPTOGGLER').attr('id').match(/^detailpanel_(.*)$/)[1];
            selectTabOnError(tab);
        };


        $(function(){
            $('#content ul.nav.nav-tabs > li > a[data-toggle="tab"]').click(function(e){
                if(typeof $(this).parent().find('a').first().attr('id') != 'undefined') {
                    var tab = parseInt($(this).parent().find('a').first().attr('id').match(/^tab(?<number>(.)*)$/)[1]);
                    selectTabDetailView(tab);
                }
            });
        });

    </script>

{/literal}

