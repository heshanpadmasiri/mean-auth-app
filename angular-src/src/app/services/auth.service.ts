import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class AuthService {
  user:User;
  authToken:any;

  constructor(private http:HttpClient) { }

  registerUser(user):Observable<RegisterResponse>{
    let headers = new HttpHeaders().set('Content-Type','application/json');
    return this.http.post('http://localhost:3000/users/register',user,{headers:headers}) as Observable<RegisterResponse>;
      
  }
}

interface User{
  name:String,
  username:String,
  password:String,
  email:String
}

interface RegisterResponse{
  success:boolean,
  msg:String
}