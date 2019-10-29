
exports.up = function(knex) {
  return knex.schema.createTable("customers", (t) => {
    t.increments('id').unsigned().primary();
    t.string("full_name").notNull();
    t.string("phone_number").notNull();
    t.integer('user_id')
      .notNullable()
      .references('id')
      .inTable('users')
      .index();
    t.timestamps(true, true);
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('customers');
};
