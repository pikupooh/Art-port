import { Nav, NavItem, Button } from "react-bootstrap"
import {Link} from 'react-router-dom'

import 'bootstrap/dist/css/bootstrap.min.css';



const Navbar = props => {

    const { location, onClick } = props
    
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
                    <Button  className = 'btn btn-sm' onClick = {() => onClick()}>Sign In </Button>
                </span>
            </Nav>
        </div>
    )
}

export default Navbar