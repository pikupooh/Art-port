import React from 'react'
import Navbar from './components/navbar'
import { BrowserRouter, Route } from 'react-router-dom'

import Home from './components/home'
import Comics from './components/comics'
import Blogs from './components/blogs'
import Manga from './components/manga'
import About from './components/about'

import 'bootstrap/dist/css/bootstrap.min.css';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Navbar />
          <Route  exact path = '/' component = {Home}/> 
          <Route  path = '/comics' component = {Comics} />
          <Route  path = '/blogs' component = {Blogs} />
          <Route  path = '/manga' component = {Manga} />
          <Route  path = '/about' component = {About} /> 
        </div>    
      </BrowserRouter>
    );
  }
}

export default App