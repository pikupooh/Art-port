import { Col, Image, Row, Container } from "react-bootstrap";
import React from "react";
import {connect} from "react-redux"
import { bindActionCreators } from "redux";
import fetchMangaChapterAction from "../../../redux/thunk/fetchMangaChapter";
import BlogDataComments from "../blogDataComponent/blogDataComments"
class MangaIndividualChapter extends React.Component {
    componentDidMount() {
        let chapterId = this.props.location.pathname.slice(9);
        this.props.fetchMangaChapter(chapterId)
      }

    render () {
    console.log(this.props);
    return ( 
        
        <Container>
         CHAPTER NO:   {this.props.chapterNo}
            <div>CHAPTER NAME : {this.props.chapterName}</div>
            {this.props.photoDocument.map((photo) => 
                        <div> 
                        <Image src ={photo.url} fluid></Image>
                        </div>
                )} 
                <BlogDataComments comments = {this.props.comments}/>
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
      chapterNo: state.mangaChapter.chapterNo
    };
  };
 
export default connect(mapStateToProps, mapDispatchToProps) (MangaIndividualChapter)