import React from 'react'
import {Form, Button} from 'react-bootstrap'

class SignInForm extends React.Component {
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
    
                <Button variant="primary" type="submit">
                    Sign In
                </Button>
            </Form>
        )
    }
}

export default SignInForm