import Bookshelf from '../../bookshelf';
import CartItem from 'models/cartitem';

const Cart = Bookshelf.Model.extend({
  tableName: 'carts',
  products: function () {
    return this.hasMany(CartItem, 'cart_id');
  }
});

export default Cart;
