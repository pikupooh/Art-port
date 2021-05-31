import { DELETE_MANGA_LAST_CHAPTER } from "../../actions/actionTypes";

function deleteLastChapter(mangaId) {

    const token = localStorage.getItem("token");
    console.log(mangaId);

    return (dispatch) => {
        fetch(`/api/mangas/${mangaId}`, {
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
