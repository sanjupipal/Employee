const db = require("../db/connection");

const getDepartment = async (req, res) => {
  try {
    let data = await db("department").select("*");
    return res.status(200).json(data);
  } catch (error) {
    console.log(error);
    return res.status(400).json({ msg: error.message });
  }
};

const createDepartment = async (req, res) => {
  try {
    const { name } = req.body;
    let value = {
      ...req.body,
    };
    let data = await db("department").insert(value);
    return res.status(200).json(data);
  } catch (error) {
    console.log(error);
    return res.status(400).json({ msg: error.message });
  }
};

module.exports = {
  getDepartment,
  createDepartment,
};
