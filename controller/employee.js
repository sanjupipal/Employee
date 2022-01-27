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
    let { inArray, K } = req.body;
    let arr = inArray;
    let N = arr.length;
    let f = new Array(K);
    for (let i = 0; i < K; i++) {
      f[i] = 0;
    }
    for (let i = 0; i < N; i++) f[arr[i] % K]++;
    if (K % 2 == 0) f[K / 2] = Math.min(f[K / 2], 1);
    let ans = Math.min(f[0], 1);
    for (let i = 1; i <= K / 2; i++) ans += Math.max(f[i], f[K - i]);
    return res.status(400).json({ ans });
  } catch (error) {
    return res.status(400).json({ msg: error.message });
  }
};

module.exports = {
  getEmployee,
  createEmployee,
  problem,
};
