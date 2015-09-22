import React from 'react';

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
    return (
      <pre>
        { JSON.stringify(this.state) }
      </pre>
    );
  }
}

export default CartDetails;
