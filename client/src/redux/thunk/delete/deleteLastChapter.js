import { DELETE_MANGA_LAST_CHAPTER } from "../../actions/actionTypes";
import {customfetch} from "../customFetch"
import {setLoadingAction} from "../../actions/loadingActions"
function deleteLastChapter(mangaId) {

    const token = localStorage.getItem("token");
   

    return (dispatch) => {
        dispatch(setLoadingAction(true, "Loading..."));
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
                    dispatch(setLoadingAction(false, "Loading..."));
                }
            })
            .catch((error) => console.log(error));
    };
}

export default deleteLastChapter;
