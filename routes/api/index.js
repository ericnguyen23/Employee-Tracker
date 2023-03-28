const router = require("express").Router();
const deptRoutes = require("./deptRoutes");
const roleRoutes = require("./roleRoutes");
const employeeRoutes = require("./employeeRoutes");

router.use("/department", deptRoutes);
router.use("/role", roleRoutes);
router.use("/employee", employeeRoutes);

module.exports = router;
