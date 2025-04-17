import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ApicallsService } from '../apicalls.service';

@Component({
  selector: 'app-signincomponent',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './signincomponent.component.html',
  styleUrl: './signincomponent.component.css'
})
export class SignincomponentComponent {
  user: any
  signinclick: boolean = false
  reset: boolean = false
  uname: any
  uid: any
  upw: any;
  match: any;
  msg: any;
  userinfo:string | undefined;
  constructor(private svc:ApicallsService) {
    this.user = [
      {
        myname: "user1",
        userid: "1",
        pw: "123"
      },
      {
        myname: "user2",
        userid: "2",
        pw: "123"
      },
      {
        myname: "user3",
        userid: "3",
        pw: "123"
      }]
  }

  onsubmit() {
    this.signinclick = true
    debugger;
    this.match = this.user.find((u: { userid: any; pw: any; }) => u.userid == this.uid && u.pw == this.upw)
    console.log("match", this.match)
    if (this.match.length!=0) {
      console.log("signinmatch", this.match)
      this.msg = this.uid + " has successfully loggedin"
      this.svc.getlist(12).subscribe((res):any=>{
        console.log("res from svc",res)
       this.userinfo=JSON.stringify(res)
       console.log(this.userinfo)
       })
    }
    else {

      this.msg = "no matching info found-please signup"
    }
  }
  resetdata() {
    this.reset = true
    this.uid = ""
    this.upw = ""
    this.uname = ""
    this.msg = ""
  }




}
