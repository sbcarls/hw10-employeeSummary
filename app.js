const Manager = require("./lib/manager");
const Engineer = require("./lib/engineer");
const Intern = require("./lib/intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");

const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");

const employees = [];

    function setManager() {
        inquirer.prompt([
            {
                type: "input",
                message: "Manager's Name?",
                name: "managerName",
            },

            {
                type: "input",
                message: "Manager's e-mail?",
                name: "managerEmail",
            },

            {
                type: "input",
                message: "Manager's ID?",
                name: "managerId",
            },

            {
                type: "input",
                message: "Manager's Office Number??",
                name: "managerOfficeNumber",
            },
        ]) .then(res => {
            const manager = new Manager(res.managerName, res.managerEmail, res.managerId, res.managerOfficeNumber);
            employees.push(manager);
            console.log(employees);
            createEmployee();
        });
    }

    function setEngineer() {
        inquirer.prompt([
            {
                type: "input",
                message: "Engineer's Name?",
                name: "engineerName",
            },

            {
                type: "input",
                message: "Engineer's e-mail?",
                name: "engineerEmail",
            },

            {
                type: "input",
                message: "Engineer's ID?",
                name: "engineerId",
            },

            {
                type: "input",
                message: "Engineer's GitHub Username?",
                name: "engineerGitHub",
            },
        ]) .then(res => {
            const engineer = new Engineer(res.engineerName, res.engineerEmail, res.engineerId, res.engineerGitHub);
            employees.push(engineer);
            console.log(employees);
            createEmployee();
        })
    }

    function setIntern() {
        inquirer.prompt([
            {
                type: "input",
                message: "Intern's Name?",
                name: "internName",
            },

            {
                type: "input",
                message: "Intern's e-mail?",
                name: "internEmail",
            },

            {
                type: "input",
                message: "Intern's ID?",
                name: "internId",
            },

            {
                type: "input",
                message: "Intern's school?",
                name: "internSchool",
            },
        ]) .then(res => {
            const intern = new Intern(res.internName, res.internEmail, res.internId, res.internSchool);
            employees.push(intern);
            console.log(employees);
            createEmployee();
        })
    }

    function createEmployee() {
        inquirer.prompt([
            {
                type: "list",
            message: "What type of employee would you like to add?",
            name: "typeOfEmployee",
            choices: ["Engineer", "Intern", "None"]
            }
        ]) .then(choice => {
            switch (choice.typeOfEmployee){
                case "Engineer":
                    setEngineer();

                    break;

                case "Intern":
                    setIntern();

                    break;

                default:
                    console.log(employees);
                    var renderEmployees = render(employees);
                    fs.writeFile(outputPath, renderEmployees, function(err){
                        if (err) throw err
                    });
                    break;
            }
        })
    }

    setManager();