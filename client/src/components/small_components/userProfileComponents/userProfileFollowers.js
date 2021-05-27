import React from 'react'
import { connect } from  'react-redux';
import { Row, Col, Image } from 'react-bootstrap'

class UserProfileFollowers extends React.Component {
    render(){
        return(
            <div>
                {this.props.followerList.map((follower) => 
                    <Row key={follower.id} className = "m-2 mt-4">
                    <Col sm = {2} >
                      <Image fluid src = {follower.profilePhoto.link} roundedCircle></Image>
                    </Col>
                    <Col className = "text-left my-auto">
                      <a href = {'/user/' + follower.id}>
                      <Row className = "username blog_page_username">
                        {follower.username}
                      </Row>
                      </a>
                      <Row>
                        {follower.about}
                      </Row>
                    </Col>
                  </Row>
                )}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        followerList: state.profile.followers
    }
}

export default connect(mapStateToProps)(UserProfileFollowers)