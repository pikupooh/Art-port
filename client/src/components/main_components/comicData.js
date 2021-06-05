import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Container, Row, Button } from "react-bootstrap"

import fetchComicDataAction from "../../redux/thunk/fetchComicData";
import ComicDataDisplay from "../small_components/comicDataDisplayComponents/comicDataDisplay";
import ComicDescriptionDisplay from "../small_components/comicDataDisplayComponents/comicDescriptionDisplay"
import ComicChapterDisplay from "../small_components/comicDataDisplayComponents/comicChapterDisplay"
import ComicDataComments from "../small_components/comicDataDisplayComponents/comments/comicDataComments"
import ChapterModal from "../small_components/uploadForms/chapterModal"
import ShareRow from "../small_components/ShareRow";
import {fetchUserProfileData} from "../../redux/thunk/fetchProfileData"
import SingleTag from '../small_components/singleTag'
import deleteLastChapter from '../../redux/thunk/delete/deleteLastChapter'
import { SHOW_DELETE_MODAL } from "../../redux/actions/actionTypes"

class ComicData extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
        formShow: false,
    };
  }

  handleFormModalClose = () => {
    this.setState({ formShow: false });
  };

  handleFormModalShow = () => {
    this.setState({ formShow: true });
  };

  deleteChapter = () => {
    this.props.deleteLastChapter(this.props.mangaId)
  }

  componentDidMount() {
    let comicId = this.props.location.pathname.slice(7);
    this.props.fetchComicData(comicId);
    window.scrollTo(0, 0);
  }
  
  render() {
    return(
      <div>
        <Container>
          <ComicDataDisplay photo={this.props.coverPhoto} 
                            rating ={this.props.rating}
                            ratingsCount={this.props.ratingsCount}
                            type ={this.props.type} 
                            author= {this.props.author}
                            title = {this.props.title}
                            chaptersLength = {this.props.chapters.length}
                            mangaId = {this.props.mangaId}
                            userRatings = {this.props.userRatings} 
                            handleFormModalShow = {this.handleFormModalShow}
                            userId = {this.props.userId}
                            />

            <ComicDescriptionDisplay about = {this.props.about}/>
            
            <ComicChapterDisplay chapters ={this.props.chapters}/> 
            {this.props.userId === this.props.author.userId && this.props.chapters.length !== 0 &&
              <div className = "delete_button_container">
                <Button id = "delete_chapter_button" onClick = {() => this.props.showDeleteModal(this.deleteChapter)}>
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
            <ComicDataComments comments = {this.props.comments} mangaId = {this.props.mangaId}/>
        </Container>
        <ChapterModal
                    show={this.state.formShow}
                    handleModalClose={this.handleFormModalClose}
                    mangaOrComic={"COMIC"}
                    mangaId={this.props.mangaId}
                />
      </div>
    )
  }
}
  const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      fetchComicData: fetchComicDataAction,
      fetchUserProfile: fetchUserProfileData,
      deleteLastChapter,
      showDeleteModal: (deleteFunction) => 
            dispatch({
                type: SHOW_DELETE_MODAL,
                payload: {
                    message: "Last Chapter",
                    delete: deleteFunction
                }
            })
    },
    dispatch
  );

const mapStateToProps = (state) => {
  return {
    userId: state.auth.userId,
    mangaId: state.comicData.id,
    chapters: state.comicData.chapters,
    rating: state.comicData.rating,
    ratingsCount: state.comicData.ratingsCount,
    title: state.comicData.title,
    about: state.comicData.about,
    type: state.comicData.type,
    coverPhoto: state.comicData.coverPhoto,
    author : state.comicData.author,
    comments : state.comicData.comments,
    uploadDate : state.comicData.uploadDate,
    tags : state.comicData.category,
    userRatings: state.auth.profile.userRatings
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ComicData);
  