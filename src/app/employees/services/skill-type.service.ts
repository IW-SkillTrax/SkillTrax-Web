import { Injectable } from '@angular/core';
import { SkillType } from '../models/skillType.model';

@Injectable({
  providedIn: 'root'
})
export class SkillTypeService {

  constructor() { }

  getSkillTypes() {
    return data; 
  }
}

const data: SkillType[] = [
  {
    "id": 1,
    "name": "Application"
  },
  {
    "id": 2,
    "name": "Database"
  },
  {
    "id": 3,
    "name": "Development Methodology"
  },
  {
    "id": 4,
    "name": "Disc System"
  },
  {
    "id": 5,
    "name": "ETL Tool"
  },
  {
    "id": 6,
    "name": "Framework"
  },
  {
    "id": 7,
    "name": "Integrated Development Environment (IDE)"
  },
  {
    "id": 8,
    "name": "Knowledge Area"
  },
  {
    "id": 9,
    "name": "Library"
  },
  {
    "id": 10,
    "name": "Network Protocol"
  },
  {
    "id": 11,
    "name": "Operating System"
  },
  {
    "id": 12,
    "name": "Phone System"
  },
  {
    "id": 13,
    "name": "Platform"
  },
  {
    "id": 14,
    "name": "Process"
  },
  {
    "id": 15,
    "name": "Programming Language"
  },
  {
    "id": 16,
    "name": "Service"
  },
  {
    "id": 17,
    "name": "Skill"
  },
  {
    "id": 18,
    "name": "Software"
  },
  {
    "id": 19,
    "name": "Text Editor"
  },
  {
    "id": 20,
    "name": "Tool"
  },
  {
    "id": 21,
    "name": "Toolkit"
  },
  {
    "id": 22,
    "name": "Web Server"
  }
 ]
