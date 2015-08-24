import express from 'express';
import ProductCollection from '../entities/collections/products';
import ProductModel from '../entities/models/product';

const router = express.Router();

router.get('/', async (req, res) => {
  let products = await ProductCollection.forge().fetch();
  res.send(products);
});

router.get('/:id', async (req, res) => {
  let id = req.params.id;
  try {
    let product = await ProductModel.forge({ id }).fetch();
    if (product) {
      res.send(product);
    }
    res.status(500).send({ 'error': `There is no Product ${id}` });
  } catch (err) {
    console.log(err);
    res.status(500).send({ 'error': 'An error has occurred' });
  }
});

module.exports = router;
