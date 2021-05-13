import React from 'react'

import { Route, Switch } from "react-router-dom";
import UserPortfolio from './userPortfolio'
import UserProfileFollowers from './userProfileFollowers'
import UserProfileFollowing  from './userProfileFollowing'
import UserProfileManga from './userProfileManga'
import UserProfileComics from './userProfileComics'
import UserProfileBlogs from './userProfileBlogs'

class UserProfileExtras extends React.Component {
    
    render(){
        return(
          <Switch>
            <Route exact path = {this.props.match.url} component = {UserPortfolio}></Route>
            <Route path = {this.props.match.url + '/followers'} component = {UserProfileFollowers}></Route>
            <Route path = {this.props.match.url + '/following'} component = {UserProfileFollowing}></Route>
            <Route path = {this.props.match.url + '/manga'} component = {UserProfileManga}></Route>
            <Route path = {this.props.match.url + '/comics'} component = {UserProfileComics}></Route>
            <Route path = {this.props.match.url + '/blogs'} component = {UserProfileBlogs}></Route>
          </Switch>
        )
    }
}

export default UserProfileExtras