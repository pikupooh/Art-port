import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import fetchMangaDataAction from "../../redux/thunk/fetchMangaData";

class MangaData extends React.Component {
    componentDidMount() {
      let mangaId = this.props.location.pathname.slice(8);
      console.log(mangaId);
      this.props.fetchMangaData(mangaId)
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
      fetchMangaData: fetchMangaDataAction,
    },
    dispatch
  );

const mapStateToProps = (state) => {
   console.log(state.mangaData);
  return {
    comicId: state.mangaData.mangaId,
    uploadTime: state.mangaData.uploadTime,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MangaData);
  