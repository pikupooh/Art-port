import { EDIT_COMIC_REPLY } from "../../actions/actionTypes";
import { customfetch } from "../customFetch";

function editComicReply(replyId, message) {
    const token = localStorage.getItem("token");
    
    return (dispatch) => {
        customfetch(`/api/reply/${replyId}`, {
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
                    type: EDIT_COMIC_REPLY,
                    payload: { response },
                });
            })
            .catch((err) => console.error(err));
    };
}

export default editComicReply;
