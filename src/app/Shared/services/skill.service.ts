import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

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
}