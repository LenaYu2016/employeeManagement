System.register(['@angular/core'], function(exports_1, context_1) {
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
    var core_1;
    var HeaderComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            HeaderComponent = (function () {
                function HeaderComponent() {
                }
                HeaderComponent = __decorate([
                    core_1.Component({
                        selector: 'header',
                        templateUrl: '/php_project2/management/resources/views/header.component.blade.php',
                        styles: ['.navbar{margin-bottom: 0;}']
                    }), 
                    __metadata('design:paramtypes', [])
                ], HeaderComponent);
                return HeaderComponent;
            }());
            exports_1("HeaderComponent", HeaderComponent);
        }
    }
});

System.register(['@angular/core'], function(exports_1, context_1) {
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
    var core_1;
    var AdminhomeComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            AdminhomeComponent = (function () {
                function AdminhomeComponent() {
                }
                AdminhomeComponent = __decorate([
                    core_1.Component({
                        templateUrl: '/php_project2/management/resources/views/adminhome.component.blade.php',
                    }), 
                    __metadata('design:paramtypes', [])
                ], AdminhomeComponent);
                return AdminhomeComponent;
            }());
            exports_1("AdminhomeComponent", AdminhomeComponent);
        }
    }
});

System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var employee;
    return {
        setters:[],
        execute: function() {
            employee = (function () {
                function employee(id, name, position, department, gender, role, email, password, image, phone, address) {
                    this.id = id;
                    this.name = name;
                    this.position = position;
                    this.department = department;
                    this.gender = gender;
                    this.role = role;
                    this.email = email;
                    this.password = password;
                    this.image = image;
                    this.phone = phone;
                    this.address = address;
                }
                return employee;
            }());
            exports_1("employee", employee);
        }
    }
});

System.register(["@angular/core", '@angular/http', 'rxjs/add/operator/map'], function(exports_1, context_1) {
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
    var core_1, http_1, http_2, http_3;
    var EmployeeService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
                http_2 = http_1_1;
                http_3 = http_1_1;
            },
            function (_1) {}],
        execute: function() {
            EmployeeService = (function () {
                function EmployeeService(http) {
                    this.http = http;
                }
                EmployeeService.prototype.addemp = function (info) {
                    var token = document.querySelector('meta[property="csrf-token"]')['content'];
                    var headers = new http_2.Headers({ 'Content-Type': 'application/json', 'X-CSRF-TOKEN': token });
                    var options = new http_3.RequestOptions({ headers: headers });
                    return this.http.post('http://localhost/php_project2/management/public/add', info, options)
                        .map(function (res) { return res.json(); });
                    //return this.http.post();
                };
                EmployeeService.prototype.getall = function () {
                    var headers = new http_2.Headers();
                    headers.append('Content-Type', 'application/json');
                    return this.http.get('http://localhost/php_project2/management/public/getall', { headers: headers })
                        .map(function (res) { return res.json(); });
                };
                EmployeeService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [http_1.Http])
                ], EmployeeService);
                return EmployeeService;
            }());
            exports_1("EmployeeService", EmployeeService);
        }
    }
});

System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var GlobalValidator;
    return {
        setters:[],
        execute: function() {
            GlobalValidator = (function () {
                function GlobalValidator() {
                }
                GlobalValidator.mailFormat = function (control) {
                    var EMAIL_REGEXP = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
                    if (!EMAIL_REGEXP.test(control.value)) {
                        return {
                            validateEmail: {
                                validformat: false
                            } };
                    }
                    return null;
                };
                GlobalValidator.usedEmail = function (empservive) {
                    return function (control) {
                        var list = [];
                        new Promise();
                        var q = new Promise(function (resolve, reject) {
                            setTimeout(function () {
                                empservive.getall().subscribe(function (emps) {
                                    console.log(emps);
                                    for (var i = 0; i < emps.length; i++) {
                                        console.log(emps[i].Email);
                                        list.push(emps[i].Email);
                                        console.log(list);
                                    }
                                    for (var i = 0; i < list.length; i++) {
                                        console.log(typeof control.value);
                                        console.log(typeof list[i]);
                                        console.log(list[i]);
                                        if (list[i] == control.value) {
                                            console.log('equal');
                                            resolve({ 'usedEmail': true });
                                        }
                                    }
                                    resolve(null);
                                }, function (error) {
                                    console.log(error);
                                });
                            }, 500);
                        });
                        return q;
                    };
                };
                return GlobalValidator;
            }());
            exports_1("GlobalValidator", GlobalValidator);
        }
    }
});

System.register(['@angular/core', '@angular/common', './global.validator', "ng2-radio-group/index", '@angular/http', 'rxjs/add/operator/map', './employee.service', "@angular/router"], function(exports_1, context_1) {
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

System.register(['@angular/core', "./employee.service", "./employee", "@angular/router"], function(exports_1, context_1) {
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
    var core_1, employee_service_1, employee_1, router_1;
    var AdminemplistComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (employee_service_1_1) {
                employee_service_1 = employee_service_1_1;
            },
            function (employee_1_1) {
                employee_1 = employee_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            }],
        execute: function() {
            AdminemplistComponent = (function () {
                function AdminemplistComponent(empSevice) {
                    this.empSevice = empSevice;
                    this.emplist = [];
                }
                AdminemplistComponent.prototype.ngOnInit = function () {
                    this.getAll();
                };
                AdminemplistComponent.prototype.getAll = function () {
                    var _this = this;
                    this.empSevice.getall().subscribe(function (emps) {
                        for (var i = 0; i < emps.length; i++) {
                            var emp = emps[i];
                            var newemp = new employee_1.employee(emp.id, emp.Name, emp.Position, emp.Department, emp.Gender, emp.Role, emp.Email, emp.Password, emp.Image, emp.Phone, emp.Address);
                            console.log(newemp);
                            _this.emplist.push(newemp);
                        }
                    });
                };
                AdminemplistComponent = __decorate([
                    core_1.Component({
                        templateUrl: '/php_project2/management/resources/views/adminemplist.component.blade.php',
                        styles: ['a:hover{cursor:pointer;}'],
                        directives: [router_1.ROUTER_DIRECTIVES],
                        providers: [employee_service_1.EmployeeService]
                    }), 
                    __metadata('design:paramtypes', [employee_service_1.EmployeeService])
                ], AdminemplistComponent);
                return AdminemplistComponent;
            }());
            exports_1("AdminemplistComponent", AdminemplistComponent);
        }
    }
});

System.register(['@angular/core'], function(exports_1, context_1) {
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
    var core_1;
    var AdminaddsuccessComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            AdminaddsuccessComponent = (function () {
                function AdminaddsuccessComponent() {
                }
                AdminaddsuccessComponent = __decorate([
                    core_1.Component({
                        template: '<div><p>New employee has been added.</p></div>',
                        styles: [''],
                        directives: []
                    }), 
                    __metadata('design:paramtypes', [])
                ], AdminaddsuccessComponent);
                return AdminaddsuccessComponent;
            }());
            exports_1("AdminaddsuccessComponent", AdminaddsuccessComponent);
        }
    }
});

System.register(['@angular/core', "./employee", "@angular/router"], function(exports_1, context_1) {
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
    var core_1, core_2, employee_1, router_1;
    var AdmineditnameDetailComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
                core_2 = core_1_1;
            },
            function (employee_1_1) {
                employee_1 = employee_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            }],
        execute: function() {
            AdmineditnameDetailComponent = (function () {
                function AdmineditnameDetailComponent() {
                }
                __decorate([
                    core_2.Input(), 
                    __metadata('design:type', employee_1.employee)
                ], AdmineditnameDetailComponent.prototype, "passedemp", void 0);
                AdmineditnameDetailComponent = __decorate([
                    core_1.Component({
                        template: "<p>Name:{{passedemp.name}} <a class=\"distance\" [routeLink]=\"['Changename',{emp:passedemp}]\">\n    <i class=\"fa fa-pencil fa-lg\" aria-hidden=\"true\"></i></a></p>",
                        styles: [''],
                        directives: [router_1.ROUTER_DIRECTIVES]
                    }), 
                    __metadata('design:paramtypes', [])
                ], AdmineditnameDetailComponent);
                return AdmineditnameDetailComponent;
            }());
            exports_1("AdmineditnameDetailComponent", AdmineditnameDetailComponent);
        }
    }
});

System.register(['@angular/core', "@angular/router-deprecated", "@angular/router"], function(exports_1, context_1) {
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
    var core_1, router_deprecated_1, router_1;
    var AdmineditnameChangeComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_deprecated_1_1) {
                router_deprecated_1 = router_deprecated_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            }],
        execute: function() {
            AdmineditnameChangeComponent = (function () {
                function AdmineditnameChangeComponent(routeparam) {
                    this.routeparam = routeparam;
                    this.passedemp = null;
                }
                AdmineditnameChangeComponent.prototype.ngOnInit = function () {
                    this.passedemp = this.routeparam.get('emp');
                };
                AdmineditnameChangeComponent = __decorate([
                    core_1.Component({
                        template: '<input type="text" value="{{passedemp.name}}"/> <button class="btn btn-primary"><i class="fa fa-check" aria-hidden="true"></i></button>' +
                            '<button class="btn btn-default"><i class="fa fa-times" aria-hidden="true"></i></button>',
                        styles: [''],
                        directives: [router_1.ROUTER_DIRECTIVES]
                    }), 
                    __metadata('design:paramtypes', [router_deprecated_1.RouteParams])
                ], AdmineditnameChangeComponent);
                return AdmineditnameChangeComponent;
            }());
            exports_1("AdmineditnameChangeComponent", AdmineditnameChangeComponent);
        }
    }
});

System.register(['@angular/core', "./employee", '@angular/router'], function(exports_1, context_1) {
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
    var core_1, core_2, employee_1, router_1;
    var AdmineditnameComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
                core_2 = core_1_1;
            },
            function (employee_1_1) {
                employee_1 = employee_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            }],
        execute: function() {
            AdmineditnameComponent = (function () {
                function AdmineditnameComponent() {
                }
                AdmineditnameComponent.prototype.ngOnInit = function () {
                };
                __decorate([
                    core_2.Input(), 
                    __metadata('design:type', employee_1.employee)
                ], AdmineditnameComponent.prototype, "passedemp", void 0);
                AdmineditnameComponent = __decorate([
                    core_1.Component({
                        selector: 'name',
                        template: '<router-outlet [passedemp]="passedemp"></router-outlet>',
                        styles: [''],
                        directives: [router_1.ROUTER_DIRECTIVES]
                    }), 
                    __metadata('design:paramtypes', [])
                ], AdmineditnameComponent);
                return AdmineditnameComponent;
            }());
            exports_1("AdmineditnameComponent", AdmineditnameComponent);
        }
    }
});

System.register(['@angular/core', "./employee"], function(exports_1, context_1) {
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
    var core_1, core_2, employee_1;
    var AdmineditdepartmentComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
                core_2 = core_1_1;
            },
            function (employee_1_1) {
                employee_1 = employee_1_1;
            }],
        execute: function() {
            AdmineditdepartmentComponent = (function () {
                function AdmineditdepartmentComponent() {
                }
                __decorate([
                    core_2.Input(), 
                    __metadata('design:type', employee_1.employee)
                ], AdmineditdepartmentComponent.prototype, "passedemp", void 0);
                AdmineditdepartmentComponent = __decorate([
                    core_1.Component({
                        selector: 'department',
                        template: ' <p>Department:{{passedemp.department}} <a class="distance"><i class="fa fa-pencil fa-lg" aria-hidden="true"></i></a></p>',
                        styles: [''],
                        directives: []
                    }), 
                    __metadata('design:paramtypes', [])
                ], AdmineditdepartmentComponent);
                return AdmineditdepartmentComponent;
            }());
            exports_1("AdmineditdepartmentComponent", AdmineditdepartmentComponent);
        }
    }
});

System.register(['@angular/core', "./employee"], function(exports_1, context_1) {
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
    var core_1, core_2, employee_1;
    var AdmineditroleComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
                core_2 = core_1_1;
            },
            function (employee_1_1) {
                employee_1 = employee_1_1;
            }],
        execute: function() {
            AdmineditroleComponent = (function () {
                function AdmineditroleComponent() {
                }
                __decorate([
                    core_2.Input(), 
                    __metadata('design:type', employee_1.employee)
                ], AdmineditroleComponent.prototype, "passedemp", void 0);
                AdmineditroleComponent = __decorate([
                    core_1.Component({
                        selector: 'role',
                        template: ' <p>Role:{{passedemp.role}} <a class="distance"><i class="fa fa-pencil fa-lg" aria-hidden="true"></i></a></p>',
                        styles: [''],
                        directives: []
                    }), 
                    __metadata('design:paramtypes', [])
                ], AdmineditroleComponent);
                return AdmineditroleComponent;
            }());
            exports_1("AdmineditroleComponent", AdmineditroleComponent);
        }
    }
});

System.register(['@angular/core', "./employee"], function(exports_1, context_1) {
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
    var core_1, core_2, employee_1;
    var AdmineditpositionComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
                core_2 = core_1_1;
            },
            function (employee_1_1) {
                employee_1 = employee_1_1;
            }],
        execute: function() {
            AdmineditpositionComponent = (function () {
                function AdmineditpositionComponent() {
                }
                __decorate([
                    core_2.Input(), 
                    __metadata('design:type', employee_1.employee)
                ], AdmineditpositionComponent.prototype, "passedemp", void 0);
                AdmineditpositionComponent = __decorate([
                    core_1.Component({
                        selector: 'position',
                        template: '  <p>Position:{{passedemp.position}} <a class="distance"><i class="fa fa-pencil fa-lg" aria-hidden="true"></i></a></p>',
                        styles: [''],
                        directives: []
                    }), 
                    __metadata('design:paramtypes', [])
                ], AdmineditpositionComponent);
                return AdmineditpositionComponent;
            }());
            exports_1("AdmineditpositionComponent", AdmineditpositionComponent);
        }
    }
});

System.register(['@angular/core', "@angular/router-deprecated", './admineditname.component', "./admineditdepartment.component", "./admineditrole.component", "./admineditposition.component"], function(exports_1, context_1) {
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
    var core_1, router_deprecated_1, admineditname_component_1, admineditdepartment_component_1, admineditrole_component_1, admineditposition_component_1;
    var AdminempdetailComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_deprecated_1_1) {
                router_deprecated_1 = router_deprecated_1_1;
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
            }],
        execute: function() {
            AdminempdetailComponent = (function () {
                function AdminempdetailComponent(routeparams) {
                    this.routeparams = routeparams;
                    this.passedemp = null;
                }
                AdminempdetailComponent.prototype.ngOnInit = function () {
                    this.passedemp = this.routeparams.get('emp');
                };
                AdminempdetailComponent = __decorate([
                    core_1.Component({
                        templateUrl: '/php_project2/management/resources/views/adminempdetail.component.blade.php',
                        styles: ['.distance{margin-left:20px;}'],
                        directives: [admineditname_component_1.AdmineditnameComponent, admineditdepartment_component_1.AdmineditdepartmentComponent, admineditrole_component_1.AdmineditroleComponent, admineditposition_component_1.AdmineditpositionComponent]
                    }), 
                    __metadata('design:paramtypes', [router_deprecated_1.RouteParams])
                ], AdminempdetailComponent);
                return AdminempdetailComponent;
            }());
            exports_1("AdminempdetailComponent", AdminempdetailComponent);
        }
    }
});

System.register(['@angular/core', '@angular/http', '@angular/router-deprecated'], function(exports_1, context_1) {
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
    var core_1, http_1, router_deprecated_1;
    var AdminComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (router_deprecated_1_1) {
                router_deprecated_1 = router_deprecated_1_1;
            }],
        execute: function() {
            AdminComponent = (function () {
                function AdminComponent(http) {
                    this.http = http;
                    this.errorMessage = null;
                    this.heroes = null;
                }
                AdminComponent.prototype.ngOnInit = function () {
                };
                AdminComponent = __decorate([
                    core_1.Component({
                        selector: 'admin',
                        templateUrl: '/php_project2/management/resources/views/admin.component.blade.php',
                        styleUrls: ['php_project2/management/public/css/admin.css'],
                        directives: [router_deprecated_1.ROUTER_DIRECTIVES]
                    }), 
                    __metadata('design:paramtypes', [http_1.Http])
                ], AdminComponent);
                return AdminComponent;
            }());
            exports_1("AdminComponent", AdminComponent);
        }
    }
});

System.register(['@angular/core'], function(exports_1, context_1) {
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
    var core_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent() {
                    this.register = false;
                }
                AppComponent.prototype.onRegister = function () { this.register = true; };
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        templateUrl: '../resources/views/app.component.blade.php',
                        styleUrls: ['css/app.component.css']
                    }), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});

System.register(['@angular/router', "./admineditname.detail.component", "./adminhome.component", "./adminaddemp.component", "./adminemplist.component", "./adminaddsuccess.component", "./adminempdetail.component"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var router_1, admineditname_detail_component_1, adminhome_component_1, adminaddemp_component_1, adminemplist_component_1, adminaddsuccess_component_1, adminempdetail_component_1;
    var routes, APP_ROUTER_PROVIDERS;
    return {
        setters:[
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (admineditname_detail_component_1_1) {
                admineditname_detail_component_1 = admineditname_detail_component_1_1;
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
            }],
        execute: function() {
            exports_1("routes", routes = [
                {
                    path: '/php_project2/management/public/admin/home', name: 'Home', component: adminhome_component_1.AdminhomeComponent, useAsDefault: true
                },
                { path: '/php_project2/management/public/admin/addemp', name: 'Add', component: adminaddemp_component_1.AdminaddempComponent },
                { path: '/php_project2/management/public/admin/emplist', name: 'Emplist', component: adminemplist_component_1.AdminemplistComponent },
                {
                    path: '/php_project2/management/public/admin/addsuccess', name: 'Addsuccess', component: adminaddsuccess_component_1.AdminaddsuccessComponent
                }, {
                    path: '/php_project2/management/public/admin/empdetail', name: 'Empdetail', component: adminempdetail_component_1.AdminempdetailComponent,
                    children: [
                        { path: 'oldname', component: admineditname_detail_component_1.AdmineditnameDetailComponent, name: 'Oldname', useAsDefault: true },
                        { path: 'changename', component: admineditname_detail_component_1.AdmineditnameDetailComponent, name: 'Changename' }
                    ]
                }
            ]);
            exports_1("APP_ROUTER_PROVIDERS", APP_ROUTER_PROVIDERS = [
                router_1.provideRouter(routes)
            ]);
        }
    }
});

System.register(['@angular/core'], function(exports_1, context_1) {
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
    var core_1;
    var FooterComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            FooterComponent = (function () {
                function FooterComponent() {
                }
                FooterComponent = __decorate([
                    core_1.Component({
                        selector: 'footer',
                        templateUrl: '/php_project2/management/resources/views/footer.component.blade.php',
                        styleUrls: ['php_project2/management/public/css/footer.css']
                    }), 
                    __metadata('design:paramtypes', [])
                ], FooterComponent);
                return FooterComponent;
            }());
            exports_1("FooterComponent", FooterComponent);
        }
    }
});

System.register(['./footer.component', "@angular/platform-browser-dynamic/index"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var footer_component_1, index_1;
    return {
        setters:[
            function (footer_component_1_1) {
                footer_component_1 = footer_component_1_1;
            },
            function (index_1_1) {
                index_1 = index_1_1;
            }],
        execute: function() {
            index_1.bootstrap(footer_component_1.FooterComponent);
        }
    }
});

System.register(["@angular/platform-browser-dynamic/index", './header.component'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var index_1, header_component_1;
    return {
        setters:[
            function (index_1_1) {
                index_1 = index_1_1;
            },
            function (header_component_1_1) {
                header_component_1 = header_component_1_1;
            }],
        execute: function() {
            index_1.bootstrap(header_component_1.HeaderComponent);
        }
    }
});

System.register(["@angular/platform-browser-dynamic/index", './app.component'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var index_1, app_component_1;
    return {
        setters:[
            function (index_1_1) {
                index_1 = index_1_1;
            },
            function (app_component_1_1) {
                app_component_1 = app_component_1_1;
            }],
        execute: function() {
            index_1.bootstrap(app_component_1.AppComponent);
        }
    }
});

System.register(["@angular/platform-browser-dynamic", './admin.component', '@angular/common', '@angular/http', "./app.routes"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var platform_browser_dynamic_1, admin_component_1, common_1, http_1, app_routes_1;
    return {
        setters:[
            function (platform_browser_dynamic_1_1) {
                platform_browser_dynamic_1 = platform_browser_dynamic_1_1;
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
            function (app_routes_1_1) {
                app_routes_1 = app_routes_1_1;
            }],
        execute: function() {
            platform_browser_dynamic_1.bootstrap(admin_component_1.AdminComponent, [http_1.HTTP_PROVIDERS, app_routes_1.APP_ROUTER_PROVIDERS, common_1.FORM_PROVIDERS]);
        }
    }
});
