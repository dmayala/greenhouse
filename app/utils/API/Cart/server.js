import Cart from 'models/cart';

export default {

  async createCart() {
    try {
      let cart = await Cart.forge().save();
      return cart.toJSON();
    } catch (err) {
      throw new Error(err);
    }
  }
}
