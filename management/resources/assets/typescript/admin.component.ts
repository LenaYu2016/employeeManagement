import {Component,OnInit} from 'angular2/core';
import {HeaderComponent} from './header.component';
import {Observable} from 'rxjs/Rx';
import { Http, Response } from 'angular2/http';
import {ROUTER_DIRECTIVES,RouteConfig} from 'angular2/router';
import {AdminhomeComponent} from './adminhome.component';
import {AdminaddempComponent} from './adminaddemp.component';
import {AdminemplistComponent} from './adminemplist.component';
import {AdminaddsuccessComponent} from "./adminaddsuccess.component";
import {AdminempdetailComponent} from "./adminempdetail.component";
import {AppComponent} from "./app.component";
import {EmployeeService} from "./employee.service";
import {Validators,FormBuilder} from "angular2/common";
import {GlobalValidator} from "./global.validator";
import {ControlGroup} from "angular2/common";
import {employee} from "./employee";
@Component({
    selector: 'admin',
    templateUrl: '/php_project2/management/resources/views/admin.component.blade.php',
    styleUrls:['php_project2/management/public/css/admin.css'],
    directives:[ROUTER_DIRECTIVES],
    providers:[EmployeeService]
})
@RouteConfig(
[

    {path:'/php_project2/management/public/admin/home',name:'Home',component:AdminhomeComponent,useAsDefault:true},
    {path:'/php_project2/management/public/admin/addemp',name:'Add',component:AdminaddempComponent},
    {path:'/php_project2/management/public/admin/emplist',name:'Emplist',component:AdminemplistComponent},
    {path:'/php_project2/management/public/admin/addsuccess',name:'Addsuccess',component:AdminaddsuccessComponent},
    {path:'/php_project2/management/public/admin/empdetail/:empid',name:'Empdetail',component:AdminempdetailComponent},
]
      )

export class AdminComponent implements OnInit  {
    errorMessage=null;
    heroes=null;
    message:string;
    authenticated=true;
    userinfo={username:'',password:''};
    employees:employee[]=[];
    adminlogin=false;
    emplogin=false;
    clicked=false;
   showform=true;
    constructor (
                 private http: Http,private empService:EmployeeService,private formbuilder:FormBuilder) {}


    ngOnInit(){

    }
    check(){

        this.empService.getall().subscribe(
            info => {console.log(info);
                for(var i=0;i<info.length;i++){
                    var emp=info[i];
                    var newemp=new employee(emp.id,emp.Name,emp.Position,emp.Department,emp.Gender,emp.Role,emp.Email,
                        emp.Password, emp.Image,emp.Phone,emp.Address);
                    this.employees.push(newemp);

                }
                console.log(this.userinfo.username);
                console.log(this.userinfo.password);

                for(var i=0;i<this.employees.length;i++) {
                    console.log(this.employees[i].name);
                    console.log(this.employees[i].password);
                    if (this.employees[i].role=='admin'&& this.userinfo.username == this.employees[i].name && this.userinfo.password == this.employees[i].password) {
                        localStorage.setItem("user", this.userinfo.username);
                        this.adminlogin=true;
                        this.showform=false;

                    }else if(this.employees[i].role=='employee'&& this.userinfo.username == this.employees[i].name && this.userinfo.password == this.employees[i].password){
                        localStorage.setItem("user", this.userinfo.username);
                        this.emplogin=true;
                        this.showform=false;
                    }
                }
            },
            error=>{console.log(error);}
        );


    }
    login(){
        this.clicked=true;
        console.log(this.authenticated);
        this.check();
        if(this.adminlogin==false && this.emplogin==false){
            this.authenticated = false;
        }
     console.log(this.showform);

    }
    logout(){
        localStorage.removeItem("user");
        this.emplogin=false;
        this.adminlogin==false;
        this.authenticated = true;
    }
}