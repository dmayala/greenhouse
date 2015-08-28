import React from 'react';
import {Button, Input} from 'react-bootstrap';
import {formatMoney} from 'accounting';

if (process.env.BROWSER) {
  require('stylesheets/components/_ProductDetails');
}

class ProductDetails extends React.Component {

  state = this.getState();

  static contextTypes = {
    router: React.PropTypes.func.isRequired
  }

  static propTypes = {
    flux: React.PropTypes.object.isRequired
  }

  componentWillMount() {
    if (this.context.router.getCurrentParams().id) {
      this.props.flux.getActions('productDetails')
                     .getProduct(this.props.params.id);
    }
  }

  componentDidMount() {
    this.props.flux
              .getStore('productDetails')
              .listen(this._onChange);
  }

  componentWillUnmount() {
    this.props.flux
              .getStore('productDetails')
              .unlisten(this._onChange);
  }

  addToCart = () => {
    let sku = this.state.product.id;
    let qty = Number(this.refs.qtySelect.getValue());
    this.props.flux.getActions('cart')
                   .add(sku, qty);
  }

  _onChange = () => {
    this.setState(this.getState());
  }

  getState() {
    return this.props.flux.getStore('productDetails')
                          .getState();
  }

  render() {
    let product = this.state.product;
    return (
      <div className="product-details container">
        <div className="row">
          <div className="col-md-8 product-image">
            <img src={ `/img/products/720/${product.image}` } />
          </div>
          <div className="col-md-4">
            <div className="name"><h1>{ product.name }</h1></div>
            <div className="price">{ formatMoney(product.price) }</div>
            <div className="addToCart row">
              <div className="col-md-3">
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
              </div>
              <div className="col-md-9 cart-button">
                <Button bsStyle="primary" onClick={ this.addToCart }>Add to Cart</Button>
              </div>
            </div>
            <div className="description">{ product.description }</div>
          </div>
        </div>
      </div>
    );
  }
}

export default ProductDetails;
