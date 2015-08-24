import React from 'react';
import {Link} from 'react-router';
import {formatMoney} from 'accounting';

if (process.env.BROWSER) {
  require('stylesheets/components/_ProductListItem');
}

class ProductListItem extends React.Component {
  
  render() {
    let product = this.props.product;
    return (
      <div className="product-list-item col-xs-12 col-sm-6 col-md-4 col-lg-3">
        <Link to={ `/products/${ product.id }` } className="thumbnail" style={{ textAlign: 'center' }}>
          <img src={ `img/products/290/${product.image}` } alt="" />
          <div className="product-title">{ product.name }</div>
          <div className="product-price">{ formatMoney(product.price) }</div>
        </Link>
      </div>
    );
  }
}

export default ProductListItem;
