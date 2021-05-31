import { DELETE_COMIC_REPLY } from "../../actions/actionTypes";
import { customfetch } from "../customFetch";

function deleteComicReply(replyId, commentId) {
    const token = localStorage.getItem("token");

    return (dispatch) => {
        customfetch(`/api/reply/${replyId}`, {
            method: "DELETE",
            headers: {
                Authorization: token,
            },
            body: "",
        })
            .then((response) => {
                if (response.ok) {
                    dispatch({
                        type: DELETE_COMIC_REPLY,
                        payload: {
                            replyId,
                            commentId,
                        },
                    });
                }
            })
            .catch((error) => console.log(error));
    };
}

export default deleteComicReply;
