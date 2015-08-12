
exports.up = function(knex, Promise) {
  return knex.schema.createTable('products', function (t) {
    t.increments();
    t.string('name').notNullable();
    t.text('description');
    t.decimal('price', 19, 4).notNullable();
    t.string('image');
    t.string('nutix_id', 24); 
    t.timestamp('created_at').notNullable().defaultTo(knex.raw('now()'));
    t.timestamp('updated_at');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('products'); 
};
