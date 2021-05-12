import React from "react";
import PostModal from "../small_components/uploadForms/postModal";

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
        this.setState({ postShow: false });
    };

    handleComicModalClose = () => {
        this.setState({ postShow: false });
    };

    handleMangaModalClose = () => {
        this.setState({ postShow: false });
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
                            <i class="material-icons">add</i>
                        </a>
                    </li>
                    <li class="submenu_li">
                        <a href="#" class="submenu_a">
                            <i class="material-icons">code</i>
                        </a>
                    </li>
                    <li class="submenu_li">
                        <a href="#" class="submenu_a">
                            <i class="material-icons">explore</i>
                        </a>
                    </li>
                </ul>
                <PostModal
                    show={this.state.postShow}
                    handleModalClose={this.handlePostModalClose}
                />
            </div>
        );
    }
}

export default UploadComponent;
