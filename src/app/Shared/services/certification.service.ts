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

  getCertificationCategories(){
    let url = this.host + this.controller + "Categories";
    return this.http.get(url);
  }
  
  deleteCertification(certId){
    let url = this.host + this.controller + certId;
    return this.http.delete(url);
  }

  createCertification(name, categoryId){
    let url = this.host + this.controller;
    return this.http.post(url, {"CertificationName": name, "CertCategoryId": categoryId});
  }
  updateCertification(id, name, categoryId){
    let url = this.host + this.controller + id;
    return this.http.put(url, {"CertificationName": name, "CertCategoryId": categoryId})
  }
  
}
