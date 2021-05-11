import React from 'react'
import { Form, Col, Row, Button } from 'react-bootstrap'
import { connect } from 'react-redux'
import postBlogComment from "../../../redux/thunk/post/postBlogComment"
import { bindActionCreators } from 'redux'

import trimUser from "../../helpers/trimUser"

class BlogCommentSection extends React.Component{

    comment = () => {
        const token = localStorage.getItem('token')

        if(token === null){
            this.props.showSignInModal()
            return;
        }

        this.props.postBlogComment(trimUser(this.props.user), this.props.blogId)
    }

    render(){
        return(
            <div className = "my-4 blog_page_comment_section">
                <Form>
                    <Form.Group>
                        <Form.Control as="textarea" rows = {3} placeholder = "Enter comment here">
                        </Form.Control>
                        <Row>
                            <Col className = "comment_button" >
                                <Button className = "btn-sm" id = "blog_data_comment_btn" onClick = {this.comment}>
                                    Comment
                                </Button>
                            </Col>
                            <Col >
                                
                            </Col>
                        </Row>
                    </Form.Group>
                </Form>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) =>  bindActionCreators(
    {
        showSignInModal: () => dispatch({type: 'SHOW_MODAL'}),
        postBlogComment: postBlogComment
    },
    dispatch
);

const mapStateToProps = (state) => {
    return {
        userId: state.auth.userId,
        comment: state.blogData.comment,
        user: state.user,
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(BlogCommentSection)