import React from 'react';
import {Button, Input} from 'react-bootstrap';
import {formatMoney} from 'accounting';

class CartDetailsItem extends React.Component {

  static propTypes = {
    flux: React.PropTypes.object.isRequired
  }

  _onSelect = (e) => {
    let cartId = this.props.cartId;
    let sku = this.props.product.sku;
    let qty = Number(e.target.value);
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
    let options = Array.from(Array(10), (x, y) => {
      return (
        <option key={y} value={ y + 1 }>{ y + 1 }</option>
      );
    });

    return (
      <tr>
        <td>
          <img src={ `/img/products/100/${ image }` } />
          <span> { name }</span>
        </td>
        <td>
          <Input ref="qtySelect" type="select" defaultValue={ quantity } onChange={ this._onSelect }>
            { options }
          </Input>
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
