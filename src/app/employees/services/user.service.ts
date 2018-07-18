import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService { 

  currentUser:any

  constructor(private http:HttpClient) { }

  // setCurrentUser(uniqueId: string) {
  //   this.currentUser = data.find((user) => {
  //     return user.AdUniqueIdentifier == uniqueId
  //   })
  //   console.log(this.currentUser)
  //   sessionStorage.setItem('currentUser', this.currentUser);
  // }

  setCurrentUser(adUniqueId: string) {
    this.http.get(`https://localhost:44346/api/Employee/ActiveDirectoryId/${adUniqueId}`).subscribe((user) => {
      console.log(user)
      sessionStorage.setItem('currentUser', user.toString());
    })
  }

  getCurrentUser() {
    sessionStorage.getItem('currentUser')
  }
}

const data: any[] = [
  {
    "employeeId": 123,
    "AdUniqueIdentifier": "gib.bowden@infoworks-tn.com",
    "employeeName": "Gib Bowden",
    "role": "Consultant",
    "isAdmin": true

  },
  {
    "employeeId": 124,
    "AdUniqueIdentifier": "John@skilltrax.onmicrosoft.com",
    "employeeName": "John Doe",
    "role": "Consultant",
    "isAdmin": false
  },
  {
    "employeeId": 125,
    "AdUniqueIdentifier": "Jane@skilltrax.onmicrosoft.com",
    "employeeName": "Jane Doe",
    "role": "Consultant",
    "isAdmin": false
  },
];
