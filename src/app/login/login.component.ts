import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
email:string=""
password:string=""

constructor (private toaster:ToastrService){}

login(){
  //admin login 
  if(this.email && this.password){
    this.toaster.success("proceed to api call")
  }
  else{
    this.toaster.warning("please fill the input fields")
  }
}
}
