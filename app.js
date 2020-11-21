const manager = require("./lib/manager");
const engineer = require("./lib/engineer");
const intern = require("./lib/intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");

const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");

const employees = [];

function buildTeam() {
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
            const manager = newManager(res.managerName, res.managerEmail, res.ManagerId, res.managerOfficeNumber);
            employee.push(manager);
            console.log(employees);
            createUser();
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
            const engineer = newEngineer(res.engineerName, res.engineerEmail, res.engineerId, res.engineerGitHub);
            employee.push(engineer);
            console.log(employees);
            createUser();
        })
    }
}