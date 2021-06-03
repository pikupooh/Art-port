import { deleteUserBlogAction } from "../actions/fetchProfileDataAction";
import { setLoadingAction } from "../actions/loadingActions";
import { customfetch } from "./customFetch";

function deleteUserBlog(blogId) {
    const token = localStorage.getItem("token");
    return (dispatch) => {
        dispatch(setLoadingAction(true, "Loading..."));

        customfetch(`/api/blog/${blogId}`, {
            method: "DELETE",
            headers: {
                Authorization: token,
            },
            body: "",
        })
            .then((response) => {
                if (response.ok) {
                    dispatch(deleteUserBlogAction(blogId));
                    dispatch(setLoadingAction(false, "Loading..."));
                }
            })
            .catch((error) => console.log(error));
    };
}

export default deleteUserBlog;
