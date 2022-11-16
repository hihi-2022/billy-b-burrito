exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('orders').del()
  await knex('orders').insert([
    {
      id: 1,
      name: 'Kelsey',
      filling: 'chicken',
      rice: true,
      beans: true,
      tomato: true,
      lettuce: true,
      quacamole: true,
      sour_cream: true,
      cheese: true,
      order_status: 'in queue',
    },
    {
      id: 2,
      name: 'Chris',
      filling: 'beef',
      rice: true,
      beans: true,
      tomato: true,
      lettuce: false,
      quacamole: true,
      sour_cream: true,
      cheese: true,
      order_status: 'in queue',
    },
    {
      id: 3,
      name: 'Alex',
      filling: 'jack fruit',
      rice: true,
      beans: true,
      tomato: true,
      lettuce: true,
      quacamole: true,
      sour_cream: false,
      cheese: true,
      order_status: 'in queue',
    },
  ])
}
