import Alt from 'alt';
import AltResolver from 'utils/altResolver';

class Flux extends Alt {

  constructor(config = {}) {
    super(config);

    this._resolver = new AltResolver();

    // Register Actions
    this.addActions('productList', require('actions/ProductListActions'));
    this.addActions('productDetails', require('actions/ProductDetailsActions'));

    // Register Stores
    this.addStore('productList', require('stores/ProductListStore'));
    this.addStore('productDetails', require('stores/ProductDetailsStore'));
  }

  resolve(result) {
    this._resolver.resolve(result);
  }

  render(handler) {
    return this._resolver.render(handler, this);
  }
}

export default Flux;
