/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("employee")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("employee").insert([
        { name: "sanju", email: "sanju@gmail.com", department_id: 1 },
        { name: "sanju1", email: "sanju1@gmail.com", department_id: 1 },
        { name: "sanju2", email: "sanju2@gmail.com", department_id: 2 },
        { name: "sanju3", email: "sanju3@gmail.com", department_id: 2 },
        { name: "sanju4", email: "sanju4@gmail.com", department_id: 2 },
        { name: "sanju5", email: "sanju5@gmail.com", department_id: 3 },
        { name: "sanju6", email: "sanju6@gmail.com", department_id: 3 },
        { name: "sanju7", email: "sanju7@gmail.com", department_id: 3 },
      ]);
    });
};
