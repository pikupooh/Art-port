import 'bootstrap/dist/css/bootstrap.min.css';
import ProfileCircle from '../small_components/profileCircle'

import { Nav, NavItem } from "react-bootstrap"
import { Link } from 'react-router-dom'
import  SearchBar from '../small_components/search_bar'

const Navbar = props => {
    
    const { location, onShowModal } = props

    return(
        <div>
            <Nav className="navbar navbar-expand-sm bg-dark navbar-dark fixed-top" activeKey = {location.pathname}>
                <Link to ="/" className = 'navbar-brand '><strong>Art</strong> Port</Link>
                 <SearchBar />
                <span className = "navbar-nav ml-auto">
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
                    <div className = "nav_profile">
                        <ProfileCircle onShowModal = {onShowModal} />
                    </div>
                </span>
            </Nav>
        </div>
    )
}

export default Navbar