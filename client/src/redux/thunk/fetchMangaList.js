import { fetchMangaListAction } from '../actions/fetchMangaListAction'

function fetchMangaList() {
    
    return dispatch => {
        fetch('http://localhost:8080/manga')
        .then(res => res.json())
        .then(res => {
            if(res.error) {
                throw(res.error);
            }
            dispatch(fetchMangaListAction(res))
            return res;
        })
        .catch(error => {
            console.log(error)
        })
    }
}

export default fetchMangaList;