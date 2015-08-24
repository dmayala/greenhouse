import ProductDetailsActions from '../actions/ProductDetailsActions';

class ProductDetailsStore {
  constructor() {
    this.product = {};
    this.bindActions(this.alt.getActions('productDetails'));
  }

  onGetProductSuccess(data) {
    this.product = data;
  }

  onGetProductFail(err) {
    console.log(err);
  }
}

export default ProductDetailsStore;
