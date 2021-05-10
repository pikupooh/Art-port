import React from "react"
import Modal from "react-bootstrap/Modal"
import { connect } from "react-redux"

import SignInForm from './sign_in_form'
import RegisterForm from './register_form'

import { Button } from 'react-bootstrap'

class SignInModal extends React.Component{

  constructor(props) {
    super(props)
    this.state = {
      isRegisterForm: false,
    }
  }

  Sign_in_to_register = () => {
    this.setState({
      isRegisterForm: true
    });
  }

  Register_to_sign_in = () => {
    this.setState({
      isRegisterForm: false
    });
  }

  handleModalClose = () => {
    this.props.hideSignInModal()
  }



    render(){
      // TODO: Better ui
      console.log(this.props);

      if(this.state.isRegisterForm === false){
        
        return(
            <Modal show = {this.props.show} onHide = {this.handleModalClose}>
              <Modal.Body>
                <h3 className = 'text-center'>Sign in</h3>
                <SignInForm handleModalClose = {this.handleModalClose} />
                <div className = 'mt-2 '>
                  <a  className='alert-link' href = '/'> Forgot password</a>
                </div>
                <div className = 'mt-3 text-center' >
                  <Button onClick =  {this.Sign_in_to_register}>
                    Don't have an account? Register
                  </Button>
                </div>
              </Modal.Body>
            </Modal>
        );
      }
      else{
        return(
          <Modal show = {this.props.show} onHide = {() => {
                          setTimeout(() => {this.Register_to_sign_in() }, 250);
                          this.handleModalClose();
                          }} >
            <Modal.Body>
              <h3 className = 'text-center'>Register to Art Port</h3>
              <RegisterForm />
              <div className = 'mt-2'>
                <a href='/' className='alert-link'> Forgot password</a>
              </div>
              <div className = 'mt-3 text-center' onClick = {this.Register_to_sign_in}>Already have an account. Sign In</div>
            </Modal.Body>
          </Modal>
        )
      }
    }
}

const mapStateToProps = (state) => {
  console.log(state.signInModal.show);
  return{
    show: state.signInModal.show
  }
}

const mapDispatchToProps = (dispatch) => {
  return{
    hideSignInModal: () => dispatch({type: 'HIDE_MODAL'}),
    
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(SignInModal)