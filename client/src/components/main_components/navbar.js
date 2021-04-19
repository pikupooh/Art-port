import { Nav, NavItem, Button } from "react-bootstrap"
import {Link} from 'react-router-dom'

import 'bootstrap/dist/css/bootstrap.min.css';
import ProfileCircle from '../small_components/profileCircle'



const Navbar = props => {
    
    const { location, onShowModal } = props

    return(
        <div>
            <Nav className="navbar navbar-expand-sm bg-dark navbar-dark" activeKey = {location.pathname}>
                <a className = 'navbar-brand ' href = '/'><strong>Art</strong> Port</a> 
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