import 'babel/polyfill';
import 'whatwg-fetch';

const endpoint = '/api/products';

export default {

  async loadProduct(id) {
    try {
      let res = await fetch(`${endpoint}/${id}`);
      let product = await res.json();
      return product;
    } catch (err) {
      throw new Error(err);
    }
  }
}
