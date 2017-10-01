System.register(["./Employee"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Employee_1, Manager;
    return {
        setters: [
            function (Employee_1_1) {
                Employee_1 = Employee_1_1;
            }
        ],
        execute: function () {
            Manager = /** @class */ (function () {
                function Manager(department /*, first, last, id, position*/) {
                    // Inheritance (optinal)
                    // Employee.call(this, first, last, id, position);
                    this.department = department; /*, first, last, id, position*/
                    // Here we are declaring a member of the class and assiging a value.
                    // To declare a class member, start with its property access modifer (e.g. private, public) but not let or var (because it is a member, not a variable, duh)
                    // There are 2 Array type notations in TypeScript:
                    // TypeName[]
                    // Array<TypeName>
                    this.staff = []; // same as private staff: Array<Employee> = [];
                }
                // Inheritance (optinal)
                // Manager.prototype = new Employee;
                // constructor = Manager;
                Manager.addRoles = function (department, role) {
                    var departments = Manager.roles[department];
                    if (departments) {
                        departments.push(role);
                    }
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
                };
                Manager.prototype.fire = function (employee) {
                    var index = this.staff.indexOf(employee);
                    if (index !== -1) {
                        this.staff.splice(index, 1);
                    }
                };
                Manager.prototype.findById = function (id) {
                    if (id) {
                        var staffsize = this.staff.length, employee = null;
                        for (var i = 0; i < staffsize; i += 1) {
                            employee = this.staff[i];
                            if (id === employee.employeeId) {
                                return employee;
                            }
                        }
                    }
                    return null;
                };
                Manager.prototype.hasValidCredentials = function (employee) {
                    if (employee instanceof Employee_1.Employee) {
                        var positions = Manager.roles[this.department];
                        if (positions) {
                            if (positions.indexOf(employee.getTitle()) !== -1) {
                                return true;
                            }
                        }
                    }
                    return false;
                };
                Manager.prototype.toString = function () {
                    return "Boss of " + this.department;
                };
                Manager.roles = {
                    "IT": ["Dev", "Engineer", "Designer"]
                };
                return Manager;
            }());
            exports_1("Manager", Manager);
        }
    };
});
