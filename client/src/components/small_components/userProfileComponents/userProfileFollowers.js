import React from 'react'
import { connect } from  'react-redux';
import { Row, Col, Image } from 'react-bootstrap'

class UserProfileFollowers extends React.Component {
    render(){

      if(this.props.followerList.length === 0){
        return(
            <div className = "no_user_post_text">
                0 Followers
            </div>
        )
      
      }
        return(
            <Row>
                {this.props.followerList.map((follower) => 
                  <Col md = {6} lg = {4}>
                    <Row className = "m-2 mt-4">
                    <Col sm = {4} lg = {5} className = "text-center">
                      <a href = {'/user/' + follower.id}>
                        <Image fluid src = {follower.profilePhoto.link} roundedCircle className = "user_profile_follow"></Image>
                      </a>
                    </Col>
                    <Col className = "user_extras_user_details my-auto">
                      <Row className = " blog_page_username small_screen_center_text">
                        <a href = {'/user/' + follower.id}>
                          <span className = "username">{follower.username}</span>
                        </a>
                      </Row>
                      <Row className = "small_screen_center_text">
                        {follower.about}
                      </Row>
                    </Col>
                  </Row>
                  </Col>
                )}
            </Row>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        followerList: state.profile.followers
    }
}

export default connect(mapStateToProps)(UserProfileFollowers)