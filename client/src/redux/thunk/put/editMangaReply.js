import { EDIT_MANGA_REPLY } from "../../actions/actionTypes";
import { customfetch } from "../customFetch";

function editMangaReply(replyId, message) {
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
                    type: EDIT_MANGA_REPLY,
                    payload: { response },
                });
            })
            .catch((err) => console.error(err));
    };
}

export default editMangaReply;
