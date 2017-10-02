import {Address} from "./Address";
import {Manager} from "./Manager";
import {Employee} from "./Employee";

export class Office {
    
    constructor (private address: Address, 
        private managers: Manager[] = []) {

    }
    countManagers ():number {

        return this.managers.length;

    };

    addManager (manager: Manager): boolean {

        if (manager && manager instanceof Manager){

            this.managers.push(manager);
            
            return true;
        
        }

        return false;

    };

    removeManager (manager: Manager): void{

        let index: number = this.managers.indexOf(manager);

        if (index !== -1) {

            this.managers.splice(index, 1);

        }

    };

    getManagerByDepartment (department: string): Manager|null {

        if (department) {
    
            let staffsize: number  = this.managers.length,
                manager: Manager = null;
            
            for (let i = 0; i < staffsize; i+=1 ) {

                manager = this.managers[i];

                if (department === manager.getManagerTitle()) {

                    return manager;

                }

            }
        
        }

        return null; 

    };

    getAddress (): Address{

        return this.address;

    };

    countEmployees (): number {

        let staffSize: number = this.managers.length,
            employees: number = staffSize, // managers are employees too
            i: number;
        
        for (i = 0; i < staffSize; i += 1 ) {

            employees += this.managers[i].countEmployees(); 

        }

        return employees;

    };

    getEmployeeById (id: number): Employee|null {

        let managersCount: number = this.managers.length,
            employee: Employee,
            i: number;

        for (i = 0; i < managersCount; i += 1) {

            employee = this.managers[i].findById(id);

            if (employee) {

                return employee;

            }

        } 

        return null;

    }
};