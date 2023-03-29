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
        switch (data.action) {
          case "view all departments":
            Department.findAll({ raw: true }).then((deptData) => {
              console.table(deptData);
            });
            break;
          case "view all roles":
            Role.findAll({ raw: true }).then((roleData) => {
              console.table(roleData);
            });
            break;
          case "view all employees":
            Employee.findAll({ raw: true }).then((employeeData) => {
              console.table(employeeData);
            });
            break;
        }
      });
  }
}

module.exports = Prompts;
