/**
 * @typedef Item
 * @property {number} id - this item's ID
 * @property {string} name - name of this item
 * @property {number} price - price of this item
 * @property {string} category - the food group this item belongs to
 * @property {number} quantity - number of this item in inventory
 */

/**
 * @type {Item[]}
 * You can use this example array to test your functions.
 */
const INVENTORY = [
  { id: 1, name: "apple", price: 1.75, category: "fruit", quantity: 100 },
  { id: 3, name: "banana", price: 0.25, category: "fruit", quantity: 137 },
  { id: 5, name: "orange", price: 1.0, category: "fruit", quantity: 10 },
  { id: 91, name: "broccoli", price: 3.0, category: "vegetable", quantity: 67 },
  { id: 47, name: "carrots", price: 2.25, category: "vegetable", quantity: 94 },
  { id: 82, name: "milk", price: 5.75, category: "dairy", quantity: 90 },
  { id: 6, name: "cheddar", price: 4.0, category: "dairy", quantity: 63 },
  { id: 101, name: "sourdough", price: 5.5, category: "grains", quantity: 81 },
];

/**
 * @param {Item[]} items
 * @returns {number[]} ids of given items
 */
function getIds(items) {
  // TODO
  let idArray = [];
  for (const element of items) {
    idArray.push(element.id);
  }
  return idArray;
}

//console.log(getIds(INVENTORY));

/**
 * @param {Item[]} items
 * @returns {string[]} categories of given items
 */
function getCategories(items) {
  // TODO
  let categoryArray = [];
  for (const element of items) {
    categoryArray.push(element.category);
  }
  return categoryArray;
}

//console.log(getCategories(INVENTORY));

/**
 * Vendors often use SKUs (Stock Keeping Units) to manage their inventory.
 * SKU formats are not standardized, so for this exercise, we will use the format
 * "[id]#[name]#[name length]"
 *
 * For example, the SKU of `{id: 91, name: "broccoli"}` would be "91#broccoli#8"
 * @param {Item[]} items
 * @returns {string[]} SKUs of given items
 */
//I'm assuming we were supposed to do the map thing and pass in a function as an argument, but rather than mess with the function definition provided, I did it this way
function getSkus(items) {
  // TODO
  let skus = [];
  let idArray = getIds(items);
  let skuString = "";
  for (let i = 0; i < items.length; i++) {
    skuString = `${idArray[i]}#${items[i].name}#${items[i].name.length}`;
    skus.push(skuString);
  }
  return skus;
}

//console.log(getSkus(INVENTORY));

/**
 * @param {Item[]} items
 * @returns {Item[]} all items in the "fruit" category
 */
function getFruits(items) {
  // TODO
  // let fruitArray = [];
  // for (const element of items) {
  //   if (element.category == "fruit") {
  //     fruitArray.push(element);
  //   }
  // }
  // return fruitArray;

  const fruitArray = items.filter((element) => element.category === "fruit");
  return fruitArray;
}

// console.log(getFruits(INVENTORY));

/**
 * @param {Item[]} items
 * @param {string} category
 * @returns {Item[]} all items in the given category
 */
function getItemsByCategory(items, category) {
  // TODO
  // let categoryArray = [];
  // for (const element of items) {
  //   if (element.category == category) {
  //     categoryArray.push(element);
  //   }
  // }
  // return categoryArray;

  const categoryArray = items.filter(
    (element) => element.category === category,
  );
  return categoryArray;
}

// console.log(getItemsByCategory(INVENTORY, "fruit"));
// console.log(getItemsByCategory(INVENTORY, "vegetable"));
// console.log(getItemsByCategory(INVENTORY, "dairy"));
// console.log(getItemsByCategory(INVENTORY, "grains"));
// console.log(getItemsByCategory(INVENTORY, "asdf"));

/**
 * An item is considered "cheap" if its price is $2.50 or less.
 * @param {Item[]} items
 * @returns {Item[]} all cheap items
 */
function getCheapItems(items) {
  // TODO
  const cheap = items.filter((element) => element.price < 2.5);
  return cheap;
}

//console.log(getCheapItems(INVENTORY));

/**
 * @param {Item[]} items
 * @returns {number} the total quantity of all items given
 */

function countItems(items) {
  // TODO
  //let totalQuantity = 0;
  // for (const element of items) {
  //   totalQuantity = totalQuantity + element.quantity;
  // }
  const totalQuantity = items.reduce(
    (accumulator, currentValue) => accumulator + currentValue.quantity,
    0,
  );
  return totalQuantity;
}

//console.log(countItems(INVENTORY));

/**
 * @param {Item[]} items
 * @returns {number} the cost of purchasing every single item
 */
function getTotalCost(items) {
  // TODO
  // let totalPrice = 0;
  // for (const element of items) {
  //   totalPrice = totalPrice + element.price * element.quantity;
  // }
  const totalPrice = items.reduce(
    (accumulator, currentValue) =>
      accumulator + currentValue.price * currentValue.quantity,
    0,
  );
  return totalPrice;
}

//console.log(getTotalCost(INVENTORY));

/**
 * @param {Item[]} items
 * @returns {Item} the item with the highest price
 */
function getMostExpensiveItem(items) {
  // TODO
  let highestPrice = 0;
  //Assuming items isn't empty
  let mostExpensiveItem = items[0];
  for (const element of items) {
    if (highestPrice < element.price) {
      highestPrice = element.price;
      mostExpensiveItem = element;
    }
  }
  return mostExpensiveItem;
}

// console.log(getMostExpensiveItem(INVENTORY));
