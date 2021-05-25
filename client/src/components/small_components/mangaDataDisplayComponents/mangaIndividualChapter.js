import {  Image, Container } from "react-bootstrap";
import React from "react";
import {connect} from "react-redux"
import { bindActionCreators } from "redux";
import fetchMangaChapterAction from "../../../redux/thunk/fetchMangaChapter";
import ChapterDataComments from "../chapterComponents/chapterDataComments"
class MangaIndividualChapter extends React.Component {
    componentDidMount() {
        let chapterId = this.props.location.pathname.slice(9);
        this.props.fetchMangaChapter(chapterId);
        window.scrollTo(0,0)
      }

  render () {
    return ( 
      <Container className = ''>
        <div className = " text-center my-5 py-5 mangaChapterDetails">
          <div >
            CHAPTER NO:   {this.props.chapterNo}
          </div>
          <div className = "manga_chapter_title">
            {this.props.chapterName}
          </div>
        </div>
        <div className = "manga_chapter_images_container text-center">
          {this.props.photoDocument.map((photo) => 
            <div key = {photo.id}> 
              <Image src ={photo.link} fluid className = "my-3"></Image>
            </div>
          )} 
        </div>
        <ChapterDataComments comments = {this.props.comments} chapterId = {this.props.chapterId}/>
      </Container>
    
    );
  } 
}
const mapDispatchToProps = (dispatch) =>
bindActionCreators(
  {
    fetchMangaChapter: fetchMangaChapterAction,
  },
  dispatch
);
const mapStateToProps = (state) => {
  
    return {
      id: state.mangaChapter.id,
      photoDocument: state.mangaChapter.photoDocument,
      comments: state.mangaChapter.comments,
      chapterName: state.mangaChapter.chapterName,
      chapterNo: state.mangaChapter.chapterNo,
      chapterId: state.mangaChapter.id,
    };
  };
 
export default connect(mapStateToProps, mapDispatchToProps) (MangaIndividualChapter)