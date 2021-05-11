import { LIKE_POST } from "../../actions/actionTypes";

function postPostLike(user, postId) {
    const token = localStorage.getItem("token");

    return (dispatch) => {
        fetch(`http://localhost:8080/post/${postId}/likes`, {
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
