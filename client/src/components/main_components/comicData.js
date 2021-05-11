import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import {Container} from "react-bootstrap"

import fetchComicDataAction from "../../redux/thunk/fetchComicData";
import ComicDataDisplay from "../small_components/comicDataDisplayComponents/comicDataDisplay";
import ComicDescriptionDisplay from "../small_components/comicDataDisplayComponents/comicDescriptionDisplay"
import ComicChapterDisplay from "../small_components/comicDataDisplayComponents/comicChapterDisplay"
import BlogDataComments from '../small_components/blogDataComponent/blogDataComments'
class ComicData extends React.Component {
    componentDidMount() {
      let comicId = this.props.location.pathname.slice(7);
      this.props.fetchComicData(comicId)
    }
  
    render() {
      console.log(this.props);
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
            <BlogDataComments comments = {this.props.comments}/>
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
   console.log(state.mangaData);
  return {
    mangaId: state.mangaData.id,
    chapters: state.mangaData.chapters,
    rating: state.mangaData.rating,
    noOfRating: state.mangaData.noOfRating,
    title: state.mangaData.title,
    about: state.mangaData.about,
    type: state.mangaData.type,
    coverPhoto: state.mangaData.coverPhoto,
    author : state.mangaData.author,
    comments : state.mangaData.comments,
    uploadDate : state.mangaData.uploadDate,
    category : state.mangaData.category,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ComicData);
  