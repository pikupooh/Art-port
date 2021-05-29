import React from "react";
import { Modal, Form, Button } from "react-bootstrap";
import { createChapter } from "../../../redux/thunk/fetchMangaChapter";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

class ChapterModal extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            input: {},
            errors: {},
        };

        this.fileInput = React.createRef();
    }

    handleChange(e) {
        let input = this.state.input;
        input[e.target.name] = e.target.value;
        this.setState({
            input,
        });
    }

    handleSubmit(e) {
        e.preventDefault();

        if (this.validate()) {
            let imageFormData = new FormData();

            for (let i = 0; i < this.fileInput.current.files.length; i++) {
                imageFormData.append(
                    "files",
                    this.fileInput.current.files[i],
                    this.fileInput.current.files[i].name
                );
            }
            console.log(this.fileInput.current.files);
            let chapterFormData = Object.assign({}, this.state.input);
            console.log(chapterFormData);

            this.setState({ input: {}, errors: {} });

            this.props.handleModalClose();
            document.getElementById("chapter-form").reset();

            this.props.createChapter(
                this.props.mangaOrComic,
                chapterFormData,
                imageFormData,
                this.props.mangaId
            );
        }
        console.log(this.state);
    }

    validate() {
        let input = this.state.input;
        let errors = {};
        let isValid = true;

        if (!input["name"]) {
            isValid = false;
            errors["name"] = "Please enter a name to your chapter.";
        }else if (input["name"].length > 30) {
            isValid = false;
            errors["name"] = "Name of chapter should be less than 30 characters";
        }
        
        if (this.fileInput.current.files.length === 0) {
            isValid = false;
            errors["files"] = "Please upload some images.";
        }
        this.setState({
            errors: errors,
        });

        return isValid;
    }

    render() {
        return (
            <Modal show={this.props.show} onHide={this.props.handleModalClose} centered = {true}>
                <h3 className = "text-center"> Add a chapter</h3>
                <Modal.Body>
                    <Form id="chapter-form" onSubmit={(e) => this.handleSubmit(e)} onKeyDown={(e) => {
                        if(e.key==="Enter"){
                            console.log("Enter");
                            e.preventDefault();
                        }
                    }}>
                        <Form.Group>
                            <Form.Label>Name</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Enter name"
                                name="name"
                                onChange={(e) => {
                                    this.handleChange(e);
                                }}
                            />

                            <div className="text-danger">
                                {this.state.errors.name}
                            </div>
                        </Form.Group>
                        <Form.Group>
                            <Form.File
                                label="Images"
                                multiple
                                ref={this.fileInput}
                            />

                            <div className="text-danger">
                                {this.state.errors.files}
                            </div>
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                    </Form>
                </Modal.Body>
            </Modal>
        );
    }
}

const mapDispatchToProps = (dispatch) =>
    bindActionCreators(
        {
            createChapter: createChapter,
        },
        dispatch
    );

const mapStateToProps = (state) => {
    return {
        userId: state.auth.userId,
        profileId: state.profile.id,
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ChapterModal);
