const db = require("../models");
async function getProducts(req, res, next) {
    try {
      const product = await db.Product.find({})
        .select({
          image:1,
          title: 1,
          price: 1,
          description:1,
          unitStock:1,
          quantity:1,
          color:1
        })
        .lean()
        .exec();

      res.status(200).send({
        data: product,
      });
    } catch (error) {
      next(error);
    }
  }
  module.exports = {
    getProducts:getProducts,
}