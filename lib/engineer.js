const Employee = require("./employee");

class Engineer extends Employee {
    constructor (name, id, email, github) {
        super(name, id, email);
        this.github = github;
    }

    getGithub(){
        return this.github;
    }

    getPosition(){
            return "Engineer";
    }
}

const newEngineer = new Engineer("bob", 21, "sfqdj", "gitgit")
console.log(newEngineer.getEmail(), "line 19");
module.exports = Engineer;