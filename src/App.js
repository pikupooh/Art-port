import React from 'react'
import Navbar from './components/navbar'
import { BrowserRouter, Route, withRouter } from 'react-router-dom'

import Home from './components/home'
import Comics from './components/comics'
import Blogs from './components/blogs'
import Manga from './components/manga'
import About from './components/about'
import SignIn from './components/signIn'

import 'bootstrap/dist/css/bootstrap.min.css';

const NavbarwithRouter = withRouter(Navbar);
class App extends React.Component {

  render() {
    return (
      <BrowserRouter>
        <div>
          <NavbarwithRouter />
          <Route  path = '/' exact component = {Home}/> 
          <Route  path = '/comics' component = {Comics} />
          <Route  path = '/blogs' component = {Blogs} />
          <Route  path = '/manga' component = {Manga} />
          <Route  path = '/about' component = {About} />
          <Route  path = '/signIn' component = {SignIn} /> 
        </div>    
      </BrowserRouter>
    );
  }
}

export default App