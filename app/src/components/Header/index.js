import React from 'react'
import {Navbar, NavbarBrand} from 'reactstrap';
import {Link} from 'react-router-dom'

export default class Header extends React.Component {
  render() {
    return (
      <header>
        <Navbar color="faded" light toggleable>
          <NavbarBrand tag={Link} to="/">Product Comparison Application</NavbarBrand>
        </Navbar>
      </header>
    );
  }
}
