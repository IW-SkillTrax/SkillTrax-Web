import { Injectable } from '@angular/core';
import { Skill } from '../models/skill.model';
import { HttpClient } from '@angular/common/http';
import { Observable, forkJoin } from 'rxjs';
import { first, take } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SkillService {

  constructor(private http:HttpClient) { }

  getSkills(): Observable<any> {
    return this.http.get('https://localhost:44346/api/Skill')
  }

  getAvailableSkills(employeeId:number): Observable<any> {
    return this.http.get(`https://localhost:44346/api/Employee/${employeeId}/AvailableSkills`)
  }

  addEmployeeSkills(employeeId: number, skillIds: number[]) {
    return new Promise ((resolve, reject) => {
      skillIds.forEach(id => {
        this.http.post(`https://localhost:44346/api/Employee/${employeeId}/Skill/${id}`, {}).subscribe(); 
      }); 
      resolve(); 
    })
  }

  removeEmployeeSkills(employeeSkillIds: number[]) {
    let batch = []; 
      employeeSkillIds.forEach(id => {
        batch.push(this.http.delete(`https://localhost:44346/api/Employee/EmployeeSkill/${id}`).pipe(first()))
      });
      return forkJoin(...batch)
  }

  getEmployeeSkills(employeeId: number): Observable<any> {
    return this.http.get(`https://localhost:44346/api/Employee/${employeeId}/Skills`)
  }
}




const data: Skill[] = [
  {
    "id": 1,
    "name": "Ab Initio",
    "typeId": 1,
    "type": "Application",
    "solutionId": 1,
    "solution": "Analytics"
  },
  {
    "id": 2,
    "name": "Alooma",
    "typeId": 1,
    "type": "Application",
    "solutionId": 1,
    "solution": "Analytics"
  },
  {
    "id": 3,
    "name": "Apache NiFi",
    "typeId": 1,
    "type": "Application",
    "solutionId": 1,
    "solution": "Analytics"
  },
  {
    "id": 4,
    "name": "Bex Analyzer",
    "typeId": 1,
    "type": "Application",
    "solutionId": 1,
    "solution": "Analytics"
  },
  {
    "id": 5,
    "name": "Confluent",
    "typeId": 1,
    "type": "Application",
    "solutionId": 1,
    "solution": "Analytics"
  },
  {
    "id": 6,
    "name": "Crystal Reports ",
    "typeId": 1,
    "type": "Application",
    "solutionId": 1,
    "solution": "Analytics"
  },
  {
    "id": 7,
    "name": "Data Strategy and Information Management",
    "typeId": 1,
    "type": "Application",
    "solutionId": 1,
    "solution": "Analytics"
  },
  {
    "id": 8,
    "name": "iWay Software",
    "typeId": 1,
    "type": "Application",
    "solutionId": 1,
    "solution": "Analytics"
  },
  {
    "id": 9,
    "name": "Jasper",
    "typeId": 1,
    "type": "Application",
    "solutionId": 1,
    "solution": "Analytics"
  },
  {
    "id": 10,
    "name": "Microsoft Flow",
    "typeId": 1,
    "type": "Application",
    "solutionId": 1,
    "solution": "Analytics"
  },
  {
    "id": 11,
    "name": "Microsoft Power BI",
    "typeId": 1,
    "type": "Application",
    "solutionId": 1,
    "solution": "Analytics"
  },
  {
    "id": 12,
    "name": "Microsoft PowerApps",
    "typeId": 1,
    "type": "Application",
    "solutionId": 1,
    "solution": "Analytics"
  },
  {
    "id": 13,
    "name": "Microstrategy",
    "typeId": 1,
    "type": "Application",
    "solutionId": 1,
    "solution": "Analytics"
  },
  {
    "id": 14,
    "name": "Oracle Data Integrator (ODI)",
    "typeId": 1,
    "type": "Application",
    "solutionId": 1,
    "solution": "Analytics"
  },
  {
    "id": 15,
    "name": "Oracle Warehouse Builder (OWB)",
    "typeId": 1,
    "type": "Application",
    "solutionId": 1,
    "solution": "Analytics"
  },
  {
    "id": 16,
    "name": "SAP Business Intelligence",
    "typeId": 1,
    "type": "Application",
    "solutionId": 1,
    "solution": "Analytics"
  },
  {
    "id": 17,
    "name": "SQL Server Reporting Services (SSRS)",
    "typeId": 1,
    "type": "Application",
    "solutionId": 1,
    "solution": "Analytics"
  },
  {
    "id": 18,
    "name": "Sybase ETL",
    "typeId": 1,
    "type": "Application",
    "solutionId": 1,
    "solution": "Analytics"
  },
  {
    "id": 19,
    "name": "Tableau",
    "typeId": 1,
    "type": "Application",
    "solutionId": 1,
    "solution": "Analytics"
  },
  {
    "id": 20,
    "name": "Talend Integrator Suite",
    "typeId": 1,
    "type": "Application",
    "solutionId": 1,
    "solution": "Analytics"
  },
  {
    "id": 178,
    "name": "Xcode4",
    "typeId": 1,
    "type": "Application",
    "solutionId": 3,
    "solution": "Technology"
  },
  {
    "id": 94,
    "name": "Adobe Acrobat DC",
    "typeId": 1,
    "type": "Application ",
    "solutionId": 3,
    "solution": "Technology"
  },
  {
    "id": 95,
    "name": "Adobe After Effects",
    "typeId": 1,
    "type": "Application ",
    "solutionId": 3,
    "solution": "Technology"
  },
  {
    "id": 96,
    "name": "Adobe Business Catalyst",
    "typeId": 1,
    "type": "Application ",
    "solutionId": 3,
    "solution": "Technology"
  },
  {
    "id": 97,
    "name": "Adobe ColdFusion",
    "typeId": 1,
    "type": "Application ",
    "solutionId": 3,
    "solution": "Technology"
  },
  {
    "id": 98,
    "name": "Adobe Fireworks",
    "typeId": 1,
    "type": "Application ",
    "solutionId": 3,
    "solution": "Technology"
  },
  {
    "id": 99,
    "name": "Adobe Illustrator",
    "typeId": 1,
    "type": "Application ",
    "solutionId": 3,
    "solution": "Technology"
  },
  {
    "id": 100,
    "name": "Adobe InDesign",
    "typeId": 1,
    "type": "Application ",
    "solutionId": 3,
    "solution": "Technology"
  },
  {
    "id": 101,
    "name": "Adobe Photoshop",
    "typeId": 1,
    "type": "Application ",
    "solutionId": 3,
    "solution": "Technology"
  },
  {
    "id": 102,
    "name": "Adobe Premiere Pro",
    "typeId": 1,
    "type": "Application ",
    "solutionId": 3,
    "solution": "Technology"
  },
  {
    "id": 103,
    "name": "ALM (Application Life Cycle)",
    "typeId": 1,
    "type": "Application ",
    "solutionId": 3,
    "solution": "Technology"
  },
  {
    "id": 104,
    "name": "Balsamiq",
    "typeId": 1,
    "type": "Application ",
    "solutionId": 3,
    "solution": "Technology"
  },
  {
    "id": 105,
    "name": "Draw.io",
    "typeId": 1,
    "type": "Application ",
    "solutionId": 3,
    "solution": "Technology"
  },
  {
    "id": 106,
    "name": "Google Analytics",
    "typeId": 1,
    "type": "Application ",
    "solutionId": 3,
    "solution": "Technology"
  },
  {
    "id": 107,
    "name": "GWT",
    "typeId": 1,
    "type": "Application ",
    "solutionId": 3,
    "solution": "Technology"
  },
  {
    "id": 108,
    "name": "Hubspot CRM",
    "typeId": 1,
    "type": "Application ",
    "solutionId": 3,
    "solution": "Technology"
  },
  {
    "id": 109,
    "name": "iNavigator",
    "typeId": 1,
    "type": "Application ",
    "solutionId": 3,
    "solution": "Technology"
  },
  {
    "id": 110,
    "name": "Insightly",
    "typeId": 1,
    "type": "Application ",
    "solutionId": 3,
    "solution": "Technology"
  },
  {
    "id": 111,
    "name": "JIRA",
    "typeId": 1,
    "type": "Application ",
    "solutionId": 3,
    "solution": "Technology"
  },
  {
    "id": 112,
    "name": "Macromedia Dreamweaver",
    "typeId": 1,
    "type": "Application ",
    "solutionId": 3,
    "solution": "Technology"
  },
  {
    "id": 113,
    "name": "Microsoft Delve",
    "typeId": 1,
    "type": "Application ",
    "solutionId": 3,
    "solution": "Technology"
  },
  {
    "id": 114,
    "name": "Microsoft Dynamics 365",
    "typeId": 1,
    "type": "Application ",
    "solutionId": 3,
    "solution": "Technology"
  },
  {
    "id": 115,
    "name": "Microsoft Excel",
    "typeId": 1,
    "type": "Application ",
    "solutionId": 3,
    "solution": "Technology"
  },
  {
    "id": 116,
    "name": "Microsoft Forms",
    "typeId": 1,
    "type": "Application ",
    "solutionId": 3,
    "solution": "Technology"
  },
  {
    "id": 117,
    "name": "Microsoft Message Queueing (MSMQ)",
    "typeId": 1,
    "type": "Application ",
    "solutionId": 3,
    "solution": "Technology"
  },
  {
    "id": 118,
    "name": "Microsoft Office 365 Administration",
    "typeId": 1,
    "type": "Application ",
    "solutionId": 3,
    "solution": "Technology"
  },
  {
    "id": 119,
    "name": "Microsoft OneDrive",
    "typeId": 1,
    "type": "Application ",
    "solutionId": 3,
    "solution": "Technology"
  },
  {
    "id": 120,
    "name": "Microsoft OneNote",
    "typeId": 1,
    "type": "Application ",
    "solutionId": 3,
    "solution": "Technology"
  },
  {
    "id": 121,
    "name": "Microsoft Outlook",
    "typeId": 1,
    "type": "Application ",
    "solutionId": 3,
    "solution": "Technology"
  },
  {
    "id": 122,
    "name": "Microsoft Planner",
    "typeId": 1,
    "type": "Application ",
    "solutionId": 3,
    "solution": "Technology"
  },
  {
    "id": 123,
    "name": "Microsoft PowerPoint",
    "typeId": 1,
    "type": "Application ",
    "solutionId": 3,
    "solution": "Technology"
  },
  {
    "id": 124,
    "name": "Microsoft Project",
    "typeId": 1,
    "type": "Application ",
    "solutionId": 3,
    "solution": "Technology"
  },
  {
    "id": 125,
    "name": "Microsoft SharePoint",
    "typeId": 1,
    "type": "Application ",
    "solutionId": 3,
    "solution": "Technology"
  },
  {
    "id": 126,
    "name": "Microsoft Sway",
    "typeId": 1,
    "type": "Application ",
    "solutionId": 3,
    "solution": "Technology"
  },
  {
    "id": 127,
    "name": "Microsoft Tasks",
    "typeId": 1,
    "type": "Application ",
    "solutionId": 3,
    "solution": "Technology"
  },
  {
    "id": 128,
    "name": "Microsoft Teams",
    "typeId": 1,
    "type": "Application ",
    "solutionId": 3,
    "solution": "Technology"
  },
  {
    "id": 129,
    "name": "Microsoft Test Manager",
    "typeId": 1,
    "type": "Application ",
    "solutionId": 3,
    "solution": "Technology"
  },
  {
    "id": 130,
    "name": "Microsoft Visio",
    "typeId": 1,
    "type": "Application ",
    "solutionId": 3,
    "solution": "Technology"
  },
  {
    "id": 131,
    "name": "Microsoft Word",
    "typeId": 1,
    "type": "Application ",
    "solutionId": 3,
    "solution": "Technology"
  },
  {
    "id": 132,
    "name": "Microsoft Yammer",
    "typeId": 1,
    "type": "Application ",
    "solutionId": 3,
    "solution": "Technology"
  },
  {
    "id": 133,
    "name": "MQ Series",
    "typeId": 1,
    "type": "Application ",
    "solutionId": 3,
    "solution": "Technology"
  },
  {
    "id": 134,
    "name": "MySQL",
    "typeId": 1,
    "type": "Application ",
    "solutionId": 3,
    "solution": "Technology"
  },
  {
    "id": 135,
    "name": "NPM",
    "typeId": 1,
    "type": "Application ",
    "solutionId": 3,
    "solution": "Technology"
  },
  {
    "id": 136,
    "name": "OpenMP",
    "typeId": 1,
    "type": "Application ",
    "solutionId": 3,
    "solution": "Technology"
  },
  {
    "id": 137,
    "name": "OpenText",
    "typeId": 1,
    "type": "Application ",
    "solutionId": 3,
    "solution": "Technology"
  },
  {
    "id": 138,
    "name": "Pentaho",
    "typeId": 1,
    "type": "Application ",
    "solutionId": 3,
    "solution": "Technology"
  },
  {
    "id": 139,
    "name": "PGP",
    "typeId": 1,
    "type": "Application ",
    "solutionId": 3,
    "solution": "Technology"
  },
  {
    "id": 140,
    "name": "Postman",
    "typeId": 1,
    "type": "Application ",
    "solutionId": 3,
    "solution": "Technology"
  },
  {
    "id": 141,
    "name": "Qlik",
    "typeId": 1,
    "type": "Application ",
    "solutionId": 3,
    "solution": "Technology"
  },
  {
    "id": 142,
    "name": "Rational ClearCase",
    "typeId": 1,
    "type": "Application ",
    "solutionId": 3,
    "solution": "Technology"
  },
  {
    "id": 143,
    "name": "Rational ClearQuest",
    "typeId": 1,
    "type": "Application ",
    "solutionId": 3,
    "solution": "Technology"
  },
  {
    "id": 144,
    "name": "React",
    "typeId": 1,
    "type": "Application ",
    "solutionId": 3,
    "solution": "Technology"
  },
  {
    "id": 145,
    "name": "Redux",
    "typeId": 1,
    "type": "Application ",
    "solutionId": 3,
    "solution": "Technology"
  },
  {
    "id": 146,
    "name": "Replicate1",
    "typeId": 1,
    "type": "Application ",
    "solutionId": 3,
    "solution": "Technology"
  },
  {
    "id": 147,
    "name": "ReSharper",
    "typeId": 1,
    "type": "Application ",
    "solutionId": 3,
    "solution": "Technology"
  },
  {
    "id": 148,
    "name": "REST and SOAP Web Services",
    "typeId": 1,
    "type": "Application ",
    "solutionId": 3,
    "solution": "Technology"
  },
  {
    "id": 149,
    "name": "SalesForce",
    "typeId": 1,
    "type": "Application ",
    "solutionId": 3,
    "solution": "Technology"
  },
  {
    "id": 150,
    "name": "SAN Administration",
    "typeId": 1,
    "type": "Application ",
    "solutionId": 3,
    "solution": "Technology"
  },
  {
    "id": 151,
    "name": "SAP ERP Systems",
    "typeId": 1,
    "type": "Application ",
    "solutionId": 3,
    "solution": "Technology"
  },
  {
    "id": 152,
    "name": "Smartsheet",
    "typeId": 1,
    "type": "Application ",
    "solutionId": 3,
    "solution": "Technology"
  },
  {
    "id": 153,
    "name": "SolarWinds",
    "typeId": 1,
    "type": "Application ",
    "solutionId": 3,
    "solution": "Technology"
  },
  {
    "id": 154,
    "name": "StatTools",
    "typeId": 1,
    "type": "Application ",
    "solutionId": 3,
    "solution": "Technology"
  },
  {
    "id": 155,
    "name": "Struts",
    "typeId": 1,
    "type": "Application ",
    "solutionId": 3,
    "solution": "Technology"
  },
  {
    "id": 156,
    "name": "Sublime",
    "typeId": 1,
    "type": "Application ",
    "solutionId": 3,
    "solution": "Technology"
  },
  {
    "id": 157,
    "name": "Subversion",
    "typeId": 1,
    "type": "Application ",
    "solutionId": 3,
    "solution": "Technology"
  },
  {
    "id": 158,
    "name": "Sungard Banner",
    "typeId": 1,
    "type": "Application ",
    "solutionId": 3,
    "solution": "Technology"
  },
  {
    "id": 159,
    "name": "SVN",
    "typeId": 1,
    "type": "Application ",
    "solutionId": 3,
    "solution": "Technology"
  },
  {
    "id": 160,
    "name": "Teradata",
    "typeId": 1,
    "type": "Application ",
    "solutionId": 3,
    "solution": "Technology"
  },
  {
    "id": 161,
    "name": "TFS",
    "typeId": 1,
    "type": "Application ",
    "solutionId": 3,
    "solution": "Technology"
  },
  {
    "id": 162,
    "name": "TimeCamp",
    "typeId": 1,
    "type": "Application ",
    "solutionId": 3,
    "solution": "Technology"
  },
  {
    "id": 163,
    "name": "Tivoli Storage Manager Administration",
    "typeId": 1,
    "type": "Application ",
    "solutionId": 3,
    "solution": "Technology"
  },
  {
    "id": 164,
    "name": "Toad",
    "typeId": 1,
    "type": "Application ",
    "solutionId": 3,
    "solution": "Technology"
  },
  {
    "id": 165,
    "name": "TortoiseGit ",
    "typeId": 1,
    "type": "Application ",
    "solutionId": 3,
    "solution": "Technology"
  },
  {
    "id": 166,
    "name": "Trello",
    "typeId": 1,
    "type": "Application ",
    "solutionId": 3,
    "solution": "Technology"
  },
  {
    "id": 167,
    "name": "Valo",
    "typeId": 1,
    "type": "Application ",
    "solutionId": 3,
    "solution": "Technology"
  },
  {
    "id": 168,
    "name": "Vault",
    "typeId": 1,
    "type": "Application ",
    "solutionId": 3,
    "solution": "Technology"
  },
  {
    "id": 169,
    "name": "VersionOne",
    "typeId": 1,
    "type": "Application ",
    "solutionId": 3,
    "solution": "Technology"
  },
  {
    "id": 170,
    "name": "Vmware ESX",
    "typeId": 1,
    "type": "Application ",
    "solutionId": 3,
    "solution": "Technology"
  },
  {
    "id": 171,
    "name": "Vmware ESXi",
    "typeId": 1,
    "type": "Application ",
    "solutionId": 3,
    "solution": "Technology"
  },
  {
    "id": 172,
    "name": "Vmware vsphere",
    "typeId": 1,
    "type": "Application ",
    "solutionId": 3,
    "solution": "Technology"
  },
  {
    "id": 173,
    "name": "Vmware Workspace ONE",
    "typeId": 1,
    "type": "Application ",
    "solutionId": 3,
    "solution": "Technology"
  },
  {
    "id": 174,
    "name": "Websphere, Weblogic",
    "typeId": 1,
    "type": "Application ",
    "solutionId": 3,
    "solution": "Technology"
  },
  {
    "id": 175,
    "name": "Wireshark",
    "typeId": 1,
    "type": "Application ",
    "solutionId": 3,
    "solution": "Technology"
  },
  {
    "id": 176,
    "name": "WordPress",
    "typeId": 1,
    "type": "Application ",
    "solutionId": 3,
    "solution": "Technology"
  },
  {
    "id": 177,
    "name": "Workfront",
    "typeId": 1,
    "type": "Application ",
    "solutionId": 3,
    "solution": "Technology"
  },
  {
    "id": 179,
    "name": "ZoHo",
    "typeId": 1,
    "type": "Application ",
    "solutionId": 3,
    "solution": "Technology"
  },
  {
    "id": 21,
    "name": "Oracle",
    "typeId": 2,
    "type": "Database",
    "solutionId": 1,
    "solution": "Analytics"
  },
  {
    "id": 180,
    "name": "DB2 ",
    "typeId": 2,
    "type": "Database",
    "solutionId": 3,
    "solution": "Technology"
  },
  {
    "id": 182,
    "name": "Microsoft Access",
    "typeId": 2,
    "type": "Database",
    "solutionId": 3,
    "solution": "Technology"
  },
  {
    "id": 183,
    "name": "Microsoft SQL Server",
    "typeId": 2,
    "type": "Database",
    "solutionId": 3,
    "solution": "Technology"
  },
  {
    "id": 184,
    "name": "Oracle",
    "typeId": 2,
    "type": "Database",
    "solutionId": 3,
    "solution": "Technology"
  },
  {
    "id": 185,
    "name": "Oracle Database Administration 10g",
    "typeId": 2,
    "type": "Database",
    "solutionId": 3,
    "solution": "Technology"
  },
  {
    "id": 186,
    "name": "Oracle Database Administration 11g",
    "typeId": 2,
    "type": "Database",
    "solutionId": 3,
    "solution": "Technology"
  },
  {
    "id": 187,
    "name": "Oracle Database Administration 6",
    "typeId": 2,
    "type": "Database",
    "solutionId": 3,
    "solution": "Technology"
  },
  {
    "id": 188,
    "name": "Oracle Database Administration 7",
    "typeId": 2,
    "type": "Database",
    "solutionId": 3,
    "solution": "Technology"
  },
  {
    "id": 189,
    "name": "Oracle Database Administration 8i",
    "typeId": 2,
    "type": "Database",
    "solutionId": 3,
    "solution": "Technology"
  },
  {
    "id": 190,
    "name": "Oracle Database Administration 9i",
    "typeId": 2,
    "type": "Database",
    "solutionId": 3,
    "solution": "Technology"
  },
  {
    "id": 191,
    "name": "Oracle Financials Release 10.7",
    "typeId": 2,
    "type": "Database",
    "solutionId": 3,
    "solution": "Technology"
  },
  {
    "id": 192,
    "name": "Oracle Financials Release 11",
    "typeId": 2,
    "type": "Database",
    "solutionId": 3,
    "solution": "Technology"
  },
  {
    "id": 193,
    "name": "PL/Sql",
    "typeId": 2,
    "type": "Database",
    "solutionId": 3,
    "solution": "Technology"
  },
  {
    "id": 194,
    "name": "SQL Server Database Tuning Advisor",
    "typeId": 2,
    "type": "Database",
    "solutionId": 3,
    "solution": "Technology"
  },
  {
    "id": 195,
    "name": "SQL Server Enterprise Manage",
    "typeId": 2,
    "type": "Database",
    "solutionId": 3,
    "solution": "Technology"
  },
  {
    "id": 196,
    "name": "SQL Server Integration Services (SSIS)",
    "typeId": 2,
    "type": "Database",
    "solutionId": 3,
    "solution": "Technology"
  },
  {
    "id": 197,
    "name": "SQL Server Profile",
    "typeId": 2,
    "type": "Database",
    "solutionId": 3,
    "solution": "Technology"
  },
  {
    "id": 198,
    "name": "SQL Server Reporting Services (SSRS)",
    "typeId": 2,
    "type": "Database",
    "solutionId": 3,
    "solution": "Technology"
  },
  {
    "id": 199,
    "name": "Sql*Loader",
    "typeId": 2,
    "type": "Database",
    "solutionId": 3,
    "solution": "Technology"
  },
  {
    "id": 200,
    "name": "Sql*Plus",
    "typeId": 2,
    "type": "Database",
    "solutionId": 3,
    "solution": "Technology"
  },
  {
    "id": 201,
    "name": "SSMS",
    "typeId": 2,
    "type": "Database",
    "solutionId": 3,
    "solution": "Technology"
  },
  {
    "id": 181,
    "name": "IMS",
    "typeId": 2,
    "type": "Database ",
    "solutionId": 3,
    "solution": "Technology"
  },
  {
    "id": 38,
    "name": "Agile",
    "typeId": 3,
    "type": "Development Methodology",
    "solutionId": 2,
    "solution": "Management"
  },
  {
    "id": 39,
    "name": "Extreme Programming (XP)",
    "typeId": 3,
    "type": "Development Methodology",
    "solutionId": 2,
    "solution": "Management"
  },
  {
    "id": 40,
    "name": "Kanban",
    "typeId": 3,
    "type": "Development Methodology",
    "solutionId": 2,
    "solution": "Management"
  },
  {
    "id": 41,
    "name": "Scrum",
    "typeId": 3,
    "type": "Development Methodology",
    "solutionId": 2,
    "solution": "Management"
  },
  {
    "id": 42,
    "name": "Scrumban",
    "typeId": 3,
    "type": "Development Methodology",
    "solutionId": 2,
    "solution": "Management"
  },
  {
    "id": 43,
    "name": "Waterfall (Software Development Life Cycle)",
    "typeId": 3,
    "type": "Development Methodology",
    "solutionId": 2,
    "solution": "Management"
  },
  {
    "id": 202,
    "name": "IBM DS",
    "typeId": 4,
    "type": "Disc System",
    "solutionId": 3,
    "solution": "Technology"
  },
  {
    "id": 203,
    "name": "IBM ESS",
    "typeId": 4,
    "type": "Disc System",
    "solutionId": 3,
    "solution": "Technology"
  },
  {
    "id": 22,
    "name": "Adeptia ETL",
    "typeId": 5,
    "type": "ETL Tool",
    "solutionId": 1,
    "solution": "Analytics"
  },
  {
    "id": 23,
    "name": "Business Objects Data Integrator (BODI)",
    "typeId": 5,
    "type": "ETL Tool",
    "solutionId": 1,
    "solution": "Analytics"
  },
  {
    "id": 24,
    "name": "Clover ETL",
    "typeId": 5,
    "type": "ETL Tool",
    "solutionId": 1,
    "solution": "Analytics"
  },
  {
    "id": 25,
    "name": "Cognos",
    "typeId": 5,
    "type": "ETL Tool",
    "solutionId": 1,
    "solution": "Analytics"
  },
  {
    "id": 26,
    "name": "DBSoftLab",
    "typeId": 5,
    "type": "ETL Tool",
    "solutionId": 1,
    "solution": "Analytics"
  },
  {
    "id": 27,
    "name": "Informatica PowerCenter",
    "typeId": 5,
    "type": "ETL Tool",
    "solutionId": 1,
    "solution": "Analytics"
  },
  {
    "id": 28,
    "name": "Pentaho Data Integration (Kettle)",
    "typeId": 5,
    "type": "ETL Tool",
    "solutionId": 1,
    "solution": "Analytics"
  },
  {
    "id": 29,
    "name": "Pervasive ETL",
    "typeId": 5,
    "type": "ETL Tool",
    "solutionId": 1,
    "solution": "Analytics"
  },
  {
    "id": 30,
    "name": "Query Designer",
    "typeId": 5,
    "type": "ETL Tool",
    "solutionId": 1,
    "solution": "Analytics"
  },
  {
    "id": 31,
    "name": "SAS ETL",
    "typeId": 5,
    "type": "ETL Tool",
    "solutionId": 1,
    "solution": "Analytics"
  },
  {
    "id": 32,
    "name": "SQL Server Integration Services (SSIS)",
    "typeId": 5,
    "type": "ETL Tool",
    "solutionId": 1,
    "solution": "Analytics"
  },
  {
    "id": 33,
    "name": "System Integration ",
    "typeId": 5,
    "type": "ETL Tool",
    "solutionId": 1,
    "solution": "Analytics"
  },
  {
    "id": 204,
    "name": "ASP.NET Web API",
    "typeId": 6,
    "type": "Framework",
    "solutionId": 3,
    "solution": "Technology"
  },
  {
    "id": 205,
    "name": "Bootstrap",
    "typeId": 6,
    "type": "Framework",
    "solutionId": 3,
    "solution": "Technology"
  },
  {
    "id": 206,
    "name": "iBATIS",
    "typeId": 6,
    "type": "Framework",
    "solutionId": 3,
    "solution": "Technology"
  },
  {
    "id": 207,
    "name": "IPSec (Internet Protocol Security)",
    "typeId": 6,
    "type": "Framework",
    "solutionId": 3,
    "solution": "Technology"
  },
  {
    "id": 208,
    "name": "Kendo UI",
    "typeId": 6,
    "type": "Framework",
    "solutionId": 3,
    "solution": "Technology"
  },
  {
    "id": 209,
    "name": "Materialize",
    "typeId": 6,
    "type": "Framework",
    "solutionId": 3,
    "solution": "Technology"
  },
  {
    "id": 210,
    "name": "MEF (Managed Extensibility Framework)",
    "typeId": 6,
    "type": "Framework",
    "solutionId": 3,
    "solution": "Technology"
  },
  {
    "id": 211,
    "name": "Microsoft Entity Framework",
    "typeId": 6,
    "type": "Framework",
    "solutionId": 3,
    "solution": "Technology"
  },
  {
    "id": 212,
    "name": "Moq",
    "typeId": 6,
    "type": "Framework",
    "solutionId": 3,
    "solution": "Technology"
  },
  {
    "id": 213,
    "name": "MVC",
    "typeId": 6,
    "type": "Framework",
    "solutionId": 3,
    "solution": "Technology"
  },
  {
    "id": 214,
    "name": "Nunit",
    "typeId": 6,
    "type": "Framework",
    "solutionId": 3,
    "solution": "Technology"
  },
  {
    "id": 215,
    "name": "PowerShell",
    "typeId": 6,
    "type": "Framework",
    "solutionId": 3,
    "solution": "Technology"
  },
  {
    "id": 216,
    "name": "Rhino Mocks",
    "typeId": 6,
    "type": "Framework",
    "solutionId": 3,
    "solution": "Technology"
  },
  {
    "id": 217,
    "name": "WCF",
    "typeId": 6,
    "type": "Framework",
    "solutionId": 3,
    "solution": "Technology"
  },
  {
    "id": 218,
    "name": "Eclipse",
    "typeId": 7,
    "type": "Integrated Development Environment (IDE)",
    "solutionId": 3,
    "solution": "Technology"
  },
  {
    "id": 219,
    "name": "Visual Studio",
    "typeId": 7,
    "type": "Integrated Development Environment (IDE)",
    "solutionId": 3,
    "solution": "Technology"
  },
  {
    "id": 44,
    "name": "Accounts Payable",
    "typeId": 8,
    "type": "Knowledge Area",
    "solutionId": 2,
    "solution": "Management"
  },
  {
    "id": 45,
    "name": "Billing and Account Receivable",
    "typeId": 8,
    "type": "Knowledge Area",
    "solutionId": 2,
    "solution": "Management"
  },
  {
    "id": 46,
    "name": "Cash Management",
    "typeId": 8,
    "type": "Knowledge Area",
    "solutionId": 2,
    "solution": "Management"
  },
  {
    "id": 47,
    "name": "Community Health and Benefit",
    "typeId": 8,
    "type": "Knowledge Area",
    "solutionId": 2,
    "solution": "Management"
  },
  {
    "id": 48,
    "name": "Diversity and Inclusion",
    "typeId": 8,
    "type": "Knowledge Area",
    "solutionId": 2,
    "solution": "Management"
  },
  {
    "id": 49,
    "name": "Facilities Management",
    "typeId": 8,
    "type": "Knowledge Area",
    "solutionId": 2,
    "solution": "Management"
  },
  {
    "id": 50,
    "name": "Patient Experience ",
    "typeId": 8,
    "type": "Knowledge Area",
    "solutionId": 2,
    "solution": "Management"
  },
  {
    "id": 51,
    "name": "Population Health Management",
    "typeId": 8,
    "type": "Knowledge Area",
    "solutionId": 2,
    "solution": "Management"
  },
  {
    "id": 52,
    "name": "Revenue Cycle Management",
    "typeId": 8,
    "type": "Knowledge Area",
    "solutionId": 2,
    "solution": "Management"
  },
  {
    "id": 53,
    "name": "Warehouse Management",
    "typeId": 8,
    "type": "Knowledge Area",
    "solutionId": 2,
    "solution": "Management"
  },
  {
    "id": 220,
    "name": "Autofac",
    "typeId": 9,
    "type": "Library",
    "solutionId": 3,
    "solution": "Technology"
  },
  {
    "id": 221,
    "name": "SignalR",
    "typeId": 9,
    "type": "Library",
    "solutionId": 3,
    "solution": "Technology"
  },
  {
    "id": 222,
    "name": "WinForms",
    "typeId": 9,
    "type": "Library",
    "solutionId": 3,
    "solution": "Technology"
  },
  {
    "id": 223,
    "name": "DHCP (Dynamic Host Configuration Protocol)",
    "typeId": 10,
    "type": "Network Protocol",
    "solutionId": 3,
    "solution": "Technology"
  },
  {
    "id": 224,
    "name": "Frame Relay",
    "typeId": 10,
    "type": "Network Protocol",
    "solutionId": 3,
    "solution": "Technology"
  },
  {
    "id": 225,
    "name": "FTP (File Transfer Protocol) ",
    "typeId": 10,
    "type": "Network Protocol",
    "solutionId": 3,
    "solution": "Technology"
  },
  {
    "id": 226,
    "name": "ISDN (Integrated Services Digital Network)",
    "typeId": 10,
    "type": "Network Protocol",
    "solutionId": 3,
    "solution": "Technology"
  },
  {
    "id": 227,
    "name": "Kerberos",
    "typeId": 10,
    "type": "Network Protocol",
    "solutionId": 3,
    "solution": "Technology"
  },
  {
    "id": 228,
    "name": "SFTP",
    "typeId": 10,
    "type": "Network Protocol",
    "solutionId": 3,
    "solution": "Technology"
  },
  {
    "id": 229,
    "name": "AS/400",
    "typeId": 11,
    "type": "Operating System",
    "solutionId": 3,
    "solution": "Technology"
  },
  {
    "id": 230,
    "name": "Blackberry Enterprise Server",
    "typeId": 11,
    "type": "Operating System",
    "solutionId": 3,
    "solution": "Technology"
  },
  {
    "id": 231,
    "name": "FalconView",
    "typeId": 11,
    "type": "Operating System",
    "solutionId": 3,
    "solution": "Technology"
  },
  {
    "id": 232,
    "name": "HP-UX (Hewlett Packard Unix)",
    "typeId": 11,
    "type": "Operating System",
    "solutionId": 3,
    "solution": "Technology"
  },
  {
    "id": 233,
    "name": "IBM AIX (Advanced Interactive eXecutive)",
    "typeId": 11,
    "type": "Operating System",
    "solutionId": 3,
    "solution": "Technology"
  },
  {
    "id": 234,
    "name": "Linux",
    "typeId": 11,
    "type": "Operating System",
    "solutionId": 3,
    "solution": "Technology"
  },
  {
    "id": 235,
    "name": "Solaris",
    "typeId": 11,
    "type": "Operating System",
    "solutionId": 3,
    "solution": "Technology"
  },
  {
    "id": 236,
    "name": "UNIX",
    "typeId": 11,
    "type": "Operating System",
    "solutionId": 3,
    "solution": "Technology"
  },
  {
    "id": 237,
    "name": "Avaya IP Office ",
    "typeId": 12,
    "type": "Phone System",
    "solutionId": 3,
    "solution": "Technology"
  },
  {
    "id": 238,
    "name": "AllRound PL/SQL Developer",
    "typeId": 13,
    "type": "Platform",
    "solutionId": 3,
    "solution": "Technology"
  },
  {
    "id": 239,
    "name": "Angular ",
    "typeId": 13,
    "type": "Platform",
    "solutionId": 3,
    "solution": "Technology"
  },
  {
    "id": 240,
    "name": "AngularJS",
    "typeId": 13,
    "type": "Platform",
    "solutionId": 3,
    "solution": "Technology"
  },
  {
    "id": 241,
    "name": "Apache Web Server",
    "typeId": 13,
    "type": "Platform",
    "solutionId": 3,
    "solution": "Technology"
  },
  {
    "id": 242,
    "name": "ASP.NET Webforms",
    "typeId": 13,
    "type": "Platform",
    "solutionId": 3,
    "solution": "Technology"
  },
  {
    "id": 243,
    "name": "Borland JBuilder",
    "typeId": 13,
    "type": "Platform",
    "solutionId": 3,
    "solution": "Technology"
  },
  {
    "id": 244,
    "name": "Bower ",
    "typeId": 13,
    "type": "Platform",
    "solutionId": 3,
    "solution": "Technology"
  },
  {
    "id": 245,
    "name": "Cadence EDA Design Suite",
    "typeId": 13,
    "type": "Platform",
    "solutionId": 3,
    "solution": "Technology"
  },
  {
    "id": 246,
    "name": "Channel Advisor",
    "typeId": 13,
    "type": "Platform",
    "solutionId": 3,
    "solution": "Technology"
  },
  {
    "id": 247,
    "name": "Cognos 8 BI Administration",
    "typeId": 13,
    "type": "Platform",
    "solutionId": 3,
    "solution": "Technology"
  },
  {
    "id": 248,
    "name": "EMC VNX Family",
    "typeId": 13,
    "type": "Platform",
    "solutionId": 3,
    "solution": "Technology"
  },
  {
    "id": 249,
    "name": "Firebase",
    "typeId": 13,
    "type": "Platform",
    "solutionId": 3,
    "solution": "Technology"
  },
  {
    "id": 250,
    "name": "GIMP",
    "typeId": 13,
    "type": "Platform",
    "solutionId": 3,
    "solution": "Technology"
  },
  {
    "id": 251,
    "name": "J2EE",
    "typeId": 13,
    "type": "Platform",
    "solutionId": 3,
    "solution": "Technology"
  },
  {
    "id": 252,
    "name": "jQuery",
    "typeId": 13,
    "type": "Platform",
    "solutionId": 3,
    "solution": "Technology"
  },
  {
    "id": 253,
    "name": "Leap Motion SDK",
    "typeId": 13,
    "type": "Platform",
    "solutionId": 3,
    "solution": "Technology"
  },
  {
    "id": 254,
    "name": "NuGet",
    "typeId": 13,
    "type": "Platform",
    "solutionId": 3,
    "solution": "Technology"
  },
  {
    "id": 255,
    "name": "Rainmaker",
    "typeId": 13,
    "type": "Platform",
    "solutionId": 3,
    "solution": "Technology"
  },
  {
    "id": 256,
    "name": "Shopify",
    "typeId": 13,
    "type": "Platform",
    "solutionId": 3,
    "solution": "Technology"
  },
  {
    "id": 54,
    "name": "Change Management",
    "typeId": 14,
    "type": "Process",
    "solutionId": 2,
    "solution": "Management"
  },
  {
    "id": 55,
    "name": "Lean",
    "typeId": 14,
    "type": "Process",
    "solutionId": 2,
    "solution": "Management"
  },
  {
    "id": 56,
    "name": "PRINCE2",
    "typeId": 14,
    "type": "Process",
    "solutionId": 2,
    "solution": "Management"
  },
  {
    "id": 57,
    "name": "Six Sigma",
    "typeId": 14,
    "type": "Process",
    "solutionId": 2,
    "solution": "Management"
  },
  {
    "id": 281,
    "name": "Objective-C",
    "typeId": 15,
    "type": "Programming Language",
    "solutionId": 3,
    "solution": "Technology"
  },
  {
    "id": 282,
    "name": "Pascal",
    "typeId": 15,
    "type": "Programming Language",
    "solutionId": 3,
    "solution": "Technology"
  },
  {
    "id": 283,
    "name": "Perl",
    "typeId": 15,
    "type": "Programming Language",
    "solutionId": 3,
    "solution": "Technology"
  },
  {
    "id": 284,
    "name": "PHP",
    "typeId": 15,
    "type": "Programming Language",
    "solutionId": 3,
    "solution": "Technology"
  },
  {
    "id": 285,
    "name": "Python",
    "typeId": 15,
    "type": "Programming Language",
    "solutionId": 3,
    "solution": "Technology"
  },
  {
    "id": 286,
    "name": "R ",
    "typeId": 15,
    "type": "Programming Language",
    "solutionId": 3,
    "solution": "Technology"
  },
  {
    "id": 287,
    "name": "Razor",
    "typeId": 15,
    "type": "Programming Language",
    "solutionId": 3,
    "solution": "Technology"
  },
  {
    "id": 288,
    "name": "Ruby",
    "typeId": 15,
    "type": "Programming Language",
    "solutionId": 3,
    "solution": "Technology"
  },
  {
    "id": 289,
    "name": "Sass",
    "typeId": 15,
    "type": "Programming Language",
    "solutionId": 3,
    "solution": "Technology"
  },
  {
    "id": 290,
    "name": "SQL",
    "typeId": 15,
    "type": "Programming Language",
    "solutionId": 3,
    "solution": "Technology"
  },
  {
    "id": 291,
    "name": "Swift",
    "typeId": 15,
    "type": "Programming Language",
    "solutionId": 3,
    "solution": "Technology"
  },
  {
    "id": 292,
    "name": "Transact-SQL",
    "typeId": 15,
    "type": "Programming Language",
    "solutionId": 3,
    "solution": "Technology"
  },
  {
    "id": 293,
    "name": "T-SQL",
    "typeId": 15,
    "type": "Programming Language",
    "solutionId": 3,
    "solution": "Technology"
  },
  {
    "id": 294,
    "name": "TypeScript",
    "typeId": 15,
    "type": "Programming Language",
    "solutionId": 3,
    "solution": "Technology"
  },
  {
    "id": 295,
    "name": "VB\\VBA",
    "typeId": 15,
    "type": "Programming Language",
    "solutionId": 3,
    "solution": "Technology"
  },
  {
    "id": 296,
    "name": "Visual Basic",
    "typeId": 15,
    "type": "Programming Language",
    "solutionId": 3,
    "solution": "Technology"
  },
  {
    "id": 297,
    "name": "Visual Basic.NET",
    "typeId": 15,
    "type": "Programming Language",
    "solutionId": 3,
    "solution": "Technology"
  },
  {
    "id": 298,
    "name": "XAML",
    "typeId": 15,
    "type": "Programming Language",
    "solutionId": 3,
    "solution": "Technology"
  },
  {
    "id": 299,
    "name": "XML",
    "typeId": 15,
    "type": "Programming Language",
    "solutionId": 3,
    "solution": "Technology"
  },
  {
    "id": 257,
    "name": "ActionScript 3",
    "typeId": 15,
    "type": "Programming Language ",
    "solutionId": 3,
    "solution": "Technology"
  },
  {
    "id": 258,
    "name": "AJAX (Asynchronous JavaScript and XML)",
    "typeId": 15,
    "type": "Programming Language ",
    "solutionId": 3,
    "solution": "Technology"
  },
  {
    "id": 259,
    "name": "ASP.NET",
    "typeId": 15,
    "type": "Programming Language ",
    "solutionId": 3,
    "solution": "Technology"
  },
  {
    "id": 260,
    "name": "Assembly Language",
    "typeId": 15,
    "type": "Programming Language ",
    "solutionId": 3,
    "solution": "Technology"
  },
  {
    "id": 261,
    "name": "Bash ",
    "typeId": 15,
    "type": "Programming Language ",
    "solutionId": 3,
    "solution": "Technology"
  },
  {
    "id": 262,
    "name": "C#",
    "typeId": 15,
    "type": "Programming Language ",
    "solutionId": 3,
    "solution": "Technology"
  },
  {
    "id": 263,
    "name": "C++",
    "typeId": 15,
    "type": "Programming Language ",
    "solutionId": 3,
    "solution": "Technology"
  },
  {
    "id": 264,
    "name": "CICS (Customer Information Control System)",
    "typeId": 15,
    "type": "Programming Language ",
    "solutionId": 3,
    "solution": "Technology"
  },
  {
    "id": 265,
    "name": "COBOL (Common Business-Oriented Language)",
    "typeId": 15,
    "type": "Programming Language ",
    "solutionId": 3,
    "solution": "Technology"
  },
  {
    "id": 266,
    "name": "CSS (Cascading Style Sheets)",
    "typeId": 15,
    "type": "Programming Language ",
    "solutionId": 3,
    "solution": "Technology"
  },
  {
    "id": 267,
    "name": "CSS3 (Cascading Style Sheets)",
    "typeId": 15,
    "type": "Programming Language ",
    "solutionId": 3,
    "solution": "Technology"
  },
  {
    "id": 268,
    "name": "DCL (Digital Command Language)",
    "typeId": 15,
    "type": "Programming Language ",
    "solutionId": 3,
    "solution": "Technology"
  },
  {
    "id": 269,
    "name": "ES6",
    "typeId": 15,
    "type": "Programming Language ",
    "solutionId": 3,
    "solution": "Technology"
  },
  {
    "id": 270,
    "name": "FORTRAN",
    "typeId": 15,
    "type": "Programming Language ",
    "solutionId": 3,
    "solution": "Technology"
  },
  {
    "id": 271,
    "name": "HTML",
    "typeId": 15,
    "type": "Programming Language ",
    "solutionId": 3,
    "solution": "Technology"
  },
  {
    "id": 272,
    "name": "HTML5",
    "typeId": 15,
    "type": "Programming Language ",
    "solutionId": 3,
    "solution": "Technology"
  },
  {
    "id": 273,
    "name": "Java",
    "typeId": 15,
    "type": "Programming Language ",
    "solutionId": 3,
    "solution": "Technology"
  },
  {
    "id": 274,
    "name": "JavaScript",
    "typeId": 15,
    "type": "Programming Language ",
    "solutionId": 3,
    "solution": "Technology"
  },
  {
    "id": 275,
    "name": "JCL (Job Control Language)",
    "typeId": 15,
    "type": "Programming Language ",
    "solutionId": 3,
    "solution": "Technology"
  },
  {
    "id": 276,
    "name": "JSON",
    "typeId": 15,
    "type": "Programming Language ",
    "solutionId": 3,
    "solution": "Technology"
  },
  {
    "id": 277,
    "name": "LINQ (Language-Integrated Query)",
    "typeId": 15,
    "type": "Programming Language ",
    "solutionId": 3,
    "solution": "Technology"
  },
  {
    "id": 278,
    "name": "Lisp",
    "typeId": 15,
    "type": "Programming Language ",
    "solutionId": 3,
    "solution": "Technology"
  },
  {
    "id": 279,
    "name": "Macro-11",
    "typeId": 15,
    "type": "Programming Language ",
    "solutionId": 3,
    "solution": "Technology"
  },
  {
    "id": 280,
    "name": "Matlab",
    "typeId": 15,
    "type": "Programming Language ",
    "solutionId": 3,
    "solution": "Technology"
  },
  {
    "id": 300,
    "name": "Active Directory",
    "typeId": 16,
    "type": "Service",
    "solutionId": 3,
    "solution": "Technology"
  },
  {
    "id": 301,
    "name": "WINS",
    "typeId": 16,
    "type": "Service",
    "solutionId": 3,
    "solution": "Technology"
  },
  {
    "id": 34,
    "name": "Data Warehousing ",
    "typeId": 17,
    "type": "Skill",
    "solutionId": 1,
    "solution": "Analytics"
  },
  {
    "id": 35,
    "name": "Information Server",
    "typeId": 17,
    "type": "Skill",
    "solutionId": 1,
    "solution": "Analytics"
  },
  {
    "id": 36,
    "name": "Integration Services",
    "typeId": 17,
    "type": "Skill",
    "solutionId": 1,
    "solution": "Analytics"
  },
  {
    "id": 37,
    "name": "Web Intelligence",
    "typeId": 17,
    "type": "Skill",
    "solutionId": 1,
    "solution": "Analytics"
  },
  {
    "id": 58,
    "name": "Academic Research and Writing",
    "typeId": 17,
    "type": "Skill",
    "solutionId": 2,
    "solution": "Management"
  },
  {
    "id": 59,
    "name": "Account Management",
    "typeId": 17,
    "type": "Skill",
    "solutionId": 2,
    "solution": "Management"
  },
  {
    "id": 60,
    "name": "Balanced Scorecards ",
    "typeId": 17,
    "type": "Skill",
    "solutionId": 2,
    "solution": "Management"
  },
  {
    "id": 61,
    "name": "Business Analysis ",
    "typeId": 17,
    "type": "Skill",
    "solutionId": 2,
    "solution": "Management"
  },
  {
    "id": 62,
    "name": "Business Strategy Development ",
    "typeId": 17,
    "type": "Skill",
    "solutionId": 2,
    "solution": "Management"
  },
  {
    "id": 63,
    "name": "Business Transformation",
    "typeId": 17,
    "type": "Skill",
    "solutionId": 2,
    "solution": "Management"
  },
  {
    "id": 64,
    "name": "Communication Strategy and Planning",
    "typeId": 17,
    "type": "Skill",
    "solutionId": 2,
    "solution": "Management"
  },
  {
    "id": 65,
    "name": "Contract Negotiations",
    "typeId": 17,
    "type": "Skill",
    "solutionId": 2,
    "solution": "Management"
  },
  {
    "id": 66,
    "name": "Customer Service",
    "typeId": 17,
    "type": "Skill",
    "solutionId": 2,
    "solution": "Management"
  },
  {
    "id": 67,
    "name": "Disaster Recovery",
    "typeId": 17,
    "type": "Skill",
    "solutionId": 2,
    "solution": "Management"
  },
  {
    "id": 68,
    "name": "Executive Coaching",
    "typeId": 17,
    "type": "Skill",
    "solutionId": 2,
    "solution": "Management"
  },
  {
    "id": 69,
    "name": "Facilitation ",
    "typeId": 17,
    "type": "Skill",
    "solutionId": 2,
    "solution": "Management"
  },
  {
    "id": 70,
    "name": "Financial Evaluation and Management",
    "typeId": 17,
    "type": "Skill",
    "solutionId": 2,
    "solution": "Management"
  },
  {
    "id": 71,
    "name": "Global Market Evaluation",
    "typeId": 17,
    "type": "Skill",
    "solutionId": 2,
    "solution": "Management"
  },
  {
    "id": 72,
    "name": "IT Strategy Development",
    "typeId": 17,
    "type": "Skill",
    "solutionId": 2,
    "solution": "Management"
  },
  {
    "id": 73,
    "name": "Organization Assessment Development",
    "typeId": 17,
    "type": "Skill",
    "solutionId": 2,
    "solution": "Management"
  },
  {
    "id": 74,
    "name": "Process Improvement",
    "typeId": 17,
    "type": "Skill",
    "solutionId": 2,
    "solution": "Management"
  },
  {
    "id": 75,
    "name": "Product Management ",
    "typeId": 17,
    "type": "Skill",
    "solutionId": 2,
    "solution": "Management"
  },
  {
    "id": 76,
    "name": "Program Management",
    "typeId": 17,
    "type": "Skill",
    "solutionId": 2,
    "solution": "Management"
  },
  {
    "id": 77,
    "name": "Project Management",
    "typeId": 17,
    "type": "Skill",
    "solutionId": 2,
    "solution": "Management"
  },
  {
    "id": 78,
    "name": "Risk Mitigation",
    "typeId": 17,
    "type": "Skill",
    "solutionId": 2,
    "solution": "Management"
  },
  {
    "id": 79,
    "name": "RFI or RFP Management ",
    "typeId": 17,
    "type": "Skill",
    "solutionId": 2,
    "solution": "Management"
  },
  {
    "id": 80,
    "name": "Role-Based Work",
    "typeId": 17,
    "type": "Skill",
    "solutionId": 2,
    "solution": "Management"
  },
  {
    "id": 81,
    "name": "Stakeholder Engagement and Activation",
    "typeId": 17,
    "type": "Skill",
    "solutionId": 2,
    "solution": "Management"
  },
  {
    "id": 82,
    "name": "Strategy Mapping",
    "typeId": 17,
    "type": "Skill",
    "solutionId": 2,
    "solution": "Management"
  },
  {
    "id": 83,
    "name": "Supply Chain Strategy",
    "typeId": 17,
    "type": "Skill",
    "solutionId": 2,
    "solution": "Management"
  },
  {
    "id": 84,
    "name": "SWOT Analysis",
    "typeId": 17,
    "type": "Skill",
    "solutionId": 2,
    "solution": "Management"
  },
  {
    "id": 85,
    "name": "Technical Recruiting",
    "typeId": 17,
    "type": "Skill",
    "solutionId": 2,
    "solution": "Management"
  },
  {
    "id": 86,
    "name": "Training Materials and Development ",
    "typeId": 17,
    "type": "Skill",
    "solutionId": 2,
    "solution": "Management"
  },
  {
    "id": 87,
    "name": "Training Delivery (Technical) ",
    "typeId": 17,
    "type": "Skill",
    "solutionId": 2,
    "solution": "Management"
  },
  {
    "id": 88,
    "name": "Training Delivery (Presentation) ",
    "typeId": 17,
    "type": "Skill",
    "solutionId": 2,
    "solution": "Management"
  },
  {
    "id": 89,
    "name": "User Adoption ",
    "typeId": 17,
    "type": "Skill",
    "solutionId": 2,
    "solution": "Management"
  },
  {
    "id": 90,
    "name": "Value Chain Optimization",
    "typeId": 17,
    "type": "Skill",
    "solutionId": 2,
    "solution": "Management"
  },
  {
    "id": 91,
    "name": "Vendor Selection ",
    "typeId": 17,
    "type": "Skill",
    "solutionId": 2,
    "solution": "Management"
  },
  {
    "id": 92,
    "name": "Workflow Improvement ",
    "typeId": 17,
    "type": "Skill",
    "solutionId": 2,
    "solution": "Management"
  },
  {
    "id": 302,
    "name": "Android Development",
    "typeId": 17,
    "type": "Skill",
    "solutionId": 3,
    "solution": "Technology"
  },
  {
    "id": 303,
    "name": "API Development ",
    "typeId": 17,
    "type": "Skill",
    "solutionId": 3,
    "solution": "Technology"
  },
  {
    "id": 304,
    "name": "API Testing",
    "typeId": 17,
    "type": "Skill",
    "solutionId": 3,
    "solution": "Technology"
  },
  {
    "id": 305,
    "name": "Application Development ",
    "typeId": 17,
    "type": "Skill",
    "solutionId": 3,
    "solution": "Technology"
  },
  {
    "id": 306,
    "name": "Automated Testing ",
    "typeId": 17,
    "type": "Skill",
    "solutionId": 3,
    "solution": "Technology"
  },
  {
    "id": 307,
    "name": "Database design ",
    "typeId": 17,
    "type": "Skill",
    "solutionId": 3,
    "solution": "Technology"
  },
  {
    "id": 308,
    "name": "DNS (Domain Name System)",
    "typeId": 17,
    "type": "Skill",
    "solutionId": 3,
    "solution": "Technology"
  },
  {
    "id": 309,
    "name": "Hardware configuration",
    "typeId": 17,
    "type": "Skill",
    "solutionId": 3,
    "solution": "Technology"
  },
  {
    "id": 310,
    "name": "Infrastructure ",
    "typeId": 17,
    "type": "Skill",
    "solutionId": 3,
    "solution": "Technology"
  },
  {
    "id": 311,
    "name": "IOS Development",
    "typeId": 17,
    "type": "Skill",
    "solutionId": 3,
    "solution": "Technology"
  },
  {
    "id": 312,
    "name": "JMETER Performance Testing",
    "typeId": 17,
    "type": "Skill",
    "solutionId": 3,
    "solution": "Technology"
  },
  {
    "id": 313,
    "name": "Microsoft CodedUI",
    "typeId": 17,
    "type": "Skill",
    "solutionId": 3,
    "solution": "Technology"
  },
  {
    "id": 314,
    "name": "MPI",
    "typeId": 17,
    "type": "Skill",
    "solutionId": 3,
    "solution": "Technology"
  },
  {
    "id": 315,
    "name": "MVX",
    "typeId": 17,
    "type": "Skill",
    "solutionId": 3,
    "solution": "Technology"
  },
  {
    "id": 316,
    "name": "Package Selection and Implementation ",
    "typeId": 17,
    "type": "Skill",
    "solutionId": 3,
    "solution": "Technology"
  },
  {
    "id": 317,
    "name": "Phone PBX and messaging",
    "typeId": 17,
    "type": "Skill",
    "solutionId": 3,
    "solution": "Technology"
  },
  {
    "id": 318,
    "name": "PPTP",
    "typeId": 17,
    "type": "Skill",
    "solutionId": 3,
    "solution": "Technology"
  },
  {
    "id": 319,
    "name": "QA",
    "typeId": 17,
    "type": "Skill",
    "solutionId": 3,
    "solution": "Technology"
  },
  {
    "id": 320,
    "name": "Systems Integration ",
    "typeId": 17,
    "type": "Skill",
    "solutionId": 3,
    "solution": "Technology"
  },
  {
    "id": 321,
    "name": "TCP/IP Networking",
    "typeId": 17,
    "type": "Skill",
    "solutionId": 3,
    "solution": "Technology"
  },
  {
    "id": 322,
    "name": "Test automation framework design",
    "typeId": 17,
    "type": "Skill",
    "solutionId": 3,
    "solution": "Technology"
  },
  {
    "id": 323,
    "name": "Test Script Development ",
    "typeId": 17,
    "type": "Skill",
    "solutionId": 3,
    "solution": "Technology"
  },
  {
    "id": 324,
    "name": "User Interface",
    "typeId": 17,
    "type": "Skill",
    "solutionId": 3,
    "solution": "Technology"
  },
  {
    "id": 325,
    "name": "VRML",
    "typeId": 17,
    "type": "Skill",
    "solutionId": 3,
    "solution": "Technology"
  },
  {
    "id": 326,
    "name": "Web Application Development ",
    "typeId": 17,
    "type": "Skill",
    "solutionId": 3,
    "solution": "Technology"
  },
  {
    "id": 327,
    "name": "ArcPlan Insight",
    "typeId": 18,
    "type": "Software",
    "solutionId": 3,
    "solution": "Technology"
  },
  {
    "id": 328,
    "name": "ASP.NET MVC ",
    "typeId": 18,
    "type": "Software",
    "solutionId": 3,
    "solution": "Technology"
  },
  {
    "id": 329,
    "name": "Atom ",
    "typeId": 18,
    "type": "Software",
    "solutionId": 3,
    "solution": "Technology"
  },
  {
    "id": 331,
    "name": "Confluence",
    "typeId": 18,
    "type": "Software",
    "solutionId": 3,
    "solution": "Technology"
  },
  {
    "id": 332,
    "name": "CorVu",
    "typeId": 18,
    "type": "Software",
    "solutionId": 3,
    "solution": "Technology"
  },
  {
    "id": 333,
    "name": "CVS (Concurrent Versions System)",
    "typeId": 18,
    "type": "Software",
    "solutionId": 3,
    "solution": "Technology"
  },
  {
    "id": 334,
    "name": "DATATRIEVE",
    "typeId": 18,
    "type": "Software",
    "solutionId": 3,
    "solution": "Technology"
  },
  {
    "id": 336,
    "name": "Fiddler",
    "typeId": 18,
    "type": "Software",
    "solutionId": 3,
    "solution": "Technology"
  },
  {
    "id": 337,
    "name": "GIT",
    "typeId": 18,
    "type": "Software",
    "solutionId": 3,
    "solution": "Technology"
  },
  {
    "id": 338,
    "name": "Hansoft",
    "typeId": 18,
    "type": "Software",
    "solutionId": 3,
    "solution": "Technology"
  },
  {
    "id": 339,
    "name": "HighJump",
    "typeId": 18,
    "type": "Software",
    "solutionId": 3,
    "solution": "Technology"
  },
  {
    "id": 340,
    "name": "HP Quality Center ",
    "typeId": 18,
    "type": "Software",
    "solutionId": 3,
    "solution": "Technology"
  },
  {
    "id": 341,
    "name": "Hyperion Essbase",
    "typeId": 18,
    "type": "Software",
    "solutionId": 3,
    "solution": "Technology"
  },
  {
    "id": 343,
    "name": "Informatica",
    "typeId": 18,
    "type": "Software",
    "solutionId": 3,
    "solution": "Technology"
  },
  {
    "id": 346,
    "name": "MEAN Stack",
    "typeId": 18,
    "type": "Software",
    "solutionId": 3,
    "solution": "Technology"
  },
  {
    "id": 330,
    "name": "Ceridian Dayforce",
    "typeId": 18,
    "type": "Software ",
    "solutionId": 3,
    "solution": "Technology"
  },
  {
    "id": 335,
    "name": "ERWin",
    "typeId": 18,
    "type": "Software ",
    "solutionId": 3,
    "solution": "Technology"
  },
  {
    "id": 342,
    "name": "IBM Domino",
    "typeId": 18,
    "type": "Software ",
    "solutionId": 3,
    "solution": "Technology"
  },
  {
    "id": 344,
    "name": "JDA Redprairie",
    "typeId": 18,
    "type": "Software ",
    "solutionId": 3,
    "solution": "Technology"
  },
  {
    "id": 345,
    "name": "Jenkins",
    "typeId": 18,
    "type": "Software ",
    "solutionId": 3,
    "solution": "Technology"
  },
  {
    "id": 347,
    "name": "WildFly (Formerly known as Jboss)",
    "typeId": 18,
    "type": "Software ",
    "solutionId": 3,
    "solution": "Technology"
  },
  {
    "id": 348,
    "name": "Brackets",
    "typeId": 19,
    "type": "Text Editor",
    "solutionId": 3,
    "solution": "Technology"
  },
  {
    "id": 93,
    "name": "General Ledger",
    "typeId": 20,
    "type": "Tool",
    "solutionId": 2,
    "solution": "Management"
  },
  {
    "id": 349,
    "name": "Gulp ",
    "typeId": 21,
    "type": "Toolkit",
    "solutionId": 3,
    "solution": "Technology"
  },
  {
    "id": 351,
    "name": "Microsoft Azure",
    "typeId": 22,
    "type": "Web Server",
    "solutionId": 3,
    "solution": "Technology"
  },
  {
    "id": 352,
    "name": "Microsoft Hyper-V, Virtual Server",
    "typeId": 22,
    "type": "Web Server",
    "solutionId": 3,
    "solution": "Technology"
  },
  {
    "id": 353,
    "name": "Microsoft IIS 7.0",
    "typeId": 22,
    "type": "Web Server",
    "solutionId": 3,
    "solution": "Technology"
  },
  {
    "id": 354,
    "name": "Microsoft IIS 7.5",
    "typeId": 22,
    "type": "Web Server",
    "solutionId": 3,
    "solution": "Technology"
  },
  {
    "id": 355,
    "name": "Microsoft IIS 8.0",
    "typeId": 22,
    "type": "Web Server",
    "solutionId": 3,
    "solution": "Technology"
  },
  {
    "id": 356,
    "name": "Node.js",
    "typeId": 22,
    "type": "Web Server",
    "solutionId": 3,
    "solution": "Technology"
  },
  {
    "id": 350,
    "name": "Amazon Web Services (AWS)",
    "typeId": 22,
    "type": "Web Server ",
    "solutionId": 3,
    "solution": "Technology"
  }
 ]

