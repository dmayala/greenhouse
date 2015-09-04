//import ProductDetailsActions from '../actions/ProductDetailsActions';

class CartStore {
  constructor() {
    this.cartId = null;
    this.products = {};
    this.bindActions(this.alt.getActions('cart'));
  }

  onCreateCartSuccess(data) {
    let { id } = data;
    this.cartId = id; 
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
