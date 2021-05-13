import { deleteUserPostAction } from '../actions/fetchProfileDataAction'

function deleteUserPost(userId, postId){

    const token = localStorage.getItem("token")
    console.log(postId);
    return dispatch => {
        fetch(`http://localhost:8080/users/${userId}/posts/${postId}`, {
            method: 'DELETE',
            headers: {
                Authorization: token,
            },
            body: ""
        })
        .then(response => {
            if(response.ok){
                dispatch(deleteUserPostAction(postId));
            }
        })
        .catch((error) => console.log(error));
    }
}

export default deleteUserPost