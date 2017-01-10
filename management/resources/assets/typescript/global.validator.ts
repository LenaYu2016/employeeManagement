import { Control} from 'angular2/common';
import {EmployeeService} from './employee.service';
import {employee} from "./employee";
import { Http} from 'angular2/http';
export class GlobalValidator{





    static mailFormat(control: Control){

        var EMAIL_REGEXP =  /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

        if (!EMAIL_REGEXP.test(control.value)) {
            return {
                validateEmail: {
                    validformat: false
                }};
        }

        return null;
    }
    static usedEmail(empservive:EmployeeService) {
        return (control:Control) => {
            var list=[];

            const q = new Promise<IValidation>((resolve, reject) => {
                setTimeout(() => {
                    empservive.getall().subscribe(
                        emps=> {
                            console.log(emps);
                            for(var i=0;i<emps.length;i++){
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
                                    resolve({'usedEmail': true});
                                }
                            }
                            resolve(null);
                        },
                        error=> {
                            console.log(error);
                        }
                    );

                }, 500);
            });


            return q;


        }
    }

}
        interface IValidation {
            [key: string]: boolean;
        }
