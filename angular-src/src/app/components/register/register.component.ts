import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  name:String;
  userName:String;
  password:String;
  email:String;

  constructor() { }

  ngOnInit() {
  }

  onRegisterSubmit(){
    const user = {
        name:this.name,
        email:this.email,
        username:this.userName,
        password:this.password
    };
  }

}
