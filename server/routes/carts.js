import express from 'express';
import Cart from 'models/cart';
import CartCollection from 'collections/carts';

const router = express.Router();

router.get('/', async (req, res) => {
  let expansions = req.query.expand;
  let withRelated = expansions ? expansions.split(',') : [];

  let carts = await CartCollection.forge().fetch({ withRelated });
  res.send(carts);
});


router.post('/', async (req, res) => {
  try {
    let cart = await Cart.forge().save();
    res.send(cart);
  } catch (err) {
    console.log(err);
    res.status(500).send({ 'error': 'An error has occurred' });
  }
});

module.exports = router;
