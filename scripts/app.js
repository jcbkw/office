// use cases
// create some employees
var emp_25 = new Employee("Chris", "Jolly", 78, "Clerk"); 
var a = new Employee("Ed", "Ster", 45, "Dev"); 
var b = new Employee("Kee", "Williams", 21, "Engineer"); 
var c = new Employee("Pat", "Eva", 146, "Designer"); 

console.log(b.getFullName());
console.log(c.employeeId);

// create a manager
var boss = new Manager("IT");

boss.hire(a);

console.log(boss.countEmployees());

boss.hire(c);
boss.hire(b);
boss.hire(emp_25);

console.log(boss.countEmployees());

boss.fire(c);

console.log(boss.countEmployees());

console.log(boss.findById(21));

// cannot hire a non-employee
boss.hire(null);

console.log(boss.countEmployees());

// try to hire a QA, but there's no QA department
var emp_26 = new Employee("Bahavana", "Madhav", 178, "QA"); 

boss.hire(emp_26);

console.log(boss.countEmployees());


// add a QA department and try to hire a QA again
Manager.prototype.roles.IT.push("QA")

boss.hire(emp_26);

console.log(boss.countEmployees());