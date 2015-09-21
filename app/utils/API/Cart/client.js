import 'babel/polyfill';
import 'whatwg-fetch';

const endpoint = '/api/carts';

export default {
  
  async loadCart(token) {
    try {
      let res = await fetch(`${endpoint}/user?expand=products`, {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
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
