import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FilterService {

  host: string = "https://localhost:44346/";
  controller: string = "Filter/";
  constructor(private http: HttpClient) { }
  
  getFilters(){
    let url = this.host + this.controller;
    return this.http.get(url);
  }
}
