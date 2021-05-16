import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { withRouter } from "react-router-dom";

import signInUser from "../../redux/thunk/loging";
import { fetchUserProfileData } from "../../redux/thunk/fetchProfileData"
import { Form, Button, Alert } from "react-bootstrap";

class SignInForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            password: "",
            errors: {},
            loginError: "",
        };
    }

    handleChange = (event) => {
        this.setState({
            ...this.state,
            [event.target.name]: event.target.value,
        });
    };

    validate() {
        let errors = {};
        let isValid = true;

        if (this.state.username === "") {
            isValid = false;
            errors["username"] = "Please enter your username.";
        }

        if (this.state.password === "") {
            isValid = false;
            errors["password"] = "Please enter your password.";
        }

        this.setState({
            errors: errors,
        });

        return isValid;
    }

    resetForm = () => {
        this.setState({ username: "", password: "", errors: {} });
    };
    handleSignIn = (e) => {
        e.preventDefault();
        if (this.validate()) {
            this.props.signIn(this.state.username, this.state.password);
            console.log("yo");
            setTimeout(() => {
                console.log("so");
                if (this.props.isAuthenticated) {
                    console.log(this.props.isAuthenticated);
                    this.props.handleModalClose();
                    this.props.fetchUserProfile(this.props.id);
                    return this.props.history.push("/");
                } else {
                    this.resetForm();
                    this.setState({
                        loginError: "Invalid username or password",
                    });
                }
                console.log(this.state);
            }, 1000);
            // setTimeout(() => window.location.reload(), 4000);
        }
    };

    render() {
        const { loginError } = this.state;
        return (
            <div>
                {loginError && <Alert variant="danger">{loginError}</Alert>}
                <Form onSubmit={this.handleSignIn}>
                    <Form.Group>
                        <Form.Label>Username</Form.Label>
                        <Form.Control
                            type="text"
                            value={this.state.username}
                            name="username"
                            onChange={this.handleChange}
                            placeholder="Enter Username"
                        />

                        <div className="text-danger">
                            {this.state.errors.username}
                        </div>
                    </Form.Group>

                    <Form.Group>
                        <Form.Label>Password</Form.Label>
                        <Form.Control
                            type="password"
                            value={this.state.password}
                            name="password"
                            onChange={this.handleChange}
                            placeholder="Password"
                        />

                        <div className="text-danger">
                            {this.state.errors.password}
                        </div>
                    </Form.Group>

                    <Button variant="primary" type="submit">
                        Sign In
                    </Button>
                </Form>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        isAuthenticated: state.auth.isAuthenticated,
        id: state.auth.userId
    };
};

const mapDispatchToProps = (dispatch) =>
    bindActionCreators(
        {
            signIn: signInUser,
            fetchUserProfile: fetchUserProfileData
        },
        dispatch
    );

export default withRouter(
    connect(mapStateToProps, mapDispatchToProps)(SignInForm)
);
