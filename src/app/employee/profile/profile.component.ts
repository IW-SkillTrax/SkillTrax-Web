import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { EmployeeService } from '../../Shared/services/employee.service';
import { Employee } from '../../Shared/models/employee.model';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  id: number;
  private sub: any;
  employee: Employee;
  skillTypes: any[];
  skillTypesOpen = {};
  constructor(private route: ActivatedRoute, private employeeService: EmployeeService) {}

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
       this.id = +params['id']; // (+) converts string 'id' to a number
    this.getUserObj();
       
    });

    
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  getUserObj()
  {
    this.employeeService.getEmployee(this.id).subscribe(
      data => {this.employee = data},
      err => console.error(err),
      () => this.getSkillTypes()
    )
  }
  getSkillTypes(){
    this.skillTypes = new Array() as Array<any>;
    for(let skill of this.employee.skills){
      if(this.skillTypes.indexOf(skill.skillTypeName) == -1){
        this.skillTypes.push(skill.skillTypeName);
        this.skillTypesOpen[skill.skillTypeName] = false;
      }
    }
  }
  toggleSkillDropdowns(key:string){
    this.skillTypesOpen[key] = !this.skillTypesOpen[key];
  }

}
