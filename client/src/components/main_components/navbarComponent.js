import ProfileCircle from '../small_components/profileCircle'

import { Nav, Navbar, NavItem } from "react-bootstrap"
import { NavLink, withRouter } from 'react-router-dom'
import  SearchBar from '../small_components/search_bar'

const SearchBarWithRouter = withRouter(SearchBar)

const NavbarComponent = () => {
    
    return(
            <Navbar bg="dark" expand="sm" fixed = "top" variant = "dark" >
                <Navbar.Brand href="/"><strong>Art</strong> Port</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" data-toggle="collapse" data-target="#basic-navbar-nav"/>
                <Navbar.Collapse id="basic-navbar-nav">
                <div className = "desktop_screen_search_bar">
                        <SearchBarWithRouter />
                    </div>
                    <Nav className="ml-auto">
                        <NavItem>
                            <NavLink to ="/comics" className = "nav-link" activeClassName = "active_nav_item">Comics</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink to ="/blogs" className = "nav-link" activeClassName = "active_nav_item">Blogs</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink to="/manga" className = "nav-link" activeClassName = "active_nav_item">Manga</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink to = "/about" className = "nav-link" activeClassName = "active_nav_item">About</NavLink>
                        </NavItem>
                        <NavItem className = "ml-1">
                            <ProfileCircle />
                        </NavItem>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
    )
}

export default NavbarComponent