import { Nav } from "react-bootstrap"

import 'bootstrap/dist/css/bootstrap.min.css';

const Navbar = () => {
    return(
        <div>
            <Nav className="navbar navbar-expand-sm bg-dark navbar-dark">
                <a className = 'navbar-brand ' href = '/'><strong>Art</strong> Port</a> 
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                        <a className = "nav-link" href="/comics">Comics</a>
                    </li>
                    <li className="nav-item">
                        <a className = "nav-link" href="/blogs">Blogs</a>
                    </li>
                    <li class="nav-item">
                        <a className = "nav-link" href="/manga">Manga</a>
                    </li>
                    <li class="nav-item">
                        <a className = "nav-link" href="/about">About</a>
                    </li>
                </ul>
            </Nav>
        </div>
    )
}

export default Navbar