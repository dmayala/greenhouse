import React from 'react';

if (process.env.BROWSER) {
  require('stylesheets/components/_ProductList');
}

class ProductList extends React.Component {
  state = this.getState();

  static contextTypes = {
    router: React.PropTypes.func.isRequired
  }

  static propTypes = {
    flux: React.PropTypes.object.isRequired
  }

  componentWillMount() {
    this.props.flux.getActions('productList')
                   .getProducts();
  }

  componentDidMount() {
    this.props.flux.getStore('productList')
                   .listen(this._onChange);
  }

  componentWillUnmount() {
    this.props.flux.getStore('productList')
                   .unlisten(this._onChange);
  }

  getState() {
    return this.props.flux.getStore('productList')
                          .getState();
  }

  _onChange = () => {
    this.setState(this.getState());
  }

  render() {
    let products = this.state.products.map((product) => {
      return (
        <div className="col-xs-12 col-sm-6 col-md-4 col-lg-3">
          <a className="thumbnail plain" style={{ textAlign: 'center' }}>
            <img src={ `img/products/150/${product.image}` } alt="" />
            <h5>{ product.name }</h5>
            { product.price }
          </a>
      </div>
      );
    });
    return (
      <div className="container">
        <div className="row">
          <div className="thumbnails">
            { products }
          </div>
        </div>
      </div>
    );
  }
}

export default ProductList;
