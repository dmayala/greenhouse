import React from 'react';
import {Table} from 'react-bootstrap';
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
    let products = this.state.products.map((product, index) => {
      let { name, quantity, sku, price } = product;
      return (
        <tr key={ index }>
          <td>{ name }</td>
          <td>{ quantity }</td>
          <td>{ sku }</td>
          <td>{ formatMoney(price) }</td>
        </tr>
      );
    });

    return (
      <div className="container">
        <Table hover>
          <thead>
            <tr>
              <th>Product</th>
              <th>Quantity</th>
              <th>SKU</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            { products }
          </tbody>
        </Table>
      </div>
    );
  }
}

export default CartDetails;
