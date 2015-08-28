//import ProductDetailsActions from '../actions/ProductDetailsActions';

class CartStore {
  constructor() {
    this.products = {};
    this.bindActions(this.alt.getActions('cart'));
  }

  onAdd(data) {
    let { sku, qty } = data;
    let product = this.products[sku] || { qty: 0 };
    product.qty = product.qty + qty;  
    this.products[sku] = product;
  }

  onUpdateQty(data) {
  }

  onDestroy(data) {

  }
}

export default CartStore;
