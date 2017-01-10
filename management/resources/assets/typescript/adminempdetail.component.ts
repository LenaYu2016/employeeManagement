import {Component,OnInit} from 'angular2/core';
import {RouteParams} from "angular2/router";
import {employee} from "./employee";
import {AdmineditnameComponent} from './admineditname.component';
import {AdmineditdepartmentComponent} from "./admineditdepartment.component";
import {AdmineditroleComponent} from "./admineditrole.component";
import {AdmineditpositionComponent} from "./admineditposition.component";
import {EmployeeService} from "./employee.service";
import {RouteConfig} from "angular2/router";


@Component({
    templateUrl:'/php_project2/management/resources/views/adminempdetail.component.blade.php',
    styles:[''],
    directives: [AdmineditnameComponent,AdmineditdepartmentComponent,AdmineditroleComponent,AdmineditpositionComponent],
    providers:[EmployeeService]
})

export class AdminempdetailComponent implements OnInit{
 passedemp:employee;
constructor(private routeparams:RouteParams,private empService:EmployeeService){

}
    ngOnInit(){
        console.log(this.routeparams.get('empid'));
    this.getById(this.routeparams.get('empid'));
    }
    getById(id) {
        this.empService.getById(id).subscribe( info => {console.log(info);
                this.passedemp=new employee(info.id,info.Name,info.Position,info.Department,info.Gender,info.Role,info.Email,
                    '',info.Image,info.Phone,info.Address);

        },
            error =>  {console.log(error)},
            () => console.log("Job Done Post !"));

    }
}