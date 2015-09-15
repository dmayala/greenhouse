import Bookshelf from '../../bookshelf';
import CartItem from 'models/cartitem';

const CartItems = Bookshelf.Collection.extend({
  model: CartItem
});

export default CartItems;
