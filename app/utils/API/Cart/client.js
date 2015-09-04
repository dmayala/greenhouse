import 'babel/polyfill';
import 'whatwg-fetch';

const endpoint = '/api/carts';

export default {

  async createCart() {
    try {
      let res = await fetch(`${endpoint}`, { method: 'post' });
      console.log(res);
      let jwt = await res.json();
      return jwt;
    } catch (err) {
      throw new Error(err);
    }
  }
}
