const Employee = require("./employee");

class Manager extends Employee {
    constructor (name, id, email, school) {
        super(name, id, email);
        this.officeNumber = officeNumber;
    }

    getOfficeNumber(){
        return this.officeNumber;
    }

    getPosition(){
        super.getPosition(){
        return "Manager";
        }
    }
}

module.exports = Manager;