import { deleteUserMangaAction } from "../actions/fetchProfileDataAction";
import { setLoadingAction } from "../actions/loadingActions";
import { customfetch } from "./customFetch";

function deleteUserManga(userId, mangaId) {
    const token = localStorage.getItem("token");
 
    return (dispatch) => {
        dispatch(setLoadingAction(true, "Loading..."));

        customfetch(`/api/users/${userId}/manga/${mangaId}`, {
            method: "DELETE",
            headers: {
                Authorization: token,
            },
            body: "",
        })
            .then((response) => {
                if (response.ok) {
                    dispatch(deleteUserMangaAction(mangaId));
                    dispatch(setLoadingAction(false, "Loading..."));
                }
            })
            .catch((error) => console.log(error));
    };
}

export default deleteUserManga;
