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

app.Employee = Employee;

})(); 