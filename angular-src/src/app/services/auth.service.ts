import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import decode from 'jwt-decode';

@Injectable()
export class AuthService {
  user:any;
  authToken:any;

  constructor(private http:HttpClient) { }

  public getToken(): string {
    return localStorage.getItem('id_token');
  }
  public isAuthenticated(): boolean {
    // get the token
    const token = this.getToken();
    // return a boolean reflecting 
    // whether or not the token is expired
    return token != undefined;
  }

  registerUser(user):Observable<RegisterResponse>{
    let headers = new HttpHeaders().set('Content-Type','application/json');
    return this.http.post('http://localhost:3000/users/register',user,{headers:headers}) as Observable<RegisterResponse>;      
  }

  authenticateUser(user):Observable<AuthenticateResponse>{
    let headers = new HttpHeaders().set('Content-Type','application/json');
    return this.http.post('http://localhost:3000/users/authenticate',user,{headers:headers}) as Observable<AuthenticateResponse>;      
  }

  storeUserData(token,user){
    localStorage.setItem('id_token',token);
    localStorage.setItem('user', JSON.stringify(user));
    this.authToken = token;
    this.user = user;
  }

  logout(){
    this.authToken = null;
    this.user = null;
    localStorage.clear();
  }
}



interface RegisterResponse{
  success:boolean,
  msg:String
}

interface AuthenticateResponse{
  success:boolean,
  token:String,
  user:any,
  msg:string
}