import { LIKE_POST } from "../../actions/actionTypes";
import { customfetch } from "../customFetch";

function postPostLike(user, postId) {
    const token = localStorage.getItem("token");

    return (dispatch) => {
        customfetch(`/api/post/${postId}/likes`, {
            method: "PUT",
            headers: {
                Authorization: token,
            },
        })
            .then((response) => {
                if (response.ok) {
                    dispatch({
                        type: LIKE_POST,
                        payload: {
                            user,
                        },
                    });
                }
            })
            .catch((err) => console.error(err));
    };
}

export default postPostLike;
