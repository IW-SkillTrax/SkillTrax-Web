import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CertificationService {
  host: string = "https://localhost:44346/";
  controller: string = "Certification/";
  constructor(private http: HttpClient) { }
  getCertifications(){
    let url = this.host + this.controller;
    return this.http.get(url);
  }
}
