import { Component, OnInit } from '@angular/core';
import {Router, RouterLink} from '@angular/router';
import { UserService } from '../services/user.service';
@Component({
  selector: 'nav-bar',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
  
})
export class NavComponent implements OnInit {

  constructor(private userService: UserService) { }
  isCollapsed:boolean = true;
  User: any;
    ngOnInit() {
      this.User = this.userService.getCurrentUser();
      console.log("Nav User", this.User);
  }

}
