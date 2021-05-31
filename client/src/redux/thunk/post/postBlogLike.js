import { LIKE_BLOG } from "../../actions/actionTypes";
import { customfetch } from "../customFetch";

function postBlogLike(user, blogId) {
    const token = localStorage.getItem("token");
    console.log(user, blogId);

    return (dispatch) => {
        customfetch(`/api/blog/${blogId}/likes`, {
            method: "PUT",
            headers: {
                Authorization: token,
            },
        })
            .then((response) => {
                console.log(response);
                if (response.ok) {
                    return response.text();
                }
            })
            .then((response) => {
                dispatch({
                    type: LIKE_BLOG,
                    payload: {
                        user,
                    },
                });
                return response;
            })
            .catch((err) => console.error(err));
    };
}

export default postBlogLike;
