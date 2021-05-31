import React from 'react'
import { Form, Col, Row, Button } from 'react-bootstrap'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import postPostComment from "../../../redux/thunk/post/postPostComment"

class PostCommentSection extends React.Component{

    constructor(props){
        super(props)
        this.state = {
            message: '',
        }
    }

    handleOnChange = (event) => {
        this.setState({
            message: event.target.value
        })
    }

    comment = () => {
        const token = localStorage.getItem('token')
        
        console.log('post comment');
        if(token === null){
            this.props.showSignInModal()
            return;
        }

        if(this.state.message !== ''){
            this.props.postPostComment(this.props.postId, this.state.message)
            this.setState({
                message: ''
            })
        }
    }

    render(){
        return(
            <div className = "my-4 post_comment_textarea">
                <Form>
                    <Form.Group>
                        <Form.Control as="textarea" rows = {3} 
                                    placeholder = "Enter comment here"
                                    onChange = {this.handleOnChange}
                                    value = {this.state.message}
                                    >
                        </Form.Control>
                        <Row>
                            <Col className = "add_background_color">
                                <Button className = "btn-sm mt-2" id = "comment_button" onClick = {this.comment}>
                                    Comment
                                </Button>
                            </Col>
                            <Col className = "add_background_color">
                                
                            </Col>
                        </Row>
                    </Form.Group>
                </Form>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        userId: state.auth.userId,
        comments: state.post.comments,
        user: state.user,
    };
};

const mapDispatchToProps = (dispatch) => bindActionCreators(
    {
        showSignInModal: () => dispatch({type: 'SHOW_MODAL'}),
        postPostComment
    }, dispatch
)

export default connect(mapStateToProps , mapDispatchToProps)(PostCommentSection)