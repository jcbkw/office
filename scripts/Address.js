System.register([], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Address;
    return {
        setters: [],
        execute: function () {
            Address = /** @class */ (function () {
                function Address(streetNumber, streetName, city, state, zip) {
                    if (streetNumber === void 0) { streetNumber = 0; }
                    if (streetName === void 0) { streetName = null; }
                    if (city === void 0) { city = null; }
                    if (state === void 0) { state = null; }
                    if (zip === void 0) { zip = null; }
                    this.streetNumber = streetNumber;
                    this.streetName = streetName;
                    this.city = city;
                    this.state = state;
                    this.zip = zip;
                }
                Address.prototype.getAddress = function () {
                    return this.streetNumber
                        + " " + this.streetName
                        + ", " + this.city
                        + " " + this.state
                        + " " + this.zip;
                };
                ;
                Address.prototype.toString = function () {
                    return this.getAddress();
                };
                ;
                return Address;
            }());
            exports_1("Address", Address);
        }
    };
});
