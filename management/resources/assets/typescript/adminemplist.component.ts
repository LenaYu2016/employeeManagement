import {Component,OnInit} from 'angular2/core';
import {EmployeeService} from "./employee.service";
import {employee} from "./employee";
import {ROUTER_DIRECTIVES} from "angular2/router";
import { MODAL_DIRECTIVES,ModalComponent } from 'ng2-bs3-modal/ng2-bs3-modal';
import {ViewChild} from "angular2/core";




@Component({

    templateUrl: '/php_project2/management/resources/views/adminemplist.component.blade.php',
    styles:['a:hover{cursor:pointer;}'],
    directives:[ROUTER_DIRECTIVES,MODAL_DIRECTIVES],
    providers:[EmployeeService]
})
export class AdminemplistComponent implements OnInit{
    emplist:employee[]=[];
@ViewChild('modal') modal:ModalComponent;
    @ViewChild('modalall') modalAll:ModalComponent;
    name:string;
    empid:string;
    constructor(private empService:EmployeeService){}

    ngOnInit():any{
     this.getAll();
    }
    getAll(){
        this.empService.getall().subscribe(emps=>{
            for(var i=0;i<emps.length;i++){
                var emp=emps[i];
                var newemp=new employee(emp.id,emp.Name,emp.Position,emp.Department,emp.Gender,emp.Role,emp.Email,
                    emp.Password, emp.Image,emp.Phone,emp.Address);
                console.log(newemp);
                this.emplist.push(newemp);
            }
        });
    }
    deleteById(empid){
        this.emplist=this.emplist.filter(function(i) {
            return i.id!=empid;
        });
        this.empService.deleteById(empid).subscribe(
            info => {console.log(info['message']);},
            error =>  {console.log(error)},
            () => console.log("Job Done Post !"));

}
    sendEmail(name,id){
      this.name=name;
        this.empid=id;
      this.modal.open('lg');

    }
    send(subject,message){
        console.log(subject+"  "+message);
        this.empService.sendEmail(subject,message,this.empid).subscribe(
            info => {console.log(info['emp']);},
            error =>  {console.log(error)},
            () => console.log("Job Done Post !")
        );
        this.modal.close();
    }
    sendAll(){
       this.modalAll.open('lg');
    }
    allSend(subject,message){
        console.log(subject+"  "+message);
        this.empService.sendAll(subject,message).subscribe(
            info => {console.log(info);},
            error =>  {console.log(error)},
            () => console.log("Job Done Post !")
        );
        this.modalAll.close();
    }
}
