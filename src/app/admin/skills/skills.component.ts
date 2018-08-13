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
solutions = [
    {"solutionId": 1, "solutionName": "Analytics"},
    {"solutionId": 2, "solutionName": "Management"},
    {"solutionId": 3, "solutionName": "Technology"},
  ];
  skills:any;
  skillsOpen = {};
  skillTypes: any;
  skillTypesOpen = {}; 
  searchedSkills: any;
  searchedSkillsOpen:any;
  searchableSkills:any;
  createSkillSuccess = false;
  types:any;

  ngOnInit() {
    this.getSkills()
    this.getTypes()
  }
  getTypes(){
    this.skillService.getSkillTypes().subscribe(
      data => {this.types = data},
      err => console.error(err),
      () => console.log("Types:", this.types)
    )
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
createSkillNameBox:any;
createSkillTypeBox:any;
createSkillSolutionBox:any;

createSkill(){
 //TODO: validate Name
 let newSkill = new Skill();
 newSkill.skillName = this.createSkillNameBox;
 newSkill.skillTypeId = this.createSkillTypeBox.skillTypeId;
 newSkill.skillTypeName = this.createSkillTypeBox.skillTypeName;
 newSkill.solutionId = this.createSkillSolutionBox.solutionId;
 newSkill.solutionName = this.createSkillSolutionBox.solutionName;

 console.log("Type", this.createSkillTypeBox);
 console.log("Solution", this.createSkillSolutionBox);

 this.skillService.createSkill(newSkill.skillName, newSkill.skillTypeId, newSkill.solutionId).subscribe(
  data => {newSkill.skillId = data as number},
  err => console.log(err),
  () => this.addSkillToDOM(newSkill)
 )
}

addSkillToDOM(newSkill: any){
  console.log("Add Skill to DOM");
  this.skills.push(newSkill);
  this.getSkillTypes();
  this.getSearchableSkills();
}

updateSkill(){
  let updatedSkill = new Skill();
  updatedSkill.skillId = this.skillId;
  updatedSkill.skillName = this.editSkillNameBox;
  updatedSkill.skillTypeId = this.editSkillTypeBox.skillTypeId;
  updatedSkill.skillTypeName = this.editSkillTypeBox.skillTypeName;
  updatedSkill.solutionId = this.editSkillSolutionBox.solutionId;
  updatedSkill.solutionName = this.editSkillSolutionBox.solutionName;
  
  this.skillService.updateSkill(updatedSkill.skillId, updatedSkill.skillName, updatedSkill.skillTypeId, updatedSkill.solutionId).subscribe(
    data => {let x = data},
    err => console.error(err),
    () => this.updateSkillDOM(updatedSkill)
  )
  this.modalReference.close();
}
updateSkillDOM(updatedSkill){
  let oldSkill = this.skills.filter(s => s.skillId == updatedSkill.skillId)[0];
  this.skills.splice(this.skills.indexOf(oldSkill),1);
  this.skills.push(updatedSkill);

  oldSkill = this.searchableSkills.filter(s => s.skillId == updatedSkill.skillId)[0];
  let index = this.searchableSkills.indexOf(oldSkill);
  if(index != -1){
    this.searchableSkills.splice(index, 1);
  }
  else{
   oldSkill = this.searchedSkills.filter(s => s.skillId == updatedSkill.skillId)[0];
   index = this.searched
  }
}
deleteSkill(skillId){
  this.skillService.deleteSkill(skillId).subscribe(
    data => {let x = data},
    err => console.error(err),
    ()  => this.removeSkillFromDOM(skillId)
  )
}

removeSkillFromDOM(skillId){
  let skill = this.skills.filter(s => s.skillId == skillId)[0];
  this.skills.splice(this.skills.indexOf(skill), 1);
  let index = this.searchableSkills.indexOf(skill);
  if(index != -1){
    this.searchableSkills.splice(index, 1);
  }
  if(this.searchedSkills != undefined){
    index = this.searchedSkills.indexOf(skill);
    if(index != -1){
      this.searchedSkills.splice(index, 1);
      //Remove from searchedSkills Open
    }
  }
}

//modal stuff
modalReference: any;

closeResult: string;
editSkillNameBox;
editSkillTypeBox;
editSkillSolutionBox;
skillTitle;
skillId;

openEditSkillModal(skill, content){
  this.editSkillNameBox = skill.skillName;
  this.editSkillTypeBox = skill.skillTypeName;
  this.editSkillSolutionBox = skill.solutionName;
  this.skillTitle = skill.skillName;
  this.skillId = skill.skillId;
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
