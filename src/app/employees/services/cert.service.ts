import { Injectable } from '@angular/core';
import { Cert } from '../models/cert.model';
import { CertCategory } from '../models/certCategory.model';

@Injectable({
  providedIn: 'root'
})
export class CertService {



  constructor() { }

  getCerts() {
    return data; 
  }

  getCategories() {
    return categoryData; 
  }

  addEmployeeCerts(employeeId: number, certIds: number[]) {
    console.log(`empID: ${employeeId}, certs: ${certIds}`)
  }

  getEmployeeCerts(employeeId: number): number[] {
    return []; 
  }
}

const categoryData:CertCategory[] = [
  {
    "id": 1,
    "name": "Additional"
  },
  {
    "id": 2,
    "name": "IIBA"
  },
  {
    "id": 3,
    "name": "Marketing"
  },
  {
    "id": 4,
    "name": "Microsoft"
  },
  {
    "id": 5,
    "name": "PMI"
  },
  {
    "id": 6,
    "name": "Prosci"
  },
  {
    "id": 7,
    "name": "Scrum"
  },
  {
    "id": 8,
    "name": "Six Sigma"
  }
 ]

const data:Cert[] = [
  {
    "id": 1,
    "name": "Certified Agile Leadership Credential 1",
    "categoryId": 1,
    "category": "Additional"
  },
  {
    "id": 2,
    "name": "Certified Developer - Associate, Amazon Web Services",
    "categoryId": 1,
    "category": "Additional"
  },
  {
    "id": 3,
    "name": "Certified Public Accountant (CPA)",
    "categoryId": 1,
    "category": "Additional"
  },
  {
    "id": 4,
    "name": "Cisco Certified Network Associate (CCNA)",
    "categoryId": 1,
    "category": "Additional"
  },
  {
    "id": 5,
    "name": "CPIM (Certified in Production and Inventory Management)",
    "categoryId": 1,
    "category": "Additional"
  },
  {
    "id": 6,
    "name": "Data Science Specialization",
    "categoryId": 1,
    "category": "Additional"
  },
  {
    "id": 7,
    "name": "LEAN Healthcare",
    "categoryId": 1,
    "category": "Additional"
  },
  {
    "id": 8,
    "name": "Mendix Advanced Developer",
    "categoryId": 1,
    "category": "Additional"
  },
  {
    "id": 9,
    "name": "Oracle Certified Professional",
    "categoryId": 1,
    "category": "Additional"
  },
  {
    "id": 10,
    "name": "Sun Certified Programmer for the Java2 Platform",
    "categoryId": 1,
    "category": "Additional"
  },
  {
    "id": 11,
    "name": "Tableau Desktop 10 Qualified Associate,",
    "categoryId": 1,
    "category": "Additional"
  },
  {
    "id": 12,
    "name": "The Grove: Designing and Leading Change Facilitator",
    "categoryId": 1,
    "category": "Additional"
  },
  {
    "id": 13,
    "name": "TQM/Green Belt Certified",
    "categoryId": 1,
    "category": "Additional"
  },
  {
    "id": 14,
    "name": "V-Fast Facilitation",
    "categoryId": 1,
    "category": "Additional"
  },
  {
    "id": 15,
    "name": "IIBA - Certification of Capability in Business Analysis (CCBA)",
    "categoryId": 2,
    "category": "IIBA"
  },
  {
    "id": 16,
    "name": "IIBA - Certified Business Analysis Professional (CBAP)",
    "categoryId": 2,
    "category": "IIBA"
  },
  {
    "id": 17,
    "name": "IIBA - Entry Certificate in Business Analysis (ECBA)",
    "categoryId": 2,
    "category": "IIBA"
  },
  {
    "id": 18,
    "name": "Pragmatic Marketing:  Build",
    "categoryId": 3,
    "category": "Marketing"
  },
  {
    "id": 19,
    "name": "Pragmatic Marketing:  Focus",
    "categoryId": 3,
    "category": "Marketing"
  },
  {
    "id": 20,
    "name": "Pragmatic Marketing:  Foundations",
    "categoryId": 3,
    "category": "Marketing"
  },
  {
    "id": 21,
    "name": "MCAD: Microsoft .NET",
    "categoryId": 4,
    "category": "Microsoft"
  },
  {
    "id": 22,
    "name": "MCDBA: SQL Server",
    "categoryId": 4,
    "category": "Microsoft"
  },
  {
    "id": 23,
    "name": "MCITP Business Intelligence",
    "categoryId": 4,
    "category": "Microsoft"
  },
  {
    "id": 24,
    "name": "MCITP: Database Administrator (SQL Server)",
    "categoryId": 4,
    "category": "Microsoft"
  },
  {
    "id": 25,
    "name": "MCSA: Cloud Platform",
    "categoryId": 4,
    "category": "Microsoft"
  },
  {
    "id": 26,
    "name": "MCSA: Cloud Platform and Infrastructure",
    "categoryId": 4,
    "category": "Microsoft"
  },
  {
    "id": 27,
    "name": "MCSA: Data Engineering with Azure",
    "categoryId": 4,
    "category": "Microsoft"
  },
  {
    "id": 28,
    "name": "MCSA: Linux on Azure",
    "categoryId": 4,
    "category": "Microsoft"
  },
  {
    "id": 29,
    "name": "MCSA: Machine Learning",
    "categoryId": 4,
    "category": "Microsoft"
  },
  {
    "id": 30,
    "name": "MCSA: Microsoft Dynamics 365",
    "categoryId": 4,
    "category": "Microsoft"
  },
  {
    "id": 31,
    "name": "MCSA: Microsoft Dynamics 365 for Operations",
    "categoryId": 4,
    "category": "Microsoft"
  },
  {
    "id": 32,
    "name": "MCSA: Office 365",
    "categoryId": 4,
    "category": "Microsoft"
  },
  {
    "id": 33,
    "name": "MCSA: SQL 2016 BI Development",
    "categoryId": 4,
    "category": "Microsoft"
  },
  {
    "id": 34,
    "name": "MCSA: SQL 2016 Database Administration",
    "categoryId": 4,
    "category": "Microsoft"
  },
  {
    "id": 35,
    "name": "MCSA: SQL 2016 Database Development",
    "categoryId": 4,
    "category": "Microsoft"
  },
  {
    "id": 36,
    "name": "MCSA: SQL Server 2012/2014",
    "categoryId": 4,
    "category": "Microsoft"
  },
  {
    "id": 37,
    "name": "MCSA: Universal Windows Platform",
    "categoryId": 4,
    "category": "Microsoft"
  },
  {
    "id": 38,
    "name": "MCSA: Web Applications",
    "categoryId": 4,
    "category": "Microsoft"
  },
  {
    "id": 39,
    "name": "MCSA: Windows 10",
    "categoryId": 4,
    "category": "Microsoft"
  },
  {
    "id": 40,
    "name": "MCSA: Windows Server 2012",
    "categoryId": 4,
    "category": "Microsoft"
  },
  {
    "id": 41,
    "name": "MCSA: Windows Server 2016",
    "categoryId": 4,
    "category": "Microsoft"
  },
  {
    "id": 42,
    "name": "MCSD: App Builder",
    "categoryId": 4,
    "category": "Microsoft"
  },
  {
    "id": 43,
    "name": "MCSE: Business Applications",
    "categoryId": 4,
    "category": "Microsoft"
  },
  {
    "id": 44,
    "name": "MCSE: Data Management and Analytics",
    "categoryId": 4,
    "category": "Microsoft"
  },
  {
    "id": 45,
    "name": "MCSE: Mobility",
    "categoryId": 4,
    "category": "Microsoft"
  },
  {
    "id": 46,
    "name": "MCSE: Productivity",
    "categoryId": 4,
    "category": "Microsoft"
  },
  {
    "id": 47,
    "name": "MCTS 70-480: Programming in HTML5 with JavaScript and CSS3 ",
    "categoryId": 4,
    "category": "Microsoft"
  },
  {
    "id": 48,
    "name": "MCTS 70-486: Developing ASP.NET MVC Web Applications ",
    "categoryId": 4,
    "category": "Microsoft"
  },
  {
    "id": 49,
    "name": "MCTS 70-487: Developing Microsoft Azure and Web Services ",
    "categoryId": 4,
    "category": "Microsoft"
  },
  {
    "id": 50,
    "name": "MCTS 70-515: Web Applications Development with Microsoft .NET Framework 4 ",
    "categoryId": 4,
    "category": "Microsoft"
  },
  {
    "id": 51,
    "name": "MCTS 70-516: Accessing Data with Microsoft .NET Framework 4 ",
    "categoryId": 4,
    "category": "Microsoft"
  },
  {
    "id": 52,
    "name": "Microsoft Certified Technical Specialist (MCTS): Administering Office 365",
    "categoryId": 4,
    "category": "Microsoft"
  },
  {
    "id": 53,
    "name": "Microsoft Certified Technical Specialist (MCTS): Windows SharePoint Services 3.0, Configuration",
    "categoryId": 4,
    "category": "Microsoft"
  },
  {
    "id": 54,
    "name": "Microsoft Office Specialist 2013",
    "categoryId": 4,
    "category": "Microsoft"
  },
  {
    "id": 55,
    "name": "Microsoft Office Specialist 2016",
    "categoryId": 4,
    "category": "Microsoft"
  },
  {
    "id": 56,
    "name": "Microsoft Technology Associate",
    "categoryId": 4,
    "category": "Microsoft"
  },
  {
    "id": 57,
    "name": "MOS Expert 2013",
    "categoryId": 4,
    "category": "Microsoft"
  },
  {
    "id": 58,
    "name": "MOS Expert 2016",
    "categoryId": 4,
    "category": "Microsoft"
  },
  {
    "id": 59,
    "name": "MOS Expert: Microsoft Office Specialist Expert",
    "categoryId": 4,
    "category": "Microsoft"
  },
  {
    "id": 60,
    "name": "MOS Master 2013",
    "categoryId": 4,
    "category": "Microsoft"
  },
  {
    "id": 61,
    "name": "MOS Master 2016",
    "categoryId": 4,
    "category": "Microsoft"
  },
  {
    "id": 62,
    "name": "MOS Master: Microsoft Office Specialist Master",
    "categoryId": 4,
    "category": "Microsoft"
  },
  {
    "id": 63,
    "name": "MOS: Microsoft Office Specialist",
    "categoryId": 4,
    "category": "Microsoft"
  },
  {
    "id": 64,
    "name": "CAPM (Certfied Associate in Project Management)",
    "categoryId": 5,
    "category": "PMI"
  },
  {
    "id": 65,
    "name": "Certified Associate in Project Management (CAPM)",
    "categoryId": 5,
    "category": "PMI"
  },
  {
    "id": 66,
    "name": "PgMP (Program Management Professional)",
    "categoryId": 5,
    "category": "PMI"
  },
  {
    "id": 67,
    "name": "PMI-ACP (PMI Agile Certified Practitioner)",
    "categoryId": 5,
    "category": "PMI"
  },
  {
    "id": 68,
    "name": "PMI-PBA (PMI Professional in Business Analysis)",
    "categoryId": 5,
    "category": "PMI"
  },
  {
    "id": 69,
    "name": "PMI-RMP (PMI Risk Management Professional)",
    "categoryId": 5,
    "category": "PMI"
  },
  {
    "id": 70,
    "name": "PMI-SP (PMI Scheduling Professional)",
    "categoryId": 5,
    "category": "PMI"
  },
  {
    "id": 71,
    "name": "PfMP (Portfolio Management Professional)",
    "categoryId": 5,
    "category": "PMI"
  },
  {
    "id": 72,
    "name": "PMP (Project Management Professional)",
    "categoryId": 5,
    "category": "PMI"
  },
  {
    "id": 73,
    "name": "Prosci Advanced Certified",
    "categoryId": 6,
    "category": "Prosci"
  },
  {
    "id": 74,
    "name": "Prosci Advanced Deployment Leader",
    "categoryId": 6,
    "category": "Prosci"
  },
  {
    "id": 75,
    "name": "Prosci Advanced Instructor",
    "categoryId": 6,
    "category": "Prosci"
  },
  {
    "id": 76,
    "name": "Prosci Advanced Practitioner",
    "categoryId": 6,
    "category": "Prosci"
  },
  {
    "id": 77,
    "name": "Advanced Certified ScrumMaster",
    "categoryId": 7,
    "category": "Scrum"
  },
  {
    "id": 78,
    "name": "Certified Scrum Developer - Agile Engineering",
    "categoryId": 7,
    "category": "Scrum"
  },
  {
    "id": 79,
    "name": "Certified Scrum Product Owner",
    "categoryId": 7,
    "category": "Scrum"
  },
  {
    "id": 80,
    "name": "Professional Scrum Master I (PSM I)",
    "categoryId": 7,
    "category": "Scrum"
  },
  {
    "id": 81,
    "name": "Scrum Master",
    "categoryId": 7,
    "category": "Scrum"
  },
  {
    "id": 82,
    "name": "Six Sigma Brown Belt",
    "categoryId": 8,
    "category": "Six Sigma"
  },
  {
    "id": 83,
    "name": "Six Sigma Champion",
    "categoryId": 8,
    "category": "Six Sigma"
  },
  {
    "id": 84,
    "name": "Six Sigma Green Belt",
    "categoryId": 8,
    "category": "Six Sigma"
  },
  {
    "id": 85,
    "name": "Six Sigma Master Black Belt",
    "categoryId": 8,
    "category": "Six Sigma"
  },
  {
    "id": 86,
    "name": "Six Sigma White Belt",
    "categoryId": 8,
    "category": "Six Sigma"
  },
  {
    "id": 87,
    "name": "Six Sigma Yellow Belt",
    "categoryId": 8,
    "category": "Six Sigma"
  }
 ]