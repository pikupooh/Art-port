import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Col, Row } from 'react-bootstrap';


import fetchPostDataAction from "../../redux/thunk/fetchPostData";
import PostedUserDetails from "../small_components/postedUserDetails"

class Post extends React.Component {
  componentDidMount() {
    let postId = this.props.location.pathname.slice(6);
    this.props.fetchPostData(postId)
  }

  render() {
    console.log(this.props.userInfo)
    return(
      <div className = "container-fluid">
      <Row >
        <Col className = "post_photos_section text-center" sm = {9}>
          {this.props.photosDoc.map((doc) => 
            <div>
              <img className = "post_page_image" src = {doc.url}></img>
            </div>
          )}
        </Col>
        <Col className = "post_details_section" sm = {3} >
          <PostedUserDetails userInfo = {this.props.userInfo} />
          

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
    postId: state.post.postId,
    uploadDate: state.post.uploadDate,
    likes: state.post.likes,
    photosDoc: state.post.photosDoc,
    tags: state.post.tags,
    type: state.post.type,
    userInfo: state.post.userInfo,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Post);
