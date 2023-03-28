const router = require("express").Router();
const deptRoutes = require("./deptRoutes");

router.use("/department", deptRoutes);

module.exports = router;
