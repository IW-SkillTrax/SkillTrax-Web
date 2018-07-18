import { Component} from '@angular/core';
import { DataSource } from '@angular/cdk/collections';
import { Observable, Subject, of } from 'rxjs';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { EmployeeListService } from '../services/employee-list.service';




@Component({
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({ height: '0px', minHeight: '0', visibility: 'hidden' })),
      state('expanded', style({ height: '*', visibility: 'visible' })),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class EmployeeListComponent {
  displayedColumns = ['name', 'role', 'hasAnalytics', 'hasManagement', 'hasTechnology', 'certCount'];

  dataSource = this.employeeService.getEmployees(); 

  isExpansionDetailRow = (i: number, row: Object) => row.hasOwnProperty('detailRow');
  expandedEmployee: any;

  constructor(private employeeService:EmployeeListService){}
}






  
  
