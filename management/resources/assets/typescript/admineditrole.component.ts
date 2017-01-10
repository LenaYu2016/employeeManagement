import {Component,OnInit} from 'angular2/core';
import {Input} from "angular2/core";
import {employee} from "./employee";
import {RouteParams} from "angular2/router";
import {EmployeeService} from "./employee.service";


@Component({
    selector:'role',
    template:`<div *ngIf="!flag"><p>Role: {{passedemp.role}} <a class="distance" (click)="onClick()"><i class="fa fa-pencil fa-lg" aria-hidden="true"></i></a></p></div>
   <div *ngIf="flag">
   <label for="admin" (click)="change(admin.value)">Admin <input type="radio" class="radio" name="role" #admin [checked]="passedemp.role=='admin'" value="admin"/></label>
    <label for="role" (click)="change(emp.value)">Employee <input #emp type="radio" class="radio" name="role"  [checked]="passedemp.role=='employee'" value="employee"/></label>
    <button class="btn btn-primary" (click)="confirm(passedemp.role)"><i class="fa fa-check" aria-hidden="true"></i></button>
    <button class="btn btn-default" (click)="onClick()"><i class="fa fa-times" aria-hidden="true"></i></button></div>
    `,
    styles:['.distance{margin-left:20px;} a,button{cursor:pointer;}'],
    directives: []
})
export class AdmineditroleComponent{
    @Input() passedemp:employee;
    flag=false;
    constructor(private routeparam:RouteParams,private empService:EmployeeService){

    }

    ngOnInit(){

        console.log(this.passedemp);

    }
    onClick(){
        this.flag=!this.flag;

    }
    change(value){
        this.passedemp.role=value;
    }
    confirm(value){
        console.log(this.passedemp.id);
        this.empService.editRole(this.passedemp.id,value).subscribe(
            info => {console.log(info['id']);},
            error =>  {console.log(error)},
            () => console.log("Job Done Post !"));
        this.onClick();
    }
}