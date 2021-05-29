import { Component } from "react";
import { Form, Button, Row, Col,Container } from 'react-bootstrap'
import { connect } from 'react-redux'
import { bindActionCreators } from "redux";

import editComicComment from "../../../../redux/thunk/put/editComicComment";

class MangaCommentEditForm extends Component{
    
    constructor(props){
        super(props)
        this.state = {
            message: ''
        }
    }

    handleOnChange = (event) => {
        this.setState({
            message: event.target.value
        })
    }

    edit = () => {
        if(this.state.message !== ''){
            this.props.editComicComment(this.props.commentId, this.state.message)
            this.setState({
                message: ''
            })
        }
        this.props.closeEditForm();
    }

    render(){
        if(this.props.isEdit === true){
            return(
                <Container style={{maxWidth:"1000px"}}>
                 <div className = "reply_on_comment">
                        <Form>
                            <Form.Group>
                                <Form.Control as="textarea" rows = {1} 
                                            placeholder = "Enter edited commment here" 
                                            onChange = {this.handleOnChange} 
                                            value = {this.state.message}
                                            style = {{borderRadius:"10px"}}>
                                </Form.Control>
                                <Row>
                                    <Col className = "comment_button" >
                                        <Button className = "btn-sm my-1" onClick = {() => this.edit()}>
                                            Edit
                                        </Button>
                                        <Button className= "btn-sm my-1 mx-1"  onClick = {this.props.closeEditForm}>
                                            Cancel
                                        </Button>
                                    </Col>
                                </Row>
                            </Form.Group>
                        </Form>
                    </div>
                    </Container>
            )
        }
        else{
            return(
                <div>

                </div>
            )
        }
    }
}

const mapDispatchToProps = (dispatch) => bindActionCreators({
    editComicComment: editComicComment
}, dispatch)

export default connect(null, mapDispatchToProps)(MangaCommentEditForm)