/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
const {
  onInsetTrigger,
  createCountFunction,
  getEmployeeFunc,
} = require("../knexfile");

exports.up = function (knex) {
  return knex.schema
    .createTable("employee", (table) => {
      table.increments("id");
      table.string("email").notNullable().unique();
      table.string("name").notNullable();
      table.integer("department_id").notNullable().references("department");
      table.timestamps(true, true);
    })
    .then(() => knex.raw(createCountFunction()))
    .then(() => knex.raw(onInsetTrigger("employee")))
    .then(() => knex.raw(getEmployeeFunc()));
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable("employee");
};
