import { Skill } from "./skill.model";
import { Cert } from "./cert.model";

export interface Employee {
    employeeId: number;
    employeeName: string;
    role: string;
    hasManagement: boolean;
    hasAnalytics: boolean;
    hasTechnology: boolean;
    certCount: number;
  }