import React from "react";
import { Modal, Form, Button } from "react-bootstrap";
import { categories } from "../../../shared/categories";
import { createPost } from "../../../redux/thunk/fetchPostData";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import ChipInput from "material-ui-chip-input"
import {extensions} from "./../../../shared/categories"

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

    removeTag = (tag, i) => {
        const newTags = [...this.state.tags];
        newTags.splice(i, 1);
        this.setState({
            ...this.state,
            tags: newTags
         });
    };

    addTag = (val) => {
        this.setState({
            ...this.state,
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
          
            let postFormData = Object.assign({}, this.state.input);
            postFormData["tags"] = this.state.tags;
            postFormData["category"] = this.state.categories;
            

            this.setState({ tags: [], input: {}, errors: {}, categories: [] });

            this.props.handleModalClose();
            document.getElementById("post-form").reset();

            /*this.props.createPost(
                this.props.userId,
                postFormData,
                imageFormData,
                this.props.profileId
            );*/
        }
    }

    validate() {
        let input = this.state.input;
        let errors = {};
        let isValid = true;

        if (!input["title"]) {
            isValid = false;
            errors["title"] = "Please enter a title to your post.";
        }
        
        else if (input["title"].length > 30) {
            isValid = false;
            errors["title"] = "Title of blog should be within 30 characters.";
        }
         else if (!input["description"]) {
            isValid = false;
            errors["description"] = "Please add a description.";
        } else if (input["description"].length > 100) {
            isValid = false;
            errors["description"] = "Length of description should be within 100 characters.";
        }

        if (!this.state.categories.length) {
            isValid = false;
            errors["categories"] = "Please select some categories.";
        }
        if (this.fileInput.current.files.length === 0) {
            isValid = false;
            errors["files"] = "Please upload some images.";
        }
        else
        {
            
            let allImg= true
            for (let i = 0; i < this.fileInput.current.files.length; i++) {
                let name=this.fileInput.current.files[i].name
                let extension =name.split(".")
                if(extension.length === 1 || extension.length === 0 || !extensions.has(extension[extension.length-1])){
                    allImg = false
                    break
                }
            }
            if(allImg === false)  {
                isValid = false;
                errors["files"] = "Please upload images only.";
            }      
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
                    <h3 className = "text-center"> Create your post</h3>
                    <Form id="post-form" onSubmit={(e) => this.handleSubmit(e)} onKeyDown={(e) => {
                        if(e.key==="Enter"){
                          
                            e.preventDefault();
                        }
                    }}>
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
                                        <option key={i} value={category}>
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
                            <p className="mr-2">Tags </p>
                            <ChipInput className="text-white-color label-alpha-white upload_modal_tags_input" classes={{label:"label-alpha-white", input:"text-white-color"}}
                                value={this.state.tags}
                                onAdd={(chip) => this.addTag(chip)}
                                onDelete={(chip, index) => this.removeTag(chip, index)}
                                placeholder = "Enter tags for post here"
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
                        <Button variant="primary" type="submit" id = "upload_button">
                            Upload
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
