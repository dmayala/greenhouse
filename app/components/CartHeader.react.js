import React from 'react';
import {NavItemLink} from 'react-router-bootstrap';

class CartHeader extends React.Component {

  state = this.getState();

  static propTypes = {
    flux: React.PropTypes.object.isRequired
  }

  componentDidMount() {
    this.props.flux
              .getStore('cart')
              .listen(this._onChange);

    let token = localStorage.getItem('jwt');
    if (token) {
      this.props.flux.getActions('cart')
                     .getCart();
    }
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
    let products = this.state.products;
    let keys = Object.keys(products);
    let totalQty = 0;

    if (keys.length > 0) {
      keys.forEach((sku) => {
        totalQty += products[sku].quantity; 
      });
    }

    return (
        <NavItemLink eventKey={1} to="cart">
          <i className="glyphicon glyphicon-shopping-cart"> { totalQty }</i>
        </NavItemLink>
    );
  }

}

export default CartHeader;
