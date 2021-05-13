import { POST_BLOG_REPLY } from "../../actions/actionTypes";

function postBlogReply(parentCommentId, message, replyTo) {    

    const token = localStorage.getItem("token");

    return (dispatch) => {
        fetch(`http://localhost:8080/comment/${parentCommentId}/reply`, {
            method: "POST",
            body: JSON.stringify({
                replyTo,
                content: message
            }),
            headers: {
                "Content-Type": "application/json",
                Authorization: token,
            },
        })
            .then((response) => {
                if (response.ok) {
                    return response.json()
                }
            })
            .then((response) => {
                dispatch({
                    type: POST_BLOG_REPLY,
                    payload: {
                        response,
                        parentCommentId
                    }
                })
            })
            .catch((err) => console.error(err));
    };
}

export default postBlogReply;
