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

  async function getProductDetails(req, res, next) {
    const { productId } = req.params;
    try {
      const product = await db.Product.findOne({
        _id: productId,
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

async function createProduct(req, res, next) {
    const { image, title, description, price, unitStock, quantity, color } = req.body;

    try {
      const user = await db.Product.create({
        image,
        title,
        description,
        price,
        unitStock,
        quantity,
        color,
      });

      res.status(200).send({
        data: {
          _id: user._id,
          image: user.image,
          description: user.description,
          price: user.price,
          unitStock: user.unitStock,
          quantity:user.quantity,
          color:user.color,
        },
      });
    } catch (error) {
      next(error);
    }
  }
  async function updateProduct(req, res, next) {
    const { productId } = req.params;
    const { image, title, description, price, unitStock, quantity, color } = req.body;

    try {
      const updateProduct = await db.Product.findOneAndUpdate(
        {_id: productId,},
        {$set:
          {
            image: image,
            description: description,
            price: price,
            unitStock: unitStock,
            quantity:quantity,
            color:color,
          },
        },
        {
          new: true,
        },
      ).select({
        image:1,
        title: 1,
        price: 1,
        description:1,
        unitStock:1,
        quantity:1,
        color:1
      });

      res.status(200).send({
        data: updateProduct,
      });
    } catch (error) {
      next(error);
    }
  }

  async function deleteProduct(req, res, next) {
    const { productId } = req.params;

    try {
      const result = await db.Product.deleteOne({
        _id: productId,
      }).lean();

      if (result.deletedCount === 1) {
        res.status(200).send({
          data: "Product removed",
        });
      } else {
        res.status(500).send({
          data: "Product not removed",
        });
      }
    } catch (error) {
      next(error);
    }
  }

  module.exports = {
    getProducts:getProducts,
    getProductDetails:getProductDetails,
    createProduct:createProduct,
    updateProduct:updateProduct,
    deleteProduct:deleteProduct,
}