import { UNLIKE_POST } from "../../actions/actionTypes";
import { customfetch } from "../customFetch";

function deletePostLike(userId, postId) {
    const token = localStorage.getItem("token");
    return (dispatch) => {
        customfetch(`/api/post/${postId}/likes`, {
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
