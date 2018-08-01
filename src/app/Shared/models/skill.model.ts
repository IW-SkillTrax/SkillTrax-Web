



export class Skill{
    SkillId:         number;
    SkillName:       string;
    SolutionName:   string;
    SolutionId: number;
    SkillTypeName:       string;
    SkillTypeId:     number;
    
    deserialize(input: any) {
        Object.assign(this, input);
        return this;
    }
}
