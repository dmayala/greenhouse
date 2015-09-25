import React from 'react';
import {Table, Input} from 'react-bootstrap';
import {formatMoney} from 'accounting';

if (process.env.BROWSER) {
  require('stylesheets/components/_CartDetails');
}

class CartDetails extends React.Component {

  state = this.getState();

  static contextTypes = {
    router: React.PropTypes.func.isRequired
  }

  static propTypes = {
    flux: React.PropTypes.object.isRequired
  }

  componentDidMount() {
    this.props.flux
              .getStore('cart')
              .listen(this._onChange);
  }

  componentWillUnmount() {
    this.props.flux
              .getStore('cart')
              .unlisten(this._onChange);
  }

  _onChange = () => {
    this.setState(this.getState());
  }

  getState() {
    return this.props.flux.getStore('cart')
                          .getState();
  }

  render() {
    let total = 0;
    let products = this.state.products.map((product, index) => {
      let { name, quantity, sku, price } = product;
      total += Number(price);
      return (
        <tr key={ index }>
          <td>{ name }</td>
          <td>{ quantity }</td>
          <td>{ sku }</td>
          <td>{ formatMoney(price) }</td>
          <td>
            <Input ref="qtySelect" type="select" placeholder="1">
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
            </Input>
          </td>
        </tr>
      );
    });

    return (
      <div className="container">
      <h2>Shopping Cart</h2>
        <Table hover>
          <thead>
            <tr>
              <th>Product</th>
              <th>Quantity</th>
              <th>SKU</th>
              <th>Price</th>
              <th>Quantity</th>
            </tr>
          </thead>
          <tbody>
            { products }
          </tbody>
        </Table>
        <span>Total { formatMoney(total) }</span>
      </div>
    );
  }
}

export default CartDetails;
