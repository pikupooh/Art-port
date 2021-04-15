import { Button, Form } from "react-bootstrap";
import React from "react"
import Modal from "react-bootstrap/Modal"
import SignInForm from './sign_in_form'
import RegisterForm from './register_form'

class SignInModal extends React.Component{
    render(){
      // TODO: Better ui
      console.log(this.props.isRegisterForm);
      if(this.props.isRegisterForm === false){
        
        return(
            <Modal show = {this.props.show} onHide ={this.props.handleModalClose}>
              <Modal.Body>
                <h3 className = 'text-center'>Sign in</h3>
                <SignInForm />
                <div className = 'mt-2 '>
                  <a  className='alert-link'> Forgot password</a>
                </div>
                <div className = 'mt-3 text-center' >
                  <a onClick =  {() => this.props.Sign_in_to_register()} >
                    Don't have an account? Register
                  </a>
                </div>
              </Modal.Body>
            </Modal>
        );
      }
      else{
        return(
          <Modal show = {this.props.show} onHide = {this.props.handleModalClose} >
            <Modal.Body>
              <h3 className = 'text-center'>Register to Art Port</h3>
              <RegisterForm />
              <div className = 'mt-2'>
                <a href='/' className='alert-link'> Forgot password</a>
              </div>
              <div className = 'mt-3 text-center' onClick = {() => {this.props.Register_to_sign_in()}}>Already have an account. Sign In</div>
            </Modal.Body>
          </Modal>
        )
      }
    }
}

export default SignInModal