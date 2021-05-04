import { Row, Col, Container, Image } from 'react-bootstrap' 
import { CardList, StarFill } from 'react-bootstrap-icons'
import { Link } from 'react-router-dom';

function MangaDataDisplay (props) {

    return (  
        <div className="manga_data_container">
            <Row className = "my-4">
                <Col md = {3} >
                    <div className = "manga_data_manga_image_container">
                        <Image src ={props.photo} className="manga_data_manga_image"></Image>
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
                           
                        </Row>
                        <div className = "manga_data_author_container">
                            <Row >
                                Authors:
                            </Row>
                            {props.author.map((user) => 
                                <Link to = {'/user/' + user.UserId} className = "manga_data_authors"> 
                                {user.firstname} {user.lastname + ' '}
                                </Link>
                            )}
                        </div>
                    </Container>   
                </Col>
            </Row> 
        </div>
    );
}
 
export default MangaDataDisplay ;
