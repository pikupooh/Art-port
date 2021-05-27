import { Row, Col } from 'react-bootstrap'

import ComicListComicImage from './comicListComicImage'
import ComicListComicData from './comicListComicData'


function ComicDataComponent(props){
    return(
            <Row className = "comic" >
                <Col md = {4} className="comic_image m-0">
                    <ComicListComicImage image = {props.comic.coverPhoto}
                    /> 
                </Col>
                <div className= "data_container">
                   <div className ="comic_list_title">{props.comic.title}</div>
                <ComicListComicData comic = {props.comic} />
                </div>
            </Row>
    )
}

export default ComicDataComponent