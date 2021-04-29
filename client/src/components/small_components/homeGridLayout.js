

import { Col, Image, Row, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

function HomeGridLayout(props){
   console.log(props.post);
    return(
        
        <Container>
        <div className = "mx-auto mb-5 ">
            <Link to = {'post/' + props.post.PostId}>
                <Image 
                src = {props.post.PhotosDocument[0].url} fluid>
                </Image>
            </Link>
             
        </div>
        </Container>
    )
}

export default HomeGridLayout