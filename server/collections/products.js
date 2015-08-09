import Bookshelf from '../bookshelf';
import Product from '../models/product';

const Products = Bookshelf.Collection.extend({
  model: Product
});

export default Products;
