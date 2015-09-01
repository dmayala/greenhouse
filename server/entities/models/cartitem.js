import Bookshelf from '../../bookshelf';
import Product from 'models/product';

const CartItem = Bookshelf.Model.extend({
  tableName: 'cartitems',
  product: function () {
    return this.belongsTo(Product, 'sku');
  }
});

export default CartItem;
