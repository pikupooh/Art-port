import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import {Container} from "react-bootstrap"

import fetchComicDataAction from "../../redux/thunk/fetchComicData";
import ComicDataDisplay from "../small_components/comicDataDisplayComponents/comicDataDisplay";
import ComicDescriptionDisplay from "../small_components/comicDataDisplayComponents/comicDescriptionDisplay"
import ComicChapterDisplay from "../small_components/comicDataDisplayComponents/comicChapterDisplay"
import ComicDataComments from "../small_components/comicDataDisplayComponents/comments/comicDataComments"
class ComicData extends React.Component {
    componentDidMount() {
      let comicId = this.props.location.pathname.slice(7);
      this.props.fetchComicData(comicId)
    }
  
    render() {
      return(
        <Container>
          <ComicDataDisplay photo={this.props.coverPhoto} 
                             rating ={this.props.rating}
                             noOfRating={this.props.noOfRating}
                             type ={this.props.type} 
                             author= {this.props.author}
                             title = {this.props.title}
                            chaptersLength = {this.props.chapters.length}
                             />

            <ComicDescriptionDisplay about = {this.props.about}/>
            <ComicChapterDisplay chapters ={this.props.chapters}/> 
            <ComicDataComments comments = {this.props.comments} mangaId = {this.props.mangaId}/>
        </Container>
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
    mangaId: state.comicData.id,
    chapters: state.comicData.chapters,
    rating: state.comicData.rating,
    noOfRating: state.comicData.noOfRating,
    title: state.comicData.title,
    about: state.comicData.about,
    type: state.comicData.type,
    coverPhoto: state.comicData.coverPhoto,
    author : state.comicData.author,
    comments : state.comicData.comments,
    uploadDate : state.comicData.uploadDate,
    category : state.comicData.category,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ComicData);
  