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
                            <Link to ={'/comic/' + comic.id} key = {i}>
                                <Row className = "my-1 A">
                                    <Col sm ={1} >
                                        <div className = "search_image_container">
                                            <Image src = {comic.coverPhoto.link} className="search_image" alt = "comic_cover_photo"></Image>
                                        </div>
                                    </Col>                
                                    <Col>
                                        <div className ="search_result_heading">{comic.title}</div>
                                        <div className="result_description">
                                            Comic |  {comic.userDTO.username} | <ComicRating rating = {comic.rating} ratingCount = {comic.ratingCount} />
                                        </div>
                                    </Col>
                                </Row>
                            </Link>
                        )}
                    </div>
                </Container>
            </div>
        )
    }
} 
function ComicRating(props){
    var rating;
    if(props.ratingCount === 0){
        rating = "No Ratings"
    }
    else{
        rating = props.rating/ props.ratingCount
    }
    return(
        <span>{props.rating}</span>
    )
}
const mapStateToProps = (state) => {
    return {
        comics: state.search.comics
    };
  };   
  export default connect(mapStateToProps)(SearchedComics);