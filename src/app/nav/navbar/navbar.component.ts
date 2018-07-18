import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../auth/services/auth.service';
import { UserService } from '../../employees/services/user.service';
import { AdalService } from 'adal-angular4';


@Component({
  selector: 'nav-bar',
  templateUrl: './navbar.component.html',
  styles: [`
    .fill-space {flex: 1 1 auto;}
  `]
})
export class NavbarComponent implements OnInit {

  //name? = this.authService.user

  constructor(private adal:AdalService, private userService:UserService, private authService:AuthService) { }

  ngOnInit() {
  }

  signout():void {
    this.authService.signout(); 
  }

  navToProfile() {
    console.log(this.userService.getCurrentUser())
  }

}
