exports.up = function (knex) {
  return knex.schema.createTable('stock', (table) => {
    table.increments('id').primary()
    table.string('item')
    table.string('unit_of_measure')
    table.int('quantity')
  })
}

exports.down = function (knex) {
  return knex.schema.dropTable('orders')
}
