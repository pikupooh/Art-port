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
                <a href="#" class="float fab">
                    <i class="material-icons">add</i>
                </a>
                <ul class="submenu">
                    <li class="submenu_li">
                        <a class="submenu_a" onClick={this.handlePostModalShow}>
                            <i class="material-icons">post_add</i>
                        </a>
                    </li>
                    <li class="submenu_li">
                        <a class="submenu_a" onClick={this.handleBlogModalShow}>
                            <i class="material-icons">attach_file</i>
                        </a>
                    </li>
                    <li class="submenu_li">
                        <a class="submenu_a" onClick={this.handleMangaModalShow}>
                            <i class="material-icons">insert_drive_file</i>
                        </a>
                    </li>
                    <li class="submenu_li">
                        <a class="submenu_a" onClick={this.handleComicModalShow}>
                            <i class="material-icons">face</i>
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
