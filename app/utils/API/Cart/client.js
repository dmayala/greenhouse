import 'babel/polyfill';
import 'whatwg-fetch';

const endpoint = '/api/carts';

export default {
  
  async loadCart(id) {
    try {
      let res = await fetch(`${endpoint}/${id}`);
      let cart = await res.json();
      return cart;
    } catch (err) {
      throw new Error(err);
    }
  },

  async createCart() {
    try {
      let res = await fetch(`${endpoint}`, { method: 'post' });
      let cart = await res.json();
      return cart;
    } catch (err) {
      throw new Error(err);
    }
  },

  async addToCart(cartItem) {
    try {
      let res = await fetch(`${endpoint}`, {
        method: 'put',
        body: JSON.stringify(cartItem) 
      });
      let cart = await res.json();
      return cart;
    } catch (err) {
      throw new Error(err);
    }
  }
}
