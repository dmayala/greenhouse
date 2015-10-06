import React from 'react';
import {Button, Input} from 'react-bootstrap';
import {Link} from 'react-router';
import {formatMoney} from 'accounting';

class CartDetailsItem extends React.Component {

  static propTypes = {
    flux: React.PropTypes.object.isRequired
  }

  _onSelect = (e) => {
    let qty = Number(e.target.value);

    if (qty < 1) {
      e.preventDefault();
    }

    let cartId = this.props.cartId;
    let sku = this.props.product.sku;
    this.props.flux.getActions('cart')
                   .add(cartId, sku, qty);
  }

  _onClick = (e) => {
    let cartId = this.props.cartId;
    let sku = this.props.product.sku;
    this.props.flux.getActions('cart')
                   .destroy(cartId, sku);
  }

  render() {
    let { name, image, quantity, sku, price } = this.props.product;

    return (
      <tr>
        <td>
          <Link to={ `/products/${ sku }` }>
            <img src={ `/img/products/100/${ image }` } />
            <span> { name }</span>
          </Link>
        </td>
        <td>
          <input ref="qtySelect" min="1" max="100" maxLength="3" type="number" defaultValue={ quantity } onKeyDown={ this._onSelect } />
        </td>
        <td>{ sku }</td>
        <td>{ formatMoney(price) }</td>
        <td>
          <Button onClick={ this._onClick }><i className="glyphicon glyphicon-trash"></i> Remove</Button>
        </td>
      </tr>
    );
  }
}

export default CartDetailsItem;
