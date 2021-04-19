import React from 'react';
import { connect } from 'react-redux';

import { signInUserAction } from '../../redux/actions/logActions';
import {Form, Button} from 'react-bootstrap'

class SignInForm extends React.Component {

    handleSignIn = (event) => {
        event.preventDefault();
        this.props.signInUser();
    }
    render(){
        return(
            <Form>
                <Form.Group>
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>

                <Form.Group>
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>
    
                <Button variant="primary" type="submit" onClick = {this.handleSignIn}>
                    Sign In
                </Button>
            </Form>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        signInUser: () => {dispatch(signInUserAction())},
    }
}
export default connect(null, mapDispatchToProps)(SignInForm)