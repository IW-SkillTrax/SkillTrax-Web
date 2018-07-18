import { Injectable } from '@angular/core';
import { Employee } from '../models/employee.model';
import { config, Observable, of } from 'rxjs';
import { take, toArray } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';

//https://github.com/Azure-Samples/active-directory-javascript-singlepageapp-dotnet-webapi/blob/master/TodoSPA/App/Scripts/Ctrls/todoListCtrl.js

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  // private authContext = new AuthenticationContext(this.adal.config)
  private url = 'https://localhost:44346/api/Employee'

  constructor(private http:HttpClient) { }

  getEmployee(employeeId: number): Observable<any> {
    return this.http.get(`${this.url}/${employeeId}`)
  }

}

const data: Employee[] = [
  {
    "employeeId": 123,
    "employeeName": "Gib Bowden",
    "role": "Consultant",
    "hasManagement": true,
    "hasAnalytics": true,
    "hasTechnology": true,
    "certCount": 2,

  },
  {
    "employeeId": 124,
    "employeeName": "John Doe",
    "role": "Consultant",
    "hasManagement": false,
    "hasAnalytics": false,
    "hasTechnology": true,
    "certCount": 3,
  }
];
