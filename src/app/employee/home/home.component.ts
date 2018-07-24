import { Component, OnInit, Renderer2 } from '@angular/core';
import { Employee } from '../../Shared/models/employee.model';
import { Certification } from '../../Shared/models/certification.model';
import { Skill } from '../../Shared/models/skill.model';
import { Filter } from '../models/filter.model';
import { EmployeeService } from '../../Shared/services/employee.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  employees: any;
  skills: Skill[];
  certifications: Certification[];

  filters: Filter[];
  filteredEmployees: Employee[];

  constructor(private employeeService: EmployeeService) { }

  ngOnInit() {
    console.log("ngOnInit start");
    //this.getEmployees();
    console.log("ngOnInit end");
  }

  getEmployees()
  {
    this.employeeService.getEmployees().subscribe(
      data => {this.employees = data},
      err => console.error(err),
      () => console.log("Employees Loaded")
    );
  }







  viewDetails()
  {
   // console.log(this.employees);
  }
  addFilter()
  {
  
  }
  removeFilter()
  {
    console.log("Filter Remove");
  }
  applicableFilter(employee: Employee, filter: Filter): boolean
  {
    return true;
  }
  
  filterEmployees()
  {
    for(let employee of this.filteredEmployees)
    {
      for(let filter of this.filters)
      {
        if(!this.applicableFilter(employee, filter)){
          //remove employee
        }
      }
    }
  }

}
