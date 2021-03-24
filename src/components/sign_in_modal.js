import { Button, Form } from "react-bootstrap";
import React from "react"
import Modal from "react-bootstrap/Modal"
import SignInForm from './sign_in_form'

class SignInModal extends React.Component{
    render(){
      // TODO: Better ui
        return(
            <Modal show = {this.props.show} onHide = {this.props.handleClose} >
              <Modal.Body>
                {/* <div className = 'ms-auto'>
                  <Button className = 'btn-danger btn-sm' onClick = {() => this.props.handleClose()}>
                    X
                  </Button>
                </div> */}
                <h3 className = 'text-center'>Sign in</h3>
                <SignInForm />
                <a href='/' className='alert-link'> Forgot password</a>
                <div className = 'mt-3'>Don't have an account? Register</div>
              </Modal.Body>
            </Modal>
        );
    }
}

export default SignInModal