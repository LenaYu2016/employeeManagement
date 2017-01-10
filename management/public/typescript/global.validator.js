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
