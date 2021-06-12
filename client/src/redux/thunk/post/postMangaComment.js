import { POST_MANGA_COMMENT } from "../../actions/actionTypes";
import { customfetch } from "../customFetch";

function postMangaComment(mangaId, message) {
    const token = localStorage.getItem("token");
    return (dispatch) => {
        customfetch(`/api/manga/${mangaId}/comment`, {
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
                    type: POST_MANGA_COMMENT,
                    payload: response,
                });
            })
            .catch((err) => console.error(err));
    };
}

export default postMangaComment;
