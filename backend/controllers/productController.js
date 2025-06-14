import {getAllProducts,getProductById,createProduct,updateProduct,deleteProduct} from '../models/productModel.js'

export const getAll = async (req, res) => {
  const products = await getAllProducts();
  res.json(products);
};

export const getOne = async (req, res) => {
  const product = await getProductById(req.params.id);
  if (!product) return res.status(404).json({ message: 'Product not found' });
  res.json(product);
};

export const create = async (req, res) => {
  const { name, price, quantity } = req.body;
  await createProduct(name, price, quantity);
  res.status(201).json({ message: 'Product created' });
};

export const update = async (req, res) => {
  const { name, price, quantity } = req.body;
  await updateProduct(req.params.id, name, price, quantity);
  res.json({ message: 'Product updated' });
};

export const remove = async (req, res) => {
  await deleteProduct(req.params.id);
  res.json({ message: 'Product deleted' });
};