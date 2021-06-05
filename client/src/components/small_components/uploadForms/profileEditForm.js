import React from "react";
import { Form, Button, Modal } from "react-bootstrap";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import editProfile from "../../../redux/thunk/editProfile";

class ProfileEditForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            input: {},
            errors: {},
            loaded: false
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
            

            let postFormData = Object.assign({}, this.state.input);
            
            this.props.handleModalClose();
            this.props.editProfile(postFormData, imageFormData, this.props.user.userId);
            document.getElementById("profile_edit_form").reset();
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

    componentDidUpdate(){
        if(this.state.loaded === false && (this.state.input.firstName !== this.props.user.firstName || 
            this.state.input.lastName !== this.props.user.lastName ||
            this.state.input.about !== this.props.user.about)){
            this.setState({
                input: {
                    firstName: this.props.user.firstName,
                    lastName: this.props.user.lastName,
                    about: this.props.user.about,
                },
                loaded: true
            })
        }
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
                    <h3 className="text-center">Edit your profile</h3>

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
                            Update
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
            editProfile,
        },
        dispatch
    );

export default connect(null, mapDispatchToProps)(ProfileEditForm)
