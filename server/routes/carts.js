import express from 'express';
import Cart from 'models/cart';
import CartItem from 'models/cartitem';
import CartItems from 'collections/cartitems';
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
    cart.set('token', token);
    res.send(cart);
  } catch (err) {
    console.log(err);
    res.status(500).send({ 'error': 'An error has occurred' });
  }
});


router.put('/:id/products', async (req, res) => {
  let id = req.params.id;
  let { sku, qty } = req.body;

  try {
    let cartItem = await CartItem.forge().where({ cart_id: id, sku }).fetch();

    if (cartItem) {
      cartItem.set('quantity', cartItem.get('quantity') + qty);
      await cartItem.save();
    } else {
      await CartItem.forge({ cart_id: id, sku, quantity: qty }).save();
    }

    let cart = await Cart.forge({ id }).fetch();
    res.send(cart);
  } catch (err) {
    console.log(err);
    res.status(500).send({ 'error': 'An error has occurred' });
  }
});

router.get('/:id', async (req, res) => {
  let id = req.params.id;
  let expansions = req.query.expand;
  let withRelated = expansions ? expansions.split(',') : [];

  let cart = await Cart.forge({ id }).fetch({ withRelated });
  res.send(cart);
});

module.exports = router;
