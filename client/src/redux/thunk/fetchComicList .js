import { fetchComicListAction } from "../actions/fetchComicListAction";
import { setLoadingAction } from "../actions/loadingActions";

function fetchComicList() {
    return (dispatch) => {
        dispatch(setLoadingAction(true, "Loading..."));

        fetch("/api/comic")
            .then((res) => res.json())
            .then((res) => {
                if (res.error) {
                    throw res.error;
                }
                dispatch(fetchComicListAction(res));
                dispatch(setLoadingAction(false, "Loading..."));

                return res;
            })
            .catch((error) => {
                
            });
    };
}

export default fetchComicList;
