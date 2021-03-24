import React from 'react'
import { BrowserRouter, Route, withRouter } from 'react-router-dom'

import Navbar from './components/navbar'
import Home from './components/home'
import Comics from './components/comics'
import Blogs from './components/blogs'
import Manga from './components/manga'
import About from './components/about'
import SignInModal from './components/sign_in_modal'


const NavbarwithRouter = withRouter(Navbar);

class App extends React.Component {

  constructor(props) {
		super(props);

		this.handleShow = this.handleShow.bind(this);
		this.handleClose = this.handleClose.bind(this);

		this.state = {
			show: false,
		};
	}

  handleClose() {
		this.setState({ show: false });
	}

	handleShow() {
		this.setState({ show: true });
	}

  render() {
    return (
      <BrowserRouter>
        <div>
          <NavbarwithRouter onClick = {this.handleShow}/>
          <Route  path = '/' exact component = {Home}/> 
          <Route  path = '/comics' component = {Comics} />
          <Route  path = '/blogs' component = {Blogs} />
          <Route  path = '/manga' component = {Manga} />
          <Route  path = '/about' component = {About} />
          <SignInModal show = {this.state.show} handleClose = {this.handleClose} />
          

        </div>    
      </BrowserRouter>
    );
  }
}

export default App