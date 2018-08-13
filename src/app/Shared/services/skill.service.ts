import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NAMED_ENTITIES } from '../../../../node_modules/@angular/compiler';

@Injectable({
  providedIn: 'root'
})
export class SkillService {
  host: string = "https://localhost:44346/";
  controller: string = "Skill/";
  constructor(private http: HttpClient) { }

  getSkills(){
    let url = this.host + this.controller;
    return this.http.get(url)
  }
  getSkillTypes(){
    let url = this.host + this.controller + "Types";
    return this.http.get(url);
  }
  deleteSkill(skillId){
    //url should be https://localhost:44346/Skill/{skillId}
    let url = this.host + this.controller +'/'+ skillId;
    return this.http.delete(url);
  }
  createSkill(name, type, solution){
    let url = this.host + this.controller;
    return this.http.post(url, {"SkillName": name,"SkillTypeId": type,"SolutionId": solution});
  }
  updateSkill(id, name, type, solution){
    let url = this.host+this.controller+id;
    return this.http.put(url, {"SkillName": name,"SkillTypeId": type,"SolutionId": solution})
  }
}