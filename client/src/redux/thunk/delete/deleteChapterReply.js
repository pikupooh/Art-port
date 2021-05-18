import { DELETE_CHAPTER_REPLY } from '../../actions/actionTypes'

function deleteChapterReply(replyId, commentId){

    const token = localStorage.getItem("token")

    return dispatch => {
        fetch(`http://localhost:8080/reply/${replyId}`, {
            method: 'DELETE',
            headers: {
                Authorization: token,
            },
            body: ""
        })
        .then(response => {
            if(response.ok){
                dispatch(
                    {
                        type: DELETE_CHAPTER_REPLY,
                        payload: {
                            replyId,
                            commentId
                        }
                    }
                );
            }
        })
        .catch((error) => console.log(error));
    }
}

export default deleteChapterReply