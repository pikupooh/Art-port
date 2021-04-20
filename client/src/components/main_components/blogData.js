import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import fetchBlogDataAction from "../../redux/thunk/fetchBlogData";

class blogData extends React.Component {
    componentDidMount() {
      let blogId = this.props.location.pathname.slice(6);
      this.props.fetchBlogData(blogId)
    }
  
    render() {
      return(
        <div>
          Post of {this.props.blogId} and uploadDate {this.props.uploadTime}
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
    console.log(state.blogData);
  return {
    blogId: state.blogData.blogId,
    uploadTime: state.blogData.uploadTime,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(blogData);
  