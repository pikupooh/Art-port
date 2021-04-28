import React from 'react'
import { BrowserRouter, Route, withRouter, Switch } from 'react-router-dom'

import Navbar from './components/main_components/navbar'
import Home from './components/main_components/home'
import Comics from './components/main_components/comics'
import Blogs from './components/main_components/blogs'
import Manga from './components/main_components/manga'
import About from './components/main_components/about'
import SignInModal from './components/sign_in_components/sign_in_modal'
import UserProfile from './components/main_components/userProfile'
import Post from './components/main_components/post'
import blogData from './components/main_components/blogData'
import ComicData from './components/main_components/comicData'
import MangaData from './components/main_components/mangaData'


const NavbarwithRouter = withRouter(Navbar);

class App extends React.Component {

  constructor(props) {
		super(props);

		this.state = {
			show: false,
		};
	}

  handleModalClose = () => {
		this.setState({ show: false });
	}

	handleModalShow = () => {
		this.setState({ show: true });
	}

  
  render() {
    return (
      <div>
        <BrowserRouter>
          <div>  
            <NavbarwithRouter onShowModal = {this.handleModalShow}/>
              <div className = "space_for_navbar"></div>
              <Route  exact path = '/' component = {Home}/> 
              <Route  path = '/comics' component = {Comics} />
              <Route  path = '/blogs' component = {Blogs} />
              <Route  path = '/manga' component = {Manga} />
              <Route  path = '/about' component = {About} />
              <Route path = '/user/:user_id' component = {UserProfile} />
              <Route path = '/post/:post_id' component = {Post} />
              <Route path = '/blog/:blog_id' component = {blogData} />
              <Route path = '/comic/:comic_id' component = {ComicData} />
              <Route path = '/mangas/:manga_id' component = {MangaData} />
              <SignInModal show = {this.state.show} handleModalClose = {this.handleModalClose}
                handleModalShow = {this.handleModalShow}
              />
          </div>    
        </BrowserRouter>
        
      </div>
    );
  }
}

export default App