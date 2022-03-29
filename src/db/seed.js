const db = require("../models");
const { getProductSeed } = require("./seed-data");

async function seedProducts() {
  const product = getProductSeed();

  await db.Product.deleteMany({});
  await db.Product.create([...product]);
}

function getRandomItem(arr = []) {
  return arr[Math.floor(Math.random() * arr.length)];
}

module.exports = {
  seedProducts: seedProducts,
  getRandomItem: getRandomItem,
};
