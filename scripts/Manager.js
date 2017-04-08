function Manager (department, first, last, id, position) {

    // Inheritance (optinal)
    // Employee.call(this, first, last, id, position);

    this.department = department;
    this.staff = [];

}

// Inheritance (optinal)
// Manager.prototype = new Employee;
// Manager.prototype.constructor = Manager;

Manager.prototype.department = null;
Manager.prototype.staff = null;
Manager.prototype.roles = {

    "IT": ["Dev", "Engineer", "Designer"]

};

Manager.prototype.countEmployees = function () {

    return this.staff.length;

};

Manager.prototype.hire = function (employee) {
    
    if (this.hasValidCredentials(employee)) {

        this.staff.push(employee);
        
        return true;

    }
        
    return false;

}

Manager.prototype.fire = function (employee) {

    var index = this.staff.indexOf(employee);

    if (index !== -1) {

        this.staff.splice(index, 1);

    }

}


Manager.prototype.findById = function (id) {

    if (id) {
 
        var staffsize  = this.staff.length,
            employee = null;
        
        for (var i = 0; i < staffsize; i+=1 ) {

            employee = this.staff[i];

            if (id === employee.employeeId) {

                return employee;

            }

        }
    
    }

    return null; 

}

Manager.prototype.hasValidCredentials = function (employee) {
    
    if (employee instanceof Employee) {

        var positions = this.roles[this.department];  

        if (positions) {

            if (positions.indexOf(employee.title) !== -1) {

                return true;

            }
        
        }
        
    }

    return false;
    
};