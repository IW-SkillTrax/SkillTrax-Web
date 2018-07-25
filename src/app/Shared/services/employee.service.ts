import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Employee } from '../models/employee.model';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  host: string = "https://localhost:44346/";
  controller: string = "Employee/";
  constructor(private http: HttpClient) { }

  getEmployees()
  {
    
    //url will be: https://localhost:44346/Employee/
    let url = this.host + this.controller;
    return this.http.get(url);
   
  }
  getEmployee(id: number)
  {
    //url will be: https://localhost:44346/Employee/{id}
    let url = this.host + this.controller + id;
    return this.http.get(url);
  }
}
