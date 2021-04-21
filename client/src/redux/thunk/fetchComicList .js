import { fetchComicListAction } from '../actions/fetchComicListAction'

function fetchComicList() {
    
    return dispatch => {
        fetch('dummy/comics.json')
        .then(res => res.json())
        .then(res => {
            if(res.error) {
                throw(res.error);
            }
            dispatch(fetchComicListAction(res))
            return res;
        })
        .catch(error => {
            console.log(error)
        })
    }
}

export default fetchComicList;