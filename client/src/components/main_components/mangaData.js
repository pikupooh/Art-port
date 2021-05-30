import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Container, Row, Button} from "react-bootstrap"

import MangaDataDisplay from "../small_components/mangaDataDisplayComponents/mangaDataDisplay";
import MangaDescriptionDisplay from "../small_components/mangaDataDisplayComponents/mangaDescriptionDisplay"
import fetchMangaDataAction from "../../redux/thunk/fetchMangaData";
import MangaChaptersDisplay from "../small_components/mangaDataDisplayComponents/mangaChaptersDisplay"
import MangaDataComments from '../small_components/mangaDataDisplayComponents/comments/mangaDataComments'
import ChapterModal from "../small_components/uploadForms/chapterModal"
import ShareRow from "../small_components/ShareRow";
import {fetchUserProfileData} from "../../redux/thunk/fetchProfileData"
import SingleTag from "../small_components/singleTag"
import deleteLastChapter from "../../redux/thunk/delete/deleteLastChapter"
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
                             ratingsCount={this.props.ratingsCount}
                             type ={this.props.type} 
                             author= {this.props.author}
                             title = {this.props.title}
                             chaptersLength = {this.props.chapters.length}
                             userRatings = {this.props.userRatings} 
                             mangaId = {this.props.mangaId}
                             handleFormModalShow = {this.handleFormModalShow}
                             userId = {this.props.userId}
                             />

            <MangaDescriptionDisplay about = {this.props.about}/>
            <MangaChaptersDisplay chapters ={this.props.chapters}/>
            {this.props.userId === this.props.author.userId && 
              <div className = "delete_button_container">
                <Button id = "delete_chapter_button" onClick = {() => this.props.deleteLastChapter(this.props.mangaId)}>
                    Delete last chapter
                </Button>
              </div>
            } 
            <Row className = "mx-2 tags_text" id = "tags">
              <i class="material-icons">
                loyalty
              </i>
              Tags
            </Row>
            <Row className = "zeromargin"> 
              {this.props.tags.map((tag) =>
                <SingleTag tag = {tag} />
              )}
            </Row>
            <ShareRow />
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
      fetchUserProfile: fetchUserProfileData,
      deleteLastChapter,
    },
    dispatch
  );

const mapStateToProps = (state) => {
  
  return {
    userId: state.auth.userId,
    mangaId: state.mangaData.id,
    chapters: state.mangaData.chapters,
    rating: state.mangaData.rating,
    ratingsCount: state.mangaData.ratingsCount,
    title: state.mangaData.title,
    about: state.mangaData.about,
    type: state.mangaData.type,
    coverPhoto: state.mangaData.coverPhoto,
    author : state.mangaData.author,
    comments : state.mangaData.comments,
    uploadDate : state.mangaData.uploadDate,
    tags : state.mangaData.tags,
    userRatings: state.auth.profile.userRatings
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MangaData);
  