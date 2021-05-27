import { deleteUserBlogAction } from "../actions/fetchProfileDataAction";
import { setLoadingAction } from "../actions/loadingActions";

function deleteUserBlog(blogId) {
    const token = localStorage.getItem("token");
    console.log(blogId);
    return (dispatch) => {
        dispatch(setLoadingAction(true, "Loading..."));

        fetch(`/api/blog/${blogId}`, {
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
