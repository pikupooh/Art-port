import { POST_CHAPTER_REPLY } from "../../actions/actionTypes";

function postChapterReply(parentCommentId, message, replyTo) {    

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
                    type: POST_CHAPTER_REPLY,
                    payload: {
                        response,
                        parentCommentId
                    }
                })
            })
            .catch((err) => console.error(err));
    };
}

export default postChapterReply;
