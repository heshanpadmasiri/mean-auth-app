import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { FlashMessagesService} from 'angular2-flash-messages';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username:String;
  password:String;

  constructor(
    private auth:AuthService,
    private router:Router,
    private flashMessagesService:FlashMessagesService
  ) { }

  ngOnInit() {
  }

  onLoginSubmit(){
    const user = {
      username:this.username,
      password:this.password
    }

    this.auth.authenticateUser(user).subscribe(data => {
      console.log(data);
    });
  }

}
