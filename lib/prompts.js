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
        {
          type: "text",
          name: "roleTitle",
          message: "Role Title?",
          when: (answers) => answers.action === "add a role",
        },
        {
          type: "number",
          name: "roleSalary",
          message: "Role Salary?",
          when: (answers) => answers.action === "add a role",
        },
        {
          type: "number",
          name: "roleDepartment",
          message: "Role Department ID?",
          when: (answers) => answers.action === "add a role",
        },
        {
          type: "text",
          name: "employeeFirstName",
          message: "Employee's First Name?",
          when: (answers) => answers.action === "add an employee",
        },
        {
          type: "text",
          name: "employeeLastName",
          message: "Employee's Last Name?",
          when: (answers) => answers.action === "add an employee",
        },
        {
          type: "number",
          name: "employeeRoleID",
          message: "Employee's Role ID?",
          when: (answers) => answers.action === "add an employee",
        },
        {
          type: "number",
          name: "employeeManagerID",
          message: "Employee's Manager ID?",
          when: (answers) => answers.action === "add an employee",
        },
      ])
      .then((data) => {
        // log table
        let consoleTable = (table) => {
          table.findAll({ raw: true }).then((data) => {
            console.table(data);
            this.render();
          });
        };

        // handle each response scenario
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
            console.log(`Department ${data.departmentName} was added!`);
            this.render();
            break;
          case "add a role":
            Role.create({
              title: data.roleTitle,
              salary: data.roleSalary,
              department_id: data.roleDepartment,
            });
            console.log(`${data.roleTitle} role was added!`);
            this.render();
            break;
          case "add an employee":
            Employee.create({
              first_name: data.employeeFirstName,
              last_name: data.employeeLastName,
              role_id: data.employeeRoleID,
              manager_id: data.employeeManagerID,
            });
            console.log(
              `${data.employeeFirstName} has been added as a new employee!`
            );
            this.render();
            break;
        }
      });
  }
}

module.exports = Prompts;
