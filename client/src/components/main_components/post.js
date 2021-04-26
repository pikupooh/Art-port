import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import fetchPostDataAction from "../../redux/thunk/fetchPostData";

class Post extends React.Component {
  componentDidMount() {
    let postId = this.props.location.pathname.slice(6);
    this.props.fetchPostData(postId)
  }

  render() {
    return(
      <div>
        <div>{this.props.postId}</div>
        <div>{this.props.uploadDate}</div>
        <div>
          {this.props.tags.map(tag => 
            <div key = {tag}>
              {tag}
            </div>  
          )}
        </div>
        <div>
          {this.props.likes.map(like => 
            <div key = {like.UserId}>
              {like.Username}
            </div>  
          )}
        </div>
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
    userInfo: state.post.userInfo
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Post);
