import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Col, Row } from 'react-bootstrap';


import fetchPostDataAction from "../../redux/thunk/fetchPostData";
import PostedUserDetails from "../small_components/postComponents/postedUserDetails";
import PostImage from "../small_components/postComponents/postImage"

class Post extends React.Component {

  componentDidMount() {
    let postId = this.props.location.pathname.slice(6);
    this.props.fetchPostData(postId)
    window.scrollTo(0, 0);
  }

  render() {
    return(
      <div className = "container-fluid">
      <Row >
        <Col lg = {9} >
          <div>
            {this.props.images.map((doc) => 
              <PostImage key={doc.id} imageDoc = {doc}/>
            )}
          </div>
        </Col>
        <Col className = "post_details_section" >
          <PostedUserDetails info = {this.props}/>
        </Col>    
      </Row>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      fetchPostData: fetchPostDataAction,
    },
    dispatch
  );

const mapStateToProps = (state) => {
  return {
    id: state.post.id,
    uploadDate: state.post.uploadDate,
    likes: state.post.likes,
    images: state.post.images,
    tags: state.post.tags,
    type: state.post.type,
    user: state.post.user,
    categories: state.post.category,
    comments: state.post.comments,
    title: state.post.title,
    description: state.post.description
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Post);
