import { EDIT_BLOG_REPLY } from "../../actions/actionTypes";

function editBlogReply(replyId, message) {
    
    const token = localStorage.getItem("token");
    console.log(replyId, message);
    return (dispatch) => {
        fetch(`http://localhost:8080/reply/${replyId}`, {
            method: "PUT",
            body: JSON.stringify({
                content: message
            }),
            headers: {
                "Content-Type": "application/json",
                Authorization: token,
            },
        })
            .then((response) => {
                if (response.ok) {
                    return response.json()
                }
            })
            .then((response) => {
                console.log(response);
                dispatch({
                    type: EDIT_BLOG_REPLY,
                    payload: {response}
                })
            })
            .catch((err) => console.error(err));
    };
}

export default editBlogReply;