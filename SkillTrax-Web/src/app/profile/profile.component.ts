import { Component, OnInit, ViewChild } from '@angular/core';
import { SkillListComponent } from './skill-list/skill-list.component';
import { SelectedSkillListComponent } from './selected-skill-list/selected-skill-list.component';

@Component({
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  @ViewChild(SkillListComponent)
  @ViewChild(SelectedSkillListComponent)
  private skillList: SkillListComponent
  private selectedSkillList: SelectedSkillListComponent

  constructor() { }

  ngOnInit() {
  }

  updateSkills(event) {
    if (event == "updateAvailableSkills") {
      this.skillList.getSkills()
    } else {
      this.selectedSkillList.getEmployeeSkills()
    }
    
  }


}
