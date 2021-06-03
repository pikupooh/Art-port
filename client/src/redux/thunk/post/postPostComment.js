import { POST_POST_COMMENT } from "../../actions/actionTypes";
import { customfetch } from "../customFetch";

function postPostComment(postId, message) {
    const token = localStorage.getItem("token");

  
    return (dispatch) => {
        customfetch(`/api/post/${postId}/comment`, {
            method: "POST",
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
                    type: POST_POST_COMMENT,
                    payload: response,
                });
            })
            .catch((err) => console.error(err));
    };
}

export default postPostComment;
