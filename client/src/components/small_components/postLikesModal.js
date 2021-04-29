import { Modal } from 'react-bootstrap'

import PostLikedUser from './postLikedUser'

function PostLikesModal(props){
    if(!props.likes.length === 0){
        return(
            <div>
            </div>
        )
    }
    else{
        return(
            <Modal show = {props.show} onHide = {props.hideLikesModal} centered>
                <Modal.Body>
                    {props.likes.map((like) => 
                        <PostLikedUser like = {like} key = {like.UserId}/>
                    )}
                </Modal.Body>
            </Modal>
        )
    }
}

export default PostLikesModal