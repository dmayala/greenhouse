import {findIndex} from 'lodash';

class CartStore {
  constructor() {
    this.cartId = null;
    this.products = [];
    this.bindActions(this.alt.getActions('cart'));
  }

  onGetCartSuccess(data) {
    let { id, products } = data;
    this.cartId = id; 
    this.products = products.map((cartitem) => {
      let { sku, quantity } = cartitem;
      let { name, price, image } = cartitem.product;
      return { sku, name, price, image, quantity };
    });
  }

  onCreateCartSuccess(data) {
    let { id } = data;
    this.cartId = id; 
  }

  onAddToCartSuccess(data) {
    let index = findIndex(this.products, { sku: data.sku });
    index = index > -1 ? index : this.products.length;
    let product = this.products[index] || { 
                                            name: data.product.name,
                                            price: data.product.price,
                                            sku: data.sku,
                                            image: data.product.image,
                                            quantity: 0 
                                          };
    product.quantity = data.quantity;  
    this.products[index] = product;
  }

  onRemoveFromCartSuccess(data) {
    let products = this.products;
    let index = findIndex(products, { sku: data.sku });
    if (index > -1) {
        products.splice(index, 1);
    }
  }

  onUpdateQty(data) {

  }

  onDestroy(data) {

  }
}

export default CartStore;
