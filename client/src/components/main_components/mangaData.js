import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import {Row,Col,Container} from "react-bootstrap"
import MangaDataDisplay from "../small_components/mangaDataDisplayComponents/mangaDataDisplay";
import MangaDescriptionDisplay from "../small_components/mangaDataDisplayComponents/mangaDescriptionDisplay"
import fetchMangaDataAction from "../../redux/thunk/fetchMangaData";
import MangaChaptersDisplay from "../small_components/mangaDataDisplayComponents/mangaChaptersDisplay"
import BlogDataComments from '../small_components/blogDataComponent/blogDataComments'
class MangaData extends React.Component {
    componentDidMount() {
      let mangaId = this.props.location.pathname.slice(8);
      this.props.fetchMangaData(mangaId)
    }
  
    render() {
      return(
        
            <div>

           <Container>
             
          <MangaDataDisplay photo={this.props.coverPhoto} 
                             rating ={this.props.rating}
                             noOfRating={this.props.noOfRating}
                             type ={this.props.type} 
                             author= {this.props.author}
                             title = {this.props.title}/>

          <MangaDescriptionDisplay about = {this.props.about}/>
      <MangaChaptersDisplay chapters ={this.props.chapters}/> 
          <BlogDataComments comments = {this.props.Comments}/>
           </Container>
            
        
         
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
    author : state.mangaData.author,
    Comments : state.mangaData.Comments
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MangaData);
  