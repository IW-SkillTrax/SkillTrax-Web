import { Component, OnInit } from '@angular/core';
import { SkillService } from '../../Shared/services/skill.service';
import {Observable} from 'rxjs';
import {debounceTime,  map} from 'rxjs/operators';
import { Skill } from '../../Shared/models/skill.model';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {

  constructor(private skillService: SkillService) { }
  skills:any;
  skillsOpen = {};
  skillTypes: any;
  skillTypesOpen = {}; 
  searchedSkills: any;
  searchedSkillsOpen:any;
  ngOnInit() {
    this.getSkills()
  }
  getSkills(){
  this.skillService.getSkills().subscribe(
    data => {this.skills = data},
    err => console.error(err),
    () => this.getSkillTypes()
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

addToSearched(skill){
  if(this.searchedSkills == undefined){
    this.searchedSkills = new Array() as Array<Skill>;
  }
  this.searchedSkills.push(skill);
}

  skillSearchBox: any;

  skillSearch = (text$: Observable<string>) =>
  text$.pipe(
    debounceTime(200),
    map(term => term === '' ? []
      : this.skills.filter(v => v.skillName.toLowerCase().indexOf(term.toLowerCase()) > -1).slice(0, 10))
  );

formatter = (x: {skillName: string}) => x.skillName;
}
