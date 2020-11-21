const Employee = require("./employee");

class Engineer extends Employee {
    constructor (name, id, email, github) {
        super(name, id, email);
        this.github = github;
    }

    getGitHub(){
        return this.github;
    }

    getPosition(){
        super.getPosition(){
            return "Engineer";
        }
    }
}

module.exports = Engineer;