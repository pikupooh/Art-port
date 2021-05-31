import { deleteUserPostAction } from "../actions/fetchProfileDataAction";
import { setLoadingAction } from "../actions/loadingActions";
import { customfetch } from "./customFetch";

function deleteUserPost(userId, postId) {
    const token = localStorage.getItem("token");
    console.log(postId);
    return (dispatch) => {
        dispatch(setLoadingAction(true, "Loading..."));

        customfetch(`/api/users/${userId}/posts/${postId}`, {
            method: "DELETE",
            headers: {
                Authorization: token,
            },
            body: "",
        })
            .then((response) => {
                if (response.ok) {
                    dispatch(setLoadingAction(false, "Loading..."));

                    dispatch(deleteUserPostAction(postId));
                }
            })
            .catch((error) => console.log(error));
    };
}

export default deleteUserPost;
