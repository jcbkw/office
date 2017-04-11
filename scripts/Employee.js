(function () {

function Employee (first, last, id, position) {

    this.firstname = first;
    this.lastname = last;
    this.employeeId = id;
    this.title = position;

}

Employee.prototype.firstname = null;
Employee.prototype.lastname = null;
Employee.prototype.employeeId = 0;
Employee.prototype.title = null;

Employee.prototype.getFullName =  function () {

    return this.firstname + " " +  this.lastname; 

};

/* 
// another, cleaner way to do the same thing
 
Employee.prototype = {

    // when using this form though, since I replace the predefined
    // prototype object, I must add a "constructor" property to my object
    constructor: Employee,

    firstname: null,
    lastname: null,
    employeeId: 0,
    title: null,

    getFullName: function () {

        return this.firstname + " " +  this.lastname; 

    }

};
*/

app.Employee = Employee;

})(); 