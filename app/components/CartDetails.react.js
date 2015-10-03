import React from 'react';
import CartDetailsItem from 'components/CartDetailsItem.react';
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
    let total = 0;
    let products = this.state.products.map((product, index) => {
      total += Number(product.price);
      return (
        <CartDetailsItem key={ index } product={ product } /> 
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
              <th></th>
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
