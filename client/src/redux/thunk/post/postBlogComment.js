import { POST_BLOG_COMMENT } from "../../actions/actionTypes";

function postBlogComment(blogId, message) {
    
    const token = localStorage.getItem("token");

    return (dispatch) => {
        fetch(`http://localhost:8080/blog/${blogId}/comment`, {
            method: "POST",
            body: JSON.stringify({
                content: message
            }),
            headers: {
                "Content-Type": "application/json",
                Authorization: token,
            },
        })
            .then((response) => {
                console.log(response);
                if (response.ok) {
                    return response.json()
                }
            })
            .then((response) => {
                console.log(response);
                dispatch({
                    type: POST_BLOG_COMMENT,
                    payload: response
                })
            })
            .catch((err) => console.error(err));
    };
}

export default postBlogComment;
