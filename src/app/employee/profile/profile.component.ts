import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { EmployeeService } from '../../Shared/services/employee.service';
import { Employee } from '../../Shared/models/employee.model';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { SkillService } from '../../Shared/services/skill.service';
import { CertificationService } from '../../Shared/services/certification.service';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  profileId: number;
  private sub: any;
  employee: Employee;
  skillTypes: any[];
  skillTypesOpen = {};
  certificationTypes: any[];
  certificationTypesOpen = {};

  certifications: any;
  skills: any;
  availableSkills: any[];
  availableSkillTypes: any;
  availableSkillTypesOpen = {};
  availableCertifications: any[];

  constructor(
    private route: ActivatedRoute,
     private employeeService: EmployeeService, 
     private skillService: SkillService,
     private certificationService: CertificationService,
     private modalService: NgbModal
    ) {}

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
       this.profileId = +params['id']; // (+) converts string 'id' to a number
    this.getUserObj();
    });
  }
  ngOnDestroy() {
    this.sub.unsubscribe();
  }
  getUserObj()
  {
    this.employeeService.getEmployee(this.profileId).subscribe(
      data => {this.employee = data},
      err => console.error(err),
      () => {this.getSkillTypes(), this.getCertificationTypes(), this.getSkills();}
    )
  }
  getCertifications(){
    this.certificationService.getCertifications().subscribe(
      data => {this.certifications = data},
      err => console.error(err),
      () => this.getAvailibleCertifications()
    )
  }
  getAvailibleCertifications(){
    this.availableCertifications = this.certifications.slice();
    for(let certification of this.employee.certifications){
      this.availableCertifications = this.availableCertifications.filter(s => s.certificationId != certification.certificationId);
    }
  }
  getSkills(){
    this.skillService.getSkills().subscribe(
      data => {this.skills = data},
      err => console.error(err),
      () => this.getAvailibleSkills()
    )
  }
  getAvailibleSkills(){
    this.availableSkills = this.skills.slice();
    for(let skill of this.employee.skills){
      this.availableSkills = this.availableSkills.filter(s => s.skillId != skill.skillId);
    }
    console.log("Availible Skills", this.availableSkills);
    this.getAvailibleSkillTypes();
  }
getAvailibleSkillTypes(){
  this.availableSkillTypes = new Array() as Array<any>;
  this.availableSkillTypesOpen = {};
  for(let skill of this.skills){
    if(this.availableSkillTypes.indexOf(skill.skillTypeName) == -1){
      this.availableSkillTypes.push(skill.skillTypeName);
      this.availableSkillTypesOpen[skill.skillTypeName] = false;
    }
  }
  console.log("AvailableSkillTypes:", this.availableSkillTypes);
}
  getSkillTypes(){
    this.skillTypes = new Array() as Array<any>;
    this.skillTypesOpen = {};
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
  toggleCertDropdowns(key:string){
    this.certificationTypesOpen[key] = !this.certificationTypesOpen[key];
  }
  toggleAddSkillDropdowns(key:string){
    this.availableSkillTypesOpen[key] = !this.availableSkillTypesOpen[key];
  }

  removeSkill(skillId: string){
    this.employeeService.removeEmployeeSkill(this.profileId, skillId).subscribe(
      data =>{let x = data},
      err => console.error(err),
      () => this.removeSkillFromDOM(skillId)
    )
  }
  removeSkillFromDOM(skillId){
    this.employee.skills = this.employee.skills.filter(s => s.skillId != skillId);
    console.log(this.employee.skills);
    this.getSkillTypes();
    console.log(this.skillTypes);
  }
  addSkill(skillId){
    this.employeeService
  }
  getCertificationTypes(){
    this.certificationTypes = new Array() as Array<any>;
    this.certificationTypesOpen = {};
    for(let certification of this.employee.certifications){
      if(this.certificationTypes.indexOf(certification.certCatagoryName) == -1){
        this.certificationTypes.push(certification.certCatagoryName);
        this.certificationTypesOpen[certification.certCatagoryName] = false;
      }
    }
  }



//modal stuff
  closeResult: string;

  open(content) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }
  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
  }
}
