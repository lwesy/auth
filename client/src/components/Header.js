import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import styled from "styled-components";

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
`;

const NavLink = styled(Link)`
  margin: 0 1rem;
`;

class Header extends Component {
  renderLinks() {
    if (this.props.auth) {
      return (
        <div>
          <NavLink to="/signout">Sign Out</NavLink>
          <NavLink to="/feature">Feature</NavLink>
        </div>
      );
    }

    return (
      <div>
        <NavLink to="/signup">Sign Up</NavLink>
        <NavLink to="/signin">Sign In</NavLink>
      </div>
    );
  }

  render() {
    return (
      <Nav>
        <NavLink to="/">Redux Auth</NavLink>
        {this.renderLinks()}
      </Nav>
    );
  }
}

const mapStateToProps = state => ({ auth: state.auth.authenticated });

export default connect(mapStateToProps)(Header);
