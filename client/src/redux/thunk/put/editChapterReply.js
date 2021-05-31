import { EDIT_CHAPTER_REPLY } from "../../actions/actionTypes";
import { customfetch } from "../customFetch";

function editChapterReply(replyId, message) {
    const token = localStorage.getItem("token");
    console.log(replyId, message);
    return (dispatch) => {
        customfetch(`/api/reply/${replyId}`, {
            method: "PUT",
            body: JSON.stringify({
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
                console.log(response);
                dispatch({
                    type: EDIT_CHAPTER_REPLY,
                    payload: { response },
                });
            })
            .catch((err) => console.error(err));
    };
}

export default editChapterReply;
