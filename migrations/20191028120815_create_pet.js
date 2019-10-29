
exports.up = function(knex) {
  return knex.schema.createTable("pets", (t) => {
    t.increments('id').unsigned().primary();
    t.string("name").notNull();
    t.integer('owner_id')
      .notNullable()
      .references('id')
      .inTable('customers')
      .index();
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('pets');
};
