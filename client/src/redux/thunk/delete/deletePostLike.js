import { UNLIKE_POST } from "../../actions/actionTypes";

function deletePostLike(userId, postId) {
    const token = localStorage.getItem("token");
    return (dispatch) => {
        fetch(`/api/post/${postId}/likes`, {
            method: "DELETE",
            headers: {
                Authorization: token,
            },
            body: "",
        })
            .then((response) => {
                if (response.ok) {
                    dispatch({
                        type: UNLIKE_POST,
                        payload: {
                            userId,
                        },
                    });
                }
            })
            .catch((error) => console.log(error));
    };
}

export default deletePostLike;
