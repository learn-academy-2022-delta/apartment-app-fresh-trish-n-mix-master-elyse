import React, { Component } from "react";
import { Nav, NavItem } from "reactstrap";
import { NavLink } from "react-router-dom";

class Header extends Component {
  render() {
    const {
      logged_in,
      current_user,
      new_user_route,
      sign_in_route,
      sign_out_route,
    } = this.props;
    console.log("logged_in:", logged_in);
    console.log("current_user:", current_user);
    return (
      <>
        <Nav>
          <NavItem>
            <NavLink to="/apartmentindex">Apartment Listings</NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/">Home</NavLink>
          </NavItem>
          {logged_in && (
            <>
              <NavItem>
                <a href={sign_out_route} className="nav-link">
                  Sign Out
                </a>
              </NavItem>

              <NavItem>
                <NavLink to="/apartmentnew">Add New Apartment</NavLink>
              </NavItem>
              <NavItem>
                <NavLink to="/myapartments">My Apartments</NavLink>
              </NavItem>
            </>
          )}
          {!logged_in && (
            <>
              <NavItem>
                <a href={sign_in_route} className="nav-link">
                  Sign In
                </a>
              </NavItem>

              <NavItem>
                <a href={new_user_route} className="nav-link">
                  Sign Up
                </a>
              </NavItem>
            </>
          )}
        </Nav>
      </>
    );
  }
}
export default Header;
