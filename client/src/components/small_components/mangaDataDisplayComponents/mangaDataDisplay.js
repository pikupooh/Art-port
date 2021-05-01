import { Col, Image, Row, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import {Fragment} from 'react'
function MangaDataDisplay (props) {
    console.log(props);
    return (  
        <div className="manga_data_container">
              
                <Row className = "m-4">
                <Col md = {4} >
                    <Image src ={props.photo} className="manga_data_manga_image"></Image>
                </Col>
                <Col>
                <Fragment>
            <Row>
                Title : {props.title}
            </Row>
            <Row>
                Ratings:{props.rating}
            </Row>
            <Row>
                number of rating : {props.rating}
            </Row>
            <Row>
                Type {props.type}
            </Row>
            <Row>
                Authors:
            </Row>
            {props.author.map((user) => 
                        <div> 
                        {user.firstname} {user.lastname + ' '}
                        </div>
                )}   
    
        </Fragment>


                </Col>
               </Row>
            
        </div>
           
        
    );
}
 
export default MangaDataDisplay ;
