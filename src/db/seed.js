const db = require("../models");
const { getProductSeed, getSeedUsers } = require("./seed-data");

async function seedProducts() {
  const product = getProductSeed();

  await db.Product.deleteMany({});
  await db.Product.create([...product]);
}

async function seedUsers() {
  const user = getSeedUsers();

  await db.User.deleteMany({});
  await db.User.create([...user]);
}

module.exports = {
  seedProducts: seedProducts,
  seedUsers:seedUsers,
};
