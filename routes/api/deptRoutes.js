const router = require("express").Router();
const Department = require("../../models/Department");

// Seed Department Table
router.post("/seed", (req, res) => {
  Department.bulkCreate([
    { department_name: "Accounting" },
    { department_name: "Human Resources" },
    { department_name: "Marketing" },
    { department_name: "Public Affairs" },
  ])
    .then(() => {
      res.send("Database seeded!");
    })
    .catch((err) => {
      res.json(err);
    });
});

module.exports = router;
