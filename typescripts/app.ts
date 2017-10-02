import {Office} from "./Office";
import {Address} from "./Address";
import {Manager} from "./Manager";
import {Employee} from "./Employee";
//(function () {

// ----Step (1) TS project - Work with Employees 
// ----Next - use the export feature for app.js to avoid global variables.    
// use cases
// create some employees
let emp_25 = new Employee("Chris", "Jolly", 78, "Clerk"); 
let a = new Employee("Ed", "Ster", 45, "Dev"); 
let b = new Employee("Kee", "Williams", 21, "Engineer"); 
let c = new Employee("Pat", "Eva", 146, "Designer"); 

console.log(b.getFullName());
console.log(c.getId());

// //Step (2) TS project - Work with Managers    
// // create a manager
let boss = new Manager("IT", "Anna", "Wilkins", 643, "Director of HTML5");
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
let emp_26 = new Employee("Bahavana", "Madhav", 178, "QA"); 

// try to hire a QA, but there's no QA department
boss.hire(emp_26);

console.log(boss.countEmployees());

// add a QA department and try to hire a QA again
Manager.addRoles("IT","QA");
Manager.addRoles("ooo","QA");

// try hiring the QA resource again
boss.hire(emp_26);

console.log(boss.countEmployees());

//Step (3) TS project - Work with Address    
// create an address
let myAddress = new Address(142, "Halsey Street", "Mainly", "NJ", "07845");
console.log(myAddress);

//Step (4) TS project - Work with Offices    
// create an office passing it the address
let myOffice = new Office(myAddress);

// add a manager and its staff to the office
myOffice.addManager(boss);

console.log(myOffice.getAddress().toString());

console.log(myOffice.getManagerByDepartment('IT'));

console.log(myOffice.getManagerByDepartment('IT').countEmployees());

console.log(myOffice.countEmployees());

console.log(myOffice.getEmployeeById(21));

console.log(myOffice.getManagerByDepartment('IT').findById(22));

//})();  