System.register([], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Employee;
    return {
        setters: [],
        execute: function () {
            Employee = /** @class */ (function () {
                // [TypeScript]In this case the constructor function below
                // [TypeScript]sets properties of this class such as first name : type (string)
                // [TypeScript]And because I added a property access modifiers for each parameter in the constructor, 
                // [TypeScript]which are explicity used for a member of a class,
                // [TypeScript]It also implies that each parameter of the constructor is memmber of the class.
                // [TypeScript](this.firstName, this.lastName, this.employeeId ..etc) 
                function Employee(firstName, lastName, employeeId, title) {
                    this.firstName = firstName;
                    this.lastName = lastName;
                    this.employeeId = employeeId;
                    this.title = title;
                }
                ;
                // [TypeScript]In class you do not need the "function" to define an object method.
                Employee.prototype.getFullName = function () {
                    return this.firstName + " " + this.lastName;
                };
                Employee.prototype.getId = function () {
                    return this.employeeId;
                };
                Employee.prototype.getTitle = function () {
                    return this.title;
                };
                return Employee;
            }());
            exports_1("Employee", Employee);
        }
    };
});
