<<<<<<< HEAD
const Product = require("../models/productModel");

const createProduct = async (data) => await Product.create(data);
const getAllProducts = async () => await Product.find();
const getProductById = async (id) => await Product.findById(id);
const updateProduct = async (id, data) => await Product.findByIdAndUpdate(id, data, { new: true });
const deleteProduct = async (id) => await Product.findByIdAndDelete(id);

=======
const Product = require("../models/productModel");

const createProduct = async (data) => await Product.create(data);
const getAllProducts = async () => await Product.find();
const getProductById = async (id) => await Product.findById(id);
const updateProduct = async (id, data) => await Product.findByIdAndUpdate(id, data, { new: true });
const deleteProduct = async (id) => await Product.findByIdAndDelete(id);

>>>>>>> 6ed50995adf726b3e3cbc6b9367ce53028c4dee4
module.exports = { createProduct, getAllProducts, getProductById, updateProduct, deleteProduct };