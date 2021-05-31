import { POST_COMIC_REPLY } from "../../actions/actionTypes";
import { customfetch } from "../customFetch";

function postComicReply(parentCommentId, message, replyTo) {
    const token = localStorage.getItem("token");

    return (dispatch) => {
        customfetch(`/api/comment/${parentCommentId}/reply`, {
            method: "POST",
            body: JSON.stringify({
                replyTo,
                content: message,
            }),
            headers: {
                "Content-Type": "application/json",
                Authorization: token,
            },
        })
            .then((response) => {
                if (response.ok) {
                    return response.json();
                }
            })
            .then((response) => {
                dispatch({
                    type: POST_COMIC_REPLY,
                    payload: {
                        response,
                        parentCommentId,
                    },
                });
            })
            .catch((err) => console.error(err));
    };
}

export default postComicReply;
