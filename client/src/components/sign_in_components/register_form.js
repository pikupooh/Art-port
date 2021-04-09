import React from 'react'
import {Button, Form} from 'react-bootstrap'

class RegisterForm extends React.Component{
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

                <Form.Group>
                    <Form.Label>Confirm Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>


                <Button variant="primary" type="submit">
                    Register
                </Button>
            </Form>
        );
    }
}

export default RegisterForm