import React from 'react'
import { connect } from  'react-redux';
import { Row, Col, Image } from 'react-bootstrap'
import { Link } from 'react-router-dom'

class UserProfileFollowing extends React.Component {
    render(){

      if(this.props.followingList.length === 0){
        return(
            <div className = "no_user_post_text">
                0 Following
            </div>
        )
      }

        return(
            <Row>
                {this.props.followingList.map((following) => 
                  <Col md = {6} lg = {4}>
                    <Row className = "m-2 mt-4">
                      <Col sm = {4} lg = {5} className = "text-center">
                        <a href = {'/user/' + following.id}>
                          <Image fluid src = {following.profilePhoto.link} roundedCircle className = "user_profile_follow"></Image>
                        </a>
                      </Col>
                      <Col className = "my-auto user_extras_user_details">
                        <Row className = " blog_page_username small_screen_center_text">
                          <a href = {'/user/' + following.id}>
                            <span className = "username">{following.username}</span>
                          </a>
                        </Row>
                        <Row className = "small_screen_center_text">
                          {following.about}
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
        followingList: state.profile.following
    }
}

export default connect(mapStateToProps)(UserProfileFollowing)