System.register(['angular2/core', "angular2/router"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, router_1, router_2;
    var AdmineditnameChangeComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
                router_2 = router_1_1;
            }],
        execute: function() {
            AdmineditnameChangeComponent = (function () {
                function AdmineditnameChangeComponent(routeparam) {
                    this.routeparam = routeparam;
                    this.passedempid = null;
                }
                AdmineditnameChangeComponent.prototype.ngOnInit = function () {
                    this.passedempid = this.routeparam.get('empid');
                };
                AdmineditnameChangeComponent = __decorate([
                    core_1.Component({
                        template: '<input type="text" value="{{passedemp.name}}"/> <button class="btn btn-primary"><i class="fa fa-check" aria-hidden="true"></i></button>' +
                            '<button class="btn btn-default"><i class="fa fa-times" aria-hidden="true"></i></button>',
                        styles: [''],
                        directives: [router_2.ROUTER_DIRECTIVES]
                    }), 
                    __metadata('design:paramtypes', [router_1.RouteParams])
                ], AdmineditnameChangeComponent);
                return AdmineditnameChangeComponent;
            }());
            exports_1("AdmineditnameChangeComponent", AdmineditnameChangeComponent);
        }
    }
});
