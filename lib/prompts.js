const inquirer = require("inquirer");
const Department = require("../models/Department");
const Role = require("../models/Role");
const Employee = require("../models/Employee");

class Prompts {
  constructor() {}

  render() {
    inquirer
      .prompt([
        {
          type: "list",
          name: "action",
          message: "What would you like to do?",
          choices: [
            "view all departments",
            "view all roles",
            "view all employees",
            "add a department",
            "add a role",
            "add an employee",
            "update an employee role",
          ],
        },
        {
          type: "text",
          name: "departmentName",
          message: "Department Name?",
          when: (answers) => answers.action === "add a department",
        },
      ])
      .then((data) => {
        // log table
        let consoleTable = (table) => {
          table.findAll({ raw: true }).then((data) => {
            console.table(data);
          });
        };

        // add item

        switch (data.action) {
          case "view all departments":
            consoleTable(Department);
            break;
          case "view all roles":
            consoleTable(Role);
            break;
          case "view all employees":
            consoleTable(Employee);
            break;
          case "add a department":
            Department.create({
              department_name: data.departmentName,
            });
            break;
        }
      });
  }
}

module.exports = Prompts;
