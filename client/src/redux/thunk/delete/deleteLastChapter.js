import { DELETE_MANGA_LAST_CHAPTER } from "../../actions/actionTypes";
import {customfetch} from "../customFetch"

function deleteLastChapter(mangaId) {

    const token = localStorage.getItem("token");
   

    return (dispatch) => {
        customfetch(`/api/mangas/${mangaId}`, {
            method: "DELETE",
            headers: {
                Authorization: token,
            },
            body: "",
        })
            .then((response) => {
                if (response.ok) {
                    dispatch({
                        type: DELETE_MANGA_LAST_CHAPTER,
                    });
                }
            })
            .catch((error) => console.log(error));
    };
}

export default deleteLastChapter;
