import React from "react";
import { Form, Button, Alert } from "react-bootstrap";
import { withRouter, Link } from "react-router-dom";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import registerUser from "../../redux/thunk/registerUser";
import { TextCenter } from "react-bootstrap-icons";

class RegistrationForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            input: {},
            errors: {},
        };

        this.fileInput = React.createRef();
    }

    componentDidUpdate() {
        if (
            this.props.isSignedUp &&
            (Object.keys(this.state.errors).length ||
                this.state.input.username !== "")
        ) {
            let input = {};
            input["username"] = "";
            input["firstName"] = "";
            input["lastName"] = "";
            input["email"] = "";
            input["password"] = "";
            input["confirm_password"] = "";
            input["about"] = "";
            input["dob"] = "";
            input["files"] = null;
            this.setState({ input: input, errors: {} });
            document.getElementById("register_form").reset();
        }
        if (this.props.errmess !== "") window.scrollTo(0, 0);
        if (this.props.isSignedUp) {
            window.scrollTo(0, 0);
            setTimeout(() => {
                this.props.history.push("/");
            }, 2000);
        }
    }

    calculateAge = (dob1) => {
        var today = new Date();
        var birthDate = new Date(dob1);
        var age_now = today.getFullYear() - birthDate.getFullYear();
        var m = today.getMonth() - birthDate.getMonth();
        if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
            age_now--;
        }
        console.log(age_now);
        return age_now;
    };

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
            console.log(this.state);

            let imageFormData = new FormData();
            imageFormData.append(
                "image",
                this.fileInput.current.files[0],
                this.fileInput.current.files[0].name
            );

            imageFormData.append("username", this.state.input.username);
            imageFormData.append("firstName", this.state.input.firstName);
            imageFormData.append("lastName", this.state.input.lastName);
            imageFormData.append("password", this.state.input.password);
            imageFormData.append("about", this.state.input.about);
            imageFormData.append("dateOfBirth", this.state.input.dob);
            imageFormData.append("email", this.state.input.email);

            this.props.registerUser(imageFormData);
        }
    }

    validate() {
        let input = this.state.input;
        let errors = {};
        let isValid = true;

        if (!input["username"]) {
            isValid = false;
            errors["username"] = "Please enter your username.";
        } else if (input["username"].length < 3) {
            isValid = false;
            errors["username"] = "Username must be atleast 3 characters long.";
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
        } else {
            let age = this.calculateAge(input["dob"]);
            if (age < 0) errors["dob"] = "Please enter a valid date of birth.";
            else if (age < 16)
                errors["dob"] = "You must be atleast 16 years of age.";
        }
        if (!input["password"]) {
            isValid = false;
            errors["password"] = "Please enter your password.";
        } else if (
            input["password"].length < 8 ||
            input["password"].length > 30
        ) {
            isValid = false;
            errors["password"] =
                "Password length must be between 8 and 30 characters.";
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

        if (!input["about"]) {
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
            <div>
                <Form
                    id="register_form"
                    className="login_form"
                    onSubmit={(e) => this.handleSubmit(e)}
                >
                    <h2 className="heading">Welcome to Artport</h2>
                    {this.props.isSignedUp && (
                        <Alert variant="success">
                            A verification mail has been sent to your registered
                            email.
                        </Alert>
                    )}

                    {this.props.errmess !== "" && (
                        <Alert variant="danger">{this.props.errmess}</Alert>
                    )}

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
                        <div className="text-danger">
                            {this.state.errors.email}
                        </div>
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
                        <Form.Label className="label">
                            Confirm Password
                        </Form.Label>
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
                        <div className="text-danger">
                            {this.state.errors.dob}
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
                    <Button style={{align: TextCenter}} variant="primary" type="submit">
                        Register
                    </Button>
                    <div className="text-center">
                    <Link onClick={this.props.showSignInModal}>
                        Already have an account?
                    </Link>
                    </div>
                </Form>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        isSignedUp: state.register.isSignedUp,
        errmess: state.register.errmess,
    };
};

const mapDispatchToProps = (dispatch) =>
    bindActionCreators(
        {
            registerUser: registerUser,
            showSignInModal: () => dispatch({ type: "SHOW_MODAL" }), 
        },
        dispatch
    );

export default withRouter(
    connect(mapStateToProps, mapDispatchToProps)(RegistrationForm)
);
