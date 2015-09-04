import express from 'express';
import Cart from 'models/cart';
import CartCollection from 'collections/carts';
import jwt from 'jwt-simple';

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
    let token = jwt.encode({ cart_id: cart.get('id') }, process.env.JWT_SECRET);
    res.send({ token });
  } catch (err) {
    console.log(err);
    res.status(500).send({ 'error': 'An error has occurred' });
  }
});

module.exports = router;
