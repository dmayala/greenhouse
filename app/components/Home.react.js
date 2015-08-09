import React from 'react';

if (process.env.BROWSER) {
  require('stylesheets/components/_Home');
}

export class Home extends React.Component {
  render() {
    return (
      <div>
        <h1>Hello World!</h1>
      </div>
    );
  }
}
