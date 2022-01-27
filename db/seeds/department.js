/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("department")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("department").insert([
        { id: 1, name: "IT" },
        { id: 2, name: "Marketing" },
        { id: 3, name: "Accounts" },
      ]);
    });
};
