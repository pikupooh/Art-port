import React from "react";
import { Modal, Form, Button } from "react-bootstrap";
import { categories } from "../../../shared/categories";
import TagComponent from "../tagComponent";
import { createPost } from "../../../redux/thunk/fetchPostData";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

class PostModal extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            tags: [],
            input: {},
            errors: {},
            categories: [],
        };

        this.fileInput = React.createRef();
    }

    removeTag = (i) => {
        const newTags = [...this.state.tags];
        newTags.splice(i, 1);
        this.setState({ tags: newTags });
    };

    addTag = (val) => {
        this.setState({
            tags: [...this.state.tags, val],
        });
    };

    handleChange(e) {
        let input = this.state.input;
        input[e.target.name] = e.target.value;
        this.setState({
            input,
        });
    }

    handleCategoryChange(event) {
        const selected = [];

        let selectedOption = event.target.selectedOptions;

        for (let i = 0; i < selectedOption.length; i++) {
            selected.push(selectedOption.item(i).value);
        }
        console.log(selected);
        this.setState({ categories: selected });
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
            let postFormData = Object.assign({}, this.state.input);
            postFormData["tags"] = this.state.tags;
            postFormData["category"] = this.state.categories;
            console.log(postFormData);

            this.setState({ tags: [], input: {}, errors: {}, categories: [] });

            this.props.handleModalClose();
            document.getElementById("post-form").reset();

            this.props.createPost(
                this.props.userId,
                postFormData,
                imageFormData,
                this.props.profileId
            );
        }
        console.log(this.state);
    }

    validate() {
        let input = this.state.input;
        let errors = {};
        let isValid = true;

        if (!input["title"]) {
            isValid = false;
            errors["title"] = "Please enter a title to your post.";
        }

        if (!input["description"]) {
            isValid = false;
            errors["description"] = "Please add a description.";
        }

        if (!this.state.categories.length) {
            isValid = false;
            errors["categories"] = "Please select some categories.";
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
            <Modal show={this.props.show} onHide={this.props.handleModalClose}>
                <Modal.Body>
                    <Form id="post-form" onSubmit={(e) => this.handleSubmit(e)}>
                        <Form.Group>
                            <Form.Label>Title</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Enter title"
                                name="title"
                                onChange={(e) => {
                                    this.handleChange(e);
                                }}
                            />

                            <div className="text-danger">
                                {this.state.errors.title}
                            </div>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Description</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Enter description"
                                name="description"
                                onChange={(e) => {
                                    this.handleChange(e);
                                }}
                            />

                            <div className="text-danger">
                                {this.state.errors.description}
                            </div>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Categories</Form.Label>
                            <Form.Control
                                as="select"
                                name="categories"
                                multiple
                                onChange={(e) => {
                                    this.handleCategoryChange(e);
                                }}
                            >
                                {categories.map((category, i) => {
                                    return (
                                        <option value={category}>
                                            {category}
                                        </option>
                                    );
                                })}
                            </Form.Control>
                            <Form.Text muted>
                                {" "}
                                Hold ctrl or command for multiple selection{" "}
                            </Form.Text>

                            <div className="text-danger">
                                {this.state.errors.categories}
                            </div>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Enter Tags</Form.Label>
                            <TagComponent
                                tags={this.state.tags}
                                removeTag={this.removeTag}
                                addTag={this.addTag}
                            />
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
            createPost: createPost,
        },
        dispatch
    );

const mapStateToProps = (state) => {
    return {
        userId: state.auth.userId,
        profileId: state.profile.id,
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(PostModal);
