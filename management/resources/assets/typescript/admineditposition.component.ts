import {Component,OnInit} from 'angular2/core';
import {Input} from "angular2/core";
import {employee} from "./employee";
import {EmployeeService} from "./employee.service";
import {RouteParams} from "angular2/router";

@Component({
    selector:'position',
    template:`<div *ngIf="!flag"><p>Position: {{passedemp.position}} <a class="distance" (click)="onClick()"><i class="fa fa-pencil fa-lg" aria-hidden="true"></i></a></p></div>
<div *ngIf="flag"> <input type="text" #userinput [(ngModel)]="passedemp.position"/>
<button class="btn btn-primary" (click)="confirm(userinput.value)"><i class="fa fa-check" aria-hidden="true"></i></button>
<button class="btn btn-default" (click)="onClick()"><i class="fa fa-times" aria-hidden="true"></i></button></div>
    `,
    styles:['.distance{margin-left:20px;} a,button{cursor:pointer;}'],
    directives: []
})
export class AdmineditpositionComponent{
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
    confirm(value){
        console.log(this.passedemp.id);
        this.empService.editPosition(this.passedemp.id,value).subscribe(
            info => {console.log(info['id']);},
            error =>  {console.log(error)},
            () => console.log("Job Done Post !"));
        this.onClick();
    }
}