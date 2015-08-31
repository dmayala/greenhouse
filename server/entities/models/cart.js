import Bookshelf from '../../bookshelf';
import ProductLine from 'models/productline';

const Cart = Bookshelf.Model.extend({
  tableName: 'carts',
  products: function () {
    return this.hasMany(ProductLine, 'cart_id');
  }
});

export default Cart;
