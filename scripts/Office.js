/* global app */

(function () {

function Office (address) {

    this.address = address;
    this.managers = [];

}
//prototypal properties of office as each office will have different address
//each office will have a different set of managers.
Office.prototype.address = null;
Office.prototype.managers = null;

//prototypal methods of office.
Office.prototype.countManagers = function (){

    return this.managers.length;

};

Office.prototype.addManager = function (manager){

    if (manager && manager instanceof app.Manager){

        this.managers.push(manager);
        
        return true;
    
    }

    return false;

};

Office.prototype.removeManager = function (manager){

    var index = this.managers.indexOf(manager);

    if (index !== -1) {

        this.managers.splice(index, 1);

    }

};

Office.prototype.getManagerByDepartment = function (department){

    if (department) {
 
        var staffsize  = this.managers.length,
            manager = null;
        
        for (var i = 0; i < staffsize; i+=1 ) {

            manager = this.managers[i];

            if (department === manager.department) {

                return manager;

            }

        }
    
    }

    return null; 

};

Office.prototype.getAddress = function () {

    return this.address;

};

Office.prototype.countEmployees = function () {

    var staffSize = this.managers.length,
        employees = staffSize, // managers are employees too
        i;
    
    for (i = 0; i < staffSize; i += 1 ) {

         employees += this.managers[i].staff.length; 

    }

    return employees;

};

Office.prototype.getEmployeeById = function (id) {

    var managersCount = this.managers.length,
        employee,
        i;

    for (i = 0; i < managersCount; i += 1) {

        employee = this.managers[i].findById(id);

        if (employee) {

            return employee;

        }

    } 

    return null;

};

app.Office = Office;

})();