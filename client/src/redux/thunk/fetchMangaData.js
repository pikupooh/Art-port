import { fetchMangaDataAction } from '../actions/fetchMangaDataAction'

function fetchMangaData(mangaId) {
    return dispatch => {
        fetch('http://localhost:3000/dummy/manga.json')
        .then(res =>  res.json())
        .then(res => {
            if(res.error) {
                throw(res.error);
            }
            
            res = res.filter(manga => manga.mangaid === mangaId)
            dispatch(fetchMangaDataAction(res[0]))
         
            return res;
        })
        .catch(error => {
            console.log(error)
        })
    }
}

export default fetchMangaData;