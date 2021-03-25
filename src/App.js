import React from 'react'
import { BrowserRouter, Route, withRouter } from 'react-router-dom'

import Navbar from './components/main_components/navbar'
import Home from './components/main_components/home'
import Comics from './components/main_components/comics'
import Blogs from './components/main_components/blogs'
import Manga from './components/main_components/manga'
import About from './components/main_components/about'
import SignInModal from './components/sign_in_components/sign_in_modal'
import { Button } from 'react-bootstrap'


const NavbarwithRouter = withRouter(Navbar);

class App extends React.Component {

  constructor(props) {
		super(props);

		this.handleModalShow = this.handleShow.bind(this);
		this.handleModalClose = this.handleModalClose.bind(this);

		this.state = {
			show: false,
		};
	}

  handleModalClose() {
		this.setState({ show: false });
	}

	handleShow() {
		this.setState({ show: true });
	}

  render() {
    return (
      <BrowserRouter>
        <div>
          <NavbarwithRouter onClick = {this.handleModalShow}/>
          <Route  path = '/' exact component = {Home}/> 
          <Route  path = '/comics' component = {Comics} />
          <Route  path = '/blogs' component = {Blogs} />
          <Route  path = '/manga' component = {Manga} />
          <Route  path = '/about' component = {About} />
          <SignInModal show = {this.state.show} handleModalClose = {this.handleModalClose} />
        </div>    
      </BrowserRouter>
    );
  }
}

export default App