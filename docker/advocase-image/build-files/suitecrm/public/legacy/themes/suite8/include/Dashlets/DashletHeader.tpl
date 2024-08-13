<div onmouseover="this.style.cursor = 'move';" id="dashlet_header_{$DASHLET_ID}" class="hd dashlet">
    <div class="tl"></div>
    <div class="hd-center">
        <table width="100%" cellpadding="0" cellspacing="0" border="0" class="formHeader h3Row">
            <tr>
                <td class="dashlet-header-title" colspan="2">
                </td>
                <td class="dashlet-header-btn-group" nowrap="" width="1%">
                    <div class="dashletToolSet">
                        <a href="javascript:void(0)" title="{$DASHLET_BUTTON_ARIA_REFRESH}" aria-label="{$DASHLET_BUTTON_ARIA_REFRESH}" onclick="SUGAR.mySugar.retrieveDashlet('{$DASHLET_ID}'); return false;">
                            <span class="refresh">{sugar_getimage name="refresh"}</span>
                        </a>
                        <a href="javascript:void(0)" title="{$DASHLET_BUTTON_ARIA_EDIT}" aria-label="{$DASHLET_BUTTON_ARIA_EDIT}" onclick="SUGAR.mySugar.configureDashlet('{$DASHLET_ID}'); return false;">
                            <span class="settings">{sugar_getimage name="settings"}</span>
                        </a>
                        <a href="javascript:void(0)" title="{$DASHLET_BUTTON_ARIA_DELETE}" aria-label="{$DASHLET_BUTTON_ARIA_DELETE}" onclick="SUGAR.mySugar.deleteDashlet('{$DASHLET_ID}'); return false;">
                            <span class="cross">{sugar_getimage name="cross"}</span>
                        </a>
                    </div>
                </td>
            </tr>
        </table>
    </div>
    <div class="tr dashboard-panel-header">
        <p class='dashboard-panel-header-text'>{$DASHLET_TITLE}</p>
    </div>
</div>
<div class="bd">
    <div class="ml"></div>
    <div class="bd-center">
