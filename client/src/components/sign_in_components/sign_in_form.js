import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import signInUser from "../../redux/thunk/loging";
import { Form, Button } from "react-bootstrap";

class SignInForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            password: "",
        };
    }

    handleChange = (event) => {
        this.setState({
            ...this.state,
            [event.target.name]: event.target.value,
        });
    };

    handleSignIn = (e) => {
        e.preventDefault();
        this.props.signIn(this.state.username, this.state.password);
        this.props.handleModalClose();
        setInterval(() => window.location.reload(), 400)
    };
    render() {
        return (
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
                </Form.Group>

                <Button variant="primary" type="submit">
                    Sign In
                </Button>
            </Form>
        );
    }
}

const mapDispatchToProps = (dispatch) =>
    bindActionCreators(
        {
            signIn: signInUser,
        },
        dispatch
    );

export default connect(null, mapDispatchToProps)(SignInForm);
