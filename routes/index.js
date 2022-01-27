const router = require("express").Router();

const { createEmployee, getEmployee } = require("../controller/employee");

router.post("/employee", createEmployee);
router.get("/all-employee", getEmployee);

const { createDepartment, getDepartment } = require("../controller/department");

router.post("/department", createDepartment);
router.get("/department", getDepartment);

module.exports = router;
