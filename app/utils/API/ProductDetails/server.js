import Product from 'models/product';

export default {

  async loadProduct(id) {
    try {
      let product = await Product.forge({ id }).fetch();
      return product.toJSON();
    } catch (err) {
      throw new Error(err);
    }
  }
}
