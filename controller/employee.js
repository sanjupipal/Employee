const db = require("../db/connection");

const getEmployee = async (req, res) => {
  try {
    let { department_id } = req.query;
    let data = await db.raw(`select getEmployee(${department_id})`);
    return res.status(200).json(data.rows[0].getemployee);
  } catch (error) {
    console.log(error);
    return res.status(400).json({ msg: error.message });
  }
};

const createEmployee = async (req, res) => {
  try {
    const { name, department_id, email } = req.body;
    let value = {
      ...req.body,
    };
    let data = await db("employee").insert(value);
    return res.status(200).json(data);
  } catch (error) {
    console.log(error);
    return res.status(400).json({ msg: error.message });
  }
};

const problem = (req, res) => {
  try {
    let { inArray } = req.body;
  } catch (error) {
    return res.status(400).json({ msg: error.message });
  }
};

module.exports = {
  getEmployee,
  createEmployee,
};
