const router = require("express").Router();
const Employee = require("../../models/Employee");

router.post("/seed", (req, res) => {
  Employee.bulkCreate([
    { first_name: "Eric", last_name: "Nguyen", role_id: 4, manager_id: null },
    { first_name: "John", last_name: "Doe", role_id: 3, manager_id: 1 },
    { first_name: "Jane", last_name: "Doe", role_id: 4, manager_id: null },
    { first_name: "Bob", last_name: "Le", role_id: 1, manager_id: null },
  ])
    .then(() => {
      res.send("Database seeded!");
    })
    .catch((err) => {
      res.json(err);
    });
});

module.exports = router;
