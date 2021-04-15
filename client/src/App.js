import React from 'react'
import { BrowserRouter, Route, withRouter } from 'react-router-dom'

import Navbar from './components/main_components/navbar'
import Home from './components/main_components/home'
import Comics from './components/main_components/comics'
import Blogs from './components/main_components/blogs'
import Manga from './components/main_components/manga'
import About from './components/main_components/about'
import SignInModal from './components/sign_in_components/sign_in_modal'



const NavbarwithRouter = withRouter(Navbar);

class App extends React.Component {

  constructor(props) {
		super(props);

		this.handleModalShow = this.handleShow.bind(this);
		this.handleModalClose = this.handleModalClose.bind(this);

		this.state = {
			show: false,
      isRegisterForm: false,
		};
	}

  handleModalClose() {
		this.setState({ show: false });
	}

	handleShow() {
    if(this.state.isRegisterForm)
      this.Register_to_sign_in();
		this.setState({ show: true });
	}

  Sign_in_to_register = () => {
    this.setState({
      isRegisterForm: true
    });
  }

  Register_to_sign_in = () => {
    this.setState({
      isRegisterForm: false
    });
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
          <SignInModal show = {this.state.show} isRegisterForm = {this.state.isRegisterForm} handleModalClose = {this.handleModalClose}
                         Sign_in_to_register = {this.Sign_in_to_register} Register_to_sign_in = {this.Register_to_sign_in}/>
        </div>    
      </BrowserRouter>
    );
  }
}

export default App