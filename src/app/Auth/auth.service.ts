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
  tenant: 'c4a2137e-4842-4ed8-ac8b-ec94ed409a4d', //azure AD Directory ID
  clientId: 'e66ed2d7-d1b7-4031-9d2d-b3772bb84b04',//web app id registered at azure 
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