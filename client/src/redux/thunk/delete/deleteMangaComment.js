import { DELETE_MANGA_COMMENT } from "../../actions/actionTypes";

function deleteMangaComment(commentId) {
    const token = localStorage.getItem("token");

    return (dispatch) => {
        fetch(`/api/comment/${commentId}`, {
            method: "DELETE",
            headers: {
                Authorization: token,
            },
            body: "",
        })
            .then((response) => {
                if (response.ok) {
                    dispatch({
                        type: DELETE_MANGA_COMMENT,
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
