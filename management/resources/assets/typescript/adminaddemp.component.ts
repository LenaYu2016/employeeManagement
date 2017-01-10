import {Component,OnInit} from 'angular2/core';
import {employee} from './employee';
import {ControlGroup,FormBuilder,Validators} from 'angular2/common';
import {Validator} from "angular2/common";
import  {GlobalValidator} from './global.validator'
import {AbstractControl} from "angular2/common";
import {FORM_DIRECTIVES} from "angular2/common";
import {RADIO_GROUP_DIRECTIVES} from "ng2-radio-group/index";
import {Headers} from "angular2/http";
import {RequestOptions} from "angular2/http";
import { Http, Response } from 'angular2/http';
import 'rxjs/add/operator/map';
import {EmployeeService} from './employee.service';
import {Router} from "angular2/router";
@Component({

    templateUrl: '/php_project2/management/resources/views/adminaddemp.component.blade.php',
   styles:['.has-error{border:1px solid red;}'],
    directives: [FORM_DIRECTIVES,RADIO_GROUP_DIRECTIVES],
    providers:[EmployeeService]
})
export class AdminaddempComponent implements OnInit{

    emp:employee;
    myform:ControlGroup;
    email: AbstractControl;
    name:AbstractControl;
    position:AbstractControl;
    department:AbstractControl;
    gender:AbstractControl;
   role:AbstractControl;
    errorMessage:string;
    usedemail=false;
    setemail=false;
    constructor(private formbuilder:FormBuilder,private http:Http,
                private empService:EmployeeService,private router:Router){

    }
    ngOnInit():any{
        this.myform=this.formbuilder.group({
            'name':['',Validators.required],
            'position':['',Validators.required],
            'department':['',Validators.required],
            'gender':['',Validators.required],
            'email':['',Validators.compose([Validators.required,Validators.minLength(5),
                GlobalValidator.mailFormat])],
            'role':['',Validators.required]
        });
        this.email = this.myform.controls['email'];
        this.name = this.myform.controls['name'];
        this.gender = this.myform.controls['gender'];
        this.department = this.myform.controls['department'];
        this.position = this.myform.controls['position'];
        this.role = this.myform.controls['role'];
    }
    usedEmail(value){
        this.usedemail=false;;
        this.empService.getall().subscribe(
            emps=> {
                console.log(emps);
                for(var i=0;i<emps.length;i++){
                    console.log(emps[i].Email);

                    if (emps[i].Email ==value) {
                      this.usedemail=true;

                    }
                }

            },
            error=> {
                console.log(error);
            },
        ()=>{
            this.setemail=true;
        }
        );

    }
setEmail(){
    this.setemail=false;
}
    onSubmit(value){
  this.addemp(value);
this.router.navigate(['Addsuccess']);
    }
addemp(value){

   var password= Math.random().toString(36).substring(7);
    let emp:employee={'id':null,'name':value.name,'position':value.position,'department':value.department,'gender':value.gender,
        'role':value.role,'email':value.email,'password':password,'image':'','phone':'','address':''};
    console.log(password);

  var info= JSON.stringify(emp);
    console.log(info);

   this.empService.addemp(info)
        .subscribe(
            heroes => {console.log(heroes['message']);},
            error =>  {this.errorMessage = <any>error},
            () => console.log("Job Done Post !"));

}
}