import { Col, Image, Row, Container } from "react-bootstrap";
function MangaDescriptionDisplay (props) {
    return ( 
        
        <div>
            <div>
                DESCRIPTION
            </div>
        {props.about}
        </div>
     );
}
 
export default MangaDescriptionDisplay