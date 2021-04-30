import { Link } from 'react-router-dom'
import { Container, Row, Col } from 'react-bootstrap'

import MangaListMangaImage from '../mangaListComponent/mangaListMangaImage'
import MangaListMangaData from '../mangaListComponent/mangaListMangaData'

function MangaDataComponent(props){
    return(
        <Container className = "my-2 manga_list_manga_container">
            <Row className = "m-4">
                <Col xs = {4} >
                    <MangaListMangaImage imageUrl = {props.manga.coverPhoto}/>
                </Col>
                <Col>
                    <MangaListMangaData manga = {props.manga}></MangaListMangaData>
                </Col>
            </Row>
        </Container>
    )
}

export default MangaDataComponent