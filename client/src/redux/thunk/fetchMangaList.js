import { fetchMangaListAction } from '../actions/fetchMangaListAction'
import { setLoadingAction } from "../actions/loadingActions";

function fetchMangaList() {
    
    return dispatch => {
        dispatch(setLoadingAction(true, "Loading..."));
        fetch('http://localhost:8080/manga')
        .then(res => res.json())
        .then(res => {
            if(res.error) {
                throw(res.error);
            }
            dispatch(fetchMangaListAction(res))
            dispatch(setLoadingAction(false, "Loading..."));
            return res;
        })
        .catch(error => {
            console.log(error)
        })
    }
}

export default fetchMangaList;