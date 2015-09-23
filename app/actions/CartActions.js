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

  getCart() {
    let token = localStorage.getItem('jwt');
    let promise = APIUtils.loadCart(token);
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

  add(cartId, sku, quantity) {
    let promise = APIUtils.addToCart(cartId, { sku, quantity });
    promise.then((result) => {
      this.actions.addToCartSuccess(result);
    }, (reason) => {
      this.actions.addToCartFail(reason);
    });
    this.alt.resolve(promise);
  }

  updateQty(sku, quantity) {
    return { sku, quantity };
  }

  destroy(sku) {
    return { sku };
  }

}

export default CartActions; 
