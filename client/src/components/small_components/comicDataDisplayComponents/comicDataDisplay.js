import { Row, Col, Container, Image, Button } from 'react-bootstrap' 
import { CardList, StarFill } from 'react-bootstrap-icons'
import { Link } from 'react-router-dom';

function ComicDataDisplay (props) {

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
                            <StarFill className = "my-auto mr-3 manga_data_rating_star"/>
                            {props.rating}
                        </Row>
                        <Row className = "manga_data_rating">
                            
                                <CardList className = "my-auto mr-3 manga_data_chapters_cardlist"/>
                                {"Chapters " + props.chaptersLength}
                                <div className = "ml-auto mr-3" >
                                    {(props.author.userId === props.userId) && (<Button id = "add_chapter_button" onClick = {props.handleFormModalShow}>+ Add Chapter</Button>)}
                                </div>
                        </Row>
                        <div className = "manga_data_author_container">
                            <Row >
                                Authors:
                            </Row>
                            <Link to = {'/user/' + props.author.userId} > 
                            <div className = "manga_data_authors">
                                {props.author.firstName} {props.author.lastName + ' '}
                            </div>
                              
                            </Link>
                            
                        </div>
                    </Container>   
                </Col>
            </Row> 
        </div>
    );
}
 
export default ComicDataDisplay ;
