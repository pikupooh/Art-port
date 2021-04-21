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
          Post of {this.props.id} and title {this.props.title}
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
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(blogData);
  