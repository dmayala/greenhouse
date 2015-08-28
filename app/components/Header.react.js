import React from 'react';
import {Link} from 'react-router';
import {Navbar, CollapsibleNav, Nav, DropdownButton, MenuItem, NavItem} from 'react-bootstrap';
import CartHeader from 'components/CartHeader.react';

if (process.env.BROWSER) {
  require('stylesheets/components/_Header');
}

class Header extends React.Component {
  render() {
    const props = Object.assign({}, this.state, this.props);
    return (
      <Navbar brand={<Link to="/">Greenhouse</Link>} toggleNavKey={0} >
        <CollapsibleNav eventKey={0}>
          <Nav navbar>
          </Nav>
          <Nav navbar right>
            <CartHeader {...props} />
            <DropdownButton eventKey={4} title="Resources">
              <MenuItem href="https://facebook.github.io/react/" target="_blank">React</MenuItem>
              <MenuItem href="https://facebook.github.io/flux/" target="_blank">Flux</MenuItem>
              <MenuItem href="http://alt.js.org/" target="_blank">Alt</MenuItem>
              <MenuItem href="http://expressjs.com/" target="_blank">Express</MenuItem>
              <MenuItem href="http://postgresql.org/" target="_blank">Postgres</MenuItem>
              <MenuItem divider />
              <MenuItem header>This App</MenuItem>
              <MenuItem href="https://github.com/dmayala/greenhouse" target="_blank">GitHub Repository</MenuItem>
            </DropdownButton>
          </Nav>
        </CollapsibleNav>
      </Navbar>
    );
  }
}

export default Header;
