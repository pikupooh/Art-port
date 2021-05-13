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
    console.log(postId);
    this.props.fetchPostData(postId)
    window.scrollTo(0, 0);
  }

  render() {
    console.log(this.props);
    return(
      <div className = "container-fluid">
      <Row >
        <Col sm = {9} >
          <div>
            {this.props.images.map((doc) => 
              <PostImage key={doc.id} imageDoc = {doc}/>
            )}
          </div>
        </Col>
        <Col className = "post_details_section" sm = {3} >
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
    category: state.post.category,
    comments: state.post.comments
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Post);
