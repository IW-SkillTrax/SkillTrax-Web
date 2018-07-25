import { Deserializable } from "./deserializable.model";



export class Skill implements Deserializable{
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
