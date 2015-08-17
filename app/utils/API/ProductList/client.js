import 'babel/polyfill';
import 'whatwg-fetch';

const endpoint = '/api/products';

export default {

  async loadProducts() {
    try {
      let res = await fetch(endpoint);
      let products = await res.json();
      return products;
    } catch (err) {
      throw new Error(err);
    }
  }
}
