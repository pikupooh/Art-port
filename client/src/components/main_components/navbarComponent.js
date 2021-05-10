import 'bootstrap/dist/css/bootstrap.min.css';
import ProfileCircle from '../small_components/profileCircle'

import { Nav, NavItem, Navbar } from "react-bootstrap"
import { Link } from 'react-router-dom'
import  SearchBar from '../small_components/search_bar'

const NavbarComponent = () => {

    return(
        <div>
            <Navbar bg="dark" expand="sm" fixed='top' variant = "dark">
                <Navbar.Brand href="/"><strong>Art</strong> Port</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <SearchBar />
                    <Nav className="ml-auto">
                        <NavItem >
                            <Link to ="/comics" className = "nav-link">Comics</Link>
                        </NavItem>
                        <NavItem>
                            <Link to ="/blogs" className = "nav-link">Blogs</Link>
                        </NavItem>
                        <NavItem>
                            <Link to="/manga" className = "nav-link">Manga</Link>
                        </NavItem>
                        <NavItem>
                            <Link to = "/about" className = "nav-link">About</Link>
                        </NavItem>
                        <NavItem className = "nav_profile">
                            <ProfileCircle />
                        </NavItem>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    )
}

export default NavbarComponent