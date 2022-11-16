exports.up = function (knex) {
  return knex.schema.createTable('orders', (table) => {
    table.increments('id').primary()
    table.string('name')
    table.string('filling')
    table.bool('rice')
    table.bool('beans')
    table.bool('tomato')
    table.bool('lettuce')
    table.bool('quacamole')
    table.bool('sour_cream')
    table.bool('cheese')
    table.string('order_status')
  })
}

exports.down = function (knex) {
  return knex.schema.dropTable('orders')
}
