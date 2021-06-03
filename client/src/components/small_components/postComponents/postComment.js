import { Image, Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { ReplyFill } from 'react-bootstrap-icons'
import { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import deletePostComment from '../../../redux/thunk/delete/deletePostComment'
import PostCommentEditForm from './postCommentEditForm'
import PostCommentReplyForm from './postCommentReplyForm'
import PostDataCommentReplies from './postDataCommentReplies'
class PostComment extends Component{

    constructor(props){
        super(props)
        this.state = {
            isReply: false,
            replyToUser: null,
            showReplies: false,
            isEdit: false
        }
    }

    openReplyForm = (username) => {
        
        this.setState({
            isReply: true,
            replyToUser: username,
            isEdit: false
        })
    }

    closeReplyForm = () => {
        this.setState({
            isReply: false,
            replyToUser: null
        })
    }

    openEditForm = () => {
        this.setState({
            isReply: false,
            isEdit: true
        })
    }

    closeEditForm = () => {
        this.setState({
            isEdit: false,
        })
    }

    toggleShowReplies = () => {
        this.setState({
            showReplies: !this.state.showReplies
        })
    }


    deleteComment = () => {
        this.props.deletePostComment(this.props.comment.id)
    }
    
    render(){
        return(
            <div className = "m-2">
                 <Row>
                    <Link to = {'/user/' + this.props.comment.user.userId}>
                        <Col xs = {2}>
                            <Image src = {this.props.comment.user.profilePhoto.link} roundedCircle className = "comment_profile_photo"></Image>
                        </Col>
                    </Link>
                    <Col>
                        <Row>
                            
                             <Link to = {'/user/' + this.props.comment.user.userId}>
                               <p className="username">
                                {this.props.comment.user.username}
                                </p>
                                 </Link>  
                        </Row>
                   
                        <Row>
                        <p className= "post_comment_content my-1">
                        {this.props.comment.content}
                        </p>
                        </Row>
                        <Row id = "blog_comments_options">
                            <div className = "blog_comment_reply" onClick = {() => this.openReplyForm(this.props.comment.user.username)}>
                                <ReplyFill></ReplyFill> 
                                Reply
                            </div>
                            <p className= "showhidereplies_button" style= {{marginBottom :"0px"}}>
                            <ShowHideRepliesButton showReplies = {this.state.showReplies} 
                                                    toggleShowReplies = {this.toggleShowReplies} 
                                                    repliesLength = {this.props.comment.replies.length}
                                                   /> </p>
                                                   
                            <p >
                            <EditButton id = {this.props.comment.user.userId}
                                        userId = {this.props.userId}
                                        openEditForm = {this.openEditForm}
                                        isEdit = {this.state.isEdit}
                                   
                            />
                            <DeleteButton id = {this.props.comment.user.userId}
                                          userId = {this.props.userId}
                                          deleteComment = {this.deleteComment}
                                           
                            />
                           </p>
                        </Row>
                    </Col>
                </Row>
                <PostDataCommentReplies replies = {this.props.comment.replies}
                                        openReplyForm = {this.openReplyForm}
                                        showReplies = {this.state.showReplies}
                                        closeReplyForm = {this.closeReplyForm}
                />

                <PostCommentReplyForm isReply = {this.state.isReply} 
                                    replyToUser = {this.state.replyToUser}
                                    parentCommentId = {this.props.comment.id}
                                    closeReplyForm = {this.closeReplyForm}
                />

                <PostCommentEditForm isEdit = {this.state.isEdit} 
                                     commentId = {this.props.comment.id}
                                     closeEditForm = {this.closeEditForm}
                                      />
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        userId: state.auth.userId,
    }
}

const mapDispatchToProps = (dispatch) => bindActionCreators(
    {
        deletePostComment
    },
    dispatch
)

export default connect(mapStateToProps, mapDispatchToProps)(PostComment)

function ShowHideRepliesButton(props) {

    if(props.repliesLength === 0){
        return(
            <div>
                
            </div>
        )
    }

    if(props.showReplies === true){
        return(
            <p onClick = {() => props.toggleShowReplies()} className = "ml-3">
                Hide Replies
            </p>
        )
    }
    else{
        return(
            <p onClick = {() => props.toggleShowReplies()} className = "ml-3">
                Show Replies ({props.repliesLength})
            </p>
        )
    }
}

function DeleteButton(props){
    if(props.id === props.userId){
        return(
            <i className = "material-icons text-center ml-2" id = "delete_button"onClick = {props.deleteComment}>
                delete
            </i>
        )
    }
    else{
        return(
            <div>
                
            </div>
        )
    }
}

function EditButton(props){
    if(props.id === props.userId && props.isEdit === false){
        return(
            <i className = "material-icons text-center ml-2" id = "edit_button" onClick = {props.openEditForm}>
                edit
            </i>
        )
    }
    else if(props.isEdit === true){
        return(
            <span>
                
            </span>
        )
    }
    else{
        return(
            <div>

            </div>
        )
    }
}