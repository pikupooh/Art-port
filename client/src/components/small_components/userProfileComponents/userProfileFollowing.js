import React from 'react'
import { connect } from  'react-redux';
import { Row, Col, Image } from 'react-bootstrap'

class UserProfileFollowing extends React.Component {
    render(){
        return(
            <div>
                {this.props.followingList.map((following) => 
                    <Row key={following.id} className = "m-2 mt-4">
                    <Col sm = {2} >
                      <Image fluid src = {following.profilePhoto.link} roundedCircle></Image>
                    </Col>
                    <Col className = "text-left my-auto">
                      <a href = {'/user/' + following.id}>
                      <Row className = "username blog_page_username">
                        {following.username}
                      </Row>
                      </a>
                      <Row>
                        {following.about}
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
        followingList: state.profile.following
    }
}

export default connect(mapStateToProps)(UserProfileFollowing)