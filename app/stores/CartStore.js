//import ProductDetailsActions from '../actions/ProductDetailsActions';

class CartStore {
  constructor() {
    this.cartId = null;
    this.products = {};
    this.bindActions(this.alt.getActions('cart'));
  }

  onGetCartSuccess(data) {
    let { id } = data;
    this.cartId = id; 
  }

  onCreateCartSuccess(data) {
    let { id } = data;
    this.cartId = id; 
  }

  onAddToCartSuccess(data) {
    let { sku, quantity } = data;
    let product = this.products[sku] || { qty: 0 };
    product.qty = quantity;  
    this.products[sku] = product;
  }

  onUpdateQty(data) {

  }

  onDestroy(data) {

  }
}

export default CartStore;
