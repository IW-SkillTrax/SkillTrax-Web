import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RoleService {

  host: string = "https://localhost:44346/";
  controller: string = "Role/";
  constructor(private http: HttpClient) { }
  getRoles(){
    let url = this.host + this.controller;
    return this.http.get(url);
  }
}
