import React from "react";
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

    handlePostModalShow = () => {
        this.setState({ postShow: true });
    };

    handleBlogModalShow = () => {
        this.setState({ blogShow: true });
    };

    handleComicModalShow = () => {
        this.setState({ comicShow: true });
    };

    handleMangaModalShow = () => {
        this.setState({ mangaShow: true });
    };

    render() {
        return (
            <div>
                <a href="#" className="float fab">
                    <i className="material-icons">add</i>
                </a>
                <ul className="submenu">
                    <li className="submenu_li">
                        <a className="submenu_a" onClick={this.handlePostModalShow}>
                            <i className="material-icons">post_add</i>
                        </a>
                    </li>
                    <li className="submenu_li">
                        <a className="submenu_a" onClick={this.handleBlogModalShow}>
                            <i className="material-icons">attach_file</i>
                        </a>
                    </li>
                    <li className="submenu_li">
                        <a className="submenu_a" onClick={this.handleMangaModalShow}>
                            <i className="material-icons">insert_drive_file</i>
                        </a>
                    </li>
                    <li className="submenu_li">
                        <a className="submenu_a" onClick={this.handleComicModalShow}>
                            <i className="material-icons">face</i>
                        </a>
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
