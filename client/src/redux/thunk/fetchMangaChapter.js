import { fetchMangaChapterAction } from '../actions/fetchMangaChapterAction'

function fetchMangaChapter(id) {

    return dispatch => {
        fetch('http://localhost:8080/chapter/' + id)
        .then(res =>  res.json())
        .then(res => {
            if(res.error) {
                throw(res.error);
            }
            dispatch(fetchMangaChapterAction(res))   
            return res;
        })
        .catch(error => {
            console.log(error)
        })
    }
}

export default fetchMangaChapter;