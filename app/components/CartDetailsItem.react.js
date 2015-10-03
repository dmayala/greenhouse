import React from 'react';
import {Input} from 'react-bootstrap';
import {formatMoney} from 'accounting';

class CartDetailsItem extends React.Component {

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
          <Input ref="qtySelect" type="select" defaultValue={ quantity }>
            { options }
          </Input>
        </td>
        <td>{ sku }</td>
        <td>{ formatMoney(price) }</td>
        <td><button className="btn btn-default"><i className="glyphicon glyphicon-trash"></i> Remove</button></td>
      </tr>
    );
  }
}

export default CartDetailsItem;
