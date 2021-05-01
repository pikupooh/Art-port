import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import fetchComicDataAction from "../../redux/thunk/fetchComicData";

class ComicData extends React.Component {
    componentDidMount() {
      let comicId = this.props.location.pathname.slice(7);
      this.props.fetchComicData(comicId)
    }
  
    render() {
      return(
        <div>
          Post of {this.props.comicId} and uploadDate {this.props.uploadTime}
        </div>
      )
    }
  }
  const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      fetchComicData: fetchComicDataAction,
    },
    dispatch
  );

const mapStateToProps = (state) => {
   console.log(state.comicData);
  return {
    comicId: state.comicData.comicId,
    uploadTime: state.comicData.uploadTime,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ComicData);
  