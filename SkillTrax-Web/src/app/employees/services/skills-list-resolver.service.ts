import { Injectable } from "@angular/core";
import { Resolve } from "@angular/router";
import { SkillService } from "./skill.service";

@Injectable()
export class SkillsListResolverService implements Resolve<any> {
    constructor(private skillService:SkillService) {

    }
    resolve() {
       const skills = this.skillService.getSkills(); 
       console.log(skills);
       return skills;
    }
}