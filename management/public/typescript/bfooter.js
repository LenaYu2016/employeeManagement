System.register(['./footer.component', "angular2/platform/browser"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var footer_component_1, browser_1;
    return {
        setters:[
            function (footer_component_1_1) {
                footer_component_1 = footer_component_1_1;
            },
            function (browser_1_1) {
                browser_1 = browser_1_1;
            }],
        execute: function() {
            browser_1.bootstrap(footer_component_1.FooterComponent);
        }
    }
});
