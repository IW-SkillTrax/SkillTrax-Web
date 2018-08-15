import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { EmployeeService } from './employee.service';
import { Employee } from '../models/employee.model';
import { User } from '../models/user.model';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class UserService { 

  returnedEmployee: Employee
  currentUser: User;

  constructor(private cookieService: CookieService, private employeeService: EmployeeService) { }

  setCurrentUser(adUniqueId: string) {
    this.employeeService.getUser(adUniqueId).subscribe(
      data => {this.returnedEmployee = data},
      err => console.error(err),
      () => this.setUserCookie()
    )
  }
  setUserCookie(){
    this.currentUser = new User();
    this.currentUser.employeeId = this.returnedEmployee.employeeId;
    this.currentUser.firstName = this.returnedEmployee.firstName;
    this.currentUser.lastName = this.returnedEmployee.lastName;
    this.currentUser.isAdmin = this.returnedEmployee.isAdmin;
    
    this.cookieService.set("currentUser", JSON.stringify(this.currentUser));
  }

getCurrentUser() {
  return new Promise(resolve => {
    if(this.cookieService.check('currentUser')){
      resolve(JSON.parse(this.cookieService.get("currentUser")));
    }
    else{
      let x = setInterval(function(scope){
        if(scope.cookieService.check('currentUser')){
          resolve(JSON.parse(scope.cookieService.get("currentUser")));
          clearInterval(x);
        }
      }, 100, this);
    }
    
  });
}

}