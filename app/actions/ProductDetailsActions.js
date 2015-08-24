const APIUtils = require(`utils/API/ProductDetails/${ process.env.BROWSER ? 'client' : 'server' }`)

class ProductDetailsActions { 
  constructor() {
    this.generateActions(
      'getProductSuccess',
      'getProductFail'
    );
  }

  getProduct(id) {
    let promise = APIUtils.loadProduct(id);
    promise.then((result) => {
      this.actions.getProductSuccess(result);
    }, (reason) => {
      this.actions.getProductFail(reason);
    });
    this.alt.resolve(promise);
  }
}

export default ProductDetailsActions; 
