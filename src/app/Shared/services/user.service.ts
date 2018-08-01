import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService { 

  currentUser:any

  constructor(private http:HttpClient) { }

  setCurrentUser(adUniqueId: string) {
    this.http.get(`https://localhost:44346/Employee/ActiveDirectoryId/${adUniqueId}`).subscribe((user) => {
      console.log(user)
      sessionStorage.setItem('currentUser', user.toString());
    })
  }

//create Json user
  getCurrentUser() {
    return user;
  }
}
const user: any =
{
  "employeeId": 3,
  "firstName": "Gib",
  "lastName": "Bowden",
  "isAdmin": false,
  "adUniqueIdentifier": "gib.bowden@infoworks-tn.com",
  "roleId": 1,
  "roleName": "Consultant",
  "skills": [
      {
          "skillId": 360,
          "skillName": "Xcode4",
          "solutionId": 3,
          "solutionName": "Technology",
          "skillTypeId": 7,
          "skillTypeName": "Integrated Development Environment (IDE)"
      },
      {
          "skillId": 363,
          "skillName": "Microsoft Excel",
          "solutionId": 1,
          "solutionName": "Analytics",
          "skillTypeId": 1,
          "skillTypeName": "Application"
      },
      {
          "skillId": 371,
          "skillName": "ReSharper",
          "solutionId": 3,
          "solutionName": "Technology",
          "skillTypeId": 1,
          "skillTypeName": "Application"
      }
  ],
  "certifications": []
};

