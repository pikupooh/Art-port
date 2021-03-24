import { Nav, NavItem, Button } from "react-bootstrap"

import 'bootstrap/dist/css/bootstrap.min.css';


const Navbar = props => {

    const { location, onClick } = props
    
    return(
        <div>
            <Nav className="navbar navbar-expand-sm bg-dark navbar-dark" activeKey = {location.pathname}>
                <a className = 'navbar-brand ' href = '/'><strong>Art</strong> Port</a> 
                <span className = "navbar-nav ml-auto">
                    <NavItem >
                        <Nav.Link href="/comics">Comics</Nav.Link>
                    </NavItem>
                    <NavItem>
                        <Nav.Link href="/blogs">Blogs</Nav.Link>
                    </NavItem>
                    <NavItem>
                        <Nav.Link href="/manga">Manga</Nav.Link>
                    </NavItem>
                    <NavItem>
                        <Nav.Link href="/about">About</Nav.Link>
                    </NavItem>
                    <Button className = 'btn btn-sm btn-danger' id = 'sign_in_btn' onClick = {() => {onClick()}}>
                        Sign in
                    </Button>
                </span>
            </Nav>
        </div>
    )
}

export default Navbar