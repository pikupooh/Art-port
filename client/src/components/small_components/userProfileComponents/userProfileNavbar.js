import React from "react";

import { Nav, NavItem } from "react-bootstrap";
import { Link } from "react-router-dom";

class UserProfileNavbar extends React.Component {
  render() {
    return (
      <Nav
        className="navbar navbar-expand-sm bg-dark navbar-dark fixed-top"
        id="profile_navbar"
        style={{ zIndex: 1 }}
      >
        <span className="navbar-nav mx-auto">
          <NavItem>
            <Link to={this.props.match.url} className="nav-link">
              Portfolio
            </Link>
          </NavItem>
          <NavItem>
            <Link to={this.props.match.url + "/followers"} className="nav-link">
              Followers
            </Link>
          </NavItem>
          <NavItem>
            <Link to={this.props.match.url + "/following"} className="nav-link">
              Following
            </Link>
          </NavItem>
          <NavItem>
            <Link to={this.props.match.url + "/manga"} className="nav-link">
              Manga
            </Link>
          </NavItem>
          <NavItem>
            <Link to={this.props.match.url + "/comics"} className="nav-link">
              Comic
            </Link>
          </NavItem>
          <NavItem>
            <Link to={this.props.match.url + "/blogs"} className="nav-link">
              Blogs
            </Link>
          </NavItem>
          {/* <NavItem>
            <Link to={this.props.match.url + "/about"} className="nav-link">
              About
            </Link>
          </NavItem> */}
        </span>
      </Nav>
    );
  }
}

export default UserProfileNavbar;
