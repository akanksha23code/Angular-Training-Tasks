import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-signincomponent',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './signincomponent.component.html',
  styleUrl: './signincomponent.component.css'
})
export class SignincomponentComponent{
 
  user:any
  signinclick:boolean=false
  reset:boolean=false
  uname:any
  uid:any
  upw:any;
  match:any;
  msg:any;
  constructor() {
    this.user=[
    {
      myname :"user1",
      userid:"1",
      pw:"123"
    },
    {
      myname :"user2",
      userid:"2",
      pw:"123"
    },
    {
      myname :"user3",
      userid:"3",
      pw:"123"
    }]
  }
  
  onsubmit() {
    this.signinclick=true
       debugger;
       this.match=this.user.map((u: { userid: any; pw: any; })=>u.userid==this.uid && u.pw==this.upw)
     if(this.match==true){
     
      this.msg=this.uid+" has successfully loggedin"
     }
     else{

      this.msg="no matching info found-please signup"
     }
  }
  resetdata(){
    this.reset=true
    this.uid=""
    this.upw=""
    this.uname=""
    this.msg=""
  }
    
  
  

}

