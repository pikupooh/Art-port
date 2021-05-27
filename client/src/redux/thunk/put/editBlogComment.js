import { EDIT_BLOG_COMMENT } from "../../actions/actionTypes";

function editBlogComment(commentId, message) {
    const token = localStorage.getItem("token");
    return (dispatch) => {
        fetch(`/api/comment/${commentId}`, {
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
                console.log(response);
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
