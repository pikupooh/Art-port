import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import {Button, Container} from "react-bootstrap"

import MangaDataDisplay from "../small_components/mangaDataDisplayComponents/mangaDataDisplay";
import MangaDescriptionDisplay from "../small_components/mangaDataDisplayComponents/mangaDescriptionDisplay"
import fetchMangaDataAction from "../../redux/thunk/fetchMangaData";
import MangaChaptersDisplay from "../small_components/mangaDataDisplayComponents/mangaChaptersDisplay"
import MangaDataComments from '../small_components/mangaDataDisplayComponents/comments/mangaDataComments'
import ChapterModal from "../small_components/uploadForms/chapterModal"
import ShareRow from "../small_components/ShareRow";

class MangaData extends React.Component {

  constructor(props) {
      super(props);

      this.state = {
          formShow: false,
      };
  }
    componentDidMount() {
      let mangaId = this.props.location.pathname.slice(8);
      this.props.fetchMangaData(mangaId)
      window.scrollTo(0, 0);
    }

    handleFormModalClose = () => {
      this.setState({ formShow: false });
    };

    handleFormModalShow = () => {
      this.setState({ formShow: true });
    };

    render() {
      return(
        <div>
          <Container>
            <MangaDataDisplay photo={this.props.coverPhoto} 
                             rating ={this.props.rating}
                             noOfRating={this.props.noOfRating}
                             type ={this.props.type} 
                             author= {this.props.author}
                             title = {this.props.title}
                            chaptersLength = {this.props.chapters.length}
                             />

            <MangaDescriptionDisplay about = {this.props.about}/>
            <ShareRow />
            {(this.props.author.userId === this.props.userId) && (<Button onClick = {this.handleFormModalShow}>+ Add Chapter</Button>)}            <MangaChaptersDisplay chapters ={this.props.chapters}/> 
            <MangaDataComments comments = {this.props.comments} mangaId = {this.props.mangaId}/>
          </Container>
          <ChapterModal
                    show={this.state.formShow}
                    handleModalClose={this.handleFormModalClose}
                    mangaOrComic={"MANGA"}
                    mangaId={this.props.mangaId}
                />
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
    userId: state.auth.userId,
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

export default connect(mapStateToProps, mapDispatchToProps)(MangaData);
  