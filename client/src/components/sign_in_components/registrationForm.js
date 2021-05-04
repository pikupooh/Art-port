import React,{Component} from "react";
import {Form ,Button} from 'react-bootstrap';

class RegistrationForm extends React.Component {
render(){
    return(
       
        <Form className="login_form">
            <h2 className ="heading">Welcome to Artport</h2>
        <Form.Group>
            <Form.Label className="label">Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>

        <Form.Group>
            <Form.Label className="label" >Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Form.Group>
            <Form.Label className="label">Confirm Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Form.Group>
            <Form.Label className="label">Contact No:</Form.Label>
            <Form.Control type="Contact No" placeholder="Contact No" />
        </Form.Group>
        <Form.Group>
            <Form.Label className="label">First Name</Form.Label>
            <Form.Control type="First Name" placeholder="First Name" />
        </Form.Group>
        <Form.Group>
            <Form.Label className="label">Last Name</Form.Label>
            <Form.Control type="Last Name" placeholder="Last Name" />
        </Form.Group>
        <Form.Group>
            <Form.Label className="label">D.O.B</Form.Label>
            <Form.Control type="D.O.B" placeholder="D.O.B" />
        </Form.Group>



        <Button variant="primary" type="submit">
            Register
        </Button>
    </Form>
    )

}

} 

export default RegistrationForm