import { deleteUserComicAction } from "../actions/fetchProfileDataAction";
import { setLoadingAction } from "../actions/loadingActions";
import { customfetch } from "./customFetch";

function deleteUserComic(userId, comicId) {
    const token = localStorage.getItem("token");
    console.log(comicId);
    return (dispatch) => {
        dispatch(setLoadingAction(true, "Loading..."));

        customfetch(`/api/users/${userId}/manga/${comicId}`, {
            method: "DELETE",
            headers: {
                Authorization: token,
            },
            body: "",
        })
            .then((response) => {
                if (response.ok) {
                    dispatch(setLoadingAction(false, "Loading..."));

                    dispatch(deleteUserComicAction(comicId));
                }
            })
            .catch((error) => console.log(error));
    };
}

export default deleteUserComic;
