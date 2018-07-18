import { Component, OnInit } from '@angular/core';
import { CertService } from '../../employees/services/cert.service';
import { Cert } from '../../employees/models/cert.model';
import { CertCategory } from '../../employees/models/certCategory.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'cert-list',
  templateUrl: './cert-list.component.html',
  styleUrls: ['./cert-list.component.css']
})
export class CertListComponent implements OnInit {
  employeeId: number;
  certs: Cert[]; 
  filteredCerts: Cert[];
  categories: CertCategory[];
  selectedCategoryIds: string[]; 
  selectedCertIds:string[]; 

  constructor(private certService:CertService, private route:ActivatedRoute) { }

  ngOnInit() {
    this.certs = this.certService.getCerts()
    this.filteredCerts = this.certs.slice(); 
    this.categories = this.certService.getCategories(); 
    this.employeeId = +this.route.snapshot.params['id']
    this.getEmployeeCerts(this.employeeId); 
  }

  getEmployeeCerts(employeeId: number) {
    this.selectedCertIds = this.certService.getEmployeeCerts(employeeId).map((id) => {
      return id.toString();
    })

  }

  filterCerts(){
    if (this.selectedCategoryIds && this.selectedCategoryIds.length > 0) {
      this.filteredCerts = this.certs.filter((cert) => {
        return this.selectedCategoryIds.includes(cert.categoryId.toString())
      })
    } else {
      this.filteredCerts = this.certs
    }
  }

  clearFilters() {
    this.selectedCategoryIds = []; 
  }

  searchCerts(searchValue:string) {
    this.clearFilters(); 
    this.filteredCerts = this.certs.filter((cert) => {
      return cert.name.toLowerCase().indexOf(searchValue.toLowerCase()) > -1
    })
  }

  addCerts() {
    let selectedCertsNum = this.selectedCertIds.map((id) => {
      return +id
    })
    this.certService.addEmployeeCerts(this.employeeId, selectedCertsNum)
  }

}
