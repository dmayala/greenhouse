
exports.up = function(knex, Promise) {
  return knex.schema.createTable('users', function (t) {
    t.increments();
    t.string('name');
    t.string('email');
    t.timestamp('created_at').notNullable().defaultTo(knex.raw('now()'));
    t.timestamp('updated_at');
  }).createTable('carts', function (t) {
    t.increments();
    t.integer('user_id').unsigned().references('id').inTable('users'); 
    t.timestamp('created_at').notNullable().defaultTo(knex.raw('now()'));
    t.timestamp('updated_at');
  }).createTable('productlines', function (t) {
    t.increments();
    t.integer('sku').unsigned().references('id').inTable('products'); 
    t.integer('cart_id').unsigned().references('id').inTable('carts'); 
    t.integer('quantity');
    t.timestamp('created_at').notNullable().defaultTo(knex.raw('now()'));
    t.timestamp('updated_at');
  });
  
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('productlines')
                    .dropTable('carts')
                    .dropTable('users');
};
