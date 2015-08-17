const APIUtils = require(`utils/API/ProductList/${ process.env.BROWSER ? 'client' : 'server' }`)

class ProductListActions { 
  constructor() {
    this.generateActions(
      'getProductsSuccess',
      'getProductsFail'
    );
  }

  getProducts() {
    let promise = APIUtils.loadProducts();
    promise.then((result) => {
      this.actions.getProductsSuccess(result);
    }, (reason) => {
      this.actions.getProductsFail(reason);
    });
    this.alt.resolve(promise);
  }
}

export default ProductListActions; 
