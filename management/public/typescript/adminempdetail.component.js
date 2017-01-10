System.register(['angular2/core', "angular2/router", "./employee", './admineditname.component', "./admineditdepartment.component", "./admineditrole.component", "./admineditposition.component", "./employee.service"], function(exports_1, context_1) {
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
    var core_1, router_1, employee_1, admineditname_component_1, admineditdepartment_component_1, admineditrole_component_1, admineditposition_component_1, employee_service_1;
    var AdminempdetailComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (employee_1_1) {
                employee_1 = employee_1_1;
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
            }],
        execute: function() {
            AdminempdetailComponent = (function () {
                function AdminempdetailComponent(routeparams, empService) {
                    this.routeparams = routeparams;
                    this.empService = empService;
                }
                AdminempdetailComponent.prototype.ngOnInit = function () {
                    console.log(this.routeparams.get('empid'));
                    this.getById(this.routeparams.get('empid'));
                };
                AdminempdetailComponent.prototype.getById = function (id) {
                    var _this = this;
                    this.empService.getById(id).subscribe(function (info) {
                        console.log(info);
                        _this.passedemp = new employee_1.employee(info.id, info.Name, info.Position, info.Department, info.Gender, info.Role, info.Email, '', info.Image, info.Phone, info.Address);
                    }, function (error) { console.log(error); }, function () { return console.log("Job Done Post !"); });
                };
                AdminempdetailComponent = __decorate([
                    core_1.Component({
                        templateUrl: '/php_project2/management/resources/views/adminempdetail.component.blade.php',
                        styles: [''],
                        directives: [admineditname_component_1.AdmineditnameComponent, admineditdepartment_component_1.AdmineditdepartmentComponent, admineditrole_component_1.AdmineditroleComponent, admineditposition_component_1.AdmineditpositionComponent],
                        providers: [employee_service_1.EmployeeService]
                    }), 
                    __metadata('design:paramtypes', [router_1.RouteParams, employee_service_1.EmployeeService])
                ], AdminempdetailComponent);
                return AdminempdetailComponent;
            }());
            exports_1("AdminempdetailComponent", AdminempdetailComponent);
        }
    }
});
