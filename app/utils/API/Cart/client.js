import 'babel/polyfill';
import 'whatwg-fetch';

const endpoint = '/api/carts';

export default {
  
  async loadCart(id) {
    try {
      let res = await fetch(`${endpoint}/${id}?expand=products`);
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

  async addToCart(id, cartItem) {
    try {
      let res = await fetch(`${endpoint}/${id}/products`, {
        method: 'put',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(cartItem) 
      });
      let cart = await res.json();
      return cart;
    } catch (err) {
      throw new Error(err);
    }
  }
}
