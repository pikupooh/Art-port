import { Link } from 'react-router-dom'
import { Container, Row, Col } from 'react-bootstrap'

import MangaListMangaImage from '../mangaListComponent/mangaListMangaImage'
import MangaListMangaData from '../mangaListComponent/mangaListMangaData'

function MangaDataComponent(props){
    return(
        <div className = "container-fluid my-2 manga_list_manga_container">
            <Row className = "m-4">
                <Col md = {6} >
                    <MangaListMangaImage imageUrl = {props.manga.coverPhoto}
                    />
                </Col>
                <Col>
                    <MangaListMangaData manga = {props.manga}></MangaListMangaData>
                </Col>
            </Row>
        </div>
    )
}

export default MangaDataComponent