import { Button } from "react-bootstrap";
import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from 'redux'

import RateModal from './rateModal.js'



class RateButton extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            show: false
        }
    }

    handleModalOpen = () => {
        this.setState({
            show: true
        })
    }

    handleModalClose = () => {
        this.setState({
            show: false
        })
    }

    handleOnRate = () => {
        if (this.props.userId === null) {
            this.props.showSignInModal();
            return;
        }

        this.handleModalOpen();

    }

    render(){
        if(this.props.rate === 0){
            return(
                <div className = "rating_button">
                    <RateModal show = {this.state.show} id = {this.props.id} onHide = {this.handleModalClose}/>
                    <Button onClick = {this.handleOnRate}>
                        <div  className = "rate_button">
                            {/* <Star className = "mr-1 rate_button_star"/> */}
                            Rate
                        </div>
                    </Button>
                </div>
            )
        }

        return(
            <div className = "rating_button_text">
                 You rated {this.props.rate}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return{
        userId: state.auth.userId, 
    }
}

const mapDispatchToProps = (dispatch) =>
    bindActionCreators(
        {
            showSignInModal: () => dispatch({ type: "SHOW_MODAL" }),
        },
        dispatch
    );

export default connect(mapStateToProps, mapDispatchToProps)(RateButton);

