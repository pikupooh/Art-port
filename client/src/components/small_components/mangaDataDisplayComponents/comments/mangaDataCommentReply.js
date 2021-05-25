import { Component } from 'react'
import { Row, Col, Image } from 'react-bootstrap'
import {ReplyFill } from 'react-bootstrap-icons'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import MangaCommentEditReplyForm from "./mangaCommentEditReplyForm"
import deleteMangaReply from "../../../../redux/thunk/delete/deleteMangaReply"

class MangaDataCommentsReply extends Component{

    constructor(props){
        super(props)
        this.state = {
            isEdit: false
        }
    }

    openEditReplyForm = () => {
        this.props.closeReplyForm()
        this.setState({
            isEdit: true
        })
    }

    closeEditReplyForm = () => {
        this.setState({
            isEdit: false,
        })
    }

    deleteReply = () => {
       this.props.deleteMangaReply(this.props.reply.id, this.props.reply.comment);
    }

    render(){
        return(    
             <div className = "ml-2">
                <div className = "ml-2">
                        <Row >
                       
                        <Link to = {'/user/' + this.props.reply.user.userid}>
                                <Col xs = {2}>
                                    <Image src = {this.props.reply.user.profilePhoto.link} roundedCircle className = "comment_profile_photo"></Image>
                                </Col>
                            </Link>
                             <p className="replies">
                            <Col>
                            <Link to = {'/user/' + this.props.reply.user.userId}>
                                <Row>
                                    <div >
                                        <span className = "user_name" >{this.props.reply.user.username} &nbsp;</span>
                                        replying to <span className = "user_name" >  @{this.props.reply.replyTo}</span>
                                    </div>
                                </Row>
                            </Link>
                                <Row>
                                    {this.props.reply.content}
                                </Row>
                                
                            </Col>
                            </p>
                            
                        </Row>
                        <Row className="reply_button">
                                    <div className = "blog_comment_reply" onClick = {() => this.props.openReplyForm(this.props.reply.user.username)}>
                                        <ReplyFill></ReplyFill> 
                                        Reply
                                    </div>
                                    <EditButton id = {this.props.reply.user.userId}
                                                userId = {this.props.userId}
                                                openEditReplyForm = {this.openEditReplyForm}
                                                closeEditReplyForm = {this.closeEditReplyForm}
                                                isEdit = {this.state.isEdit}
                                    />
                                    <DeleteButton id = {this.props.reply.user.userId}
                                                userId = {this.props.userId}
                                                deleteReply = {this.deleteReply}
                                    />
                                </Row>
                        <MangaCommentEditReplyForm isEdit = {this.state.isEdit}
                                                closeEditReplyForm = {this.closeEditReplyForm}
                                                replyId = {this.props.reply.id}
                        />
                    </div>
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
        deleteMangaReply
    },
    dispatch
)

export default connect(mapStateToProps, mapDispatchToProps)(MangaDataCommentsReply)

function DeleteButton(props){
    if(props.id === props.userId){
        return(
            <i className = "material-icons text-center ml-2" id = "delete_button"onClick = {props.deleteReply}>
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
            <i className = "material-icons text-center ml-2"  id = "edit_button"onClick = {props.openEditReplyForm}>
                edit
            </i>
        )
    }
    else if(props.isEdit === true){
        return(
            <p onClick = {props.closeEditReplyForm} className = "ml-2">
                
            </p>
        )
    }
    else{
        return(
            <div>

            </div>
        )
    }
}