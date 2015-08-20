import Products from 'collections/products';

export default {

  async loadProducts() {
    try {
      let products = await Products.forge().fetch();
      return products.toJSON();
    } catch (err) {
      throw new Error(err);
    }
  }
}
