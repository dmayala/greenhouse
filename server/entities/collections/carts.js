import Bookshelf from '../../bookshelf';
import Cart from 'models/cart';

const Carts = Bookshelf.Collection.extend({
  model: Cart
});

export default Carts;
