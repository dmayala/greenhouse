import express from 'express';
import ProductCollection from '../collections/products';

const router = express.Router();

router.get('/', async (req, res) => {
  let items = await ProductCollection.forge().fetch();
  res.send(items);
});

module.exports = router;
