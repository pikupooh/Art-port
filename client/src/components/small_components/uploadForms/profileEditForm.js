import React from "react";
import { Form, Button, Modal } from "react-bootstrap";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
// import editProfile from "../../redux/thunk/editProfile";

class ProfileEditForm extends React.Component {
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
            imageFormData.append(
                "image",
                this.fileInput.current.files[0],
                this.fileInput.current.files[0].name
            );

            imageFormData.append("firstName", this.state.input.firstName);
            imageFormData.append("lastName", this.state.input.lastName);
            imageFormData.append("about", this.state.input.about);
            
            this.props.handleModalClose();
            document.getElementById("post-form").reset();

            // this.props.editProfile(imageFormData);
        }
    }

    validate() {
        let input = this.state.input;
        let errors = {};
        let isValid = true;

        if (!input["firstName"]) {
            isValid = false;
            errors["firstName"] = "Please enter your first name.";
        }

        if (!input["lastName"]) {
            isValid = false;
            errors["lastName"] = "Please enter your last name.";
        }
        
        if (this.fileInput.current.files.length === 0) {
            isValid = false;
            errors["files"] = "Please upload a profile picture.";
        }

        if (!input["about"]) {
            isValid = false;
            errors["about"] = "Please enter a short description.";
        }

        if (input["about"].length > 150) {
            isValid = false;
            errors["about"] = "Please enter a short description.";
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
                <Form
                    id="profile_edit_form"
                    className="login_form"
                    onSubmit={(e) => this.handleSubmit(e)}
                >
                    <h2 className="heading">Edit your profile</h2>

                    <Form.Group controlId="firstName">
                        <Form.Label className="label">First Name</Form.Label>
                        <Form.Control
                            type="First Name"
                            placeholder="First Name"
                            name="firstName"
                            value={this.state.input.firstName}
                            onChange={(e) => {
                                this.handleChange(e);
                            }}
                        />
                        <div className="text-danger">
                            {this.state.errors.firstName}
                        </div>
                    </Form.Group>
                    <Form.Group controlId="lastName">
                        <Form.Label className="label">Last Name</Form.Label>
                        <Form.Control
                            type="Last Name"
                            placeholder="Last Name"
                            name="lastName"
                            value={this.state.input.lastName}
                            onChange={(e) => {
                                this.handleChange(e);
                            }}
                        />
                        <div className="text-danger">
                            {this.state.errors.lastName}
                        </div>
                    </Form.Group>
 
                    <Form.Group controlId="about">
                        <Form.Label className="label">About</Form.Label>
                        <Form.Control
                            type="About"
                            placeholder="Tell us about yourself"
                            name="about"
                            value={this.state.input.about}
                            onChange={(e) => {
                                this.handleChange(e);
                            }}
                        />
                        <div className="text-danger">
                            {this.state.errors.about}
                        </div>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label className="label">
                            Upload Profile Picture
                        </Form.Label>
                        <Form.File name="files" ref={this.fileInput} />
                        <div className="text-danger">
                            {this.state.errors.files}
                        </div>
                    </Form.Group>
                    <Button variant="primary" type="submit" id = "upload_button">
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
            // editProfile: editProfile,
        },
        dispatch
    );

export default connect(null, mapDispatchToProps)(ProfileEditForm)
