/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema
    .createTable('members', function (table) {
      table.increments('id');
      table.string('guild_id');
      table.string('phone_number');
      table.boolean('active').defaultTo(true);
      table.dateTime('created_at').defaultTo(knex.fn.now());
      table.dateTime('updated_at').defaultTo(knex.fn.now());
    })
    .createTable('messages', function (table) {
      table.increments('id');
      table.string('guild_id');
      table.string('message');
      table.dateTime('sent_at').defaultTo(knex.fn.now());
    });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable('members').dropTable('messages');
};
