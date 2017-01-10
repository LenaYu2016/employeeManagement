export class  employee{

    name:string;
    position:string;
    department:string;
    gender:string;
    role:string;
    password:string;
    image:string;
    phone:string;
    address:string;
    email:string;
    id:number;
   constructor(id:number,name:string,position:string,department:string,gender:string,role:string,email:string,
               password:string, image:string,phone:string,address:string){
       this.id=id;
       this.name=name;
       this.position=position;
       this.department=department;
       this.gender=gender;
       this.role=role;
       this.email=email;
       this.password=password;
       this.image=image;
       this.phone=phone;
       this.address=address;
   }
}