System.register(["./Manager"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Manager_1, Office;
    return {
        setters: [
            function (Manager_1_1) {
                Manager_1 = Manager_1_1;
            }
        ],
        execute: function () {
            Office = /** @class */ (function () {
                function Office(address, managers) {
                    if (managers === void 0) { managers = []; }
                    this.address = address;
                    this.managers = managers;
                }
                Office.prototype.countManagers = function () {
                    return this.managers.length;
                };
                ;
                Office.prototype.addManager = function (manager) {
                    if (manager && manager instanceof Manager_1.Manager) {
                        this.managers.push(manager);
                        return true;
                    }
                    return false;
                };
                ;
                Office.prototype.removeManager = function (manager) {
                    var index = this.managers.indexOf(manager);
                    if (index !== -1) {
                        this.managers.splice(index, 1);
                    }
                };
                ;
                Office.prototype.getManagerByDepartment = function (department) {
                    if (department) {
                        var staffsize = this.managers.length, manager = null;
                        for (var i = 0; i < staffsize; i += 1) {
                            manager = this.managers[i];
                            if (department === manager.getManagerTitle()) {
                                return manager;
                            }
                        }
                    }
                    return null;
                };
                ;
                Office.prototype.getAddress = function () {
                    return this.address;
                };
                ;
                Office.prototype.countEmployees = function () {
                    var staffSize = this.managers.length, employees = staffSize, // managers are employees too
                    i;
                    for (i = 0; i < staffSize; i += 1) {
                        employees += this.managers[i].countEmployees();
                    }
                    return employees;
                };
                ;
                Office.prototype.getEmployeeById = function (id) {
                    var managersCount = this.managers.length, employee, i;
                    for (i = 0; i < managersCount; i += 1) {
                        employee = this.managers[i].findById(id);
                        if (employee) {
                            return employee;
                        }
                    }
                    return null;
                };
                return Office;
            }());
            exports_1("Office", Office);
            ;
        }
    };
});
