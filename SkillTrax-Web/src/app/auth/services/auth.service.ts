import { HttpClient, HttpHandler } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, observable } from 'rxjs';
import { AdalService } from 'adal-angular4'
import { promise } from 'protractor';
import { resolve, reject } from 'q';
import { UserService } from '../../employees/services/user.service';
import { callbackify } from 'util';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private user=null;
  private config = {
    tenant: 'c4a2137e-4842-4ed8-ac8b-ec94ed409a4d', //azure AD Directory ID
    clientId: 'e66ed2d7-d1b7-4031-9d2d-b3772bb84b04',//web app id registered at azure 
    redirectUri: 'http://localhost:4200/auth-callback',
    postLogoutRedirectUri: 'http://localhost:4200'
  }

  constructor(private adal:AdalService, private userService:UserService) { 
    this.adal.init(this.config)
  }

  public isLoggedIn():boolean {
    console.log(this.adal.userInfo)
    return this.adal.userInfo.authenticated;

 }
 
 public signout():void {
    this.adal.logOut();
 }

  
 
 public startAuthentication():any {
    this.adal.login();
 }

 public getUser() {
   return this.user
 }

 
 public completeAuthentication():any {
   return new Promise ((resolve, reject) => {
    this.adal.handleWindowCallback();
    this.adal.getUser().subscribe(user=> {
    this.user = user;
    console.log(this.adal.userInfo);
    var expireIn=new Date(user.profile.exp).getTime();
    console.log(expireIn);
    this.userService.setCurrentUser(user.profile.unique_name)
    resolve();
   })
 });
 
 }
}
