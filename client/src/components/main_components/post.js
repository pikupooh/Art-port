import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import fetchPostDataAction from "../../redux/thunk/fetchPostData";

class Post extends React.Component {
  componentDidMount() {
    let x = this.props.location.pathname;
    let y = x.slice(6);
    this.props.fetchPostData(y);
  }

  render() {
    return <div>{this.props.postId}</div>;
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
    postId: state.post.postid,
   /* uploadDate: state.post.uploaddate,
    likes: state.post.likes,
    userId: state.post.userid,
    photoDoc: state.post.photo_doc,
    commentDoc: state.post.comment_doc,
    category: state.post.category,*/
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Post);
