const mongoose = require("mongoose");
require("dotenv").config();

const Product = require("./models/product");

mongoose
  .connect(`mongodb+srv://${process.env.CREDENTIALS}`)
  .then(() => {
    console.log("Connected to DB");
  })
  .catch(() => {
    console.log("Connection failed!");
  });

const createProduct = async (req, res, next) => {
  const createdProduct = new Product({
    name: req.body.name,
    price: req.body.price,
  });
  const result = await createdProduct.save();

  res.json(result);
};

const getProducts = async (req, res, next) => {
  const products = await Product.find().exec();
  res.json(products);
};

exports.createProduct = createProduct;
exports.getProducts = getProducts;
