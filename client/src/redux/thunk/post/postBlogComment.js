import { POST_COMMENT } from "../../actions/actionTypes";

function postBlogComment(user, blogId, message) {
    const token = localStorage.getItem("token");

    return (dispatch) => {
        fetch(`http://localhost:8080/blog/${blogId}/comment`, {
            method: "POST",
            body: {
                content: message
            },
            headers: {
                Authorization: token,
            },
        })
            .then((response) => {
                console.log(response);
                if (response.ok) {
                    dispatch({
                        type: POST_COMMENT,
                        payload: {
                            user,
                            message
                        },
                    });
                }
            })
            .catch((err) => console.error(err));
    };
}

export default postBlogComment;
