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
        Post of {this.props.postId} and uploadDate {this.props.uploadDate}
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
    uploadDate: state.post.uploadDate
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Post);
