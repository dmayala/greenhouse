const APIUtils = require(`utils/API/Cart/${ process.env.BROWSER ? 'client' : 'server' }`)

class CartActions { 

  constructor() {
    this.generateActions(
      'createCartSuccess',
      'createCartFail',
      'getCartSuccess',
      'getCartFail',
      'addToCartSuccess',
      'addToCartFail'
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

  add(cartId, sku, qty) {
    let promise = APIUtils.addToCart(cartId, { sku, qty });
    promise.then((result) => {
      this.actions.addToCartSuccess(result);
    }, (reason) => {
      this.actions.addToCartFail(reason);
    });
    this.alt.resolve(promise);
  }

  updateQty(sku, qty) {
    return { sku, qty };
  }

  destroy(sku) {
    return { sku };
  }

}

export default CartActions; 
