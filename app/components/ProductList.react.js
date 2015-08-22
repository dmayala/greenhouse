import React from 'react';
import ProductListItem from 'components/ProductListItem.react';

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
        <ProductListItem product={product} />
      );
    });
    return (
      <div className="container">
        <div className="with-header row">
          <div className="header-image">
            <h1>Fruity</h1>
            <h2>The deliciously sweet scents of a country orchard stroll</h2>
          </div>
          <div className="thumbnails">
            { products }
          </div>
        </div>
      </div>
    );
  }
}

export default ProductList;
