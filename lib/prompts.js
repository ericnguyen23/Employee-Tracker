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
      ])
      .then((data) => {
        let consoleTable = (table) => {
          table.findAll({ raw: true }).then((data) => {
            console.table(data);
          });
        };

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
        }
      });
  }
}

module.exports = Prompts;
