import Cart from 'models/cart';

export default {

  async loadCart(id) {
    try {
      let cart = await Cart.forge({ id }).fetch();
      return cart.toJSON();
    } catch (err) {
      throw new Error(err);
    }
  },

  async createCart() {
    try {
      let cart = await Cart.forge().save();
      return cart.toJSON();
    } catch (err) {
      throw new Error(err);
    }
  }
}
