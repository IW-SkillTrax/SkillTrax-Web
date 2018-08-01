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
  user: Employee;
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
      data => {this.user = data as Employee},
      err => console.error(err),
      () => console.log("Employee Loaded", this.user)
    )
  }
}
