System.register(['angular2/core', 'angular2/http', 'angular2/router', './adminhome.component', './adminaddemp.component', './adminemplist.component', "./adminaddsuccess.component", "./adminempdetail.component", "./employee.service", "angular2/common", "./employee"], function(exports_1, context_1) {
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
    var core_1, http_1, router_1, adminhome_component_1, adminaddemp_component_1, adminemplist_component_1, adminaddsuccess_component_1, adminempdetail_component_1, employee_service_1, common_1, employee_1;
    var AdminComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (adminhome_component_1_1) {
                adminhome_component_1 = adminhome_component_1_1;
            },
            function (adminaddemp_component_1_1) {
                adminaddemp_component_1 = adminaddemp_component_1_1;
            },
            function (adminemplist_component_1_1) {
                adminemplist_component_1 = adminemplist_component_1_1;
            },
            function (adminaddsuccess_component_1_1) {
                adminaddsuccess_component_1 = adminaddsuccess_component_1_1;
            },
            function (adminempdetail_component_1_1) {
                adminempdetail_component_1 = adminempdetail_component_1_1;
            },
            function (employee_service_1_1) {
                employee_service_1 = employee_service_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            },
            function (employee_1_1) {
                employee_1 = employee_1_1;
            }],
        execute: function() {
            AdminComponent = (function () {
                function AdminComponent(http, empService, formbuilder) {
                    this.http = http;
                    this.empService = empService;
                    this.formbuilder = formbuilder;
                    this.errorMessage = null;
                    this.heroes = null;
                    this.authenticated = true;
                    this.userinfo = { username: '', password: '' };
                    this.employees = [];
                    this.adminlogin = false;
                    this.emplogin = false;
                    this.clicked = false;
                    this.showform = true;
                }
                AdminComponent.prototype.ngOnInit = function () {
                };
                AdminComponent.prototype.check = function () {
                    var _this = this;
                    this.empService.getall().subscribe(function (info) {
                        console.log(info);
                        for (var i = 0; i < info.length; i++) {
                            var emp = info[i];
                            var newemp = new employee_1.employee(emp.id, emp.Name, emp.Position, emp.Department, emp.Gender, emp.Role, emp.Email, emp.Password, emp.Image, emp.Phone, emp.Address);
                            _this.employees.push(newemp);
                        }
                        console.log(_this.userinfo.username);
                        console.log(_this.userinfo.password);
                        for (var i = 0; i < _this.employees.length; i++) {
                            console.log(_this.employees[i].name);
                            console.log(_this.employees[i].password);
                            if (_this.employees[i].role == 'admin' && _this.userinfo.username == _this.employees[i].name && _this.userinfo.password == _this.employees[i].password) {
                                localStorage.setItem("user", _this.userinfo.username);
                                _this.adminlogin = true;
                                _this.showform = false;
                            }
                            else if (_this.employees[i].role == 'employee' && _this.userinfo.username == _this.employees[i].name && _this.userinfo.password == _this.employees[i].password) {
                                localStorage.setItem("user", _this.userinfo.username);
                                _this.emplogin = true;
                                _this.showform = false;
                            }
                        }
                    }, function (error) { console.log(error); });
                };
                AdminComponent.prototype.login = function () {
                    this.clicked = true;
                    console.log(this.authenticated);
                    this.check();
                    if (this.adminlogin == false && this.emplogin == false) {
                        this.authenticated = false;
                    }
                    console.log(this.showform);
                };
                AdminComponent.prototype.logout = function () {
                    localStorage.removeItem("user");
                    this.emplogin = false;
                    this.adminlogin == false;
                    this.authenticated = true;
                };
                AdminComponent = __decorate([
                    core_1.Component({
                        selector: 'admin',
                        templateUrl: '/php_project2/management/resources/views/admin.component.blade.php',
                        styleUrls: ['php_project2/management/public/css/admin.css'],
                        directives: [router_1.ROUTER_DIRECTIVES],
                        providers: [employee_service_1.EmployeeService]
                    }),
                    router_1.RouteConfig([
                        { path: '/php_project2/management/public/admin/home', name: 'Home', component: adminhome_component_1.AdminhomeComponent, useAsDefault: true },
                        { path: '/php_project2/management/public/admin/addemp', name: 'Add', component: adminaddemp_component_1.AdminaddempComponent },
                        { path: '/php_project2/management/public/admin/emplist', name: 'Emplist', component: adminemplist_component_1.AdminemplistComponent },
                        { path: '/php_project2/management/public/admin/addsuccess', name: 'Addsuccess', component: adminaddsuccess_component_1.AdminaddsuccessComponent },
                        { path: '/php_project2/management/public/admin/empdetail/:empid', name: 'Empdetail', component: adminempdetail_component_1.AdminempdetailComponent },
                    ]), 
                    __metadata('design:paramtypes', [http_1.Http, employee_service_1.EmployeeService, common_1.FormBuilder])
                ], AdminComponent);
                return AdminComponent;
            }());
            exports_1("AdminComponent", AdminComponent);
        }
    }
});
