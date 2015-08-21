import React from 'react';

class ProductListItem extends React.Component {
  
  render() {
    let product = this.props.product;
    return (
      <div className="col-xs-12 col-sm-6 col-md-4 col-lg-3">
        <a className="thumbnail plain" style={{ textAlign: 'center' }}>
          <img src={ `img/products/150/${product.image}` } alt="" />
          <h5>{ product.name }</h5>
          { product.price }
        </a>
      </div>
    );
  }
}

export default ProductListItem;
