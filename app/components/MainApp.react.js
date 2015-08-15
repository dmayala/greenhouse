import React from 'react';
import {RouteHandler} from 'react-router';

if (process.env.BROWSER) {
  require('stylesheets/app');
}

export class MainApp extends React.Component {
  render() {
    const props = Object.assign({}, this.state, this.props);
    return (
      <div>
        <RouteHandler {...props}/>
      </div>
    );
  }
}
