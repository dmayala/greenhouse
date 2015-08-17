import Products from 'products';

export default {

  async loadProducts() {
    try {
      let products = await Products.forge().fetch();
      return products;
    } catch (err) {
      throw new Error(err);
    }
  }
}
