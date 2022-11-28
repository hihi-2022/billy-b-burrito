exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('stock').del()
  await knex('stock').insert([
    {
      id: 1,
      item: 'chicken filling',
      unit_of_measure: 'grams',
      quantity: 15000,
    },
    { id: 2, item: 'beef filling', unit_of_measure: 'grams', quantity: 15000 },
    {
      id: 3,
      item: 'jackfruit filling',
      unit_of_measure: 'grams',
      quantity: 15000,
    },
    { id: 4, item: 'tortillas', unit_of_measure: 'number', quantity: 100 },
    { id: 5, item: 'lettuce', unit_of_measure: 'grams', quantity: 350 },
    { id: 6, item: 'tomato', unit_of_measure: 'grams', quantity: 350 },
    { id: 7, item: 'cheese', unit_of_measure: 'grams', quantity: 500 },
    { id: 8, item: 'rice', unit_of_measure: 'grams', quantity: 800 },
    { id: 9, item: 'beans', unit_of_measure: 'grams', quantity: 800 },
    { id: 10, item: 'sour cream', unit_of_measure: 'grams', quantity: 300 },
    { id: 11, item: 'quacamole', unit_of_measure: 'grams', quantity: 300 },
  ])
}
