import { Row, Col,Container } from 'react-bootstrap'

import ComicListComicImage from './comicListComicImage'
import ComicListComicData from './comicListComicData'


function ComicDataComponent(props){
    return(
        <div className= "comic_list">
            <Row className = "comic">
            
                <Col md = {4} className="comic_image m-0">
             
                    <ComicListComicImage image = {props.comic.coverPhoto}
                    /> 
                </Col>
                <div className= "data_container">
                   <div className ="comic_list_title">{props.comic.title}</div>
                <ComicListComicData comic = {props.comic} />
                </div>
            </Row>
        </div>
    )
}

export default ComicDataComponent