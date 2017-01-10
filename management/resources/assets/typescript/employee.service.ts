import {Injectable} from "angular2/core";
import { Http, Response } from 'angular2/http';
import 'rxjs/add/operator/map';
import {Headers} from "angular2/http";
import {RequestOptions} from "angular2/http";
@Injectable()
export class EmployeeService{
    constructor(private http:Http){}
  addemp(info){
      let token = document.querySelector('meta[property="csrf-token"]')['content'];
      let headers = new Headers({ 'Content-Type': 'application/json', 'X-CSRF-TOKEN':token});
      let options = new RequestOptions({ headers: headers });
      return  this.http.post('http://localhost/php_project2/management/public/add', info,options)
          .map(res => res.json())
   //return this.http.post();
  }
    getall(){
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.get('http://localhost/php_project2/management/public/getall',{headers:headers})
            .map((res:Response) => res.json());
    }
    getById(id){
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');

        return this.http.get('http://localhost/php_project2/management/public/getbyid/'+id,{headers:headers})
            .map((res:Response) => res.json());
    }
    editName(id,name){
        let token = document.querySelector('meta[property="csrf-token"]')['content'];
        let headers = new Headers({ 'Content-Type': 'application/json', 'X-CSRF-TOKEN':token});
        let options = new RequestOptions({ headers: headers });
        let info=JSON.stringify({'id':id,'name':name});
        return  this.http.post('http://localhost/php_project2/management/public/editname', info,options)
            .map(res => res.json())
    }
    editPosition(id,position){
        let token = document.querySelector('meta[property="csrf-token"]')['content'];
        let headers = new Headers({ 'Content-Type': 'application/json', 'X-CSRF-TOKEN':token});
        let options = new RequestOptions({ headers: headers });
        let info=JSON.stringify({'id':id,'position':position});
        return  this.http.post('http://localhost/php_project2/management/public/editposition', info,options)
            .map(res => res.json())
    }
    editDepartment(id,department){
    let token = document.querySelector('meta[property="csrf-token"]')['content'];
    let headers = new Headers({ 'Content-Type': 'application/json', 'X-CSRF-TOKEN':token});
    let options = new RequestOptions({ headers: headers });
    let info=JSON.stringify({'id':id,'department':department});
    return  this.http.post('http://localhost/php_project2/management/public/editdepartment', info,options)
        .map(res => res.json())
}
    editRole(id,role){
        let token = document.querySelector('meta[property="csrf-token"]')['content'];
        let headers = new Headers({ 'Content-Type': 'application/json', 'X-CSRF-TOKEN':token});
        let options = new RequestOptions({ headers: headers });
        let info=JSON.stringify({'id':id,'role':role});
        return  this.http.post('http://localhost/php_project2/management/public/editrole', info,options)
            .map(res => res.json());
    }
    deleteById(id){

        let headers = new Headers({ 'Content-Type': 'application/json'});


        return  this.http.get('http://localhost/php_project2/management/public/deletebyid/'+id,{headers: headers })
            .map(res => res.json())
    }
    sendEmail(subject,message,id){
        let token = document.querySelector('meta[property="csrf-token"]')['content'];
        let headers = new Headers({ 'Content-Type': 'application/json', 'X-CSRF-TOKEN':token});
        let options = new RequestOptions({ headers: headers });
        let info=JSON.stringify({'subject':subject,'message':message,'id':id});
        return  this.http.post('http://localhost/php_project2/management/public/send', info,options)
            .map(res => res.json());
    }
    sendAll(subject,message){
        let token = document.querySelector('meta[property="csrf-token"]')['content'];
        let headers = new Headers({ 'Content-Type': 'application/json', 'X-CSRF-TOKEN':token});
        let options = new RequestOptions({ headers: headers });
        let info=JSON.stringify({'subject':subject,'message':message});
        return  this.http.post('http://localhost/php_project2/management/public/sendAll', info,options)
            .map(res => res.json());
    }
}