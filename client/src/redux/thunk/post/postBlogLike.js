import { LIKE_BLOG } from "../../actions/actionTypes";

function postBlogLike(user, blogId) {
    const token = localStorage.getItem("token");
    console.log(user, blogId);

    return (dispatch) => {
        fetch(`http://localhost:8080/blog/${blogId}/likes`, {
            method: "PUT",
            headers: {
                Authorization: token,
            },
        })
            .then((response) => {
                console.log(response);
                if (response.ok) {
                    return response.text()
                }
            })
            .then((response) => {
                dispatch({
                    type: LIKE_BLOG,
                    payload: {
                        user,
                    },
                });
                return response
            })
            .catch((err) => console.error(err));
    };
}

export default postBlogLike;
