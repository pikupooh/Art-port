import React from "react";
import { Form, Button,Alert } from "react-bootstrap";
import { connect } from "react-redux";
import { bindActionCreators } from "redux"
import { withRouter} from "react-router-dom"

import resetPassword from "../../redux/thunk/resetPassword"
import { RESET_PASSWORD_STATE } from "../../redux/actions/actionTypes";

class ForgotPassword extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            input: {},
            errors: {},
        };
    }

    componentDidUpdate(){
        if(this.props.resetPasswordState === "success"){
            window.setTimeout(() => {this.props.history.push("/")}, 5000)
        }
        
    }

    reloadPage = () => {
        this.setState({
            errors: {}
        }, this.props.resetPasswordStateToDefault)
    }

    handleChange(e) {

        if(this.props.resetPasswordState !== ""){
            return;
        }

        let input = this.state.input;
        input[e.target.name] = e.target.value;

        this.setState({
            input,
        });
    }

    validate() {
        let input = this.state.input;
        let errors = {};
        let isValid = true;

        if (!input["email"]) {
            isValid = false;
            errors["email"] = "Please enter your email Address.";
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

        this.setState({
            errors,
        });

        return isValid;
    }

    handleSubmit(e) {
        e.preventDefault();

        if (this.validate() && this.props.resetPasswordState === "") {
      
            this.props.resetPassword(this.state.input['email'], this.state.input['password'])
        }

     
    }

    render() {
        if(this.props.resetPasswordState !== "success"){
            return (
                <div>
                    {this.props.resetPasswordState === "failed" && 
                        <Alert variant="danger" className = "reset_password_failed_alert">
                        Please enter a valid Email address
                        <div className="d-flex justify-content-end">
                            <Button onClick={this.reloadPage} variant="success">
                                Try Again
                            </Button>
                        </div>
                        </Alert>
                    }

                    <Form className="login_form" onSubmit={(e) => this.handleSubmit(e)}>
                        <h2 className="heading">Forgot Password</h2>
                        <Form.Group controlId="email">
                            <Form.Label className="label">Email address</Form.Label>
                            <Form.Control
                                type="email"
                                placeholder="Enter email"
                                name="email"
                                value={this.state.input['email']}
                                onChange={(e) => {
                                    this.handleChange(e);
                                }}
                            />
        
                            <div className="text-danger">{this.state.error}</div>
                        </Form.Group>
                        <Form.Group controlId="password">
                                <Form.Label className="label">Password</Form.Label>
                                <Form.Control
                                    type="password"
                                    placeholder="Password"
                                    name="password"
                                    value={this.state.input['password']}
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
                                    value={this.state.input['confirm_password']}
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
                </div>
            );
        }

        if(this.props.resetPasswordState === "success"){
            return(
                <div className = "reset_password_failed_success">
                    <div>
                        Verification mail sent to your mail. Please confirm.
                    </div>
                    <div>
                        Redirecting to home page... 
                    </div>
                </div>
            )
        }
        
    }
}

const mapStateToProps = (state) => {
    return {
        resetPasswordState: state.auth.resetPasswordState
    };
};

const mapDispatchToProps = (dispatch) =>
    bindActionCreators(
        {
            resetPassword,
            resetPasswordStateToDefault: () => 
                dispatch({
                    type: RESET_PASSWORD_STATE,
                })
        },
        dispatch
    );

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ForgotPassword));
