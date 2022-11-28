//Quantities for a single burritto

export const singleBurritto = {
  filling: 150,
  tortilla: 1,
  lettuce: 35,
  tomato: 35,
  cheese: 50,
  rice: 80,
  beans: 80,
  sour_cream: 30,
  quacamole: 30,
  hot_sauce: 25,
}

export function updateQuantitiesFromOrder(order, stock) {
  const items = Object.keys(order)
  items.filter((item) => item !== 'name')
  console.log({ items, order, stock })
  for (const item of items) {
    stock.map((element) => {
      if (
        element.item == item &&
        element.item != 'hot_sauce' &&
        order[item] != false
      ) {
        element.quantity -= singleBurritto[item]
      }
    })
  }
  console.log(stock)
  return stock
}

export function checkInputValid(input, setErrorFunc) {
  const { filling, name } = input
  let bool = true
  if (!name) {
    setErrorFunc('Please enter a name for the order')
    bool = false
  }
  if (!filling) {
    setErrorFunc('Please choose a filling')
    bool = false
  }
  return bool
}

export function capitalize(word) {
  return word.charAt(0).toUpperCase() + word.slice(1)
}

export function underscoreToSpace(word) {
  const charArr = word.split('')
  let output = ''
  for (const letter of charArr) {
    if (letter == '_') {
      output += ' '
    } else {
      output += letter
    }
  }
  return output
}
// medium tomato weights 150g
// total of 670g
// cup of grated cheddar cheese ~ 100g
// cup of shredded iceberg lettuce ~72g
// cup of cooked rice ~ 200g
// cup of black beans ~ 175g
// cup of sour cream ~ 240g
