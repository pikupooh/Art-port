

import { Col, Image, Row, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

function HomeGridLayout(props){
 //  console.log(props.post);
    return(
        
        <Container className = "px-0 mb-5">
        <div className = "mx-0 mb-5">
            <Link to = {'post/' + props.post.PostId}>
                <Image  className="JKL"
                src = {props.post.PhotosDocument[0].url} fluid>
                </Image>
            </Link>
             
        </div>
        </Container>
    )
}

export default HomeGridLayout