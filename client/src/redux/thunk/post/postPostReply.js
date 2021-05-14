import { POST_POST_REPLY } from "../../actions/actionTypes";

function postPostReply(parentCommentId, message, replyTo) {    

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
                    type: POST_POST_REPLY,
                    payload: {
                        response,
                        parentCommentId
                    }
                })
            })
            .catch((err) => console.error(err));
    };
}

export default postPostReply;
