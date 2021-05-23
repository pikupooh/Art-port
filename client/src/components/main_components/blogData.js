import React, { Fragment } from "react";
import { Image, Row, Container, Col } from "react-bootstrap";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Link } from 'react-router-dom'

import fetchBlogDataAction from "../../redux/thunk/fetchBlogData";
import BlogDataComments from "../small_components/blogDataComponent/blogDataComments";
import PostLikesModal from "../small_components/postLikesModal"
import BlogLikeButton from "../small_components/likeButtons/blogLikeButton"

import { ShareRow } from "../small_components/ShareRow"

class blogData extends React.Component {
  
  constructor(props){
    super(props);
    this.state = {
        showLikesModal: false,
    };
  }
  
  componentDidMount() {
    let blogId = this.props.location.pathname.slice(6);
    this.props.fetchBlogData(blogId)
    window.scrollTo(0, 0);
  }

    

  showLikesModal = () => {
    this.setState({
        showLikesModal: true,
    })
  }

  hideLikesModal = () => {
    this.setState({
        showLikesModal: false,
    })
  }
  
  render() {
    return(
      <div>
        <PostLikesModal show = {this.state.showLikesModal} 
                          hideLikesModal = {this.hideLikesModal}
                          likes = {this.props.likes}/>
        <div className = "blog_page_header">
          <div >
            <div className = "blog_header_image_container">
              <Image src = {this.props.img.link} fluid className = "blog_header_image"></Image>
            </div>
            <div className = "blog_page_text_over_image">
              <p className = "blog_page_title">
                {this.props.title}
              </p>
              <p className = "blog_page_description">
                {this.props.description}
              </p>
            </div>
          </div>
        </div>
        <Container className = "container-fluid">
          <Row className = "m-2 mt-4">
            <Col sm = {2} >
              <Image fluid src = {this.props.user.profilePhoto.link} className = "blog_page_uploader" roundedCircle></Image>
            </Col>
            <Col className = "text-left my-auto">
              <Link to = {'/user/' + this.props.user.userId}>
              <Row className = " blog_page_username">
                <span className = "username">
                  {this.props.user.username}
                </span>
              </Row>
              </Link>
              <Row>
                {this.props.user.about}
              </Row>
              <Row>
                Uploaded on {this.props.uploadDate}
              </Row>
            </Col>
          </Row>
          
          <Row className = "my-3">
            <Col className = "mb-3">
              <BlogLikeButton blogId = {this.props.id}/>
              <span className = "ml-3 likes_modal_btn" onClick = {this.showLikesModal}>
                 {this.props.likes.length} Likes
              </span>
            </Col>
          </Row>
          <Row className = "mx-2">
            <ShareRow />
          </Row>
          <Row className = "mx-2">
            Tags
          </Row>
          <Row className = "mx-2">
            <div> 
              {this.props.tags.map((tag, index) =>
                <Fragment key = {index}>
                  {tag + ' '}
                </Fragment>
              )}
            </div>
          </Row>
          <div className = "mt-5">
            {this.props.content}
          </div>
          <BlogDataComments blogId = {this.props.id} comments = {this.props.comments}/>
        </Container>
      </div>
      )
    }
  }
  const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      fetchBlogData: fetchBlogDataAction,
    },
    dispatch
  );

const mapStateToProps = (state) => {
  return {
    id: state.blogData.id,
    title: state.blogData.title,
    description: state.blogData.description,
    content: state.blogData.content,
    likes: state.blogData.likes,
    comments: state.blogData.comments,
    img: state.blogData.img,
    uploadDate: state.blogData.uploadDate,
    tags: state.blogData.tags,
    user: state.blogData.user,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(blogData);
  