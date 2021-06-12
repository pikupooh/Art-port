import React from 'react';
import { connect } from  'react-redux';
import {Col,Row} from 'react-bootstrap'
import UserBlogGridLayout from './userBlogGridLayout'

class BlogGrid extends React.Component{
    
    render(){
        console.log('c')
        if(this.props.blogList.length === 0){
            return(
                <div className = "no_user_post_text">
                    No blog uploaded by the user
                </div>
            )
        }

        return(
            <div>
                <Row className = "home_grid_container">
                    {this.props.blogList.map((blog) => 
                    <Col key={blog.id} xs = {6} md = {4} lg = {2} className = "home_grid_posts_container">
                        <UserBlogGridLayout  blog = {blog}/>
                    </Col>
                    )}
                </Row>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        blogList: state.profile.userBlogs,
    }
}

export default connect(mapStateToProps)(BlogGrid);