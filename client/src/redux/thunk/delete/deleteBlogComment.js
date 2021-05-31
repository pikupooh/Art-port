import { DELETE_BLOG_COMMENT } from "../../actions/actionTypes";
import { customfetch } from "../customFetch";

function deleteBlogComment(commentId) {
    const token = localStorage.getItem("token");
    console.log(commentId);
    return (dispatch) => {
        customfetch(`/api/comment/${commentId}`, {
            method: "DELETE",
            headers: {
                Authorization: token,
            },
            body: "",
        })
            .then((response) => {
                if (response.ok) {
                    dispatch({
                        type: DELETE_BLOG_COMMENT,
                        payload: {
                            commentId,
                        },
                    });
                }
            })
            .catch((error) => console.log(error));
    };
}

export default deleteBlogComment;
