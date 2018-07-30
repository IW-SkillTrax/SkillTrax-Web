import { Component, OnInit, ViewChild } from '@angular/core';
import { Employee } from '../../Shared/models/employee.model';
import { Certification } from '../../Shared/models/certification.model';
import { Skill } from '../../Shared/models/skill.model';
import { Filter } from '../models/filter.model';

import { EmployeeService } from '../../Shared/services/employee.service';
import { SkillService } from '../../Shared/services/skill.service';
import { CertificationService } from '../../Shared/services/certification.service';
import { RoleService } from '../../Shared/services/role.service';
import { FilterService } from '../../Shared/services/filter.service';

import {NgbTypeahead} from '@ng-bootstrap/ng-bootstrap';
import {Observable, Subject, merge} from 'rxjs';
import {debounceTime, distinctUntilChanged, filter, map} from 'rxjs/operators';
import { FormControl } from '@angular/forms';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  employees: Array<Employee>;
  filteredEmployees: Array<Employee> = new Array() as Array<Employee>;
 
  filters: any;

  appliedFilters: Array<Filter>;

  public searchBox: any;  

  constructor(
    private employeeService: EmployeeService,
    private filterService: FilterService
  ) { }

  ngOnInit() {
  this.getData();
  
  }

  
//typeahead functions
  search = (text$: Observable<string>) =>
    text$.pipe(
      debounceTime(200),
      map(term => term === '' ? []
        : this.filters.filter(v => v.name.toLowerCase().indexOf(term.toLowerCase()) > -1).slice(0, 10))
    );

  formatter = (x: {name: string}) => x.name;

  //http service callers
getData(){
this.getEmployees();
this.getFilters();
}

getFilters(){
this.filterService.getFilters().subscribe(
  data => {this.filters = data as Array<Filter>},
  err => console.error(err),
  () => console.log("Filters Loaded", this.filters)
)
}
  getEmployees(){
    this.employeeService.getEmployees().subscribe(
      data => {this.employees = data as Array<Employee>},
      err => console.error(err),
      () => console.log("Employees Loaded", this.employees)
    );
  }




//filtering functions


applicableFilter(filter:Filter, employee: any): boolean {
let applies = false;

if(filter.Catagory == "Person"){
  if(filter.Name == employee.firstName + " " + employee.lastName)
  applies = true;
  
}

else if(filter.Catagory == "Skill"){
  for(let skill of employee.skills){
    if(skill.skillName == filter.Name){
      applies = true;
      break;
    }
  }
}

else if(filter.Catagory == "Certification"){
  for(let certification of employee.certifications){
    if(certification.certificationName == filter.Name){
      applies = true;
      break;
    }
  }
}
else if(filter.Catagory == "Role"){
  //could change depending on what Judy says about roles
  if(employee.roleName == filter.Name){
    applies = true;
  }
}
return applies;
}

filterEmployees()
{
 
  for(let i = 0; i < this.filteredEmployees.length; i++)
  {
    for(let filter of this.appliedFilters)
    {
      if(!this.applicableFilter(filter, this.filteredEmployees[i]))
      {
        this.filteredEmployees.splice(i,1);
        i--;
        break;
      }
    }
  }
}
addFilter(input){
 
  if(this.filteredEmployees == null || this.filteredEmployees.length == 0){
      this.filteredEmployees = this.employees.slice();
    }
    if(this.appliedFilters == null){
      this.appliedFilters= new Array() as Array<Filter>;
    }
  let filter = new Filter(input.name, input.catagory);

  //TODO: no double filters!!!
  if(this.appliedFilters.indexOf(filter) == -1){
    this.appliedFilters.push(filter);
    this.filterEmployees();
  }
 
 console.log(this.appliedFilters);
}

  removeFilter(filter:Filter){
    for(let i = 0; i < this.appliedFilters.length; i++){
      if(filter.Name == this.appliedFilters[i].Name){
        this.appliedFilters.splice(i,1);
      }
    }
    if(this.appliedFilters.length < 1){
      this.filteredEmployees.length = 0;
    }
    else{
      this.filteredEmployees = this.employees;
      this.filterEmployees();
    }
    console.log(this.employees)
  }

}