import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'

import fetchUserDataAction from "../../redux/thunk/fetchUserData";
import signInUser  from '../../redux/thunk/loging';
import {Form, Button} from 'react-bootstrap'

class SignInForm extends React.Component {

    handleSignIn = () => {
        this.props.fetchUserData();
        this.props.signIn();
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

const mapDispatchToProps = (dispatch) => bindActionCreators(
    {
      fetchUserData: fetchUserDataAction,
      signIn: signInUser,
    },
    dispatch
  );


export default connect(null, mapDispatchToProps)(SignInForm)