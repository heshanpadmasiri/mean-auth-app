import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ValidateService} from '../../services/validate.service';
import { AuthService } from '../../services/auth.service';
import { FlashMessagesService } from 'angular2-flash-messages';

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

  constructor(
    private validateService:ValidateService, 
    private flashMessagesServie:FlashMessagesService,
    private auth:AuthService,
    private router:Router
  ) { }

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
      this.flashMessagesServie.show('Fill all fields', {cssClass:'alert-danger', timeOut:3000});
      return false;
    }

    if(!this.validateService.validateEmail(user.email)){
      this.flashMessagesServie.show('Invalid email address', {cssClass:'alert-danger', timeOut:3000});
      return false;
    }

    this.auth.registerUser(user).subscribe(data =>{      
      if(data.success){
        this.flashMessagesServie.show("Successfully registered", {cssClass:'alert-success', timeOut:3000});
        this.router.navigate(['/login']);
      } else {
        this.flashMessagesServie.show("Something went wrong", {cssClass:'alert-danger', timeOut:3000});
        this.router.navigate(['/register']);
      }
    });
  }

}
