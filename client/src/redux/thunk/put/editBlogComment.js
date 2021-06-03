import { EDIT_BLOG_COMMENT } from "../../actions/actionTypes";
import { customfetch } from "../customFetch";

function editBlogComment(commentId, message) {
    const token = localStorage.getItem("token");
    return (dispatch) => {
        customfetch(`/api/comment/${commentId}`, {
            method: "PUT",
            body: JSON.stringify({
                content: message,
            }),
            headers: {
                "Content-Type": "application/json",
                Authorization: token,
            },
        })
            .then((response) => {
                if (response.ok) {
                    return response.json();
                }
            })
            .then((response) => {
                
                dispatch({
                    type: EDIT_BLOG_COMMENT,
                    payload: {
                        response,
                    },
                });
            })
            .catch((err) => console.error(err));
    };
}

export default editBlogComment;
