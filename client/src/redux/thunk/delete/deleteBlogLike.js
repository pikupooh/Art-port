import { UNLIKE_BLOG } from "../../actions/actionTypes";

function deleteBlogLike(userId, blogId) {
    const token = localStorage.getItem("token");

    return (dispatch) => {
        fetch(`/api/blog/${blogId}/likes`, {
            method: "DELETE",
            headers: {
                Authorization: token,
            },
            body: "",
        })
            .then((response) => {
                if (response.ok) {
                    dispatch({
                        type: UNLIKE_BLOG,
                        payload: {
                            userId,
                        },
                    });
                }
            })
            .catch((error) => console.log(error));
    };
}

export default deleteBlogLike;
