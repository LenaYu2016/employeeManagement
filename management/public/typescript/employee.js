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
