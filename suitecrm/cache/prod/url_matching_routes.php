<?php

/**
 * This file has been auto-generated
 * by the Symfony Routing Component.
 */

return [
    false, // $matchHost
    [ // $staticRoutes
        '/login' => [[['_route' => 'app_login', '_controller' => 'App\\Authentication\\Controller\\SecurityController::login'], null, ['GET' => 0, 'POST' => 1], null, false, false, null]],
        '/logout' => [[['_route' => 'app_logout', '_controller' => 'App\\Authentication\\Controller\\SecurityController::logout'], null, ['GET' => 0, 'POST' => 1], null, false, false, null]],
        '/session-status' => [[['_route' => 'app_session_status', '_controller' => 'App\\Authentication\\Controller\\SecurityController::sessionStatus'], null, ['GET' => 0], null, false, false, null]],
        '/auth/login' => [[['_route' => 'native_auth_login', '_controller' => 'App\\Authentication\\Controller\\SecurityController::nativeAuthLogin'], null, ['GET' => 0, 'POST' => 1], null, false, false, null]],
        '/auth/logout' => [[['_route' => 'native_auth_logout', '_controller' => 'App\\Authentication\\Controller\\SecurityController::nativeAuthLogout'], null, ['GET' => 0, 'POST' => 1], null, false, false, null]],
        '/auth/session-status' => [[['_route' => 'native_auth_session_status', '_controller' => 'App\\Authentication\\Controller\\SecurityController::nativeAuthSessionStatus'], null, ['GET' => 0], null, false, false, null]],
        '/' => [[['_route' => 'index', '_controller' => 'App\\Engine\\Controller\\IndexController::index'], null, ['GET' => 0], null, false, false, null]],
        '/auth' => [[['_route' => 'nativeAuth', '_controller' => 'App\\Engine\\Controller\\IndexController::nativeAuth'], null, ['GET' => 0], null, false, false, null]],
        '/logged-out' => [[['_route' => 'logged-out', '_controller' => 'App\\Engine\\Controller\\IndexController::loggedOut'], null, ['GET' => 0], null, false, false, null]],
        '/api/graphql' => [[['_route' => 'api_graphql_entrypoint', '_controller' => 'api_platform.graphql.action.entrypoint', '_graphql' => true], null, null, null, false, false, null]],
        '/api/graphql/graphql_playground' => [[['_route' => 'api_graphql_graphql_playground', '_controller' => 'api_platform.graphql.action.graphql_playground', '_graphql' => true], null, null, null, false, false, null]],
        '/docs/rest' => [[['_route' => 'swagger_ui', '_controller' => 'api_platform.swagger.action.ui'], null, null, null, false, false, null]],
        '/docs/graphql' => [[['_route' => 'graphiql', '_controller' => 'api_platform.graphql.action.graphql_playground'], null, null, null, false, false, null]],
        '/saml/metadata' => [[['_route' => 'saml_metadata', '_controller' => 'Hslavich\\OneloginSamlBundle\\Controller\\SamlController::metadataAction'], null, null, null, false, false, null]],
        '/saml/acs' => [[['_route' => 'saml_acs', '_controller' => 'Hslavich\\OneloginSamlBundle\\Controller\\SamlController::assertionConsumerServiceAction'], null, null, null, false, false, null]],
        '/saml/login' => [[['_route' => 'saml_login', '_controller' => 'Hslavich\\OneloginSamlBundle\\Controller\\SamlController::loginAction'], null, null, null, false, false, null]],
        '/saml/logout' => [[['_route' => 'saml_logout', '_controller' => 'Hslavich\\OneloginSamlBundle\\Controller\\SamlController::singleLogoutServiceAction'], null, null, null, false, false, null]],
    ],
    [ // $regexpList
        0 => '{^(?'
                .'|/api(?'
                    .'|/\\.well\\-known/genid/([^/]++)(*:43)'
                    .'|(?:/(index)(?:\\.([^/]++))?)?(*:78)'
                    .'|/(?'
                        .'|docs(?:\\.([^/]++))?(*:108)'
                        .'|contexts/([^.]+)(?:\\.(jsonld))?(*:147)'
                        .'|record(?'
                            .'|/([^/]++)(*:173)'
                            .'|\\-list/([^/]++)(*:196)'
                        .')'
                        .'|vardef/field\\-definitions(?'
                            .'|(?:\\.([^/]++))?(?'
                                .'|(*:251)'
                            .')'
                            .'|/([^/\\.]++)(?:\\.([^/]++))?(*:286)'
                        .')'
                        .'|app\\-(?'
                            .'|list\\-strings/([^/\\.]++)(?:\\.([^/]++))?(*:342)'
                            .'|strings/([^/\\.]++)(?:\\.([^/]++))?(*:383)'
                            .'|metadata/([^/]++)(*:408)'
                        .')'
                        .'|m(?'
                            .'|od(?'
                                .'|\\-strings/([^/\\.]++)(?:\\.([^/]++))?(*:461)'
                                .'|ule\\-metadata/([^/]++)(*:491)'
                            .')'
                            .'|etadata/view\\-definitions(?'
                                .'|(?:\\.([^/]++))?(*:543)'
                                .'|/([^/\\.]++)(?:\\.([^/]++))?(*:577)'
                            .')'
                        .')'
                        .'|user(?'
                            .'|s/([^/\\.]++)(?:\\.([^/]++))?(*:621)'
                            .'|\\-preferences(?'
                                .'|(?:\\.([^/]++))?(*:660)'
                                .'|/([^/\\.]++)(?:\\.([^/]++))?(*:694)'
                            .')'
                        .')'
                        .'|navbars/([^/\\.]++)(?:\\.([^/]++))?(*:737)'
                        .'|processes(?'
                            .'|(?:\\.([^/]++))?(*:772)'
                            .'|/([^/\\.]++)(?:\\.([^/]++))?(?'
                                .'|(*:809)'
                            .')'
                        .')'
                        .'|batched\\-statistics/([^/\\.]++)(?:\\.([^/]++))?(*:864)'
                        .'|s(?'
                            .'|tatistics/([^/\\.]++)(?:\\.([^/]++))?(*:911)'
                            .'|ystem\\-configs(?'
                                .'|(?:\\.([^/]++))?(*:951)'
                                .'|/([^/\\.]++)(?:\\.([^/]++))?(*:985)'
                            .')'
                        .')'
                        .'|theme\\-images/([^/\\.]++)(?:\\.([^/]++))?(*:1034)'
                    .')'
                .')'
            .')/?$}sDu',
    ],
    [ // $dynamicRoutes
        43 => [[['_route' => 'api_genid', '_controller' => 'api_platform.action.not_exposed', '_api_respond' => 'true'], ['id'], null, null, false, true, null]],
        78 => [[['_route' => 'api_entrypoint', '_controller' => 'api_platform.action.entrypoint', '_format' => '', '_api_respond' => 'true', 'index' => 'index'], ['index', '_format'], null, null, false, true, null]],
        108 => [[['_route' => 'api_doc', '_controller' => 'api_platform.action.documentation', '_format' => '', '_api_respond' => 'true'], ['_format'], null, null, false, true, null]],
        147 => [[['_route' => 'api_jsonld_context', '_controller' => 'api_platform.jsonld.action.context', '_format' => 'jsonld', '_api_respond' => 'true'], ['shortName', '_format'], null, null, false, true, null]],
        173 => [[['_route' => 'api_records_get_item', '_controller' => 'api_platform.action.get_item', '_format' => null, '_stateless' => null, '_api_resource_class' => 'App\\Data\\Entity\\Record', '_api_identifiers' => ['id'], '_api_has_composite_identifier' => false, '_api_exception_to_status' => [], '_api_operation_name' => 'api_records_get_item', '_api_item_operation_name' => 'get'], ['id'], ['GET' => 0], null, false, true, null]],
        196 => [[['_route' => 'api_record_lists_get_item', '_controller' => 'api_platform.action.get_item', '_format' => null, '_stateless' => null, '_api_resource_class' => 'App\\Data\\Entity\\RecordList', '_api_identifiers' => ['id'], '_api_has_composite_identifier' => false, '_api_exception_to_status' => [], '_api_operation_name' => 'api_record_lists_get_item', '_api_item_operation_name' => 'get'], ['id'], ['GET' => 0], null, false, true, null]],
        251 => [
            [['_route' => 'api_field_definitions_get_collection', '_controller' => 'api_platform.action.get_collection', '_format' => null, '_stateless' => null, '_api_resource_class' => 'App\\FieldDefinitions\\Entity\\FieldDefinition', '_api_identifiers' => ['id'], '_api_has_composite_identifier' => false, '_api_exception_to_status' => [], '_api_operation_name' => 'api_field_definitions_get_collection', '_api_collection_operation_name' => 'get'], ['_format'], ['GET' => 0], null, false, true, null],
            [['_route' => 'api_field_definitions_post_collection', '_controller' => 'api_platform.action.post_collection', '_format' => null, '_stateless' => null, '_api_resource_class' => 'App\\FieldDefinitions\\Entity\\FieldDefinition', '_api_identifiers' => ['id'], '_api_has_composite_identifier' => false, '_api_exception_to_status' => [], '_api_operation_name' => 'api_field_definitions_post_collection', '_api_collection_operation_name' => 'post'], ['_format'], ['POST' => 0], null, false, true, null],
        ],
        286 => [[['_route' => 'api_field_definitions_get_item', '_controller' => 'api_platform.action.get_item', '_format' => null, '_stateless' => null, '_api_resource_class' => 'App\\FieldDefinitions\\Entity\\FieldDefinition', '_api_identifiers' => ['id'], '_api_has_composite_identifier' => false, '_api_exception_to_status' => [], '_api_operation_name' => 'api_field_definitions_get_item', '_api_item_operation_name' => 'get'], ['id', '_format'], ['GET' => 0], null, false, true, null]],
        342 => [[['_route' => 'api_app_list_strings_get_item', '_controller' => 'api_platform.action.get_item', '_format' => null, '_stateless' => null, '_api_resource_class' => 'App\\Languages\\Entity\\AppListStrings', '_api_identifiers' => ['id'], '_api_has_composite_identifier' => false, '_api_exception_to_status' => [], '_api_operation_name' => 'api_app_list_strings_get_item', '_api_item_operation_name' => 'get'], ['id', '_format'], ['GET' => 0], null, false, true, null]],
        383 => [[['_route' => 'api_app_strings_get_item', '_controller' => 'api_platform.action.get_item', '_format' => null, '_stateless' => null, '_api_resource_class' => 'App\\Languages\\Entity\\AppStrings', '_api_identifiers' => ['id'], '_api_has_composite_identifier' => false, '_api_exception_to_status' => [], '_api_operation_name' => 'api_app_strings_get_item', '_api_item_operation_name' => 'get'], ['id', '_format'], ['GET' => 0], null, false, true, null]],
        408 => [[['_route' => 'api_app_metadatas_get_item', '_controller' => 'api_platform.action.get_item', '_format' => null, '_stateless' => null, '_api_resource_class' => 'App\\Metadata\\Entity\\AppMetadata', '_api_identifiers' => ['id'], '_api_has_composite_identifier' => false, '_api_exception_to_status' => [], '_api_operation_name' => 'api_app_metadatas_get_item', '_api_item_operation_name' => 'get'], ['id'], ['GET' => 0], null, false, true, null]],
        461 => [[['_route' => 'api_mod_strings_get_item', '_controller' => 'api_platform.action.get_item', '_format' => null, '_stateless' => null, '_api_resource_class' => 'App\\Languages\\Entity\\ModStrings', '_api_identifiers' => ['id'], '_api_has_composite_identifier' => false, '_api_exception_to_status' => [], '_api_operation_name' => 'api_mod_strings_get_item', '_api_item_operation_name' => 'get'], ['id', '_format'], ['GET' => 0], null, false, true, null]],
        491 => [[['_route' => 'api_module_metadatas_get_item', '_controller' => 'api_platform.action.get_item', '_format' => null, '_stateless' => null, '_api_resource_class' => 'App\\Metadata\\Entity\\ModuleMetadata', '_api_identifiers' => ['id'], '_api_has_composite_identifier' => false, '_api_exception_to_status' => [], '_api_operation_name' => 'api_module_metadatas_get_item', '_api_item_operation_name' => 'get'], ['id'], ['GET' => 0], null, false, true, null]],
        543 => [[['_route' => 'api_view_definitions_get_collection', '_controller' => 'api_platform.action.get_collection', '_format' => null, '_stateless' => null, '_api_resource_class' => 'App\\ViewDefinitions\\Entity\\ViewDefinition', '_api_identifiers' => ['id'], '_api_has_composite_identifier' => false, '_api_exception_to_status' => [], '_api_operation_name' => 'api_view_definitions_get_collection', '_api_collection_operation_name' => 'get'], ['_format'], ['GET' => 0], null, false, true, null]],
        577 => [[['_route' => 'api_view_definitions_get_item', '_controller' => 'api_platform.action.get_item', '_format' => null, '_stateless' => null, '_api_resource_class' => 'App\\ViewDefinitions\\Entity\\ViewDefinition', '_api_identifiers' => ['id'], '_api_has_composite_identifier' => false, '_api_exception_to_status' => [], '_api_operation_name' => 'api_view_definitions_get_item', '_api_item_operation_name' => 'get'], ['id', '_format'], ['GET' => 0], null, false, true, null]],
        621 => [[['_route' => 'api_users_get_item', '_controller' => 'api_platform.action.get_item', '_format' => null, '_stateless' => null, '_api_resource_class' => 'App\\Module\\Users\\Entity\\User', '_api_identifiers' => ['id'], '_api_has_composite_identifier' => false, '_api_exception_to_status' => [], '_api_operation_name' => 'api_users_get_item', '_api_item_operation_name' => 'get'], ['id', '_format'], ['GET' => 0], null, false, true, null]],
        660 => [[['_route' => 'api_user_preferences_get_collection', '_controller' => 'api_platform.action.get_collection', '_format' => null, '_stateless' => null, '_api_resource_class' => 'App\\UserPreferences\\Entity\\UserPreference', '_api_identifiers' => ['id'], '_api_has_composite_identifier' => false, '_api_exception_to_status' => [], '_api_operation_name' => 'api_user_preferences_get_collection', '_api_collection_operation_name' => 'get'], ['_format'], ['GET' => 0], null, false, true, null]],
        694 => [[['_route' => 'api_user_preferences_get_item', '_controller' => 'api_platform.action.get_item', '_format' => null, '_stateless' => null, '_api_resource_class' => 'App\\UserPreferences\\Entity\\UserPreference', '_api_identifiers' => ['id'], '_api_has_composite_identifier' => false, '_api_exception_to_status' => [], '_api_operation_name' => 'api_user_preferences_get_item', '_api_item_operation_name' => 'get'], ['id', '_format'], ['GET' => 0], null, false, true, null]],
        737 => [[['_route' => 'api_navbars_get_item', '_controller' => 'api_platform.action.get_item', '_format' => null, '_stateless' => null, '_api_resource_class' => 'App\\Navbar\\Entity\\Navbar', '_api_identifiers' => ['userID'], '_api_has_composite_identifier' => false, '_api_exception_to_status' => [], '_api_operation_name' => 'api_navbars_get_item', '_api_item_operation_name' => 'get'], ['userID', '_format'], ['GET' => 0], null, false, true, null]],
        772 => [[['_route' => 'api_processes_get_collection', '_controller' => 'api_platform.action.get_collection', '_format' => null, '_stateless' => null, '_api_resource_class' => 'App\\Process\\Entity\\Process', '_api_identifiers' => ['id'], '_api_has_composite_identifier' => false, '_api_exception_to_status' => [], '_api_operation_name' => 'api_processes_get_collection', '_api_collection_operation_name' => 'get'], ['_format'], ['GET' => 0], null, false, true, null]],
        809 => [
            [['_route' => 'api_processes_get_item', '_controller' => 'api_platform.action.get_item', '_format' => null, '_stateless' => null, '_api_resource_class' => 'App\\Process\\Entity\\Process', '_api_identifiers' => ['id'], '_api_has_composite_identifier' => false, '_api_exception_to_status' => [], '_api_operation_name' => 'api_processes_get_item', '_api_item_operation_name' => 'get'], ['id', '_format'], ['GET' => 0], null, false, true, null],
            [['_route' => 'api_processes_put_item', '_controller' => 'api_platform.action.put_item', '_format' => null, '_stateless' => null, '_api_resource_class' => 'App\\Process\\Entity\\Process', '_api_identifiers' => ['id'], '_api_has_composite_identifier' => false, '_api_exception_to_status' => [], '_api_operation_name' => 'api_processes_put_item', '_api_item_operation_name' => 'put'], ['id', '_format'], ['PUT' => 0], null, false, true, null],
        ],
        864 => [[['_route' => 'api_batched_statistics_get_item', '_controller' => 'api_platform.action.get_item', '_format' => null, '_stateless' => null, '_api_resource_class' => 'App\\Statistics\\Entity\\BatchedStatistics', '_api_identifiers' => ['id'], '_api_has_composite_identifier' => false, '_api_exception_to_status' => [], '_api_operation_name' => 'api_batched_statistics_get_item', '_api_item_operation_name' => 'get'], ['id', '_format'], ['GET' => 0], null, false, true, null]],
        911 => [[['_route' => 'api_statistics_get_item', '_controller' => 'api_platform.action.get_item', '_format' => null, '_stateless' => null, '_api_resource_class' => 'App\\Statistics\\Entity\\Statistic', '_api_identifiers' => ['id'], '_api_has_composite_identifier' => false, '_api_exception_to_status' => [], '_api_operation_name' => 'api_statistics_get_item', '_api_item_operation_name' => 'get'], ['id', '_format'], ['GET' => 0], null, false, true, null]],
        951 => [[['_route' => 'api_system_configs_get_collection', '_controller' => 'api_platform.action.get_collection', '_format' => null, '_stateless' => null, '_api_resource_class' => 'App\\SystemConfig\\Entity\\SystemConfig', '_api_identifiers' => ['id'], '_api_has_composite_identifier' => false, '_api_exception_to_status' => [], '_api_operation_name' => 'api_system_configs_get_collection', '_api_collection_operation_name' => 'get'], ['_format'], ['GET' => 0], null, false, true, null]],
        985 => [[['_route' => 'api_system_configs_get_item', '_controller' => 'api_platform.action.get_item', '_format' => null, '_stateless' => null, '_api_resource_class' => 'App\\SystemConfig\\Entity\\SystemConfig', '_api_identifiers' => ['id'], '_api_has_composite_identifier' => false, '_api_exception_to_status' => [], '_api_operation_name' => 'api_system_configs_get_item', '_api_item_operation_name' => 'get'], ['id', '_format'], ['GET' => 0], null, false, true, null]],
        1034 => [
            [['_route' => 'api_theme_images_get_item', '_controller' => 'api_platform.action.get_item', '_format' => null, '_stateless' => null, '_api_resource_class' => 'App\\Themes\\Entity\\ThemeImages', '_api_identifiers' => ['id'], '_api_has_composite_identifier' => false, '_api_exception_to_status' => [], '_api_operation_name' => 'api_theme_images_get_item', '_api_item_operation_name' => 'get'], ['id', '_format'], ['GET' => 0], null, false, true, null],
            [null, null, null, null, false, false, 0],
        ],
    ],
    null, // $checkCondition
];
