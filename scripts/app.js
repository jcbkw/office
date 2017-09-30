/* global app */

(function () {

// ----Step (1) TS project - Work with Employees 
// ----Next - use the export feature for app.js to avoid global variables.    
// use cases
// create some employees
var emp_25 = new Employee("Chris", "Jolly", 78, "Clerk"); 
var a = new Employee("Ed", "Ster", 45, "Dev"); 
var b = new Employee("Kee", "Williams", 21, "Engineer"); 
var c = new Employee("Pat", "Eva", 146, "Designer"); 

console.log(b.getFullName());
console.log(c.employeeId);

// //Step (2) TS project - Work with Managers    
// // create a manager
// var boss = new app.Manager("IT");

// // hire someone
// boss.hire(a);

// console.log(boss.countEmployees());

// // hire other folks
// boss.hire(c);
// boss.hire(b);
// boss.hire(emp_25);

// console.log(boss.countEmployees());

// // fire this guy
// boss.fire(c);

// console.log(boss.countEmployees());

// console.log(boss.findById(21));

// // cannot hire a non-employee
// boss.hire(null);

// console.log(boss.countEmployees());

// // create a QA employee
// var emp_26 = new app.Employee("Bahavana", "Madhav", 178, "QA"); 

// // try to hire a QA, but there's no QA department
// boss.hire(emp_26);

// console.log(boss.countEmployees());

// // add a QA department and try to hire a QA again
// app.Manager.prototype.roles.IT.push("QA");

// // try hiring the QA resource again
// boss.hire(emp_26);

// console.log(boss.countEmployees());

// //Step (3) TS project - Work with Address    
// // create an address
// var myAddress = new app.Address(142, "Halsey Street", "Mainly", "NJ", "07845");



// //Step (4) TS project - Work with Offices    
// // create an office passing it the address
// var myOffice = new	app.Office(myAddress);

// // add a manager and its staff to the office
// myOffice.addManager(boss);

// console.log(myOffice.getAddress().toString());

// myOffice.getManagerByDepartment('IT');

// console.log(myOffice.getManagerByDepartment('IT').countEmployees());

// console.log(myOffice.countEmployees());

// myOffice.getEmployeeById(21);

// myOffice.getManagerByDepartment('IT').findById(22);

})();  