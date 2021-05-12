import React from "react";
import { Form, Button } from "react-bootstrap";

class ResetPassword extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            password: "",
            confirm_password: "",
            errors: {},
        };
    }

    handleChange(e) {
        this.setState({
            [e.target.name]: e.target.value,
        });
    }

    handleSubmit(e) {
        e.preventDefault();

        if (this.validate()) {
            console.log(this.state);

            this.setState({
                password: "",
                confirm_password: "",
                errors: {},
            });
        }

        console.log(this.state);
    }

    validate() {
        let isValid = true;
        let errors = {};
        if (!this.state.password) {
            isValid = false;
            errors["password"] = "Please enter your password.";
        }

        if (!this.state.confirm_password) {
            isValid = false;
            errors["confirm_password"] = "Please confirm your password.";
        }

        if (
            typeof this.state.password !== "undefined" &&
            typeof this.state.confirm_password !== "undefined"
        ) {
            if (this.state.password != this.state.confirm_password) {
                isValid = false;
                errors["password"] = "Passwords don't match.";
            }
        }

        this.setState({
            errors: errors,
        });

        return isValid;
    }

    render() {
        return (
            <Form
                className="login_form"
                onSubmit={(e) => {
                    this.handleSubmit(e);
                }}
            >
                <h2 className="heading">Reset Password</h2>
                <Form.Group controlId="password">
                    <Form.Label className="label">Password</Form.Label>
                    <Form.Control
                        type="password"
                        placeholder="Password"
                        name="password"
                        value={this.state.password}
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
                        value={this.state.confirm_password}
                        onChange={(e) => {
                            this.handleChange(e);
                        }}
                    />
                    <div className="text-danger">
                        {this.state.errors.confirm_password}
                    </div>
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        );
    }
}

export default ResetPassword;
