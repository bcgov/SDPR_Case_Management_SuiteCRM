<?php

function get_site_html() {

$ch = curl_init();
$header = array(
    'Content-type: application/vnd.api+json',
    'Accept: application/vnd.api+json',
 );
$postStr = json_encode(array(
    'grant_type' => 'client_credentials',
    'client_id' => 'created in SuiteCRM web app',
    'client_secret' => 'created in SuiteCRM web app',
));
$url = 'https://cbsuitecrm-d1f241-dev.apps.gold.devops.gov.bc.ca/legacy/Api/access_token';
curl_setopt($ch, CURLOPT_URL, $url);
curl_setopt($ch, CURLOPT_CUSTOMREQUEST, 'POST');
curl_setopt($ch, CURLOPT_POSTFIELDS, $postStr);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
curl_setopt($ch, CURLOPT_HTTPHEADER, $header);

$output = curl_exec($ch);

return $output;

}


$raw_html = get_site_html();

echo htmlentities($raw_html);


?>