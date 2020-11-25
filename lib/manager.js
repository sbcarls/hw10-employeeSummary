const Employee = require("./employee");

class Manager extends Employee {
    constructor (name, id, email, officeNumber) {
        super(name, id, email);
        this.officeNumber = officeNumber;
    }

    getOffice(){
        return this.officeNumber;
    }

    getPosition(){
        return "Manager";
    }

}

module.exports = Manager;