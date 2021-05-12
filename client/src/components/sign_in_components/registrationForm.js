import React from "react";
import { Form, Button } from "react-bootstrap";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import registerUser from "../../redux/thunk/registerUser";

class RegistrationForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            input: {},
            errors: {},
            value: "",
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

    handleFileChange(e) {
        let input = this.state.input;
        input[e.target.name] = e.target.files[0];
        this.setState({
            input,
            value: e.target.value,
        });
    }

    handleSubmit(e) {
        e.preventDefault();

        if (this.validate()) {
            console.log(this.state);

            let imageFormData = new FormData();
            imageFormData.append(
                "files",
                this.fileInput.current.files[0],
                this.fileInput.current.files[0].name
            );

            this.props.registerUser(this.state.input, imageFormData);

            let input = {};
            input["username"] = "";
            input["firstName"] = "";
            input["lastName"] = "";
            input["email"] = "";
            input["password"] = "";
            input["confirm_password"] = "";
            input["dob"] = "";
            input["files"] = null;
            this.setState({ input: input, errors: {}, value: "" });
            console.log(this.state);

            alert("Registered.");
        }
    }

    validate() {
        let input = this.state.input;
        let errors = {};
        let isValid = true;

        if (!input["username"]) {
            isValid = false;
            errors["username"] = "Please enter your username.";
        }

        if (!input["firstName"]) {
            isValid = false;
            errors["firstName"] = "Please enter your first name.";
        }

        if (!input["lastName"]) {
            isValid = false;
            errors["lastName"] = "Please enter your last name.";
        }
        if (!input["email"]) {
            isValid = false;
            errors["email"] = "Please enter your email Address.";
        }

        if (!input["dob"]) {
            isValid = false;
            errors["dob"] = "Please enter your date of birth.";
        }
        if (!input["password"]) {
            isValid = false;
            errors["password"] = "Please enter your password.";
        }

        if (!input["confirm_password"]) {
            isValid = false;
            errors["confirm_password"] = "Please confirm your password.";
        }

        if (
            typeof input["password"] !== "undefined" &&
            typeof input["confirm_password"] !== "undefined"
        ) {
            if (input["password"] !== input["confirm_password"]) {
                isValid = false;
                errors["password"] = "Passwords don't match.";
            }
        }
        if (this.fileInput.current.files.length === 0) {
            isValid = false;
            errors["files"] = "Please upload a profile picture.";
        }
        this.setState({
            errors: errors,
        });

        return isValid;
    }
    render() {
        return (
            <Form className="login_form" onSubmit={(e) => this.handleSubmit(e)}>
                <h2 className="heading">Welcome to Artport</h2>
                <Form.Group controlId="email">
                    <Form.Label className="label">Email address</Form.Label>
                    <Form.Control
                        type="email"
                        placeholder="Enter email"
                        name="email"
                        value={this.state.input.email}
                        onChange={(e) => {
                            this.handleChange(e);
                        }}
                    />
                    <div className="text-danger">{this.state.errors.email}</div>
                </Form.Group>

                <Form.Group controlId="username">
                    <Form.Label className="label">Username</Form.Label>
                    <Form.Control
                        type="username"
                        placeholder="username"
                        name="username"
                        value={this.state.input.username}
                        onChange={(e) => {
                            this.handleChange(e);
                        }}
                    />
                    <div className="text-danger">
                        {this.state.errors.username}
                    </div>
                </Form.Group>

                <Form.Group controlId="password">
                    <Form.Label className="label">Password</Form.Label>
                    <Form.Control
                        type="password"
                        placeholder="Password"
                        name="password"
                        value={this.state.input.password}
                        onChange={(e) => {
                            this.handleChange(e);
                        }}
                    />
                    <div className="text-danger">
                        {this.state.errors.password}
                    </div>
                </Form.Group>

                <Form.Group controlId="conf-password">
                    <Form.Label className="label">Confirm Password</Form.Label>
                    <Form.Control
                        type="password"
                        placeholder="Password"
                        name="confirm_password"
                        value={this.state.input.confirm_password}
                        onChange={(e) => {
                            this.handleChange(e);
                        }}
                    />
                    <div className="text-danger">
                        {this.state.errors.confirm_password}
                    </div>
                </Form.Group>

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
                <Form.Group controlId="date">
                    <Form.Label className="label">Date of Birth</Form.Label>
                    <Form.Control
                        type="date"
                        placeholder="Date of Birth"
                        name="dob"
                        value={this.state.input.dob}
                        onChange={(e) => {
                            this.handleChange(e);
                        }}
                    />
                    <div className="text-danger">{this.state.errors.dob}</div>
                </Form.Group>
                <Form.Group>
                    <Form.Label className="label">
                        Upload Profile Picture
                    </Form.Label>
                    <Form.File name="files" ref={this.fileInput} />
                    <div className="text-danger">{this.state.errors.files}</div>
                </Form.Group>
                <Button variant="primary" type="submit">
                    Register
                </Button>
            </Form>
        );
    }
}

const mapDispatchToProps = (dispatch) =>
    bindActionCreators(
        {
            registerUser: registerUser,
        },
        dispatch
    );

export default connect(null, mapDispatchToProps)(RegistrationForm);
