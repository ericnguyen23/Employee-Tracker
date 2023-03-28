const Department = require("./Department");
const Role = require("./Role");
const Employee = require("./Employee");

// role with one department
Role.hasOne(Department, {
  foreignKey: "department_id",
});

Employee.hasOne(Role, {
  foreignKey: "role_id",
});

module.exports = { Role, Employee };
