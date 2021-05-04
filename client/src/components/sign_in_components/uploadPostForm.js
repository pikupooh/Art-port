import React,{Component} from "react";
import {Form ,Button,FormGroup} from 'react-bootstrap';

class UploadPostForm extends React.Component {
render(){
    return(
       
      <Form className ="login_form"> 
      <h2 className="heading">Upload Your Post</h2>
        <FormGroup>
              <Form.Label className="label">Describe your post?</Form.Label>
              <Form.Control type="your file" placeholder="Description before uploading" /><br />
              <Form.File></Form.File>
        </FormGroup>
        <Form.Group>
            <Form.Label className="label" >Email</Form.Label>
            <Form.Control type="email" placeholder="Email" />
        </Form.Group>
        <Form.Group>
            <Form.Label className="label"> Username</Form.Label>
            <Form.Control type="user" placeholder="Username" />
        </Form.Group>
        <Form.Group>
            <Form.Label className="label"> Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Form.Group>
            <Form.Label className="label">About</Form.Label>
            <Form.Control type="about" placeholder="Tell us about yourself?" /> <br />
            <Form.Label className= "label">Set profile picture</Form.Label>
            <Form.File></Form.File>
        </Form.Group>
        <Button>Upload</Button>
      </Form>
    )

}

} 

export default UploadPostForm