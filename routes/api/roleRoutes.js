const router = require("express").Router();
const Roles = require("../../models/Role");

router.post("/seed", (req, res) => {
  Roles.bulkCreate([
    { title: "Accountant", salary: 110000, department_id: 1 },
    { title: "Receptionist", salary: 70000, department_id: 2 },
    { title: "Graphic Designer", salary: 80000, department_id: 3 },
    { title: "Coordinator", salary: 90000, department_id: 4 },
  ])
    .then(() => {
      res.send("Database seeded!");
    })
    .catch((err) => {
      res.json(err);
    });
});

module.exports = router;
