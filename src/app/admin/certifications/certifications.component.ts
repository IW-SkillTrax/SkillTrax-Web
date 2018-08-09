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
  certificationCategories: any;
  certificationCategoriesOpen = {}; 
  searchedCertifications: any;
  searchedCertificationsOpen:any;
  searchableCertifications:any;
  createCertSuccess = false;

  ngOnInit() {
    this.getCertifications()
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
createCertCategoryBox:any;

closeCreateCertAlert(){
this.createCertSuccess = false;
}
createSkill(){

  this.createCertSuccess = true;
}



//Modal Stuff
modalReference:any;
closeResult:string;
editCertNameBox:any;
editCertCategoryBox:any;

openEditModal(cert, content){
  this.editCertNameBox = cert.certificationName;
  this.editCertCategoryBox = cert.certCategoryName;
  this.open(content);

}
UpdateCertification(){
  console.log(this.editCertNameBox);
  console.log(this.editCertCategoryBox);
  this.modalReference.close();
};

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


