import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { Employee } from '../models/employee.model';
import { MatButtonToggleGroup } from '@angular/material';


@Component({
  selector: 'employee-detail',
  templateUrl: './employee-detail.component.html',
  styleUrls: ['./employee-detail.component.css']
})
export class EmployeeDetailComponent implements OnInit {
  
  @Input() employee:Employee
  //@ViewChild('group') selections: MatButtonToggleGroup

  tiles: any

  getToggleValues(values: string[]){
    console.log(values)
  }
  
  constructor() { }

  ngOnInit() {
    this.tiles = this.tileData
    console.log(this.tiles)
  }
  
  tileData  = [
    {columnName: "Sills", items: [{name:'dog walking', isExpert: false}], color: 'lightblue'},
    {columnName: "Certifications", items: [{name:'tech stuff', isExpert: false},{name:'running', isExpert: false}], color: 'lightblue'},
  ];



}
