import { Row, Col, Container, Image, Button } from 'react-bootstrap' 
import { CardList } from 'react-bootstrap-icons'
import { Link } from 'react-router-dom';
import RateButton from '../rateButton';
import StarComponent from "../starComponent"

function ComicDataDisplay (props) {

    var rate
    
    if(props.userRatings)
        rate = props.userRatings[props.mangaId] === undefined ? 0 : props.userRatings[props.mangaId]
    else{
        rate = 0
    }

    return (  
        <div className="manga_data_container">
            <Row className = "my-4">
                <Col md = {3} >
                    <div className = "manga_data_manga_image_container">
                        <Image src ={props.photo.link} className="manga_data_manga_image" alt = "manga_cover_photo"></Image>
                    </div>
                </Col>
                <Col>
                    <Container>
                        <Row className = "manga_data_title ">
                            {props.title}
                        </Row>
                        <Row className = "manga_data_rating">
                            <Col className = "zeropadding">
                                <StarComponent rating = {props.rating} ratingsCount = {props.ratingsCount}/>
                            </Col>
                            <Col >
                                <RateButton rate = {rate} id = {props.mangaId}/>
                            </Col>
                        </Row>
                        <Row className = "manga_data_rating">
                            
                                <CardList className = "my-auto mr-3 manga_data_chapters_cardlist"/>
                                <div className = "chapters_text">
                                    {"Chapters " + props.chaptersLength}
                                </div>
                                <div className = "ml-auto mr-3" >
                                    {(props.author.userId === props.userId) && (<Button id = "add_chapter_button" onClick = {props.handleFormModalShow}>+ Add Chapter</Button>)}
                                </div>
                        </Row>
                        <div className = "manga_data_author_container">
                            <Row >
                                Author:
                            </Row>
                            <Link to = {'/user/' + props.author.userId} className = "manga_data_authors" > 
                            
                                {props.author.firstName} {props.author.lastName + ' '}
                            
                              
                            </Link>
                            
                        </div>
                    </Container>   
                </Col>
            </Row> 
        </div>
    );
}
 
export default ComicDataDisplay ;
