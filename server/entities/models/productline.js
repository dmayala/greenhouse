import Bookshelf from '../../bookshelf';
import Product from 'models/product';

const ProductLine = Bookshelf.Model.extend({
  tableName: 'productlines',
  product: function () {
    return this.belongsTo(Product, 'sku');
  }
});

export default ProductLine;
