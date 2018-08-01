import { Skill} from './skill.model';
import { Certification } from './certification.model';



export class Employee {
    FirstName:      string;
    LastName:       string;
    EmployeeId:             number;
    AdUniquIdentifier: string;
    //email:          string;
    //phone:          string;
    Role:           string;
    RoleId:         number;
    IsAdmin:        boolean;
    Skills:         Skill[];
    Certifications: Certification[];

    deserialize(input: any) {
        Object.assign(this, input);
        Object.assign(this.Skills, input.Skills)
        Object.assign(this.Certifications, input.Certifications)
        return this;
    }
}