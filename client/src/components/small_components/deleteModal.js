import React from 'react'
import { Modal, Button } from 'react-bootstrap'
import { connect } from 'react-redux'

import { CANCEL_DELETE_MODAL } from '../../redux/actions/actionTypes'


class DeleteModal extends React.Component{

    onShow = () => {
        this.setState({
            show: true
        })
    }

    onHide = () => {
        this.props.cancel()
    }

    delete = () => {
        this.props.delete()
    }

    render(){
        return(
            <Modal show = {this.props.show} onHide = {this.onHide} centered>
                <p id = "delete_modal_text">Delete {this.props.message}?</p>
                <div className = "delete_modal_buttons_container">
                    <Button id = "white_button" className = "mr-2" onClick = {this.onHide}>Cancel</Button>
                    <Button id = "delete_chapter_button" onClick = {this.delete}>Delete</Button>  
                </div>     
            </Modal>
        )
    }
}

const mapStateToProps = (state) => {
    return{
        show: state.deleteModal.show,
        message: state.deleteModal.message,
        delete: state.deleteModal.delete,
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        cancel: () => dispatch({
            type: CANCEL_DELETE_MODAL,
        })
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(DeleteModal)