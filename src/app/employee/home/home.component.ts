import { Component, OnInit, Renderer2 } from '@angular/core';
import { Employee } from '../../core/models/employee.model';
import { Certification } from '../../core/models/certification.model';
import { Skill } from '../../core/models/skill.model';
import { Filter } from '../models/filter.model';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  employees: Employee[];
  skills: Skill[];
  certifications: Certification[];

  filters: Filter[];
  filteredEmployees: Employee[];

  constructor(private renderer: Renderer2) { }

  ngOnInit() {
    
  }
  viewDetails()
  {
    console.log("detailView")
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
