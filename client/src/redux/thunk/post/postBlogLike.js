import { LIKE_BLOG } from "../../actions/actionTypes"

function postBlogLike(user, blogId){

    const token = localStorage.getItem("token")

    return dispatch => {
        fetch('localhost:8080/blog/' + blogId + '/likes', {
            method: 'PUT',
            headers: {
                "Content-Type": "application/json",
                Authorization: token,
            }
        })
        .then(response => {
            console.log(response);
            if(response.ok){
                dispatch({
                    type: LIKE_BLOG,
                    payload: {
                        user
                    }
                })
            }
        })
    }
}

export default postBlogLike