import React from 'react';
import {Button, Input} from 'react-bootstrap';
import {Link} from 'react-router';
import {formatMoney} from 'accounting';

class CartDetailsItem extends React.Component {

  static propTypes = {
    flux: React.PropTypes.object.isRequired
  }

  state = {
    updating: false
  };

  _onInput = (e) => {
    let inputVal = e.target.value;
    if (!inputVal.length || Number(inputVal) < 0) {
      e.preventDefault(); 
      return this.setState({ updating: false });
    }
    
    this.setState({ updating: true });
  }

  _onRemove = (e) => {
    let cartId = this.props.cartId;
    let sku = this.props.product.sku;
    this.props.flux.getActions('cart')
                   .destroy(cartId, sku);
  }

  _onUpdate = (e) => {
    e.preventDefault();
    let qty = Number(this.refs.qtySelect.getDOMNode().value);

    if (qty === 0) {
      return this._onRemove();
    }

    let cartId = this.props.cartId;
    let sku = this.props.product.sku;
    this.props.flux.getActions('cart')
                   .add(cartId, sku, qty);

    this.setState({ updating: false });
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
          <input ref="qtySelect" min="0" max="100" maxLength="3" type="number" defaultValue={ quantity } onInput={ this._onInput } />
          <br />
          { this.state.updating ? <a href="#" onClick={ this._onUpdate }>Update</a> : null }
        </td>
        <td>{ sku }</td>
        <td>{ formatMoney(price) }</td>
        <td>
          <Button onClick={ this._onRemove }><i className="glyphicon glyphicon-trash"></i> Remove</Button>
        </td>
      </tr>
    );
  }
}

export default CartDetailsItem;
