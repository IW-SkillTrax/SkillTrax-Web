


export class Certification {
    CertificationName:       string;
    CertificationId:         number;
    CertCatagoryId:          number;
    CertCatagoryName:        string;

    deserialize(input: any) {
        Object.assign(this, input);
        return this;
    }
}