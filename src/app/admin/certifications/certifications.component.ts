import { Component, OnInit } from '@angular/core';
import { CertificationService } from '../../Shared/services/certification.service';
import { Certification } from '../../Shared/models/certification.model';
import {Observable} from 'rxjs';
import {debounceTime,  map} from 'rxjs/operators';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-certifications',
  templateUrl: './certifications.component.html',
  styleUrls: ['./certifications.component.scss']
})
export class CertificationsComponent implements OnInit {

  constructor(private certificationService: CertificationService, private modalService:NgbModal) { }
  certifications:any;
  certificationsOpen = {};
  certificationCategories: any; //these are generated based on the certifications
  certificationCategoriesOpen = {};
  searchedCertifications = [];
  searchedCertificationsOpen:any;
  searchableCertifications:any;
  createCertSuccess = false;
  categories:any; //these come from the API

  ngOnInit() {
    this.getCertifications();
    this.getCategories();
  }

  getCategories(){
    this.certificationService.getCertificationCategories().subscribe(
      data => {this.categories = data},
      err => console.error(err),
    )
  }

getCertifications(){
  this.certificationService.getCertifications().subscribe(
    data => {this.certifications = data},
    err => console.error(err),
    () => {this.getCertificationCategories(), this.getSearchableCertifications()}
  )
}
getCertificationCategories(){
    this.certificationCategories = new Array() as Array<any>;
    this.certificationCategoriesOpen = {};
    this.certificationsOpen = {};
  for(let cert of this.certifications){
    this.certificationsOpen[cert.certificationName] = false;
      if(this.certificationCategories.indexOf(cert.certCategoryName) == -1){
        this.certificationCategories.push(cert.certCategoryName);
        this.certificationCategoriesOpen[cert.certCategoryName] = false;
      }
  }
}
getSearchableCertifications(){
  this.searchableCertifications = this.certifications.slice();
}
toggleCertificationsOpen(key: string){
  this.certificationsOpen[key] = !this.certificationsOpen[key];
}
toggleCertificationCategoriesOpen(key: string){
this.certificationCategoriesOpen[key] = !this.certificationCategoriesOpen[key];
}
toggleSearchedCertificationsOpen(key: string){
  this.searchedCertificationsOpen[key] = !this.searchedCertificationsOpen[key];
}
addToSearched(skill){
  if(this.searchedCertifications == undefined){
    this.searchedCertifications = new Array() as Array<Certification>;
  }
  if(this.searchedCertificationsOpen == undefined){
    this.searchedCertificationsOpen = {};
  }
  this.searchableCertifications.splice(this.searchableCertifications.indexOf(skill), 1);
  this.searchedCertifications.push(skill);
  this.searchedCertificationsOpen[skill.skillName] = false;
}
enterAddToSearched(){
  if(this.certificationSearchBox.certificationId != undefined){
    if(this.searchedCertifications.indexOf(this.certificationSearchBox) == -1){ 
      this.addToSearched(this.certificationSearchBox);
    }
  }
}
clearSearched(){
  this.searchableCertifications = this.certifications.slice();
  this.searchedCertifications = [];
  this.searchedCertificationsOpen = {};
}
clearSearchBox(){
  this.certificationSearchBox = '';
}
certificationSearchBox: any;
certificationSearch = (text$: Observable<string>) =>
  text$.pipe(
    debounceTime(200),
    map(term => term === '' ? []
      : this.searchableCertifications.filter(v => v.certificationName.toLowerCase().indexOf(term.toLowerCase()) > -1).slice(0, 10))
  );

formatter = (x: {certificationName: string}) => x.certificationName;

//create certification Stuff
createCertNameBox:any;
createCertCategoryBox = null;

closeCreateCertAlert(){
this.createCertSuccess = false;
}
createCertification(){
  if(this.createCertCategoryBox != null 
      && this.createCertNameBox != "" 
      && this.createCertNameBox != null){
    let newCert = new Certification();
    newCert.certificationName = this.createCertNameBox;
    newCert.certCategoryId = this.createCertCategoryBox.certCategoryId;
    newCert.certCategoryName = this.createCertCategoryBox.certCategoryName;

    this.certificationService.createCertification(newCert.certificationName, newCert.certCategoryId).subscribe(
      data => {newCert.certificationId = data as number, console.log(data as number)},
      err => console.error(err),
     () => this.addCertToDOM(newCert)
    );
    this.createCertNameBox = '';
  }
}
addCertToDOM(newCert){
  this.certifications.push(newCert);
  this.getCertificationCategories();
  this.getSearchableCertifications();
  this.createCertSuccess = true;
}
clearNameBox(){
  this.createCertNameBox = '';
}
deleteCertification(certId){
  this.certificationService.deleteCertification(certId).subscribe(
    data =>{let x = data},
    err => console.error(err),
    () => this.removeCertFromDOM(certId)
  )
}
removeCertFromDOM(certId){
  let cert = this.certifications.filter(s => s.certificationId == certId)[0];
  this.certifications.splice(this.certifications.indexOf(cert), 1);
  let index = this.searchableCertifications.indexOf(cert);
  if(index != -1){
    this.searchableCertifications.splice(index, 1);
  }
  if(this.searchedCertifications != undefined){
    index = this.searchedCertifications.indexOf(cert);
    if(index != -1){
      this.searchedCertifications.splice(index, 1);
      //Remove from searchedSkills Open
    }
  }
}
editCert:any;

updateCertification(){
  let updatedCert = new Certification();
  updatedCert.certificationId = this.editCert.certificationId;
  updatedCert.certificationName = this.editCertNameBox;
  updatedCert.certCategoryId = this.editCertCategoryBox.certCategoryId;
  updatedCert.certCategoryName = this.editCertCategoryBox.certCategoryName;
 
  this.certificationService.updateCertification(updatedCert.certificationId, updatedCert.certificationName, updatedCert.certCategoryId).subscribe(
    data => {let x = data},
    err => console.error(err),
    () => this.updateSkillDOM(updatedCert)
  )
  this.modalReference.close();
}
updateSkillDOM(updatedCert){
  
  let oldCert = this.certifications.filter(s => s.certificationId == updatedCert.certificationId)[0];
  this.certifications.splice(this.certifications.indexOf(oldCert),1);
  this.certifications.push(updatedCert);
  
  oldCert = this.searchableCertifications.filter(s => s.certificationId == updatedCert.certificationId)[0];
  let index = this.searchableCertifications.indexOf(oldCert);
  if(index != -1){
    this.searchableCertifications.splice(index, 1);
    this.searchableCertifications.push(updatedCert);
  }
  else{
    oldCert = this.searchedCertifications.filter(s => s.certificationId == updatedCert.certificationId)[0];
   index = this.searchedCertifications.indexOf(oldCert);
   this.searchedCertifications.splice(index, 1);
   this.searchedCertifications.push(updatedCert);
  }
}

//Modal Stuff
modalReference:any;
closeResult:string;
editCertNameBox:any;
editCertCategoryBox:any;

openEditModal(cert, content){
  this.editCert = cert;
  this.editCertNameBox = cert.certificationName;
  this.editCertCategoryBox = cert.certCategoryName;
  this.open(content);
}


open(content) {
  this.modalReference = this.modalService.open(content);
this.modalReference.result.then((result) => {
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


