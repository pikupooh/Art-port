import React from 'react'
import { connect } from  'react-redux';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router-dom';
import { Row,Col,Container,Image,Button } from 'react-bootstrap';

class SearchedMangas extends React.Component{
    
    componentDidMount() {
       window.scrollTo(0, 0);
        console.log(this.props);

    }

    render(){
       var rating;
    if(this.props.ratingCount === 0){
        rating = "No Ratings"
    }
    else{
        rating = rating/this.props.ratingCount
    }
        return(
              <div className = "search">
                    <Container style = {{paddingLeft : "100px", paddingRight: "100px"}}>
                         <div className="top_result_data">
                                    {this.props.mangas && this.props.mangas.map((manga, i) => 
                                         <Row className = "search_result_container">
            <Col sm ={1} className="A">
                <Link to ={'/mangas/' + manga.id}>
                    <div className = "search_image_container">
                        <Image src = {manga.coverPhoto.link} className="search_image" alt = "comic_cover_photo"></Image>
                    </div>
                </Link>
            </Col>
            <Col>
                <Link to ={'/mangas/' + manga.id}>
                    <div className ="search_result_heading">{manga.title}</div>
                </Link>
                    <div className="result_description">
                    Manga |  {manga.userDTO.username} | <MangaRating ratings = {manga.rating}/>
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
function MangaRating(props){
    return(
        <span>{props.ratings}</span>
    )
}
const mapStateToProps = (state) => {
    return {
        mangas: state.search.mangas
    };
  };  

  export default connect(mapStateToProps)(SearchedMangas);