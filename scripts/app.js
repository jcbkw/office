/* global app */

(function () {
    
// use cases
// create some employees
var emp_25 = new app.Employee("Chris", "Jolly", 78, "Clerk"); 
var a = new app.Employee("Ed", "Ster", 45, "Dev"); 
var b = new app.Employee("Kee", "Williams", 21, "Engineer"); 
var c = new app.Employee("Pat", "Eva", 146, "Designer"); 

console.log(b.getFullName());
console.log(c.employeeId);

// create a manager
var boss = new app.Manager("IT");

// hire someone
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
var emp_26 = new app.Employee("Bahavana", "Madhav", 178, "QA"); 

// try to hire a QA, but there's no QA department
boss.hire(emp_26);

console.log(boss.countEmployees());

// add a QA department and try to hire a QA again
app.Manager.prototype.roles.IT.push("QA");

// try hiring the QA resource again
boss.hire(emp_26);

console.log(boss.countEmployees());

// create an address
var myAddress = new app.Address(142, "Halsey Street", "Mainly", "NJ", "07845");

// create an office passing it the address
var myOffice = new	app.Office(myAddress);

// add a manager and its staff to the office
myOffice.addManager(boss);

console.log(myOffice.getAddress().toString());

myOffice.getManagerByDepartment('IT');

console.log(myOffice.getManagerByDepartment('IT').countEmployees());

console.log(myOffice.countEmployees());

myOffice.getEmployeeById(21);

myOffice.getManagerByDepartment('IT').findById(22);

})();  