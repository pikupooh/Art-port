import { fetchMangaListAction } from "../actions/fetchMangaListAction";
import { setLoadingAction } from "../actions/loadingActions";

function fetchMangaList() {
    return (dispatch) => {
        dispatch(setLoadingAction(true, "Loading..."));
        fetch("/api/manga")
            .then((res) => res.json())
            .then((res) => {
                if (res.error) {
                    throw res.error;
                }
                dispatch(fetchMangaListAction(res));
                dispatch(setLoadingAction(false, "Loading..."));
                return res;
            })
            .catch((error) => {
                
            });
    };
}

export default fetchMangaList;
