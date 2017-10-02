System.register(["./Office", "./Address", "./Manager", "./Employee"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Office_1, Address_1, Manager_1, Employee_1, emp_25, a, b, c, boss, emp_26, myAddress, myOffice;
    return {
        setters: [
            function (Office_1_1) {
                Office_1 = Office_1_1;
            },
            function (Address_1_1) {
                Address_1 = Address_1_1;
            },
            function (Manager_1_1) {
                Manager_1 = Manager_1_1;
            },
            function (Employee_1_1) {
                Employee_1 = Employee_1_1;
            }
        ],
        execute: function () {
            //(function () {
            // ----Step (1) TS project - Work with Employees 
            // ----Next - use the export feature for app.js to avoid global variables.    
            // use cases
            // create some employees
            emp_25 = new Employee_1.Employee("Chris", "Jolly", 78, "Clerk");
            a = new Employee_1.Employee("Ed", "Ster", 45, "Dev");
            b = new Employee_1.Employee("Kee", "Williams", 21, "Engineer");
            c = new Employee_1.Employee("Pat", "Eva", 146, "Designer");
            console.log(b.getFullName());
            console.log(c.getId());
            // //Step (2) TS project - Work with Managers    
            // // create a manager
            boss = new Manager_1.Manager("IT", "Anna", "Wilkins", 643, "Director of HTML5");
            console.log(boss.getFullName());
            // // hire someone
            boss.hire(a);
            console.log(boss.countEmployees());
            // hire other folks
            boss.hire(c);
            boss.hire(b);
            boss.hire(emp_25);
            console.log(boss.countEmployees());
            // fire this guy
            boss.fire(c);
            console.log(boss.countEmployees());
            console.log(boss.findById(21));
            // cannot hire a non-employee
            boss.hire(null);
            console.log(boss.countEmployees());
            // create a QA employee
            emp_26 = new Employee_1.Employee("Bahavana", "Madhav", 178, "QA");
            // try to hire a QA, but there's no QA department
            boss.hire(emp_26);
            console.log(boss.countEmployees());
            // add a QA department and try to hire a QA again
            Manager_1.Manager.addRoles("IT", "QA");
            Manager_1.Manager.addRoles("ooo", "QA");
            // try hiring the QA resource again
            boss.hire(emp_26);
            console.log(boss.countEmployees());
            //Step (3) TS project - Work with Address    
            // create an address
            myAddress = new Address_1.Address(142, "Halsey Street", "Mainly", "NJ", "07845");
            console.log(myAddress);
            //Step (4) TS project - Work with Offices    
            // create an office passing it the address
            myOffice = new Office_1.Office(myAddress);
            // add a manager and its staff to the office
            myOffice.addManager(boss);
            console.log(myOffice.getAddress().toString());
            console.log(myOffice.getManagerByDepartment('IT'));
            console.log(myOffice.getManagerByDepartment('IT').countEmployees());
            console.log(myOffice.countEmployees());
            console.log(myOffice.getEmployeeById(21));
            console.log(myOffice.getManagerByDepartment('IT').findById(22));
            //})();   
        }
    };
});
