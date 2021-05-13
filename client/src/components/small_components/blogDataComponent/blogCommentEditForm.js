import { Component } from "react";
import { Form, Button, Row, Col } from 'react-bootstrap'
import { connect } from 'react-redux'
import { bindActionCreators } from "redux";

import editBlogComment from "../../../redux/thunk/put/editBlogComment";

class BlogCommentEditForm extends Component{
    
    constructor(props){
        super(props)
        this.state = {
            messege: ''
        }
    }

    handleOnChange = (event) => {
        this.setState({
            messege: event.target.value
        })
    }

    edit = () => {
        if(this.state.messege !== ''){
            this.props.editBlogComment(this.props.commentId, this.state.messege)
            this.setState({
                messege: ''
            })
        }
        this.props.closeEditForm();
    }

    render(){
        if(this.props.isEdit === true){
            return(
                <Col className = "mt-2">
                    <Form>
                        <Form.Group>
                            <Form.Control as="textarea" rows = {1} 
                                        placeholder = "Enter edited commment here" 
                                        onChange = {this.handleOnChange} 
                                        value = {this.state.messege}>
                            </Form.Control>
                            <Row>
                                <Col className = "comment_button" >
                                    <Button className = "btn-sm" onClick = {this.edit}>
                                        Edit
                                    </Button>
                                </Col>
                                <Col >
                                    
                                </Col>
                            </Row>
                        </Form.Group>
                    </Form>
                </Col>
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
    editBlogComment: editBlogComment
}, dispatch)

export default connect(null, mapDispatchToProps)(BlogCommentEditForm)