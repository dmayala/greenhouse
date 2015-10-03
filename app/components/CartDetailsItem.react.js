import React from 'react';
import {Button, Input} from 'react-bootstrap';
import {formatMoney} from 'accounting';

class CartDetailsItem extends React.Component {

  _onSelect = (e) => {
    console.log(`selected ${e.target.value}`);
  }

  _onClick = (e) => {
    console.log('clicked remove');
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
