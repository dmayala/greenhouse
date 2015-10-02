import React from 'react';
import {Link} from 'react-router';

if (process.env.BROWSER) {
  require('stylesheets/components/_Home');
}

class Home extends React.Component {
  render() {
    return (
      <div className="container" id="content">
        <div>
          <div className="home-hero">
            <h1>Welcome to The Greenhouse</h1>

            <h3>A sample Isomorphic SPA built with React, Flux, Alt, Express, and Postgres</h3><br />

            <div style={{ opacity: '.9' }}>
              <Link className="btn btn-default" to="products">
                <i className="glyphicon glyphicon-apple pull-left" style={{ marginRight: '6px', fontSize: '40px' }}></i> 
                  Start Browsing<br />
                  The Greenhouse
              </Link>
              <a className="btn btn-default" href="https://github.com/dmayala/Greenhouse">
                <img className="pull-left" src="img/github.png" style={{ marginRight: '6px' }} />
                View Project<br />on GitHub
              </a>
            </div>
          </div>

          <div className="bs-docs-social">
            <div className="container">
              <ul className="bs-docs-social-buttons">
                <li><iframe className="github-btn" frameBorder="0" height="20px"
                scrolling="0" src=
                "http://ghbtns.com/github-btn.html?user=dmayala&amp;repo=greenhouse&amp;type=watch&amp;count=true"
                width="100px"></iframe></li>

                <li><iframe className="github-btn" frameBorder="0" height="20px"
                scrolling="0" src=
                "http://ghbtns.com/github-btn.html?user=dmayala&amp;repo=greenhouse&amp;type=fork&amp;count=true"
                width="98px"></iframe></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
