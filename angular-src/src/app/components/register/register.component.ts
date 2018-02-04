import { Component, OnInit } from '@angular/core';
import { ValidateService} from '../../services/validate.service';

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

  constructor(private validateService:ValidateService) { }

  ngOnInit() {
  }

  onRegisterSubmit(){
    const user = {
        name:this.name,
        email:this.email,
        username:this.userName,
        password:this.password
    };

    // required fields
    if(!this.validateService.validateRegister(user)){
      console.log('fill all fields');
      return false;
    }

    if(!this.validateService.validateEmail(user.email)){
      console.log('invalid email');
      return false;
    }
  }

}
