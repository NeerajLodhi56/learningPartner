import { Component, OnInit } from '@angular/core';
import { UsertableService } from '../Services/usertable.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-inlinecrud',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './inlinecrud.component.html',
  styleUrl: './inlinecrud.component.css'
})

export class InlinecrudComponent implements OnInit{
constructor(private _userService:UsertableService){}
isEdit:boolean=false;
userdata:any[]=[];
oldobj!:Department;

ngOnInit(){
  this._userService.getAllUser().subscribe((res)=>{
    this.userdata=res.slice(0,10)
  })
  console.log(this.userdata);
}
editDetails(item:Department){
item.isEdit=true;
const strobj=JSON.stringify(item);
const newobj = JSON.parse(strobj);
this.oldobj=newobj;
}
DeleteRow(){

}
saveDetails(item:Department){

}
cancel(item:Department){
item.isEdit=false;
item.id= this.oldobj.id;
item.name= this.oldobj.name;
item.email= this.oldobj.email;
}
}

export interface Department{
  id:number;
  name:string;
  email:string;
  isEdit?:boolean;
}
