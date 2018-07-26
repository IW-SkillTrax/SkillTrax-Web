import { Component, OnInit, Renderer2 } from '@angular/core';
import { Employee } from '../../Shared/models/employee.model';
import { Certification } from '../../Shared/models/certification.model';
import { Skill } from '../../Shared/models/skill.model';
import { Filter } from '../models/filter.model';
import { EmployeeService } from '../../Shared/services/employee.service';
import { SkillService } from '../../Shared/services/skill.service';
import { CertificationService } from '../../Shared/services/certification.service';
import { RoleService } from '../../Shared/services/role.service';
import { FilterService } from '../../Shared/services/filter.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  employees: Array<Employee>;
  skills: any;
  certifications: any;
  roles: any;
  
  filters: any;
  appliedFilters: Array<Filter> = new Array() as Array<Filter>;
  filteredEmployees: Array<Employee> = new Array() as Array<Employee>;

  constructor(
    private employeeService: EmployeeService,
    private skillService: SkillService,
    private certificationService: CertificationService,
    private roleService: RoleService,
    private filterService: FilterService
  ) { }

  ngOnInit() {
  this.getData();
  
  }

getData(){
this.getEmployees();
this.getSkills();
this.getCertifications();
this.getRoles();
this.getFilters();
}

getFilters(){
this.filterService.getFilters().subscribe(
  data => {this.filters = data},
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

getSkills(){
  this.skillService.getSkills().subscribe(
    data => {this.skills = data},
    err => console.error(err),
    () => console.log("Skills Loaded", this.skills)
  );
}

getCertifications(){
  this.certificationService.getCertifications().subscribe(
    data => {this.certifications = data},
    err => console.error(err),
    () => console.log("Certifications Loaded", this.certifications)
  );
}
getRoles(){
  this.roleService.getRoles().subscribe(
    data => {this.roles = data},
    err => console.error(err),
    () => console.log("Roles loaded", this.roles)
  );
}

applicableFilter(filter:Filter, employee: Employee): boolean {
let applies = false;

if(filter.Catagory == "Person"){
  //not sure how this should go
}

else if(filter.Catagory == "Skill"){
  for(let skill of employee.Skills){
    if(skill.SkillName == filter.Name){
      applies = true;
    }
  }
}

else if(filter.Catagory == "Certification"){
  for(let certification of employee.Certifications){
    if(certification.CertificationName == filter.Name){
      applies = true;
    }
  }
}
else if(filter.Catagory == "Role"){
  //could change depending on what Judy says about roles
  if(employee.Role == filter.Name){
    applies = true;
  }
}
return applies;
}

filterEmployees()
{
  for(let i =0; i < this.filteredEmployees.length; i++)
  {
    for(let filter of this.appliedFilters)
    {
      if(!this.applicableFilter(filter, this.filteredEmployees[i]))
      {
        this.filteredEmployees.splice(i,1);
      }
    }
  }
}
  addFilter()
  {
     if(this.filteredEmployees == null)
    {
      this.filteredEmployees = this.employees;
    }
   //TODO: add filter to filters

    this.filterEmployees();
  }

  removeFilter()
  {
    //TODO: remove specified filter from filters
   this.filteredEmployees = this.employees;
   this.filterEmployees();
  }
}