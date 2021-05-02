import { Col, Image, Row, Container } from "react-bootstrap";
function MangaDescriptionDisplay (props) {
    return ( 
        
        <div>
            <div className ="pb-2">
                DESCRIPTION
            </div>
            <div className ="pb-2">
            {props.about}
            </div>
        </div>
     );
}
 
export default MangaDescriptionDisplay