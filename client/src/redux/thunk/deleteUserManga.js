import { deleteUserMangaAction } from "../actions/fetchProfileDataAction";
import { setLoadingAction } from "../actions/loadingActions";

function deleteUserManga(userId, mangaId) {
    const token = localStorage.getItem("token");
    console.log(mangaId);
    return (dispatch) => {
        dispatch(setLoadingAction(true, "Loading..."));

        fetch(`/api/users/${userId}/manga/${mangaId}`, {
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
