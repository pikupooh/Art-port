import React, { Fragment } from "react";
import { Image, Row, Container, Col, Button } from "react-bootstrap";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Link } from 'react-router-dom'

import fetchBlogDataAction from "../../redux/thunk/fetchBlogData";
import BlogDataComments from "../small_components/blogDataComponent/blogDataComments";
import PostLikesModal from "../small_components/postLikesModal"

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
              <Image src = {this.props.photo.url} fluid className = "blog_header_image"></Image>
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
        <Container>
          <Row className = "my-5">
            <Col sm = {1}>
              <Image src = {this.props.user.ProfilePhoto} className = "blog_page_uploader" roundedCircle></Image>
            </Col>
            <Col className = "text-left my-auto">
              <Link to = {'/artist/' + this.props.user.UserId}>
              <Row>
                {this.props.user.Username}
              </Row>
              </Link>
              <Row>
                {this.props.user.about}
              </Row>
              <Row>
            Uploaded on {this.props.uploadTime}
          </Row>
            </Col>
          </Row>
          
          <Row className = "my-3">
            <Col className = "mb-3">
              <Button>
                Like the blog?
              </Button>
              <Button className = "ml-2" onClick = {this.showLikesModal}>
                 {this.props.likes.length} Likes
              </Button>
            </Col>
          </Row>
          <div>
            {this.props.content}
          </div>
          <BlogDataComments comments = {this.props.comments}/>
          <div>
            Tags
          </div>
          <div>
            {this.props.tags.map((tag, index) =>
              <Fragment key = {index}>
                {tag + ' '}
              </Fragment>
            )}
          </div>
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
    photo: state.blogData.photo,
    uploadTime: state.blogData.uploadTime,
    tags: state.blogData.tags,
    user: state.blogData.user,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(blogData);
  