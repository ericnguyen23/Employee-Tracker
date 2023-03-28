const inquirer = require("inquirer");

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
        let selectedAction = data.action;
      });
  }
}

module.exports = Prompts;
