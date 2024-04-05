<?php

use Twig\Environment;
use Twig\Error\LoaderError;
use Twig\Error\RuntimeError;
use Twig\Extension\SandboxExtension;
use Twig\Markup;
use Twig\Sandbox\SecurityError;
use Twig\Sandbox\SecurityNotAllowedTagError;
use Twig\Sandbox\SecurityNotAllowedFilterError;
use Twig\Sandbox\SecurityNotAllowedFunctionError;
use Twig\Source;
use Twig\Template;

/* @ApiPlatform/SwaggerUi/index.html.twig */
class __TwigTemplate_c77b3394bbe543f375207152e228491a extends Template
{
    private $source;
    private $macros = [];

    public function __construct(Environment $env)
    {
        parent::__construct($env);

        $this->source = $this->getSourceContext();

        $this->parent = false;

        $this->blocks = [
            'stylesheet' => [$this, 'block_stylesheet'],
            'javascript' => [$this, 'block_javascript'],
        ];
    }

    protected function doDisplay(array $context, array $blocks = [])
    {
        $macros = $this->macros;
        // line 1
        echo "<!DOCTYPE html>
<html>
<head>
    <meta charset=\"UTF-8\">
    <title>";
        // line 5
        if (($context["title"] ?? null)) {
            echo twig_escape_filter($this->env, ($context["title"] ?? null), "html", null, true);
            echo " - ";
        }
        echo "API Platform</title>

    ";
        // line 7
        $this->displayBlock('stylesheet', $context, $blocks);
        // line 13
        echo "
    ";
        // line 14
        $context["oauth_data"] = ["oauth" => twig_array_merge(twig_get_attribute($this->env, $this->source, ($context["swagger_data"] ?? null), "oauth", [], "any", false, false, false, 14), ["redirectUrl" => $this->extensions['Symfony\Bridge\Twig\Extension\HttpFoundationExtension']->generateAbsoluteUrl($this->extensions['Symfony\Bridge\Twig\Extension\AssetExtension']->getAssetUrl("bundles/apiplatform/swagger-ui/oauth2-redirect.html", ($context["assetPackage"] ?? null)))])];
        // line 15
        echo "    ";
        // line 16
        echo "    <script id=\"swagger-data\" type=\"application/json\">";
        echo json_encode(twig_array_merge(($context["swagger_data"] ?? null), ($context["oauth_data"] ?? null)), 65);
        echo "</script>
</head>

<body>
<svg xmlns=\"http://www.w3.org/2000/svg\" style=\"position:absolute;width:0;height:0\">
    <defs>
        <symbol viewBox=\"0 0 20 20\" id=\"unlocked\">
            <path d=\"M15.8 8H14V5.6C14 2.703 12.665 1 10 1 7.334 1 6 2.703 6 5.6V6h2v-.801C8 3.754 8.797 3 10 3c1.203 0 2 .754 2 2.199V8H4c-.553 0-1 .646-1 1.199V17c0 .549.428 1.139.951 1.307l1.197.387C5.672 18.861 6.55 19 7.1 19h5.8c.549 0 1.428-.139 1.951-.307l1.196-.387c.524-.167.953-.757.953-1.306V9.199C17 8.646 16.352 8 15.8 8z\"></path>
        </symbol>

        <symbol viewBox=\"0 0 20 20\" id=\"locked\">
            <path d=\"M15.8 8H14V5.6C14 2.703 12.665 1 10 1 7.334 1 6 2.703 6 5.6V8H4c-.553 0-1 .646-1 1.199V17c0 .549.428 1.139.951 1.307l1.197.387C5.672 18.861 6.55 19 7.1 19h5.8c.549 0 1.428-.139 1.951-.307l1.196-.387c.524-.167.953-.757.953-1.306V9.199C17 8.646 16.352 8 15.8 8zM12 8H8V5.199C8 3.754 8.797 3 10 3c1.203 0 2 .754 2 2.199V8z\"></path>
        </symbol>

        <symbol viewBox=\"0 0 20 20\" id=\"close\">
            <path d=\"M14.348 14.849c-.469.469-1.229.469-1.697 0L10 11.819l-2.651 3.029c-.469.469-1.229.469-1.697 0-.469-.469-.469-1.229 0-1.697l2.758-3.15-2.759-3.152c-.469-.469-.469-1.228 0-1.697.469-.469 1.228-.469 1.697 0L10 8.183l2.651-3.031c.469-.469 1.228-.469 1.697 0 .469.469.469 1.229 0 1.697l-2.758 3.152 2.758 3.15c.469.469.469 1.229 0 1.698z\"></path>
        </symbol>

        <symbol viewBox=\"0 0 20 20\" id=\"large-arrow\">
            <path d=\"M13.25 10L6.109 2.58c-.268-.27-.268-.707 0-.979.268-.27.701-.27.969 0l7.83 7.908c.268.271.268.709 0 .979l-7.83 7.908c-.268.271-.701.27-.969 0-.268-.269-.268-.707 0-.979L13.25 10z\"></path>
        </symbol>

        <symbol viewBox=\"0 0 20 20\" id=\"large-arrow-down\">
            <path d=\"M17.418 6.109c.272-.268.709-.268.979 0s.271.701 0 .969l-7.908 7.83c-.27.268-.707.268-.979 0l-7.908-7.83c-.27-.268-.27-.701 0-.969.271-.268.709-.268.979 0L10 13.25l7.418-7.141z\"></path>
        </symbol>


        <symbol viewBox=\"0 0 24 24\" id=\"jump-to\">
            <path d=\"M19 7v4H5.83l3.58-3.59L8 6l-6 6 6 6 1.41-1.41L5.83 13H21V7z\"></path>
        </symbol>

        <symbol viewBox=\"0 0 24 24\" id=\"expand\">
            <path d=\"M10 18h4v-2h-4v2zM3 6v2h18V6H3zm3 7h12v-2H6v2z\"></path>
        </symbol>

    </defs>
</svg>
<header>
    <a id=\"logo\" href=\"https://api-platform.com\"><img src=\"";
        // line 54
        echo twig_escape_filter($this->env, $this->extensions['Symfony\Bridge\Twig\Extension\AssetExtension']->getAssetUrl("bundles/apiplatform/logo-header.svg", ($context["assetPackage"] ?? null)), "html", null, true);
        echo "\" alt=\"API Platform\"></a>
</header>

";
        // line 57
        if (($context["showWebby"] ?? null)) {
            // line 58
            echo "    <div class=\"web\"><img src=\"";
            echo twig_escape_filter($this->env, $this->extensions['Symfony\Bridge\Twig\Extension\AssetExtension']->getAssetUrl("bundles/apiplatform/web.png", ($context["assetPackage"] ?? null)), "html", null, true);
            echo "\"></div>
    <div class=\"webby\"><img src=\"";
            // line 59
            echo twig_escape_filter($this->env, $this->extensions['Symfony\Bridge\Twig\Extension\AssetExtension']->getAssetUrl("bundles/apiplatform/webby.png", ($context["assetPackage"] ?? null)), "html", null, true);
            echo "\"></div>
";
        }
        // line 61
        echo "
<div id=\"swagger-ui\" class=\"api-platform\"></div>

<div class=\"swagger-ui\" id=\"formats\">
    <div class=\"information-container wrapper\">
        <div class=\"info\">
            Available formats:
            ";
        // line 68
        $context['_parent'] = $context;
        $context['_seq'] = twig_ensure_traversable(twig_get_array_keys_filter(($context["formats"] ?? null)));
        foreach ($context['_seq'] as $context["_key"] => $context["format"]) {
            // line 69
            echo "                <a href=\"";
            echo twig_escape_filter($this->env, $this->extensions['Symfony\Bridge\Twig\Extension\RoutingExtension']->getPath(twig_get_attribute($this->env, $this->source, twig_get_attribute($this->env, $this->source, twig_get_attribute($this->env, $this->source, ($context["app"] ?? null), "request", [], "any", false, false, false, 69), "attributes", [], "any", false, false, false, 69), "get", [0 => "_route"], "method", false, false, false, 69), twig_array_merge(twig_get_attribute($this->env, $this->source, twig_get_attribute($this->env, $this->source, twig_get_attribute($this->env, $this->source, ($context["app"] ?? null), "request", [], "any", false, false, false, 69), "attributes", [], "any", false, false, false, 69), "get", [0 => "_route_params"], "method", false, false, false, 69), ["_format" => $context["format"]])), "html", null, true);
            echo "\">";
            echo twig_escape_filter($this->env, $context["format"], "html", null, true);
            echo "</a>
            ";
        }
        $_parent = $context['_parent'];
        unset($context['_seq'], $context['_iterated'], $context['_key'], $context['format'], $context['_parent'], $context['loop']);
        $context = array_intersect_key($context, $_parent) + $_parent;
        // line 71
        echo "            <br>
            Other API docs:
            ";
        // line 73
        $context["active_ui"] = twig_get_attribute($this->env, $this->source, twig_get_attribute($this->env, $this->source, ($context["app"] ?? null), "request", [], "any", false, false, false, 73), "get", [0 => "ui", 1 => "swagger_ui"], "method", false, false, false, 73);
        // line 74
        echo "            ";
        if ((($context["swaggerUiEnabled"] ?? null) && (($context["active_ui"] ?? null) != "swagger_ui"))) {
            echo "<a href=\"";
            echo $this->extensions['Symfony\Bridge\Twig\Extension\RoutingExtension']->getPath("api_doc");
            echo "\">Swagger UI</a>";
        }
        // line 75
        echo "            ";
        if ((($context["reDocEnabled"] ?? null) && (($context["active_ui"] ?? null) != "re_doc"))) {
            echo "<a href=\"";
            echo $this->extensions['Symfony\Bridge\Twig\Extension\RoutingExtension']->getPath("api_doc", ["ui" => "re_doc"]);
            echo "\">ReDoc</a>";
        }
        // line 76
        echo "            ";
        // line 77
        echo "            ";
        if ( !($context["graphqlEnabled"] ?? null)) {
            echo "<a href=\"javascript:alert('GraphQL support is not enabled, see https://api-platform.com/docs/core/graphql/')\">GraphiQL</a>";
        }
        // line 78
        echo "            ";
        if (($context["graphiQlEnabled"] ?? null)) {
            echo "<a href=\"";
            echo $this->extensions['Symfony\Bridge\Twig\Extension\RoutingExtension']->getPath("api_graphql_graphiql");
            echo "\">GraphiQL</a>";
        }
        // line 79
        echo "            ";
        if (($context["graphQlPlaygroundEnabled"] ?? null)) {
            echo "<a href=\"";
            echo $this->extensions['Symfony\Bridge\Twig\Extension\RoutingExtension']->getPath("api_graphql_graphql_playground");
            echo "\">GraphQL Playground</a>";
        }
        // line 80
        echo "        </div>
    </div>
</div>

";
        // line 84
        $this->displayBlock('javascript', $context, $blocks);
        // line 94
        echo "
</body>
</html>
";
    }

    // line 7
    public function block_stylesheet($context, array $blocks = [])
    {
        $macros = $this->macros;
        // line 8
        echo "        <link rel=\"stylesheet\" href=\"";
        echo twig_escape_filter($this->env, $this->extensions['Symfony\Bridge\Twig\Extension\AssetExtension']->getAssetUrl("bundles/apiplatform/fonts/open-sans/400.css", ($context["assetPackage"] ?? null)), "html", null, true);
        echo "\">
        <link rel=\"stylesheet\" href=\"";
        // line 9
        echo twig_escape_filter($this->env, $this->extensions['Symfony\Bridge\Twig\Extension\AssetExtension']->getAssetUrl("bundles/apiplatform/fonts/open-sans/700.css", ($context["assetPackage"] ?? null)), "html", null, true);
        echo "\">
        <link rel=\"stylesheet\" href=\"";
        // line 10
        echo twig_escape_filter($this->env, $this->extensions['Symfony\Bridge\Twig\Extension\AssetExtension']->getAssetUrl("bundles/apiplatform/swagger-ui/swagger-ui.css", ($context["assetPackage"] ?? null)), "html", null, true);
        echo "\">
        <link rel=\"stylesheet\" href=\"";
        // line 11
        echo twig_escape_filter($this->env, $this->extensions['Symfony\Bridge\Twig\Extension\AssetExtension']->getAssetUrl("bundles/apiplatform/style.css", ($context["assetPackage"] ?? null)), "html", null, true);
        echo "\">
    ";
    }

    // line 84
    public function block_javascript($context, array $blocks = [])
    {
        $macros = $this->macros;
        // line 85
        echo "    ";
        if (((($context["reDocEnabled"] ?? null) &&  !($context["swaggerUiEnabled"] ?? null)) || (($context["reDocEnabled"] ?? null) && ("re_doc" == ($context["active_ui"] ?? null))))) {
            // line 86
            echo "        <script src=\"";
            echo twig_escape_filter($this->env, $this->extensions['Symfony\Bridge\Twig\Extension\AssetExtension']->getAssetUrl("bundles/apiplatform/redoc/redoc.standalone.js", ($context["assetPackage"] ?? null)), "html", null, true);
            echo "\"></script>
        <script src=\"";
            // line 87
            echo twig_escape_filter($this->env, $this->extensions['Symfony\Bridge\Twig\Extension\AssetExtension']->getAssetUrl("bundles/apiplatform/init-redoc-ui.js", ($context["assetPackage"] ?? null)), "html", null, true);
            echo "\"></script>
    ";
        } else {
            // line 89
            echo "        <script src=\"";
            echo twig_escape_filter($this->env, $this->extensions['Symfony\Bridge\Twig\Extension\AssetExtension']->getAssetUrl("bundles/apiplatform/swagger-ui/swagger-ui-bundle.js", ($context["assetPackage"] ?? null)), "html", null, true);
            echo "\"></script>
        <script src=\"";
            // line 90
            echo twig_escape_filter($this->env, $this->extensions['Symfony\Bridge\Twig\Extension\AssetExtension']->getAssetUrl("bundles/apiplatform/swagger-ui/swagger-ui-standalone-preset.js", ($context["assetPackage"] ?? null)), "html", null, true);
            echo "\"></script>
        <script src=\"";
            // line 91
            echo twig_escape_filter($this->env, $this->extensions['Symfony\Bridge\Twig\Extension\AssetExtension']->getAssetUrl("bundles/apiplatform/init-swagger-ui.js", ($context["assetPackage"] ?? null)), "html", null, true);
            echo "\"></script>
    ";
        }
    }

    public function getTemplateName()
    {
        return "@ApiPlatform/SwaggerUi/index.html.twig";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  251 => 91,  247 => 90,  242 => 89,  237 => 87,  232 => 86,  229 => 85,  225 => 84,  219 => 11,  215 => 10,  211 => 9,  206 => 8,  202 => 7,  195 => 94,  193 => 84,  187 => 80,  180 => 79,  173 => 78,  168 => 77,  166 => 76,  159 => 75,  152 => 74,  150 => 73,  146 => 71,  135 => 69,  131 => 68,  122 => 61,  117 => 59,  112 => 58,  110 => 57,  104 => 54,  62 => 16,  60 => 15,  58 => 14,  55 => 13,  53 => 7,  45 => 5,  39 => 1,);
    }

    public function getSourceContext()
    {
        return new Source("", "@ApiPlatform/SwaggerUi/index.html.twig", "/suitecrm/vendor/api-platform/core/src/Symfony/Bundle/Resources/views/SwaggerUi/index.html.twig");
    }
}
