const Department = require("./Department");
const Role = require("./Role");

// role with one department
Role.hasOne(Department, {
  foreignKey: "department_id",
});

module.exports = { Role };
