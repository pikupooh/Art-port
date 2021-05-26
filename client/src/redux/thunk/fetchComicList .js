import { fetchComicListAction } from '../actions/fetchComicListAction'
import { setLoadingAction } from "../actions/loadingActions";

function fetchComicList() {
    
    return dispatch => {
        dispatch(setLoadingAction(true, "Loading..."));

        fetch('http://localhost:8080/comic')
        .then(res => res.json())
        .then(res => {
            if(res.error) {
                throw(res.error);
            }
            dispatch(fetchComicListAction(res))
            dispatch(setLoadingAction(false, "Loading..."));

            return res;
        })
        .catch(error => {
            console.log(error)
        })
    }
}

export default fetchComicList;