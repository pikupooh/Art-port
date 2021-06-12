import { Row, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

import StarComponent from "../starComponent";

function MangaListMangaData(props) {
    {
        console.log(props);
    }
    return (
        <Container>
            <div className="manga_list_manga_data_title">
                {props.manga.title}
            </div>
            <div className="manga_list_manga_data_middle_container">
                <StarComponent
                    rating={props.manga.rating}
                    ratingsCount={props.manga.ratingCount}
                />
                <div className="my-2">
                    Chapters: {props.manga.chapters.length}
                </div>
            </div>
            <div className="manga_list_manga_data_author_container">
                <Row className="mb-2">Author</Row>
                <Row>
                    <Link
                        to={"/user/" + props.manga.user.id}
                        className="manga_list_manga_data_authors"
                    >
                        {props.manga.user.firstName}{" "}
                        {props.manga.user.lastName + " "}
                    </Link>
                </Row>
            </div>
        </Container>
    );
}

export default MangaListMangaData;
