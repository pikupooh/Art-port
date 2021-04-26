import { fetchMangaListAction } from '../actions/fetchMangaListAction'

function fetchMangaList() {
    
    return dispatch => {
        fetch('dummy/manga.json')
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