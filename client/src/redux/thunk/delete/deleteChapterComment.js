import { DELETE_CHAPTER_COMMENT } from "../../actions/actionTypes";
import { customfetch } from "../customFetch";

function deleteChapterComment(commentId) {
    const token = localStorage.getItem("token");

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
                        type: DELETE_CHAPTER_COMMENT,
                        payload: {
                            commentId,
                        },
                    });
                }
            })
            .catch((error) => console.log(error));
    };
}

export default deleteChapterComment;
