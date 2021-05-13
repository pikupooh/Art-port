import { DELETE_BLOG_COMMENT } from '../../actions/actionTypes'

function deleteBlogComment(commentId){

    const token = localStorage.getItem("token")
    console.log(commentId);
    return dispatch => {
        fetch(`http://localhost:8080/comment/${commentId}`, {
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
                        type: DELETE_BLOG_COMMENT,
                        payload: {
                            commentId
                        }
                    }
                );
            }
        })
        .catch((error) => console.log(error));
    }
}

export default deleteBlogComment