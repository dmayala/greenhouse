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
  let { sku, quantity } = req.body;

  try {
    let cartItem = await CartItem.forge().where({ cart_id: id, sku }).fetch({ withRelated: [ 'product' ] });

    if (cartItem) {
      cartItem.set('quantity', quantity);
      cartItem = await cartItem.save();
    } else {
      await CartItem.forge({ cart_id: id, sku, quantity }).save();
      cartItem = await CartItem.forge().where({ cart_id: id, sku }).fetch({ withRelated: [ 'product' ] });
    }
    res.send(cartItem);
  } catch (err) {
    console.log(err);
    res.status(500).send({ 'error': 'An error has occurred' });
  }
});

router.delete('/:id/products', async (req, res) => {
  let id = req.params.id;
  let { sku } = req.body;

  try {
    let cartItem = await CartItem.forge().where({ cart_id: id, sku });
    cartItem = await cartItem.destroy();
    res.send({ sku });
  } catch (err) {
    console.log(err);
    res.status(500).send({ 'error': 'An error has occurred' });
  }
});

router.get('/user', async (req, res) => {

  if (req.headers.authorization && req.headers.authorization.split(' ')[0] === 'Bearer') {
    try {
      let expansions = req.query.expand;
      let withRelated = expansions ? expansions.split(',') : [];
      let token = req.headers.authorization.split(' ')[1];
      let decoded = jwt.decode(token, process.env.JWT_SECRET);
      let cart = await Cart.forge({ id: decoded.cart_id }).fetch({ withRelated });
      res.send(cart);
    } catch (err) {
      console.log(err);
      res.status(500).send({ 'error': 'An error has occurred' });
    }
  } else {
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
