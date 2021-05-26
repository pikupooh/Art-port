import React from "react";
import { Star, StarFill } from "react-bootstrap-icons";
import { Modal, Button, Row, Col } from "react-bootstrap";
import { connect } from "react-redux";
import { bindActionCreators } from 'redux'
import ReactStars from "react-rating-stars-component";

import rate from "../../redux/thunk/put/rate"

class RateModal extends React.Component{

    constructor(props){
        super(props)
        var stars = []
        for(var index=0 ; index < 5 ; index++){
            stars.push(<Star className = "submit_rate_star mx-1"/>)
        }
        this.state = {
            stars: stars,
            active: 0
        }
        
    }

    handleOnChange = (index) => {
        var stars = []
        for(var i=0;  i<=index ; i++){
            stars.push(<StarFill className = "submit_rate_star mx-1"/>)
        }
        for(var i = index+1 ; i<5 ; i++){
            stars.push(<Star className = "submit_rate_star mx-1"/>)
        }

        this.setState({
            stars: stars,
            active: index+1
        })
    }

    resetStars = () => {
        var stars = [];
        for(var index=0 ; index < 5 ; index++){
            stars.push(<Star className = "submit_rate_star mx-1"/>)
        }
        this.setState({
            stars: stars,
            active: 0
        })
    }

    submitRating = () => {
        
        if(this.state.active === 0){
            return;
        }
        console.log(this.state.active, this.props.id);
        this.props.rate(this.state.active, this.props.id)
        this.props.onHide()
    }

    render(){
        return(
            <Modal show = {this.props.show} onHide = { () => {
                                                        this.resetStars();
                                                        this.props.onHide();
                                                        }} centered = {true}>
                <Modal.Body>
                    <h4 className = "mb-3">
                        Rate the manga
                    </h4>
                    <Row>
                        <Col xs = {12} sm = {9}>
                            {this.state.stars.map((component, index) => 
                                <span key = {index} onClick = {() => this.handleOnChange(index)}>
                                    {component}
                                </span>
                            )}
                        </Col>
                        <Col>
                            <Button onClick = {() => this.submitRating()}>
                                Submit
                            </Button>
                        </Col>
                    </Row>
                </Modal.Body>
            </Modal>
        )
    }
}


const mapDispatchToProps = (dispatch) =>
    bindActionCreators(
        {
            showSignInModal: () => dispatch({ type: "SHOW_MODAL" }),
            rate,
        },
        dispatch
    );

export default connect(null , mapDispatchToProps)(RateModal)