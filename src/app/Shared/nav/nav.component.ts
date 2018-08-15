import { Component, OnInit } from '@angular/core';
import {Router, RouterLink} from '@angular/router';
import { UserService } from '../services/user.service';
import { AuthService } from '../../Auth/auth.service';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'nav-bar',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
  
})
export class NavComponent implements OnInit {

  constructor(private userService: UserService, private authservice: AuthService) { }
  isCollapsed:boolean = true;
  User: any;

 
  ngOnInit() {
    this.getUser()
  }
  async  getUser() {
    this.User = await this.userService.getCurrentUser();
  }
  
  logout(){
    this.authservice.signout();
  }

}
