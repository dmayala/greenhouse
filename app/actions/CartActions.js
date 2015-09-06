const APIUtils = require(`utils/API/Cart/${ process.env.BROWSER ? 'client' : 'server' }`)

class CartActions { 

  constructor() {
    this.generateActions(
      'createCartSuccess',
      'createCartFail',
      'getCartSuccess',
      'getCartFail'
    );
  }

  getCart(id) {
    let promise = APIUtils.loadCart(id);
    promise.then((result) => {
      this.actions.getCartSuccess(result);
    }, (reason) => {
      this.actions.getCartFail(reason);
    });
    this.alt.resolve(promise);
  }

  create() {
    let promise = APIUtils.createCart();
    promise.then((result) => {
      localStorage.setItem('jwt', result.token);
      this.actions.createCartSuccess(result);
    }, (reason) => {
      this.actions.createCartFail(reason);
    });
    this.alt.resolve(promise);
  }

  add(sku, qty) {
    return { sku, qty };
  }

  updateQty(sku, qty) {
    return { sku, qty };
  }

  destroy(sku) {
    return { sku };
  }

}

export default CartActions; 
