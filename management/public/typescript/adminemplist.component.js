System.register(['angular2/core', "./employee.service", "./employee", "angular2/router", 'ng2-bs3-modal/ng2-bs3-modal'], function(exports_1, context_1) {
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
    var core_1, employee_service_1, employee_1, router_1, ng2_bs3_modal_1, core_2;
    var AdminemplistComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
                core_2 = core_1_1;
            },
            function (employee_service_1_1) {
                employee_service_1 = employee_service_1_1;
            },
            function (employee_1_1) {
                employee_1 = employee_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (ng2_bs3_modal_1_1) {
                ng2_bs3_modal_1 = ng2_bs3_modal_1_1;
            }],
        execute: function() {
            AdminemplistComponent = (function () {
                function AdminemplistComponent(empService) {
                    this.empService = empService;
                    this.emplist = [];
                }
                AdminemplistComponent.prototype.ngOnInit = function () {
                    this.getAll();
                };
                AdminemplistComponent.prototype.getAll = function () {
                    var _this = this;
                    this.empService.getall().subscribe(function (emps) {
                        for (var i = 0; i < emps.length; i++) {
                            var emp = emps[i];
                            var newemp = new employee_1.employee(emp.id, emp.Name, emp.Position, emp.Department, emp.Gender, emp.Role, emp.Email, emp.Password, emp.Image, emp.Phone, emp.Address);
                            console.log(newemp);
                            _this.emplist.push(newemp);
                        }
                    });
                };
                AdminemplistComponent.prototype.deleteById = function (empid) {
                    this.emplist = this.emplist.filter(function (i) {
                        return i.id != empid;
                    });
                    this.empService.deleteById(empid).subscribe(function (info) { console.log(info['message']); }, function (error) { console.log(error); }, function () { return console.log("Job Done Post !"); });
                };
                AdminemplistComponent.prototype.sendEmail = function (name, id) {
                    this.name = name;
                    this.empid = id;
                    this.modal.open('lg');
                };
                AdminemplistComponent.prototype.send = function (subject, message) {
                    console.log(subject + "  " + message);
                    this.empService.sendEmail(subject, message, this.empid).subscribe(function (info) { console.log(info['emp']); }, function (error) { console.log(error); }, function () { return console.log("Job Done Post !"); });
                    this.modal.close();
                };
                AdminemplistComponent.prototype.sendAll = function () {
                    this.modalAll.open('lg');
                };
                AdminemplistComponent.prototype.allSend = function (subject, message) {
                    console.log(subject + "  " + message);
                    this.empService.sendAll(subject, message).subscribe(function (info) { console.log(info); }, function (error) { console.log(error); }, function () { return console.log("Job Done Post !"); });
                    this.modalAll.close();
                };
                __decorate([
                    core_2.ViewChild('modal'), 
                    __metadata('design:type', ng2_bs3_modal_1.ModalComponent)
                ], AdminemplistComponent.prototype, "modal", void 0);
                __decorate([
                    core_2.ViewChild('modalall'), 
                    __metadata('design:type', ng2_bs3_modal_1.ModalComponent)
                ], AdminemplistComponent.prototype, "modalAll", void 0);
                AdminemplistComponent = __decorate([
                    core_1.Component({
                        templateUrl: '/php_project2/management/resources/views/adminemplist.component.blade.php',
                        styles: ['a:hover{cursor:pointer;}'],
                        directives: [router_1.ROUTER_DIRECTIVES, ng2_bs3_modal_1.MODAL_DIRECTIVES],
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
