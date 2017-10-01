/* global app */

(function () {

function Address (streetNumber, streetName, city, state, zip) {

    this.streetNumber = streetNumber;
    this.streetName = streetName;
    this.city = city;
    this.state = state;
    this.zip = zip;

}

Address.prototype.streetNumber = 0; 
Address.prototype.streetName = null; 
Address.prototype.city = null; 
Address.prototype.state = null; 
Address.prototype.zip = null;

Address.prototype.getAddress = function () {

    return   this.streetNumber 
    + " "  + this.streetName 
    + ", " + this.city 
    + " "  + this.state 
    + " "  + this.zip;

};

Address.prototype.toString = function () {

    return this.getAddress();

};


app.Address = Address;

})(); 

