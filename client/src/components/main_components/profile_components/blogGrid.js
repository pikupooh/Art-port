import React from 'react';
import { connect } from  'react-redux';
import {Col,Row} from 'react-bootstrap'
import UserBlogGridLayout from './userBlogGridLayout'

class BlogGrid extends React.Component{
    render(){
        return(
            <div>
                <Row className = "home_grid_container">
                    {this.props.blogList.map((blog) => 
                    <Col key={blog.id} sm = {6} md = {4} lg = {2} className = "home_grid_posts_container">
                        <UserBlogGridLayout  blog = {blog}/>
                    </Col>
                    )}
                </Row>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    console.log(state);
    return {
        blogList: state.profile.userBlogs,
    }
}

export default connect(mapStateToProps)(BlogGrid);