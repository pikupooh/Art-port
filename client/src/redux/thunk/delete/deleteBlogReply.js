import { DELETE_BLOG_REPLY } from "../../actions/actionTypes";
import { customfetch } from "../customFetch";

function deleteBlogReply(replyId, commentId) {
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
                        type: DELETE_BLOG_REPLY,
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

export default deleteBlogReply;
