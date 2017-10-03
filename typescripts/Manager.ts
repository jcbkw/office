import {Employee} from "./Employee";
/// <reference path="./IRoles" />

export class Manager extends Employee {
    // Here we are declaring a member of the class and assiging a value.
    // To declare a class member, start with its property access modifer (e.g. private, public) but not let or let (because it is a member, not a letiable, duh)
    // There are 2 Array type notations in TypeScript:
    // TypeName[]
    // Array<TypeName>
    private staff: Employee[] = []; // same as private staff: Array<Employee> = [];

    static roles: IRoles = {

        "IT": ["Dev", "Engineer", "Designer"]

    };
 
    constructor (
        private department: string, 
         first: string, 
         last: string, 
         id: number, 
         position: string) {

    // Inheritance (optinal)
    // Employee.call(this, first, last, id, position);
    // With inheritance, the "super" function will be the first line executed.
        super(first, last, id, position);
    }

    // Inheritance (optinal)
    // Manager.prototype = new Employee;
    // Manager.prototype.constructor = Manager;

    static addRoles (department: string, role: string): void  {
        let departments: string[] = Manager.roles[department];
        if (departments) {
            departments.push(role);
        }
    }
    /**
     * Returns a string 
     */
    getManagerDepartment (): string {

        return this.department;

    }

    countEmployees (): number {

        return this.staff.length;

    }

    hire (employee: Employee): boolean{
        
        if (this.hasValidCredentials(employee)) {

            this.staff.push(employee);
            
            return true;

        }
            
        return false;

    }

    fire  (employee: Employee):void {

        let index = this.staff.indexOf(employee);

        if (index !== -1) {

            this.staff.splice(index, 1);

        }

    }

    findById (id: number): Employee|null {

        if (id) {
    
            let staffsize  = this.staff.length,
                employee = null;
            
            for (let i = 0; i < staffsize; i+=1 ) {

                employee = this.staff[i];

                if (id === employee.employeeId) {

                    return employee;

                }

            }
        
        }

        return null; 

    }

    hasValidCredentials  (employee: Employee):boolean {
        
        if (employee instanceof Employee) {

            let positions = Manager.roles[this.department];  

            if (positions) {

                if (positions.indexOf(employee.getTitle()) !== -1) {

                    return true;

                }
            
            }
            
        }

        return false;
        
    }

    toString  ():string {

        return `Boss of ${this.department}`;  

    }
}