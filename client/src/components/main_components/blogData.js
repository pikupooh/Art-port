import React from "react";
import { Image, Row, Container } from "react-bootstrap";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import fetchBlogDataAction from "../../redux/thunk/fetchBlogData";

class blogData extends React.Component {
    componentDidMount() {
      let blogId = this.props.location.pathname.slice(6);
      this.props.fetchBlogData(blogId)
    }
  
    render() {
      console.log(this.props);
      return(
        <div>
          <div className = "blog_page_header">
            <figure className="position-relative">
              <Image src = {this.props.photo.url} fluid className = "blog_page_image"></Image>
              <div className = "blog_page_text_over_image">
                <figcaption className = "blog_page_title">
                  {this.props.title}
                </figcaption>
                <figcaption className = "blog_page_description">
                  {this.props.description}
                </figcaption>
              </div>
            </figure>
          </div>
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
  