import React from 'react'
import { BrowserRouter, Route, Switch, withRouter } from 'react-router-dom'

import NavbarComponent from './components/main_components/navbarComponent'
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
import ArtistProfile from './components/main_components/artistProfile'
import FooterComponent from './components/small_components/footerComponent'
import MangaIndividualChapter from './components/small_components/mangaDataDisplayComponents/mangaIndividualChapter'


const NavbarwithRouter = withRouter(NavbarComponent);

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
        <Switch>
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
              <Route path = '/artist/:user_id' component = {ArtistProfile} />
              <Route path = '/chapter/:chapters_id' component = {MangaIndividualChapter} />
              <SignInModal show = {this.state.show} handleModalClose = {this.handleModalClose}
                handleModalShow = {this.handleModalShow}
              />
          </div>
          </Switch>    
        </BrowserRouter>
        <FooterComponent/>
        
      </div>
    );
  }
}

export default App