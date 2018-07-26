import { Component, OnInit, Input} from '@angular/core';
import { Employee } from '../../../Shared/models/employee.model';
@Component({
  selector: 'app-employee-list-item',
  templateUrl: './employee-list-item.component.html',
  styleUrls: ['./employee-list-item.component.scss']
})
export class EmployeeListItemComponent implements OnInit {

isOpen: boolean = false;
@Input() employee: Employee;

  constructor() { }

  ngOnInit() {
  }

  togglePanel(){
    this.isOpen = !this.isOpen;
  }
}
