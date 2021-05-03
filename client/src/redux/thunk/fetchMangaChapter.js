import { fetchMangaChapterAction } from '../actions/fetchMangaChapterAction'

function fetchMangaChapter(id) {

    return dispatch => {
        fetch('http://localhost:3000/dummy2/chapters.json')
        .then(res =>  res.json())
        .then(res => {
            if(res.error) {
                throw(res.error);
            }
            res = res.filter((mangaChapter) => mangaChapter.id === id)
            dispatch(fetchMangaChapterAction(res[0]))   
            return res;
        })
        .catch(error => {
            console.log(error)
        })
    }
}

export default fetchMangaChapter;