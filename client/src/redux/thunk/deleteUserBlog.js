import { deleteUserBlogAction } from '../actions/fetchProfileDataAction'

function deleteUserBlog(blogId){

    const token = localStorage.getItem("token")
    console.log(blogId);
    return dispatch => {
        fetch(`http://localhost:8080/blog/${blogId}`, {
            method: 'DELETE',
            headers: {
                Authorization: token,
            },
            body: ""
        })
        .then(response => {
            if(response.ok){
                dispatch(deleteUserBlogAction(blogId));
            }
        })
        .catch((error) => console.log(error));
    }
}

export default deleteUserBlog