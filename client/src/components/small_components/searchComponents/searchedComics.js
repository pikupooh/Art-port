import React from 'react'
import { connect } from  'react-redux';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router-dom';
import { Row,Col,Container,Image,Button } from 'react-bootstrap';

class SearchedComics extends React.Component{
    
    componentDidMount() {
       window.scrollTo(0, 0);
    }


    render()
    { 
        return( 
                 <div className = "search">
                <Container style = {{paddingLeft : "100px", paddingRight: "100px"}}>
                     <div className="top_result_data">
                                    {this.props.comics && this.props.comics.map((comic, i) => 
                                       <Row className = "search_result_container">
            <Col sm ={1} className="A">
                <Link to ={'/comic/' + comic.id}>
                    <div className = "search_image_container">
                        <Image src = {comic.coverPhoto.link} className="search_image" alt = "comic_cover_photo"></Image>
                    </div>
                </Link>
            </Col>
            <Col>
                <Link to ={'/comic/' + comic.id}>
                    <div className ="search_result_heading">{comic.title}</div>
                </Link>
                    <div className="result_description">
                        Comic |  {comic.userDTO.username} | <ComicRating ratings = {comic.rating} /> 
                    </div>
            </Col>
             </Row>
                 )}
                     </div>
                </Container>
                </div>
             )
    }
} 
function ComicRating(props){
    return(
        <span>{props.ratings}</span>
    )
}
const mapStateToProps = (state) => {
    return {
        comics: state.search.comics
    };
  };   
  export default connect(mapStateToProps)(SearchedComics);