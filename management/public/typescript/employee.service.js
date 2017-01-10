System.register(["angular2/core", 'angular2/http', 'rxjs/add/operator/map'], function(exports_1, context_1) {
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
                EmployeeService.prototype.getById = function (id) {
                    var headers = new http_2.Headers();
                    headers.append('Content-Type', 'application/json');
                    return this.http.get('http://localhost/php_project2/management/public/getbyid/' + id, { headers: headers })
                        .map(function (res) { return res.json(); });
                };
                EmployeeService.prototype.editName = function (id, name) {
                    var token = document.querySelector('meta[property="csrf-token"]')['content'];
                    var headers = new http_2.Headers({ 'Content-Type': 'application/json', 'X-CSRF-TOKEN': token });
                    var options = new http_3.RequestOptions({ headers: headers });
                    var info = JSON.stringify({ 'id': id, 'name': name });
                    return this.http.post('http://localhost/php_project2/management/public/editname', info, options)
                        .map(function (res) { return res.json(); });
                };
                EmployeeService.prototype.editPosition = function (id, position) {
                    var token = document.querySelector('meta[property="csrf-token"]')['content'];
                    var headers = new http_2.Headers({ 'Content-Type': 'application/json', 'X-CSRF-TOKEN': token });
                    var options = new http_3.RequestOptions({ headers: headers });
                    var info = JSON.stringify({ 'id': id, 'position': position });
                    return this.http.post('http://localhost/php_project2/management/public/editposition', info, options)
                        .map(function (res) { return res.json(); });
                };
                EmployeeService.prototype.editDepartment = function (id, department) {
                    var token = document.querySelector('meta[property="csrf-token"]')['content'];
                    var headers = new http_2.Headers({ 'Content-Type': 'application/json', 'X-CSRF-TOKEN': token });
                    var options = new http_3.RequestOptions({ headers: headers });
                    var info = JSON.stringify({ 'id': id, 'department': department });
                    return this.http.post('http://localhost/php_project2/management/public/editdepartment', info, options)
                        .map(function (res) { return res.json(); });
                };
                EmployeeService.prototype.editRole = function (id, role) {
                    var token = document.querySelector('meta[property="csrf-token"]')['content'];
                    var headers = new http_2.Headers({ 'Content-Type': 'application/json', 'X-CSRF-TOKEN': token });
                    var options = new http_3.RequestOptions({ headers: headers });
                    var info = JSON.stringify({ 'id': id, 'role': role });
                    return this.http.post('http://localhost/php_project2/management/public/editrole', info, options)
                        .map(function (res) { return res.json(); });
                };
                EmployeeService.prototype.deleteById = function (id) {
                    var headers = new http_2.Headers({ 'Content-Type': 'application/json' });
                    return this.http.get('http://localhost/php_project2/management/public/deletebyid/' + id, { headers: headers })
                        .map(function (res) { return res.json(); });
                };
                EmployeeService.prototype.sendEmail = function (subject, message, id) {
                    var token = document.querySelector('meta[property="csrf-token"]')['content'];
                    var headers = new http_2.Headers({ 'Content-Type': 'application/json', 'X-CSRF-TOKEN': token });
                    var options = new http_3.RequestOptions({ headers: headers });
                    var info = JSON.stringify({ 'subject': subject, 'message': message, 'id': id });
                    return this.http.post('http://localhost/php_project2/management/public/send', info, options)
                        .map(function (res) { return res.json(); });
                };
                EmployeeService.prototype.sendAll = function (subject, message) {
                    var token = document.querySelector('meta[property="csrf-token"]')['content'];
                    var headers = new http_2.Headers({ 'Content-Type': 'application/json', 'X-CSRF-TOKEN': token });
                    var options = new http_3.RequestOptions({ headers: headers });
                    var info = JSON.stringify({ 'subject': subject, 'message': message });
                    return this.http.post('http://localhost/php_project2/management/public/sendAll', info, options)
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
