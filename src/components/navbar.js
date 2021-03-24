import { Nav, NavItem } from "react-bootstrap"

import 'bootstrap/dist/css/bootstrap.min.css';

const Navbar = props => {

    const { location } = props;

    console.log(location.pathname);
    
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
                    <NavItem>
                        <Nav.Link href="/signIn">SignIn</Nav.Link>
                    </NavItem>
                </span>
            </Nav>
        </div>
    )
}

export default Navbar