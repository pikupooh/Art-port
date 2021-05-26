import React from "react";
import { Modal, Form, Button } from "react-bootstrap";
import { categories } from "../../../shared/categories";
import { createComic } from "../../../redux/thunk/fetchComicData";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import ChipInput from "material-ui-chip-input"

class ComicModal extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            input: {},
            errors: {},
            categories: [],
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

    removeCategory = (tag, i) => {
        const newCategories = [...this.state.categories];
        newCategories.splice(i, 1);
        this.setState({
            ...this.state,
            categories: newCategories });
    };

    addCategory = (val) => {
        this.setState({
            ...this.state,
            categories: [...this.state.categories, val],
        });
    };

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
            postFormData["category"] = this.state.categories;
            console.log(postFormData);

            this.setState({ input: {}, errors: {}, categories: [] });

            this.props.handleModalClose();
            document.getElementById("comic-form").reset();

            this.props.createComic(
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
            errors["title"] = "Please enter a title to your comic.";
        }

        if (!input["about"]) {
            isValid = false;
            errors["about"] = "Please add a about.";
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
            <Modal show={this.props.show} onHide={this.props.handleModalClose} centered = {true}>
                <Modal.Body>
                <Modal.Header>Create a comic</Modal.Header>
                    <Form id="comic-form" onSubmit={(e) => this.handleSubmit(e)}>
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
                            <Form.Label>about</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Enter about"
                                name="about"
                                onChange={(e) => {
                                    this.handleChange(e);
                                }}
                            />

                            <div className="text-danger">
                                {this.state.errors.about}
                            </div>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label className="mr-2">Enter Categories: </Form.Label>
                            <ChipInput className="text-white-color label-alpha-white" classes={{label:"label-alpha-white", input:"text-white-color"}}
                                value={this.state.categories}
                                onAdd={(chip) => this.addCategory(chip)}
                                onDelete={(chip, index) => this.removeCategory(chip, index)}
                                label="Enter categories for comic"
                            />
                        </Form.Group>
                        <Form.Group>
                            <Form.File
                                label="Images"
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
            createComic: createComic,
        },
        dispatch
    );

const mapStateToProps = (state) => {
    return {
        userId: state.auth.userId,
        profileId: state.profile.id,
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ComicModal);
