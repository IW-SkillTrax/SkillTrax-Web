import { Skill} from './skill.model';
import { Certification } from './certification.model';



export class Employee {
    firstName:      string;
    lastName:       string;
    employeeId:             number;
    adUniquIdentifier: string;
    //email:          string;
    //phone:          string;
    role:           string;
    roleId:         number;
    isAdmin:        boolean;
    skills:         Skill[];
    certifications: Certification[];

    
}