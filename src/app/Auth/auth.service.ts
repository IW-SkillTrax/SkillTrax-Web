import { AdalService } from 'adal-angular4'
//import { HttpClient, HttpHandler } from '@angular/common/http';
import { Injectable } from '@angular/core';
//import { Observable } from 'rxjs/Observable';
import { UserService } from '../Shared/services/user.service';
import { resolve} from 'q';



@Injectable()
export class AuthService {

private _user=null;

private _config = {
  tenant: 'e478832f-c23e-4bc5-9a43-acb211fc2ed4', //azure AD Directory ID
  clientId: 'e1f25731-934f-49c6-8f26-0b6da7164c3a',//web app id registered at azure 
  redirectUri: 'http://localhost:4200/auth-callback',
  postLogoutRedirectUri: 'http://localhost:4200'
}


constructor(private _adal:AdalService, private _userService: UserService) {
   this._adal.init(this. _config);
}

public isLoggedIn():boolean {
   return this._adal.userInfo.authenticated;
}

public signout():void {
   this._adal.logOut();
}

public startAuthentication():any {
   this._adal.login();
}

public getName():string {
   return this._user.profile.name;
}

public completeAuthentication():any {
  return new Promise ((resolve) => {
    
   this._adal.handleWindowCallback();
   this._adal.getUser().subscribe(user=> {
   this._user = user;
   
   this._userService.setCurrentUser(user.profile.unique_name)
   resolve();
  })
});

}

}