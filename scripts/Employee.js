var Employee = /** @class */ (function () {
    // [TypeScript]In this case the constructor function below
    // [TypeScript]sets properties of this class such as first name : type (string)
    // [TypeScript]And because I added a property access modifiers for each parameter in the constructor, 
    // [TypeScript]which are explicity used for a member of a class,
    // [TypeScript]It also implies that each parameter of the constructor is memmber of the class.
    // [TypeScript](this.firstName, this.lastName, this.employeeId ..etc)
    function Employee(firstName, lastName, employeeId, position) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.employeeId = employeeId;
        this.position = position;
    }
    ;
    // [TypeScript]In class you do not need the "function" to define an object method.
    Employee.prototype.getFullName = function () {
        return this.firstName + " " + this.lastName;
    };
    return Employee;
}());
