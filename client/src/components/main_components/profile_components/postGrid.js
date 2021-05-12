import React from 'react';
import { connect } from  'react-redux';
import {Col,Row} from 'react-bootstrap'
import HomeGridLayout from '../../small_components/homeGridLayout'

class PostGrid extends React.Component{
    render(){
        return(
            <div>
                <Row className = "home_grid_container">
                    {this.props.postList.map((post) => 
                    <Col key={post.id} sm = {6} md = {4} lg = {2} className = "home_grid_posts_container">
                        <HomeGridLayout  post = {post}/>
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
        postList: state.profile.userPosts,
    }
}

export default connect(mapStateToProps)(PostGrid);