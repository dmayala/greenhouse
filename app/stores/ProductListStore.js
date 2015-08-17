import {contains} from 'lodash';
import ProductListActions from '../actions/ProductListActions';

class ProductListStore {
  constructor() {
    this.products = [];
    this.bindActions(this.alt.getActions('productList'));
  }

  onGetProductsSuccess(data) {
    //Object.assign(this, data.entities);
    this.products = data;
  }

  onGetProductsFail(err) {
    console.log(err);
  }
}

export default ProductListStore;
