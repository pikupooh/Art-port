import React from "react";

import { Tooltip, OverlayTrigger } from "react-bootstrap";

import PostModal from "../small_components/uploadForms/postModal";
import BlogModal from "../small_components/uploadForms/blogModal";
import MangaModal from "../small_components/uploadForms/mangaModal";
import ComicModal from "../small_components/uploadForms/comicModal";

class UploadComponent extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            postShow: false,
            blogShow: false,
            comicShow: false,
            mangaShow: false,
        };
    }

    renderTooltip = (type) => (
        <Tooltip id="button-tooltip">Create a {type}</Tooltip>
    );

    handlePostModalClose = () => {
        this.setState({ postShow: false });
    };

    handleBlogModalClose = () => {
        this.setState({ blogShow: false });
    };

    handleComicModalClose = () => {
        this.setState({ comicShow: false });
    };

    handleMangaModalClose = () => {
        this.setState({ mangaShow: false });
    };

    handlePostModalShow = (e) => {
        e.preventDefault();
        this.setState({ postShow: true });
    };

    handleBlogModalShow = (e) => {
        e.preventDefault();
        this.setState({ blogShow: true });
    };

    handleComicModalShow = (e) => {
        e.preventDefault();
        this.setState({ comicShow: true });
    };

    handleMangaModalShow = (e) => {
        e.preventDefault();
        this.setState({ mangaShow: true });
    };

    render() {
        return (
            <div>
                <a href="/" className="float fab" onClick={e=>e.preventDefault()}>
                    <i className="material-icons upload_icon">add</i>
                </a>
                <ul className="submenu upload_buttons_container">
                    <li className="submenu_li">
                        <OverlayTrigger
                            placement="left"
                            delay={{ show: 250, hide: 350 }}
                            overlay={this.renderTooltip("post")}
                        >
                            <a href="/"
                                className="submenu_a"
                                onClick={e => this.handlePostModalShow(e)}
                            >
                                <i className="material-icons upload_icon">post_add</i>
                            </a>
                        </OverlayTrigger>
                    </li>
                    <li className="submenu_li">
                        <OverlayTrigger
                            placement="left"
                            delay={{ show: 250, hide: 350 }}
                            overlay={this.renderTooltip("blog")}
                        >
                            <a href="/"
                                className="submenu_a"
                                onClick={e => this.handleBlogModalShow(e)}
                            >
                                <i className="material-icons upload_icon">attach_file</i>
                            </a>
                        </OverlayTrigger>
                    </li>
                    <li className="submenu_li">
                        <OverlayTrigger
                            placement="left"
                            delay={{ show: 250, hide: 350 }}
                            overlay={this.renderTooltip("manga")}
                        >
                            <a href="/"
                                className="submenu_a"
                                onClick={e => this.handleMangaModalShow(e)}
                            >
                                <i className="material-icons upload_icon">
                                    insert_drive_file
                                </i>
                            </a>
                        </OverlayTrigger>
                    </li>
                    <li className="submenu_li">
                        <OverlayTrigger
                            placement="left"
                            delay={{ show: 250, hide: 350 }}
                            overlay={this.renderTooltip("comic")}
                        >
                            <a href="/"
                                className="submenu_a"
                                onClick={e => this.handleComicModalShow(e)}
                            >
                                <i className="material-icons upload_icon">face</i>
                            </a>
                        </OverlayTrigger>
                    </li>
                </ul>
                <PostModal
                    show={this.state.postShow}
                    handleModalClose={this.handlePostModalClose}
                />
                <BlogModal
                    show={this.state.blogShow}
                    handleModalClose={this.handleBlogModalClose}
                />
                <MangaModal
                    show={this.state.mangaShow}
                    handleModalClose={this.handleMangaModalClose}
                />
                <ComicModal
                    show={this.state.comicShow}
                    handleModalClose={this.handleComicModalClose}
                />
            </div>
        );
    }
}

export default UploadComponent;
