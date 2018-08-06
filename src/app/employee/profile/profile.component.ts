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

  skills: any;
  skillTypes: any[];
  skillTypesOpen = {};
  availableSkills: any[];
  availableSkillTypes: any;
  availableSkillTypesOpen = {};

  certifications: any;
  certificationCategories: any[];
  certificationCategoriesOpen = {};
  availableCertifications: any[];
  availableCertificationCategories: any[];
  availableCertificationCategoriesOpen = {};

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
    this.getEmployeeObj();
    });
  }
  ngOnDestroy() {
    this.sub.unsubscribe();
  }
  getEmployeeObj()
  {
    this.employeeService.getEmployee(this.profileId).subscribe(
      data => {this.employee = data},
      err => console.error(err),
      () => {this.getSkillTypes(),
              this.getCertificationCatagories(),
              this.getSkills(),
              this.getCertifications()}
    )
  }
   getCertificationCatagories(){
    this.certificationCategories = new Array() as Array<any>;
    this.certificationCategoriesOpen = {};
    for(let certification of this.employee.certifications){
      if(this.certificationCategories.indexOf(certification.certCategoryName) == -1){
        this.certificationCategories.push(certification.certCategoryName);
        this.certificationCategoriesOpen[certification.certCategoryName] = false;
      }
    }
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
    this.getAvailableCertificationCategories();
  }

  getAvailableCertificationCategories(){
    this.availableCertificationCategories = new Array() as Array<any>;
    this.availableCertificationCategoriesOpen = {};
    for(let certification of this.availableCertifications){
      if(this.availableCertificationCategories.indexOf(certification.certCategoryName) == -1){
        this.availableCertificationCategories.push(certification.certCategoryName);
        this.availableCertificationCategoriesOpen[certification.certCategoryName] = false;
      }
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
   
    this.getAvailibleSkillTypes();
  }
getAvailibleSkillTypes(){
  this.availableSkillTypes = new Array() as Array<any>;
  this.availableSkillTypesOpen = {};
  for(let skill of this.availableSkills){
    if(this.availableSkillTypes.indexOf(skill.skillTypeName) == -1){
      this.availableSkillTypes.push(skill.skillTypeName);
      this.availableSkillTypesOpen[skill.skillTypeName] = false;
    }
  }
  
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
    this.certificationCategoriesOpen[key] = !this.certificationCategoriesOpen[key];
  }
  toggleAddSkillDropdowns(key:string){
    this.availableSkillTypesOpen[key] = !this.availableSkillTypesOpen[key];
  }
  toggleAddCertDropdowns(key:string){
    this.availableCertificationCategoriesOpen[key] = !this.availableCertificationCategoriesOpen[key];
  }
  removeSkill(skillId: string){
    this.employeeService.removeEmployeeSkill(this.profileId, skillId).subscribe(
      data =>{let x = data},
      err => console.error(err),
      () => this.removeSkillUpdateDOM(skillId)
    )
  }
  removeSkillUpdateDOM(skillId){
    this.employee.skills = this.employee.skills.filter(s => s.skillId != skillId);
    this.getSkillTypes();
  
    this.availableSkills.push(this.skills.filter(s => s.skillId == skillId)[0]);
  
    this.getAvailibleSkillTypes();
  }
  removeCertification(certificationId){
    this.employeeService.removeEmployeeCertification(this.profileId, certificationId).subscribe(
      data => {let x = data},
      err => console.error(err),
      () => this.removeCertificationUpdateDOM(certificationId)
    )
  }
  removeCertificationUpdateDOM(certificationId){
    this.employee.certifications = this.employee.certifications.filter(c => c.certificationId != certificationId);
    this.availableCertifications.push(this.certifications.filter(c => c.certificationId == certificationId)[0]);
    this.getCertificationCatagories();
    
  }
  addCertificationToProfile(certificationId){
    this.employeeService.addEmployeeCertification(this.profileId, certificationId).subscribe(
      data => {let x =  data},
      err => console.error(err),
      () => this.addCertificationDOMUpdate(certificationId)
    )
  }
  addSkillToProfile(skillId){
    this.employeeService.addEmployeeSkill(this.profileId, skillId).subscribe(
      data => {let x = data},
      err => console.error(err),
      () => this.addSkillDOMUpdate(skillId)
    )
  }
  addCertificationDOMUpdate(certificationId){

  }

  addSkillDOMUpdate(skillId){
    this.employee.skills.push(this.skills.filter(s => s.skillId == skillId)[0]);
    this.availableSkills = this.availableSkills.filter(s => s.skillId != skillId);
    this.getAvailibleSkillTypes();
    this.getSkillTypes();
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
