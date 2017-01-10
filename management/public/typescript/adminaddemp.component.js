System.register(['angular2/core', 'angular2/common', './global.validator', "ng2-radio-group/index", 'angular2/http', 'rxjs/add/operator/map', './employee.service', "angular2/router"], function(exports_1, context_1) {
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
    var core_1, common_1, global_validator_1, common_2, index_1, http_1, employee_service_1, router_1;
    var AdminaddempComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
                common_2 = common_1_1;
            },
            function (global_validator_1_1) {
                global_validator_1 = global_validator_1_1;
            },
            function (index_1_1) {
                index_1 = index_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (_1) {},
            function (employee_service_1_1) {
                employee_service_1 = employee_service_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            }],
        execute: function() {
            AdminaddempComponent = (function () {
                function AdminaddempComponent(formbuilder, http, empService, router) {
                    this.formbuilder = formbuilder;
                    this.http = http;
                    this.empService = empService;
                    this.router = router;
                    this.usedemail = false;
                    this.setemail = false;
                }
                AdminaddempComponent.prototype.ngOnInit = function () {
                    this.myform = this.formbuilder.group({
                        'name': ['', common_1.Validators.required],
                        'position': ['', common_1.Validators.required],
                        'department': ['', common_1.Validators.required],
                        'gender': ['', common_1.Validators.required],
                        'email': ['', common_1.Validators.compose([common_1.Validators.required, common_1.Validators.minLength(5),
                                global_validator_1.GlobalValidator.mailFormat])],
                        'role': ['', common_1.Validators.required]
                    });
                    this.email = this.myform.controls['email'];
                    this.name = this.myform.controls['name'];
                    this.gender = this.myform.controls['gender'];
                    this.department = this.myform.controls['department'];
                    this.position = this.myform.controls['position'];
                    this.role = this.myform.controls['role'];
                };
                AdminaddempComponent.prototype.usedEmail = function (value) {
                    var _this = this;
                    this.usedemail = false;
                    ;
                    this.empService.getall().subscribe(function (emps) {
                        console.log(emps);
                        for (var i = 0; i < emps.length; i++) {
                            console.log(emps[i].Email);
                            if (emps[i].Email == value) {
                                _this.usedemail = true;
                            }
                        }
                    }, function (error) {
                        console.log(error);
                    }, function () {
                        _this.setemail = true;
                    });
                };
                AdminaddempComponent.prototype.setEmail = function () {
                    this.setemail = false;
                };
                AdminaddempComponent.prototype.onSubmit = function (value) {
                    this.addemp(value);
                    this.router.navigate(['Addsuccess']);
                };
                AdminaddempComponent.prototype.addemp = function (value) {
                    var _this = this;
                    var password = Math.random().toString(36).substring(7);
                    var emp = { 'id': null, 'name': value.name, 'position': value.position, 'department': value.department, 'gender': value.gender,
                        'role': value.role, 'email': value.email, 'password': password, 'image': '', 'phone': '', 'address': '' };
                    console.log(password);
                    var info = JSON.stringify(emp);
                    console.log(info);
                    this.empService.addemp(info)
                        .subscribe(function (heroes) { console.log(heroes['message']); }, function (error) { _this.errorMessage = error; }, function () { return console.log("Job Done Post !"); });
                };
                AdminaddempComponent = __decorate([
                    core_1.Component({
                        templateUrl: '/php_project2/management/resources/views/adminaddemp.component.blade.php',
                        styles: ['.has-error{border:1px solid red;}'],
                        directives: [common_2.FORM_DIRECTIVES, index_1.RADIO_GROUP_DIRECTIVES],
                        providers: [employee_service_1.EmployeeService]
                    }), 
                    __metadata('design:paramtypes', [common_1.FormBuilder, http_1.Http, employee_service_1.EmployeeService, router_1.Router])
                ], AdminaddempComponent);
                return AdminaddempComponent;
            }());
            exports_1("AdminaddempComponent", AdminaddempComponent);
        }
    }
});
