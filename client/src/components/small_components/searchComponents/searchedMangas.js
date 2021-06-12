import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { Row, Col, Container, Image } from "react-bootstrap";

class SearchedMangas extends React.Component {
    componentDidMount() {
        window.scrollTo(0, 0);
    }

    render() {
        return (
            <div className="search">
                <Container
                    style={{ paddingLeft: "100px", paddingRight: "100px" }}
                >
                    <div className="top_result_data">
                        {this.props.mangas &&
                            this.props.mangas.map((manga, i) => (
                                <Link to={"/mangas/" + manga.id} key={i}>
                                    <Row className="my-1 A">
                                        <Col sm={1}>
                                            <div className="search_image_container">
                                                {manga.coverPhoto && (
                                                    <Image
                                                        src={
                                                            manga.coverPhoto
                                                                .link
                                                        }
                                                        className="search_image"
                                                        alt="comic_cover_photo"
                                                    ></Image>
                                                )}
                                            </div>
                                        </Col>
                                        <Col>
                                            <div className="search_result_heading">
                                                {manga.title}
                                            </div>
                                            <div className="result_description">
                                                Manga | {manga.user.username} |{" "}
                                                <MangaRating
                                                    rating={manga.rating}
                                                    ratingCount={
                                                        manga.ratingCount
                                                    }
                                                />
                                            </div>
                                        </Col>
                                    </Row>
                                </Link>
                            ))}
                    </div>
                </Container>
            </div>
        );
    }
}
function MangaRating(props) {
    var rating;
    if (props.ratingCount === 0) {
        rating = "No Ratings";
    } else {
        rating = props.rating / props.ratingCount;
    }
    return <span>{rating}</span>;
}
const mapStateToProps = (state) => {
    return {
        mangas: state.search.mangas,
    };
};

export default connect(mapStateToProps)(SearchedMangas);
