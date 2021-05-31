import { DELETE_COMIC_COMMENT } from "../../actions/actionTypes";
import { customfetch } from "../customFetch";

function deleteMangaComment(commentId) {
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
                        type: DELETE_COMIC_COMMENT,
                        payload: {
                            commentId,
                        },
                    });
                }
            })
            .catch((error) => console.log(error));
    };
}

export default deleteMangaComment;
