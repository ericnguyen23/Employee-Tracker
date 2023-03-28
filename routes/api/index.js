const router = require("express").Router();
const deptRoutes = require("./deptRoutes");
const roleRoutes = require("./roleRoutes");

router.use("/department", deptRoutes);
router.use("/role", roleRoutes);

module.exports = router;
