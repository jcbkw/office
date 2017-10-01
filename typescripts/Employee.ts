export class Employee {
// [TypeScript]In this case the constructor function below
// [TypeScript]sets properties of this class such as first name : type (string)
// [TypeScript]And because I added a property access modifiers for each parameter in the constructor, 
// [TypeScript]which are explicity used for a member of a class,
// [TypeScript]It also implies that each parameter of the constructor is memmber of the class.
// [TypeScript](this.firstName, this.lastName, this.employeeId ..etc) 
    constructor (private firstName: string,
        private lastName: string,
        private employeeId: number,
        private title: string) {};
// [TypeScript]In class you do not need the "function" to define an object method.
    getFullName (): string {

        return `${this.firstName} ${this.lastName}`;

    }

    getId (): number {

        return this.employeeId;
        
    }

    getTitle (): string {

        return this.title;
        
    }
}