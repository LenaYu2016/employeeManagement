System.register(["angular2/platform/browser", './admin.component', 'angular2/common', 'angular2/http', 'angular2/router', "angular2-jwt/angular2-jwt"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var browser_1, admin_component_1, common_1, http_1, router_1, angular2_jwt_1;
    return {
        setters:[
            function (browser_1_1) {
                browser_1 = browser_1_1;
            },
            function (admin_component_1_1) {
                admin_component_1 = admin_component_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (angular2_jwt_1_1) {
                angular2_jwt_1 = angular2_jwt_1_1;
            }],
        execute: function() {
            browser_1.bootstrap(admin_component_1.AdminComponent, [http_1.HTTP_PROVIDERS, router_1.ROUTER_PROVIDERS, common_1.FORM_PROVIDERS,
                angular2_jwt_1.AUTH_PROVIDERS]);
        }
    }
});
