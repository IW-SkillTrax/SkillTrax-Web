import { Injectable } from '@angular/core'
import { Subject, Observable, of} from 'rxjs';
import { Employee } from '../models/employee.model';
import { DataSource } from '@angular/cdk/table';


@Injectable()
export class EmployeeListService {

    getEmployees(): Observable<Employee[]> {
      const rows = [];
      data.forEach(employee => rows.push(employee, { detailRow: true, employee }));
      console.log(rows);
      return of(rows);
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
      // "skills": [
      //   {
      //     "name": "Dumb Shit 1",
      //     "type": "BA work",
      //     "solution": "Technology",
      //     "isExpert": true
      //   },
      //   {
      //     "name": "other shit 2",
      //     "type": "application",
      //     "solution": "Technology",
      //     "isExpert": false
      //   }
      // ],
      // "certs": [
      //   {
      //     "name": "Certified Shit",
      //     "org": "PMI"
      //   },
      //   {
      //     "name": "other cert",
      //     "org": "BSA"
      //   },
      //   {
      //     "name": "scum master",
      //     "org": "CSC"
      //   }
      // ]
    }
  ];