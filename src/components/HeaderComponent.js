import React, { Component } from 'react';
import {
  Nav, Navbar, NavbarBrand, NavbarToggler,
  Collapse, NavItem
} from 'reactstrap';
import { NavLink } from 'react-router-dom';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isNavOpen: false
    };
    this.toggleNav = this.toggleNav.bind(this);
  }
  toggleNav() {
    this.setState({
      isNavOpen: !this.state.isNavOpen
    })
  }
  render() {
    return (
      <React.Fragment>
        <Navbar dark expand="md">
          <div className="row">
            < NavbarToggler onClick={this.toggleNav} />
            <NavbarBrand className="mr-auto" href="/">
              <img src="assets/images/logo.png" height="30" width="41"
                alt="Ristorante Con Fusion" />
            </NavbarBrand>
            <Collapse isOpen={this.state.isNavOpen} navbar>
              <Nav navbar>
                <NavItem>
                  <NavLink className="nav-link" to="/stafflist">
                    <span className="fa fa-user-o"></span> Nhân Viên</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink className="nav-link" to="/room">
                    <span className="fa fa-address-card" ></span> Phòng Ban</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink className="nav-link" to="/salary">
                    <span className="fa fa-list-alt" ></span> Bảng Lương</NavLink>
                </NavItem>
              </Nav>
            </Collapse>
          </div>
        </Navbar>
      </React.Fragment>
    );
  }
}
export default Header;