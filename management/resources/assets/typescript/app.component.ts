
import {Component} from 'angular2/core';
import {EmployeeService} from "./employee.service";
import {ROUTER_DIRECTIVES,RouteConfig} from 'angular2/router';
import {OnInit} from "angular2/core";


@Component({
    selector: 'my-app',
    templateUrl: '../resources/views/app.component.blade.php',
    styleUrls:['css/app.component.css'],
    directives:[ROUTER_DIRECTIVES]
})

export class AppComponent{

    register = false;
    constructor(private empService:EmployeeService){

    }


}