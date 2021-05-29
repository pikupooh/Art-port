import React from "react";

import { Nav, Navbar, NavItem } from "react-bootstrap";
import { NavLink } from "react-router-dom";

import UserProfileExtras from './userProfileExtras'

class UserProfileNavbar extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      isHome: true
    }
  }

  render() {
    return (
      <div>
            <Navbar bg="dark" expand="sm" className = "user_profile_extras_navbar" variant = "dark">
                <Navbar.Toggle aria-controls="extras-navbar-nav" className = "extra_navbar_show_button" />
                <Navbar.Collapse id="extras-navbar-nav">
                    <Nav className="mx-auto">
                        <NavItem>
                          <NavLink exact to={this.props.match.url} className = "nav-link" activeClassName="nav_link_active">
                            Portfolio
                          </NavLink>
                        </NavItem>
                        <NavItem>
                          <NavLink to={this.props.match.url + "/followers"} className = "nav-link" exact activeClassName="nav_link_active">
                            Followers
                          </NavLink>
                        </NavItem>
                        <NavItem>
                          <NavLink to={this.props.match.url + "/following"} className = "nav-link" activeClassName="nav_link_active">
                            Following
                          </NavLink>
                        </NavItem>
                        <NavItem>
                          <NavLink to={this.props.match.url + "/manga"} className = "nav-link" activeClassName="nav_link_active">
                            Manga
                          </NavLink>
                        </NavItem>
                        <NavItem>
                          <NavLink to={this.props.match.url + "/comics"} className = "nav-link" activeClassName="nav_link_active">
                            Comic
                          </NavLink>
                        </NavItem>
                        <NavItem>
                          <NavLink to={this.props.match.url + "/blogs"} className = "nav-link" activeClassName="nav_link_active">
                            Blogs
                          </NavLink>
                        </NavItem>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
            
            <div  className = "container-fluid">
              <UserProfileExtras match={this.props.match} />
            </div>
        </div>
    )
  }
}

export default UserProfileNavbar;
