
export class Skill{
    skillId:         number;
    skillName:       string;
    solutionName:   string;
    solutionId: number;
    skillTypeName:       string;
    skillTypeId:     number;
    
    deserialize(input: any) {
        Object.assign(this, input);
        return this;
    }
}
