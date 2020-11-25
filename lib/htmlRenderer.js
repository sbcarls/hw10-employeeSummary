const path = require("path");
const fs = require("fs");
const templatesDir = path.resolve(__dirname, "../templates");

const render = employees => {
    const html = [];

    html.push(employees
        .filter(employee => employee.getPosition() === "Manager")
        .map(manager => createManager(manager))
    );

    html.push(employees
        .filter(employee => employee.getPosition() === "Engineer")
        .map(engineer => {
            console.log(engineer, "line 16");
            createEngineer(engineer)
        })
    );

    html.push(employees
        .filter(employee => employee.getPosition() === "Intern")
        .map(intern => createIntern(intern))
    );
        console.log(html.join (""), "line 25")

    return createMain(html.join(""));
};

const createManager = manager => {
    let template = fs.readFileSync(path.resolve(templatesDir, "manager.html"), "utf8");
    template = replacePlaceholders(template, "name", manager.getName());
    template = replacePlaceholders(template, "role", manager.getPosition());
    template = replacePlaceholders(template, "email", manager.getEmail());
    template = replacePlaceholders(template, "id", manager.getId());
    template = replacePlaceholders(template, "officeNumber", manager.getOffice());
    return template;
};

const createEngineer = engineer => {
    console.log(engineer, "line  40");
    let template = fs.readFileSync(path.resolve(templatesDir, "engineer.html"), "utf8");
    template = replacePlaceholders(template, "name", engineer.getName());
    template = replacePlaceholders(template, "role", engineer.getPosition());
    template = replacePlaceholders(template, "email", engineer.getEmail());
    template = replacePlaceholders(template, "id", engineer.getId());
    template = replacePlaceholders(template, "github", engineer.getGithub());
    return template;
};

const createIntern = intern => {
    let template = fs.readFileSync(path.resolve(templatesDir, "intern.html"), "utf8");
    template = replacePlaceholders(template, "name", intern.getName());
    template = replacePlaceholders(template, "role", intern.getPosition());
    template = replacePlaceholders(template, "email", intern.getEmail());
    template = replacePlaceholders(template, "id", intern.getId());
    template = replacePlaceholders(template, "school", intern.getSchool());
    console.log(template, "line 53");
    return template;
};

const createMain = html => {
    console.log(html, "line 62")
        const template = fs.readFileSync(path.resolve(templatesDir, "main.html"), "utf8");
    return replacePlaceholders(template, "team", html);
};

const replacePlaceholders = (template, placeholder, value) => {
    console.log(template, "LINE68");
    const pattern = new RegExp("{{ " + placeholder + "}}", "gm");
    return template.replace(pattern, value);
};

module.exports = render;