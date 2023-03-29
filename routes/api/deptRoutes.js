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

// Get all data
router.get("/", (req, res) => {
  Department.findAll({ raw: true }).then((deptData) => {
    console.table(deptData);
  });
});

module.exports = router;
