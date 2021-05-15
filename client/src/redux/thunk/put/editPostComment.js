import { EDIT_POST_COMMENT } from "../../actions/actionTypes";

function editPostComment(commentId, message) {
    
    const token = localStorage.getItem("token");
    return (dispatch) => {
        fetch(`http://localhost:8080/comment/${commentId}`, {
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
                    type: EDIT_POST_COMMENT,
                    payload: {
                        response
                    }
                })
            })
            .catch((err) => console.error(err));
    };
}

export default editPostComment;