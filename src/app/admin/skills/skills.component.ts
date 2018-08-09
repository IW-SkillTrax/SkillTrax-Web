import { Component, OnInit } from '@angular/core';
import { SkillService } from '../../Shared/services/skill.service';
import {Observable} from 'rxjs';
import {debounceTime,  map} from 'rxjs/operators';
import { Skill } from '../../Shared/models/skill.model';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {

  constructor(private skillService: SkillService, private modalService: NgbModal) { }
  skills:any;
  skillsOpen = {};
  skillTypes: any;
  skillTypesOpen = {}; 
  searchedSkills: any;
  searchedSkillsOpen:any;
  searchableSkills:any;
  createSkillSuccess = false;
  ngOnInit() {
    this.getSkills()
  }
  getSkills(){
  this.skillService.getSkills().subscribe(
    data => {this.skills = data},
    err => console.error(err),
    () => {this.getSkillTypes(), this.getSearchableSkills()}
  )
  }
  getSkillTypes(){
    this.skillTypes = new Array() as Array<any>;
    this.skillTypesOpen = {};
    this.skillsOpen = {};
    for(let skill of this.skills){
      this.skillsOpen[skill.skillName] = false;
      if(this.skillTypes.indexOf(skill.skillTypeName) == -1){
        this.skillTypes.push(skill.skillTypeName);
        this.skillTypesOpen[skill.skillTypeName] = false;
      }
    }
  }
  toggleSkillTypesOpen(key: string){
    this.skillTypesOpen[key] = !this.skillTypesOpen[key];
  }
  toggleSkillsOpen(key: string){
    this.skillsOpen[key] = !this.skillsOpen[key];
  }
  toggleSearchedSkillsOpen(key: string){
    this.searchedSkillsOpen[key] = !this.searchedSkillsOpen[key];
  }
  getSearchableSkills(){
    this.searchableSkills = this.skills.slice();
  }

addToSearched(skill){
  if(this.searchedSkills == undefined){
    this.searchedSkills = new Array() as Array<Skill>;
  }
  if(this.searchedSkillsOpen == undefined){
    this.searchedSkillsOpen = {};
  }
  this.searchableSkills.splice(this.searchableSkills.indexOf(skill), 1);
  this.searchedSkills.push(skill);
  this.searchedSkillsOpen[skill.skillName] = false;
}
clearSearched(){
  this.searchableSkills = this.skills.slice();
  this.searchedSkills = [];
  this.searchedSkillsOpen = {};
}
clearSearchBox(){
  this.skillSearchBox = '';
}


  skillSearchBox: any;

  skillSearch = (text$: Observable<string>) =>
  text$.pipe(
    debounceTime(200),
    map(term => term === '' ? []
      : this.searchableSkills.filter(v => v.skillName.toLowerCase().indexOf(term.toLowerCase()) > -1).slice(0, 10))
  );

formatter = (x: {skillName: string}) => x.skillName;

closeCreateSkillAlert(){
  this.createSkillSuccess = false;
}
createSkill(){
  this.createSkillSuccess = true;
}

//modal stuff
modalReference: any;

closeResult: string;
editSkillNameBox;
editSkillTypeBox;
editSkillSolutionBox;
skillTitle;

openEditSkillModal(skill, content){
  this.editSkillNameBox = skill.skillName;
  this.editSkillTypeBox = skill.skillTypeName;
  this.editSkillSolutionBox = skill.solutionName;
  this.skillTitle = skill.skillName;
this.open(content);
}
updateSkill(){
  console.log(this.editSkillNameBox);
  console.log(this.editSkillTypeBox);
  console.log(this.editSkillSolutionBox);
  this.modalReference.close();
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
