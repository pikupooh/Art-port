import { POST_MANGA_REPLY } from "../../actions/actionTypes";

function postMangaReply(parentCommentId, message, replyTo) {
    const token = localStorage.getItem("token");

    return (dispatch) => {
        fetch(`/api/comment/${parentCommentId}/reply`, {
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
                    type: POST_MANGA_REPLY,
                    payload: {
                        response,
                        parentCommentId,
                    },
                });
            })
            .catch((err) => console.error(err));
    };
}

export default postMangaReply;
