import React from "react";
import { Form, Button } from "react-bootstrap";

class ForgotPassword extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            email: "",
            error: "",
        };
    }

    handleChange(e) {
        this.setState({
            email: e.target.value,
        });
    }

    validate() {
        let isValid = true;
        let error = "";
        if (!this.state.email) {
            isValid = false;
            error = "Please enter your email.";
        }

        this.setState({
            error,
        });

        return isValid;
    }

    handleSubmit(e) {
        e.preventDefault();

        if (this.validate()) {
      
            this.setState({
                email: "",
                error: "",
            });
        }

     
    }

    render() {
        return (
            <Form className="login_form" onSubmit={(e) => this.handleSubmit(e)}>
                <h2 className="heading">Forgot Password</h2>
                <Form.Group controlId="email">
                    <Form.Label className="label">Email address</Form.Label>
                    <Form.Control
                        type="email"
                        placeholder="Enter email"
                        name="email"
                        value={this.state.email}
                        onChange={(e) => {
                            this.handleChange(e);
                        }}
                    />

                    <div className="text-danger">{this.state.error}</div>
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        );
    }
}

export default ForgotPassword;
