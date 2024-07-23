<?php
if (!defined('sugarEntry') || !sugarEntry) {
    die('Not A Valid Entry Point');
}
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

/**
 * Smarty plugin
 * @package Smarty
 * @subpackage plugins
 */

/**
 * Smarty plugin:
 * This is a Smarty plugin to create a multi-level menu using nasted ul lists.
 * The generated structure looks like this.
 * <ul $htmlOptions>
 *      <li $itemOptions>
 *          <elem></elem>
 *          <ul $submenuHtmlOptions>
 *              <li $itemOptions></li>
 *              <li $itemOptions>
 *                  <elem></elem>
 *                  <ul $submenuHtmlOptions>
 *                      <li $itemOptions></li>
 *                      ...
 *                  </ul>
 *              </li>
 *              ...
 *          </ul>
 *      </li>
 *      ...
 *  </ul>
 *
 *
 * @param $params array - look up the bellow example
 * @param $smarty
 * @return string - generated HTML code
 *
 * <pre>
 * smarty_function_sugar_menu(array(
 *      'id' => $string, //id property that is applied in root UL
 *      'items' => array(
 *          array(
 *              'html' => $html_string, //html container that renders in the LI tag
 *              'items' => array(), //nasted ul lists
 *          )
 *      ),
 *      'htmlOptions' => attributes that is applied in root UL, such as class, or align.
 *      'itemOptions' => attributes that is applied in LI items, such as class, or align.
 *      'submenuHtmlOptions' => attributes that is applied in child UL, such as class, or align.
 * ), $smarty);
 *
 * </pre>
 * * @author Justin Park (jpark@sugarcrm.com)
 */

 $iconHtml = `<?xml version="1.0" encoding="UTF-8"?>
<svg width="20px" height="19px" viewBox="0 0 20 19" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <!-- Generator: Sketch 43.2 (39069) - http://www.bohemiancoding.com/sketch -->
    <desc>Created with Sketch.</desc>
    <defs></defs>
    <g id="Page-1" stroke="none" stroke-width="1" fill-rule="evenodd">
        <g id="unlink">
            <path d="M15.890127,14.476657 L19.246887,17.832097 L18.078984,19 L13.666554,14.58889 L10.857693,14.58889 L10.857693,12.684955 L11.781957,12.684955 L9.67692,10.612159 L5.92449,10.612159 L5.92449,8.665687 L7.726587,8.665687 L5.638314,6.577414 L4.917726,6.5761237 C3.678939,6.5722561 2.560041,7.3173367 2.086953,8.4620077 C1.613865,9.6079987 1.8794127,10.9253917 2.759856,11.7966577 C3.32574,12.3767317 4.106916,12.6990097 4.917759,12.6848197 L8.911419,12.6848197 L8.911419,14.5887547 L4.917759,14.5887547 C3.605481,14.6080927 2.343495,14.0782777 1.439889,13.1269537 C0.516912,12.1936807 0,10.9342687 0,9.6220237 C0,8.3097787 0.516912,7.0503337 1.439889,6.1170937 C2.093454,5.4351817 2.937792,4.9633807 3.862023,4.7648527 L0.488433,1.4120527 L1.656336,0.2441497 L6.068766,4.6720897 L6.0919683,4.6720897 L7.9959033,6.5760247 L7.9701237,6.5760247 L10.0583967,8.6642977 L12.0229197,10.6120567 L14.1111927,12.7003297 L15.9068547,14.4727927 L15.890127,14.476657 Z M18.312261,13.127023 C19.233951,12.19375 19.75215,10.934338 19.75215,9.622093 C19.75215,8.309848 19.233951,7.050403 18.312261,6.117163 C17.404761,5.172274 16.144062,4.648927 14.834391,4.672126 L10.857561,4.672126 L10.857561,6.576061 L14.851221,6.576061 C16.090008,6.5721934 17.207619,7.317274 17.680707,8.461945 C18.153795,9.607936 17.8882473,10.925329 17.009091,11.796595 C16.7989734,12.0067126 16.561776,12.18847 16.302693,12.334132 L17.675559,13.703104 L17.675559,13.704391 C17.9037243,13.5290785 18.116406,13.337002 18.31236,13.126891 L18.312261,13.127023 Z" id="Page-1"></path>
        </g>
    </g>
</svg>`;

require_once('include/SugarHtml/SugarHtml.php');
function smarty_function_sugar_menu($params, &$smarty)
{
    $root_options = array(
        "id" => array_key_exists('id', $params) ? $params['id'] : ""
    );
    if(array_key_exists('htmlOptions', $params)) {
        foreach($params['htmlOptions'] as $attr => $value) {
            $root_options[$attr] = $value;
        }
    }
    $output = SugarHtml::createOpenTag("ul", $root_options);
    foreach($params['items'] as $item) {
        if(strpos($item['html'], "</") === 0) {
            $output .= $item['html'];
            continue;
        }
        // Modify the html to include icons
        // TODO GET THE ICONS TO SHOW UP
        $orignalHtml = $item['html'];
        if (strpos($item['html'], 'Edit') !== false) {
            $item['html'] = $iconHtml;
        } elseif (strpos($item['html'], 'Remove') !== false) {
            $item['html'] = file_get_contents("../../../../../public/legacy/themes/suite8/images/unlink.svg");
        }

        if (empty($params['buttons'])) {
            $item['html'] = $orignalHtml;
        }

        $output .= SugarHtml::createOpenTag('li', !empty($params['itemOptions']) ? $params['itemOptions'] : array())
            .$item['html'];
        if(isset($item['items']) && count($item['items'])) {
            $output .= smarty_function_sugar_menu(array(
                'items' => $item['items'],
                'htmlOptions' => !empty($params['submenuHtmlOptions']) ? $params['submenuHtmlOptions'] : (!empty($item['submenuHtmlOptions']) ? $item['submenuHtmlOptions'] : array())
            ), $smarty);
        }
        $output .= SugarHtml::createCloseTag("li");
    }
    $output .= SugarHtml::createCloseTag("ul");
    return $output;
}
