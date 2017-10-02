export class Address {
    
    constructor (private streetNumber: number = 0, 
        private streetName: string = null, 
        private city: string = null, 
        private state: string = null, 
        private zip: string = null) {

    }

    getAddress (): string {

        return   this.streetNumber 
        + " "  + this.streetName 
        + ", " + this.city 
        + " "  + this.state 
        + " "  + this.zip;

    };

    toString (): string {

        return this.getAddress();

    };
}

