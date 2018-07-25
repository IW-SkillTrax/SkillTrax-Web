import { Deserializable } from "./deserializable.model";


export class Certification implements Deserializable{
    CertificationName:       string;
    CertificationId:         number;
    CertCatagoryId:          number;
    CertCatagoryName:        string;

    deserialize(input: any) {
        Object.assign(this, input);
        return this;
    }
}