System.register(['angular2/core', "angular2/router", './admineditname.component', "./admineditdepartment.component", "./admineditrole.component", "./admineditposition.component", "./employee.service", "./adminempdetail.component"], function(exports_1, context_1) {
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
    var core_1, router_1, admineditname_component_1, admineditdepartment_component_1, admineditrole_component_1, admineditposition_component_1, employee_service_1, router_2, adminempdetail_component_1;
    var AdminempdetailContainerComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
                router_2 = router_1_1;
            },
            function (admineditname_component_1_1) {
                admineditname_component_1 = admineditname_component_1_1;
            },
            function (admineditdepartment_component_1_1) {
                admineditdepartment_component_1 = admineditdepartment_component_1_1;
            },
            function (admineditrole_component_1_1) {
                admineditrole_component_1 = admineditrole_component_1_1;
            },
            function (admineditposition_component_1_1) {
                admineditposition_component_1 = admineditposition_component_1_1;
            },
            function (employee_service_1_1) {
                employee_service_1 = employee_service_1_1;
            },
            function (adminempdetail_component_1_1) {
                adminempdetail_component_1 = adminempdetail_component_1_1;
            }],
        execute: function() {
            AdminempdetailContainerComponent = (function () {
                function AdminempdetailContainerComponent(routeparams, empSevice) {
                    this.routeparams = routeparams;
                    this.empSevice = empSevice;
                }
                AdminempdetailContainerComponent.prototype.ngOnInit = function () {
                    console.log(this.routeparams.get('emp'));
                    this.passid(this.routeparams.get('emp'));
                };
                AdminempdetailContainerComponent.prototype.passid = function (emp) {
                    this.passedemp = emp;
                };
                AdminempdetailContainerComponent = __decorate([
                    core_1.Component({
                        template: "<h1>Employee Detail Container</h1>\n    ",
                        styles: ['.distance{margin-left:20px;}'],
                        directives: [admineditname_component_1.AdmineditnameComponent, admineditdepartment_component_1.AdmineditdepartmentComponent, admineditrole_component_1.AdmineditroleComponent, admineditposition_component_1.AdmineditpositionComponent],
                        providers: [employee_service_1.EmployeeService]
                    }),
                    router_2.RouteConfig([
                        { path: '/',
                            component: adminempdetail_component_1.AdminempdetailComponent,
                            name: 'Empdetails',
                            useAsDefault: true },
                    ]), 
                    __metadata('design:paramtypes', [router_1.RouteParams, employee_service_1.EmployeeService])
                ], AdminempdetailContainerComponent);
                return AdminempdetailContainerComponent;
            }());
            exports_1("AdminempdetailContainerComponent", AdminempdetailContainerComponent);
        }
    }
});
