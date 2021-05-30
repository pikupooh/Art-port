import React from 'react';
import { connect } from  'react-redux';
import {Col,Row} from 'react-bootstrap'
import UserPostGridLayout from './userPostGridLayout'

class PostGrid extends React.Component{
    render(){
        if(this.props.postList.length === 0){
            return(
                <div className = "no_user_post_text">
                    No post uploaded by the user
                </div>
            )
        }

        return(
            <div className = "">
                <Row className = "home_grid_container">
                    {this.props.postList.map((post) => 
                    <Col key={post.id} xs = {6} md = {4} lg = {2} className = "home_grid_posts_container">
                        <UserPostGridLayout  post = {post}/>
                    </Col>
                    )}
                </Row>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        postList: state.profile.userPosts,
    }
}

export default connect(mapStateToProps)(PostGrid);