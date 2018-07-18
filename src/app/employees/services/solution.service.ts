import { Injectable } from '@angular/core';
import { Solution } from '../models/solution.model';

@Injectable({
  providedIn: 'root'
})
export class SolutionService {

  constructor() { }

  getSolutions() {
    return data; 
  }
}

const data: Solution[] = [
  {
    "id": 1,
    "name": "Analytics"
  },
  {
    "id": 2,
    "name": "Management"
  },
  {
    "id": 3,
    "name": "Technology"
  },
]
