import Bookshelf from '../../bookshelf';

const Product = Bookshelf.Model.extend({
  tableName: 'products'
});

export default Product;
