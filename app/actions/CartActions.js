class CartActions { 

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
