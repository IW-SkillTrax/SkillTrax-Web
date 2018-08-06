import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
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
  getEmployee(id: number): Observable<Employee>
  {
    //url will be: https://localhost:44346/Employee/{id}
    let url = this.host + this.controller + id;
    return this.http.get(url)
    .map(employee =>
      {
        return employee as Employee;
      });
  }
  getUser(adUniqueId: string): Observable<Employee>{
    return this.http.get(`https://localhost:44346/Employee/ActiveDirectoryId/${adUniqueId}`)
    .map(employee =>
      {
        return employee as Employee;
      });
  }
  removeEmployeeSkill(employeeId, skillId){
    //build url
    let url = this.host + this.controller + employeeId + "/" + "RemoveSkill/" + skillId;
    //url should be https://localhost:44346/Employee/{employeeId}/RemoveSkill/{skillId}
    return this.http.delete(url);
  }
  addEmployeeSkill(employeeId, skillId){
    //url should be https://localhost:44346/Employee/{employeeId}/AddSkill/{skillId}
    let url = this.host + this.controller + "/" + employeeId + "/AddSkill/"+ skillId;
    return this.http.get(url);
  }
  removeEmployeeCertification(employeeId, certificationId){ 
    let url = this.host + this.controller + "/" + employeeId + "/RemoveCertification/" + certificationId;
    return this.http.delete(url);
  }
  addEmployeeCertification(employeeId, certificationId){
    let url = this.host + this.controller + "/" + employeeId + "/AddCertification/" + certificationId;
    return this.http.get(url);
  }
}
