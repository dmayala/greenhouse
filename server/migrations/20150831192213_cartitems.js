
exports.up = function(knex, Promise) {
  return knex.schema.renameTable('productlines', 'cartitems')
};

exports.down = function(knex, Promise) {
  return knex.schema.renameTable('cartitems', 'productlines');
};
