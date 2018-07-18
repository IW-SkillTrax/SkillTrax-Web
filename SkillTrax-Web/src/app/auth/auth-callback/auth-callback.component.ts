import { Component, OnInit, NgZone } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-auth-callback',
  template: `<p>Please wait while we redirect you back</p>`,
  styleUrls: ['./auth-callback.component.css']
})
export class AuthCallbackComponent implements OnInit {

  constructor(private router:Router, private authService:AuthService, private zone:NgZone, private activatedRoute:ActivatedRoute) { }

  ngOnInit() {
    this.authService.completeAuthentication()
    .then(() => {
      this.router.navigate(['/employees'])
    }).catch((err) => {
      console.log(err)
    });; 
  }

}
