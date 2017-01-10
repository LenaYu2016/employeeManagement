System.register(['angular2/core', "./employee", "./employee.service", "angular2/router"], function(exports_1, context_1) {
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
    var core_1, core_2, employee_1, employee_service_1, router_1;
    var AdmineditpositionComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
                core_2 = core_1_1;
            },
            function (employee_1_1) {
                employee_1 = employee_1_1;
            },
            function (employee_service_1_1) {
                employee_service_1 = employee_service_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            }],
        execute: function() {
            AdmineditpositionComponent = (function () {
                function AdmineditpositionComponent(routeparam, empService) {
                    this.routeparam = routeparam;
                    this.empService = empService;
                    this.flag = false;
                }
                AdmineditpositionComponent.prototype.ngOnInit = function () {
                    console.log(this.passedemp);
                };
                AdmineditpositionComponent.prototype.onClick = function () {
                    this.flag = !this.flag;
                };
                AdmineditpositionComponent.prototype.confirm = function (value) {
                    console.log(this.passedemp.id);
                    this.empService.editPosition(this.passedemp.id, value).subscribe(function (info) { console.log(info['id']); }, function (error) { console.log(error); }, function () { return console.log("Job Done Post !"); });
                    this.onClick();
                };
                __decorate([
                    core_2.Input(), 
                    __metadata('design:type', employee_1.employee)
                ], AdmineditpositionComponent.prototype, "passedemp", void 0);
                AdmineditpositionComponent = __decorate([
                    core_1.Component({
                        selector: 'position',
                        template: "<div *ngIf=\"!flag\"><p>Position: {{passedemp.position}} <a class=\"distance\" (click)=\"onClick()\"><i class=\"fa fa-pencil fa-lg\" aria-hidden=\"true\"></i></a></p></div>\n<div *ngIf=\"flag\"> <input type=\"text\" #userinput [(ngModel)]=\"passedemp.position\"/>\n<button class=\"btn btn-primary\" (click)=\"confirm(userinput.value)\"><i class=\"fa fa-check\" aria-hidden=\"true\"></i></button>\n<button class=\"btn btn-default\" (click)=\"onClick()\"><i class=\"fa fa-times\" aria-hidden=\"true\"></i></button></div>\n    ",
                        styles: ['.distance{margin-left:20px;} a,button{cursor:pointer;}'],
                        directives: []
                    }), 
                    __metadata('design:paramtypes', [router_1.RouteParams, employee_service_1.EmployeeService])
                ], AdmineditpositionComponent);
                return AdmineditpositionComponent;
            }());
            exports_1("AdmineditpositionComponent", AdmineditpositionComponent);
        }
    }
});
