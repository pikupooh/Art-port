import { DELETE_POST_COMMENT } from "../../actions/actionTypes";

function deletePostComment(commentId) {
    const token = localStorage.getItem("token");
    console.log(commentId);
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
                        type: DELETE_POST_COMMENT,
                        payload: {
                            commentId,
                        },
                    });
                }
            })
            .catch((error) => console.log(error));
    };
}

export default deletePostComment;
