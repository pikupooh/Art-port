import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import fetchMangaDataAction from "../../redux/thunk/fetchMangaData";

class MangaData extends React.Component {
    componentDidMount() {
   //   console.log(this.props);
      let mangaId = this.props.location.pathname.slice(8);
  //    console.log(mangaId);
      this.props.fetchMangaData(mangaId)
    }
  
    render() {
     // console.log(this.props);
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
  
  return {
    id: state.mangaData.id,
    chapters: state.mangaData.chapters,
    rating: state.mangaData.rating,
    noOfRating: state.mangaData.noOfRating,
    title: state.mangaData.title,
    about: state.mangaData.about,
    type: state.mangaData.type,
    coverPhoto: state.mangaData.coverPhoto,
   
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MangaData);
  