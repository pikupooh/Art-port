import React from 'react'

import { Route } from "react-router-dom";
import UserPortfolio from './userPortfolio'
import UserProfileFollowers from './userProfileFollowers'
import UserProfileFollowing  from './userProfileFollowing'
import UserProfileManga from './userProfileManga'
import UserProfileComics from './userProfileComics'
import UserProfileBlogs from './userProfileBlogs'
import UserProfileAbout from './userProfileAbout'


class UserProfileExtras extends React.Component {
    
    render(){
      console.log(this.props.match.url);
        return(
          <switch>
            <Route exact path = {this.props.match.url} component = {UserPortfolio}></Route>
            <Route path = {this.props.match.url + '/followers'} component = {UserProfileFollowers}></Route>
            <Route path = {this.props.match.url + '/following'} component = {UserProfileFollowing}></Route>
            <Route path = {this.props.match.url + '/manga'} component = {UserProfileManga}></Route>
            <Route path = {this.props.match.url + '/comics'} component = {UserProfileComics}></Route>
            <Route path = {this.props.match.url + '/blogs'} component = {UserProfileBlogs}></Route>
            <Route path = {this.props.match.url + '/about'} component = {UserProfileAbout}></Route>
          </switch>
        )
    }
}

export default UserProfileExtras